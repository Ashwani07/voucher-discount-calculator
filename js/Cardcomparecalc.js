// js/cardCompareCalc.js
// Pure functions only. No DOM. No imports from other app modules.
// Mirrors calculator.js's isolation rule from the existing VouchWise codebase.
//
// SCOPE NOTE (read before trusting output): this models BASE rate spend,
// category exclusions/fees, fee waivers, and welcome/milestone offers.
// It does NOT yet model: accelerated categories (Regalia Gold's 5X/10X,
// Scapia's 20% travel rate, Millennia's 5% merchants), per-transaction
// caps (ixigo AU insurance), or shared multi-category statement-cycle
// caps (Times Black's 5,000-pt pool). Treat output as a base-rate floor,
// not a ceiling — real value with active category-optimization is higher
// for most of these cards. Flagged explicitly in the result object.

/**
 * Find the exclusion row for a spend category on a given card, if any.
 */
function findExclusion(exclusionsForCard, category) {
  return exclusionsForCard.find(e => e.category === category) || null;
}

/**
 * Vendor offers (offer_source: 'vendor_offer') carry valid_from/valid_until
 * dates and are expected to lapse — unlike card_benefit offers, which have
 * no expiry concept at all. A card_benefit offer is never "expired" by
 * this function; only vendor_offer entries with a valid_until can be.
 */
export function isOfferExpired(offer, today = new Date()) {
  if (offer.offer_source !== 'vendor_offer' || !offer.valid_until) return false;
  return new Date(offer.valid_until) < today;
}

/**
 * "Expiring soon" is a maintenance signal, not a reader-facing warning by
 * default — used by the admin view to surface offers that need re-checking
 * before they lapse. daysAhead defaults to 30.
 */
export function isOfferExpiringSoon(offer, daysAhead = 30, today = new Date()) {
  if (offer.offer_source !== 'vendor_offer' || !offer.valid_until) return false;
  const until = new Date(offer.valid_until);
  if (until < today) return false; // already expired, not "expiring"
  const msAhead = daysAhead * 24 * 60 * 60 * 1000;
  return (until - today) <= msAhead;
}

/**
 * Resolve the base reward multiplier for a card, accounting for
 * network variants (e.g. Scapia Visa vs RuPay have different rates).
 */
function resolveBaseRate(cardProfile, variantNetwork) {
  if (cardProfile.variants && variantNetwork) {
    const v = cardProfile.variants.find(v => v.network === variantNetwork);
    if (v) return v.base_reward_multiplier;
  }
  return cardProfile.base_reward_multiplier;
}

/**
 * Calculate reward value earned across a spend-by-category breakdown.
 * spendByCategory: { general: 500000, fuel: 20000, rent: 0, ... }
 * 'general' (or any key with no matching exclusion row) earns at the base rate.
 */
export function calculateRewardValue(cardProfile, exclusionsForCard, spendByCategory, variantNetwork) {
  const baseRate = resolveBaseRate(cardProfile, variantNetwork);
  const pointValue = cardProfile.base_point_value_inr;

  const result = {
    rewardValue: 0,
    extraFees: 0,
    hasUnknownRate: baseRate === null || baseRate === undefined,
    hasUnknownPointValue: pointValue === null || pointValue === undefined,
    hasUnknownCategoryFactor: false,
    categoryBreakdown: []
  };

  if (result.hasUnknownRate || result.hasUnknownPointValue) {
    // Can't compute a real number — say so, don't fabricate one.
    return result;
  }

  for (const [category, amount] of Object.entries(spendByCategory)) {
    if (!amount) continue;
    const exclusion = category === 'general' ? null : findExclusion(exclusionsForCard, category);

    let factor = 1; // earns normally by default
    if (exclusion) {
      if (exclusion.reward_factor === null || exclusion.reward_factor === undefined) {
        result.hasUnknownCategoryFactor = true;
        factor = null;
      } else {
        factor = exclusion.reward_factor;
      }
      if (exclusion.extra_fee_percent) {
        const feeBase = exclusion.extra_fee_cap_inr
          ? Math.min(amount * (exclusion.extra_fee_percent / 100), exclusion.extra_fee_cap_inr)
          : amount * (exclusion.extra_fee_percent / 100);
        result.extraFees += feeBase;
      }
    }

    const categoryValue = factor === null ? null : amount * (baseRate / 100) * pointValue * factor;
    if (categoryValue !== null) result.rewardValue += categoryValue;

    result.categoryBreakdown.push({ category, amount, factor, value: categoryValue });
  }

  return result;
}

/**
 * Calculate fees for a given year. Year 1 includes the joining fee;
 * annual fee applies unless the spend threshold waives it.
 */
export function calculateFees(cardProfile, annualSpend, year) {
  const feeWaived = cardProfile.waiver_spend_threshold
    ? annualSpend >= cardProfile.waiver_spend_threshold
    : cardProfile.annual_fee === 0; // structurally free cards (no threshold, always 0)

  const joiningFee = year === 1 ? (cardProfile.joining_fee || 0) : 0;
  const annualFee = year === 1 ? 0 : (feeWaived ? 0 : (cardProfile.annual_fee || 0));

  return { joiningFee, annualFee, totalFees: joiningFee + annualFee, feeWaived };
}

/**
 * Sum welcome benefits (year 1 only) and recurring/milestone benefits
 * (any year, if the spend threshold is met) from the offers array.
 * Only counts offers with a real estimated_value_inr — offers with
 * estimated_value_inr: null (e.g. "unlimited lounge access") are
 * intentionally excluded from the rupee total; they're real value,
 * just not ones this calculator prices.
 */
export function calculateOfferValue(offersForCard, annualSpend, year) {
  let value = 0;
  let uncountedOfferCount = 0; // offers with no numeric value, e.g. "unlimited lounge access"
  let expiredOfferCount = 0; // vendor offers past valid_until — excluded from value, tracked separately
  let voucherOfferCount = 0; // conditional/merchant-specific value (vouchers, discounts) — shown in "What you get" with their figure, but NOT summed into the net ledger, since face value isn't guaranteed cash-equivalent the way a points-to-statement-credit redemption is
  const applied = [];

  for (const offer of offersForCard) {
    if (isOfferExpired(offer)) {
      expiredOfferCount++;
      continue; // expired vendor offers contribute zero — never count stale value as if current
    }

    if (offer.value_type === 'voucher') {
      voucherOfferCount++;
      continue; // conditional/voucher value — descriptive only, never added to the ledger total
    }

    if (offer.estimated_value_inr === null || offer.estimated_value_inr === undefined) {
      uncountedOfferCount++;
      continue;
    }

    const isWelcomeOnly = offer.frequency === 'per_booking' && offer.cap_count === 1 && offer.condition_type === 'flat';
    const isRecurringFlat = offer.frequency === 'yearly' && offer.condition_type === 'flat';
    const isMilestone = offer.condition_type === 'with_spend';

    if (isWelcomeOnly && year !== 1) continue; // one-time, year 1 only
    if (isMilestone && annualSpend < offer.spend_threshold) continue; // threshold not met

    // Quarterly/monthly milestones: assume met every period if annual spend
    // implies even spend across periods clears the per-period threshold.
    // Rough approximation — flagged, not a real per-period spend simulation
    // (a real cardholder's spend isn't perfectly even month to month).
    let occurrences = 1;
    if (isMilestone && (offer.frequency === 'quarterly' || offer.frequency === 'monthly')) {
      const periodsPerYear = offer.frequency === 'quarterly' ? 4 : 12;
      const impliedPeriodSpend = annualSpend / periodsPerYear;
      occurrences = impliedPeriodSpend >= offer.spend_threshold ? periodsPerYear : 0;
    }
    if (occurrences === 0) continue;

    const offerValue = offer.estimated_value_inr * occurrences;
    value += offerValue;
    applied.push({ description: offer.value_description, value: offerValue });
  }

  return { value, applied, uncountedOfferCount, expiredOfferCount, voucherOfferCount };
}

/**
 * Full net-value calculation for one card, one year.
 */
export function calculateNetValue(cardProfile, exclusionsForCard, offersForCard, spendByCategory, year, variantNetwork) {
  const annualSpend = Object.values(spendByCategory).reduce((a, b) => a + (b || 0), 0);

  const rewards = calculateRewardValue(cardProfile, exclusionsForCard, spendByCategory, variantNetwork);
  const fees = calculateFees(cardProfile, annualSpend, year);
  const offerResult = calculateOfferValue(offersForCard, annualSpend, year);

  const netValue = rewards.rewardValue + offerResult.value - fees.totalFees - rewards.extraFees;

  return {
    year,
    annualSpend,
    rewardValue: rewards.rewardValue,
    offerValue: offerResult.value,
    appliedOffers: offerResult.applied,
    uncountedOfferCount: offerResult.uncountedOfferCount,
    expiredOfferCount: offerResult.expiredOfferCount,
    voucherOfferCount: offerResult.voucherOfferCount,
    fees,
    extraCategoryFees: rewards.extraFees,
    netValue,
    hasUnknownRate: rewards.hasUnknownRate,
    hasUnknownPointValue: rewards.hasUnknownPointValue,
    hasUnknownCategoryFactor: rewards.hasUnknownCategoryFactor,
    isEstimate: cardProfile.base_is_estimate === 1 || rewards.hasUnknownRate || rewards.hasUnknownPointValue,
    categoryBreakdown: rewards.categoryBreakdown,
    dataInsufficient: rewards.hasUnknownRate || rewards.hasUnknownPointValue
  };
}