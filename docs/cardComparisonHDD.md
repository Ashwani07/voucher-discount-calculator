# High-Level Design (HDD)
## VouchWise — Card Comparison & Rewards Calculator

**Status**: Draft v1
**Owner**: Ashwani
**Last updated**: 2026-08-05

---

## 1. Purpose

Let a VouchWise visitor compare credit cards across buckets and tags, see
Year-1 vs Year-2+ net reward value at their own spend level, and see the
full picture — not just headline rewards, but exclusions and recurring
lifestyle offers (dining, lounge, movies) that often matter more than the
base reward rate.

Guiding principle: **transparency over polish**. Where a number is an
assumption, the UI says so. Where a benefit has fine print, the fine print
is visible, not buried in a linked T&C PDF nobody opens.

## 2. Scope

**In scope (v1)**
- Card master data: fees, buckets, tags, reward rules, welcome benefits, milestones
- Exclusion categories per card (what does NOT earn rewards)
- Recurring offers per card (dining, lounge, movies, forex, etc.) with their conditions
- Spend-based calculator: Year 1 vs Year 2+ net value
- Bucket/tag browse pages (entry / mid-tier / high-tier / premier-gated)

**Out of scope (v1)**
- User accounts / saved comparisons
- Live scraping of bank T&C pages (data entry is manual/semi-manual — see §6)
- Real-time forex or point-value feeds
- More than 2-card side-by-side comparison

## 3. System Architecture

Three modules, deliberately decoupled because they change at different rates:

| Module | Change frequency | Owner process |
|---|---|---|
| Voucher/offer scraper (existing) | Daily/weekly | Automated Python scrapers |
| Card master data (new) | Monthly/quarterly | Manual entry + periodic review |
| Comparison/calculator UI (new) | Rare, once built | Static site query layer |

```
┌─────────────────┐     ┌──────────────────┐     ┌───────────────────┐
│  Card master DB  │────▶│  Query/API layer  │────▶│  Comparison UI     │
│  (SQLite/Postgres)│     │  (filters by      │     │  - Bucket/tag      │
│  cards, fees,     │     │   bucket/tag,     │     │    browse pages    │
│  rewards,         │     │   joins for       │     │  - Card detail     │
│  exclusions,      │     │   selected cards)  │     │    page            │
│  offers           │     └──────────────────┘     │  - 2-card calculator│
└─────────────────┘                                └───────────────────┘
```

The voucher scraper infra is intentionally NOT wired into this — card
fees/rewards are too consequential to trust to a scraper without human
review. Automate later, once the manual process proves the data model.

## 4. Data Freshness & Trust Policy

- Every card record carries `last_verified` (date). Anything unverified
  for 90+ days is flagged in the UI and queued for manual re-check.
- Every editable assumption (point value, base reward rate not disclosed
  by issuer) is labeled in the UI as an **estimate**, not a fact.
- Exclusions and offer fine print are sourced from the issuer's MITC
  (Most Important Terms & Conditions) document, not marketing pages —
  marketing pages omit exclusions almost by design.

## 5. Key Concepts

- **Bucket**: mutually exclusive tier — `entry`, `mid-tier`, `high-tier`, `premier-gated`
- **Tag**: many-to-many capability label — `cashback`, `travel`, `dining`, `shopping`, `fuel`, `lounge-access`, `forex`, `lifestyle`
- **Exclusion**: a spend category that earns zero or reduced rewards (rent, wallet loads, fuel beyond surcharge waiver, EMI conversions, gold/jewellery, government payments — varies per card)
- **Recurring offer**: a benefit that resets on a cycle (monthly dining discount, monthly/quarterly lounge visits, monthly movie offer) — distinct from one-time welcome benefits and cumulative milestones
- **Slug**: bank-prefixed, URL-safe card identifier (e.g. `hdfc-millennia`, not `millennia`) — matches the convention used by CardExpress (a live competitor), chosen deliberately after checking their pattern rather than guessing. Distinct from `id`, which stays snake_case for internal code use.
- **Scenario**: a named spend profile + suggested card pair for a common use case ("Frequent flyer," "Everyday shopper," etc.) — see §9 for why this is NOT a "best card" ranking.

## 6. Data Entry Process (v1)

1. Pull the issuer's MITC/KFS PDF (not the marketing page — marketing pages
   is what got you the incomplete Times Black base-rate gap last time).
   Note: banks frequently split this into TWO separate documents — a
   fees/charges MITC and a separate rewards T&C. Don't assume one
   document covers both; check `fees_mitc_url` and `rewards_mitc_url`
   independently, and leave whichever is missing as `null` rather than
   inferring reward terms from a fees-only document.
2. Populate `cards`, `fees`, `reward_rules`.
3. Populate `exclusions` — read the MITC's exclusion clause explicitly.
4. Populate `offers` — cross-reference the card's benefits page + MITC.
5. Set `last_verified` = today.
6. Re-verify on a quarterly cadence or when a user reports a discrepancy.
7. **Before adding anything new, check it against what's already sourced
   for that card** — a new source that *confirms* existing data gets less
   scrutiny than one that contradicts it, which is exactly backwards. This
   caught a real near-miss: Millennia's own dedicated rewards T&C says
   lounge access was removed in Dec 2023, but a fresh external search
   almost got added as a *new* lounge benefit before checking the existing
   entry. Treat "this matches my intuition" as a reason to check harder,
   not a reason to skip the check.

## 7. Non-Functional Requirements

- **Correctness over completeness**: an incomplete card entry (missing
  offer detail) is fine; a wrong fee or wrong exclusion is not — omit
  rather than guess.
- **No silent assumptions**: every calculator output must be traceable
  to a visible input the user can inspect/edit.
- **Static-first**: no backend, no database — CSV/hand-written JS feeding
  a static site is sufficient at this scale (see §0 for why SQL was
  explicitly ruled out; an earlier draft of this doc still referenced
  SQLite here, which was stale and has been corrected).

## 8. Open Questions

- Point-value assumptions: source a defensible number per issuer (forum
  consensus / redemption catalog pricing) rather than a flat guess — flagged for LLD.
- Do exclusions need per-rule point-value overrides (e.g., 0.5X instead
  of 0X for fuel) or is a binary "excluded/not excluded" sufficient for v1?

## 9. Scenario Presets — Not "Best Card" Rankings

A naive "Best Travel Card" badge was considered and deliberately rejected.
Reasoning: several cards in the dataset (Swiggy, parts of HSBC Premier and
Infinia) still have unresolved base rates or point values. Confidently
declaring a winner while quietly sitting on incomplete data for competing
cards would contradict every other design decision in this project —
conflict-flagging, `is_estimate` badges, "n/a" instead of a fabricated
zero all exist specifically to avoid this exact failure mode.

Instead, **scenarios auto-fill a spend profile and suggest a starting
pair**, but the comparison still runs through the normal transparent
ledger. If a scenario's suggested card has a `dataInsufficient` flag, it
surfaces exactly as it would anywhere else on the site — nothing about
scenario mode suppresses or hides a data gap. See §5 for the data shape.

## 10. Shareable URLs

`/compare/{slugA}-vs-{slugB}?general=500000&rent=20000&va=visa` — path
holds the card pair, query string holds spend/variant state. The address
bar updates live via `history.replaceState` as the person adjusts
anything, so whatever's on screen is always exactly what's copy-paste
shareable. Requires a server-side rewrite rule mapping `/compare/*` to
serve `compare.html`'s content while keeping the pretty URL in the
address bar — VouchWise uses a **`redirects.json`** config for this
rather than Cloudflare's native `_redirects` plain-text file (see
`redirects-snippet.json` for the exact rule; the underlying requirement —
rewrite, not redirect, status 200 not 301 — is unchanged regardless of
which file format expresses it).

A real bug was caught and fixed here during testing: the page's
`<script type="module" src="js/cardCompareMain.js">` used a *relative*
path, which resolves against the currently-displayed URL. At
`/compare.html` that's `/js/cardCompareMain.js` — correct. At
`/compare/millennia-vs-regalia-gold` the browser instead requested
`/compare/js/cardCompareMain.js`, which doesn't exist, silently failing
the whole page. Fixed with an absolute path (`/js/cardCompareMain.js`).
Any future page using slug-based routing needs to use absolute paths for
all root-level asset references, not relative ones — this class of bug
is invisible until someone actually clicks a shared link.