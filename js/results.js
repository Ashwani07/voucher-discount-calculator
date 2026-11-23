// Portal comparison calculations and result rendering. This module owns the
// main voucher comparison flow and the portal result markup.
import { cards, portals, brands, lastVerified, cardRules } from './data.js';
import { calculateTrueNetMetricsWithFlooring, getCardRewardRate, getCardPortalMultiplier, isCardPortalEligible } from './calculator.js';
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
    if (portalConfig.availability !== 'available') continue;

    const portal = findPortal(portalConfig.portalId);
    if (!portal) continue;

    let allowedCards = cards.filter(card => isCardPortalEligible(card, portal));

    allowedCards = allowedCards.filter(card => walletSelectedIds.includes(card.id));

    for (const card of allowedCards) {
      const metrics = calculateTrueNetMetricsWithFlooring(
        card,
        { ...portal, upfrontDiscountPercent: portalConfig.upfrontDiscountPercent },
        portalConfig,
        voucherAmount,
        brand
      );
      const cardRewardRate = getCardRewardRate(card, metrics.multiplier, portal, brand);

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
    let buyURL = entry.portalConfig?.site || '';
    const amountStr = String(voucherAmount);
    if (entry.portalConfig?.variants?.[amountStr]?.buyUrl) {
      buyURL = entry.portalConfig.variants[amountStr].buyUrl;
    }
    const disclaimer = entry.portalConfig?.disclaimer || '';
    const notAvailable = disclaimer.toLowerCase().includes('not available');
    const currencyLabel = entry.card.id === 'axis_atlas' ? 'Miles' : 'RP';
    const cardYieldPercent = (entry.metrics.cashValue / voucherAmount * 100).toFixed(2);
    // Either/or portals (currently HDFC SmartBuy): calculator.js already picks
    // the winning leg and zeroes the other one out numerically, but a raw
    // ₹0 / 0% next to a real ₹150 / 15% still reads as "no reward available"
    // rather than "you didn't take this one" — so we label it explicitly
    // instead of leaving it ambiguous. See calculator.js's isEitherOrPortal.
    const eitherOrChoice = entry.metrics.eitherOrChoice; // 'discount' | 'reward' | undefined
    const notTakenTag = '<span class="text-[10px] text-slate-400 font-normal ml-1">(not taken)</span>';

    const upfrontLabel = entry.upfront > 0 ? 'Upfront Discount' : entry.upfront < 0 ? 'Convenience Charge' : 'Upfront Discount';
    const discountNotTaken = eitherOrChoice === 'reward';
    const upfrontValueStr = entry.upfront !== 0
      ? `${Math.abs(entry.upfront).toFixed(2)}%${discountNotTaken ? notTakenTag : ''}`
      : '—';
    const rewardNotTaken = eitherOrChoice === 'discount';
    const cappedBadge = entry.metrics.isCapped
      ? '<span class="text-[9px] font-semibold text-amber-700 bg-amber-100 border border-amber-300 px-1 py-0.5 rounded ml-1" title="Reward is capped by issuer limits">Capped</span>'
      : '';
    const rewardValue = (entry.card.rewardType === 'points' && entry.card.spendBlock
      ? `${entry.metrics.rpEarned} ${currencyLabel} = ₹${entry.metrics.cashValue.toFixed(2)} (${cardYieldPercent}%)${cappedBadge}`
      : `₹${entry.metrics.cashValue.toFixed(2)} cashback (${cardYieldPercent}%)${cappedBadge}`) + (rewardNotTaken ? notTakenTag : '');
    const eitherOrNote = eitherOrChoice
      ? `<div class="text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-100 rounded px-1.5 py-0.5 mt-1">${entry.portal.name} makes you choose one at checkout — this pick uses <strong>${eitherOrChoice === 'reward' ? 'Accelerated Rewards' : 'the Insta Deal discount'}</strong> because it's worth more here.</div>`
      : '';
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
    const portalNotice = cardRules?.portalOverrides?.[entry.portalId]?.notice
      ? `<div class="text-[10px] text-amber-800 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mt-1">⚠️ ${cardRules.portalOverrides[entry.portalId].notice}</div>`
      : '';

    const isAmazonPayGiftCard = activeBrandObj?.id === 'amazon_pay' || activeBrandObj?.id === 'amazon_pay_gift_card';
    const amazonOverride = entry.portalId === 'amazon'
      ? (isAmazonPayGiftCard
          ? cardRules?.amazonPortalOverrides?.amazon_pay_gift_card?.[entry.card.id]
          : cardRules?.amazonPortalOverrides?.brand_voucher?.[entry.card.id])
      : null;
    const cardPortalNotice = amazonOverride?.notice || amazonOverride?.reason
      ? `<div class="text-[10px] text-amber-800 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mt-1">⚠️ ${amazonOverride.notice || amazonOverride.reason}</div>`
      : '';

    const capNoticeHtml = entry.metrics.isCapped && entry.metrics.capNotice
      ? `<div class="text-[10px] text-amber-800 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mt-1">⚠️ <strong>Cap Applied:</strong> ${entry.metrics.capNotice}. <span class="text-amber-700 italic">Calculation does not track your prior spend this cycle.</span></div>`
      : (entry.metrics.hasCapRule && entry.metrics.cardCapNotice
        ? `<div class="text-[10px] text-slate-600 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 mt-1">ℹ️ <strong>Card Limit:</strong> ${entry.metrics.cardCapNotice}. <span class="text-slate-500 italic">Assumes ₹0 prior spend this billing cycle.</span></div>`
        : '');

    const brandCapNoticeHtml = entry.metrics.isBrandCapExceeded && entry.metrics.brandCapNotice
      ? `<div class="text-[10px] text-rose-800 bg-rose-50 border border-rose-200 rounded px-1.5 py-0.5 mt-1">⚠️ <strong>Purchase Limit:</strong> ${entry.metrics.brandCapNotice}</div>`
      : '';

    const denomChips = entry.portalConfig?.denominations?.length
      ? `<div class="flex items-center gap-1 flex-wrap mt-1">
          <span class="text-[10px] text-slate-400">Values:</span>
          ${entry.portalConfig.denominations.slice(0, 6).map(d => `<span class="text-[10px] bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 px-1.5 py-0.5 rounded cursor-pointer transition-colors" title="Calculate for ₹${d}" onclick="const inp=document.getElementById('voucherAmount'); if(inp){ inp.value=${d}; inp.dispatchEvent(new Event('input', {bubbles:true})); }">₹${d}</span>`).join('')}
        </div>`
      : '';

    const flooringNote = entry.metrics.extraAmount > 0
      ? `<div class="text-[10px] text-slate-500 bg-slate-50 border border-slate-100 rounded px-1.5 py-0.5 mt-1">Portal sells in ₹100 steps: ₹${entry.metrics.flooredAmount} goes through the portal, ₹${entry.metrics.extraAmount} extra is paid separately with no discount or rewards on it.</div>`
      : '';

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
        ${portalNotice}
        ${cardPortalNotice}
        ${eitherOrNote}
        ${capNoticeHtml}
        ${brandCapNoticeHtml}
        ${flooringNote}
        ${denomChips}
        ${renderMetricGrid([
          { label: upfrontLabel, value: `<span class="text-right">${upfrontValueStr}</span>` },
          { label: 'Pay', value: `<span class="text-right">₹${entry.metrics.netPaid.toFixed(0)}</span>` },
          { label: 'Reward', value: `<span class="text-right">${rewardValue}</span>` },
          { label: 'Net', value: `<span class="text-right font-medium text-slate-600">₹${entry.metrics.finalNetCost.toFixed(0)}</span>`, labelClass: 'font-medium text-slate-600' }
        ])}
        <div class="mt-1.5 flex items-center justify-between text-[11px] pt-1 border-t border-slate-50">
          <span class="text-slate-400">Buying this voucher?</span>
          <a href="https://in.vouchwise.app" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800 font-medium hover:underline inline-flex items-center gap-1">
            <span>📲 Track in VouchWise Vault</span>
          </a>
        </div>
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
  // Same either/or awareness as buildCardBlock — see calculator.js's
  // isEitherOrPortal. best.upfront is untouched by which leg won (it's the
  // raw portal discount), but best.reward IS zeroed on the losing leg, so we
  // pull the true forgone reward % from eitherOrLegs rather than best.reward.
  // Either way, "available, not taken" only applies when something nonzero
  // was actually on the table — a genuine 0% shouldn't be framed as a choice.
  const eitherOrChoice = best.metrics.eitherOrChoice;
  const legs = best.metrics.eitherOrLegs;
  const voucherAmount = best.metrics.flooredAmount + best.metrics.extraAmount;
  // best.reward was the card's theoretical continuous rate (points per block
  // as a smooth %), independent of voucherAmount — but spendBlock rarely
  // divides voucherAmount evenly, so the RP actually earned is lower than
  // that ceiling implies. Showing the theoretical rate next to the real ₹
  // amount produces a contradiction a reader can catch by doing the math
  // themselves (e.g. "0.67% (₹5.00 back)" on a ₹1000 voucher doesn't add
  // up — 0.67% of ₹1000 is ₹6.70). Use the realized yield instead, so the
  // header always agrees with the row directly below it.
  const realizedRewardPct = best.metrics.cashValue / voucherAmount * 100;
  const forgoneRewardPct = legs ? (legs.reward.cashValue / voucherAmount * 100) : realizedRewardPct;
  const bestDiscountNotTaken = eitherOrChoice === 'reward' && best.upfront !== 0;
  const bestRewardNotTaken = eitherOrChoice === 'discount' && forgoneRewardPct !== 0;
  const topCappedTag = best.metrics.isCapped
    ? ' (Capped)'
    : (best.metrics.hasCapRule ? ' (Subject to Monthly Cap)' : '');
  document.getElementById('upfrontValue').textContent = bestDiscountNotTaken
    ? `${best.upfront.toFixed(2)}% available, not taken (₹${best.metrics.netPaid.toFixed(0)} to pay)`
    : `${best.upfront.toFixed(2)}% (₹${best.metrics.netPaid.toFixed(0)} to pay)`;
  document.getElementById('rewardValue').textContent = bestRewardNotTaken
    ? `${forgoneRewardPct.toFixed(2)}% available, not taken (₹${best.metrics.cashValue.toFixed(2)} back)`
    : `${realizedRewardPct.toFixed(2)}% (₹${best.metrics.cashValue.toFixed(2)} back)${topCappedTag}`;
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
