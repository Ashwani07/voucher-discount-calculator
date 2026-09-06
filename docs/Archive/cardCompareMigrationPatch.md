# Final patch — wire cardCompareData.js to the generated file

In your real `js/cardCompareData.js`, three exports are now generated
elsewhere and should be deleted + replaced with an import:

- `export const cardProfiles = [...]` — starts line 10
- `export const exclusions = [...]` — starts line 233
- `export const offers = [...]` — starts line 686
- Hand-maintained code (`getExclusionsForCard`, `getOffersForCard`,
  `BUCKET_FILTER_LABELS`, `cardMatchesBucketFilter`, `scenarios`) starts
  at line 1211 and is untouched — keep all of it exactly as-is.

**Delete lines 1–1210** (everything up to, not including, line 1211),
replace with:

```js
// js/cardCompareData.js
// cardProfiles/exclusions/offers are generated from cardCompareEntries/*.js
// — do not hand-edit here. To change a card, edit its file in
// cardCompareEntries/ and run: node cardCompareBuildData.js

export { cardProfiles, exclusions, offers } from './cardCompareGeneratedData.js';
```

Then everything from the old line 1211 onward (the hand-maintained
helpers) continues unchanged right after that import line.

**Before deleting anything**, verify byte-for-byte that lines 1–9 aren't
hiding an unrelated import/comment I haven't seen — I only confirmed the
boundary at line 10 via `grep`, not a full file read. Open the file and
eyeball lines 1–9 first.
