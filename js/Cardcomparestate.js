// js/cardCompareState.js
// Shared mutable state for the compare page only. No imports.

export const state = {
  cardAId: 'icici_times_black',
  cardBId: 'hdfc_millennia',
  variantA: null, // 'visa' | 'rupay' — only used if the selected card has a `variants` array
  variantB: null,
  bucketFilter: 'all',
  activeTags: [], // OR logic: card matches if it has ANY selected tag
  spend: {
    general: 500000,
    rent: 0,
    fuel: 0,
    utility_bill_via_app: 0,
    insurance_premium: 0,
    international_spend: 0
  }
};

export function setBucketFilter(value) {
  state.bucketFilter = value;
}

export function toggleTag(tag) {
  const idx = state.activeTags.indexOf(tag);
  if (idx === -1) state.activeTags.push(tag);
  else state.activeTags.splice(idx, 1);
}

export function setCard(slot, cardId) {
  if (slot === 'A') { state.cardAId = cardId; state.variantA = null; }
  else { state.cardBId = cardId; state.variantB = null; }
}

export function setVariant(slot, network) {
  if (slot === 'A') state.variantA = network;
  else state.variantB = network;
}

export function setSpend(category, amount) {
  state.spend[category] = Math.max(0, Number(amount) || 0);
}