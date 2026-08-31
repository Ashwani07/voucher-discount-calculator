// js/cardCompareDiscoverEvents.js
// Imports data, calc, state, and dom for discovery pages. Wires
// rendering. No addEventListener calls yet — v1 has no interactive
// controls (unlike compare.html's spend inputs), just a ranked list
// per URL. Add listeners here if that changes.

import { cardProfiles, getExclusionsForCard } from './cardCompareData.js';
import { rankCardsForCategory, buildWhyLine } from './cardCompareDiscoverCalc.js';
import { getCategoryConfig } from './cardCompareDiscoverData.js';
import { setCategory } from './cardCompareDiscoverState.js';
import { dom } from './cardCompareDiscoverDom.js';

const TOP_N = 4;

function slugFromUrl() {
  const match = window.location.pathname.match(/\/best-for\/([a-z-]+)\/?$/);
  return match ? match[1] : null;
}

function renderUnsupported(slug) {
  dom.pageTitle.textContent = 'This category isn\u2019t ready yet';
  dom.pageIntro.textContent = '';
  dom.topPicksRow.innerHTML = '';
  dom.flaggedRow.innerHTML = '';
  dom.unsupportedNotice.innerHTML = `
    <p class="empty-note">We don't have sourced, per-category reward data for
    "${slug || 'this category'}" across our card dataset yet. Rather than guess,
    this page stays empty until it's verified against each issuer's terms — see
    the compare tool for a full side-by-side instead.</p>
  `;
}

function renderCard(card, meta) {
  const rateDisplay = meta.effectiveRatePercent !== null
    ? `${meta.effectiveRatePercent.toFixed(2)}%`
    : (meta.isExcluded ? 'Excluded' : 'Unverified');

  return `
    <div class="discover-card">
      <div class="discover-card-name"><a href="/compare/${card.slug}">${card.name}</a></div>
      <div class="discover-card-rate">${rateDisplay}</div>
      <div class="discover-card-why">${buildWhyLine(meta)}</div>
      ${meta.isEstimate ? '<span class="badge">ESTIMATE</span>' : ''}
    </div>
  `;
}

export function render() {
  const slug = slugFromUrl();
  const config = slug ? getCategoryConfig(slug) : null;

  if (!config || config.coverageStatus !== 'confirmed') {
    renderUnsupported(slug);
    return;
  }

  setCategory(config.key);
  document.title = `Best Credit Cards for ${config.label} in India | The Real Rate \u2014 VouchWise`;
  dom.pageTitle.textContent = `Best credit cards for ${config.label.toLowerCase()}`;
  dom.pageIntro.textContent = config.metaDescription;
  dom.unsupportedNotice.innerHTML = '';

  const { eligible, flagged } = rankCardsForCategory(cardProfiles, getExclusionsForCard, config.key);

  dom.topPicksRow.innerHTML = eligible.slice(0, TOP_N).map(({ card, meta }) => renderCard(card, meta)).join('')
    || '<p class="empty-note">No card currently has a confirmed positive rate for this category \u2014 see below for what\u2019s excluded or unverified.</p>';

  dom.flaggedRow.innerHTML = flagged.map(({ card, meta }) => renderCard(card, meta)).join('');
}
