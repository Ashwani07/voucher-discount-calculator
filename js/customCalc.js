// Custom coupon / sale calculator. This module mirrors the portal flow but
// lets the user evaluate a standalone discount against the wallet.
import { cards, portals } from './data.js';
import { calculateTrueNetMetrics, getCardRewardRate } from './calculator.js';
import { dom } from './dom.js';
import { state } from './state.js';
import { getPortalById, renderMetricGrid } from './utils.js';
import { getActiveWalletIds } from './wallet.js';
import { validateVoucherAmount, hidePortalResults } from './results.js';

function findPortal(portalId) {
  return getPortalById(portalId, portals);
}

export function hideCustomResults() {
  dom.customResults.classList.add('hidden');
}

export function clearCustomResults() {
  hideCustomResults();
  document.getElementById('customResultTitle').textContent = 'Custom Discount Results';
  document.getElementById('customResultSubtitle').textContent = '';
  document.getElementById('customTimestamp').textContent = '';
  document.getElementById('customUpfrontValue').textContent = '—';
  document.getElementById('customNetValue').textContent = '—';
  document.getElementById('customCardsList').innerHTML = '';
}

export function toggleCustomCalcPanel() {
  const isHidden = dom.customCalcPanel.classList.contains('hidden');
  dom.customCalcPanel.classList.toggle('hidden');
  dom.toggleCustomCalcBtn.textContent = isHidden ? 'Collapse' : 'Expand';
}

export function resetCustomCalcForm() {
  document.getElementById('customBrandName').value = '';
  document.getElementById('customDiscountPercent').value = '';
  document.getElementById('customVoucherAmount').value = '1000';
  document.getElementById('customPortal').value = 'other';
  hideCustomResults();
  dom.customCalcError.classList.add('hidden');
  state.lastCustomCalc = null;
}

export function runCustomCalculation({ discountPercent, brandName, voucherAmount, portalId = 'other' }) {
  let walletIds = getActiveWalletIds();
  let walletCards = walletIds.length > 0 ? cards.filter(card => walletIds.includes(card.id)) : cards;
  if (!walletCards.length) walletCards = cards;

  const portal = portalId !== 'other' ? findPortal(portalId) : null;
  const cardsToEvaluate = portal
    ? walletCards.filter(card => {
        const multipliers = card.portalMultipliers || {};
        const multiplier = multipliers[portal.id] ?? multipliers[portal.group] ?? multipliers.default ?? 0;
        return multiplier > 0;
      })
    : walletCards;

  if (!cardsToEvaluate.length) {
    renderCustomResults([], brandName, discountPercent, voucherAmount, portal);
    return;
  }

  const mockPortal = portal
    ? { id: portal.id, name: portal.name, group: portal.group, upfrontDiscountPercent: discountPercent }
    : { id: 'custom_portal', name: 'Custom', group: 'custom', upfrontDiscountPercent: discountPercent };
  const mockPortalConfig = { portalId: mockPortal.id, upfrontDiscountPercent: discountPercent, site: '' };

  const results = cardsToEvaluate.map(card => {
    const metrics = calculateTrueNetMetrics(card, mockPortal, mockPortalConfig, voucherAmount);
    const multiplier = portal ? metrics.multiplier : (card.portalMultipliers?.default ?? 0);
    const cardRewardRate = getCardRewardRate(card, multiplier);
    return { card, upfront: discountPercent, reward: cardRewardRate, net: metrics.computedTrueNet, metrics, multiplier };
  });

  results.sort((a, b) => b.net - a.net);
  renderCustomResults(results, brandName, discountPercent, voucherAmount, portal);
}

export function handleCustomCalculate() {
  const showError = message => { dom.customCalcError.textContent = message; dom.customCalcError.classList.remove('hidden'); };
  const clearError = () => dom.customCalcError.classList.add('hidden');

  const discountPercent = parseFloat(document.getElementById('customDiscountPercent').value);
  if (isNaN(discountPercent)) return showError('Please enter a valid discount percentage.');

  const amountCheck = validateVoucherAmount(document.getElementById('customVoucherAmount').value);
  if (!amountCheck.valid) return showError(amountCheck.error);

  clearError();
  hidePortalResults();
  clearCustomResults();

  const brandName = document.getElementById('customBrandName').value.trim() || 'Custom Discount';
  const portalId = document.getElementById('customPortal').value;

  runCustomCalculation({ discountPercent, brandName, voucherAmount: amountCheck.amount, portalId });
  state.lastCustomCalc = { discountPercent, brandName, voucherAmount: amountCheck.amount, portalId };
}

export function recalcAfterCardDelete() {
  if (!state.lastCustomCalc) return;
  runCustomCalculation(state.lastCustomCalc);
}

export function renderCustomResults(results, brandName, discountPercent, voucherAmount, portal = null) {
  const portalLabel = portal ? portal.name : 'All cards (Other / general)';

  if (!results.length) {
    dom.customResults.classList.remove('hidden');
    document.getElementById('customCardsList').innerHTML = `<div class="p-3 text-sm text-slate-600">No cards in your wallet are eligible for <strong>${portalLabel}</strong>. Add an eligible card via My Wallet or choose a different portal.</div>`;
    return;
  }

  const best = results[0];
  document.getElementById('customResultTitle').textContent = brandName;
  document.getElementById('customResultSubtitle').textContent = `Best card: ${best.card.name} · via ${portalLabel}`;
  document.getElementById('customTimestamp').textContent = new Date().toLocaleTimeString();
  document.getElementById('customUpfrontValue').textContent = `${discountPercent.toFixed(2)}% (₹${best.metrics.netPaid.toFixed(0)} to pay)`;
  document.getElementById('customNetValue').textContent = `${best.net.toFixed(2)}% (₹${best.metrics.finalNetCost.toFixed(0)} net)`;

  renderCustomCardsList(results, voucherAmount);
  dom.customResults.classList.remove('hidden');
  dom.customResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function renderCustomCardsList(results, voucherAmount) {
  const generateCardRow = (result, rank) => {
    const card = result.card;
    const metrics = result.metrics;
    const currencyLabel = card.id === 'axis_atlas' ? 'Miles' : 'RP';
    const cardYieldPercent = (metrics.cashValue / voucherAmount * 100).toFixed(2);

    let statusBadge = '';
    if (card.applyStatus === 'invite_only') {
      statusBadge = '<span class="text-[10px] text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded ml-2">Invite Only</span>';
    } else if (card.applyStatus === 'closed') {
      statusBadge = '<span class="text-[10px] text-red-400 border border-red-200 px-1.5 py-0.5 rounded ml-2">Closed</span>';
    }

    const isCustomCard = card.id.startsWith('custom_');
    const customTag = isCustomCard ? '<span class="text-[10px] bg-slate-200 px-1 rounded text-slate-500 ml-1">Custom</span>' : '';
    const deleteBtn = isCustomCard ? `<button data-delete-card="${card.id}" class="text-[10px] text-red-300 hover:text-red-500 transition-colors ml-1" title="Remove custom card">✕</button>` : '';
    const exampleHTML = renderMetricGrid([
      { label: 'Pay', value: `<span class="text-right">₹${metrics.netPaid.toFixed(0)}</span>` },
      { label: 'Reward', value: `<span class="text-right">${card.rewardType === 'points' && card.spendBlock ? `${metrics.rpEarned} ${currencyLabel} = ₹${metrics.cashValue.toFixed(2)} (${cardYieldPercent}%)` : `₹${metrics.cashValue.toFixed(2)} cashback (${cardYieldPercent}%)`}</span>` },
      { label: 'Net', value: `<span class="text-right font-medium text-slate-600">₹${metrics.finalNetCost.toFixed(0)}</span>`, labelClass: 'font-medium text-slate-600' }
    ]);
    const rowClass = rank <= 2 ? 'bg-slate-50' : '';
    const rankEmoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : `#${rank}`;

    return `
      <div class="py-2.5 border-b border-slate-100 last:border-0 flex gap-2 ${rowClass}">
        <div class="text-sm font-medium text-slate-500 w-7 pt-0.5 shrink-0">${rankEmoji}</div>
        <div class="flex-1">
          <div class="flex items-center justify-between gap-2">
            <div class="font-medium text-sm text-slate-700">${card.name}${customTag}${statusBadge}${deleteBtn}</div>
            <span class="font-semibold ${rank <= 3 ? 'text-emerald-600' : 'text-slate-600'} text-sm whitespace-nowrap shrink-0">${result.net.toFixed(2)}%</span>
          </div>
          ${exampleHTML}
          ${card.assumption_note ? `<div class="text-[10px] italic text-slate-400 mt-1">💡 ${card.assumption_note}</div>` : ''}
        </div>
      </div>`;
  };

  const html = `
    <details class="bg-white border border-slate-200 rounded-md overflow-hidden group" open>
      <summary class="px-3 py-2 bg-slate-50 border-b border-slate-200 cursor-pointer list-none flex justify-between items-center">
        <div>
          <span class="font-semibold text-sm text-slate-800">All Cards Ranked</span>
          <span class="text-xs text-slate-500 ml-2">(using default reward multiplier)</span>
        </div>
        <span class="transform group-open:rotate-180 transition-transform duration-200 text-xs text-slate-400">▼</span>
      </summary>
      <div class="px-3">${results.map((result, index) => generateCardRow(result, index + 1)).join('')}</div>
    </details>`;

  document.getElementById('customCardsList').innerHTML = html;
}