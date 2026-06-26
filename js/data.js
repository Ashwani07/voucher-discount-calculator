export const lastVerified = 'June 2026';

// Bank-specific "home portal" multiplier defaults for the Custom Card modal.
// A card can only earn issuer-specific portal multipliers on its OWN bank's
// portal(s) — e.g. an Axis card cannot earn HDFC SmartBuy's multiplier.
// `frozen: true` means the field is locked at this value in the UI (user cannot
// override) because the value is a known, bank-set constant.
// `frozen: false` means a sensible starting value is shown but the user can edit it
// (used for Amex, where the multiplier varies by specific card).
// Update these values here if banks change their rates — nothing else needs editing.
export const bankPortalDefaults = {
  HDFC: {
    hdfc_smartbuy:    { value: 5, frozen: true }
  },
  ICICI: {
    icici_ishop:      { value: 6, frozen: true }
  },
  Axis: {
    axis_edgerewards: { value: 1, frozen: true },
    axis_grabdeals:   { value: 1, frozen: true }
  },
  Amex: {
    shopwise:         { value: 1, frozen: false }
  },
  Other: {
    // All bank-specific portals are frozen at 0 for "Other" — a card from an
    // unlisted bank cannot earn on HDFC/ICICI/Axis/Amex's own portals.
    hdfc_smartbuy:    { value: 0, frozen: true },
    icici_ishop:      { value: 0, frozen: true },
    axis_edgerewards: { value: 0, frozen: true },
    axis_grabdeals:   { value: 0, frozen: true },
    shopwise:         { value: 0, frozen: true }
  }
};

// All bank-specific portal IDs (used to know which fields to freeze/unfreeze
// when a bank is NOT explicitly covered above, e.g. Other freezes all of these).
export const bankSpecificPortalIds = [
  'hdfc_smartbuy', 'icici_ishop', 'axis_edgerewards', 'axis_grabdeals', 'shopwise'
];

export const portals = [
  { id: "hdfc_smartbuy", name: "HDFC SmartBuy", group: "smartbuy" },
  { id: "shopwise", name: "Amex Shopwise", group: "shopwise" },
  { id: "icici_ishop", name: "ICICI iShop", group: "ishop" },
  { id: "axis_edgerewards", name: "Axis EdgeRewards", group: "axis_portal" },
  { id: "axis_grabdeals", name: "Axis GrabDeals Woohoo", group: "axis_portal" },
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

// <<BRANDS_START>>
export const masterBrands = [
  {
    "id": "adidas",
    "name": "Adidas Kids",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-adidas-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-adidas-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "air_india",
    "name": "Air India",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air-india-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air-india-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-air-india-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-air-india-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-air-india-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-air-india-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air-india-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "ajio",
    "name": "Ajio",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ajio-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.25,
        "site": "https://vouchwise.in/out/buy-ajio-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-ajio-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ajio-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-ajio-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-ajio-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ajio-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-amazon-smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://vouchwise.in/out/buy-amazon-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon-ishop",
        "availability": "available",
        "overrideRewardMultiplier": 0
      }
    ]
  },
  {
    "id": "amazon_fresh",
    "name": "Amazon Fresh",
    "category_name": "Grocery",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-ishop",
        "availability": "available",
        "overrideRewardMultiplier": 0
      }
    ]
  },
  {
    "id": "amazon_prime_membership",
    "name": "Amazon Prime Membership",
    "category_name": "Entertainment",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-amazon-shopping-smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "apollo_pharmacy",
    "name": "Apollo Pharmacy",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "barbeque_nation",
    "name": "Barbeque Nation",
    "category_name": "Food",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-bigbasket-smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹2,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-bigbasket-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-bigbasket-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-bigbasket-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-bigbasket-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "blinkit",
    "name": "Blinkit Gift Card",
    "category_name": "Grocery",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹2,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0.5,
        "site": "https://vouchwise.in/out/buy-blinkit-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-blinkit-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-blinkit-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "bookmyshow",
    "name": "BookMyShow",
    "category_name": "Entertainment",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-bookmyshow-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-bookmyshow-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "cleartrip",
    "name": "Cleartrip",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.3,
        "site": "https://vouchwise.in/out/buy-cleartrip-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "cleartrip_hotel",
    "name": "Cleartrip Hotel",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 11.9,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 16.5,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "costa_coffee",
    "name": "Costa Coffee",
    "category_name": "Restaurants",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-costa-coffee-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-costa-coffee-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-costa-coffee-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-costa-coffee-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-costa-coffee-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa-coffee-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa-coffee-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "croma",
    "name": "Croma",
    "category_name": "Electronics",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹75,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "decathlon",
    "name": "Decathlon",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-decathlon-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-decathlon-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-decathlon-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-decathlon-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "dominos",
    "name": "Domino's",
    "category_name": "Restaurants",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-dominos-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-dominos-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-dominos-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-dominos-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-dominos-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dominos-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dominos-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "easemytrip",
    "name": "EaseMyTrip",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-easemytrip-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-easemytrip-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-easemytrip-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "easemytrip_holiday",
    "name": "EaseMyTrip Holiday",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.8,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "easemytrip_hotel",
    "name": "EaseMyTrip Hotel",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.1,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "fabindia",
    "name": "Fabindia",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "ferns_n_petals",
    "name": "Ferns N Petals",
    "category_name": "Gifting",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "flipkart_gift_card",
    "name": "Flipkart Gift Card",
    "category_name": "Electronics",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-igp-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7.4,
        "site": "https://vouchwise.in/out/buy-igp-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-igp-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-igp-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "ikea",
    "name": "IKEA",
    "category_name": "Online / General",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ikea-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.65,
        "site": "https://vouchwise.in/out/buy-ikea-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ikea-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ikea-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-ikea-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-ikea-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ikea-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "itc_hotels",
    "name": "ITC Hotels",
    "category_name": "Luxury",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-itc-hotels-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-itc-hotels-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-itc-hotels-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-itc-hotels-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-itc-hotels-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-itc-hotels-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-itc-hotels-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "jiohotstar",
    "name": "JioHotstar",
    "category_name": "Entertainment",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-jiohotstar-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-jiohotstar-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-jiohotstar-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-jiohotstar-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "kfc",
    "name": "KFC",
    "category_name": "Restaurants",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-kfc-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-kfc-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-kfc-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-kfc-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "klook",
    "name": "Klook",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-klook-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-klook-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-klook-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-klook-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "lakme_salon",
    "name": "Lakme Salon",
    "category_name": "Beauty",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-lakme-salon-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-lakme-salon-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "lenskart",
    "name": "Lenskart",
    "category_name": "Online / General",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-lenskart-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.3,
        "site": "https://vouchwise.in/out/buy-lenskart-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-lenskart-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-lenskart-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-lenskart-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-lenskart-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lenskart-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "levis",
    "name": "Levis",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-levis-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-levis-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.3,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-lifestyle-online-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-makemytrip-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-makemytrip-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-makemytrip-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-ishop",
        "availability": "available"
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
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 13.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "makemytrip_hotel",
    "name": "Makemytrip Hotel",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "manyavar",
    "name": "Manyavar",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-manyavar-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8.25,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "max_fashion_online",
    "name": "Max Fashion Online",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 4.4,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "max_fashion",
    "name": "Max Fashion",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-max-fashion-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-max-fashion-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-max-fashion-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-max-fashion-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-myntra-smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-myntra-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-myntra-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "netmeds",
    "name": "Netmeds",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-netmeds-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-netmeds-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-netmeds-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-nykaa-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-nykaa-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "nykaa_fashion",
    "name": "Nykaa Fashion",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "nykaa_man",
    "name": "Nykaa Man",
    "category_name": "Beauty",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-man-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-man-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa-man-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-man-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-man-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-man-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-man-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "ola",
    "name": "OLA Cabs",
    "category_name": "Travel",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-ola-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-ola-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "pantaloons",
    "name": "Pantaloons",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pantaloons-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-pantaloons-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pantaloons-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pantaloons-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "pharmeasy",
    "name": "Pharmeasy",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-pharmeasy-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "pizza_hut",
    "name": "Pizza Hut",
    "category_name": "Restaurants",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-pizza-hut-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pizza-hut-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-pizza-hut-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pizza-hut-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-pizza-hut-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-pizza-hut-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pizza-hut-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "puma",
    "name": "Puma",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-puma-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-puma-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-puma-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-puma-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-puma-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-puma-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-puma-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "pvr",
    "name": "PVR",
    "category_name": "Entertainment",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-pvr-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pvr-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-pvr-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 19,
        "site": "https://vouchwise.in/out/buy-pvr-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-pvr-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-pvr-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pvr-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "reliance_digital",
    "name": "Reliance Digital",
    "category_name": "Electronics",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "reliance_smart",
    "name": "Reliance Smart",
    "category_name": "Grocery",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-smart-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-smart-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-reliance-smart-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance-smart-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-smart-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance-smart-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-smart-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "shoppers_stop",
    "name": "Shoppers Stop",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-ishop",
        "availability": "available"
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
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-skechers-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-skechers-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-skechers-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-skechers-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-skechers-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "sonyliv",
    "name": "SonyLiv",
    "category_name": "Entertainment",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 30,
        "site": "https://vouchwise.in/out/buy-sonyliv-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 40,
        "site": "https://vouchwise.in/out/buy-sonyliv-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 38,
        "site": "https://vouchwise.in/out/buy-sonyliv-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-ishop",
        "availability": "available"
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
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-starbucks-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 4.2,
        "site": "https://vouchwise.in/out/buy-starbucks-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-starbucks-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-starbucks-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-starbucks-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-starbucks-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-starbucks-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-subway-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-subway-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-subway-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-subway-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-subway-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-subway-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-subway-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-swiggy-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-swiggy-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-swiggy-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-ishop",
        "availability": "available",
        "overrideRewardMultiplier": 0
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
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-taj-experiences-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.4,
        "site": "https://vouchwise.in/out/buy-taj-experiences-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-taj-experiences-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-taj-experiences-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-taj-experiences-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-taj-experiences-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-taj-experiences-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "tanishq_gold_jewellery",
    "name": "Tanishq Gold Jewellery",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-ishop",
        "availability": "available",
        "overrideRewardMultiplier": 0
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
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata-cliq-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tata-cliq-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata-cliq-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata-cliq-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "tata_cliq_luxury",
    "name": "Tata CliQ Luxury",
    "category_name": "Luxury",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-uber-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-uber-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-uber-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-uber-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-uber-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-ishop",
        "availability": "available"
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
        "site": "https://vouchwise.in/out/buy-vijay-sales-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay-sales-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay-sales-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay-sales-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-ishop",
        "availability": "available"
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
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-westside-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-westside-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "zepto",
    "name": "Zepto",
    "category_name": "Grocery",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-smartbuy",
        "availability": "available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-ishop",
        "availability": "available"
      }
    ]
  },
  {
    "id": "zomato",
    "name": "Zomato Gift Card",
    "category_name": "Grocery",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹2,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-shopwise",
        "availability": "available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-edgerewards",
        "availability": "available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-amazon",
        "availability": "available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-gyftr",
        "availability": "available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-grabdeal",
        "availability": "available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-ishop",
        "availability": "available"
      }
    ]
  }
];
// <<BRANDS_END>>

// <<CARDS_START>>
export const masterCards = [
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-platinum-reserve",
    "applyStatus": "referral",
    "assumption_note": "Assuming 1 MR Point = ₹0.33 based on standard catalog yield."
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-platinum-travel",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 MR Point = ₹0.33; optimal value unlocked at milestone spends."
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-mrcc",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 MR Point = ₹0.33 based on 24K Gold Collection redemption."
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-gold",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 MR Point = ₹0.33 based on 24K Gold Collection redemption."
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
      "icici_ishop": 0,
      "axis_edgerewards": 1,
      "axis_grabdeals": 1,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-magnus-burgundy",
    "applyStatus": "referral",
    "assumption_note": "Assuming 5 Edge Rewards = 4 Air Miles = ₹4.00 (₹0.80 per point)."
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
      "icici_ishop": 0,
      "axis_edgerewards": 1,
      "axis_grabdeals": 1,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-magnus",
    "applyStatus": "referral",
    "assumption_note": "Assuming 5 Edge Rewards = 2 Air Miles = ₹2.00 (₹0.40 per point)."
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
      "icici_ishop": 0,
      "axis_edgerewards": 1,
      "axis_grabdeals": 1,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-atlas",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 Edge Mile = 2 Partner Miles = ₹2.00."
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
      "icici_ishop": 0,
      "axis_edgerewards": 1,
      "axis_grabdeals": 1,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-horizon",
    "applyStatus": "referral",
    "assumption_note": "Assuming 1 Edge Reward = 1 Partner Mile = ₹1.00."
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-infinia",
    "applyStatus": "invite_only",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via SmartBuy travel redemption."
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-dbm",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via SmartBuy travel redemption."
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-regalia-gold",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.50 via SmartBuy travel redemption."
  },
  {
    "id": "hdfc_swiggy",
    "name": "HDFC Swiggy",
    "rewardType": "cashback",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 1,
    "portalMultipliers": {
      "hdfc_smartbuy": 5,
      "shopwise": 0,
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 0,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-swiggy",
    "applyStatus": "direct",
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-premier",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = 1 Air Mile = ₹1.00."
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-travelone",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = 1 Air Mile = ₹1.00."
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-liveplus",
    "applyStatus": "direct",
    "assumption_note": "Direct statement cashback; no valuation assumption required."
  },
  {
    "id": "hsbc_visaplatinum",
    "name": "HSBC Visa Platinum",
    "rewardType": "points",
    "pointValue": 0.5,
    "spendBlock": 150,
    "pointsPerBlock": 2,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-visaplatinum",
    "applyStatus": "direct",
    "assumption_note": "Assuming 2 Reward Point = 1 Air Mile = ₹0.50."
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
      "icici_ishop": 6,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-epm",
    "applyStatus": "invite_only",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via EaseMyTrip/in-app redemption."
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
      "icici_ishop": 6,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-times",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00; actual value varies by catalog."
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
      "icici_ishop": 6,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-emeralde",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.25 via standard redemption."
  },
  {
    "id": "icici_sapphiro",
    "name": "ICICI Sapphiro",
    "rewardType": "points",
    "pointValue": 0.25,
    "spendBlock": 100,
    "pointsPerBlock": 2,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "icici_ishop": 6,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-sapphiro",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.25 via standard redemption."
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
      "icici_ishop": 4,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 0,
      "amazon": 5,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-amazon",
    "applyStatus": "direct",
    "assumption_note": "Direct Amazon Pay balance cashback; no valuation assumption required."
  },
  {
    "id": "sbi_cashback",
    "name": "SBI Cashback",
    "rewardType": "cashback",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 1,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 0,
      "amazon": 5,
      "default": 5
    },
    "applyURL": "https://vouchwise.in/out/apply-sbi-cashback",
    "applyStatus": "direct",
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-scapia",
    "applyStatus": "referral",
    "assumption_note": "Assuming 5 Scapia coins = ₹1.00 (₹0.20 per coin) via in-app travel booking."
  },
  {
    "id": "kotak_airplus",
    "name": "Kotak Air+",
    "rewardType": "points",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 2,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-kotak-airplus",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Mile = ₹1 (Kotak Unbox) or 1:1 Air India"
  },
  {
    "id": "kotak_solitare",
    "name": "Kotak Solitare",
    "rewardType": "points",
    "pointValue": 1,
    "spendBlock": 100,
    "pointsPerBlock": 3,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "amazon": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-kotak-solitare",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Mile = ₹1 (Kotak Unbox) or 1:1 Air India"
  }
];
// <<CARDS_END>>


// 2. Load Custom Data from LocalStorage
// 2. Load Custom Data from LocalStorage (HARDENED)
let customCards = [];
try {
  customCards = JSON.parse(localStorage.getItem('customCards') || '[]');
} catch (error) {
  console.warn("Corrupted custom card data found. Resetting cache.");
  localStorage.removeItem('customCards');
}

let customBrands = [];
try {
  customBrands = JSON.parse(localStorage.getItem('customBrands') || '[]');
} catch (error) {
  console.warn("Corrupted custom brand data found. Resetting cache.");
  localStorage.removeItem('customBrands');
}

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

export function removeCustomCardFromStorage(cardId) {
  // 1. Remove from live memory array
  const index = cards.findIndex(c => c.id === cardId);
  if (index !== -1) cards.splice(index, 1);
  
  // 2. Remove from local storage safely
  try {
    const stored = JSON.parse(localStorage.getItem('customCards') || '[]');
    localStorage.setItem('customCards', JSON.stringify(stored.filter(c => c.id !== cardId)));
  } catch (error) {
    console.error("Failed to delete custom card from storage:", error);
  }
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



export function deleteCustomBrand(brandId) {
  const index = brands.findIndex(b => b.id === brandId);
  if (index !== -1) brands.splice(index, 1);
  const stored = JSON.parse(localStorage.getItem('customBrands') || '[]');
  localStorage.setItem('customBrands', JSON.stringify(stored.filter(b => b.id !== brandId)));
}