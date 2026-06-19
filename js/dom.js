// Central DOM cache for VouchWise. Keep all static selectors here so feature
// modules can render without repeating document lookups.
export const dom = {
  calculateBtn: document.getElementById('calculateBtn'),
  resetBtn: document.getElementById('resetBtn'),
  resultsSection: document.getElementById('results'),
  brandSearch: document.getElementById('brandSearch'),
  brandSuggestions: document.getElementById('brandSuggestions'),
  walletControls: document.getElementById('walletControls'),
  calcError: document.getElementById('calcError'),
  toggleCustomCalcBtn: document.getElementById('toggleCustomCalcBtn'),
  customCalcPanel: document.getElementById('customCalcPanel'),
  calculateCustomBtn: document.getElementById('calculateCustomBtn'),
  resetCustomBtn: document.getElementById('resetCustomBtn'),
  customResults: document.getElementById('customResults'),
  customCalcError: document.getElementById('customCalcError'),
  verifiedDate: document.getElementById('verifiedDate'),
  customCardModal: document.getElementById('customCardModal'),
  openCardModalBtn: document.getElementById('openCardModalBtn'),
  closeCardModalBtn: document.getElementById('closeCardModalBtn'),
  ccBank: document.getElementById('ccBank'),
  saveCardBtn: document.getElementById('saveCardBtn'),
  customBrandModal: document.getElementById('customBrandModal'),
  openBrandModalBtn: document.getElementById('openBrandModalBtn'),
  closeBrandModalBtn: document.getElementById('closeBrandModalBtn'),
  saveBrandBtn: document.getElementById('saveBrandBtn'),
  allCardsList: document.getElementById('allCardsList'),
  customCardsList: document.getElementById('customCardsList')
};