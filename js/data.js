export const portals = [
  { id: "hdfc_smartbuy", name: "HDFC SmartBuy", group: "smartbuy" },
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
    "id": "amex_platinum_reserve",
    "name": "Amex Platinum Reserve",
    "rewardType": "points",
    "pointValue": 0.33,
    "spendBlock": 50,
    "pointsPerBlock": 1,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 3,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-platinum-reserve",
    "assumption_note": "Assuming 1 MR Point = \u20B90.33 based on standard catalog yield."
  },
  {
    "id": "amex_platinum_travel",
    "name": "Amex Platinum Travel",
    "rewardType": "points",
    "pointValue": 0.33,
    "spendBlock": 50,
    "pointsPerBlock": 1,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 3,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-platinum-travel",
    "assumption_note": "Assuming 1 MR Point = \u20B90.33; optimal value unlocked at milestone spends."
  },
  {
    "id": "amex_mrcc",
    "name": "Amex MRCC",
    "rewardType": "points",
    "pointValue": 0.33,
    "spendBlock": 50,
    "pointsPerBlock": 1,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 2,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-mrcc",
    "assumption_note": "Assuming 1 MR Point = \u20B90.33 based on 24K Gold Collection redemption."
  },
  {
    "id": "amex_gold",
    "name": "Amex Gold",
    "rewardType": "points",
    "pointValue": 0.33,
    "spendBlock": 50,
    "pointsPerBlock": 1,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 5,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-gold",
    "assumption_note": "Assuming 1 MR Point = \u20B90.33 based on 24K Gold Collection redemption."
  },
  {
    "id": "axis_magnus_burgundy",
    "name": "Axis Magnus Burgundy",
    "rewardType": "points",
    "pointValue": 0.8,
    "spendBlock": 200,
    "pointsPerBlock": 12,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 1,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-magnus-burgundy",
    "assumption_note": "Assuming 5 Edge Rewards = 4 Air Miles = \u20B94.00 (\u20B90.80 per point)."
  },
  {
    "id": "axis_magnus",
    "name": "Axis Magnus",
    "rewardType": "points",
    "pointValue": 0.4,
    "spendBlock": 200,
    "pointsPerBlock": 12,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 1,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-magnus",
    "assumption_note": "Assuming 5 Edge Rewards = 2 Air Miles = \u20B92.00 (\u20B90.40 per point)."
  },
  {
    "id": "axis_atlas",
    "name": "Axis Atlas",
    "rewardType": "points",
    "pointValue": 2,
    "spendBlock": 100,
    "pointsPerBlock": 2,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 1,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-atlas",
    "assumption_note": "Assuming 1 Edge Mile = 2 Partner Miles = \u20B92.00."
  },
  {
    "id": "axis_horizon",
    "name": "Axis Horizon",
    "rewardType": "points",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 2,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 1,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-horizon",
    "assumption_note": "Assuming 1 Edge Reward = 1 Partner Mile = \u20B91.00."
  },
  {
    "id": "hdfc_infinia",
    "name": "HDFC Infinia",
    "rewardType": "points",
    "pointValue": 1,
    "spendBlock": 150,
    "pointsPerBlock": 5,
    "portalMultipliers": {
      "hdfc_smartbuy": 5,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-infinia",
    "assumption_note": "Assuming 1 Reward Point = \u20B91.00 via SmartBuy travel redemption."
  },
  {
    "id": "hdfc_dbm",
    "name": "HDFC Diners Black Metal",
    "rewardType": "points",
    "pointValue": 1,
    "spendBlock": 150,
    "pointsPerBlock": 5,
    "portalMultipliers": {
      "hdfc_smartbuy": 3,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-dbm",
    "assumption_note": "Assuming 1 Reward Point = \u20B91.00 via SmartBuy travel redemption."
  },
  {
    "id": "hdfc_regalia_gold",
    "name": "HDFC Regalia Gold",
    "rewardType": "points",
    "pointValue": 0.5,
    "spendBlock": 200,
    "pointsPerBlock": 5,
    "portalMultipliers": {
      "hdfc_smartbuy": 5,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-regalia-gold",
    "assumption_note": "Assuming 1 Reward Point = \u20B90.50 via SmartBuy travel redemption."
  },
  {
    "id": "hdfc_swiggy",
    "name": "HDFC Swiggy",
    "rewardType": "cashback",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 5,
    "portalMultipliers": {
      "hdfc_smartbuy": 1,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-swiggy",
    "assumption_note": "Direct statement cashback; no valuation assumption required."
  },
  {
    "id": "hsbc_premier",
    "name": "HSBC Premier",
    "rewardType": "points",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 3,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-premier",
    "assumption_note": "Assuming 1 Reward Point = 1 Air Mile = \u20B91.00."
  },
  {
    "id": "hsbc_travelone",
    "name": "HSBC Travel One",
    "rewardType": "points",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 2,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-travelone",
    "assumption_note": "Assuming 1 Reward Point = 1 Air Mile = \u20B91.00."
  },
  {
    "id": "hsbc_liveplus",
    "name": "HSBC Live+",
    "rewardType": "cashback",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 1.5,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-liveplus",
    "assumption_note": "Direct statement cashback; no valuation assumption required."
  },
  {
    "id": "icici_epm",
    "name": "ICICI Emeralde Private Metal",
    "rewardType": "points",
    "pointValue": 1,
    "spendBlock": 200,
    "pointsPerBlock": 6,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 6,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-epm",
    "assumption_note": "Assuming 1 Reward Point = \u20B91.00 via EaseMyTrip/in-app redemption."
  },
  {
    "id": "icici_times",
    "name": "ICICI Times Black",
    "rewardType": "points",
    "pointValue": 1,
    "spendBlock": 50,
    "pointsPerBlock": 1,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 6,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-times",
    "assumption_note": "Assuming 1 Reward Point = \u20B91.00; actual value varies by catalog."
  },
  {
    "id": "icici_emeralde",
    "name": "ICICI Emeralde",
    "rewardType": "points",
    "pointValue": 0.25,
    "spendBlock": 100,
    "pointsPerBlock": 4,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 6,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-emeralde",
    "assumption_note": "Assuming 1 Reward Point = \u20B90.25 via standard redemption."
  },
  {
    "id": "icici_amazon",
    "name": "ICICI Amazon",
    "rewardType": "cashback",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 1,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 4,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-amazon",
    "assumption_note": "Direct Amazon Pay balance cashback; no valuation assumption required."
  },
  {
    "id": "sbi_cashback",
    "name": "SBI Cashback",
    "rewardType": "cashback",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 5,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-sbi-cashback",
    "assumption_note": "Direct statement cashback; no valuation assumption required."
  },
  {
    "id": "jupiter_edge_plus",
    "name": "Jupiter Edge+",
    "rewardType": "cashback",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 1,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-jupiter-edge-plus",
    "assumption_note": "Direct statement cashback; no valuation assumption required."
  },
  {
    "id": "scapia",
    "name": "Scapia",
    "rewardType": "points",
    "pointValue": 0.2,
    "spendBlock": 20,
    "pointsPerBlock": 2,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "axis_edgerewards": 0,
      "icici_ishop": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-scapia",
    "assumption_note": "Assuming 5 Scapia coins = \u20B91.00 (\u20B90.20 per coin) via in-app travel booking."
  }
];

const masterBrands = [
  {
    "id": "amazon_fresh",
    "name": "Amazon Fresh",
    "category_name": "Grocery",
    "portals": [
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://vouchwise.in/out/buy-amazon-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-bigbasket-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-bigbasket-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-edgerewards",
        "perks": "Earns 1.5% GyFTR Coins"
      }
    ]
  },
  {
    "id": "igp",
    "name": "IGP",
    "category_name": "E-Commerce",
    "portals": [
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-igp-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-igp-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7.4,
        "site": "https://vouchwise.in/out/buy-igp-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-igp-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      }
    ]
  },
  {
    "id": "lifestyle_offline",
    "name": "Lifestyle Offline",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.3,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-shopwise",
        "perks": ""
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-shopwise",
        "perks": ""
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-makemytrip-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-makemytrip-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-edgerewards",
        "perks": "Earns 2.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8.25,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-edgerewards",
        "perks": "Earns 1.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-nykaa-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-skechers-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-skechers-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-skechers-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-starbucks-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-starbucks-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 4.2,
        "site": "https://vouchwise.in/out/buy-starbucks-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-starbucks-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-starbucks-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-subway-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-subway-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-subway-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-subway-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-subway-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-swiggy-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      }
    ]
  },
  {
    "id": "taj_experiences",
    "name": "Taj Experiences",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-taj-experiences-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-taj-experiences-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.4,
        "site": "https://vouchwise.in/out/buy-taj-experiences-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-taj-experiences-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-taj-experiences-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-tanishq-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-shopwise",
        "perks": ""
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata-cliq-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tata-cliq-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-uber-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-uber-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay-sales-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-amazon",
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
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-gyftr",
        "perks": ""
      },
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-shopwise",
        "perks": ""
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-amazon",
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

// 4. Export Save Functions (Hardened)
export function saveCustomCard(newCard) {
  customCards.push(newCard);
  try {
    localStorage.setItem('customCards', JSON.stringify(customCards));
  } catch (error) {
    console.error("Storage update failed:", error);
    alert("Could not sync profile preferences. Storage may be restricted or full.");
  }
  cards.push(newCard); // Update live memory
}

export function saveCustomBrand(newBrand) {
  customBrands.push(newBrand);
  try {
    localStorage.setItem('customBrands', JSON.stringify(customBrands));
  } catch (error) {
    console.error("Storage update failed:", error);
    alert("Could not sync profile preferences. Storage may be restricted or full.");
  }
  brands.push(newBrand); // Update live memory
}