// cardCompareMigrateToEntries.js
// ONE-TIME migration: splits the current cardCompareData.js's cardProfiles/
// exclusions/offers arrays into one file per card under cardCompareEntries/.
//
// Run once:
//   node cardCompareMigrateToEntries.js
//
// Deliberately does NOT touch cardCompareData.js itself — this only READS
// from it and writes new files elsewhere. Nothing existing breaks if you
// stop here and never do the second half of the migration (wiring
// cardCompareData.js to the new files via cardCompareBuildData.js).

import { cardProfiles, exclusions, offers } from './js/cardCompareData.js';
import fs from 'node:fs';
import path from 'node:path';

const OUT_DIR = './cardCompareEntries';

function toPascalCase(snake) {
  return snake.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

let totalExclusions = 0;
let totalOffers = 0;

for (const card of cardProfiles) {
  const cardExclusions = exclusions.filter(e => e.card_id === card.id);
  const cardOffers = offers.filter(o => o.card_id === card.id);
  totalExclusions += cardExclusions.length;
  totalOffers += cardOffers.length;

  const fileName = `cardCompareEntry${toPascalCase(card.id)}.js`;
  const filePath = path.join(OUT_DIR, fileName);

  const content = `// ${fileName}
// One card, one file. Edit this file to update ${card.name || card.id}.
// After editing, regenerate js/cardCompareGeneratedData.js by running:
//   node cardCompareBuildData.js
// Do NOT hand-edit js/cardCompareGeneratedData.js \u2014 it's overwritten every run.

export const cardProfile = ${JSON.stringify(card, null, 2)};

export const exclusions = ${JSON.stringify(cardExclusions, null, 2)};

export const offers = ${JSON.stringify(cardOffers, null, 2)};
`;

  fs.writeFileSync(filePath, content);
  console.log(`Wrote ${filePath}  (${cardExclusions.length} exclusions, ${cardOffers.length} offers)`);
}

console.log(`\nDone. ${cardProfiles.length} entry files written to ${OUT_DIR}/`);
console.log(`Total: ${totalExclusions} exclusion rows, ${totalOffers} offer rows accounted for.`);
