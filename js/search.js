// Brand autocomplete and brand selection. The event listeners live in events.js.
import { brands } from './data.js';
import { dom } from './dom.js';
import { state } from './state.js';

export function hideBrandSuggestions() {
  dom.brandSuggestions.classList.add('hidden');
}

export function handleBrandInput() {
  const query = dom.brandSearch.value.trim().toLowerCase();
  if (!query) {
    hideBrandSuggestions();
    state.currentBrandId = null;
    return;
  }

  const matches = brands.filter(brand => brand.name.toLowerCase().includes(query)).slice(0, 10);
  if (!matches.length) {
    hideBrandSuggestions();
    return;
  }

  dom.brandSuggestions.innerHTML = matches
    .map(brand => `<div data-id="${brand.id}" class="hover:bg-slate-100 p-2 cursor-pointer border-b last:border-0 text-sm">${brand.name}</div>`)
    .join('');
  dom.brandSuggestions.classList.remove('hidden');
}

export function selectBrand(brandId) {
  const brand = brands.find(item => item.id === brandId);
  if (!brand) return;
  dom.brandSearch.value = brand.name;
  state.currentBrandId = brand.id;
  state.isFirstCalculate = true;
  hideBrandSuggestions();
}

export function resetSearchState() {
  dom.brandSearch.value = '';
  state.currentBrandId = null;
  state.isFirstCalculate = true;
  hideBrandSuggestions();
}