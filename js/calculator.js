export function getMultiplierForCard(card, portal) {
  if (!card || !portal) return 1;
  const pm = card.portalMultipliers || {};
  return pm[portal.group] ?? pm[portal.id] ?? pm.default ?? 1;
}

export function getRewardPercent(card, portal) {
  const multiplier = getMultiplierForCard(card, portal);
  return card.baseRewardPercent * multiplier;
}

export function computeNetEffectiveDiscount(upfrontPercent, rewardPercent) {
  const upfront = (upfrontPercent || 0) / 100;
  const reward = (rewardPercent || 0) / 100;
  const net = upfront + (1 - upfront) * reward;
  return net * 100;
}

export function computeNetForCardWithRules(card, portal, brand) {
  let reward = getRewardPercent(card, portal);

  // SBI Cashback × Gyftr rule
  if (portal && card.id === "sbi_cashback" && portal.id === "gyftr") {
    const portalSpecificReward =
      card.portalMultipliers?.[portal.id] ??
      card.portalMultipliers?.[portal.group] ??
      0;

    reward = portalSpecificReward;
  }

  // Get upfront discount from brand portal entry
  const portalEntry = brand.portals.find(p => p.portalId === portal.id) || {};
  const upfront = portalEntry.upfrontDiscountPercent || 0;

  return computeNetEffectiveDiscount(upfront, reward);
}