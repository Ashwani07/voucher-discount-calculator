# Low-Level Design (LDD)
## VouchWise — Card Comparison & Rewards Calculator

**Status**: Draft v1
**Companion to**: HDD-card-comparison.md

---

## 1. Schema

### 1.1 Core tables (from prior design, unchanged)

```sql
CREATE TABLE cards (
  id              TEXT PRIMARY KEY,
  slug            TEXT NOT NULL UNIQUE, -- bank-prefixed, URL-safe (e.g. 'hdfc-millennia', not 'millennia') — matches the CardExpress convention, checked directly against a live competitor rather than guessed. Distinct from `id`, which stays snake_case for code.
  name            TEXT NOT NULL,
  issuer          TEXT NOT NULL,
  bucket          TEXT NOT NULL CHECK (bucket IN ('entry','mid-tier','high-tier','premier-gated')),
  eligibility_notes TEXT,               -- short, display-ready: the actual condition (income/relationship/city/invite), stated plainly, no filtering logic attached to it — bucket stays a rough tier signal, this is the real gate text
  network         TEXT,
  source_url      TEXT,
  fees_mitc_url    TEXT,              -- fees/charges MITC or KFS document
  rewards_mitc_url TEXT,              -- separate rewards T&C document, if one exists — banks often split these
  last_verified   DATE NOT NULL
);

CREATE TABLE tags (
  id     TEXT PRIMARY KEY,
  label  TEXT NOT NULL
);

CREATE TABLE card_tags (
  card_id TEXT REFERENCES cards(id),
  tag_id  TEXT REFERENCES tags(id),
  PRIMARY KEY (card_id, tag_id)
);

CREATE TABLE reward_rules (
  id              TEXT PRIMARY KEY,
  card_id         TEXT REFERENCES cards(id),
  category        TEXT,
  multiplier      REAL,
  point_value_inr REAL,
  is_estimate     BOOLEAN DEFAULT 1,   -- true unless sourced directly from MITC
  notes           TEXT
);

CREATE TABLE fees (
  card_id                 TEXT PRIMARY KEY REFERENCES cards(id),
  joining_fee             INTEGER,
  annual_fee              INTEGER,
  waiver_spend_threshold  INTEGER,
  waiver_condition        TEXT
);

CREATE TABLE welcome_benefits (
  id                    TEXT PRIMARY KEY,
  card_id               TEXT REFERENCES cards(id),
  description           TEXT,
  estimated_value_inr   INTEGER
);

CREATE TABLE milestones (
  id                    TEXT PRIMARY KEY,
  card_id               TEXT REFERENCES cards(id),
  spend_threshold       INTEGER,
  reward_description    TEXT,
  estimated_value_inr   INTEGER
);
```

### 1.2 New: exclusions

```sql
CREATE TABLE exclusions (
  id            TEXT PRIMARY KEY,
  card_id       TEXT REFERENCES cards(id),
  category      TEXT NOT NULL,   -- see taxonomy below
  reward_factor REAL DEFAULT 0,  -- 0 = fully excluded, 0.5 = half rate, etc.
  notes         TEXT,
  source_clause TEXT             -- e.g. "MITC section 4.2" for auditability
);
```

**Exclusion category taxonomy** (standardize these values so filtering/comparison works):
`rent`, `wallet_load`, `fuel`, `emi_conversion`, `gold_jewellery`,
`government_payment`, `insurance_premium`, `education`, `gambling`,
`cash_advance`, `utility_bill_via_app`

Note: several of these (education, utility) are excluded on SOME cards
and included on others — don't assume, check each card's MITC individually.

### 1.3 New: recurring offers

```sql
CREATE TABLE offers (
  id                TEXT PRIMARY KEY,
  card_id           TEXT REFERENCES cards(id),
  offer_type        TEXT NOT NULL,   -- dining | lounge | movie | forex | other
  condition_type    TEXT NOT NULL,   -- 'flat' | 'with_spend'
  spend_threshold   INTEGER,         -- NULL if condition_type = 'flat'
  frequency         TEXT NOT NULL,   -- 'monthly' | 'quarterly' | 'per_visit' | 'yearly'
  cap_count         INTEGER,         -- e.g. 2 lounge visits/quarter, NULL = uncapped
  value_description TEXT NOT NULL,   -- "25% off, up to ₹500" — kept as text, not forced into a number
  estimated_value_inr INTEGER,       -- optional monetized estimate, nullable
  notes             TEXT
);
```

Examples this shape needs to hold cleanly:
- Lounge access **without spend condition**: `condition_type='flat'`, `frequency='quarterly'`, `cap_count=8`
- Lounge access **gated behind quarterly spend**: `condition_type='with_spend'`, `spend_threshold=50000`, `frequency='quarterly'`, `cap_count=2`
- Monthly dining discount: `offer_type='dining'`, `frequency='monthly'`, `value_description='15% off, capped at ₹300'`
- Monthly movie offer (BOGO): `offer_type='movie'`, `frequency='monthly'`, `value_description='Buy 1 get 1, up to ₹200 off, 1x/month'`

## 2. Calculator Algorithm

```python
def net_value(card, spend_annual, spend_by_category, year: int) -> dict:
    """
    spend_by_category: dict mapping reward_rules.category -> annual spend in that category
    Exclusions are applied BEFORE reward calculation, not after.
    """
    reward_value = 0
    for category, amount in spend_by_category.items():
        exclusion = get_exclusion(card.id, category)
        factor = exclusion.reward_factor if exclusion else 1.0
        rule = get_reward_rule(card.id, category) or get_base_rule(card.id)
        points = (amount * factor / 100) * rule.multiplier
        reward_value += points * rule.point_value_inr

    fee = card.fees.joining_fee if year == 1 else 0
    if spend_annual < card.fees.waiver_spend_threshold:
        fee += card.fees.annual_fee

    welcome = sum(w.estimated_value_inr for w in card.welcome_benefits) if year == 1 else 0
    milestone = sum(m.estimated_value_inr for m in card.milestones if spend_annual >= m.spend_threshold)

    return {
        "reward_value": reward_value,
        "welcome_value": welcome,
        "milestone_value": milestone,
        "fees": fee,
        "net": reward_value + welcome + milestone - fee,
        "has_estimates": any(r.is_estimate for r in card.reward_rules),  # surfaced in UI
    }
```

Key design decision: **exclusions reduce the reward calc directly** rather
than being a separate line item — this mirrors how the bank actually
processes the transaction, and prevents double-counting.

## 3. UI Components

| Component | Responsibility |
|---|---|
| `BucketTagFilter` | Filter card list by bucket + multi-select tags |
| `CardCard` | Summary tile: name, bucket, tags, fee-at-a-glance |
| `CardDetailPage` | Full breakdown: rewards, exclusions, offers, MITC link, `last_verified` badge |
| `ExclusionList` | Renders `exclusions` rows in plain language, not just category codes |
| `OfferList` | Groups `offers` by `offer_type`, shows frequency/cap/condition clearly |
| `SpendCalculator` | 2-card select + spend-by-category inputs, calls `net_value()` for both, Year 1 vs Year 2+ table |
| `EstimateBadge` | Small inline flag wherever `is_estimate = true` — non-negotiable per HDD §7 |

## 4. Validation Rules

- A card cannot be published (shown on live site) unless it has: ≥1 row in `fees`, ≥1 row in `reward_rules` with `category='base'`, and `last_verified` set.
- `exclusions` and `offers` are NOT required for publish — but their absence should render as "No exclusions listed — verify" rather than silently showing nothing, so a missing row is never mistaken for "this card has no exclusions."
- Calculator refuses to run if either selected card is missing a base reward rule — show "insufficient data" instead of a wrong number.

## 5. Edge Cases

- Card with NO annual fee waiver threshold (fee always applies): `waiver_spend_threshold = NULL` → treat as "waiver never applies."
- Card with fee ALWAYS waived (e.g., HSBC Premier for qualifying customers): `annual_fee = 0` directly, rather than a fake threshold — cleaner than encoding the banking-relationship gate as a spend threshold.
- Offer with no numeric value (e.g., "priority customer support"): `estimated_value_inr = NULL`, `value_description` still shown — don't force a fabricated number.

## 6. Scenario Presets

Deliberately NOT a "best card" table — see HDD §9 for the reasoning. Data shape (currently a hand-written JS array in `cardCompareData.js`, same reasoning as deferring the CSV/parser pipeline until card count justifies it):

```js
{
  id: 'frequent-flyer',
  label: 'Frequent flyer',
  description: 'Heavy travel spend, lounge access matters most',
  tagFilter: ['travel', 'lounge-access'],   // OR logic — card matches if it has ANY listed tag
  bucketFilter: undefined,                   // optional; omit to leave bucket unfiltered
  spend: { general: 400000, rent: 0, fuel: 0, utility_bill_via_app: 0, insurance_premium: 0, international_spend: 200000 },
  suggestedCardA: 'hdfc_regalia_gold',
  suggestedCardB: 'icici_times_black'
}
```

Applying a scenario sets `state.bucketFilter`, `state.activeTags`, `state.spend`, and both card selections in one action, then re-renders through the normal calculation path — no special-cased "scenario mode" math. `suggestedCardA`/`suggestedCardB` deliberately avoid cards with major open gaps (Swiggy, HSBC Premier) as *defaults*, though those cards remain fully selectable manually — a scenario's first impression shouldn't be a `dataInsufficient` badge, even though the calculator handles that state correctly when it does occur.

## 7. Bucket/Tag Filtering

`bucketFilter` values: `all`, `entry`, `mid-tier`, `premium`. Note `premium` is a **display grouping**, not a raw bucket value — it matches both `high-tier` and `premier-gated` cards together, since a reader browsing "premium cards" wants to see Infinia alongside Times Black even though their eligibility gates differ in kind (invite-only vs stated-criteria). The underlying `bucket` column keeps the finer distinction; only the filter UI collapses it.

`activeTags` is a multi-select array using **OR logic** (card matches if it has any selected tag), not AND — chosen because AND logic against only 9-and-growing cards would frequently return zero results, which is a worse UX than an occasionally-broad match. Revisit if the card count grows large enough that OR-logic result sets become unwieldy.

Filters are additive across scenario selection and manual chip clicks (clicking a scenario, then manually adding a tag, compounds rather than resets) — a deliberate choice, flagged as a possible future toggle if user feedback says otherwise.

## 8. URL Scheme & Deployment Requirement

Path: `/compare/{slugA}-vs-{slugB}`. Query string: `general`, `rent`, `fuel`, `utility`, `insurance`, `intl` for spend (zero/empty values omitted to keep URLs clean), `va`/`vb` for network variants where applicable. Updated live via `history.replaceState` on every state change — not `pushState`, to avoid flooding browser history per keystroke while keeping the address bar always shareable.

**Deployment requirement**: needs a server-side rewrite so `/compare/{anything}` serves `compare.html`'s content while the browser keeps showing the pretty URL. VouchWise uses a `redirects.json` config for this (not Cloudflare's native `_redirects` plain-text format) — the exact key names depend on whatever build step consumes that file; see `redirects-snippet.json` for a best-guess shape to adapt. The functional requirement is fixed regardless of file format: a **rewrite at HTTP 200**, not a redirect (301/302 would change the URL the visitor sees, defeating the point).

**Known failure mode, already hit once**: any root-relative asset reference in `compare.html` (script src, stylesheet href, etc.) must use an absolute path (`/js/...`) not a relative one (`js/...`). A relative path resolves against the *displayed* URL, which works at `/compare.html` but silently breaks at `/compare/card-a-vs-card-b` — the browser requests `/compare/js/...`, which doesn't exist. This class of bug is invisible in casual testing and only shows up when someone actually clicks a shared link.