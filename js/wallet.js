// Wallet persistence and rendering. This module owns saved card state and the
// wallet panel HTML, but not the event wiring.
import { cards } from './data.js';
import { dom } from './dom.js';
import { groupCardsByBank } from './utils.js';

const WALLET_KEY = 'walletCardIds';

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
  const index = cards.findIndex(card => card.id === cardId);
  if (index !== -1) cards.splice(index, 1);
  const stored = JSON.parse(localStorage.getItem('customCards') || '[]');
  localStorage.setItem('customCards', JSON.stringify(stored.filter(card => card.id !== cardId)));
  saveWalletIds(loadWalletIds().filter(id => id !== cardId));
}

export function renderWalletUI() {
  const savedIds = loadWalletIds();
  const isFirstTime = savedIds.length === 0;
  dom.walletControls.innerHTML = '';

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

  const panel = document.createElement('div');
  panel.id = 'walletPanel';
  panel.className = isFirstTime ? 'grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2' : 'hidden grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2';

  const groups = groupCardsByBank(cards);
  let panelHTML = '';

  for (const [bankName, bankCards] of Object.entries(groups)) {
    const rows = bankCards.map(card => {
      const checked = savedIds.includes(card.id) ? 'checked' : '';
      const isCustom = card.id.startsWith('custom_');
      const customTag = isCustom ? '<span class="text-[10px] bg-slate-200 px-1 rounded text-slate-500 ml-1">Custom</span>' : '';
      const deleteBtn = isCustom ? `<button data-delete-card="${card.id}" class="ml-auto text-[10px] text-red-300 hover:text-red-500 transition-colors" title="Remove">✕</button>` : '';
      return `
        <label class="flex items-center gap-2 text-sm text-slate-700 py-1 cursor-pointer hover:text-slate-900">
          <input type="checkbox" data-card-id="${card.id}" class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" ${checked}>
          <span class="flex-1">${card.name}${customTag}</span>
          ${deleteBtn}
        </label>`;
    }).join('');

    panelHTML += `
      <div class="mb-3 last:mb-0">
        <p class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">${bankName}</p>
        <div class="pl-1">${rows}</div>
      </div>`;
  }

  panelHTML += `
    <div class="flex gap-2 mt-3 pt-3 border-t border-slate-100">
      <button id="saveWalletBtn" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-1.5 rounded transition-colors">${isFirstTime ? 'Save Wallet' : 'Save Changes'}</button>
      ${isFirstTime ? '' : '<button id="cancelWalletBtn" class="px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded transition-colors">Cancel</button>'}
    </div>`;

  panel.innerHTML = panelHTML;
  dom.walletControls.appendChild(panel);
}