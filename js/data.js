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
const masterBrands = [
  {
    "id": "adidas",
    "name": "Adidas Kids",
    "category_name": "Fashion",
    "portals": [
      {
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-adidas-smartbuy",
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-adidas-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air-india-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-air-india-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-air-india-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-air-india-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-air-india-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air-india-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.25,
        "site": "https://vouchwise.in/out/buy-ajio-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-ajio-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ajio-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-ajio-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-ajio-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ajio-ishop",
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
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://vouchwise.in/out/buy-amazon-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon-ishop",
        "disclaimer": "Reward Multiplier: 0",
        "overrideRewardMultiplier": 1
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-ishop",
        "disclaimer": "Reward Multiplier: 0",
        "overrideRewardMultiplier": 1
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-ishop",
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
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-ishop",
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
        "disclaimer": "Monthly Limit: ₹2,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-bigbasket-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-bigbasket-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-bigbasket-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-bigbasket-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-ishop",
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
        "disclaimer": "Monthly Limit: ₹2,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0.5,
        "site": "https://vouchwise.in/out/buy-blinkit-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-blinkit-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-gyftr",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-blinkit-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-ishop",
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
        "disclaimer": "Not Available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-bookmyshow-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-gyftr",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-bookmyshow-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.3,
        "site": "https://vouchwise.in/out/buy-cleartrip-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 11.9,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 16.5,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-costa-coffee-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-costa-coffee-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-costa-coffee-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-costa-coffee-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa-coffee-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa-coffee-ishop",
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
        "disclaimer": "Monthly Limit: ₹75,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-decathlon-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-decathlon-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-decathlon-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-decathlon-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-dominos-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-dominos-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-dominos-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-dominos-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dominos-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dominos-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-easemytrip-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-easemytrip-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-gyftr",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-easemytrip-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.8,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-ishop",
        "disclaimer": "Not Available"
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
        "disclaimer": "Not Available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.1,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-gyftr",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-gyftr",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-ishop",
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
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7.4,
        "site": "https://vouchwise.in/out/buy-igp-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-igp-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-igp-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.65,
        "site": "https://vouchwise.in/out/buy-ikea-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ikea-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ikea-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-ikea-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-ikea-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ikea-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-itc-hotels-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-itc-hotels-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-itc-hotels-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-itc-hotels-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-itc-hotels-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-itc-hotels-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-jiohotstar-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-jiohotstar-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-jiohotstar-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-kfc-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-kfc-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-kfc-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-kfc-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-klook-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-klook-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-klook-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook-ishop",
        "disclaimer": "Not Available"
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
        "disclaimer": "Not Available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-lakme-salon-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-gyftr",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-lakme-salon-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.3,
        "site": "https://vouchwise.in/out/buy-lenskart-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-lenskart-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-lenskart-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-lenskart-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-lenskart-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lenskart-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-levis-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-levis-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.3,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-makemytrip-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-makemytrip-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 13.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-manyavar-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8.25,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 4.4,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-max-fashion-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-max-fashion-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-max-fashion-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-max-fashion-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-ishop",
        "disclaimer": "Not Available"
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
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-myntra-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-myntra-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-netmeds-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-netmeds-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-nykaa-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-man-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa-man-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-man-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-man-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-man-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-man-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-ola-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-pantaloons-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pantaloons-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pantaloons-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-gyftr",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pizza-hut-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-pizza-hut-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pizza-hut-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-pizza-hut-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-pizza-hut-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pizza-hut-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-puma-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-puma-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-puma-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-puma-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-puma-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-puma-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pvr-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-pvr-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 19,
        "site": "https://vouchwise.in/out/buy-pvr-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-pvr-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-pvr-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pvr-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-smart-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-reliance-smart-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance-smart-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-smart-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance-smart-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-smart-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-skechers-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-skechers-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-skechers-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-skechers-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 40,
        "site": "https://vouchwise.in/out/buy-sonyliv-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 38,
        "site": "https://vouchwise.in/out/buy-sonyliv-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-ishop",
        "disclaimer": "Not Available"
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 4.2,
        "site": "https://vouchwise.in/out/buy-starbucks-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-starbucks-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-starbucks-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-starbucks-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-starbucks-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-starbucks-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-subway-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-subway-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-subway-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-subway-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-subway-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-subway-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-swiggy-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-amazon",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-swiggy-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-ishop",
        "disclaimer": "Reward Multiplier: 0",
        "overrideRewardMultiplier": 1
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.4,
        "site": "https://vouchwise.in/out/buy-taj-experiences-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-taj-experiences-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-taj-experiences-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-taj-experiences-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-taj-experiences-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-taj-experiences-ishop",
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
        "disclaimer": "Not Available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-gyftr",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-ishop",
        "disclaimer": "Reward Multiplier: 0",
        "overrideRewardMultiplier": 1
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tata-cliq-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata-cliq-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata-cliq-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-uber-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-uber-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-uber-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-uber-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay-sales-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-amazon",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay-sales-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay-sales-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-shopwise",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-edgerewards",
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-westside-grabdeal",
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-ishop",
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
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-gyftr",
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-ishop",
        "disclaimer": "Not Available"
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
        "disclaimer": "Monthly Limit: ₹2,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-shopwise",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-edgerewards",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-amazon",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-gyftr",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-grabdeal",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-ishop",
        "disclaimer": "Not Available"
      }
    ]
  }
];
// <<BRANDS_END>>


// <<CARDS_START>>
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
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
    "pointsPerBlock": 5,
    "portalMultipliers": {
      "hdfc_smartbuy": 1,
      "shopwise": 0,
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 0,
      "default": 0.2
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
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-liveplus",
    "applyStatus": "direct",
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
      "icici_ishop": 6,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-epm",
    "applyStatus": "invite_only",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via in-app redemption."
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
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-emeralde",
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
      "gyftr": 1,
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
    "pointsPerBlock": 5,
    "portalMultipliers": {
      "hdfc_smartbuy": 0,
      "shopwise": 0,
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 0,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-sbi-cashback",
    "applyStatus": "direct",
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
      "icici_ishop": 0,
      "axis_edgerewards": 0,
      "axis_grabdeals": 0,
      "gyftr": 1,
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-jupiter-edge-plus",
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
      "default": 1
    },
    "applyURL": "https://vouchwise.in/out/apply-scapia",
    "applyStatus": "referral",
    "assumption_note": "Assuming 5 Scapia coins = ₹1.00 (₹0.20 per coin) via in-app travel booking."
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