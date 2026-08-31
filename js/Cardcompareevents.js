// js/cardCompareEvents.js
// Imports data, calc, state, and dom. Wires events and renders results.

import { cardProfiles, getExclusionsForCard, getOffersForCard, scenarios, BUCKET_FILTER_LABELS, cardMatchesBucketFilter } from './cardCompareData.js';
import { calculateNetValue, isOfferExpired, isOfferExpiringSoon } from './cardCompareCalc.js';
import { state, setCard, setVariant, setSpend, setBucketFilter, toggleTag } from './cardCompareState.js';
import { dom } from './cardCompareDom.js';

function fmt(n) {
  const sign = n < 0 ? '-' : '';
  n = Math.abs(Math.round(n));
  return sign + '₹' + n.toLocaleString('en-IN');
}

function getCard(id) {
  return cardProfiles.find(c => c.id === id);
}

// --- URL sync: /compare/{slugA}-vs-{slugB}?general=500000&rent=20000&va=visa ---
// Query keys map 1:1 to state.spend category keys except where noted.
const SPEND_PARAM_MAP = {
  general: 'general',
  rent: 'rent',
  fuel: 'fuel',
  utility_bill_via_app: 'utility',
  insurance_premium: 'insurance',
  international_spend: 'intl'
};

function cardBySlug(slug) {
  return cardProfiles.find(c => c.slug === slug);
}

/**
 * Read the current URL (path + query string) and apply it to state,
 * where valid. Silently falls back to existing state defaults for
 * anything malformed or unrecognized — a bad URL should never crash
 * the page, just ignore the parts it can't use.
 */
export function parseUrlIntoState() {
  const pathMatch = window.location.pathname.match(/\/compare\/([a-z0-9-]+)-vs-([a-z0-9-]+)\/?$/);
  if (pathMatch) {
    const cardFromA = cardBySlug(pathMatch[1]);
    const cardFromB = cardBySlug(pathMatch[2]);
    if (cardFromA) state.cardAId = cardFromA.id;
    if (cardFromB) state.cardBId = cardFromB.id;
  }

  const params = new URLSearchParams(window.location.search);
  Object.entries(SPEND_PARAM_MAP).forEach(([category, param]) => {
    if (params.has(param)) setSpend(category, params.get(param));
  });
  if (params.has('va')) state.variantA = params.get('va');
  if (params.has('vb')) state.variantB = params.get('vb');
}

/**
 * Push the current state into the URL bar (path + query string) so
 * whatever's on screen is always exactly what's shareable/bookmarkable.
 * Uses replaceState, not pushState — avoids flooding browser history
 * with one entry per keystroke while still keeping the address bar live.
 */
function updateUrlFromState() {
  const cardA = getCard(state.cardAId);
  const cardB = getCard(state.cardBId);
  const path = `/compare/${cardA.slug}-vs-${cardB.slug}`;

  const params = new URLSearchParams();
  Object.entries(SPEND_PARAM_MAP).forEach(([category, param]) => {
    const amount = state.spend[category];
    if (amount) params.set(param, amount); // omit zero/empty values — keeps URLs clean
  });
  if (state.variantA) params.set('va', state.variantA);
  if (state.variantB) params.set('vb', state.variantB);

  const query = params.toString();
  const url = path + (query ? '?' + query : '');
  window.history.replaceState(null, '', url);

  document.title = `${cardA.name} vs ${cardB.name} — Compare Cards | VouchWise`;
}


const OFFER_TYPE_LABELS = {
  lounge: 'Lounge access',
  dining: 'Dining & lifestyle',
  shopping: 'Shopping',
  other: 'Other benefits'
};

function renderBenefitsList(cardId) {
  const off = getOffersForCard(cardId);
  if (!off.length) return '<p class="empty-note">No recurring offers logged for this card yet.</p>';

  const grouped = {};
  off.forEach(o => {
    const label = OFFER_TYPE_LABELS[o.offer_type] || 'Other benefits';
    (grouped[label] = grouped[label] || []).push(o);
  });

  return Object.entries(grouped).map(([label, items]) => `
    <div class="benefit-group">
      <div class="benefit-group-label">${label}</div>
      ${items.map(o => {
        const expired = isOfferExpired(o);
        const expiringSoon = !expired && isOfferExpiringSoon(o);
        const isVendor = o.offer_source === 'vendor_offer';
        const isVoucher = o.value_type === 'voucher';
        let vendorBadge = '';
        if (expired) vendorBadge = '<span class="vendor-badge expired">EXPIRED — needs update</span>';
        else if (isVendor) vendorBadge = `<span class="vendor-badge${expiringSoon ? ' expiring' : ''}">Vendor offer · valid until ${o.valid_until}</span>`;
        if (!expired && isVoucher) vendorBadge += '<span class="vendor-badge voucher-tag">Voucher/conditional — not in net total</span>';
        return `
        <div class="benefit-item${expired ? ' expired-item' : ''}">
          <span class="benefit-text">${vendorBadge}${o.value_description}</span>
          ${o.estimated_value_inr && !expired ? `<span class="benefit-value${isVoucher ? ' voucher-value' : ''}">${fmt(o.estimated_value_inr)}</span>` : ''}
        </div>
      `;
      }).join('')}
    </div>
  `).join('');
}

function renderExclusionsSummary(cardId) {
  const ex = getExclusionsForCard(cardId);
  if (!ex.length) return '';

  const zeroReward = ex.filter(e => e.reward_factor === 0).map(e => e.category.replace(/_/g, ' '));
  const unknownReward = ex.filter(e => e.reward_factor === null || e.reward_factor === undefined).map(e => e.category.replace(/_/g, ' '));
  const hasExtraFee = ex.filter(e => e.extra_fee_percent).map(e => e.category.replace(/_/g, ' '));

  let html = '';
  if (zeroReward.length) html += `<div class="exclusion-line"><span class="exclusion-label">Zero rewards on:</span> ${zeroReward.join(', ')}</div>`;
  if (unknownReward.length) html += `<div class="exclusion-line"><span class="exclusion-label">Unconfirmed:</span> ${unknownReward.join(', ')}</div>`;
  if (hasExtraFee.length) html += `<div class="exclusion-line neg"><span class="exclusion-label">Extra fee applies:</span> ${hasExtraFee.join(', ')}</div>`;
  return html;
}

function renderHeaderCell(cardId, variant, y1) {
  const card = getCard(cardId);
  const warnings = [];
  if (y1.dataInsufficient) warnings.push('Base reward rate or point value not yet sourced for this card — reward figures below are incomplete, not zero-value.');
  if (y1.hasUnknownCategoryFactor) warnings.push('At least one spend category has an unconfirmed reward status for this card.');
  if (y1.isEstimate && !y1.dataInsufficient) warnings.push('Uses an estimated point value — verify against the card\'s current redemption rates before relying on this.');

  return `
    <div class="col-cell">
      <div class="result-title">
        <span>${card.name}${variant ? ' <span class="variant-tag">(' + variant.toUpperCase() + ')</span>' : ''}</span>
        ${y1.isEstimate ? '<span class="badge">ESTIMATE</span>' : ''}
      </div>
      ${card.eligibility_notes ? `<div class="eligibility-note">${card.eligibility_notes}</div>` : ''}
      ${warnings.length ? `<div class="warning">${warnings.join(' ')}</div>` : ''}
    </div>
  `;
}

function renderBenefitsCell(cardId) {
  return `<div class="col-cell">${renderBenefitsList(cardId)}</div>`;
}

function renderExclusionsCell(cardId) {
  const summary = renderExclusionsSummary(cardId);
  return `<div class="col-cell">${summary || '<p class="empty-note">No exclusions logged for this card yet — verify before assuming none exist.</p>'}</div>`;
}

function renderRewardFormula(card, y1) {
  if (y1.dataInsufficient || !y1.categoryBreakdown.length) return '';
  const rate = card.base_reward_multiplier;
  const pointValue = card.base_point_value_inr;
  const lines = y1.categoryBreakdown
    .filter(c => c.amount > 0)
    .map(c => {
      if (c.value === null) return `<div class="formula-line">${c.category.replace(/_/g, ' ')}: ${fmt(c.amount)} — reward status unconfirmed for this category</div>`;
      if (c.factor === 0) return `<div class="formula-line">${c.category.replace(/_/g, ' ')}: ${fmt(c.amount)} × 0% (excluded) = ₹0</div>`;
      const factorNote = c.factor !== 1 ? ` × ${c.factor} (partial rate)` : '';
      return `<div class="formula-line">${c.category.replace(/_/g, ' ')}: ${fmt(c.amount)} × ${rate}%${factorNote} × ₹${pointValue}/pt = ${fmt(c.value)}</div>`;
    });
  return lines.length ? `<div class="formula-box">${lines.join('')}</div>` : '';
}

function renderLedgerCell(cardId, variant) {
  const card = getCard(cardId);
  const ex = getExclusionsForCard(cardId);
  const off = getOffersForCard(cardId);
  const y1 = calculateNetValue(card, ex, off, state.spend, 1, variant);
  const y2 = calculateNetValue(card, ex, off, state.spend, 2, variant);

  const appliedOffersList = y1.appliedOffers.length
    ? '<div class="offers-list">' + y1.appliedOffers.map(o => `<div class="offer-line"><span>${o.description}</span><span>${fmt(o.value)}</span></div>`).join('') + '</div>'
    : '';

  return `
    <div class="col-cell">
      <div class="ledger-line"><span>Reward value</span><span>${fmt(y1.rewardValue)}</span></div>
      ${renderRewardFormula(card, y1)}
      <div class="ledger-line"><span>Cash-equivalent welcome/milestone offers</span><span>${fmt(y1.offerValue)}</span></div>
      <div class="ledger-line"><span>Joining + annual fee</span><span class="neg">-${fmt(y1.fees.totalFees).slice(1)}</span></div>
      ${y1.extraCategoryFees > 0 ? `<div class="ledger-line"><span>Category convenience fees</span><span class="neg">-${fmt(y1.extraCategoryFees).slice(1)}</span></div>` : ''}
      <div class="ledger-line total"><span>Net, Year 1</span><span class="${y1.netValue >= 0 ? 'pos' : 'neg'}">${fmt(y1.netValue)}</span></div>
      <div class="ledger-line total"><span>Net, Year 2+</span><span class="${y2.netValue >= 0 ? 'pos' : 'neg'}">${fmt(y2.netValue)}</span></div>
      ${appliedOffersList}
      ${y1.voucherOfferCount > 0 ? `<div class="uncounted-note">+ ${y1.voucherOfferCount} voucher/conditional benefit${y1.voucherOfferCount > 1 ? 's' : ''} shown in "What you get" below, NOT counted here — face value isn't guaranteed cash.</div>` : ''}
      ${y1.expiredOfferCount > 0 ? `<div class="uncounted-note">${y1.expiredOfferCount} vendor offer${y1.expiredOfferCount > 1 ? 's' : ''} shown above ${y1.expiredOfferCount > 1 ? 'are' : 'is'} marked EXPIRED and excluded from this total — check the "what you get" list for details.</div>` : ''}
    </div>
  `;
}

function renderSpendTable() {
  const spendLevels = [200000, 500000, 1000000, 2500000, 5000000];
  const cardA = getCard(state.cardAId);
  const cardB = getCard(state.cardBId);
  const exA = getExclusionsForCard(state.cardAId);
  const exB = getExclusionsForCard(state.cardBId);
  const offA = getOffersForCard(state.cardAId);
  const offB = getOffersForCard(state.cardBId);

  const rows = spendLevels.map(spend => {
    const spendByCategory = { general: spend }; // preset table uses general spend only, ignoring category inputs
    const aY1 = calculateNetValue(cardA, exA, offA, spendByCategory, 1, state.variantA);
    const aY2 = calculateNetValue(cardA, exA, offA, spendByCategory, 2, state.variantA);
    const bY1 = calculateNetValue(cardB, exB, offB, spendByCategory, 1, state.variantB);
    const bY2 = calculateNetValue(cardB, exB, offB, spendByCategory, 2, state.variantB);
    return `<tr class="clickable-row" data-spend="${spend}" title="Click to load ₹${spend.toLocaleString('en-IN')} into the spend inputs and ledger above">
      <td>₹${spend.toLocaleString('en-IN')}</td>
      <td class="${aY1.netValue > bY1.netValue ? 'better' : ''}">${aY1.dataInsufficient ? 'n/a' : fmt(aY1.netValue)}</td>
      <td class="${aY2.netValue > bY2.netValue ? 'better' : ''}">${aY2.dataInsufficient ? 'n/a' : fmt(aY2.netValue)}</td>
      <td class="${bY1.netValue > aY1.netValue ? 'better' : ''}">${bY1.dataInsufficient ? 'n/a' : fmt(bY1.netValue)}</td>
      <td class="${bY2.netValue > aY2.netValue ? 'better' : ''}">${bY2.dataInsufficient ? 'n/a' : fmt(bY2.netValue)}</td>
    </tr>`;
  }).join('');

  dom.tableBody.innerHTML = rows;
}

function updateVariantVisibility(slot) {
  const cardId = slot === 'A' ? state.cardAId : state.cardBId;
  const row = slot === 'A' ? dom.variantRowA : dom.variantRowB;
  const select = slot === 'A' ? dom.variantSelectA : dom.variantSelectB;
  const card = getCard(cardId);
  const currentVariant = slot === 'A' ? state.variantA : state.variantB;

  if (card.variants && card.variants.length) {
    row.style.display = '';
    select.innerHTML = card.variants.map(v => `<option value="${v.network}">${v.network.toUpperCase()}</option>`).join('');
    // Respect a variant already in state (e.g. loaded from the URL's va/vb param)
    // if it's actually valid for this card; only default to the first option
    // when there's nothing set yet or the prior value doesn't apply here.
    const validExisting = card.variants.find(v => v.network === currentVariant);
    const chosen = validExisting ? currentVariant : card.variants[0].network;
    setVariant(slot, chosen);
    select.value = chosen;
  } else {
    row.style.display = 'none';
    setVariant(slot, null);
  }
}

export function render() {
  const cardA = getCard(state.cardAId);
  const cardB = getCard(state.cardBId);
  const exA = getExclusionsForCard(state.cardAId);
  const exB = getExclusionsForCard(state.cardBId);
  const offA = getOffersForCard(state.cardAId);
  const offB = getOffersForCard(state.cardBId);
  const y1A = calculateNetValue(cardA, exA, offA, state.spend, 1, state.variantA);
  const y1B = calculateNetValue(cardB, exB, offB, state.spend, 1, state.variantB);

  dom.headerRow.innerHTML = renderHeaderCell(state.cardAId, state.variantA, y1A) + renderHeaderCell(state.cardBId, state.variantB, y1B);
  dom.benefitsRow.innerHTML = renderBenefitsCell(state.cardAId) + renderBenefitsCell(state.cardBId);
  dom.exclusionsRow.innerHTML = renderExclusionsCell(state.cardAId) + renderExclusionsCell(state.cardBId);
  dom.ledgerRow.innerHTML = renderLedgerCell(state.cardAId, state.variantA) + renderLedgerCell(state.cardBId, state.variantB);

  renderSpendTable();
  updateUrlFromState();
}

function syncSpendInputsFromState() {
  dom.spendGeneral.value = state.spend.general;
  dom.spendRent.value = state.spend.rent;
  dom.spendFuel.value = state.spend.fuel;
  dom.spendUtility.value = state.spend.utility_bill_via_app;
  dom.spendInsurance.value = state.spend.insurance_premium;
  dom.spendInternational.value = state.spend.international_spend;
}

function getFilteredCards() {
  return cardProfiles.filter(c =>
    cardMatchesBucketFilter(c, state.bucketFilter) &&
    (state.activeTags.length === 0 || state.activeTags.some(tag => c.tags.includes(tag)))
  );
}

export function populateCardSelects() {
  const filtered = getFilteredCards();
  // Never allow an empty dropdown — if a filter combination matches nothing,
  // fall back to the full list rather than showing a broken empty select.
  const listForOptions = filtered.length ? filtered : cardProfiles;
  const options = listForOptions.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  dom.cardSelectA.innerHTML = options;
  dom.cardSelectB.innerHTML = options;

  // If the current selection got filtered out, fall back to the first
  // (and second, if available) matching cards instead of showing a stale
  // selection that no longer matches the active filter.
  const idsInList = listForOptions.map(c => c.id);
  if (!idsInList.includes(state.cardAId)) setCard('A', listForOptions[0].id);
  if (!idsInList.includes(state.cardBId) || state.cardBId === state.cardAId) {
    setCard('B', listForOptions[1] ? listForOptions[1].id : listForOptions[0].id);
  }

  dom.cardSelectA.value = state.cardAId;
  dom.cardSelectB.value = state.cardBId;
  updateVariantVisibility('A');
  updateVariantVisibility('B');
  syncSpendInputsFromState();
}

const ALL_TAGS = ['travel', 'lifestyle', 'lounge-access', 'shopping', 'forex', 'cashback', 'dining', 'fuel'];

export function renderFilters() {
  dom.bucketFilterRow.innerHTML = Object.entries(BUCKET_FILTER_LABELS).map(([value, label]) =>
    `<span class="filter-chip${state.bucketFilter === value ? ' active' : ''}" data-bucket="${value}">${label}</span>`
  ).join('');

  dom.tagFilterRow.innerHTML = ALL_TAGS.map(tag =>
    `<span class="filter-chip${state.activeTags.includes(tag) ? ' active' : ''}" data-tag="${tag}">${tag.replace(/-/g, ' ')}</span>`
  ).join('');
}

export function renderScenarios() {
  dom.scenarioRow.innerHTML = scenarios.map(s =>
    `<div class="scenario-card" data-scenario="${s.id}">
      <div class="scenario-card-label">${s.label}</div>
      <div class="scenario-card-desc">${s.description}</div>
    </div>`
  ).join('');
}

function applyScenario(scenarioId) {
  const scenario = scenarios.find(s => s.id === scenarioId);
  if (!scenario) return;

  state.bucketFilter = scenario.bucketFilter || 'all';
  state.activeTags = [...(scenario.tagFilter || [])];
  Object.entries(scenario.spend).forEach(([category, amount]) => setSpend(category, amount));
  setCard('A', scenario.suggestedCardA);
  setCard('B', scenario.suggestedCardB);

  renderFilters();
  populateCardSelects();
  render();
}

export function attachEvents() {
  dom.cardSelectA.addEventListener('change', e => { setCard('A', e.target.value); updateVariantVisibility('A'); render(); });
  dom.cardSelectB.addEventListener('change', e => { setCard('B', e.target.value); updateVariantVisibility('B'); render(); });
  dom.variantSelectA.addEventListener('change', e => { setVariant('A', e.target.value); render(); });
  dom.variantSelectB.addEventListener('change', e => { setVariant('B', e.target.value); render(); });

  const spendFields = [
    ['spendGeneral', 'general'],
    ['spendRent', 'rent'],
    ['spendFuel', 'fuel'],
    ['spendUtility', 'utility_bill_via_app'],
    ['spendInsurance', 'insurance_premium'],
    ['spendInternational', 'international_spend']
  ];
  spendFields.forEach(([domKey, category]) => {
    dom[domKey].addEventListener('input', e => { setSpend(category, e.target.value); render(); });
  });

  dom.scenarioRow.addEventListener('click', e => {
    const card = e.target.closest('[data-scenario]');
    if (card) applyScenario(card.dataset.scenario);
  });

  dom.bucketFilterRow.addEventListener('click', e => {
    const chip = e.target.closest('[data-bucket]');
    if (!chip) return;
    setBucketFilter(chip.dataset.bucket);
    renderFilters();
    populateCardSelects();
    render();
  });

  dom.tagFilterRow.addEventListener('click', e => {
    const chip = e.target.closest('[data-tag]');
    if (!chip) return;
    toggleTag(chip.dataset.tag);
    renderFilters();
    populateCardSelects();
    render();
  });

  dom.presetTable.addEventListener('click', e => {
    const row = e.target.closest('[data-spend]');
    if (!row) return;
    // Matches the preset table's own stated assumption ("general spend
    // only") — clicking a row sets General to that amount and clears every
    // other category, so what's shown above always matches what produced
    // the row's numbers. Partial category spend from before the click is
    // intentionally discarded, not merged.
    setSpend('general', row.dataset.spend);
    setSpend('rent', 0);
    setSpend('fuel', 0);
    setSpend('utility_bill_via_app', 0);
    setSpend('insurance_premium', 0);
    setSpend('international_spend', 0);
    syncSpendInputsFromState();
    render();
  });
}