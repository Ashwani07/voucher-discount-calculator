// calculator.js
import { cardRules } from './cardRules.js';

/**
 * Extracts the correct multiplier for a card/portal path
 */
export function getRewardMultiplier(card, portal, portalEntry) {
  if (portalEntry?.overrideRewardMultiplier !== undefined) {
    return portalEntry.overrideRewardMultiplier;
  }
  return getCardPortalMultiplier(card, portal);
}

export function getCardPortalMultiplier(card, portal) {
  // Check declarative portal overrides (e.g. Axis EdgeRewards/GrabDeals devalued to 0)
  if (portal?.id && cardRules?.portalOverrides?.[portal.id]) {
    const override = cardRules.portalOverrides[portal.id];
    if (override.acceleratedMultiplier !== undefined && card?.id?.startsWith('axis_')) {
      return override.acceleratedMultiplier;
    }
  }

  const multipliers = card.portalMultipliers || {};
  if (portal?.id !== undefined && multipliers[portal.id] !== undefined) {
    return multipliers[portal.id];
  }
  if (portal?.group !== undefined && multipliers[portal.group] !== undefined) {
    return multipliers[portal.group];
  }
  if (multipliers.default !== undefined) {
    return multipliers.default;
  }
  return 0; // Safe: no multiplier = no reward on this portal. Prevents cross-issuer bleed.
}

export function isCardPortalEligible(card, portal) {
  if (!card || !portal) return false;

  // If the portal is an issuer-specific portal that is marked as discount-only (e.g. Axis EdgeRewards / GrabDeals)
  if (portal.id && cardRules?.portalOverrides?.[portal.id]?.isDiscountOnly) {
    // Eligible if the card belongs to the portal's issuing bank
    if (portal.id.startsWith('axis_') && card.id?.startsWith('axis_')) return true;
    if (portal.id.startsWith('hdfc_') && card.id?.startsWith('hdfc_')) return true;
    if (portal.id.startsWith('icici_') && card.id?.startsWith('icici_')) return true;
    if (portal.id.startsWith('sbi_') && card.id?.startsWith('sbi_')) return true;
    if (portal.id.startsWith('amex_') && card.id?.startsWith('amex_')) return true;
  }

  // Base eligibility: check whether the unoverridden multiplier configured on the card is > 0
  const multipliers = card.portalMultipliers || {};
  if (portal.id !== undefined && multipliers[portal.id] !== undefined) {
    return Number(multipliers[portal.id]) > 0;
  }
  if (portal.group !== undefined && multipliers[portal.group] !== undefined) {
    return Number(multipliers[portal.group]) > 0;
  }
  if (multipliers.default !== undefined) {
    return Number(multipliers.default) > 0;
  }
  return false;
}

export function getMultiplier(card, portal, portalConfig) {
  return getRewardMultiplier(card, portal, portalConfig);
}

/**
 * Headline reward rate (%) for a card at a given multiplier — independent of
 * voucher amount. This is the "X% back" figure shown in result tables.
 * Single source of truth: previously duplicated in 3 places in app.js.
 */
export function getCardRewardRate(card, multiplier, portal = null, brand = null) {
  if (portal?.id === 'amazon') {
    const isAmazonPay = brand?.id === 'amazon_pay' || brand?.id === 'amazon_pay_gift_card';
    const override = isAmazonPay
      ? cardRules?.amazonPortalOverrides?.amazon_pay_gift_card?.[card.id]
      : cardRules?.amazonPortalOverrides?.brand_voucher?.[card.id];
    if (override && override.rewardRate !== undefined) {
      return override.rewardRate;
    }
  }
  if (!card.spendBlock) return 0;
  const baseRate = (card.pointsPerBlock / card.spendBlock) * multiplier * 100;
  return card.rewardType === 'points' ? baseRate * (card.pointValue ?? 1) : baseRate;
}

// ---------------------------------------------------------------------------
// Home-portal fee exclusion
// ---------------------------------------------------------------------------
// A card's issuing bank can only see the itemised breakdown of a transaction
// on its OWN portal (e.g. HDFC sees "voucher ₹10,000 + processing fee ₹413"
// as two separate line items on SmartBuy — confirmed against HDFC's own
// SmartBuy savings calculator, July 2026). On any third-party portal (Gyftr,
// Amazon, another bank's portal) the issuer has no such visibility — it only
// sees one swiped amount — so the fee is baked into the reward basis there.
//
// This is deliberately NOT imported from utils.js (groupCardsByBank uses the
// same prefix logic) to keep calculator.js free of app-module imports per
// Structure.md Section 3's dependency graph.
const HOME_PORTAL_IDS_BY_PREFIX = [
  { prefix: 'hdfc_', portalIds: ['hdfc_smartbuy'] },
  { prefix: 'icici_', portalIds: ['icici_ishop'] },
  { prefix: 'axis_', portalIds: ['axis_edgerewards', 'axis_grabdeals'] },
  { prefix: 'sbi_', portalIds: ['sbi_gyftr'] },
  { prefix: 'hsbc_', portalIds: ['hsbc_instabenefits'] },
  { prefix: 'amex_', portalIds: ['amex_shopwise'] },
  { prefix: 'indusind_', portalIds: ['indusind_instavouchers'] }
];

// Per-card exceptions where a portal outside the bank-prefix rule still has
// itemised visibility — because the MERCHANT (not the bank) itemises the
// fee. Add new entries here as you verify them; do not widen the prefix
// rule itself for a single-card exception.
const HOME_PORTAL_OVERRIDES = {
  icici_amazon: ['amazon'] // ICICI Amazon Pay card — Amazon itemises voucher + fee. User-verified, July 2026.
};

export function isHomePortal(card, portal) {
  if (!card?.id || !portal?.id) return false;

  const overridePortals = HOME_PORTAL_OVERRIDES[card.id];
  if (overridePortals?.includes(portal.id)) return true;

  const match = HOME_PORTAL_IDS_BY_PREFIX.find(entry => card.id.startsWith(entry.prefix));
  return match ? match.portalIds.includes(portal.id) : false;
}

// ---------------------------------------------------------------------------
// Either/or reward portals
// ---------------------------------------------------------------------------
// Historically every portal's upfront discount and card reward multiplier
// stacked — take the discount at checkout AND still earn accelerated points
// on the swipe. That assumption broke on HDFC SmartBuy: HDFC's own terms
// now state Insta Deals (the upfront discount) is explicitly NOT eligible
// for accelerated reward earn — it's a fork the cardholder must choose at
// checkout, not a combo (confirmed against HDFC SmartBuy T&Cs, Sept 2026).
//
// Add new portal ids here as other issuers roll out the same either/or
// mechanic — do not assume additive stacking is the default forever, and
// do not assume every future fork works identically to this one without
// re-verifying against that issuer's own terms first.
const EITHER_OR_PORTAL_IDS = ['hdfc_smartbuy'];

export function isEitherOrPortal(portal) {
  return EITHER_OR_PORTAL_IDS.includes(portal?.id);
}

/**
 * The original additive math: upfront discount AND card reward both apply
 * to the same transaction. Still correct for every portal NOT in
 * EITHER_OR_PORTAL_IDS. Factored out so both the normal path and each leg
 * of the either/or comparison (below) share one implementation — no
 * duplicated arithmetic to drift out of sync.
 */
function computeStackedMetrics(card, portal, portalConfig, voucherAmount, brand = null) {
  // Upfront savings (surcharges pass as negative numbers, e.g., -4.13)
  const upfrontSavings = voucherAmount * (portal.upfrontDiscountPercent / 100);
  const ccFeePercent = portalConfig?.convenienceFee?.effectiveCcFeePercent || 0;
  const ccFeeAmount = voucherAmount * (ccFeePercent / 100);
  const netPaid = voucherAmount - upfrontSavings + ccFeeAmount;

  const multiplier = getMultiplier(card, portal, portalConfig);

  // Reward basis: on a card's OWN bank portal, a convenience fee is an
  // itemised line the bank can see and excludes from reward calculation.
  // Everywhere else, the bank only sees the total swiped amount, so the fee
  // (if any) stays folded into what earns rewards.
  const feeIsExcludedFromRewards = portal.upfrontDiscountPercent < 0 && isHomePortal(card, portal);
  const rewardBasis = feeIsExcludedFromRewards ? voucherAmount : netPaid;

  let rpEarned = 0;
  let cashValue = 0;
  let isCapped = false;
  let uncappedCashValue = 0;
  let capLossAmount = 0;
  let capNotice = '';

  const cardCapRule = (cardRules?.cardCaps?.[card.id]?.[portal.id]) || (cardRules?.cardCaps?.[card.id]?.default);

  // Check portal-specific brand overrides (e.g. Amazon Pay Gift Card MCC 6540 exclusions)
  const isAmazonPortal = portal?.id === 'amazon';
  const isAmazonPayGiftCard = brand?.id === 'amazon_pay' || brand?.id === 'amazon_pay_gift_card';
  const amazonOverride = isAmazonPortal
    ? (isAmazonPayGiftCard
        ? cardRules?.amazonPortalOverrides?.amazon_pay_gift_card?.[card.id]
        : cardRules?.amazonPortalOverrides?.brand_voucher?.[card.id])
    : null;

  if (amazonOverride && amazonOverride.rewardRate !== undefined) {
    if (amazonOverride.rewardRate === 0) {
      rpEarned = 0;
      cashValue = 0;
      uncappedCashValue = 0;
      if (amazonOverride.reason || amazonOverride.notice) {
        capNotice = amazonOverride.notice || amazonOverride.reason;
      }
    } else {
      const dynamicRate = amazonOverride.rewardRate;
      cashValue = uncappedCashValue = rewardBasis * (dynamicRate / 100);
      if (card.rewardType === 'points' && (card.pointValue ?? 1) > 0) {
        rpEarned = Math.floor(cashValue / (card.pointValue ?? 1));
      }
      if (amazonOverride.notice) {
        capNotice = amazonOverride.notice;
      }
    }
  } else if (card.rewardType === "points" && card.spendBlock) {
    const completedBlocks = Math.floor(rewardBasis / card.spendBlock);
    const basePoints = completedBlocks * card.pointsPerBlock;
    const uncappedRp = Math.floor(basePoints * multiplier);
    uncappedCashValue = uncappedRp * (card.pointValue ?? 1);

    if (cardCapRule && (cardCapRule.maxAcceleratedPoints || cardCapRule.maxBonusPoints)) {
      const maxBonus = cardCapRule.maxAcceleratedPoints || cardCapRule.maxBonusPoints;
      // Bonus points are the points earned above base 1X
      const uncappedBonus = multiplier > 1 ? basePoints * (multiplier - 1) : 0;
      if (uncappedBonus > maxBonus) {
        isCapped = true;
        const awardedBonus = maxBonus;
        rpEarned = Math.floor(basePoints + awardedBonus);
        cashValue = rpEarned * (card.pointValue ?? 1);
        capLossAmount = uncappedCashValue - cashValue;
        capNotice = cardCapRule.notice || `Accelerated points capped at ${maxBonus.toLocaleString('en-IN')} RP/month`;
      } else {
        rpEarned = uncappedRp;
        cashValue = uncappedCashValue;
      }
    } else if (cardCapRule && cardCapRule.maxTotalPoints) {
      if (uncappedRp > cardCapRule.maxTotalPoints) {
        isCapped = true;
        rpEarned = cardCapRule.maxTotalPoints;
        cashValue = rpEarned * (card.pointValue ?? 1);
        capLossAmount = uncappedCashValue - cashValue;
        capNotice = cardCapRule.notice || `Points capped at ${cardCapRule.maxTotalPoints.toLocaleString('en-IN')} RP/month`;
      } else {
        rpEarned = uncappedRp;
        cashValue = uncappedCashValue;
      }
    } else {
      rpEarned = uncappedRp;
      cashValue = uncappedCashValue;
    }
  } else {
    // Continuous math for cashback cards using normalized block data
    // This dynamically calculates 5% from (5 / 100) * 100
    const dynamicBasePercent = (card.pointsPerBlock / card.spendBlock) * 100;
    const effectiveCashbackPercent = dynamicBasePercent * multiplier;
    uncappedCashValue = rewardBasis * (effectiveCashbackPercent / 100);

    if (cardCapRule && cardCapRule.maxCashback !== undefined) {
      if (uncappedCashValue > cardCapRule.maxCashback) {
        isCapped = true;
        if (cardCapRule.overflowRule === 'base_rate') {
          const spendToCap = cardCapRule.maxCashback / (effectiveCashbackPercent / 100);
          const overflowSpend = Math.max(0, rewardBasis - spendToCap);
          cashValue = cardCapRule.maxCashback + overflowSpend * (dynamicBasePercent / 100);
        } else {
          // 'zero' rule: no cashback earned beyond cap (e.g. SBI Cashback)
          cashValue = cardCapRule.maxCashback;
        }
        capLossAmount = uncappedCashValue - cashValue;
        capNotice = cardCapRule.notice || `Cashback capped at ₹${cardCapRule.maxCashback.toLocaleString('en-IN')}/month`;
      } else {
        cashValue = uncappedCashValue;
      }
    } else {
      cashValue = uncappedCashValue;
    }
  }

  // Check Brand Velocity / Purchase Limit (e.g. Amazon / Swiggy on GyFTR / SmartBuy)
  let isBrandCapExceeded = false;
  let brandCapLimit = null;
  let brandCapNotice = '';

  if (brand?.id && portal?.id) {
    const brandCap = cardRules?.brandPurchaseCaps?.[brand.id]?.[portal.id];
    if (brandCap && voucherAmount > brandCap) {
      isBrandCapExceeded = true;
      brandCapLimit = brandCap;
      brandCapNotice = `${portal.name} limits ${brand.name || 'this brand'} to ₹${brandCap.toLocaleString('en-IN')}/month per user. Purchase may be split or rejected.`;
    }
  }

  const finalNetCost = netPaid - cashValue;
  const computedTrueNet = ((voucherAmount - finalNetCost) / voucherAmount) * 100;

  return {
    netPaid,
    rpEarned,
    cashValue,
    finalNetCost,
    computedTrueNet,
    multiplier,
    isCapped,
    uncappedCashValue,
    capLossAmount,
    capNotice,
    hasCapRule: !!cardCapRule,
    cardCapNotice: cardCapRule?.notice || '',
    cardCapPeriod: cardCapRule?.period || '',
    isBrandCapExceeded,
    brandCapLimit,
    brandCapNotice
  };
}

/**
 * For either/or portals: compute BOTH legs the cardholder is forced to pick
 * between, then return whichever leaves the lower true cost — that's what a
 * rational user would actually choose at checkout. Also tags which leg won
 * so the UI can be honest about it (e.g. "via Insta Deal" vs "via Accelerated
 * Rewards") rather than presenting one blended number that implies both.
 */
function computeEitherOrMetrics(card, portal, portalConfig, voucherAmount, brand = null) {
  // Discount-only leg: take the Insta Deal, earn zero reward on this
  // transaction — that's the actual choice HDFC presents at checkout.
  const discountOnlyMetrics = (() => {
    const upfrontSavings = voucherAmount * (portal.upfrontDiscountPercent / 100);
    const netPaid = voucherAmount - upfrontSavings;
    const finalNetCost = netPaid; // no reward earned on this leg, by definition
    const computedTrueNet = ((voucherAmount - finalNetCost) / voucherAmount) * 100;
    return {
      netPaid,
      rpEarned: 0,
      cashValue: 0,
      finalNetCost,
      computedTrueNet,
      multiplier: 0,
      isCapped: false,
      uncappedCashValue: 0,
      capLossAmount: 0,
      capNotice: '',
      isBrandCapExceeded: false,
      brandCapLimit: null,
      brandCapNotice: ''
    };
  })();

  const rewardOnlyLeg = computeStackedMetrics(
    card,
    { ...portal, upfrontDiscountPercent: 0 },
    portalConfig,
    voucherAmount,
    brand
  );

  const rewardWins = rewardOnlyLeg.finalNetCost <= discountOnlyMetrics.finalNetCost;
  const winner = rewardWins ? rewardOnlyLeg : discountOnlyMetrics;

  return {
    ...winner,
    hasCapRule: rewardOnlyLeg.hasCapRule,
    cardCapNotice: rewardOnlyLeg.cardCapNotice,
    cardCapPeriod: rewardOnlyLeg.cardCapPeriod,
    eitherOrChoice: rewardWins ? 'reward' : 'discount',
    // Kept for transparency/debugging and for a future UI that shows both
    // legs side by side instead of just the winner.
    eitherOrLegs: { discount: discountOnlyMetrics, reward: rewardOnlyLeg }
  };
}

/**
 * Core Operational Engine - The single source of truth for financial metrics
 */
export function calculateTrueNetMetrics(card, portal, portalConfig, voucherAmount = 1000, brand = null) {
  if (isEitherOrPortal(portal)) {
    return computeEitherOrMetrics(card, portal, portalConfig, voucherAmount, brand);
  }
  return computeStackedMetrics(card, portal, portalConfig, voucherAmount, brand);
}

// ---------------------------------------------------------------------------
// Amount flooring — most portals only sell vouchers in multiples of ₹100.
// ---------------------------------------------------------------------------
// If someone types a non-round amount (e.g. ₹4598), the portal transaction
// itself can only go through for the floored amount (₹4500) — discount and
// card multiplier only apply to that ₹4500. The leftover ₹98 has to be paid
// some other way with zero discount and zero reward on it. This wrapper runs
// the core calc against the floored amount, then folds the un-rewarded
// remainder back into netPaid/finalNetCost so computedTrueNet is measured
// against what the person actually spends in total (₹4598), not just the
// portal-eligible slice — otherwise the headline % overstates the deal.
export function calculateTrueNetMetricsWithFlooring(card, portal, portalConfig, voucherAmount = 1000, brand = null) {
  const flooredAmount = Math.floor(voucherAmount / 100) * 100;
  const extraAmount = voucherAmount - flooredAmount;

  // Amounts under ₹100 can't be meaningfully floored — skip the adjustment.
  if (flooredAmount <= 0) {
    const metrics = calculateTrueNetMetrics(card, portal, portalConfig, voucherAmount, brand);
    return { ...metrics, flooredAmount: voucherAmount, extraAmount: 0 };
  }

  const metrics = calculateTrueNetMetrics(card, portal, portalConfig, flooredAmount, brand);

  if (extraAmount > 0) {
    metrics.netPaid += extraAmount;
    metrics.finalNetCost += extraAmount;
    metrics.computedTrueNet = ((voucherAmount - metrics.finalNetCost) / voucherAmount) * 100;
  }

  metrics.flooredAmount = flooredAmount;
  metrics.extraAmount = extraAmount;
  return metrics;
}
