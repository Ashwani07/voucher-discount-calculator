# cardCompareDiscover — handoff notes

## What this ships
Category-based "best card for X" discovery pages, sitting on top of your
existing `cardCompareData.js` — no new data entry required, it reuses
`calculateRewardValue` from `cardCompareCalc.js` directly.

Tested against your real 9-card dataset (not stubs). Sample output:
- `/best-for/education` — Regalia Gold, ixigo AU, Times Black, HSBC
  Premier rank on top; Scapia and Millennia correctly flagged as
  excluded; Swiggy/Infinia/HSBC Platinum correctly flagged
  `dataInsufficient` (their `base_reward_multiplier` is `null`).
- `/best-for/rent` — top picks list comes back **empty** by design:
  every sourced card excludes rent. That's the correct answer, not a bug.

## Still required before this goes live

1. **`_worker.js` routing** — same requirement you already have flagged
   for `/compare/{a}-vs-{b}`. Add a rewrite (HTTP 200, not a redirect)
   mapping `/best-for/{slug}` → `cardCompareDiscover.html`. Bundle both
   route additions into one PR since you're touching the same file.

2. **`/css/cardCompareDiscover.css`** — not written yet. Reuse your
   existing compare-page card/badge styling rather than inventing a new
   visual language; I didn't want to guess at your design tokens.

3. **Nav/internal linking** — add links from `compare.html` results
   ("See best cards for [category]") and from each discovery page back
   to the relevant `/compare/{slug}` pages, per the SEO equity point
   from earlier in this thread.

## Known, deliberate gap: groceries

**Not built.** No card in your dataset has a sourced exclusion or
accelerated-rate row for "groceries" specifically. Building that page
would silently default every card to its base rate — which would look
like a verified ranking but isn't one. `cardCompareDiscoverData.js`
flags this with `coverageStatus: 'unconfirmed'`, and the page will
render an explicit "not ready yet" message rather than 404ing or
guessing if someone hits `/best-for/groceries` directly.

To unlock it: check each card's MITC/rewards T&C for supermarket/
hypermarket MCC treatment (excluded, capped, or accelerated) and add
proper `exclusions` rows to `cardCompareData.js` — then flip
`coverageStatus` to `'confirmed'`.

## Inherited caveat (not new, just more visible here)

Same as the compare page: a category with **no exclusion row** for a
card is treated as earning at the base rate — that's the existing
convention (`findExclusion()` returning `null` defaults `factor` to 1),
not something new introduced by this feature. A ranking page just makes
the consequence more visible than a two-card compare does: a card can
land on top for a category purely because no exclusion has been sourced
yet, not because it's been confirmed to earn normally. Worth flagging to
readers somewhere on the page (e.g. a footer note) if you want to be
extra careful — I left the wording open rather than guessing your
preferred phrasing.

## Files in this delivery
```
js/cardCompareDiscoverData.js    — category config, groceries flagged unconfirmed
js/cardCompareDiscoverCalc.js    — pure ranking logic, reuses cardCompareCalc.js
js/cardCompareDiscoverState.js   — mirrors cardCompareState.js pattern
js/cardCompareDiscoverDom.js     — mirrors cardCompareDom.js pattern
js/cardCompareDiscoverEvents.js  — mirrors cardCompareEvents.js pattern
js/cardCompareDiscoverMain.js    — entry point
cardCompareDiscover.html         — single template, all categories route through this
```
All new files carry the `cardCompare` prefix per your naming rule.
