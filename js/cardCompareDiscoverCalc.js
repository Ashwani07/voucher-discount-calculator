// js/cardCompareDiscoverCalc.js
// Pure-ish helper layer for "best card for X spend category" discovery
// pages (/best-for/education, /best-for/insurance, etc).
//
// Deliberately reuses calculateRewardValue from cardCompareCalc.js
// instead of re-deriving reward math — same base-rate/exclusion/factor
// logic that already powers the compare page, just probed at a single
// category with a sample amount to back out an effective rate.
//
// Does NOT model variants (Scapia Visa vs RuPay) yet — v1 uses the
// card's default base_reward_multiplier, same "lean v1" simplification
// already documented in cardCompare_architecture.md §8. If a
// variant-specific category ranking is ever needed, extend this then.
//
// Inherits the compare page's existing convention: a category with NO
// exclusion row for a card is treated as earning at the base rate
// (factor 1), same as cardCompareCalc.js's findExclusion() default.
// That's not a new assumption introduced here — it's the app's existing
// rule, just worth restating since a discovery page makes the
// consequence more visible (a card can rank #1 for a category purely
// because no exclusion has been sourced for it yet, not because it's
// been confirmed to earn normally). See cardCompareDiscoverData.js's
// coverageStatus field for the category-level version of this caveat.

import { calculateRewardValue } from './cardCompareCalc.js';

const SAMPLE_AMOUNT_INR = 10000; // arbitrary — only the resulting % rate is used, not the rupee figure

/**
 * Compute the effective reward rate (%) a single card earns on a given
 * spend category. Returns effectiveRatePercent: null whenever the
 * number can't be trusted (missing base rate/point value, or an
 * unconfirmed category factor) — never fabricates a figure to fill a gap.
 */
export function computeCategoryEffectiveRate(cardProfile, exclusionsForCard, category) {
  const spendByCategory = { [category]: SAMPLE_AMOUNT_INR };
  const result = calculateRewardValue(cardProfile, exclusionsForCard, spendByCategory, null);

  const dataInsufficient = result.hasUnknownRate || result.hasUnknownPointValue;
  const entry = result.categoryBreakdown[0]; // only this one category was ever populated

  const isExcluded = !dataInsufficient && !!entry && entry.factor === 0;
  const isUnknownFactor = !dataInsufficient && !!entry && entry.factor === null;

  const extraFeesRaw = result.extraFees > 0 ? (result.extraFees / SAMPLE_AMOUNT_INR) * 100 : 0;
  const extraFeePercent = Math.round(extraFeesRaw * 100) / 100; // guard against float noise

  const effectiveRatePercent = (dataInsufficient || isExcluded || isUnknownFactor || !entry)
    ? null
    : Math.round((entry.value / SAMPLE_AMOUNT_INR) * 100 * 100) / 100;

  return {
    category,
    effectiveRatePercent,
    isExcluded,
    isUnknownFactor,
    dataInsufficient,
    isEstimate: cardProfile.base_is_estimate === 1,
    extraFeePercent
  };
}

/**
 * Rank every card for a given category. Excluded/unverified cards are
 * NOT dropped — they land in the separate `flagged` bucket, same
 * "surface the gap, don't hide it" rule used throughout the compare page.
 */
export function rankCardsForCategory(cardProfiles, exclusionsLookupFn, category) {
  const scored = cardProfiles.map(card => {
    const exclusionsForCard = exclusionsLookupFn(card.id);
    const meta = computeCategoryEffectiveRate(card, exclusionsForCard, category);
    return { card, meta };
  });

  const eligible = scored
    .filter(s => s.meta.effectiveRatePercent !== null)
    .sort((a, b) => b.meta.effectiveRatePercent - a.meta.effectiveRatePercent);

  const flagged = scored.filter(s => s.meta.effectiveRatePercent === null);

  return { eligible, flagged };
}

/**
 * Human-readable "why" line per ranked result. Kept separate from
 * rendering (cardCompareDiscoverEvents.js) so it's testable on its own,
 * same split as cardCompareCalc.js / cardCompareEvents.js.
 */
export function buildWhyLine(meta) {
  if (meta.isExcluded) {
    return `No rewards earned on this category — excluded by the issuer's own terms.`;
  }
  if (meta.isUnknownFactor) {
    return `Reward status for this category is unconfirmed for this card — not verified as earning or excluded.`;
  }
  if (meta.dataInsufficient) {
    return `Base reward rate or point value not yet sourced for this card — can't compute a real number.`;
  }
  const feeNote = meta.extraFeePercent > 0
    ? ` A ${meta.extraFeePercent}% convenience fee applies on top, separate from the reward rate.`
    : '';
  const estimateNote = meta.isEstimate ? ' Uses an estimated point value — verify before relying on this.' : '';
  return `Earns an effective ${meta.effectiveRatePercent.toFixed(2)}% on this category.${feeNote}${estimateNote}`;
}
