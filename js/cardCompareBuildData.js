// cardCompareBuildData.js
// Reads every card entry file in cardCompareEntries/ and assembles them
// into js/cardCompareGeneratedData.js. Run this after editing any file in
// cardCompareEntries/ — nothing picks up your edit until you do.
//
//   node cardCompareBuildData.js
//
// Mirrors the existing masterBrands.xlsx -> parse-brands.js -> data.js
// pattern already used elsewhere in this repo: many small hand-edited
// source files in, one generated file out, generated file is what
// actually ships.

import fs from 'node:fs';
import path from 'node:path';

const ENTRIES_DIR = './cardCompareEntries';
const OUT_FILE = './js/cardCompareGeneratedData.js';

const files = fs.readdirSync(ENTRIES_DIR).filter(f => f.endsWith('.js')).sort();

const cardProfiles = [];
const exclusions = [];
const offers = [];

for (const file of files) {
  const mod = await import(path.resolve(ENTRIES_DIR, file));
  if (!mod.cardProfile) {
    console.warn(`WARNING: ${file} has no cardProfile export \u2014 skipped.`);
    continue;
  }
  cardProfiles.push(mod.cardProfile);
  if (mod.exclusions) exclusions.push(...mod.exclusions);
  if (mod.offers) offers.push(...mod.offers);
}

const banner = `// js/cardCompareGeneratedData.js
// GENERATED FILE \u2014 do not hand-edit.
// Source of truth is cardCompareEntries/*.js (one file per card).
// Regenerate with: node cardCompareBuildData.js
// Generated: ${new Date().toISOString()}
`;

const content = `${banner}
export const cardProfiles = ${JSON.stringify(cardProfiles, null, 2)};

export const exclusions = ${JSON.stringify(exclusions, null, 2)};

export const offers = ${JSON.stringify(offers, null, 2)};
`;

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, content);
console.log(`Wrote ${OUT_FILE}`);
console.log(`  ${cardProfiles.length} cards, ${exclusions.length} exclusion rows, ${offers.length} offer rows`);
