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

/************************************************************************
 * DOM wiring - Main Elements
 ************************************************************************/
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const resultsSection = document.getElementById("results");
const bestCardBox = document.getElementById("bestCardBox");
const brandSearch = document.getElementById("brandSearch");
const brandSuggestions = document.getElementById("brandSuggestions");
const walletControls = document.getElementById("walletControls");

/************************************************************************
 * Dynamic Wallet UI
 ************************************************************************/
function renderWalletUI() {
  walletControls.innerHTML = ""; 

  const groups = {};
  cards.forEach(card => {
    let bank = "Others";
    if (card.id.startsWith("hdfc_")) bank = "HDFC Bank";
    else if (card.id.startsWith("sbi_")) bank = "SBI Card";
    else if (card.id.startsWith("axis_")) bank = "Axis Bank";
    else if (card.id.startsWith("icici_")) bank = "ICICI Bank";
    else if (card.id.startsWith("amex_")) bank = "American Express";
    else if (card.id.startsWith("hsbc_")) bank = "HSBC Bank";
    else if (card.id.startsWith("custom_")) bank = "Custom Cards";

    if (!groups[bank]) groups[bank] = [];
    groups[bank].push(card);
  });

  for (const [bankName, bankCards] of Object.entries(groups)) {
    const section = document.createElement("div");
    section.className = "mb-4 border-b border-slate-100 pb-2 last:border-0";
    
    let cardsHTML = bankCards.map(card => {
      const isCustom = card.id.startsWith('custom_') ? ' <span class="text-[10px] bg-slate-200 px-1 rounded text-slate-600">Custom</span>' : '';
      return `
        <label class="flex items-center gap-2 text-sm text-slate-700 py-1.5 cursor-pointer hover:text-slate-900">
          <input type="checkbox" data-card-id="${card.id}" class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500">
          <span>${card.name}${isCustom}</span>
        </label>
      `;
    }).join("");

    section.innerHTML = `
      <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 mt-1">${bankName}</p>
      <div class="pl-1">${cardsHTML}</div>
    `;
    walletControls.appendChild(section);
  }

  // Live Recalculation Listener
  document.querySelectorAll('#walletControls input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      if (currentBrandId && !resultsSection.classList.contains("hidden")) {
        handleCalculate();
      }
    });
  });
}

// Initialize wallet immediately on load
renderWalletUI();

/************************************************************************
 * Autocomplete Search Logic
 ************************************************************************/
brandSearch.addEventListener("input", () => {
  const q = brandSearch.value.trim().toLowerCase();
  
  if (!q) {
    brandSuggestions.classList.add("hidden");
    currentBrandId = null; 
    return;
  }

  const matches = brands
    .filter(b => b.name.toLowerCase().includes(q))
    .slice(0, 10);

  if (matches.length === 0) {
    brandSuggestions.classList.add("hidden");
    return;
  }

  brandSuggestions.innerHTML = matches
    .map(b => `<div data-id="${b.id}" class="hover:bg-slate-100 p-2 cursor-pointer border-b last:border-0">${b.name}</div>`)
    .join("");

  brandSuggestions.classList.remove("hidden");
});

brandSuggestions.addEventListener("click", (e) => {
  const target = e.target.closest('div[data-id]');
  if (!target) return;

  const id = target.getAttribute("data-id");
  const brand = brands.find(b => b.id === id);
  if (!brand) return;

  brandSearch.value = brand.name;
  currentBrandId = brand.id;
  brandSuggestions.classList.add("hidden");
});

document.addEventListener('click', (e) => {
  if (!brandSearch.contains(e.target) && !brandSuggestions.contains(e.target)) {
    brandSuggestions.classList.add("hidden");
  }
});

function handleReset() {
  resultsSection.classList.add("hidden");
  bestCardBox.classList.add("hidden");
  document.getElementById("allCardsList").innerHTML = "";

  currentBrandId = null;
  brandSearch.value = "";
  brandSuggestions.classList.add("hidden");

  document.getElementById("resultTitle").textContent = "Result";
  document.getElementById("resultSubtitle").textContent = "";
  document.getElementById("upfrontValue").textContent = "—";
  document.getElementById("rewardValue").textContent = "—";
  document.getElementById("netValue").textContent = "—";
  document.getElementById("explanation").textContent = "";
  document.getElementById("timestamp").textContent = "";
}

resetBtn.addEventListener("click", handleReset);

/**
 * Step 1: Filter card + portal paths and compute true metrics
 */
function getEligibleResults(brand, walletSelectedIds, voucherAmount) {
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
      // Pass the voucherAmount into the math engine
      const metrics = calculateTrueNetMetrics(card, { ...portal, upfrontDiscountPercent: p.upfrontDiscountPercent }, voucherAmount);

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
  const generateGroupHTML = (subset) => subset.map(group => {
    const portalRows = group.entries.map(entry => {
      const activeBrandConfig = activeBrandObj?.portals?.find(p => p.portalId === entry.portal.id);
      const perksText = entry.portalConfig?.perks || activeBrandConfig?.perks || ""; 
      const perksHTML = perksText 
        ? `<div class="inline-block mt-1 bg-emerald-50 text-[10px] text-emerald-700 font-medium px-1.5 py-0.5 rounded border border-emerald-200">${perksText}</div>`
        : "";

      // Universally calculate base percentage safely to prevent NaN crashes
      const dynamicBasePercent = entry.card.spendBlock 
        ? (entry.card.pointsPerBlock / entry.card.spendBlock) * 100 
        : 0;

      const currencyLabel = entry.card.id === "axis_atlas" ? "Miles" : "RP";
      
      const rewardSubLabel = entry.card.rewardType === "points" 
        ? `Reward: ${(dynamicBasePercent * entry.metrics.multiplier).toFixed(2)}% ${currencyLabel} (Value: ${(dynamicBasePercent * entry.metrics.multiplier * entry.card.pointValue).toFixed(2)}%)`
        : `Reward: ${(dynamicBasePercent * entry.metrics.multiplier).toFixed(2)}% Flat Cashback`;

      const exampleMathText = entry.card.rewardType === "points" && entry.card.spendBlock
        ? `Pay ₹${entry.metrics.netPaid.toFixed(2)} upfront. Earn ${entry.metrics.rpEarned} ${currencyLabel} (Worth ₹${entry.metrics.cashValue.toFixed(2)}).`
        : `Pay ₹${entry.metrics.netPaid.toFixed(2)} upfront. Earn ₹${entry.metrics.cashValue.toFixed(2)} Cashback.`;

      return `
        <div class="border-b border-slate-200 py-3 last:border-0">
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

    const disclaimerHTML = group.card.assumption_note
      ? `<div class="text-[11px] italic text-slate-500 mt-3 border-t border-slate-100 pt-2">💡 ${group.card.assumption_note}</div>`
      : `<div class="text-[11px] italic text-slate-500 mt-3 border-t border-slate-100 pt-2">Note: Card yields direct statement cashback credit.</div>`;

    const applyButtonHTML = group.card.applyURL
      ? `<a href="${group.card.applyURL}" target="_blank" rel="noopener noreferrer" class="text-[10px] uppercase font-bold tracking-wider text-blue-600 border border-blue-600 hover:bg-blue-50 px-2 py-0.5 rounded ml-3 transition-colors">Apply Now</a>` 
      : "";

    return `
      <div class="p-3 bg-white border border-slate-200 shadow-sm rounded-md mt-4">
        <div class="font-bold text-slate-800 mb-2 flex items-center">
          ${group.card.name} 
          ${applyButtonHTML}
        </div>
        ${portalRows}
        ${disclaimerHTML}
      </div>
    `;
  }).join("");

  const topTwoGroups = groups.slice(0, 2);
  const remainingGroups = groups.slice(2);

  let finalHTML = generateGroupHTML(topTwoGroups);

  if (remainingGroups.length > 0) {
    finalHTML += `
      <details class="mt-6 group">
        <summary class="cursor-pointer text-sm font-semibold text-slate-700 bg-slate-100 p-3 rounded-md hover:bg-slate-200 transition-colors list-none flex justify-between items-center shadow-sm">
          <span>View ${remainingGroups.length} other eligible cards</span>
          <span class="transform group-open:rotate-180 transition-transform duration-200">▼</span>
        </summary>
        <div class="mt-2 pl-2 border-l-2 border-slate-200">
          ${generateGroupHTML(remainingGroups)}
        </div>
      </details>
    `;
  }

  document.getElementById("allCardsList").innerHTML = finalHTML;
}

function renderResults(groups, brand) {
  const resultsSection = document.getElementById("results");
  const bestCardBox = document.getElementById("bestCardBox");
  
  const best = groups[0].entries[0];
  const runnerUp = groups.length > 1 ? groups[1].entries[0] : null;

  document.getElementById("resultTitle").textContent = brand.name;
  document.getElementById("resultSubtitle").textContent = `${best.card.name} via ${best.portal.name}`;
  document.getElementById("timestamp").textContent = new Date().toLocaleString();

  document.getElementById("upfrontValue").textContent = `${best.upfront.toFixed(2)}%`;
  document.getElementById("rewardValue").textContent = `${best.reward.toFixed(2)}%`;
  document.getElementById("netValue").textContent = `${best.computedTrueNet.toFixed(2)}%`;

  document.getElementById("explanation").textContent =
    `Best combination: ${best.card.name} on ${best.portal.name}. ` +
    `Upfront Discount ${best.upfront.toFixed(2)}% + Card reward ${best.reward.toFixed(2)}% = Net ${best.computedTrueNet.toFixed(2)}%.`;

  const bestUrl = best.portalConfig?.site;
  const runnerUpUrl = runnerUp?.portalConfig?.site;

  let bannersHTML = `
    <div class="winner p-3 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <div class="flex items-center gap-2">
        <span class="text-lg">🥇</span> 
        <span>Best: ${best.card.name} — ${best.computedTrueNet.toFixed(2)}% via ${best.portal.name}</span>
      </div>
      ${bestUrl ? `<a href="${bestUrl}" target="_blank" rel="noopener noreferrer" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded transition-colors whitespace-nowrap shadow-sm text-center">Buy Voucher ↗</a>` : ''}
    </div>
  `;

  if (runnerUp) {
    bannersHTML += `
      <div class="runner-up p-3 rounded-md bg-blue-50 border border-blue-200 text-blue-800 font-medium mt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div class="flex items-center gap-2">
          <span class="text-lg">🥈</span> 
          <span>2nd: ${runnerUp.card.name} — ${runnerUp.computedTrueNet.toFixed(2)}% via ${runnerUp.portal.name}</span>
        </div>
        ${runnerUpUrl ? `<a href="${runnerUpUrl}" target="_blank" rel="noopener noreferrer" class="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded transition-colors whitespace-nowrap shadow-sm text-center">Buy Voucher ↗</a>` : ''}
      </div>
    `;
  }

  bestCardBox.classList.remove("hidden");
  bestCardBox.innerHTML = bannersHTML;

  renderAllCardsList(groups, brand);
  resultsSection.classList.remove("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("bestCardBox").classList.add("hidden");
    document.getElementById("allCardsList").innerHTML = `<div class="p-3 text-sm text-slate-600 mt-4">No cards checked.</div>`;
    return;
  }

  // Extract the custom voucher amount, defaulting to 1000 if empty
  const voucherAmount = parseFloat(document.getElementById("voucherAmount").value) || 1000;

  // Pass the extracted amount into the logic pipeline
  const rawResults = getEligibleResults(brand, walletSelectedIds, voucherAmount);
  if (!rawResults.length) return;

  const sortedGroups = groupAndSortResults(rawResults);
  
  renderResults(sortedGroups, brand);
}

// Bind main operational click handlers cleanly
document.getElementById("calculateBtn").addEventListener("click", handleCalculate);

/************************************************************************
 * Modal & Custom Entry Handlers
 ************************************************************************/
// 1. DOM Element Mapping
const customCardModal = document.getElementById("customCardModal");
const openCardModalBtn = document.getElementById("openCardModalBtn");
const closeCardModalBtn = document.getElementById("closeCardModalBtn");
const saveCardBtn = document.getElementById("saveCardBtn");

const customBrandModal = document.getElementById("customBrandModal");
const openBrandModalBtn = document.getElementById("openBrandModalBtn");
const closeBrandModalBtn = document.getElementById("closeBrandModalBtn");
const saveBrandBtn = document.getElementById("saveBrandBtn");

// 2. Open / Close Event Listeners
openCardModalBtn.addEventListener("click", () => customCardModal.classList.remove("hidden"));
closeCardModalBtn.addEventListener("click", () => customCardModal.classList.add("hidden"));

openBrandModalBtn.addEventListener("click", () => customBrandModal.classList.remove("hidden"));
closeBrandModalBtn.addEventListener("click", () => customBrandModal.classList.add("hidden"));

// 3. Save Custom Card Logic
saveCardBtn.addEventListener("click", () => {
  const id = "custom_" + Date.now();
  const name = document.getElementById("ccName").value.trim() || "Custom Card";
  const rewardType = document.getElementById("ccRewardType").value;
  const pointValue = parseFloat(document.getElementById("ccPointValue").value) || 1;
  const spendBlock = parseFloat(document.getElementById("ccSpendBlock").value) || 100;
  const pointsPerBlock = parseFloat(document.getElementById("ccPointsPerBlock").value) || 1;

  const newCard = {
    id,
    name,
    rewardType,
    pointValue,
    spendBlock,
    pointsPerBlock,
    portalMultipliers: {
      hdfc_smartbuy: parseFloat(document.getElementById("ccSmartbuy").value) || 1,
      gyftr: parseFloat(document.getElementById("ccGyftr").value) || 1,
      icici_ishop: parseFloat(document.getElementById("ccIshop").value) || 1,
      amazon: parseFloat(document.getElementById("ccAmazon").value) || 1,
      axis_edgerewards: parseFloat(document.getElementById("ccEdgerewards").value) || 1,
      shopwise: parseFloat(document.getElementById("ccShopwise").value) || 1,
      default: 1
    },
    assumption_note: "Custom user-defined portfolio card."
  };

  saveCustomCard(newCard); // Pushes to localStorage and live array
  customCardModal.classList.add("hidden");
  
  // Clear the inputs
  document.querySelectorAll('#customCardModal input').forEach(input => input.value = '');
  
  // Re-render the wallet immediately so the user sees their new card
  renderWalletUI();
});

// 4. Save Custom Brand Logic
// 4. Save Custom Brand Logic (Updated for Portal Parity)
saveBrandBtn.addEventListener("click", () => {
  const id = "custom_brand_" + Date.now();
  const name = document.getElementById("cbName").value.trim() || "Custom Brand";
  
  const newBrand = {
    id,
    name,
    category_name: "Custom",
    portals: []
  };

  // Helper function to safely extract discounts and build the array
  const pushPortal = (portalId, inputElementId) => {
    const inputValue = document.getElementById(inputElementId).value;
    newBrand.portals.push({
      portalId: portalId,
      upfrontDiscountPercent: parseFloat(inputValue) || 0, // Defaults to 0 if blank
      site: "",
      perks: ""
    });
  };

  // Map all 6 active calculation portals
  pushPortal("hdfc_smartbuy", "cbSmartbuy");
  pushPortal("gyftr", "cbGyftr");
  pushPortal("icici_ishop", "cbIshop");
  pushPortal("amazon", "cbAmazon");
  pushPortal("axis_edgerewards", "cbEdgerewards");
  pushPortal("shopwise", "cbShopwise");

  saveCustomBrand(newBrand); // Pushes to localStorage and live array
  customBrandModal.classList.add("hidden");
  
  // Clear the inputs
  document.querySelectorAll('#customBrandModal input').forEach(input => input.value = '');
});