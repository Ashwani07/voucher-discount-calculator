// Portal comparison calculations and result rendering. This module owns the
// main voucher comparison flow and the portal result markup.
import { cards, portals, brands, lastVerified } from './data.js';
import { calculateTrueNetMetrics, getCardRewardRate, getCardPortalMultiplier } from './calculator.js';
import { dom } from './dom.js';
import { state } from './state.js';
import { getBrandById, getPortalById, renderApplyBadge, renderMetricGrid, validateVoucherAmount, hideBrandGuideLink, hidePortalResults } from './utils.js';
import { getActiveWalletIds } from './wallet.js';
import { resetSearchState } from './search.js';
import { clearCustomResults } from './customCalc.js';

export function isDiscountFlagged(brandId, portalId) {
  return localStorage.getItem(`flag:${brandId}:${portalId}`) === '1';
}

export function toggleDiscountFlag(brandId, portalId) {
  const key = `flag:${brandId}:${portalId}`;
  localStorage.getItem(key) === '1' ? localStorage.removeItem(key) : localStorage.setItem(key, '1');
}

function findPortal(portalId) {
  return getPortalById(portalId, portals);
}

export function getEligibleResults(brand, walletSelectedIds, voucherAmount) {
  const results = [];

  for (const portalConfig of brand.portals) {
    if (portalConfig.upfrontDiscountPercent === null) continue;
    if (portalConfig.availability === 'unavailable') continue;

    const portal = findPortal(portalConfig.portalId);
    if (!portal) continue;

    let allowedCards = cards.filter(card => {
      return getCardPortalMultiplier(card, portal) > 0;
    });

    allowedCards = allowedCards.filter(card => walletSelectedIds.includes(card.id));

    for (const card of allowedCards) {
      const metrics = calculateTrueNetMetrics(
        card,
        { ...portal, upfrontDiscountPercent: portalConfig.upfrontDiscountPercent },
        portalConfig,
        voucherAmount
      );
      const cardRewardRate = getCardRewardRate(card, metrics.multiplier);

      results.push({
        portal,
        portalId: portalConfig.portalId,
        card,
        upfront: portalConfig.upfrontDiscountPercent || 0,
        reward: cardRewardRate,
        net: metrics.computedTrueNet,
        computedTrueNet: metrics.computedTrueNet,
        metrics,
        portalConfig
      });
    }
  }

  return results;
}

export function groupAndSortResults(results) {
  const byCard = results.reduce((accumulator, result) => {
    if (!accumulator[result.card.id]) accumulator[result.card.id] = { card: result.card, entries: [] };
    accumulator[result.card.id].entries.push(result);
    return accumulator;
  }, {});

  return Object.values(byCard).map(group => {
    group.entries.sort((a, b) => b.computedTrueNet - a.computedTrueNet);
    group.bestNet = group.entries[0].computedTrueNet;
    return group;
  }).sort((a, b) => b.bestNet - a.bestNet);
}

function buildCardBlock(group, index, activeBrandObj, voucherAmount) {
  const noteText = group.card.assumption_note || '';
  const applyBadge = renderApplyBadge(group.card);

  const tableRows = group.entries.map(entry => {
    const flagged = isDiscountFlagged(activeBrandObj.id, entry.portalId);
    const buyURL = entry.portalConfig?.site || '';
    const disclaimer = entry.portalConfig?.disclaimer || '';
    const notAvailable = disclaimer.toLowerCase().includes('not available');
    const currencyLabel = entry.card.id === 'axis_atlas' ? 'Miles' : 'RP';
    const cardYieldPercent = (entry.metrics.cashValue / voucherAmount * 100).toFixed(2);
    const upfrontLabel = entry.upfront > 0 ? 'Upfront Discount' : entry.upfront < 0 ? 'Convenience Charge' : 'Upfront Discount';
    const upfrontValueStr = entry.upfront !== 0 ? `${Math.abs(entry.upfront).toFixed(2)}%` : '—';
    const rewardValue = entry.card.rewardType === 'points' && entry.card.spendBlock
      ? `${entry.metrics.rpEarned} ${currencyLabel} = ₹${entry.metrics.cashValue.toFixed(2)} (${cardYieldPercent}%)`
      : `₹${entry.metrics.cashValue.toFixed(2)} cashback (${cardYieldPercent}%)`;
    const shownDiscountStr = entry.upfront > 0 ? entry.upfront.toFixed(1) + '%' : 'N/A';
    const reportURL =
      `https://docs.google.com/forms/d/e/1FAIpQLSeDeeY8MielvLxAvq9HCd7iyz9X473A7FwrjLgj-cb0sGAf4Q/viewform?usp=pp_url` +
      `&entry.1760196418=${encodeURIComponent(activeBrandObj.name)}` +
      `&entry.251882125=${encodeURIComponent(entry.portal.name)}` +
      `&entry.17865828=${encodeURIComponent(shownDiscountStr)}` +
      `&entry.49106349=${encodeURIComponent(lastVerified)}`;

    const flagHTML = `<a href="${reportURL}" target="_blank" rel="noopener noreferrer" data-flag-brand="${activeBrandObj.id}" data-flag-portal="${entry.portalId}" class="flag-btn text-[10px] ${flagged ? 'text-amber-500' : 'text-slate-300 hover:text-slate-400'} ml-1 transition-colors" title="${flagged ? 'Marked as possibly outdated — click to unmark' : 'Report this discount as outdated or incorrect'}">⚑</a>`;
    const flaggedBadge = flagged ? '<span class="text-[10px] text-amber-600 bg-amber-50 border border-amber-200 px-1 py-0.5 rounded ml-1">Reported</span>' : '';
    const buyBtn = buyURL && !notAvailable
      ? `<a href="${buyURL}" target="_blank" rel="noopener noreferrer" class="text-[10px] whitespace-nowrap bg-slate-700 hover:bg-slate-900 text-white px-2 py-1 rounded transition-colors">Buy ↗</a>`
      : '<span class="text-[10px] text-slate-300">—</span>';

    return `
      <div class="py-2.5 border-b border-slate-100 last:border-0">
        <div class="flex items-center justify-between gap-2">
          <div class="font-medium text-sm text-slate-700">${entry.portal.name}${flagHTML}${flaggedBadge}</div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="font-semibold text-emerald-600 text-sm whitespace-nowrap">${entry.computedTrueNet.toFixed(2)}%</span>
            ${buyBtn}
          </div>
        </div>
        ${disclaimer ? `<div class="text-[10px] text-amber-700 bg-amber-50 border border-amber-100 rounded px-1.5 py-0.5 mt-1">${disclaimer}</div>` : ''}
        ${renderMetricGrid([
          { label: upfrontLabel, value: `<span class="text-right">${upfrontValueStr}</span>` },
          { label: 'Pay', value: `<span class="text-right">₹${entry.metrics.netPaid.toFixed(0)}</span>` },
          { label: 'Reward', value: `<span class="text-right">${rewardValue}</span>` },
          { label: 'Net', value: `<span class="text-right font-medium text-slate-600">₹${entry.metrics.finalNetCost.toFixed(0)}</span>`, labelClass: 'font-medium text-slate-600' }
        ])}
      </div>`;
  }).join('');

  return `
    <details class="bg-white border border-slate-200 rounded-md mt-3 overflow-hidden group" ${index === 0 ? 'open' : ''}>
      <summary class="flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-slate-200 cursor-pointer list-none">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="font-semibold text-sm text-slate-800">${group.card.name}</span>
          <span class="text-xs font-semibold text-emerald-600">${group.bestNet.toFixed(2)}% best</span>
        </div>
        <div class="flex items-center gap-2">
          ${applyBadge}
          <span class="transform group-open:rotate-180 transition-transform duration-200 text-xs text-slate-400">▼</span>
        </div>
      </summary>
      <div class="px-3">${tableRows}</div>
      ${noteText ? `<div class="text-[11px] italic text-slate-400 px-3 pb-2 pt-1 border-t border-slate-100">💡 ${noteText}</div>` : ''}
    </details>`;
}

export function renderAllCardsList(groups, activeBrandObj, force = false) {
  const voucherAmount = parseFloat(document.getElementById('voucherAmount').value) || 1000;
  const renderKey = `${activeBrandObj.id}:${voucherAmount}:${groups.map(group => `${group.card.id}:${group.bestNet}`).join('|')}`;
  if (!force && state.lastPortalRenderKey === renderKey) return;
  state.lastPortalRenderKey = renderKey;

  const top2 = groups.slice(0, 2);
  const rest = groups.slice(2);
  let html = top2.map((group, index) => buildCardBlock(group, index, activeBrandObj, voucherAmount)).join('');

  if (rest.length) {
    html += `
      <details class="mt-4 group/outer">
        <summary class="cursor-pointer text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-2 rounded-md hover:bg-slate-200 transition-colors list-none flex justify-between items-center">
          <span>View ${rest.length} other card${rest.length > 1 ? 's' : ''}</span>
          <span class="transform group-open/outer:rotate-180 transition-transform duration-200 text-xs">▼</span>
        </summary>
        <div class="mt-1">${rest.map((group, index) => buildCardBlock(group, index + 2, activeBrandObj, voucherAmount)).join('')}</div>
      </details>`;
  }

  dom.allCardsList.innerHTML = html;
}

export function renderResults(groups, brand, shouldScroll, force = false) {
  const best = groups[0].entries[0];
  document.getElementById('resultTitle').textContent = brand.name;
  document.getElementById('resultSubtitle').textContent = `${best.card.name} via ${best.portal.name}`;
  document.getElementById('timestamp').textContent = new Date().toLocaleTimeString();
  document.getElementById('upfrontValue').textContent = `${best.upfront.toFixed(2)}% (₹${best.metrics.netPaid.toFixed(0)} to pay)`;
  document.getElementById('rewardValue').textContent = `${best.reward.toFixed(2)}% (₹${best.metrics.cashValue.toFixed(2)} back)`;
  document.getElementById('netValue').textContent = `${best.computedTrueNet.toFixed(2)}% (₹${best.metrics.finalNetCost.toFixed(0)} net)`;

  const guideLink = document.getElementById('brandGuideLink');
  if (guideLink) {
    guideLink.href = `./brands.html?brand=${encodeURIComponent(brand.id)}`;
    guideLink.classList.remove('hidden');
  }

  renderAllCardsList(groups, brand, force);
  dom.resultsSection.classList.remove('hidden');
  if (shouldScroll) dom.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function refreshPortalResults({ scroll = false, force = false } = {}) {
  const brand = getBrandById(state.currentBrandId, brands);
  if (!brand) return;
  const walletIds = getActiveWalletIds();
  const voucherAmount = validateVoucherAmount(document.getElementById('voucherAmount').value);
  if (!voucherAmount.valid) return;
  const rawResults = getEligibleResults(brand, walletIds, voucherAmount.amount);
  if (!rawResults.length) {
    dom.resultsSection.classList.remove('hidden');
    dom.allCardsList.innerHTML = '<div class="p-3 text-sm text-slate-600 mt-4">None of your saved cards work with portals available for this brand.</div>';
    return;
  }
  renderResults(groupAndSortResults(rawResults), brand, scroll && state.isFirstCalculate, force);
}

export function showWalletWarning(message = 'Select at least one card from your wallet to compare.') {
  if (!dom.walletWarning) return;
  dom.walletWarning.textContent = message;
  dom.walletWarning.classList.remove('hidden');
}

export function hideWalletWarning() {
  if (!dom.walletWarning) return;
  dom.walletWarning.classList.add('hidden');
}

export function handleCalculate({ scroll = true } = {}) {
  const showError = message => { dom.calcError.textContent = message; dom.calcError.classList.remove('hidden'); };
  const clearError = () => dom.calcError.classList.add('hidden');

  if (!state.currentBrandId) return showError('Please search and select a brand first.');

  const amountCheck = validateVoucherAmount(document.getElementById('voucherAmount').value);
  if (!amountCheck.valid) return showError(amountCheck.error);
  clearError();

  hidePortalResults();
  clearCustomResults();
  hideWalletWarning();

  const brand = getBrandById(state.currentBrandId, brands);
  if (!brand) return;

  const walletIds = getActiveWalletIds();
  const voucherAmount = amountCheck.amount;

  const walletPanel = document.getElementById('walletPanel');
  if (walletPanel && !walletPanel.classList.contains('hidden')) {
    walletPanel.classList.add('hidden');
    const summaryBar = document.getElementById('walletSummaryBar');
    if (summaryBar) summaryBar.classList.remove('hidden');
  }

  if (!walletIds.length) {
    showWalletWarning();
    dom.resultsSection.classList.remove('hidden');
    dom.allCardsList.innerHTML = '<div class="p-3 text-sm text-slate-600 mt-4">No card selected. Use the Edit button above to add cards to your wallet.</div>';
    return;
  }

  const rawResults = getEligibleResults(brand, walletIds, voucherAmount);
  if (!rawResults.length) {
    dom.resultsSection.classList.remove('hidden');
    dom.allCardsList.innerHTML = '<div class="p-3 text-sm text-slate-600 mt-4">None of your saved cards work with portals available for this brand.</div>';
    return;
  }

  const sortedGroups = groupAndSortResults(rawResults);
  renderResults(sortedGroups, brand, scroll && state.isFirstCalculate);
  state.isFirstCalculate = false;
}

export function handleReset() {
  dom.resultsSection.classList.add('hidden');
  dom.allCardsList.innerHTML = '';
  clearCustomResults();
  hideWalletWarning();
  hideBrandGuideLink();
  state.currentBrandId = null;
  state.isFirstCalculate = true;
  resetSearchState();
  dom.calcError.classList.add('hidden');
  document.getElementById('resultTitle').textContent = 'Result';
  document.getElementById('resultSubtitle').textContent = '';
  document.getElementById('upfrontValue').textContent = '—';
  document.getElementById('rewardValue').textContent = '—';
  document.getElementById('netValue').textContent = '—';
  document.getElementById('timestamp').textContent = '';
}