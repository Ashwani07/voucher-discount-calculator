// js/cardCompareDiscoverState.js
// Shared mutable state for discovery pages only. No imports.

export const state = {
  category: null // internal category key, e.g. 'education' — set from URL at load time
};

export function setCategory(category) {
  state.category = category;
}
