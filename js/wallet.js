// Wallet persistence and rendering. This module owns saved card state and the
// wallet panel HTML, but not the event wiring.
import { cards, removeCustomCardFromStorage} from './data.js';
import { dom } from './dom.js';
import { groupCardsByBank } from './utils.js';

export const WALLET_MAX_CARDS = 10;
const WALLET_KEY = 'walletCardIds';
let expandedBanks = new Set(); // Tracks which bank pills are currently open

export function loadWalletIds() {
  try { return JSON.parse(localStorage.getItem(WALLET_KEY) || '[]'); }
  catch { return []; }
}

export function saveWalletIds(ids) {
  localStorage.setItem(WALLET_KEY, JSON.stringify(ids));
}

export function getActiveWalletIds() {
  const panel = document.getElementById('walletPanel');
  if (panel && !panel.classList.contains('hidden')) {
    return Array.from(panel.querySelectorAll('input[type="checkbox"]:checked'))
      .map(cb => cb.getAttribute('data-card-id'));
  }
  return loadWalletIds();
}

export function deleteCustomCard(cardId) {
  removeCustomCardFromStorage(cardId);
  saveWalletIds(loadWalletIds().filter(id => id !== cardId));
}

export function renderWalletUI() {
  const savedIds = loadWalletIds();
  const isFirstTime = savedIds.length === 0;
  dom.walletControls.innerHTML = '';

  // --- 1. Preserve the existing Summary Bar logic exactly ---
  if (!isFirstTime) {
    const savedCards = cards.filter(card => savedIds.includes(card.id));
    const label = savedCards.length <= 3
      ? savedCards.map(card => card.name).join(', ')
      : `${savedCards.slice(0, 2).map(card => card.name).join(', ')} +${savedCards.length - 2} more`;

    const summaryBar = document.createElement('div');
    summaryBar.id = 'walletSummaryBar';
    summaryBar.className = 'flex items-center justify-between gap-2 py-1';
    summaryBar.innerHTML = `
      <p class="text-sm text-slate-700 truncate flex-1">
        <span class="text-emerald-600 font-semibold">${savedCards.length} card${savedCards.length > 1 ? 's' : ''}:</span>
        <span class="text-slate-600"> ${label}</span>
      </p>
      <button id="editWalletBtn" class="text-xs font-semibold text-sky-600 hover:underline whitespace-nowrap">Edit</button>`;
    dom.walletControls.appendChild(summaryBar);
  }

  // --- 2. Build the new two-level Wallet Panel ---
  const panel = document.createElement('div');
  panel.id = 'walletPanel';
  // Changed from grid layout to block so pills sit naturally on top
  panel.className = isFirstTime ? 'block' : 'hidden';

  const groups = groupCardsByBank(cards);
  let panelHTML = '';

  panelHTML += `
  <div class="flex items-center gap-3 mb-4 border-b border-slate-100 pb-2">
    <button id="selectAllWalletBtn" type="button" class="text-xs font-medium text-sky-600 hover:underline cursor-pointer">Select All (This Bank)</button>
    <button id="unselectAllWalletBtn" type="button" class="text-xs font-medium text-sky-600 hover:underline cursor-pointer">Unselect All</button>
    <span id="liveWalletCount" class="text-xs font-semibold text-slate-500 ml-auto bg-slate-100 px-2 py-1 rounded">0/${WALLET_MAX_CARDS} Cards</span>
  </div>`;

  // Generate Bank Pills
  panelHTML += `<div class="flex flex-wrap gap-2 mb-4">`;
  for (const bankName of Object.keys(groups)) {
    const isExpanded = expandedBanks.has(bankName);
    const activeClass = isExpanded 
        ? 'bg-emerald-600 text-white border-emerald-600' 
        : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200';
    
    panelHTML += `
      <button type="button" data-bank="${bankName}" class="bank-pill px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${activeClass}">
        ${bankName}
      </button>`;
  }
  panelHTML += `</div>`;

  // Generate Card Checkboxes Grouped by Bank
  panelHTML += `<div class="space-y-4">`;
  for (const [bankName, bankCards] of Object.entries(groups)) {
    const isExpanded = expandedBanks.has(bankName);
    
    const rows = bankCards.map(card => {
      const checked = savedIds.includes(card.id) ? 'checked' : '';
      const isCustom = card.id.startsWith('custom_');
      const customTag = isCustom ? '<span class="text-[10px] bg-slate-200 px-1 rounded text-slate-500 ml-1">Custom</span>' : '';
      const deleteBtn = isCustom ? `<button data-delete-card="${card.id}" class="ml-auto text-[10px] text-red-300 hover:text-red-500 transition-colors" title="Remove">✕</button>` : '';
      
      return `
        <label class="flex items-center gap-2 text-sm text-slate-700 py-1 cursor-pointer hover:text-slate-900">
          <input type="checkbox" data-card-id="${card.id}" class="wallet-card-checkbox rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" ${checked}>
          <span class="flex-1">${card.name}${customTag}</span>
          ${deleteBtn}
        </label>`;
    }).join('');

    panelHTML += `
      <div class="bank-section ${isExpanded ? '' : 'hidden'}" data-bank-section="${bankName}">
        <p class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 border-b border-slate-100 pb-1">${bankName}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 pl-1">${rows}</div>
      </div>`;
  }
  panelHTML += `</div>`; // Close space-y-4

  // Limit Warning Message
  panelHTML += `
    <div id="walletLimitMessage" class="text-rose-500 text-xs font-medium mt-3 hidden">
      Wallet limit reached (${WALLET_MAX_CARDS} cards). Unselect a card to add another.
    </div>`;

  // Save / Cancel Actions
  panelHTML += `
    <div class="flex gap-2 mt-4 pt-4 border-t border-slate-100">
      <button id="saveWalletBtn" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-1.5 rounded transition-colors">${isFirstTime ? 'Save Wallet' : 'Save Changes'}</button>
      ${isFirstTime ? '' : '<button id="cancelWalletBtn" class="px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded transition-colors">Cancel</button>'}
    </div>`;

  panel.innerHTML = panelHTML;
  dom.walletControls.appendChild(panel);

  // --- 3. Wire up Pill Toggle Logic (Accordion Style - Single Bank Open) ---
  panel.querySelectorAll('.bank-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const selectedBank = e.currentTarget.getAttribute('data-bank');
      const isCurrentlyOpen = expandedBanks.has(selectedBank);
      
      // 1. Close ALL bank sections and reset ALL pills to the inactive (white) state
      expandedBanks.clear();
      panel.querySelectorAll('.bank-pill').forEach(p => {
        p.className = 'bank-pill px-3 py-1.5 rounded-full text-sm font-medium border transition-colors bg-white text-slate-600 hover:bg-slate-50 border-slate-200';
      });
      panel.querySelectorAll('.bank-section').forEach(sec => {
        sec.classList.add('hidden');
      });

      // 2. If the bank we just clicked wasn't already open, open it now
      if (!isCurrentlyOpen) {
        expandedBanks.add(selectedBank);
        
        // Make the clicked pill active (green)
        e.currentTarget.className = 'bank-pill px-3 py-1.5 rounded-full text-sm font-medium border transition-colors bg-emerald-600 text-white border-emerald-600';
        
        // Show the corresponding card checkboxes
        const section = panel.querySelector(`[data-bank-section="${selectedBank}"]`);
        if (section) section.classList.remove('hidden');
      }
    });
  });

  // Enforce limits immediately upon render
  checkAndEnforceWalletLimit();
}

export function checkAndEnforceWalletLimit() {
  const checkboxes = document.querySelectorAll('.wallet-card-checkbox');
  const checkedCount = document.querySelectorAll('.wallet-card-checkbox:checked').length;
  const messageDiv = document.getElementById('walletLimitMessage');
  const liveCountSpan = document.getElementById('liveWalletCount');

  // Update the live counter text and color
  if (liveCountSpan) {
    liveCountSpan.textContent = `${checkedCount}/${WALLET_MAX_CARDS} Cards`;
    if (checkedCount >= WALLET_MAX_CARDS) {
      liveCountSpan.className = 'text-xs font-semibold ml-auto bg-rose-100 text-rose-700 px-2 py-1 rounded';
    } else {
      liveCountSpan.className = 'text-xs font-semibold text-slate-500 ml-auto bg-slate-100 px-2 py-1 rounded';
    }
  }

  // Enforce the disabled state on unchecked boxes
  if (checkedCount >= WALLET_MAX_CARDS) {
    checkboxes.forEach(cb => {
      if (!cb.checked) cb.disabled = true;
    });
    if (messageDiv) messageDiv.classList.remove('hidden');
  } else {
    checkboxes.forEach(cb => {
      cb.disabled = false;
    });
    if (messageDiv) messageDiv.classList.add('hidden');
  }
}