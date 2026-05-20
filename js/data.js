export const portals = [
  { id: "hdfc_smartbuy", name: "HDFC SmartBuy", group: "smartbuy" },
  { id: "gyftr", name: "Gyftr", group: "gyftr" },
  { id: "shopwise", name: "Amex Shopwise", group: "shopwise" },
  { id: "hdfc_woohoo", name: "HDFC Woohoo", group: "hdfc_woohoo" },
  { id: "woohoo", name: "Woohoo", group: "woohoo" },
  { id: "axis_edgerewards", name: "Edge Rewards", group: "edgerewards" },
  { id: "myntra", name: "Myntra", group: "retailbuy" },
  { id: "nykaa", name: "Nykaa", group: "retailbuy" },
  { id: "reliance_digital", name: "Reliance Digital", group: "retailbuy" },
  { id: "marks_spencer", name: "Marks & Spencer", group: "retailbuy" }
];

// 1. Define Master Arrays
const masterCards = [
  { id: "hdfc_regalia_gold", name: "HDFC Regalia Gold", baseRewardPercent: 2.5, portalMultipliers: { retailbuy: 5, smartbuy: 5, hdfc_woohoo: 5, default: 1 } },
  { id: "sbi_cashback", name: "SBI Cashback", baseRewardPercent: 5.0, portalMultipliers: { default: 1 } },
  { id: "axis_atlas", name: "Axis Atlas", baseRewardPercent: 2.0, portalMultipliers: { direct_flight_hotel: 2.5, axis_edgerewards: 1, default: 1 } },
  { id: "amex_mrcc", name: "Amex MRCC", baseRewardPercent: 2.0, portalMultipliers: { shopwise: 2, default: 1 } },
  { id: "scapia", name: "Scapia", baseRewardPercent: 2.0, portalMultipliers: { default: 1 } },
  { id: "icici_sapphiro", name: "ICICI Sapphiro", baseRewardPercent: 1.0, portalMultipliers: { default: 1 } },
  { id: "hdfc_swiggy", name: "HDFC Swiggy", baseRewardPercent: 1.0, portalMultipliers: { default: 1 } }
];

const masterBrands = [
  { id: "amazon", name: "Amazon", category_name: "Marketplace", portals: [ { portalId: "gyftr", upfrontDiscountPercent: -3 }, { portalId: "hdfc_smartbuy", upfrontDiscountPercent: -4.13 } ] },
  { id: "flipkart", name: "Flipkart", category_name: "Marketplace", portals: [ { portalId: "gyftr", upfrontDiscountPercent: 0.0 }, { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 0.0 } ] },
  { id: "myntra", name: "Myntra", category_name: "Fashion", portals: [ { portalId: "gyftr", upfrontDiscountPercent: 2.0 }, { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 0.0 } ] }
  // Add your other master brands back here...
];

// 2. Load Custom Data from LocalStorage
const customCards = JSON.parse(localStorage.getItem('customCards') || '[]');
const customBrands = JSON.parse(localStorage.getItem('customBrands') || '[]');

// 3. Export the Merged Live Arrays
export const cards = [...masterCards, ...customCards];
export const brands = [...masterBrands, ...customBrands];

// 4. Export Save Functions
export function saveCustomCard(newCard) {
  customCards.push(newCard);
  localStorage.setItem('customCards', JSON.stringify(customCards));
  cards.push(newCard); // Update live memory
}

export function saveCustomBrand(newBrand) {
  customBrands.push(newBrand);
  localStorage.setItem('customBrands', JSON.stringify(customBrands));
  brands.push(newBrand); // Update live memory
}