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
  shopwise: 'ccShopwise'
};

const ccBankNotes = {
  Amex: "Amex multipliers vary by specific card — check your card's T&Cs for Shopwise reward rate.",
  Other: 'SmartBuy / iShop / EdgeRewards / GrabDeals / Shopwise are locked at 0 — your card can only earn on its own bank’s portal(s).'
};

function resetInputs(containerSelector) {
  document.querySelectorAll(containerSelector).forEach(input => { input.value = ''; });
}

export function openCustomCardModal() { dom.customCardModal.classList.remove('hidden'); }
export function closeCustomCardModal() { dom.customCardModal.classList.add('hidden'); }
export function openCustomBrandModal() { dom.customBrandModal.classList.remove('hidden'); }
export function closeCustomBrandModal() { dom.customBrandModal.classList.add('hidden'); }

export function applyBankDefaults() {
  const bank = dom.ccBank.value;
  const defaults = bankPortalDefaults[bank] || {};

  bankSpecificPortalIds.forEach(portalId => {
    const field = document.getElementById(ccPortalFieldIds[portalId]);
    if (!field) return;
    const cfg = defaults[portalId];
    if (cfg) {
      field.value = cfg.value;
      field.disabled = !!cfg.frozen;
    } else {
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
      shopwise: parseFloat(document.getElementById('ccShopwise').value) || 0,
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
  const push = (portalId, elId) => newBrand.portals.push({
    portalId,
    upfrontDiscountPercent: parseFloat(document.getElementById(elId).value) || 0,
    site: ''
  });

  push('hdfc_smartbuy', 'cbSmartbuy');
  push('gyftr', 'cbGyftr');
  push('icici_ishop', 'cbIshop');
  push('amazon', 'cbAmazon');
  push('axis_edgerewards', 'cbEdgerewards');
  push('axis_grabdeals', 'cbGrabdeals');
  push('shopwise', 'cbShopwise');

  saveCustomBrand(newBrand);
  closeCustomBrandModal();
  resetInputs('#customBrandModal input');
}