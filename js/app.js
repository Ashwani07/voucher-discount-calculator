import { portals, cards, brands, saveCustomCard, saveCustomBrand, lastVerified, bankPortalDefaults, bankSpecificPortalIds } from './data.js';
import { calculateTrueNetMetrics, getCardRewardRate } from './calculator.js';

let currentBrandId   = null;
let isFirstCalculate = true;

/************************************************************************
 * WALLET PERSISTENCE
 ************************************************************************/
const WALLET_KEY = 'walletCardIds';

function loadWalletIds() {
  try { return JSON.parse(localStorage.getItem(WALLET_KEY) || '[]'); }
  catch { return []; }
}
function saveWalletIds(ids) {
  localStorage.setItem(WALLET_KEY, JSON.stringify(ids));
}
function getActiveWalletIds() {
  const panel = document.getElementById('walletPanel');
  if (panel && !panel.classList.contains('hidden')) {
    return Array.from(panel.querySelectorAll('input[type="checkbox"]:checked'))
      .map(cb => cb.getAttribute('data-card-id'));
  }
  return loadWalletIds();
}
function deleteCustomCard(cardId) {
  const idx = cards.findIndex(c => c.id === cardId);
  if (idx !== -1) cards.splice(idx, 1);
  const stored = JSON.parse(localStorage.getItem('customCards') || '[]');
  localStorage.setItem('customCards', JSON.stringify(stored.filter(c => c.id !== cardId)));
  saveWalletIds(loadWalletIds().filter(id => id !== cardId));
}

/************************************************************************
 * FLAGGED DISCOUNTS
 ************************************************************************/
function isDiscountFlagged(brandId, portalId) {
  return localStorage.getItem(`flag:${brandId}:${portalId}`) === '1';
}
function toggleDiscountFlag(brandId, portalId) {
  const key = `flag:${brandId}:${portalId}`;
  localStorage.getItem(key) === '1' ? localStorage.removeItem(key) : localStorage.setItem(key, '1');
}

/************************************************************************
 * DOM REFERENCES
 ************************************************************************/
const calculateBtn     = document.getElementById('calculateBtn');
const resetBtn         = document.getElementById('resetBtn');
const resultsSection   = document.getElementById('results');
const bestCardBox      = document.getElementById('bestCardBox');
const brandSearch      = document.getElementById('brandSearch');
const brandSuggestions = document.getElementById('brandSuggestions');
const walletControls   = document.getElementById('walletControls');
const calcError        = document.getElementById('calcError');

/************************************************************************
 * CUSTOM DISCOUNT CALCULATOR - DOM REFERENCES
 ************************************************************************/
const toggleCustomCalcBtn   = document.getElementById('toggleCustomCalcBtn');
const customCalcPanel       = document.getElementById('customCalcPanel');
const calculateCustomBtn    = document.getElementById('calculateCustomBtn');
const resetCustomBtn        = document.getElementById('resetCustomBtn');
const customResults         = document.getElementById('customResults');
const customCalcError       = document.getElementById('customCalcError');

/************************************************************************
 * WALLET UI
 ************************************************************************/
function buildBankGroups() {
  const groups = {};
  cards.forEach(card => {
    let bank = 'Others';
    if      (card.id.startsWith('hdfc_'))   bank = 'HDFC Bank';
    else if (card.id.startsWith('sbi_'))    bank = 'SBI Card';
    else if (card.id.startsWith('axis_'))   bank = 'Axis Bank';
    else if (card.id.startsWith('icici_'))  bank = 'ICICI Bank';
    else if (card.id.startsWith('amex_'))   bank = 'American Express';
    else if (card.id.startsWith('hsbc_'))   bank = 'HSBC Bank';
    else if (card.id.startsWith('custom_')) bank = 'Custom Cards';
    if (!groups[bank]) groups[bank] = [];
    groups[bank].push(card);
  });
  return groups;
}

function renderWalletUI() {
  const savedIds    = loadWalletIds();
  const isFirstTime = savedIds.length === 0;
  walletControls.innerHTML = '';

  // ── SUMMARY BAR (return visits) ──────────────────────────────────────
  if (!isFirstTime) {
    const savedCards = cards.filter(c => savedIds.includes(c.id));
    const label = savedCards.length <= 3
      ? savedCards.map(c => c.name).join(', ')
      : savedCards.slice(0, 2).map(c => c.name).join(', ') + ` +${savedCards.length - 2} more`;

    const summaryBar = document.createElement('div');
    summaryBar.id        = 'walletSummaryBar';
    summaryBar.className = 'flex items-center justify-between gap-2 py-1';
    summaryBar.innerHTML = `
      <p class="text-sm text-slate-700 truncate flex-1">
        <span class="text-emerald-600 font-semibold">${savedCards.length} card${savedCards.length > 1 ? 's' : ''}:</span>
        <span class="text-slate-600"> ${label}</span>
      </p>
      <button id="editWalletBtn" class="text-xs font-semibold text-sky-600 hover:underline whitespace-nowrap">Edit</button>`;
    walletControls.appendChild(summaryBar);
  }

  // ── CHECKBOX PANEL ───────────────────────────────────────────────────
  const panel     = document.createElement('div');
  panel.id        = 'walletPanel';
  panel.className = isFirstTime 
  ? 'grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2' 
  : 'hidden grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2';

  const groups  = buildBankGroups();
  let panelHTML = '';

  for (const [bankName, bankCards] of Object.entries(groups)) {
    const rows = bankCards.map(card => {
      const checked   = savedIds.includes(card.id) ? 'checked' : '';
      const isCustom  = card.id.startsWith('custom_');
      const customTag = isCustom
        ? `<span class="text-[10px] bg-slate-200 px-1 rounded text-slate-500 ml-1">Custom</span>` : '';
      const deleteBtn = isCustom
        ? `<button data-delete-card="${card.id}" class="ml-auto text-[10px] text-red-300 hover:text-red-500 transition-colors" title="Remove">✕</button>` : '';
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

  const isEdit = !isFirstTime;
  panelHTML += `
    <div class="flex gap-2 mt-3 pt-3 border-t border-slate-100">
      <button id="saveWalletBtn" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-1.5 rounded transition-colors">
        ${isEdit ? 'Save Changes' : 'Save Wallet'}
      </button>
      ${isEdit ? `<button id="cancelWalletBtn" class="px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded transition-colors">Cancel</button>` : ''}
    </div>`;

  panel.innerHTML = panelHTML;
  walletControls.appendChild(panel);

  // Edit button
  walletControls.querySelector('#editWalletBtn')?.addEventListener('click', () => {
    panel.classList.remove('hidden');
    document.getElementById('walletSummaryBar')?.classList.add('hidden');
  });

  // Cancel button
  panel.querySelector('#cancelWalletBtn')?.addEventListener('click', () => {
    panel.classList.add('hidden');
    document.getElementById('walletSummaryBar')?.classList.remove('hidden');
    const saved = loadWalletIds();
    panel.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.checked = saved.includes(cb.getAttribute('data-card-id'));
    });
  });

  // Save Wallet button
  panel.querySelector('#saveWalletBtn')?.addEventListener('click', () => {
    const selected = Array.from(panel.querySelectorAll('input[type="checkbox"]:checked'))
      .map(cb => cb.getAttribute('data-card-id'));
    saveWalletIds(selected);
    renderWalletUI();
    if (currentBrandId && !resultsSection.classList.contains('hidden')) {
      handleCalculate({ scroll: false });
    }
  });

  // Delete custom card
  panel.querySelectorAll('[data-delete-card]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = cards.find(c => c.id === btn.getAttribute('data-delete-card'));
      if (!confirm(`Remove "${card?.name || 'this card'}"?`)) return;
      deleteCustomCard(btn.getAttribute('data-delete-card'));
      renderWalletUI();
    });
  });

  // Live recalculate on checkbox change (no scroll)
  panel.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      if (currentBrandId && !resultsSection.classList.contains('hidden')) {
        handleCalculate({ scroll: false });
      }
    });
  });
}

renderWalletUI();

// Populate verified date
const verifiedDateEl = document.getElementById('verifiedDate');
if (verifiedDateEl && lastVerified) verifiedDateEl.textContent = lastVerified;

/************************************************************************
 * AUTOCOMPLETE
 ************************************************************************/
brandSearch.addEventListener('input', () => {
  const q = brandSearch.value.trim().toLowerCase();
  if (!q) { brandSuggestions.classList.add('hidden'); currentBrandId = null; return; }
  const matches = brands.filter(b => b.name.toLowerCase().includes(q)).slice(0, 10);
  if (!matches.length) { brandSuggestions.classList.add('hidden'); return; }
  brandSuggestions.innerHTML = matches
    .map(b => `<div data-id="${b.id}" class="hover:bg-slate-100 p-2 cursor-pointer border-b last:border-0 text-sm">${b.name}</div>`)
    .join('');
  brandSuggestions.classList.remove('hidden');
});

brandSuggestions.addEventListener('click', (e) => {
  const target = e.target.closest('div[data-id]');
  if (!target) return;
  const brand = brands.find(b => b.id === target.getAttribute('data-id'));
  if (!brand) return;
  brandSearch.value = brand.name;
  currentBrandId    = brand.id;
  isFirstCalculate  = true;
  brandSuggestions.classList.add('hidden');
});

document.addEventListener('click', (e) => {
  if (!brandSearch.contains(e.target) && !brandSuggestions.contains(e.target)) {
    brandSuggestions.classList.add('hidden');
  }
});

/************************************************************************
 * RESET
 ************************************************************************/
function handleReset() {
  resultsSection.classList.add('hidden');
  bestCardBox.classList.add('hidden');
  document.getElementById('allCardsList').innerHTML = '';
  currentBrandId   = null;
  isFirstCalculate = true;
  brandSearch.value = '';
  brandSuggestions.classList.add('hidden');
  calcError.classList.add('hidden');
  document.getElementById('resultTitle').textContent    = 'Result';
  document.getElementById('resultSubtitle').textContent = '';
  document.getElementById('upfrontValue').textContent   = '—';
  document.getElementById('rewardValue').textContent    = '—';
  document.getElementById('netValue').textContent       = '—';
  document.getElementById('timestamp').textContent      = '';
}
resetBtn.addEventListener('click', handleReset);

/************************************************************************
 * CALCULATION PIPELINE
 ************************************************************************/
function findPortal(portalId) {
  return portals.find(p => p.id === portalId) || null;
}

function getEligibleResults(brand, walletSelectedIds, voucherAmount) {
  const results = [];

  for (const p of brand.portals) {
    if (p.upfrontDiscountPercent === null) continue;
    const portal = findPortal(p.portalId);
    if (!portal) continue;

    // A card is eligible for a portal if it would get a non-zero multiplier
    // there. Mirrors getMultiplier's fallback chain exactly (portal.id ->
    // portal.group -> default) so eligibility and the multiplier actually
    // used never disagree. This is the same data the Bank dropdown sets for
    // custom cards — no separate ID-prefix list to keep in sync.
    let allowedCards = cards.filter(c => {
      const pm = c.portalMultipliers || {};
      const m = pm[p.portalId] ?? pm[portal.group] ?? pm.default ?? 0;
      return m > 0;
    });

    allowedCards = allowedCards.filter(c => walletSelectedIds.includes(c.id));

    for (const card of allowedCards) {
      const metrics = calculateTrueNetMetrics(
        card,
        { ...portal, upfrontDiscountPercent: p.upfrontDiscountPercent },
        p,
        voucherAmount
      );
      const cardRewardRate = getCardRewardRate(card, metrics.multiplier);

      results.push({
        portal, portalId: p.portalId, card,
        upfront:         p.upfrontDiscountPercent || 0,
        reward:          cardRewardRate,
        net:             metrics.computedTrueNet,
        computedTrueNet: metrics.computedTrueNet,
        metrics,         portalConfig: p
      });
    }
  }
  return results;
}

function groupAndSortResults(results) {
  const byCard = results.reduce((acc, r) => {
    if (!acc[r.card.id]) acc[r.card.id] = { card: r.card, entries: [] };
    acc[r.card.id].entries.push(r);
    return acc;
  }, {});
  return Object.values(byCard).map(g => {
    g.entries.sort((a, b) => b.computedTrueNet - a.computedTrueNet);
    g.bestNet = g.entries[0].computedTrueNet;
    return g;
  }).sort((a, b) => b.bestNet - a.bestNet);
}

/************************************************************************
 * RENDER
 ************************************************************************/
function renderAllCardsList(groups, activeBrandObj) {
  const voucherAmount = parseFloat(document.getElementById('voucherAmount').value) || 1000;

  const generateCardBlock = (group) => {
    const canApply = group.card.applyURL &&
      group.card.applyStatus !== 'invite_only' &&
      group.card.applyStatus !== 'closed';

    const applyBadge = canApply
      ? `<a href="${group.card.applyURL}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"
           class="text-[10px] uppercase font-bold tracking-wider text-blue-600 border border-blue-200 hover:bg-blue-50 px-2 py-0.5 rounded transition-colors">Apply Now</a>`
      : group.card.applyStatus === 'invite_only'
        ? `<span class="text-[10px] text-slate-400 border border-slate-200 px-2 py-0.5 rounded">Invite Only</span>`
        : '';

    const noteText = group.card.assumption_note || '';

    const tableRows = group.entries.map(entry => {
      const p            = entry.portalConfig;
      const flagged      = isDiscountFlagged(activeBrandObj.id, entry.portalId);
      const buyURL       = p?.site || '';
      const perks        = p?.perks || '';
      const disclaimer   = p?.disclaimer || '';
      const notAvailable = disclaimer.toLowerCase().includes('not available');

      const currencyLabel = entry.card.id === 'axis_atlas' ? 'Miles' : 'RP';

      // Calculate the specific yield against the original voucher amount
      const cardYieldPercent = (entry.metrics.cashValue / voucherAmount * 100).toFixed(2);

      // Generate clear UX strings explaining the exact flow of money
      const exampleText = entry.card.rewardType === 'points' && entry.card.spendBlock
        ? `Pay ₹${entry.metrics.netPaid.toFixed(0)} (after discount) → ${entry.metrics.rpEarned} ${currencyLabel} (₹${entry.metrics.cashValue.toFixed(2)} value / ${cardYieldPercent}% of voucher) → Net ₹${entry.metrics.finalNetCost.toFixed(0)}`
        : `Pay ₹${entry.metrics.netPaid.toFixed(0)} (after discount) → ₹${entry.metrics.cashValue.toFixed(2)} (${cardYieldPercent}% of voucher) cashback → Net ₹${entry.metrics.finalNetCost.toFixed(0)}`;
      const disclaimerHTML = disclaimer
        ? `<div class="text-[10px] text-amber-700 bg-amber-50 border border-amber-100 rounded px-1.5 py-0.5 mt-1">${disclaimer}</div>` : '';
      const perksHTML = perks
        ? `<div class="inline-block mt-0.5 bg-emerald-50 text-[10px] text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-200">${perks}</div>` : '';
      const shownDiscountStr = entry.upfront > 0 ? entry.upfront.toFixed(1) + '%' : 'N/A';
      const reportURL =
        `https://docs.google.com/forms/d/e/1FAIpQLSeDeeY8MielvLxAvq9HCd7iyz9X473A7FwrjLgj-cb0sGAf4Q/viewform?usp=pp_url` +
        `&entry.1760196418=${encodeURIComponent(activeBrandObj.name)}` +
        `&entry.251882125=${encodeURIComponent(entry.portal.name)}` +
        `&entry.17865828=${encodeURIComponent(shownDiscountStr)}` +
        `&entry.49106349=${encodeURIComponent(lastVerified)}`;
      const flagHTML = `
        <a href="${reportURL}" target="_blank" rel="noopener noreferrer" data-flag-brand="${activeBrandObj.id}" data-flag-portal="${entry.portalId}"
          class="flag-btn text-[10px] ${flagged ? 'text-amber-500' : 'text-slate-300 hover:text-slate-400'} ml-1 transition-colors"
          title="${flagged ? 'Marked as possibly outdated — click to unmark' : 'Report this discount as outdated or incorrect'}">⚑</a>`;
      const flaggedBadge = flagged
        ? `<span class="text-[10px] text-amber-600 bg-amber-50 border border-amber-200 px-1 py-0.5 rounded ml-1">Reported</span>` : '';
      const buyBtn = (buyURL && !notAvailable)
        ? `<a href="${buyURL}" target="_blank" rel="noopener noreferrer"
             class="text-[10px] whitespace-nowrap bg-slate-700 hover:bg-slate-900 text-white px-2 py-1 rounded transition-colors">Buy ↗</a>`
        : `<span class="text-[10px] text-slate-300">—</span>`;

      return `
        <tr class="border-b border-slate-100 last:border-0 hover:bg-slate-50">
          <td class="py-2 pr-2 align-top">
            <div class="font-medium text-sm text-slate-700">${entry.portal.name}${flagHTML}${flaggedBadge}</div>
            ${perksHTML}${disclaimerHTML}
            <div class="text-[10px] text-slate-400 mt-1">${exampleText}</div>
          </td>
          <td class="py-2 px-2 text-right align-top whitespace-nowrap text-xs text-slate-500">
            ${entry.upfront > 0 ? entry.upfront.toFixed(1) + '%' : '—'}
          </td>
          <td class="py-2 px-2 text-right align-top whitespace-nowrap text-xs text-slate-500">
            ${entry.reward.toFixed(2)}%
          </td>
          <td class="py-2 pl-2 text-right align-top whitespace-nowrap font-semibold text-emerald-600 text-sm">
            ${entry.computedTrueNet.toFixed(2)}%
          </td>
          <td class="py-2 pl-3 text-right align-top">${buyBtn}</td>
        </tr>`;
    }).join('');

    const bestNet = group.entries[0].computedTrueNet;

    return `
      <details class="bg-white border border-slate-200 rounded-md mt-3 overflow-hidden group">
        <summary class="flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-slate-200 cursor-pointer list-none">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-semibold text-sm text-slate-800">${group.card.name}</span>
            <span class="text-xs font-semibold text-emerald-600">${bestNet.toFixed(2)}% best</span>
          </div>
          <div class="flex items-center gap-2">
            ${applyBadge}
            <span class="transform group-open:rotate-180 transition-transform duration-200 text-xs text-slate-400">▼</span>
          </div>
        </summary>
        <div class="px-3 overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-100">
                <th class="text-left py-1.5 pr-2">Portal</th>
                <th class="text-right py-1.5 px-2">Upfront</th>
                <th class="text-right py-1.5 px-2">Card</th>
                <th class="text-right py-1.5 pl-2">Net</th>
                <th class="text-right py-1.5 pl-3">Buy</th>
              </tr>
            </thead>
            <tbody>${tableRows}</tbody>
          </table>
        </div>
        ${noteText ? `<div class="text-[11px] italic text-slate-400 px-3 pb-2 pt-1 border-t border-slate-100">💡 ${noteText}</div>` : ''}
      </details>`;
  };

  const top2 = groups.slice(0, 2);
  const rest = groups.slice(2);
  let html   = top2.map(generateCardBlock).join('');

  if (rest.length) {
    html += `
      <details class="mt-4 group">
        <summary class="cursor-pointer text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-2 rounded-md hover:bg-slate-200 transition-colors list-none flex justify-between items-center">
          <span>View ${rest.length} other card${rest.length > 1 ? 's' : ''}</span>
          <span class="transform group-open:rotate-180 transition-transform duration-200 text-xs">▼</span>
        </summary>
        <div class="mt-1">${rest.map(generateCardBlock).join('')}</div>
      </details>`;
  }

  const allCardsList = document.getElementById('allCardsList');
  allCardsList.innerHTML = html;

  allCardsList.querySelectorAll('.flag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleDiscountFlag(btn.getAttribute('data-flag-brand'), btn.getAttribute('data-flag-portal'));
      const brand = brands.find(b => b.id === currentBrandId);
      const va    = parseFloat(document.getElementById('voucherAmount').value) || 1000;
      renderAllCardsList(groupAndSortResults(getEligibleResults(brand, getActiveWalletIds(), va)), brand);
    });
  });
}

function renderResults(groups, brand, shouldScroll) {
  const best     = groups[0].entries[0];
  const runnerUp = groups.length > 1 ? groups[1].entries[0] : null;

  document.getElementById('resultTitle').textContent    = brand.name;
  document.getElementById('resultSubtitle').textContent = `${best.card.name} via ${best.portal.name}`;
  document.getElementById('timestamp').textContent      = new Date().toLocaleTimeString();
  document.getElementById('upfrontValue').textContent   = `${best.upfront.toFixed(2)}%`;
  document.getElementById('rewardValue').textContent    = `${best.reward.toFixed(2)}%`;
  document.getElementById('netValue').textContent       = `${best.computedTrueNet.toFixed(2)}%`;

  const buyBannerBtn = (url, cls) => url
    ? `<a href="${url}" target="_blank" rel="noopener noreferrer"
         class="text-xs ${cls} text-white px-4 py-1.5 rounded transition-colors whitespace-nowrap font-medium">Buy Voucher ↗</a>` : '';

  bestCardBox.innerHTML = `
    <div class="p-3 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <div class="flex items-center gap-2"><span>🥇</span><span>Best: ${best.card.name} — ${best.computedTrueNet.toFixed(2)}% via ${best.portal.name}</span></div>
      ${buyBannerBtn(best.portalConfig?.site, 'bg-emerald-600 hover:bg-emerald-700')}
    </div>
    ${runnerUp ? `
    <div class="p-3 rounded-md bg-blue-50 border border-blue-200 text-blue-800 font-medium mt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <div class="flex items-center gap-2"><span>🥈</span><span>2nd: ${runnerUp.card.name} — ${runnerUp.computedTrueNet.toFixed(2)}% via ${runnerUp.portal.name}</span></div>
      ${buyBannerBtn(runnerUp.portalConfig?.site, 'bg-blue-600 hover:bg-blue-700')}
    </div>` : ''}`;

  bestCardBox.classList.remove('hidden');
  renderAllCardsList(groups, brand);
  resultsSection.classList.remove('hidden');
  if (shouldScroll) resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/************************************************************************
 * MUTUALLY-EXCLUSIVE RESULT SECTIONS
 * Only one of "Portal comparison" (resultsSection) and "Coupon calculation"
 * (customResults) is visible at a time, so numbers on screen always belong
 * to a single, unambiguous question.
 ************************************************************************/
function hidePortalResults() {
  resultsSection.classList.add('hidden');
}
function hideCustomResults() {
  customResults.classList.add('hidden');
}

/************************************************************************
 * ORCHESTRATOR
 ************************************************************************/
function handleCalculate({ scroll = true } = {}) {
  const showError  = (msg) => { calcError.textContent = msg; calcError.classList.remove('hidden'); };
  const clearError = () => calcError.classList.add('hidden');

  if (!currentBrandId) return showError('Please search and select a brand first.');

  const rawAmount = parseFloat(document.getElementById('voucherAmount').value);
  if (!rawAmount || rawAmount < 1) return showError('Please enter a valid voucher amount (minimum ₹1).');
  clearError();

  hideCustomResults();

  const brand = brands.find(b => b.id === currentBrandId);
  if (!brand) return;

  const walletIds     = getActiveWalletIds();
  const voucherAmount = rawAmount;

  // Collapse wallet selection panel if open, now that we've captured the selection
  const walletPanel = document.getElementById('walletPanel');
  if (walletPanel && !walletPanel.classList.contains('hidden')) {
    walletPanel.classList.add('hidden');
    document.getElementById('walletSummaryBar')?.classList.remove('hidden');
  }

  if (!walletIds.length) {
    resultsSection.classList.remove('hidden');
    bestCardBox.classList.add('hidden');
    document.getElementById('allCardsList').innerHTML =
      `<div class="p-3 text-sm text-slate-600 mt-4">No card selected. Use the Edit button above to add cards to your wallet.</div>`;
    return;
  }

  const rawResults = getEligibleResults(brand, walletIds, voucherAmount);
  if (!rawResults.length) {
    resultsSection.classList.remove('hidden');
    bestCardBox.classList.add('hidden');
    document.getElementById('allCardsList').innerHTML =
      `<div class="p-3 text-sm text-slate-600 mt-4">None of your saved cards work with portals available for this brand.</div>`;
    return;
  }

  const sortedGroups = groupAndSortResults(rawResults);
  renderResults(sortedGroups, brand, scroll && isFirstCalculate);
  isFirstCalculate = false;
}

calculateBtn.addEventListener('click', () => {
  isFirstCalculate = true;
  handleCalculate({ scroll: true });
});

/************************************************************************
 * CUSTOM DISCOUNT CALCULATOR
 ************************************************************************/

// Toggle panel visibility
toggleCustomCalcBtn.addEventListener('click', () => {
  const isHidden = customCalcPanel.classList.contains('hidden');
  customCalcPanel.classList.toggle('hidden');
  toggleCustomCalcBtn.textContent = isHidden ? 'Collapse' : 'Expand';
});

// Reset custom calculator
resetCustomBtn.addEventListener('click', () => {
  document.getElementById('customBrandName').value = '';
  document.getElementById('customDiscountPercent').value = '';
  document.getElementById('customVoucherAmount').value = '1000';
  customResults.classList.add('hidden');
  customCalcError.classList.add('hidden');
  lastCustomCalc = null;
});

// Calculate custom discount
calculateCustomBtn.addEventListener('click', handleCustomCalculate);

function handleCustomCalculate() {
  const showError  = (msg) => { customCalcError.textContent = msg; customCalcError.classList.remove('hidden'); };
  const clearError = () => customCalcError.classList.add('hidden');

  const discountPercent = parseFloat(document.getElementById('customDiscountPercent').value);
  if (isNaN(discountPercent)) {
    return showError('Please enter a valid discount percentage.');
  }

  const voucherAmount = parseFloat(document.getElementById('customVoucherAmount').value) || 1000;
  if (voucherAmount < 1) {
    return showError('Please enter a valid voucher amount (minimum ₹1).');
  }

  clearError();
  hidePortalResults();

  const brandName = document.getElementById('customBrandName').value.trim() || 'Custom Discount';

  runCustomCalculation({ discountPercent, brandName, voucherAmount });

  // Cache last-used inputs so a card delete (from within the results) can
  // re-run the calculation without depending on the (about to be cleared) form fields.
  lastCustomCalc = { discountPercent, brandName, voucherAmount };

  // Reset the base inputs (brand name + discount %) for the next calculation.
  // Voucher amount is intentionally preserved.
  document.getElementById('customBrandName').value = '';
  document.getElementById('customDiscountPercent').value = '';
}

let lastCustomCalc = null;

/**
 * Single source of truth for the Discount Calculator's card comparison.
 * Used both by the "Calculate Best Card" button and by the re-run that
 * happens after a custom card is deleted from the results.
 */
function runCustomCalculation({ discountPercent, brandName, voucherAmount }) {
  let walletIds = getActiveWalletIds();
  let cardsToEvaluate = walletIds.length > 0
    ? cards.filter(c => walletIds.includes(c.id))
    : cards;
  if (cardsToEvaluate.length === 0) cardsToEvaluate = cards; // ultimate fallback

  const mockPortal = { id: 'custom_portal', name: 'Custom', group: 'custom', upfrontDiscountPercent: discountPercent };
  const mockPortalConfig = { portalId: 'custom_portal', upfrontDiscountPercent: discountPercent, site: '', perks: '' };

  const results = cardsToEvaluate.map(card => {
    const metrics = calculateTrueNetMetrics(card, mockPortal, mockPortalConfig, voucherAmount);
    const multiplier = card.portalMultipliers?.default ?? 0;
    const cardRewardRate = getCardRewardRate(card, multiplier);
    return { card, upfront: discountPercent, reward: cardRewardRate, net: metrics.computedTrueNet, metrics, multiplier };
  });

  results.sort((a, b) => b.net - a.net);
  renderCustomResults(results, brandName, discountPercent, voucherAmount);
}

function recalcAfterCardDelete() {
  if (!lastCustomCalc) return;
  runCustomCalculation(lastCustomCalc);
}

function renderCustomResults(results, brandName, discountPercent, voucherAmount) {
  if (results.length === 0) {
    customResults.classList.remove('hidden');
    document.getElementById('customCardsList').innerHTML =
      `<div class="p-3 text-sm text-slate-600">No cards available for calculation.</div>`;
    return;
  }

  const best = results[0];
  const runnerUp = results.length > 1 ? results[1] : null;

  // Update header
  document.getElementById('customResultTitle').textContent = brandName;
  document.getElementById('customResultSubtitle').textContent = `Best card: ${best.card.name}`;
  document.getElementById('customTimestamp').textContent = new Date().toLocaleTimeString();
  document.getElementById('customUpfrontValue').textContent = `${discountPercent.toFixed(2)}%`;
  document.getElementById('customNetValue').textContent = `${best.net.toFixed(2)}%`;

  // Best card banner
  const customBestCardBox = document.getElementById('customBestCardBox');
  customBestCardBox.innerHTML = `
    <div class="p-3 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <div class="flex items-center gap-2">
        <span>🥇</span>
        <span>Best: ${best.card.name} — ${best.net.toFixed(2)}% net discount</span>
      </div>
      ${getApplyButton(best.card, 'bg-emerald-600 hover:bg-emerald-700')}
    </div>
    ${runnerUp ? `
    <div class="p-3 rounded-md bg-blue-50 border border-blue-200 text-blue-800 font-medium mt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <div class="flex items-center gap-2">
        <span>🥈</span>
        <span>2nd: ${runnerUp.card.name} — ${runnerUp.net.toFixed(2)}% net discount</span>
      </div>
      ${getApplyButton(runnerUp.card, 'bg-blue-600 hover:bg-blue-700')}
    </div>` : ''}
  `;

  // Full results list
  renderCustomCardsList(results, voucherAmount);

  customResults.classList.remove('hidden');
  customResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getApplyButton(card, colorClass) {
  const canApply = card.applyURL &&
    card.applyStatus !== 'invite_only' &&
    card.applyStatus !== 'closed';

  if (canApply) {
    return `<a href="${card.applyURL}" target="_blank" rel="noopener noreferrer"
              class="text-xs ${colorClass} text-white px-4 py-1.5 rounded transition-colors whitespace-nowrap font-medium">Apply Now ↗</a>`;
  }
  return '';
}

function renderCustomCardsList(results, voucherAmount) {
  const generateCardRow = (result, rank) => {
    const card = result.card;
    const metrics = result.metrics;

    const currencyLabel = card.id === 'axis_atlas' ? 'Miles' : 'RP';
    const cardYieldPercent = (metrics.cashValue / voucherAmount * 100).toFixed(2);

    // Status badges
    let statusBadge = '';
    if (card.applyStatus === 'invite_only') {
      statusBadge = `<span class="text-[10px] text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded ml-2">Invite Only</span>`;
    } else if (card.applyStatus === 'closed') {
      statusBadge = `<span class="text-[10px] text-red-400 border border-red-200 px-1.5 py-0.5 rounded ml-2">Closed</span>`;
    }

    const isCustomCard = card.id.startsWith('custom_');
    const customTag = isCustomCard
      ? `<span class="text-[10px] bg-slate-200 px-1 rounded text-slate-500 ml-1">Custom</span>` : '';
    const deleteBtn = isCustomCard
      ? `<button data-delete-card="${card.id}" class="text-[10px] text-red-300 hover:text-red-500 transition-colors ml-1" title="Remove custom card">✕</button>` : '';

    // Generate explanation text
    const exampleText = card.rewardType === 'points' && card.spendBlock
      ? `Pay ₹${metrics.netPaid.toFixed(0)} → ${metrics.rpEarned} ${currencyLabel} (₹${metrics.cashValue.toFixed(2)} / ${cardYieldPercent}%) → Net ₹${metrics.finalNetCost.toFixed(0)}`
      : `Pay ₹${metrics.netPaid.toFixed(0)} → ₹${metrics.cashValue.toFixed(2)} (${cardYieldPercent}%) cashback → Net ₹${metrics.finalNetCost.toFixed(0)}`;

    const rowClass = rank <= 2 ? 'bg-slate-50' : '';
    const rankEmoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : `#${rank}`;

    return `
      <tr class="border-b border-slate-100 last:border-0 hover:bg-slate-50 ${rowClass}">
        <td class="py-2 pr-2 text-center text-sm font-medium text-slate-500 w-10">${rankEmoji}</td>
        <td class="py-2 pr-2 align-top">
          <div class="font-medium text-sm text-slate-700">${card.name}${customTag}${statusBadge}${deleteBtn}</div>
          <div class="text-[10px] text-slate-400 mt-1">${exampleText}</div>
          ${card.assumption_note ? `<div class="text-[10px] italic text-slate-400 mt-0.5">💡 ${card.assumption_note}</div>` : ''}
        </td>
        <td class="py-2 px-2 text-right align-top whitespace-nowrap text-xs text-slate-500">
          ${result.reward.toFixed(2)}%
        </td>
        <td class="py-2 pl-2 text-right align-top whitespace-nowrap font-semibold ${rank <= 3 ? 'text-emerald-600' : 'text-slate-600'} text-sm">
          ${result.net.toFixed(2)}%
        </td>
      </tr>`;
  };

  let html = `
    <details class="bg-white border border-slate-200 rounded-md overflow-hidden group" open>
      <summary class="px-3 py-2 bg-slate-50 border-b border-slate-200 cursor-pointer list-none flex justify-between items-center">
        <div>
          <span class="font-semibold text-sm text-slate-800">All Cards Ranked</span>
          <span class="text-xs text-slate-500 ml-2">(using default reward multiplier)</span>
        </div>
        <span class="transform group-open:rotate-180 transition-transform duration-200 text-xs text-slate-400">▼</span>
      </summary>
      <div class="px-3 overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-100">
              <th class="text-center py-1.5 pr-2 w-10">Rank</th>
              <th class="text-left py-1.5 pr-2">Card</th>
              <th class="text-right py-1.5 px-2">Reward</th>
              <th class="text-right py-1.5 pl-2">Net</th>
            </tr>
          </thead>
          <tbody>
            ${results.map((r, i) => generateCardRow(r, i + 1)).join('')}
          </tbody>
        </table>
      </div>
    </details>`;

  document.getElementById('customCardsList').innerHTML = html;

  document.getElementById('customCardsList').querySelectorAll('[data-delete-card]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = cards.find(c => c.id === btn.getAttribute('data-delete-card'));
      if (!confirm(`Remove "${card?.name || 'this card'}"?`)) return;
      deleteCustomCard(btn.getAttribute('data-delete-card'));
      recalcAfterCardDelete();
    });
  });
}

/************************************************************************
 * CUSTOM CARD MODAL
 ************************************************************************/
const customCardModal = document.getElementById('customCardModal');
document.getElementById('openCardModalBtn').addEventListener('click',  () => customCardModal.classList.remove('hidden'));
document.getElementById('closeCardModalBtn').addEventListener('click', () => customCardModal.classList.add('hidden'));

// Map of portal IDs -> the input element ID for that portal in the modal
const ccPortalFieldIds = {
  hdfc_smartbuy:    'ccSmartbuy',
  icici_ishop:      'ccIshop',
  axis_edgerewards: 'ccEdgerewards',
  axis_grabdeals:   'ccGrabdeals',
  shopwise:         'ccShopwise'
};

const ccBankNotes = {
  Amex: "Amex multipliers vary by specific card — check your card's T&Cs for Shopwise reward rate.",
  Other: 'SmartBuy / iShop / EdgeRewards / GrabDeals / Shopwise are locked at 0 — your card can only earn on its own bank\u2019s portal(s).'
};

function applyBankDefaults() {
  const bank = document.getElementById('ccBank').value;
  const defaults = bankPortalDefaults[bank] || {};

  bankSpecificPortalIds.forEach(portalId => {
    const field = document.getElementById(ccPortalFieldIds[portalId]);
    if (!field) return;
    const cfg = defaults[portalId];
    if (cfg) {
      field.value = cfg.value;
      field.disabled = !!cfg.frozen;
    } else {
      // No specific config for this portal under this bank -> not earnable, frozen at 0
      field.value = 0;
      field.disabled = true;
    }
  });

  document.getElementById('ccBankNote').textContent = ccBankNotes[bank] || '';
}

document.getElementById('ccBank').addEventListener('change', applyBankDefaults);
applyBankDefaults(); // initialize on load with default "Other" selection

document.getElementById('saveCardBtn').addEventListener('click', () => {
  const id   = 'custom_' + Date.now();
  const name = document.getElementById('ccName').value.trim() || 'Custom Card';
  const newCard = {
    id, name,
    rewardType:     document.getElementById('ccRewardType').value,
    pointValue:     parseFloat(document.getElementById('ccPointValue').value)     || 1,
    spendBlock:     parseFloat(document.getElementById('ccSpendBlock').value)     || 100,
    pointsPerBlock: parseFloat(document.getElementById('ccPointsPerBlock').value) || 1,
    portalMultipliers: {
      hdfc_smartbuy:    parseFloat(document.getElementById('ccSmartbuy').value)     || 0,
      icici_ishop:      parseFloat(document.getElementById('ccIshop').value)        || 0,
      axis_edgerewards: parseFloat(document.getElementById('ccEdgerewards').value)  || 0,
      axis_grabdeals:   parseFloat(document.getElementById('ccGrabdeals').value)    || 0,
      shopwise:         parseFloat(document.getElementById('ccShopwise').value)     || 0,
      default:          parseFloat(document.getElementById('ccDefault').value)      || 0
    },
    assumption_note: 'Custom user-defined card.'
  };
  saveCustomCard(newCard);
  const walletIds = loadWalletIds();
  if (!walletIds.includes(id)) { walletIds.push(id); saveWalletIds(walletIds); }
  customCardModal.classList.add('hidden');
  document.querySelectorAll('#customCardModal input').forEach(i => i.value = '');
  document.getElementById('ccBank').value = 'Other';
  applyBankDefaults();
  renderWalletUI();
});

/************************************************************************
 * CUSTOM BRAND MODAL
 ************************************************************************/
const customBrandModal = document.getElementById('customBrandModal');
document.getElementById('openBrandModalBtn').addEventListener('click',  () => customBrandModal.classList.remove('hidden'));
document.getElementById('closeBrandModalBtn').addEventListener('click', () => customBrandModal.classList.add('hidden'));

document.getElementById('saveBrandBtn').addEventListener('click', () => {
  const id   = 'custom_brand_' + Date.now();
  const name = document.getElementById('cbName').value.trim() || 'Custom Brand';
  const newBrand = { id, name, category_name: 'Custom', portals: [] };
  const push = (portalId, elId) => newBrand.portals.push({
    portalId, upfrontDiscountPercent: parseFloat(document.getElementById(elId).value) || 0, site: '', perks: ''
  });
  push('hdfc_smartbuy',    'cbSmartbuy');
  push('gyftr',            'cbGyftr');
  push('icici_ishop',      'cbIshop');
  push('amazon',           'cbAmazon');
  push('axis_edgerewards', 'cbEdgerewards');
  push('axis_grabdeals',   'cbGrabdeals');
  push('shopwise',         'cbShopwise');
  saveCustomBrand(newBrand);
  customBrandModal.classList.add('hidden');
  document.querySelectorAll('#customBrandModal input').forEach(i => i.value = '');
});