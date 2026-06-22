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


export function renderCategoryBrands(category = 'All Brands') {
  const grid = document.getElementById('brandGrid');
  if (!grid) return;

  // 1. Filter brands based on the clicked category
  const filtered = category === 'All Brands' 
    ? brands 
    : brands.filter(b => b.category_name.toLowerCase().includes(category.toLowerCase()) || 
                         (category === 'Food & Dining' && (b.category_name === 'Food' || b.category_name === 'Restaurants' || b.category_name === 'Dining')));

  if (!filtered.length) {
    grid.innerHTML = `<p class="col-span-full text-sm text-slate-500 py-4 text-center">No brands available in this category.</p>`;
    return;
  }

  // 2. Generate clean, actionable cards for each brand
  grid.innerHTML = filtered
    .map(brand => `
      <button data-grid-brand-id="${brand.id}" 
              class="flex flex-col items-center justify-center p-3 border border-slate-100 hover:border-emerald-200 rounded-lg bg-slate-50 hover:bg-emerald-50/30 transition-all text-center group h-20">
        <span class="text-xs font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors line-clamp-2">${brand.name}</span>
        <span class="text-[9px] text-slate-400 mt-1 uppercase tracking-wider">${brand.category_name}</span>
      </button>
    `).join('');
}