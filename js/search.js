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
    .map(brand => {
      const isCustom = brand.id.startsWith('custom_brand_');
      const deleteHtml = isCustom 
        ? `<span data-delete-brand="${brand.id}" class="text-[10px] text-red-400 hover:text-red-600 px-2 py-1" title="Delete custom brand">✕</span>` 
        : '';
        
      return `
        <div class="hover:bg-slate-100 p-2 border-b last:border-0 text-sm flex items-center justify-between group">
          <div data-id="${brand.id}" class="flex-1 cursor-pointer">${brand.name}</div>
          ${deleteHtml}
        </div>`;
    })
    .join('');
  dom.brandSuggestions.classList.remove('hidden');
}

// In search.js
export function selectBrand(brandId) {
  const brand = brands.find(item => item.id === brandId);
  if (!brand) return;
  dom.brandSearch.value = brand.name;
  state.currentBrandId = brand.id;
  state.isFirstCalculate = true;
  hideBrandSuggestions();

  // Show inline portal discount preview via window globals (avoids circular import)
  if (typeof window.__vw_showPortalPreview === 'function') {
    window.__vw_showPortalPreview(brandId);
  }
  
  const encodedBrand = encodeURIComponent(brandId);
  
  // Update the "Full guide" link
  const previewLink = document.getElementById('portalPreviewLink');
  if (previewLink) previewLink.href = `./brands.html?brand=${encodedBrand}`;
  
  // ADD THIS: Update the "Show discount in all portals" link
  if (dom.showAllPortalsBtn) {
    dom.showAllPortalsBtn.href = `./brands.html?brand=${encodedBrand}`;
  }
}

export function resetSearchState() {
  dom.brandSearch.value = '';
  state.currentBrandId = null;
  state.isFirstCalculate = true;
  hideBrandSuggestions();
  if (typeof window.__vw_hidePortalPreview === 'function') {
    window.__vw_hidePortalPreview();
  }
  
  // ADD THIS: Reset the link if the search is cleared
  if (dom.showAllPortalsBtn) dom.showAllPortalsBtn.href = '#';
}