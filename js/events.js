// All listener registration lives here. Feature modules expose handlers, and
// this file wires them up once during startup.
import { deleteCustomBrand, cards, brands, portals, lastVerified } from './data.js';
import { dom } from './dom.js';
import { state } from './state.js';
import { debounce } from './utils.js';
import { handleBrandInput, hideBrandSuggestions, selectBrand } from './search.js';
import { handleCalculate, handleReset, refreshPortalResults, toggleDiscountFlag, hideWalletWarning } from './results.js';
import { handleCustomCalculate, resetCustomCalcForm, toggleCustomCalcPanel, recalcAfterCardDelete } from './customCalc.js';
import { renderWalletUI, saveWalletIds, deleteCustomCard, WALLET_MAX_CARDS, checkAndEnforceWalletLimit } from './wallet.js';
import { openCustomCardModal, closeCustomCardModal, openCustomBrandModal, closeCustomBrandModal, applyBankDefaults, handleSaveCard, handleSaveBrand } from './modals.js';
import { renderCategoryBrands } from './search.js';

export function initEvents() {
  dom.calculateBtn.addEventListener('click', () => {
    state.isFirstCalculate = true;
    
    // Collapse the wallet panel if it is open when explicitly calculating
    const walletPanel = document.getElementById('walletPanel');
    if (walletPanel && !walletPanel.classList.contains('hidden')) {
      walletPanel.classList.add('hidden');
      document.getElementById('walletSummaryBar')?.classList.remove('hidden');
    }
    
    // Hide the inline portal discount preview container
    const portalPreview = document.getElementById('portalPreview');
    if (portalPreview) {
      portalPreview.classList.add('hidden');
    }

    handleCalculate({ scroll: true });
  });

  dom.resetBtn.addEventListener('click', handleReset);

  if (dom.showAllPortalsBtn) {
    dom.showAllPortalsBtn.addEventListener('click', (event) => {
      if (!state.currentBrandId) {
        event.preventDefault(); // Stop the link from navigating to "#"
        alert('Please search and select a brand first.');
      }
    });
  }
  
  dom.toggleCustomCalcBtn.addEventListener('click', toggleCustomCalcPanel);
  dom.resetCustomBtn.addEventListener('click', resetCustomCalcForm);
  dom.calculateCustomBtn.addEventListener('click', handleCustomCalculate);
  dom.openCardModalBtn.addEventListener('click', openCustomCardModal);
  dom.closeCardModalBtn.addEventListener('click', closeCustomCardModal);
  dom.openBrandModalBtn.addEventListener('click', openCustomBrandModal);
  dom.closeBrandModalBtn.addEventListener('click', closeCustomBrandModal);
  dom.ccBank.addEventListener('change', applyBankDefaults);
  dom.saveCardBtn.addEventListener('click', handleSaveCard);
  dom.saveBrandBtn.addEventListener('click', handleSaveBrand);

  dom.brandSearch.addEventListener('input', debounce(handleBrandInput, 150));
  dom.brandSuggestions.addEventListener('click', event => {
    // 1. Check if it's a delete button click
    const deleteBtn = event.target.closest('[data-delete-brand]');
    if (deleteBtn) {
      event.stopPropagation(); // Stop the click from selecting the brand
      const brandId = deleteBtn.getAttribute('data-delete-brand');
      if (window.confirm('Delete this custom brand?')) {
        deleteCustomBrand(brandId);
        // Re-trigger the search input to refresh the dropdown without the deleted brand
        dom.brandSearch.dispatchEvent(new Event('input')); 
      }
      return;
    }

    // 2. Standard brand selection logic
    const target = event.target.closest('div[data-id]');
    if (!target) return;
    selectBrand(target.getAttribute('data-id'));
  });

  document.addEventListener('click', event => {
    if (!dom.brandSearch.contains(event.target) && !dom.brandSuggestions.contains(event.target)) {
      hideBrandSuggestions();
    }
  });

  dom.walletControls.addEventListener('click', event => {
    const editBtn = event.target.closest('#editWalletBtn');
    const cancelBtn = event.target.closest('#cancelWalletBtn');
    const saveBtn = event.target.closest('#saveWalletBtn');
    const selectAllBtn = event.target.closest('#selectAllWalletBtn');
    const unselectAllBtn = event.target.closest('#unselectAllWalletBtn');
    const deleteBtn = event.target.closest('[data-delete-card]');
    const checkbox = event.target.closest('input[type="checkbox"]');

    const syncWalletAndRefresh = selectedIds => {
      saveWalletIds(selectedIds);
      renderWalletUI();
      hideWalletWarning();
      if (state.currentBrandId && !dom.resultsSection.classList.contains('hidden')) {
        handleCalculate({ scroll: false });
      }
    };

    if (editBtn) {
      document.getElementById('walletPanel')?.classList.remove('hidden');
      document.getElementById('walletSummaryBar')?.classList.add('hidden');
      return;
    }

    if (cancelBtn) {
      renderWalletUI();
      return;
    }

    if (saveBtn) {
      const panel = document.getElementById('walletPanel');
      const selected = Array.from(panel.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.getAttribute('data-card-id'));
      syncWalletAndRefresh(selected);
      return;
    }

    if (selectAllBtn) {
      const panel = document.getElementById('walletPanel');
      
      // Find the currently open bank section. If none is open, do nothing.
      const visibleSection = panel.querySelector('.bank-section:not(.hidden)');
      if (!visibleSection) return; 

      const visibleCheckboxes = visibleSection.querySelectorAll('input[type="checkbox"]');
      
      // Only check boxes in the visible section, and stop if we hit the limit
      visibleCheckboxes.forEach(cb => {
        const currentTotal = document.querySelectorAll('.wallet-card-checkbox:checked').length;
        if (!cb.checked && currentTotal < WALLET_MAX_CARDS) {
          cb.checked = true;
        }
      });
      
      checkAndEnforceWalletLimit(); // Updates the live counter and disables the rest
      hideWalletWarning();
      
      if (state.currentBrandId && !dom.resultsSection.classList.contains('hidden')) {
        handleCalculate({ scroll: false });
      }
      return;
    }

    if (unselectAllBtn) {
      const panel = document.getElementById('walletPanel');
      panel.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
      
      checkAndEnforceWalletLimit(); // Lifts the disabled state
      if (state.currentBrandId && !dom.resultsSection.classList.contains('hidden')) {
        handleCalculate({ scroll: false });
      }
      return;
    }
    
    if (deleteBtn) {
      event.preventDefault();
      const cardId = deleteBtn.getAttribute('data-delete-card');
      const card = cards.find(item => item.id === cardId);
      if (!window.confirm(`Remove "${card?.name || cardId}"?`)) return;
      deleteCustomCard(cardId);
      renderWalletUI();
      if (state.currentBrandId && !dom.resultsSection.classList.contains('hidden')) {
        handleCalculate({ scroll: false });
      }
      return;
    }

    if (checkbox) {
      // 1. Safety check BEFORE proceeding to prevent the 11th card from checking
      const checkedBoxes = document.querySelectorAll('.wallet-card-checkbox:checked');
      if (checkedBoxes.length > WALLET_MAX_CARDS && checkbox.checked) {
        checkbox.checked = false; // Revert the browser's native check action
        return;
      }
      
      // 2. Enforce disabling other boxes if we hit 10
      checkAndEnforceWalletLimit();

      if (checkbox.checked) hideWalletWarning();
      if (state.currentBrandId && !dom.resultsSection.classList.contains('hidden')) {
        handleCalculate({ scroll: false });
      }
    }
  });

  dom.allCardsList.addEventListener('click', event => {
    const flagBtn = event.target.closest('.flag-btn');
    if (!flagBtn) return;
    event.preventDefault();
    event.stopPropagation();
    
    const brandId = flagBtn.getAttribute('data-flag-brand');
    const portalId = flagBtn.getAttribute('data-flag-portal');
    
    // Toggle the flag state in local storage
    toggleDiscountFlag(brandId, portalId);
    
    // If the flag was just turned ON, build and open the Google Form URL
    if (localStorage.getItem(`flag:${brandId}:${portalId}`) === '1') {
      const brandObj = brands.find(b => b.id === brandId);
      const portalObj = portals.find(p => p.id === portalId);
      const brandPortalData = brandObj?.portals?.find(p => p.portalId === portalId);

      const bName = brandObj ? brandObj.name : brandId;
      const pName = portalObj ? portalObj.name : portalId;
      const discount = brandPortalData && brandPortalData.upfrontDiscountPercent !== null 
        ? `${brandPortalData.upfrontDiscountPercent}%` : '—';
      const lv = lastVerified || 'Unknown';

      const reportURL = `https://docs.google.com/forms/d/e/1FAIpQLSeDeeY8MielvLxAvq9HCd7iyz9X473A7FwrjLgj-cb0sGAf4Q/viewform?usp=pp_url` +
        `&entry.1760196418=${encodeURIComponent(bName)}` +
        `&entry.251882125=${encodeURIComponent(pName)}` +
        `&entry.17865828=${encodeURIComponent(discount)}` +
        `&entry.49106349=${encodeURIComponent(lv)}`;

      window.open(reportURL, '_blank');
    }

    state.lastPortalRenderKey = '';
    refreshPortalResults({ scroll: false, force: true });
  });

  dom.customCardsList.addEventListener('click', event => {
    const deleteBtn = event.target.closest('[data-delete-card]');
    if (!deleteBtn) return;
    event.preventDefault();
    const cardId = deleteBtn.getAttribute('data-delete-card');
    const card = cards.find(item => item.id === cardId);
    if (!window.confirm(`Remove custom card "${card?.name || cardId}"?`)) return;
    deleteCustomCard(cardId);
    recalcAfterCardDelete();
  });

  dom.customCardModal.addEventListener('click', event => {
    if (event.target === dom.customCardModal) closeCustomCardModal();
  });

  dom.customBrandModal.addEventListener('click', event => {
    if (event.target === dom.customBrandModal) closeCustomBrandModal();
  });

  // menu Bar
  const categoryContainer = document.querySelector('.overflow-x-auto.hide-scrollbar');
  const categoryBrandsSection = document.getElementById('categoryBrandsSection');
  
  if (categoryContainer && categoryBrandsSection) {
    categoryContainer.addEventListener('click', event => {
      const btn = event.target.closest('button');
      if (!btn) return;

      // Check if the clicked button is ALREADY active before we reset them
      const isAlreadyActive = btn.classList.contains('bg-emerald-100');

      // 1. Reset all pills to inactive state
      categoryContainer.querySelectorAll('button').forEach(b => {
        b.className = "px-4 py-1.5 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium rounded-full whitespace-nowrap shrink-0 border border-slate-200 transition-colors";
      });

      // 2. Toggle behavior
      if (isAlreadyActive) {
        // If they clicked the active pill, just hide the grid and leave all pills inactive
        categoryBrandsSection.classList.add('hidden');
      } else {
        // Otherwise, activate this pill, render the brands, and show the grid
        btn.className = "px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full whitespace-nowrap shrink-0 border border-emerald-200 transition-colors";
        
        const categoryName = btn.textContent.trim();
        renderCategoryBrands(categoryName);
        categoryBrandsSection.classList.remove('hidden');
      }
    });
  }
  // Listen to clicks inside the Brand Grid cards
  const brandGrid = document.getElementById('brandGrid');
  if (brandGrid) {
    brandGrid.addEventListener('click', event => {
      const card = event.target.closest('[data-grid-brand-id]');
      if (!card) return;
      
      // 1. Select the brand and fill the input
      const brandId = card.getAttribute('data-grid-brand-id');
      selectBrand(brandId);
      
      // 2. Hide the category grid so it gets out of the user's way
      const categoryBrandsSection = document.getElementById('categoryBrandsSection');
      if (categoryBrandsSection) {
        categoryBrandsSection.classList.add('hidden');
      }

      // 3. Reset all the category pills back to white/inactive
      const categoryContainer = document.querySelector('.overflow-x-auto.hide-scrollbar');
      if (categoryContainer) {
        categoryContainer.querySelectorAll('button').forEach(b => {
          b.className = "px-4 py-1.5 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium rounded-full whitespace-nowrap shrink-0 border border-slate-200 transition-colors";
        });
      }

      // 4. Smoothly scroll the user to the search bar to see their selected brand
      document.getElementById('brandSearch').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

}