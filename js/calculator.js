// calculator.js

/**
 * Extracts the correct multiplier for a card/portal path
 */
export function getMultiplier(card, portal, portalConfig) {
  if (portalConfig?.overrideRewardMultiplier !== undefined) {
    return portalConfig.overrideRewardMultiplier;
  }
  return card.portalMultipliers?.[portal.id] ?? 
         card.portalMultipliers?.[portal.group] ?? 
         card.portalMultipliers?.default ?? 1;
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

/**
 * Core Operational Engine - The single source of truth for financial metrics
 */
export function calculateTrueNetMetrics(card, portal, portalConfig, voucherAmount = 1000) {
  // Upfront savings (surcharges pass as negative numbers, e.g., -4.13)
  const upfrontSavings = voucherAmount * (portal.upfrontDiscountPercent / 100);
  const netPaid = voucherAmount - upfrontSavings;
  
  const multiplier = getMultiplier(card, portal, portalConfig);
  let rpEarned = 0;
  let cashValue = 0;

  if (card.rewardType === "points" && card.spendBlock) {
    const completedBlocks = Math.floor(netPaid / card.spendBlock);
    const basePoints = completedBlocks * card.pointsPerBlock;
    rpEarned = Math.floor(basePoints * multiplier);
    cashValue = rpEarned * (card.pointValue ?? 1);
  } else {
    // Continuous math for cashback cards using normalized block data
    // This dynamically calculates 5% from (5 / 100) * 100
    const dynamicBasePercent = (card.pointsPerBlock / card.spendBlock) * 100;
    const effectiveCashbackPercent = dynamicBasePercent * multiplier;
    
    // Calculates exact decimal value without Math.floor truncation
    cashValue = netPaid * (effectiveCashbackPercent / 100);
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