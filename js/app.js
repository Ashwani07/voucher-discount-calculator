import { portals, cards, brands, saveCustomCard, saveCustomBrand } from './data.js';
import { calculateTrueNetMetrics } from './calculator.js';

let currentBrandId = null;

/************************************************************************
 * Modular Data Processors (Pure Logic, No DOM) - Fixes #5
 ************************************************************************/

function findPortal(portalId) {
  return portals.find(p => p.id === portalId) || null;
}

function getWalletSelectedCardIds() {
  const inputs = document.querySelectorAll('#walletControls input[type="checkbox"]');
  return Array.from(inputs).filter(i => i.checked).map(i => i.getAttribute('data-card-id'));
}

/**
 * Step 1: Filter card + portal paths and compute true metrics
 */
function getEligibleResults(brand, walletSelectedIds) {
  const results = [];

  for (const p of brand.portals) {
    const portal = findPortal(p.portalId);
    if (!portal) continue;

    let allowedCards = [];
    if (p.portalId === "hdfc_smartbuy") {
      allowedCards = cards.filter(c => c.id.startsWith("hdfc_") || c.id.startsWith("custom_"));
    } else if (p.portalId === "shopwise") {
      allowedCards = cards.filter(c => c.id.startsWith("amex_") || c.id.startsWith("custom_"));
    } else if (p.portalId === "axis_edgerewards") {
      allowedCards = cards.filter(c => c.id.startsWith("axis_") || c.id.startsWith("custom_"));
    } else {
      allowedCards = cards;
    }

    allowedCards = allowedCards.filter(c => walletSelectedIds.includes(c.id));

    for (const card of allowedCards) {
      // Single calculation pipe - Fixes #4
      const metrics = calculateTrueNetMetrics(card, { ...portal, upfrontDiscountPercent: p.upfrontDiscountPercent });

      results.push({
        portal,
        portalId: p.portalId,
        card,
        upfront: p.upfrontDiscountPercent || 0,
        reward: metrics.computedTrueNet - (p.upfrontDiscountPercent || 0),
        net: metrics.computedTrueNet, 
        computedTrueNet: metrics.computedTrueNet,
        metrics,
        portalConfig: p
      });
    }
  }
  return results;
}

/**
 * Step 2: Group and sort array configurations
 */
function groupAndSortResults(results) {
  const groupedByCard = results.reduce((groups, result) => {
    const cardId = result.card.id;
    if (!groups[cardId]) {
      groups[cardId] = { card: result.card, entries: [] };
    }
    groups[cardId].entries.push(result);
    return groups;
  }, {});

  const groups = Object.values(groupedByCard).map(group => {
    group.entries.sort((a, b) => b.computedTrueNet - a.computedTrueNet);
    group.bestNet = group.entries[0].computedTrueNet;
    return group;
  });

  groups.sort((a, b) => b.bestNet - a.bestNet);
  return groups;
}

/************************************************************************
 * UI Render Engines (Pure DOM, No Logic) - Fixes #5
 ************************************************************************/

function renderAllCardsList(groups, activeBrandObj) {
  const html = groups.map(group => {
    const portalRows = group.entries.map(entry => {
      const activeBrandConfig = activeBrandObj?.portals?.find(p => p.portalId === entry.portal.id);
      const perksText = entry.portalConfig?.perks || activeBrandConfig?.perks || ""; 
      const perksHTML = perksText 
        ? `<div class="inline-block mt-1 bg-emerald-50 text-[10px] text-emerald-700 font-medium px-1.5 py-0.5 rounded border border-emerald-200">${perksText}</div>`
        : "";

      const currencyLabel = entry.card.id === "axis_atlas" ? "Miles" : "RP";
      const rewardSubLabel = entry.card.rewardType === "points" 
        ? `Reward: ${(entry.card.baseRewardPercent * entry.metrics.multiplier).toFixed(2)}% ${currencyLabel} (Value: ${(entry.card.baseRewardPercent * entry.metrics.multiplier * entry.card.pointValue).toFixed(2)}%)`
        : `Reward: ${(entry.card.baseRewardPercent * entry.metrics.multiplier).toFixed(2)}% Flat Cashback`;

      const exampleMathText = entry.card.rewardType === "points" && entry.card.spendBlock
        ? `Pay ₹${entry.metrics.netPaid.toFixed(2)} upfront. Earn ${entry.metrics.rpEarned} ${currencyLabel} (Worth ₹${entry.metrics.cashValue.toFixed(2)}).`
        : `Pay ₹${entry.metrics.netPaid.toFixed(2)} upfront. Earn ₹${entry.metrics.cashValue.toFixed(2)} Cashback.`;

      return `
        <div class="border-b border-slate-200 py-3">
          <div class="flex justify-between items-center gap-3">
            <div>
              <div class="font-medium">${entry.portal.name}</div>
              <div class="text-xs text-slate-600 mt-1">${rewardSubLabel}</div>
              ${perksHTML} 
            </div>
            <div class="text-sm font-semibold text-emerald-600">Net: ${entry.computedTrueNet.toFixed(2)}%</div>
          </div>
          <div class="text-xs text-slate-500 mt-2 bg-slate-50 p-2 rounded-md">
            Example on ₹1,000: ${exampleMathText} Net Cost: ₹${entry.metrics.finalNetCost.toFixed(2)}.
          </div>
        </div>
      `;
    }).join("");

    const disclaimerHTML = group.card.rewardType === "points"
      ? `<div class="text-[11px] italic text-slate-500 mt-3">Note: Calculation assumes 1 ${group.card.id === "axis_atlas" ? "Edge Mile" : "Reward Point"} = ₹${(group.card.pointValue ?? 1).toFixed(2)}</div>`
      : `<div class="text-[11px] italic text-slate-500 mt-3">Note: Card yields direct statement cashback credit.</div>`;

    return `
      <div class="p-3 bg-white border border-slate-200 rounded-md mt-4">
        <div class="font-semibold mb-3">${group.card.name}</div>
        ${portalRows}
        ${disclaimerHTML}
      </div>
    `;
  }).join("");

  document.getElementById("allCardsList").innerHTML = html;
}

function renderResults(groups, brand) {
  const resultsSection = document.getElementById("results");
  const bestCardBox = document.getElementById("bestCardBox");
  
  const best = groups[0].entries[0];

  document.getElementById("resultTitle").textContent = brand.name;
  document.getElementById("resultSubtitle").textContent = `${best.card.name} via ${best.portal.name}`;
  document.getElementById("timestamp").textContent = new Date().toLocaleString();

  document.getElementById("upfrontValue").textContent = `${best.upfront.toFixed(2)}%`;
  document.getElementById("rewardValue").textContent = `${best.reward.toFixed(2)}%`;
  document.getElementById("netValue").textContent = `${best.computedTrueNet.toFixed(2)}%`;

  document.getElementById("explanation").textContent =
    `Best combination: ${best.card.name} on ${best.portal.name}. ` +
    `Upfront ${best.upfront.toFixed(2)}% + Card reward ${best.reward.toFixed(2)}% = Net ${best.computedTrueNet.toFixed(2)}%.`;

  bestCardBox.classList.remove("hidden");
  bestCardBox.innerHTML = `
    <div class="winner p-3 rounded-md bg-green-100 border border-green-400 font-semibold mt-4">
      🏆 Best Card: ${best.card.name} — ${best.computedTrueNet.toFixed(2)}% via ${best.portal.name}
    </div>
  `;

  renderAllCardsList(groups, brand);
  resultsSection.classList.remove("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth", block: "center" });
}

/************************************************************************
 * Orchestrator Handler
 ************************************************************************/
function handleCalculate() {
  if (!currentBrandId) return alert("Please search and select a brand first.");

  const brand = brands.find(b => b.id === currentBrandId);
  if (!brand) return;

  const walletSelectedIds = getWalletSelectedCardIds();
  if (!walletSelectedIds.length) {
    // Graceful rendering code for unselected state
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("bestCardBox").classList.add("hidden");
    document.getElementById("allCardsList").innerHTML = `<div class="p-3 text-sm text-slate-600 mt-4">No cards checked.</div>`;
    return;
  }

  // Pure logic pipes executed sequentially
  const rawResults = getEligibleResults(brand, walletSelectedIds);
  if (!rawResults.length) return;

  const sortedGroups = groupAndSortResults(rawResults);
  
  // Hand off directly to the rendering module
  renderResults(sortedGroups, brand);
}

/************************************************************************
 * Storage Hardening Module - Fixes #7
 ************************************************************************/
export function safeSaveCustomCard(customCards) {
  try {
    localStorage.setItem('customCards', JSON.stringify(customCards));
  } catch (error) {
    console.error("Storage update failed:", error);
    alert("Could not sync profile preferences. Storage may be restricted or full.");
  }
}

// Bind main operational click handlers cleanly
document.getElementById("calculateBtn").addEventListener("click", handleCalculate);