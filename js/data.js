export const portals = [
  { id: "hdfc_smartbuy", name: "HDFC SmartBuy", group: "smartbuy" },
  { id: "hdfc_woohoo", name: "HDFC Woohoo", group: "smartbuy" },
  { id: "axis_edgerewards", name: "Axis EdgeRewards", group: "axis_edgerewards" },
  { id: "axis_grabdeals", name: "Axis GrabDeals Woohoo", group: "axis_grabdeals" },
  { id: "shopwise", name: "Amex Shopwise", group: "shopwise" },
  { id: "gyftr", name: "Gyftr", group: "gyftr" },
  { id: "woohoo", name: "Woohoo", group: "woohoo" },
  { id: "myntra", name: "Myntra", group: "retailbuy" },
  { id: "nykaa", name: "Nykaa", group: "retailbuy" },
  { id: "reliance_digital", name: "Reliance Digital", group: "retailbuy" },
  { id: "marks_spencer", name: "Marks & Spencer", group: "retailbuy" }
  // park+
  // magicpin
  // cred
];

// 1. Define Master Arrays
const masterCards = [
  { 
    id: "hdfc_regalia_gold", 
    name: "HDFC Regalia Gold", 
    baseRewardPercent: (5/200)*100, // Raw point earning rate
    pointValue: 0.50,         // 1 point = 50 paise (Travel)
    portalMultipliers: { retailbuy: 5, smartbuy: 5, default: 1 } 
  },
  { 
    id: "axis_atlas", 
    name: "Axis Atlas", 
    baseRewardPercent: (2/100)*100, // Base edge miles
    pointValue: 1.0,         // 1 Edge Mile = ₹1.00 (Partner transfer value)
    portalMultipliers: { direct_flight_hotel: 2.5, axis_edgerewards: 1, default: 1 } 
  },
  { 
    id: "amex_mrcc", 
    name: "Amex MRCC", 
    baseRewardPercent: (1/50)*100,
    pointValue: 0.33,        // 24K points → ₹9,000 voucher
    portalMultipliers: { shopwise: 2, default: 1 } 
  },
  { 
    id: "sbi_cashback", 
    name: "SBI Cashback", 
    baseRewardPercent: 5.0,
    pointValue: 1.0,         // Pure cashback 1:1
    portalMultipliers: { default: 1 } 
  },
  { 
    id: "hdfc_swiggy", 
    name: "HDFC Swiggy", 
    baseRewardPercent: 1.0,
    pointValue: 1.0,         // Pure cashback 1:1
    portalMultipliers: { smartbuy: 5, default: 1 } 
  },
  { 
    id: "scapia", 
    name: "Scapia", 
    baseRewardPercent: 10.0,
    pointValue: 0.20,         // Pure cashback 5:1
    portalMultipliers: { default: 1 } 
  },
  { 
    id: "icici_sapphiro", 
    name: "ICICI Sapphiro", 
    baseRewardPercent: (2/100)*100, 
    pointValue: 0.25,         // 1 Reward point = Rs 0.25
    portalMultipliers: { default: 1 } 
  }
  
];

const masterBrands = [
  { id: "amazon", 
    name: "Amazon", 
    category_name: "Marketplace", 
    portals: [ 
      { portalId: "gyftr", upfrontDiscountPercent: -3, site: "https://www.gyftr.com/amazon" }, 
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: -4.13, site: "https://www.gyftr.com/instantvouchers/amazon-gift-vouchers" },
      { portalId: "shopwise", upfrontDiscountPercent: -1.77, site: "https://shopwise.giftstacc.com/giftcard?productId=gko2OEEac6Y24dmH%2FbBa7g%3D%3D" }
    ] 
  },
  { id: "amazon_fresh", 
    name: "Amazon Fresh", 
    category_name: "Grocery", 
    portals: [ 
      { portalId: "gyftr", upfrontDiscountPercent: 0, site: "https://www.gyftr.com/amazon-fresh" }, 
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 0, site: "https://www.gyftr.com/instantvouchers/amazon-fresh-gift-vouchers" } 
    ] 
  },
  { id: "amazon_shopping_voucher", 
    name: "Amazon Shopping Voucher", 
    category_name: "Marketplace", 
    portals: [ 
      { portalId: "gyftr", upfrontDiscountPercent: -3, site: "https://www.gyftr.com/amazon-shopping-voucher" }, 
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: -4.13, site: "https://www.gyftr.com/instantvouchers/amazon-shopping-voucher-gift-vouchers" } 
    ] 
  },
  {
    id: "flipkart",
    name: "Flipkart",
    category_name: "Marketplace",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 0.0, site: "https://www.gyftr.com/flipkart" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 0.0, site: "https://www.gyftr.com/instantvouchers/flipkart-gift-vouchers" }
    ]
  },
  {
    id: "swiggy",
    name: "Swiggy",
    category_name: "Food & Beverage",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 6.0, site: "https://www.gyftr.com/swiggy" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 5.0, site: "https://www.gyftr.com/instantvouchers/swiggy-gift-vouchers" }
    ]
  },
  {
    id: "zomato",
    name: "Zomato",
    category_name: "Food & Beverage",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 1.0, site: "https://www.gyftr.com/zomato" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 0.0, site: "https://www.gyftr.com/instantvouchers/zomato-gift-vouchers" },
      { portalId: "woohoo", upfrontDiscountPercent: 0.0, site: "https://www.woohoo.in/zomato-egift-card" }
    ]
  },
  {
    id: "bigbasket ",
    name: "BigBasket",
    category_name: "Quick Commerce",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 10.0, site: "https://www.gyftr.com/bigbasket" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 5.0, site: "https://www.gyftr.com/instantvouchers/bigbasket-gift-vouchers" }
    ]
  },
  {
    id: "zepto",
    name: "Zepto",
    category_name: "Quick Commerce",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 3.0, site: "https://www.gyftr.com/zepto" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 0.0, site: "https://www.gyftr.com/instantvouchers/zepto-gift-vouchers" }
    ]
  },
  
  {
    id: "blinkit",
    name: "Blinkit",
    category_name: "Quick Commerce",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 18.0, site: "https://www.gyftr.com/blinkit" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 12.5, site: "https://www.gyftr.com/instantvouchers/blinkit-gift-vouchers" }
    ]
  },
  {
    id: "myntra",
    name: "Myntra",
    category_name: "Fashion",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 2.0, site: "https://www.gyftr.com/myntra" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 0.0, site: "https://www.gyftr.com/instantvouchers/myntra-gift-vouchers" }
    ]
  },
  {
    id: "nykaa",
    name: "Nykaa",
    category_name: "Beauty",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 4.5, site: "https://www.gyftr.com/nykaa" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 0.0, site: "https://www.gyftr.com/instantvouchers/nykaa-gift-vouchers" }
    ]
  },
  {
    id: "makemytrip",
    name: "MakeMyTrip (MMT)",
    category_name: "Travel & Entertainment",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 10.0, site: "https://www.gyftr.com/makemytrip" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 5.0, site: "https://www.gyftr.com/instantvouchers/makemytrip-gift-vouchers" }
    ]
  },
  {
    id: "bookmyshow",
    name: "BookMyShow",
    category_name: "Travel & Entertainment",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 12.0, site: "https://www.gyftr.com/bookmyshow" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 5.0, site: "https://www.gyftr.com/instantvouchers/bookmyshow-gift-vouchers" }
    ]
  },
  {
    id: "croma",
    name: "Croma",
    category_name: "Electronics",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 1.0, site: "https://www.gyftr.com/croma" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 0.0, site: "https://www.gyftr.com/instantvouchers/croma-gift-vouchers" }
    ]
  },
  {
    id: "reliance_digital",
    name: "Reliance Digital",
    category_name: "Electronics",
    portals: [
      { portalId: "gyftr", upfrontDiscountPercent: 8.0, site: "https://www.gyftr.com/reliance-digital" },
      { portalId: "hdfc_smartbuy", upfrontDiscountPercent: 5.0, site: "https://www.gyftr.com/instantvouchers/reliance-digital-gift-vouchers" }
    ]
  }
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