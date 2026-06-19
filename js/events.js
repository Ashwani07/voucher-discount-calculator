// All listener registration lives here. Feature modules expose handlers, and
// this file wires them up once during startup.
import { dom } from './dom.js';
import { state } from './state.js';
import { debounce } from './utils.js';
import { cards } from './data.js';
import { handleBrandInput, hideBrandSuggestions, selectBrand } from './search.js';
import { handleCalculate, handleReset, refreshPortalResults, toggleDiscountFlag } from './results.js';
import { handleCustomCalculate, resetCustomCalcForm, toggleCustomCalcPanel, recalcAfterCardDelete } from './customCalc.js';
import { renderWalletUI, saveWalletIds, deleteCustomCard } from './wallet.js';
import { openCustomCardModal, closeCustomCardModal, openCustomBrandModal, closeCustomBrandModal, applyBankDefaults, handleSaveCard, handleSaveBrand } from './modals.js';

export function initEvents() {
  dom.calculateBtn.addEventListener('click', () => {
    state.isFirstCalculate = true;
    handleCalculate({ scroll: true });
  });

  dom.resetBtn.addEventListener('click', handleReset);
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
    const deleteBtn = event.target.closest('[data-delete-card]');
    const checkbox = event.target.closest('input[type="checkbox"]');

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
      saveWalletIds(selected);
      renderWalletUI();
      if (state.currentBrandId && !document.getElementById('results').classList.contains('hidden')) {
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
      if (state.currentBrandId && !document.getElementById('results').classList.contains('hidden')) {
        handleCalculate({ scroll: false });
      }
      return;
    }

    if (checkbox) {
      if (state.currentBrandId && !document.getElementById('results').classList.contains('hidden')) {
        handleCalculate({ scroll: false });
      }
    }
  });

  dom.allCardsList.addEventListener('click', event => {
    const flagBtn = event.target.closest('.flag-btn');
    if (!flagBtn) return;
    event.preventDefault();
    event.stopPropagation();
    toggleDiscountFlag(flagBtn.getAttribute('data-flag-brand'), flagBtn.getAttribute('data-flag-portal'));
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
}