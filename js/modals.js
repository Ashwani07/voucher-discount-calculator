// Custom card and custom brand modal behavior. This module handles modal state
// and save actions, while events.js owns the listener registration.
import { bankPortalDefaults, bankSpecificPortalIds, saveCustomCard, saveCustomBrand } from './data.js';
import { dom } from './dom.js';
import { renderWalletUI, loadWalletIds, saveWalletIds } from './wallet.js';

const ccPortalFieldIds = {
  hdfc_smartbuy: 'ccSmartbuy',
  icici_ishop: 'ccIshop',
  axis_edgerewards: 'ccEdgerewards',
  axis_grabdeals: 'ccGrabdeals',
  amex_shopwise: 'ccShopwise'
};

// UPDATE (July 2026): which bank-specific portal ROWS are shown in the modal
// at all — separate from bankPortalDefaults (which governs the VALUE/frozen
// state of a shown field). Previously all 5 portal fields were always
// rendered, disabled-and-zeroed for banks they didn't apply to — which left
// the user staring at unlabeled "0" boxes with no way to tell which portal
// each one was (the placeholder text disappears once a value is set). Now
// only the row(s) relevant to the selected bank are shown; everything else
// is hidden entirely. "Other" shows none — only the Default field applies.
const BANK_OWN_PORTAL_IDS = {
  HDFC: ['hdfc_smartbuy'],
  ICICI: ['icici_ishop'],
  Axis: ['axis_edgerewards', 'axis_grabdeals'],
  Amex: ['amex_shopwise'],
  Other: []
};

const ccBankNotes = {
  HDFC: 'SmartBuy shows 5x as a starting default (Infinia/Regalia Gold rate). Edit it if your card differs — e.g. Diners Black Metal earns only 3x.',
  ICICI: 'iShop shows 6x as a starting default. Edit it if your specific card\'s rate differs.',
  Axis: 'EdgeRewards / GrabDeals show 1x as a starting default. Edit if your card\'s rate differs.',
  Amex: "Amex multipliers vary by specific card — check your card's T&Cs for Shopwise reward rate.",
  Other: 'No bank-specific portal applies to this card — it can only earn on the Default field below (Amazon, Gyftr & other general portals).'
};

function resetInputs(containerSelector) {
  document.querySelectorAll(containerSelector).forEach(input => { input.value = ''; });
}

export function openCustomCardModal() { dom.customCardModal.classList.remove('hidden'); }
export function closeCustomCardModal() { dom.customCardModal.classList.add('hidden'); }
export function openCustomBrandModal() { dom.customBrandModal.classList.remove('hidden'); }

export function applyBankDefaults() {
  const bank = dom.ccBank.value;
  const defaults = bankPortalDefaults[bank] || {};
  const relevantPortalIds = BANK_OWN_PORTAL_IDS[bank] || [];

  bankSpecificPortalIds.forEach(portalId => {
    const field = document.getElementById(ccPortalFieldIds[portalId]);
    if (!field) return;
    const row = field.closest('[data-portal-row]');

    if (relevantPortalIds.includes(portalId)) {
      // This portal belongs to the selected bank — show it and pre-fill the default.
      if (row) row.classList.remove('hidden');
      const cfg = defaults[portalId];
      field.value = cfg ? cfg.value : 0;
      field.disabled = cfg ? !!cfg.frozen : true;
    } else {
      // Doesn't apply to this bank — hide the row entirely and lock the
      // underlying value at 0 so handleSaveCard's reads stay correct even
      // though the field is out of view.
      if (row) row.classList.add('hidden');
      field.value = 0;
      field.disabled = true;
    }
  });

  document.getElementById('ccBankNote').textContent = ccBankNotes[bank] || '';
}

export function handleSaveCard() {
  const id = 'custom_' + Date.now();
  const name = document.getElementById('ccName').value.trim() || 'Custom Card';
  const newCard = {
    id,
    name,
    rewardType: document.getElementById('ccRewardType').value,
    pointValue: parseFloat(document.getElementById('ccPointValue').value) || 1,
    spendBlock: parseFloat(document.getElementById('ccSpendBlock').value) || 100,
    pointsPerBlock: parseFloat(document.getElementById('ccPointsPerBlock').value) || 1,
    portalMultipliers: {
      hdfc_smartbuy: parseFloat(document.getElementById('ccSmartbuy').value) || 0,
      icici_ishop: parseFloat(document.getElementById('ccIshop').value) || 0,
      axis_edgerewards: parseFloat(document.getElementById('ccEdgerewards').value) || 0,
      axis_grabdeals: parseFloat(document.getElementById('ccGrabdeals').value) || 0,
      amex_shopwise: parseFloat(document.getElementById('ccShopwise').value) || 0,
      default: parseFloat(document.getElementById('ccDefault').value) || 0
    },
    assumption_note: 'Custom user-defined card.'
  };

  saveCustomCard(newCard);
  const walletIds = loadWalletIds();
  if (!walletIds.includes(id)) {
    walletIds.push(id);
    saveWalletIds(walletIds);
  }

  closeCustomCardModal();
  resetInputs('#customCardModal input');
  dom.ccBank.value = 'Other';
  applyBankDefaults();
  renderWalletUI();
}

export function handleSaveBrand() {
  const id = 'custom_brand_' + Date.now();
  const name = document.getElementById('cbName').value.trim() || 'Custom Brand';
  const newBrand = { id, name, category_name: 'Custom', portals: [] };
  
  // Custom helper: Blank means unavailable. Negative means convenience fee.
  const push = (portalId, elId) => {
    const rawString = document.getElementById(elId).value.trim();
    
    // If the user leaves the box entirely blank, it is unavailable
    const isUnavailable = rawString === '';
    
    newBrand.portals.push({
      portalId,
      upfrontDiscountPercent: isUnavailable ? null : parseFloat(rawString),
      availability: isUnavailable ? 'unavailable' : 'available',
      site: ''
    });
  };

  push('hdfc_smartbuy', 'cbSmartbuy');
  push('gyftr', 'cbGyftr');
  push('icici_ishop', 'cbIshop');
  push('amazon', 'cbAmazon');
  push('axis_edgerewards', 'cbEdgerewards');
  push('axis_grabdeals', 'cbGrabdeals');
  push('amex_shopwise', 'cbShopwise');

  saveCustomBrand(newBrand);
  closeCustomBrandModal();
}

// Hides the custom brand modal and resets all inputs to blank (unavailable state)
export function closeCustomBrandModal() { 
  dom.customBrandModal.classList.add('hidden');
  
  document.getElementById('cbName').value = '';
  
  // Reset all portal inputs to empty strings
  ['cbSmartbuy', 'cbGyftr', 'cbIshop', 'cbAmazon', 'cbEdgerewards', 'cbGrabdeals', 'cbShopwise'].forEach(elId => {
    const el = document.getElementById(elId);
    if (el) el.value = '';
  });
}