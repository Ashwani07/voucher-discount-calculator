export const portals = [
  { id: "hdfc_smartbuy", name: "HDFC SmartBuy", group: "smartbuy" },
  { id: "hdfc_woohoo", name: "HDFC Woohoo", group: "smartbuy" },
  { id: "axis_edgerewards", name: "Axis EdgeRewards", group: "axis_portal" },
  { id: "axis_grabdeals", name: "Axis GrabDeals Woohoo", group: "axis_portal" },
  { id: "shopwise", name: "Amex Shopwise", group: "shopwise" },
  { id: "icici_ishop", name: "ICICI iShop", group: "ishop" },
  { id: "gyftr", name: "Gyftr", group: "gyftr" },
  { id: "amazon", name: "Amazon", group: "amazon" },
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
// https://offers.smartbuy.hdfc.bank.in/v2/accelerated-earn-rules
// https://www.ishoprewards.com/shopping-vouchers
const masterCards = [
  {
    id: "hdfc_infinia",
    name: "HDFC Infinia",
    baseRewardPercent: 3.3,
    pointValue: 1.0,         // 1 point = ₹1.00 (Travel)
    rewardType: "points",
    spendBlock: 150,
    pointsPerBlock: 5,   // 5 points per ₹150 spent
    portalMultipliers: { smartbuy: 5, default: 1 }
  },
  {
    id: "hdfc_dbm",
    name: "HDFC Diners Black Metal",
    baseRewardPercent: 3.3,
    pointValue: 1.0,         // 1 point = ₹1.00 (Travel)
    rewardType: "points",
    spendBlock: 150,
    pointsPerBlock: 5,   // 5 points per ₹150 spent
    portalMultipliers: { smartbuy: 3, default: 1 }
  },
  { 
    id: "hdfc_regalia_gold", 
    name: "HDFC Regalia Gold", 
    baseRewardPercent: 2.5, // Raw point earning rate
    pointValue: 0.50,         // 1 point = 50 paise (Travel)
    rewardType: "points",
    spendBlock: 200,      
    pointsPerBlock: 5,    // 5 points per ₹200 spent
    portalMultipliers: { retailbuy: 5, smartbuy: 5, default: 1 } 
  },
  { 
    id: "hdfc_swiggy", 
    name: "HDFC Swiggy", 
    baseRewardPercent: 1.0,
    pointValue: 1.0,         // Pure cashback 1:1
    rewardType: "cashback", // Bypasses block math entirely
    portalMultipliers: { smartbuy: 5, default: 1 } 
  },
  {
    id: "axis_magnus", 
    name: "Axis Magnus", 
    baseRewardPercent: 2.0,  // Base edge miles
    pointValue: 2.0,         // 5 Edge Rewards = ₹2.00 (Partner miles)
    rewardType: "points",
    spendBlock: 200,      
    pointsPerBlock: 12,  // 35 points per ₹200 spent on above Rs 1.5 lakhs
    portalMultipliers: {  axis_edgerewards: 1, default: 1 } 
  },
  {
    id: "axis_magnus_burgundy", 
    name: "Axis Magnus Burgundy", 
    baseRewardPercent: 2.0,  // Base edge miles
    pointValue: 4.0,         // 5 Edge Rewards = ₹4.00 (Partner miles)
    rewardType: "points",
    spendBlock: 200,      
    pointsPerBlock: 12,  // 35 points per ₹200 spent on above Rs 1.5 lakhs
    portalMultipliers: { axis_edgerewards: 1, default: 1 } 
  },
  { 
    id: "axis_atlas", 
    name: "Axis Atlas", 
    baseRewardPercent: 2.0,  // Base edge miles
    pointValue: 2.0,         // 1 Edge Mile = ₹2.00 (Partner transfer value)
    rewardType: "points",
    spendBlock: 100,      
    pointsPerBlock: 2,  // 2 points per ₹100 spent
    portalMultipliers: { axis_edgerewards: 1, default: 1 } 
  },
  { 
    id: "axis_horizon", 
    name: "Axis Horizon", 
    baseRewardPercent: 2.0,  // Base edge miles
    pointValue: 1.0,         // 1 Edge Mile = ₹1.00 (Partner transfer value)
    rewardType: "points",
    spendBlock: 100,      
    pointsPerBlock: 2,  // 2 points per ₹100 spent
    portalMultipliers: { axis_edgerewards: 1, default: 1 } 
  },
  { 
    id: "amex_mrcc", 
    name: "Amex MRCC", 
    baseRewardPercent: 2.0,
    pointValue: 0.33,        // 24K points → ₹9,000 voucher
    rewardType: "points",
    spendBlock: 50,
    pointsPerBlock: 1,    // 1 point per ₹50 spent
    portalMultipliers: { shopwise: 2, default: 1 } 
  },
  {
    id: "icici_epm",
    name: "ICICI Emeralde Private Metal",
    rewardType: "points",
    baseRewardPercent: 3.0,  // 6 points per ₹200
    pointValue: 1.0,         // Assuming maximum value travel redemption
    spendBlock: 200,
    pointsPerBlock: 6,
    portalMultipliers: {
      ishop: 6,              // 
      gyftr: 1,
      default: 1
    }
  },
  {
    id: "icici_times",
    name: "ICICI Times Black",
    rewardType: "points",
    baseRewardPercent: 2.0,  // 1 point per ₹50
    pointValue: 1.0,         // Assuming maximum value travel redemption
    spendBlock: 50,
    pointsPerBlock: 1,
    portalMultipliers: {
      ishop: 6,              // 
      gyftr: 1,
      default: 1
    }
  },
  { 
    id: "icici_emeralde", 
    name: "ICICI Emeralde", 
    baseRewardPercent: 4.0,  // 4 points per ₹100
    pointValue: 0.25,         // Assuming maximum value travel redemption
    rewardType: "points",
    spendBlock: 100,
    pointsPerBlock: 4,
    portalMultipliers: { "ishop": 6, "default": 1 }
  },
  { 
    id: "icici_others", 
    name: "ICICI Others",     // Coral/CSK/HPCL/ManU/Parakram/Rubyx/Sapphiro
    baseRewardPercent: 2.0,  // 2 points per ₹100
    pointValue: 0.25,         // Assuming maximum value travel redemption
    rewardType: "points",
    spendBlock: 100,
    pointsPerBlock: 2,
    portalMultipliers: { "ishop": 6, "default": 1 }
  },
  { 
    id: "icici_cobranded", 
    name: "ICICI Co-branded",     // Amazon/Adani/Emirates/MMT
    baseRewardPercent: 1.0,     // 2 points per ₹100
    pointValue: 1.0,         // Assuming maximum value travel redemption
    rewardType: "cashback",
    portalMultipliers: { "ishop": 4, "default": 1 }
  },
  { 
    id: "sbi_cashback", 
    name: "SBI Cashback", 
    baseRewardPercent: 5.0,
    pointValue: 1.0,         // Pure cashback 1:1
    rewardType: "cashback", // Bypasses block math entirely
    portalMultipliers: { gyftr: 0, amazon: 1, default: 1 } 
  },
  
  { 
    id: "scapia", 
    name: "Scapia", 
    baseRewardPercent: 10.0,
    pointValue: 0.20,         // Pure cashback 5:1
    rewardType: "points",
    spendBlock: 20,
    pointsPerBlock: 2,    // 2 points per ₹20 spent
    portalMultipliers: { default: 1 } 
  }
];

const masterBrands = [
  {
    "id": "amazon_fresh",
    "name": "Amazon Fresh",
    "category_name": "Grocery",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/amazon-fresh-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=5K1Kd9UyhjRT8zEr0xD3pQ%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/edgerewards/amazon-fresh-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://amzn.in/d/0ahQ9UUj",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/amazon-fresh",
        "perks": ""
      }
    ]
  },
  {
    "id": "amazon",
    "name": "Amazon Pay",
    "category_name": "E-Commerce",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": -4.13,
        "site": "https://www.gyftr.com/instantvouchers/amazon-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=gko2OEEac6Y24dmH%2FbBa7g%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/edgerewards/amazon-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://amzn.in/d/08wUhb9W",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://www.gyftr.com/amazon",
        "perks": ""
      }
    ]
  },
  {
    "id": "amazon_shopping",
    "name": "Amazon Shopping",
    "category_name": "E-Commerce",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": -4.13,
        "site": "https://www.gyftr.com/instantvouchers/amazon-shopping-voucher-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=lfBrrZnTO4VXQS036BhJrQ%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/edgerewards/amazon-shopping-voucher-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://amzn.in/d/01fWZQZW",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://www.gyftr.com/amazon-shopping-voucher",
        "perks": ""
      }
    ]
  },
  {
    "id": "bath_&_body_works",
    "name": "Bath & Body Works",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.gyftr.com/instantvouchers/bath-body-works-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=66bESZOf67l7aLYQCk29%2BA%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14,
        "site": "https://www.gyftr.com/edgerewards/amazon-fresh-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://amzn.in/d/026jKTYO",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://www.gyftr.com/bath-&-body-works",
        "perks": ""
      }
    ]
  },
  {
    "id": "bigbasket",
    "name": "Bigbasket",
    "category_name": "Grocery",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/bigbasket-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=AiPkXVCcpkH%2Fbu4vFXXWaw%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/edgerewards/bigbasket-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://amzn.in/d/02QYv372",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://www.gyftr.com/bigbasket",
        "perks": ""
      }
    ]
  },
  {
    "id": "flipkart",
    "name": "Flipkart",
    "category_name": "E-Commerce",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/bigbasket-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=Q8odsCgNCDraL5hFw%2FI0AA%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/edgerewards/amazon-fresh-gift-vouchers",
        "perks": "Earns 1.5% GyFTR Coins"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/flipkart",
        "perks": ""
      }
    ]
  },
  {
    "id": "igp",
    "name": "IGP",
    "category_name": "E-Commerce",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://www.gyftr.com/instantvouchers/igp-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7.4,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=K21FJ7Jh1CAIUNOdDy%2Fwcg%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15,
        "site": "https://www.gyftr.com/edgerewards/igp-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://www.gyftr.com/igp",
        "perks": ""
      }
    ]
  },
  {
    "id": "lifestyle_offline",
    "name": "Lifestyle Offline",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/lifestyle-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.3,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=Gip7w8GFjPeq6Vg%2FtLrqIA%3D%3D",
        "perks": ""
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://amzn.in/d/0iRzULm2",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://www.gyftr.com/lifestyle",
        "perks": ""
      }
    ]
  },
  {
    "id": "lifestyle_online",
    "name": "Lifestyle Online",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/lifestyle-online-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.5,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=z9quE%2F8JYBRxgJSyVhBiaw%3D%3D",
        "perks": ""
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://amzn.in/d/09RPzE5H",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://www.gyftr.com/lifestyle-online",
        "perks": ""
      }
    ]
  },
  {
    "id": "makemytrip",
    "name": "Makemytrip",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/makemytrip-e-pay-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=Yggk7FKTTgx%2FNG8eS8Rr5w%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://www.gyftr.com/edgerewards/makemytrip-e-pay-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://amzn.in/d/0hTL6r14",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://www.gyftr.com/makemytrip-e-pay",
        "perks": ""
      }
    ]
  },
  {
    "id": "makemytrip_holiday",
    "name": "Makemytrip Holiday",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.gyftr.com/instantvouchers/easemytrip-holiday-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=8gp40I9RLyYETjYlAYFQ2w%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9,
        "site": "https://www.gyftr.com/edgerewards/makemytrip-holiday-e-pay-gift-vouchers",
        "perks": "Earns 2.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://amzn.in/d/0bNR1Tpx",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11.5,
        "site": "https://www.gyftr.com/makemytrip-holiday-e-pay",
        "perks": ""
      }
    ]
  },
  {
    "id": "marks_&_spencer",
    "name": "Marks & Spencer",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://www.gyftr.com/instantvouchers/marks-spencer-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8.25,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=hv7pUyTvBW9QhaMC1Prh1w%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://www.gyftr.com/edgerewards/marks-spencer-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://amzn.in/d/0ffksCxF",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://www.gyftr.com/marks-&-spencer",
        "perks": ""
      }
    ]
  },
  {
    "id": "myntra",
    "name": "Myntra",
    "category_name": "E-Commerce",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/myntra-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=lTvX96rwO1nmJUyLprDUUQ%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2,
        "site": "https://www.gyftr.com/edgerewards/myntra-gift-vouchers",
        "perks": "Earns 1.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://amzn.in/d/08pGvBFF",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://www.gyftr.com/myntra",
        "perks": ""
      }
    ]
  },
  {
    "id": "nykaa",
    "name": "Nykaa",
    "category_name": "E-Commerce",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/nykaa-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=mF7SoqSqDzXYeCWbF5lH9w%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://www.gyftr.com/edgerewards/nykaa-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://amzn.in/d/0ipGJFzR",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://www.gyftr.com/nykaa",
        "perks": ""
      }
    ]
  },
  {
    "id": "skechers",
    "name": "Skechers",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://www.gyftr.com/instantvouchers/skechers-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=FaNbdpBM132ED70SrgKcvw%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://www.gyftr.com/edgerewards/skechers-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://amzn.in/d/0fZMof9c",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://www.gyftr.com/skechers",
        "perks": ""
      }
    ]
  },
  {
    "id": "starbucks",
    "name": "Starbucks",
    "category_name": "Gifting",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/starbucks-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 4.2,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=AUtAaCTrmk7L0QqX6TQxdA%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://www.gyftr.com/edgerewards/starbucks-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://amzn.in/d/0fdnXwLM",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/starbucks",
        "perks": ""
      }
    ]
  },
  {
    "id": "subway",
    "name": "Subway",
    "category_name": "Dining",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.gyftr.com/instantvouchers/subway-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=Xi%2BrfIYy013MUx9ouRHezg%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9,
        "site": "https://www.gyftr.com/edgerewards/subway-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://amzn.in/d/0cu87nHW",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://www.gyftr.com/subway",
        "perks": ""
      }
    ]
  },
  {
    "id": "swiggy",
    "name": "Swiggy",
    "category_name": "Food",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/swiggy-gv-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=67QXkJBH5ual2f8tm2sCvQ%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://www.gyftr.com/edgerewards/swiggy-gv-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/swiggy-gv",
        "perks": ""
      }
    ]
  },
  {
    "id": "taj_experiences",
    "name": "Taj Experiences",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2,
        "site": "https://www.gyftr.com/instantvouchers/taj-hotels-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.4,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=OQ3eIg2UEQcGVFUfVTM0Hw%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9,
        "site": "https://www.gyftr.com/edgerewards/taj-hotels-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://amzn.in/d/0iUrDIcM",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://www.gyftr.com/taj-hotels",
        "perks": ""
      }
    ]
  },
  {
    "id": "tanishq",
    "name": "Tanishq",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2,
        "site": "https://www.gyftr.com/instantvouchers/tanishq-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=enWnA%2Bbs22kSK%2Fme1PRoSA%3D%3D",
        "perks": ""
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://amzn.in/d/0ha5AXzD",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/tanishq",
        "perks": ""
      }
    ]
  },
  {
    "id": "tata_cliq",
    "name": "Tata Cliq",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 6.5,
        "site": "https://www.gyftr.com/instantvouchers/tata-cliq-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=vFFaCf88AswrO4vtto%2BKRQ%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.gyftr.com/edgerewards/tata-cliq-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://amzn.in/d/04wKYeYk",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://www.gyftr.com/tata-cliq",
        "perks": ""
      }
    ]
  },
  {
    "id": "uber",
    "name": "Uber",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/uber-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=Yjz%2FjrZ6z4UlsvkcO5a1oQ%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/edgerewards/uber-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://amzn.in/d/02dpIMta",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://www.gyftr.com/uber",
        "perks": ""
      }
    ]
  },
  {
    "id": "vijay_sales",
    "name": "Vijay Sales",
    "category_name": "Electronics",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/vijay-sales-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=T1CCjECQ57f9XKHHdmNqtg%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/edgerewards/vijay-sales-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://amzn.in/d/05LBMOcv",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://www.gyftr.com/vijay-sales",
        "perks": ""
      }
    ]
  },
  {
    "id": "westside",
    "name": "Westside",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/instantvouchers/westside-gift-vouchers",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://shopwise.giftstacc.com/giftcard?productId=biRRhlkDnYjs8pi8XDElew%3D%3D",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/edgerewards/westside-gift-vouchers",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://amzn.in/d/07Y3YpqQ",
        "perks": ""
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.gyftr.com/westside",
        "perks": ""
      }
    ]
  }
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