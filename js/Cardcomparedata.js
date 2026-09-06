// js/cardCompareData.js
// cardProfiles/exclusions/offers are generated from cardCompareEntries/*.js
// — do not hand-edit here. To change a card, edit its file in
// cardCompareEntries/ and run: node cardCompareBuildData.js

import { cardProfiles, exclusions, offers } from './cardCompareGeneratedData.js';
export { cardProfiles, exclusions, offers };

export function getExclusionsForCard(cardId) {
  return exclusions.filter(e => e.card_id === cardId);
}

export function getOffersForCard(cardId) {
  return offers.filter(o => o.card_id === cardId);
}

// --- Bucket display labels + tier grouping ---
// 'premium' groups high-tier AND premier-gated together for filtering
// purposes — a reader browsing "premium cards" wants to see Infinia and
// HSBC Premier alongside Times Black, even though their eligibility gates
// differ (see each card's eligibility_notes for the real distinction).
export const BUCKET_FILTER_LABELS = {
  all: 'All',
  entry: 'Beginner',
  'mid-tier': 'Mid-level',
  premium: 'Premium'
};

export function cardMatchesBucketFilter(card, filterValue) {
  if (filterValue === 'all') return true;
  if (filterValue === 'premium') return card.bucket === 'high-tier' || card.bucket === 'premier-gated';
  return card.bucket === filterValue;
}

// --- Scenario presets ---
// Deliberately NOT "best card" badges — see project notes on why a crowned
// winner is a credibility risk while several cards still have unresolved
// base rates. Each scenario auto-fills a spend profile and suggests a
// reasonable starting pair; the actual comparison still runs through the
// same transparent ledger, so any data gap on the suggested cards surfaces
// normally rather than being hidden behind a declared "best" claim.
export const scenarios = [
  {
    id: 'frequent-flyer',
    label: 'Frequent flyer',
    description: 'Heavy travel spend, lounge access matters most',
    tagFilter: ['travel', 'lounge-access'],
    spend: { general: 400000, rent: 0, fuel: 0, utility_bill_via_app: 0, insurance_premium: 0, international_spend: 200000 },
    suggestedCardA: 'hdfc_regalia_gold',
    suggestedCardB: 'icici_times_black'
  },
  {
    id: 'everyday-shopper',
    label: 'Everyday shopper',
    description: 'Cashback on regular monthly spend, no travel focus',
    tagFilter: ['cashback', 'shopping'],
    spend: { general: 150000, rent: 0, fuel: 0, utility_bill_via_app: 0, insurance_premium: 0, international_spend: 0 },
    suggestedCardA: 'hdfc_millennia',
    suggestedCardB: 'federal_scapia'
  },
  {
    id: 'lifetime-free-starter',
    label: 'Lifetime-free starter',
    description: 'First card, low/no fees, modest spend',
    tagFilter: [],
    bucketFilter: 'entry',
    spend: { general: 100000, rent: 0, fuel: 0, utility_bill_via_app: 0, insurance_premium: 0, international_spend: 0 },
    suggestedCardA: 'federal_scapia',
    suggestedCardB: 'au_ixigo'
  },
  {
    id: 'dining-lifestyle',
    label: 'Dining & lifestyle',
    description: 'Concierge, dining perks, lifestyle memberships over pure cashback',
    tagFilter: ['dining', 'lifestyle'],
    spend: { general: 300000, rent: 0, fuel: 0, utility_bill_via_app: 0, insurance_premium: 0, international_spend: 0 },
    suggestedCardA: 'icici_times_black',
    suggestedCardB: 'hdfc_infinia_metal'
  }
];