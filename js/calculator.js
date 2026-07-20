// calculator.js

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

export function getMultiplier(card, portal, portalConfig) {
  return getRewardMultiplier(card, portal, portalConfig);
}

/**
 * Headline reward rate (%) for a card at a given multiplier — independent of
 * voucher amount. This is the "X% back" figure shown in result tables.
 * Single source of truth: previously duplicated in 3 places in app.js.
 */
export function getCardRewardRate(card, multiplier) {
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
  { prefix: 'amex_', portalIds: ['amex_shopwise'] }
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

/**
 * Core Operational Engine - The single source of truth for financial metrics
 */
export function calculateTrueNetMetrics(card, portal, portalConfig, voucherAmount = 1000) {
  // Upfront savings (surcharges pass as negative numbers, e.g., -4.13)
  const upfrontSavings = voucherAmount * (portal.upfrontDiscountPercent / 100);
  const netPaid = voucherAmount - upfrontSavings; // Actual amount debited — unaffected by the fix below.

  const multiplier = getMultiplier(card, portal, portalConfig);

  // Reward basis: on a card's OWN bank portal, a convenience fee is an
  // itemised line the bank can see and excludes from reward calculation.
  // Everywhere else, the bank only sees the total swiped amount, so the fee
  // (if any) stays folded into what earns rewards.
  const feeIsExcludedFromRewards = portal.upfrontDiscountPercent < 0 && isHomePortal(card, portal);
  const rewardBasis = feeIsExcludedFromRewards ? voucherAmount : netPaid;

  let rpEarned = 0;
  let cashValue = 0;

  if (card.rewardType === "points" && card.spendBlock) {
    const completedBlocks = Math.floor(rewardBasis / card.spendBlock);
    const basePoints = completedBlocks * card.pointsPerBlock;
    rpEarned = Math.floor(basePoints * multiplier);
    cashValue = rpEarned * (card.pointValue ?? 1);
  } else {
    // Continuous math for cashback cards using normalized block data
    // This dynamically calculates 5% from (5 / 100) * 100
    const dynamicBasePercent = (card.pointsPerBlock / card.spendBlock) * 100;
    const effectiveCashbackPercent = dynamicBasePercent * multiplier;

    // Calculates exact decimal value without Math.floor truncation
    cashValue = rewardBasis * (effectiveCashbackPercent / 100);
  }

  const finalNetCost = netPaid - cashValue;
  const computedTrueNet = ((voucherAmount - finalNetCost) / voucherAmount) * 100;

  return {
    netPaid,
    rpEarned,
    cashValue,
    finalNetCost,
    computedTrueNet,
    multiplier
  };
}