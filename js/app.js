import { portals, cards, brands, saveCustomCard, saveCustomBrand } from './data.js';
import { computeNetForCardWithRules } from './calculator.js';

/************************************************************************
 * Application State
 ************************************************************************/
let currentBrandId = null;

/************************************************************************
 * Utility functions
 ************************************************************************/
function findPortal(portalId) {
  return portals.find(p => p.id === portalId) || null;
}

function getWalletSelectedCardIds() {
  const inputs = document.querySelectorAll('#walletControls input[type="checkbox"]');
  const ids = [];
  inputs.forEach(i => {
    if (i.checked) ids.push(i.getAttribute('data-card-id'));
  });
  return ids;
}

function nowTimestamp() {
  return new Date().toLocaleString();
}

/************************************************************************
 * DOM wiring - Main Elements
 ************************************************************************/
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const resultsSection = document.getElementById("results");
const resultTitle = document.getElementById("resultTitle");
const resultSubtitle = document.getElementById("resultSubtitle");
const timestampEl = document.getElementById("timestamp");
const upfrontValueEl = document.getElementById("upfrontValue");
const rewardValueEl = document.getElementById("rewardValue");
const netValueEl = document.getElementById("netValue");
const explanationEl = document.getElementById("explanation");

const brandSearch = document.getElementById("brandSearch");
const brandSuggestions = document.getElementById("brandSuggestions");
const bestCardBox = document.getElementById("bestCardBox");
const walletControls = document.getElementById("walletControls");

/************************************************************************
 * Dynamic Wallet UI
 ************************************************************************/
function renderWalletUI() {
  walletControls.innerHTML = ""; // Clear existing
  cards.forEach(card => {
    const label = document.createElement("label");
    // Add a tiny badge if it's a custom card
    const isCustom = card.id.startsWith('custom_') ? ' <span class="text-[10px] bg-slate-200 px-1 rounded text-slate-600">Custom</span>' : '';
    label.innerHTML = `<input type="checkbox" data-card-id="${card.id}"> ${card.name} ${isCustom}`;
    walletControls.appendChild(label);
  });

  // Attach change listeners to the new checkboxes
  document.querySelectorAll('#walletControls input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      // Auto-recalculate if a brand is actively selected
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
  
  // Optional: Auto-calculate as soon as they select a brand
  // handleCalculate(); 
});

// Close suggestions if clicked outside
document.addEventListener('click', (e) => {
  if (!brandSearch.contains(e.target) && !brandSuggestions.contains(e.target)) {
    brandSuggestions.classList.add("hidden");
  }
});

/************************************************************************
 * Calculation Engine & Results Rendering
 ************************************************************************/
function renderAllCardsList(results) {
  const sorted = [...results].sort((a, b) => b.net - a.net);

  const html = sorted.map(r => `
    <div class="border-b py-2" data-card-id="${r.card.id}">
      <div class="flex justify-between">
        <span class="font-medium">${r.card.name} <span class="text-slate-500">(${r.portal.name})</span></span>
        <span class="font-semibold">${r.net.toFixed(2)}%</span>
      </div>
      <div class="text-xs text-slate-600 mt-1">
        Upfront ${r.upfront.toFixed(2)}% + Card reward ${r.reward.toFixed(2)}% = Net ${r.net.toFixed(2)}%
      </div>
    </div>
  `).join("");

  document.getElementById("allCardsList").innerHTML = `
    <div class="p-3 bg-white border border-slate-200 rounded-md mt-4">
      <p class="font-semibold mb-2">All Cards Comparison</p>
      ${html}
    </div>
  `;
}

function handleCalculate() {
  if (!currentBrandId) {
    alert("Please search and select a brand first.");
    return;
  }

  const brand = brands.find(b => b.id === currentBrandId);
  if (!brand) return;

  const walletSelectedIds = getWalletSelectedCardIds();

  if (!walletSelectedIds.length) {
    resultsSection.classList.remove("hidden");
    bestCardBox.classList.add("hidden");
    document.getElementById("allCardsList").innerHTML = `
      <div class="p-3 bg-white border border-slate-200 rounded-md text-sm text-slate-600 mt-4">
        <p class="font-semibold mb-1">No cards selected in My Wallet</p>
        <p class="text-xs">Please check the cards you own in the My Wallet section to see tailored results.</p>
      </div>
    `;
    resultTitle.textContent = brand.name;
    resultSubtitle.textContent = "";
    timestampEl.textContent = nowTimestamp();
    upfrontValueEl.textContent = "—";
    rewardValueEl.textContent = "—";
    netValueEl.textContent = "—";
    explanationEl.textContent = "";
    return;
  }

  const results = [];

  for (const p of brand.portals) {
    const portal = findPortal(p.portalId);
    if (!portal) continue;
    const upfront = p.upfrontDiscountPercent || 0;

    let allowedCards = [];
    if (p.portalId === "hdfc_smartbuy") {
      // SmartBuy usually restricted to HDFC, plus any custom cards users specify they want to test
      allowedCards = cards.filter(c => c.id.startsWith("hdfc_") || c.id.startsWith("custom_"));
    } else {
      allowedCards = cards;
    }

    allowedCards = allowedCards.filter(c => walletSelectedIds.includes(c.id));
    if (allowedCards.length === 0) continue;

    for (const card of allowedCards) {
      const net = computeNetForCardWithRules(card, portal, brand);

      const reward = (100 - upfront) === 0
        ? 0
        : ((net - upfront) / (100 - upfront)) * 100;

      results.push({
        portal,
        portalId: p.portalId,
        card,
        upfront,
        reward,
        net
      });
    }
  }

  if (results.length === 0) {
    resultsSection.classList.remove("hidden");
    bestCardBox.classList.add("hidden");
    document.getElementById("allCardsList").innerHTML = `
      <div class="p-3 bg-white border border-slate-200 rounded-md text-sm text-slate-600 mt-4">
        <p class="font-semibold mb-1">No matching card + portal combinations</p>
        <p class="text-xs">None of the cards selected in your Wallet are applicable for the portals available for ${brand.name}.</p>
      </div>
    `;
    resultTitle.textContent = brand.name;
    resultSubtitle.textContent = "";
    timestampEl.textContent = nowTimestamp();
    upfrontValueEl.textContent = "—";
    rewardValueEl.textContent = "—";
    netValueEl.textContent = "—";
    explanationEl.textContent = "";
    return;
  }

  results.sort((a, b) => b.net - a.net);
  const best = results[0];

  resultTitle.textContent = `${brand.name}`;
  resultSubtitle.textContent = `${best.card.name} via ${best.portal.name}`;
  timestampEl.textContent = nowTimestamp();

  upfrontValueEl.textContent = `${best.upfront.toFixed(2)}%`;
  rewardValueEl.textContent = `${best.reward.toFixed(2)}%`;
  netValueEl.textContent = `${best.net.toFixed(2)}%`;

  explanationEl.textContent =
    `Best combination: ${best.card.name} on ${best.portal.name}. ` +
    `Upfront ${best.upfront.toFixed(2)}% + Card reward ${best.reward.toFixed(2)}% = Net ${best.net.toFixed(2)}%.`;

  bestCardBox.classList.remove("hidden");
  bestCardBox.innerHTML = `
    <div class="winner p-3 rounded-md bg-green-100 border border-green-400 font-semibold mt-4">
      🏆 Best Card: ${best.card.name} — ${best.net.toFixed(2)}% via ${best.portal.name}
    </div>
  `;

  renderAllCardsList(results);
  resultsSection.classList.remove("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth", block: "center" });
}

function handleReset() {
  resultsSection.classList.add("hidden");
  bestCardBox.classList.add("hidden");
  document.getElementById("allCardsList").innerHTML = "";

  currentBrandId = null;
  brandSearch.value = "";
  brandSuggestions.classList.add("hidden");

  resultTitle.textContent = "Result";
  resultSubtitle.textContent = "";
  upfrontValueEl.textContent = "—";
  rewardValueEl.textContent = "—";
  netValueEl.textContent = "—";
  explanationEl.textContent = "";
  timestampEl.textContent = "";
}

calculateBtn.addEventListener("click", handleCalculate);
resetBtn.addEventListener("click", handleReset);

/************************************************************************
 * Modal Handling (Add Custom Card & Brand)
 ************************************************************************/
const customCardModal = document.getElementById("customCardModal");
const customBrandModal = document.getElementById("customBrandModal");

// --- Card Modal ---
document.getElementById("openCardModalBtn").addEventListener("click", () => customCardModal.classList.remove("hidden"));
document.getElementById("closeCardModalBtn").addEventListener("click", () => {
  customCardModal.classList.add("hidden");
  document.getElementById("ccName").value = "";
  document.getElementById("ccBase").value = "";
  document.getElementById("ccSmartbuy").value = "";
  document.getElementById("ccGyftr").value = "";
});

document.getElementById("saveCardBtn").addEventListener("click", () => {
  const name = document.getElementById("ccName").value.trim();
  const base = parseFloat(document.getElementById("ccBase").value) || 0;
  const sbMult = parseFloat(document.getElementById("ccSmartbuy").value) || 1;
  const gyftrMult = parseFloat(document.getElementById("ccGyftr").value) || 1;

  if (!name) return alert("Card Name is required.");

  const newCard = {
    id: "custom_card_" + Date.now(),
    name: name,
    baseRewardPercent: base,
    portalMultipliers: {
      smartbuy: sbMult,
      gyftr: gyftrMult,
      default: 1
    }
  };

  saveCustomCard(newCard);
  renderWalletUI(); // Refresh checkboxes
  
  // Auto-check the newly added card
  const newCheckbox = document.querySelector(`input[data-card-id="${newCard.id}"]`);
  if (newCheckbox) newCheckbox.checked = true;

  customCardModal.classList.add("hidden");
  
  // Clear inputs
  document.getElementById("ccName").value = "";
  document.getElementById("ccBase").value = "";
  document.getElementById("ccSmartbuy").value = "";
  document.getElementById("ccGyftr").value = "";

  // Auto-recalc if a brand is selected
  if (currentBrandId && !resultsSection.classList.contains("hidden")) {
    handleCalculate();
  }
});

// --- Brand Modal ---
document.getElementById("openBrandModalBtn").addEventListener("click", () => customBrandModal.classList.remove("hidden"));
document.getElementById("closeBrandModalBtn").addEventListener("click", () => {
  customBrandModal.classList.add("hidden");
  document.getElementById("cbName").value = "";
  document.getElementById("cbGyftr").value = "";
  document.getElementById("cbSmartbuy").value = "";
});

document.getElementById("saveBrandBtn").addEventListener("click", () => {
  const name = document.getElementById("cbName").value.trim();
  const gyftrDisc = parseFloat(document.getElementById("cbGyftr").value) || 0;
  const sbDisc = parseFloat(document.getElementById("cbSmartbuy").value) || 0;

  if (!name) return alert("Brand Name is required.");

  const newBrand = {
    id: "custom_brand_" + Date.now(),
    name: name,
    category_name: "Custom",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: gyftrDisc },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: sbDisc }
    ]
  };

  saveCustomBrand(newBrand);
  customBrandModal.classList.add("hidden");
  
  // Clear inputs
  document.getElementById("cbName").value = "";
  document.getElementById("cbGyftr").value = "";
  document.getElementById("cbSmartbuy").value = "";
  
  // Set the search bar to the new brand and calculate instantly
  brandSearch.value = newBrand.name;
  currentBrandId = newBrand.id;
  handleCalculate();
});