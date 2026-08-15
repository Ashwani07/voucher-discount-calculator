# VouchWise — Project Reference

> **For AI assistants**: Read this entire file before making any code changes.
> Section 4 (Inviolable Rules) lists constraints that must never be violated
> regardless of what the user asks. Section 5 (Known Bugs) lists issues that
> have been fixed — do not reintroduce them. Section 14 lists ideas that were
> deliberately deferred — do not build them without the owner asking first.

---

## 1. What VouchWise Is

VouchWise (`vouchwise.in`) is a personal finance comparison tool for Indian
credit card holders. It answers one question:

> "If I'm buying a gift voucher for Brand X, which credit card + voucher
> portal combination gives me the best effective discount?"

It is **not** an investment tool, a rewards tracker, or a bank portal. It is
a read-only comparison and calculation tool. No user accounts. No backend. No
payments. Revenue model: affiliate links (Amazon Associates tag `vouchwise-21`,
Cuelinks) and clearly-labelled sponsored slots.

**Product #1** in a planned multi-product personal finance suite. Distribution
(getting real users) is the current priority — not adding features.

---

## 2. Folder Structure

```
vouchwise/
├── index.html          Main calculator — the only page users land on
├── brands.html         Per-brand portal discount guide (SEO landing pages)
│                       Loaded as brands.html?brand=<brandId>
├── sitemap.xml         73 URLs: /, /brands.html, and 71 per-brand pages
├── robots.txt
├── _redirects          Cloudflare Pages routing rules
├── Structure.md         This file — dense reference (rules, bugs, data shapes)
├── ARCHITECTURE.md      Companion doc — visual diagrams only (Mermaid)
│
├── assets/
│   ├── favicon.svg
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── icon-512.png
│   └── vouchwise-horizontal.svg
│
└── js/
    ├── main.js         Entry point. Bootstraps wallet, events, hash preselect, flags panel.
    ├── state.js        Shared mutable state (single object, no globals).
    ├── data.js         All static data + localStorage persistence.
    ├── calculator.js   Pure financial math. No DOM. No imports from app modules.
    ├── dom.js          Cached DOM element references. No logic.
    ├── utils.js        Pure helpers + shared visibility functions.
    ├── search.js       Brand autocomplete and selection.
    ├── wallet.js       Wallet persistence, panel rendering, sticky chip bar.
    ├── modals.js       Custom card/brand modal state and save handlers.
    ├── results.js      Main portal+card comparison: calculation + rendering.
    ├── customCalc.js   Discount Calculator (coupon/sale flow).
    ├── flags.js        Reads/clears all flagged-discount localStorage keys.
    └── events.js       All addEventListener calls. No business logic.
```

---

## 3. Module Dependency Graph

```
data.js ◄──────────────────────────────────────────────────┐
calculator.js (no imports from app modules)                 │
state.js (no imports)                                       │
dom.js (no imports)                                         │
utils.js ──► dom.js                                         │
                                                            │
wallet.js ──► data.js, dom.js, utils.js                     │
search.js ──► data.js, dom.js, state.js                     │
modals.js ──► data.js, dom.js, wallet.js                    │
flags.js ──► data.js, utils.js (brand/portal name lookups)  │
                                                            │
results.js ──► data.js, calculator.js, dom.js, state.js,   │
               utils.js, wallet.js, search.js,             │
               customCalc.js (clearCustomResults only)     │
                                                            │
customCalc.js ──► data.js, calculator.js, dom.js, state.js,│
                  utils.js, wallet.js                       │
                  (NOT results.js — see Section 4)         │
                                                            │
events.js ──► all feature modules, including flags.js      │
main.js ──► dom.js, data.js, wallet.js, modals.js,         │
            events.js, search.js, results.js, flags.js     │
```

**Critical**: `validateVoucherAmount`, `hidePortalResults`, and
`hideBrandGuideLink` must live in `utils.js`, not `results.js`. Moving them
back to `results.js` reintroduces the circular import that breaks the entire
app on load (see Section 5, Bug #1).

**Note on the inline preview script in `index.html`**: the `<script
type="module">` block that renders the brand-search preview table (functions
exposed as `window.__vw_showPortalPreview` / `window.__vw_hidePortalPreview`)
is a separate module graph from `js/main.js` — it lives directly in the HTML
to avoid a circular import with `search.js`. It imports from `./js/data.js`
and, as of this session, `./js/flags.js` directly. Any shared logic touched
there must be duplicated or imported explicitly — it does **not** automatically
pick up changes made only in `events.js`.

---

## 4. Inviolable Rules

These constraints encode hard-won fixes and deliberate architectural decisions.
Do not change them without explicit discussion with the project owner.

### 4.1 No circular imports
`customCalc.js` must never import from `results.js`. It already imports
`validateVoucherAmount` and `hidePortalResults` from `utils.js`. If you need
to share something between these two modules, put it in `utils.js`.

### 4.2 Portal eligibility is multiplier-based
A card is eligible for a portal if and only if:
```js
getCardPortalMultiplier(card, portal) > 0
```
Fallback chain: `portalMultipliers[portal.id]` → `portalMultipliers[portal.group]`
→ `portalMultipliers.default` → `0`.

**Never** use `card.id.startsWith('hdfc_')` or similar string-prefix checks
to determine eligibility. The multiplier data in `data.js` is the single
source of truth for which card can earn on which portal.

### 4.3 Unavailable portals are excluded before calculation
In `getEligibleResults`, portals with `portalConfig.availability === 'unavailable'`
are skipped entirely before any math runs:
```js
if (portalConfig.availability === 'unavailable') continue;
```
This must happen as the **first filter**, before `findPortal()` is called.
Checking `availability` only on the Buy button (what the old code did) is not
sufficient — it allows an unavailable portal to appear as "Best."

### 4.4 Amount validation (updated July 2026 — supersedes the old ₹500 rule)
`validateVoucherAmount()` in `utils.js` now only requires a positive number.
The ₹500-minimum, multiple-of-500 hard block was removed at the project
owner's explicit request: many brands accept custom voucher denominations,
and the Coupon/Discount Calculator is also used for non-voucher spends
(offline purchases, direct checkout) where no denomination rule applies.
The main calculator instead shows an informational note near the input
("assuming a custom amount is accepted; else use multiples of ₹100").
Applied in both `handleCalculate` (results.js) and `handleCustomCalculate`
(customCalc.js).

### 4.5 The `default` multiplier fallback must be 0, not 1
`getCardPortalMultiplier` returns `0` when no multiplier is defined. Returning
`1` was a bug that caused cards to earn undeserved rewards on portals they have
no relationship with (e.g. an Axis card earning on HDFC SmartBuy). The fix is:
```js
return 0; // Safe: no multiplier = no reward on this portal
```

### 4.6 `overrideRewardMultiplier` must use the actual value
`getRewardMultiplier` must return `portalEntry.overrideRewardMultiplier` when
set — not a hardcoded `1`. Returning `1` silently ignored portal-specific
overrides (e.g. ICICI Emeralde Private Metal's Amazon Pay override).

### 4.7 Never call `getCardPortalMultiplier(card, null)`
Passing `null` as the portal causes `portal?.id` and `portal?.group` to both
be `undefined`, resulting in `multipliers[undefined]` which is always
`undefined`. In the Discount Calculator's "Other portal" flow, use
`metrics.multiplier` directly (already resolved by `calculateTrueNetMetrics`
via the fallback chain).

### 4.8 data.js arrays must not be hand-edited
`masterBrands` and `masterCards` in `data.js` are generated by `parse-brands.js`
from `masterBrands.csv` / `masterCards.csv`. Edit the CSV files and re-run the
parser. The parser reads CSV files as `latin1` encoding — do not change this
or the ₹ symbol will corrupt.

### 4.9 Bank-specific portal multipliers live in `bankPortalDefaults`
The `bankPortalDefaults` config in `data.js` is the single source of truth for
which portals a bank's cards can earn on, and what multiplier they get:
- HDFC → SmartBuy: 5 (editable, starting default)
- ICICI → iShop: 6 (editable, starting default)
- Axis → EdgeRewards: 1, GrabDeals: 1 (editable, starting defaults)
- SBI → Gyftr: 1 (editable, unverified placeholder — see note in data.js)
- HSBC → Gyftr: 1 (editable, unverified placeholder — see note in data.js)
- Amex → Shopwise: 1 (editable — varies per card)
- Other → all bank-specific portals: 0 (frozen)

As of July 2026, HDFC/ICICI/Axis entries are `frozen: false` — they're
starting defaults for that bank's typical premium card, not universal
constants (e.g. HDFC Diners Black Metal earns 3x on SmartBuy vs Infinia's
5x). `Other` stays `frozen: true` at 0 — that one IS architecturally
absolute: a card from an unlisted bank cannot earn a multiplier on another
bank's own portal, regardless of card tier. Update default values in
`data.js` if banks change their rates. Never hardcode them in `modals.js`
or anywhere else.

### 4.10 localStorage keys are fixed contracts
Changing these keys will silently destroy all users' saved data:
- `walletCardIds` — array of selected card IDs (wallet.js)
- `customCards` — user-added custom card objects (data.js, wallet.js)
- `customBrands` — user-added custom brand objects (data.js)
- `flag:<brandId>:<portalId>` — discount flagged-as-outdated markers.
  Written from three separate places: `results.js` (main results list),
  the inline preview script in `index.html`, and `brands.html`'s own script.
  Read back and made clearable via `flags.js` (see Section 6.9).

If a key must be renamed, add migration logic in `main.js` to copy the old
key to the new one before the first render.

### 4.11 Two result sections are mutually exclusive
`handleCalculate` hides `customResults` before showing `resultsSection`.
`handleCustomCalculate` hides `resultsSection` before showing `customResults`.
Only one result block should be visible at a time.

### 4.12 `dom.js` is cache-only
`dom.js` contains only `document.getElementById(...)` lookups. No logic,
no conditionals, no event listeners. All DOM elements referenced in more than
one module must be added here. Includes `walletChipBar` as of this session.

### 4.13 Voucher amounts are floored to the nearest ₹100 before reward math
Most portals only sell vouchers in ₹100 steps. `calculateTrueNetMetricsWithFlooring`
in `calculator.js` (not the raw `calculateTrueNetMetrics`) is the function
both `results.js` and `customCalc.js` must call. It floors the entered amount,
runs the core discount/reward math on the floored figure, then folds the
un-rewarded remainder back into `netPaid` / `finalNetCost` so the headline
`computedTrueNet` % is measured against the person's real total spend — not
just the portal-eligible slice. Returns two extra fields on the metrics object:
`flooredAmount` and `extraAmount`. Amounts under ₹100 skip the adjustment
(can't floor meaningfully). **Do not** call the raw `calculateTrueNetMetrics`
directly from UI-facing code — it has no flooring and will overstate the
effective discount on non-round amounts.

---

## 5. Known Bugs (Fixed — Do Not Reintroduce)

### Bug #1: Circular import breaks entire app on load
**Symptom**: Autocomplete dropdown doesn't work. Wallet doesn't render.
**Cause**: `customCalc.js` imported `validateVoucherAmount` and
`hidePortalResults` from `results.js`, while `results.js` imported
`clearCustomResults` from `customCalc.js`. ES modules resolve circular bindings
via live bindings, but the binding is `undefined` when first accessed,
crashing `initEvents()` before any event listeners are registered.
**Fix**: `validateVoucherAmount`, `hidePortalResults`, `hideBrandGuideLink`
live in `utils.js`. `results.js` re-exports `hidePortalResults` from `utils.js`
for backward compatibility.

### Bug #2: `getCardPortalMultiplier` fallback returned 1
**Symptom**: Cards earned rewards on portals they have no relationship with
(e.g. Axis card showing reward on HDFC SmartBuy).
**Fix**: Final `return 1` changed to `return 0` in `getCardPortalMultiplier`.

### Bug #3: `overrideRewardMultiplier` returned hardcoded 1
**Symptom**: ICICI Emeralde Private Metal's Amazon Pay multiplier override was
silently ignored — all overrides returned 1.
**Fix**: `return 1` changed to `return portalEntry.overrideRewardMultiplier`.

### Bug #4: `getCardPortalMultiplier(card, null)` undefined bug
**Symptom**: `multiplier` was `undefined` in the Discount Calculator's
"Other portal" mode, causing `getCardRewardRate` to return `NaN`.
**Fix**: The call was replaced with `metrics.multiplier` which is already
correctly resolved by `calculateTrueNetMetrics`.

### Bug #5: Unavailable portals ranked as "Best"
**Symptom**: BookMyShow showing ICICI iShop (marked unavailable) as the best
option at 18%.
**Fix**: `if (portalConfig.availability === 'unavailable') continue;` added
as the first filter in `getEligibleResults`, before any calculation.

### Bug #6: `brands.html` imported `masterBrands` (not exported)
**Symptom**: `brands.html` silently crashed on every load — `masterBrands`
was undefined because `data.js` only exports `brands` (the merged array).
**Fix**: Changed to `import { brands, portals, lastVerified } from './js/data.js'`.

### Bug #7: `lastVerified` referenced but never imported in the inline preview script
**Symptom**: Flagging a discount as outdated from the brand-search preview
(the table shown before running the full calculation) threw a silent
`ReferenceError` and never actually opened the report form or saved the flag.
Flagging from the main results list or from `brands.html` both worked fine —
only this third code path was broken, because it's a separate module graph
(see Section 3 note) and someone had copied the flag-toggle logic without
copying the `lastVerified` import.
**Fix**: Added `lastVerified` to the `import { brands, portals, lastVerified }
from './js/data.js'` line in the inline `<script type="module">` block.
**Lesson**: this flag-toggle logic now exists in three places
(`results.js`, `brands.html`, and this inline script) and drifted once
already. See Section 14 for the parked plan to consolidate it.

---

## 6. Feature Inventory

### 6.1 Main calculator (index.html + results.js)
- Brand search autocomplete (debounced 150ms, max 10 suggestions)
- Inline portal discount preview table — shown immediately when a brand is
  selected, before running the full card comparison
- "Find Best Deal" button → runs `handleCalculate`
- Per-card collapsible result blocks: top card starts open, rest collapsed
- "View N other cards" collapsible for cards beyond top 2
- Per-portal breakdown: Upfront Discount/Surcharge / Pay / Reward / Net
  in a 2-col grid (never wraps on narrow mobile screens)
- Flooring note shown inline when the entered amount wasn't a round ₹100
  (see Section 4.13) — states the floored amount and the un-rewarded extra
- ⚑ flag button → opens pre-filled Google Form to report outdated discounts
- "View all portal discounts →" link to `brands.html` in results header
- Two result sections are mutually exclusive (portal comparison vs. coupon calc)
- Reset button clears all results and search state

### 6.2 Discount Calculator / Coupon flow (customCalc.js)
- Portal dropdown: HDFC SmartBuy, ICICI iShop, Axis EdgeRewards, Axis GrabDeals,
  Amex Shopwise, Other (all cards)
- Selecting a real portal narrows eligible cards to those with a non-zero
  multiplier for that portal, and uses the portal's real multiplier
- "Other" uses all wallet cards with each card's own `default` multiplier
- Same ₹100 flooring behaviour as the main calculator (Section 4.13)
- `recalcAfterCardDelete` re-runs using `state.lastCustomCalc` (cached params)
  without reading the now-cleared form fields
- Ranked results: 🥇 #1, 🥈 #2, #3 #4... with full breakdown per card

### 6.3 My Wallet (wallet.js + modals.js)
- First-visit: full card selection panel shown immediately
- Return visit: collapsed summary bar showing saved card count and names + Edit button
- **Sticky wallet chip bar** (added this session): a slim bar pinned directly
  above `#results`, visible whenever the saved wallet is non-empty. Shows one
  small pill per saved card with a `✕` to deselect it immediately — no need
  to open the bank-tab panel. An "Edit" link opens the full panel. Rendered
  by `renderWalletChipBar()` in `wallet.js`, called automatically at the end
  of every `renderWalletUI()` — there is no separate call site to keep in
  sync; if the chip bar looks stale, the bug is in whatever skipped calling
  `renderWalletUI()`, not in the chip bar itself.
- Cards grouped by bank in the selection panel
- Select All / Unselect All buttons
- Live recalculate on checkbox change (if results are already showing)
- Custom card modal: Bank dropdown auto-fills/freezes bank-specific portal
  multipliers from `bankPortalDefaults` in `data.js`
- Custom card delete: ✕ button in wallet panel, in Discount Calculator results,
  and now in the chip bar (deselects, does not delete the custom card itself)

### 6.4 Custom brand modal (modals.js & search.js)
- Add a brand not in the catalog with per-portal upfront discount %
- Saved to localStorage as `customBrands`
- Appears in autocomplete and results immediately after save
- **Deletion:** Custom brands have a red "✕" button inside the search autocomplete
  dropdown. The click handler lives in `events.js`, listening on `dom.brandSuggestions`
  for `[data-delete-brand]` elements. Clicking it permanently deletes the brand
  from localStorage and live memory, then re-triggers the search input to refresh
  the dropdown.

### 6.5 `brands.html` — per-brand portal guide
- Loaded via `brands.html?brand=<brandId>`
- Dynamic `<title>`, `<meta description>`, `<link canonical>` per brand
- Shows all available portals sorted by upfront % descending
- **"Go to site ↗" button** (added this session): a fourth table column with
  a direct link to `portalConfig.site` per row, styled to match the "Buy ↗"
  button on the main results page. Suppressed when the disclaimer contains
  "not available", same rule as the main calculator's buy button.
- "Best portal" badge when one portal is clearly highest
- Cap warnings when disclaimer contains "cap", "limit", or "max"
- `lastVerified` date shown
- "Calculate my best deal →" links back to `index.html#<brandId>` which
  triggers `applyBrandPreselectFromHash` in main.js
- Error states for missing `?brand=` param and unknown brand IDs

### 6.6 Category browse (index.html & search.js)
- Horizontal scrollable pill menu (All Brands, Fashion, Travel, Food & Dining, etc.)
- The container element is `#categoryScrollContainer` (selected by ID in the
  drag-scroll JS in `index.html`) and also matched by class `.overflow-x-auto.hide-scrollbar`
  in `events.js` for click handling — both selectors refer to the same element
- Starts collapsed. Clicking an inactive pill dynamically renders matching brands
  into an inline grid (`#brandGrid`) via `renderCategoryBrands` in `search.js`
- Clicking an active pill toggles the grid closed
- Clicking a brand card inside the grid instantly selects it, hides the grid,
  resets the pills, and smooth-scrolls the user to the active search bar

### 6.7 Hash-based brand preselection (main.js)
- `index.html#amazon` → calls `selectBrand('amazon')` → auto-runs calculation
  if wallet is non-empty
- Triggers on `hashchange` event for SPA-like navigation from `brands.html`

### 6.8 SEO
- `sitemap.xml`: 73 URLs (/, /brands.html, 71 per-brand pages)
- JSON-LD: WebApplication + FAQPage schemas on `index.html`
- Hidden static HTML block in `index.html` lists all brand/card/portal names
  for crawler indexing (content is JS-rendered, hidden block ensures discoverability)
- Open Graph + Twitter Card meta tags with `en_IN` locale
- `brands.html` generates unique meta per brand

### 6.9 Flagged Discounts panel (flags.js) — added this session
- Collapsible `<details>` block on `index.html`, placed right after
  "How VouchWise works," self-hides when there are zero flags
- `getAllFlags()` scans every localStorage key with the `flag:` prefix,
  splits `brandId`/`portalId` out of the key, and resolves display names via
  `getBrandById` / `getPortalById` from `utils.js`
- Each row has a "Remove flag" button (`removeFlag(key)`) that clears that
  one localStorage key and re-renders the panel
- Renders on page load via `main.js` (`renderFlaggedDiscounts()`), and
  re-renders after every flag toggle — from the main results list, the
  inline brand-search preview, and this panel's own remove buttons. It does
  **not** currently re-render after a flag toggle on `brands.html`, since
  that's a separate page with no shared JS runtime with `index.html` — the
  flag still gets written/removed correctly in localStorage either way, it
  just won't visually update this panel until the person navigates to
  `index.html` (which re-reads localStorage fresh on load, so it's correct
  the next time they see it — just not live across tabs/pages).

---

## 7. Data Pipeline

```
masterBrands.csv  ──┐
                     ├──► parse-brands.js (Node.js, reads as latin1)
masterCards.csv  ───┘         │
                               ▼
                          js/data.js
                    (masterBrands / masterCards arrays)
                    DO NOT hand-edit these arrays
```

At runtime:
```
data.js loads:
  masterBrands + customBrands (from localStorage) → brands[]
  masterCards  + customCards  (from localStorage) → cards[]
```

---

## 8. Card Data Shape

```js
{
  id: 'icici_emeralde',          // snake_case, prefixed by issuer
  name: 'ICICI Emeralde Private Metal',
  rewardType: 'points',          // 'points' | 'cashback'
  pointValue: 1.00,              // ₹ value per reward point
  spendBlock: 100,               // spend ₹ per block
  pointsPerBlock: 10,            // points earned per block
  applyURL: 'https://...',
  applyStatus: 'invite_only',    // 'direct' | 'referral' | 'invite_only' | 'closed'
  assumption_note: '...',        // shown in UI as a disclaimer
  portalMultipliers: {
    hdfc_smartbuy: 0,            // 0 = not eligible (ICICI card on HDFC portal)
    icici_ishop: 6,              // 6x multiplier on own bank's portal
    axis_edgerewards: 0,
    axis_grabdeals: 0,
    shopwise: 0,
    gyftr: 1,
    amazon: 1,
    default: 1                   // fallback for any unlisted portal
  }
}
```

## 9. Brand Data Shape

```js
{
  id: 'myntra',
  name: 'Myntra',
  category_name: 'Fashion',
  portals: [
    {
      portalId: 'hdfc_smartbuy',
      upfrontDiscountPercent: 5,   // null = data unknown/N/A
      availability: 'available',   // 'available' | 'unavailable'
      disclaimer: 'Max ₹500/month',
      site: 'https://vouchwise.in/out/buy-myntra-smartbuy'
    },
    // ... one entry per portal
  ]
}
```

---

## 10. Financial Calculation

All money math runs through `calculateTrueNetMetrics` in `calculator.js`,
wrapped by `calculateTrueNetMetricsWithFlooring` for anything UI-facing
(see Section 4.13):

```
flooredAmount   = floor(voucherAmount / 100) × 100
extraAmount     = voucherAmount - flooredAmount   (no discount, no reward)

netPaid         = flooredAmount × (1 - upfrontDiscountPercent / 100)
multiplier      = getMultiplier(card, portal, portalConfig)
                  → portalEntry.overrideRewardMultiplier (if set)
                  → portalMultipliers[portal.id]
                  → portalMultipliers[portal.group]
                  → portalMultipliers.default
                  → 0

For points cards:
  completedBlocks = Math.floor(netPaid / spendBlock)
  rpEarned        = Math.floor(completedBlocks × pointsPerBlock × multiplier)
  cashValue       = rpEarned × pointValue

For cashback cards:
  cashValue = netPaid × (pointsPerBlock / spendBlock) × multiplier

finalNetCost    = (netPaid - cashValue) + extraAmount
computedTrueNet = (voucherAmount - finalNetCost) / voucherAmount × 100
```

Points cards use `Math.floor` (truncation per block). Cashback cards use
continuous math (no truncation). This is intentional — changing it will
produce different numbers than what the user's bank actually credits.

The `extraAmount` remainder is assumed to earn **zero** reward regardless of
payment method (same card, UPI, cash) — confirmed acceptable by the project
owner since almost every card's `spendBlock` is ₹100+ and a sub-₹100
remainder can't complete a block anyway. The only theoretical exception is
the four Amex cards with `spendBlock: 50`, which is deliberately not
special-cased — the marginal miscalculation isn't worth the added branching.

---

## 11. UI Conventions

- **Breakdown grid**: Pay / Reward / Net in `grid-cols-[auto_1fr]`. Never use
  a table or prose string for this — it wraps on mobile.
- **Card blocks**: `<details>` with `open` on the first card. Named Tailwind
  groups (`group/outer`) on the "View N more cards" wrapper to prevent chevron
  rotation bleeding into inner card groups.
- **Result sections**: portal comparison (`#results`) and coupon/discount
  (`#customResults`) are always mutually exclusive.
- **Upfront label**: "Upfront Discount" if positive, "Convenience Charge" if
  negative (surcharge). Never shown as "Upfront Discount: -4.13%" for a fee.
- **Currency label**: "RP" for all cards except `axis_atlas` which uses "Miles".
- **Apply badge**: only shown for `applyStatus: 'direct'` or `'referral'`.
  `invite_only` shows "Invite Only" badge. `closed` shows nothing.
- **Flooring/extra-amount notes**: small grey text block, same visual weight
  as a disclaimer, placed directly under the per-portal disclaimer line if
  one exists.

---

## 12. Files the AI Should NOT Modify

- `data.js` — only the `masterBrands` and `masterCards` arrays are generated
  by the CSV pipeline and must not be hand-edited; all other exports in `data.js`
  (`bankPortalDefaults`, `portals`, save/delete functions, etc.) are hand-maintained
  and may be edited as needed
- `sitemap.xml` — regenerate with the parse script if brands change
- `assets/` — do not modify any image or icon files
- `_redirects` — Cloudflare routing rules, touch only if adding a new page

---

## 13. How to Add Things

### New portal
1. Add to `portals` array in `data.js` (id, name, group)
2. If bank-specific: add to `bankPortalDefaults` in `data.js`
3. If bank-specific: add to `bankSpecificPortalIds` in `data.js`
4. If bank-specific: add to `ccPortalFieldIds` in `modals.js` and add the
   corresponding input field to the custom card modal in `index.html`
5. Add input field to custom brand modal in `index.html` (id: `cb<n>`)
6. Add corresponding `push()` call in `modals.js` → `handleSaveBrand`
7. Add to `customPortal` select dropdown in `index.html`
8. Add to category browse links if it's user-facing

### New card
1. Add row to `masterCards.csv`
2. Run `node parse-brands.js` to regenerate `data.js`
3. Do not edit `masterCards` array directly in `data.js`

### New brand
1. Add row to `masterBrands.csv` with per-portal discount data
2. Run `node parse-brands.js`
3. Add to category browse in `index.html` if high-traffic brand
4. Regenerate `sitemap.xml`

### New page
1. Add HTML file to root
2. Add `<script type="module">` that imports from `./js/`
3. Add URL to `sitemap.xml`
4. Add rewrite rule to `_redirects` if clean URL is needed

---

## 14. Parked Ideas (Not Built — Do Not Build Without Asking)

These were discussed and deliberately deferred. Listed here so they survive
between chat sessions instead of living only in conversation history — an AI
assistant reading only the code would have no way to know these were
considered and set aside on purpose, not simply overlooked.

### 14.1 Option 3: Flat card+portal ranking instead of grouping by card
Currently `groupAndSortResults` in `results.js` groups results by card, then
sorts cards by each card's best entry, with per-card `<details>` blocks
listing that card's portal options underneath. The alternative ("Option 3")
would flatten this into a single ranked list of card+portal *combinations* —
e.g. "#1 Axis Atlas via EdgeRewards — 7.33%", "#2 Axis Atlas via GrabDeals —
7.33%", "#3 SBI Cashback via Gyftr — 6.90%" — rather than nesting portals
inside a card block.

**Why deferred**: this is a results-presentation redesign, not a bug fix or
a response to a specific complaint. It touches `groupAndSortResults`,
`buildCardBlock`, and `renderAllCardsList` in `results.js`, plus likely the
Discount Calculator's equivalent rendering in `customCalc.js` for
consistency. Real engineering time for a change nobody has actually asked
for yet. Revisit only if user feedback specifically asks for it (the
shop-floor complaint that led to the wallet chip bar was about *card
selection visibility*, not *results structure* — don't conflate the two
again).

### 14.2 Consolidate the duplicated Google Form flag-toggle logic
The flag-toggle-and-report-form logic (build the pre-filled Google Form URL,
open it in a new tab, toggle the `flag:` localStorage key) is currently
duplicated in three places:
1. `results.js` → `dom.allCardsList` click handler (wired in `events.js`)
2. The inline `<script type="module">` block in `index.html` (brand-search preview)
3. `brands.html`'s own inline script

This is exactly the kind of duplication that caused Bug #7 (Section 5) — the
inline preview script was missing an import that the other two copies had,
and it went unnoticed until someone specifically tested that third path.

**Proposed fix (not yet built)**: extract a single `buildFlagReportURL(brand,
portal, discount, lastVerified)` and `handleFlagToggle(brandId, portalId,
brandName, portalName, discount, lastVerified)` pair into `flags.js`, then
have all three call sites import and use them instead of maintaining three
copies of the same template string and toggle logic. `brands.html` is a
fully separate page (no shared module graph with `index.html`), so it would
still need its own `<script type="module">` import of `flags.js` — this
doesn't unify everything into one file, it just removes the risk of the
three copies drifting out of sync with each other.

**Why deferred**: no user-facing symptom right now (Bug #7 is fixed). This
is a pure maintainability improvement — worth doing before the *next* time
something needs to change in this flow, not urgent today given distribution
is the priority.