export const lastVerified = 'July 2026';

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
        "compositeId": "adidas_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-adidas_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-adidas_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "adidas_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "air_india",
    "name": "Air India",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "air_india_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air_india_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air_india_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "air_india_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-air_india_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-air_india_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-air_india_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-air_india_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air_india_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ajio",
    "name": "Ajio",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "ajio_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ajio_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.25,
        "site": "https://vouchwise.in/out/buy-ajio_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ajio_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-ajio_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-ajio_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-ajio_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-ajio_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ajio_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon",
    "name": "Amazon Pay",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "amazon_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹10000"
      },
      {
        "compositeId": "amazon_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://vouchwise.in/out/buy-amazon_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_fresh",
    "name": "Amazon Fresh",
    "category_name": "Grocery",
    "portals": [
      {
        "compositeId": "amazon_fresh_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_fresh_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-amazon_fresh_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_prime_membership",
    "name": "Amazon Prime Membership",
    "category_name": "Entertainment",
    "portals": [
      {
        "compositeId": "amazon_prime_membership_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_prime_membership_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_shopping",
    "name": "Amazon Shopping",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "amazon_shopping_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹10000"
      },
      {
        "compositeId": "amazon_shopping_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_shopping_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "apollo_pharmacy",
    "name": "Apollo Pharmacy",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "apollo_pharmacy_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "apollo_pharmacy_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "barbeque_nation",
    "name": "Barbeque Nation",
    "category_name": "Food",
    "portals": [
      {
        "compositeId": "barbeque_nation_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque_nation_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-barbeque_nation_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "barbeque_nation_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-barbeque_nation_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-barbeque_nation_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-barbeque_nation_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque_nation_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque_nation_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bath_&_body_works",
    "name": "Bath & Body Works",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "bath_&_body_works_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-bath_&_body_works_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_&_body_works_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-bath_&_body_works_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bath_&_body_works_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-bath_&_body_works_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_&_body_works_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-bath_&_body_works_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_&_body_works_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bath_&_body_works_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_&_body_works_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bath_&_body_works_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_&_body_works_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bath_&_body_works_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bigbasket",
    "name": "Bigbasket",
    "category_name": "Grocery",
    "portals": [
      {
        "compositeId": "bigbasket_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹2000"
      },
      {
        "compositeId": "bigbasket_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bigbasket_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-bigbasket_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-bigbasket_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-bigbasket_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-bigbasket_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "blinkit",
    "name": "Blinkit Gift Card",
    "category_name": "Grocery",
    "portals": [
      {
        "compositeId": "blinkit_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹2000"
      },
      {
        "compositeId": "blinkit_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0.5,
        "site": "https://vouchwise.in/out/buy-blinkit_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-blinkit_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-blinkit_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bookmyshow",
    "name": "BookMyShow",
    "category_name": "Entertainment",
    "portals": [
      {
        "compositeId": "bookmyshow_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow_hdfc_smartbuy",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "bookmyshow_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bookmyshow_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow_axis_edgerewards",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "bookmyshow_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-bookmyshow_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bookmyshow_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "bookmyshow_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-bookmyshow_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bookmyshow_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cleartrip",
    "name": "Cleartrip",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "cleartrip_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.3,
        "site": "https://vouchwise.in/out/buy-cleartrip_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "cleartrip_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-cleartrip_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cleartrip_hotel",
    "name": "Cleartrip Hotel",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "cleartrip_hotel_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 11.9,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "cleartrip_hotel_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 16.5,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "costa_coffee",
    "name": "Costa Coffee",
    "category_name": "Restaurants",
    "portals": [
      {
        "compositeId": "costa_coffee_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-costa_coffee_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-costa_coffee_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "costa_coffee_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-costa_coffee_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-costa_coffee_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-costa_coffee_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa_coffee_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa_coffee_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "croma",
    "name": "Croma",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "croma_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹75000"
      },
      {
        "compositeId": "croma_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "croma_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "decathlon",
    "name": "Decathlon",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "decathlon_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-decathlon_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "decathlon_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-decathlon_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-decathlon_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-decathlon_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "dominos",
    "name": "Domino's",
    "category_name": "Restaurants",
    "portals": [
      {
        "compositeId": "dominos_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-dominos_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-dominos_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "dominos_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-dominos_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-dominos_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-dominos_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-dominos_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dominos_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "easemytrip",
    "name": "EaseMyTrip",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "easemytrip_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "easemytrip_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-easemytrip_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-easemytrip_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-easemytrip_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "easemytrip_holiday",
    "name": "EaseMyTrip Holiday",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "easemytrip_holiday_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.8,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "easemytrip_holiday_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "easemytrip_hotel",
    "name": "EaseMyTrip Hotel",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "easemytrip_hotel_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotel_hdfc_smartbuy",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hotel_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.1,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotel_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "easemytrip_hotel_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 13.5,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotel_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hotel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotel_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hotel_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotel_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hotel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotel_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hotel_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotel_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fabindia",
    "name": "Fabindia",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "fabindia_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fabindia_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "fabindia_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fabindia_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "fabindia_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "fabindia_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "fabindia_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ferns_n_petals",
    "name": "Ferns N Petals",
    "category_name": "Gifting",
    "portals": [
      {
        "compositeId": "ferns_n_petals_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ferns_n_petals_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "flipkart_gift_card",
    "name": "Flipkart Gift Card",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "flipkart_gift_card_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart_gift_card_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹10000"
      },
      {
        "compositeId": "flipkart_gift_card_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart_gift_card_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "flipkart_gift_card_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart_gift_card_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_gift_card_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart_gift_card_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_gift_card_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart_gift_card_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_gift_card_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart_gift_card_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_gift_card_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart_gift_card_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "igp",
    "name": "IGP",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "igp_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-igp_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7.4,
        "site": "https://vouchwise.in/out/buy-igp_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "igp_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-igp_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-igp_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ikea",
    "name": "IKEA",
    "category_name": "Online / General",
    "portals": [
      {
        "compositeId": "ikea_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ikea_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.65,
        "site": "https://vouchwise.in/out/buy-ikea_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ikea_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ikea_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ikea_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-ikea_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-ikea_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ikea_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "itc_hotels",
    "name": "ITC Hotels",
    "category_name": "Luxury",
    "portals": [
      {
        "compositeId": "itc_hotels_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-itc_hotels_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-itc_hotels_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "itc_hotels_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-itc_hotels_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-itc_hotels_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-itc_hotels_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-itc_hotels_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-itc_hotels_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "jiohotstar",
    "name": "JioHotstar",
    "category_name": "Entertainment",
    "portals": [
      {
        "compositeId": "jiohotstar_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-jiohotstar_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-jiohotstar_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-jiohotstar_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-jiohotstar_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kfc",
    "name": "KFC",
    "category_name": "Restaurants",
    "portals": [
      {
        "compositeId": "kfc_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "kfc_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-kfc_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-kfc_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-kfc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-kfc_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "klook",
    "name": "Klook",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "klook_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-klook_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-klook_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-klook_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-klook_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lakme_salon",
    "name": "Lakme Salon",
    "category_name": "Beauty",
    "portals": [
      {
        "compositeId": "lakme_salon_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme_salon_hdfc_smartbuy",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "lakme_salon_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme_salon_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lakme_salon_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme_salon_axis_edgerewards",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "lakme_salon_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-lakme_salon_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lakme_salon_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme_salon_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "lakme_salon_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-lakme_salon_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lakme_salon_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme_salon_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lenskart",
    "name": "Lenskart",
    "category_name": "Online / General",
    "portals": [
      {
        "compositeId": "lenskart_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-lenskart_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.3,
        "site": "https://vouchwise.in/out/buy-lenskart_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lenskart_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lenskart_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-lenskart_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-lenskart_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-lenskart_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lenskart_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "levis",
    "name": "Levis",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "levis_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "levis_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-levis_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-levis_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lifestyle_offline",
    "name": "Lifestyle Offline",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "lifestyle_offline_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.3,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lifestyle_offline_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lifestyle_online",
    "name": "Lifestyle Online",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "lifestyle_online_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle_online_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-lifestyle_online_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lifestyle_online_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-lifestyle_online_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle_online_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-lifestyle_online_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-lifestyle_online_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle_online_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip",
    "name": "Makemytrip",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "makemytrip_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-makemytrip_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-makemytrip_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_holiday",
    "name": "Makemytrip Holiday",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "makemytrip_holiday_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_holiday_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 13.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_hotel",
    "name": "Makemytrip Hotel",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "makemytrip_hotel_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_hotel_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "manyavar",
    "name": "Manyavar",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "manyavar_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "manyavar_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-manyavar_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "marks_&_spencer",
    "name": "Marks & Spencer",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "marks_&_spencer_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-marks_&_spencer_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks_&_spencer_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8.25,
        "site": "https://vouchwise.in/out/buy-marks_&_spencer_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "marks_&_spencer_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-marks_&_spencer_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks_&_spencer_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-marks_&_spencer_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks_&_spencer_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-marks_&_spencer_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks_&_spencer_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-marks_&_spencer_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks_&_spencer_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-marks_&_spencer_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "max_fashion_online",
    "name": "Max Fashion Online",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "max_fashion_online_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max_fashion_online_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 4.4,
        "site": "https://vouchwise.in/out/buy-max_fashion_online_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "max_fashion_online_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-max_fashion_online_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-max_fashion_online_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-max_fashion_online_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-max_fashion_online_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max_fashion_online_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "max_fashion",
    "name": "Max Fashion",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "max_fashion_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max_fashion_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-max_fashion_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "max_fashion_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-max_fashion_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-max_fashion_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-max_fashion_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-max_fashion_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max_fashion_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "myntra",
    "name": "Myntra",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "myntra_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹10000"
      },
      {
        "compositeId": "myntra_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "myntra_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-myntra_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "netmeds",
    "name": "Netmeds",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "netmeds_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-netmeds_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-netmeds_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-netmeds_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nykaa",
    "name": "Nykaa",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "nykaa_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nykaa_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-nykaa_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nykaa_fashion",
    "name": "Nykaa Fashion",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "nykaa_fashion_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nykaa_fashion_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nykaa_man",
    "name": "Nykaa Man",
    "category_name": "Beauty",
    "portals": [
      {
        "compositeId": "nykaa_man_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_man_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_man_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nykaa_man_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa_man_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa_man_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa_man_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa_man_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_man_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ola",
    "name": "OLA Cabs",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "ola_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-ola_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ola_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-ola_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ola_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola_axis_edgerewards",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "ola_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "ola_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ola_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "ola_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pantaloons",
    "name": "Pantaloons",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "pantaloons_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pantaloons_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pantaloons_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-pantaloons_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pantaloons_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pantaloons_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pharmeasy",
    "name": "Pharmeasy",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "pharmeasy_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-pharmeasy_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pharmeasy_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "pharmeasy_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy_axis_edgerewards",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "pharmeasy_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "pharmeasy_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "pharmeasy_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "pharmeasy_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pizza_hut",
    "name": "Pizza Hut",
    "category_name": "Restaurants",
    "portals": [
      {
        "compositeId": "pizza_hut_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-pizza_hut_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pizza_hut_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pizza_hut_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-pizza_hut_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pizza_hut_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-pizza_hut_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-pizza_hut_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pizza_hut_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "puma",
    "name": "Puma",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "puma_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-puma_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-puma_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "puma_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-puma_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-puma_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-puma_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-puma_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-puma_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pvr",
    "name": "PVR",
    "category_name": "Entertainment",
    "portals": [
      {
        "compositeId": "pvr_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-pvr_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pvr_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pvr_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-pvr_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-pvr_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-pvr_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-pvr_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pvr_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_digital",
    "name": "Reliance Digital",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "reliance_digital_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_digital_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_digital_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_digital_axis_edgerewards",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_digital_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_digital_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_digital_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_digital_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_smart",
    "name": "Reliance Smart",
    "category_name": "Grocery",
    "portals": [
      {
        "compositeId": "reliance_smart_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_smart_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_smart_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "reliance_smart_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-reliance_smart_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_smart_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_smart_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance_smart_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_smart_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "shoppers_stop",
    "name": "Shoppers Stop",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "shoppers_stop_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-shoppers_stop_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers_stop_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "shoppers_stop_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-shoppers_stop_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-shoppers_stop_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers_stop_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-shoppers_stop_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers_stop_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "skechers",
    "name": "Skechers",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "skechers_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-skechers_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-skechers_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "skechers_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-skechers_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-skechers_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-skechers_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sonyliv",
    "name": "SonyLiv",
    "category_name": "Entertainment",
    "portals": [
      {
        "compositeId": "sonyliv_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-sonyliv_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-sonyliv_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-sonyliv_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "starbucks",
    "name": "Starbucks",
    "category_name": "Gifting",
    "portals": [
      {
        "compositeId": "starbucks_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-starbucks_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 4.2,
        "site": "https://vouchwise.in/out/buy-starbucks_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "starbucks_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-starbucks_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-starbucks_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-starbucks_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-starbucks_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-starbucks_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "subway",
    "name": "Subway",
    "category_name": "Dining",
    "portals": [
      {
        "compositeId": "subway_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-subway_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-subway_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "subway_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-subway_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-subway_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-subway_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-subway_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-subway_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "swiggy",
    "name": "Swiggy",
    "category_name": "Food",
    "portals": [
      {
        "compositeId": "swiggy_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "swiggy_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-swiggy_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-swiggy_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "taj_experiences",
    "name": "Taj Experiences",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "taj_experiences_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-taj_experiences_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.4,
        "site": "https://vouchwise.in/out/buy-taj_experiences_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "taj_experiences_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-taj_experiences_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-taj_experiences_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-taj_experiences_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-taj_experiences_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-taj_experiences_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tanishq_gold_jewellery",
    "name": "Tanishq Gold Jewellery",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "tanishq_gold_jewellery_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery_hdfc_smartbuy",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tata_cliq",
    "name": "Tata Cliq",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "tata_cliq_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata_cliq_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tata_cliq_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tata_cliq_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata_cliq_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tata_cliq_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata_cliq_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata_cliq_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata_cliq_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tata_cliq_luxury",
    "name": "Tata CliQ Luxury",
    "category_name": "Luxury",
    "portals": [
      {
        "compositeId": "tata_cliq_luxury_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tata_cliq_luxury_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "uber",
    "name": "Uber",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "uber_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "uber_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-uber_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-uber_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-uber_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-uber_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "vijay_sales",
    "name": "Vijay Sales",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "vijay_sales_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay_sales_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay_sales_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "vijay_sales_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay_sales_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay_sales_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay_sales_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay_sales_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay_sales_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "westside",
    "name": "Westside",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "westside_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "westside_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside_axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-westside_axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside_icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zepto",
    "name": "Zepto",
    "category_name": "Grocery",
    "portals": [
      {
        "compositeId": "zepto_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zepto_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "zepto_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto_axis_edgerewards",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "zepto_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto_amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zepto_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "zepto_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "zepto_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zomato",
    "name": "Zomato Gift Card",
    "category_name": "Grocery",
    "portals": [
      {
        "compositeId": "zomato_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato_hdfc_smartbuy",
        "availability": "available",
        "disclaimer": "Monthly Limit: ₹2000"
      },
      {
        "compositeId": "zomato_shopwise",
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato_shopwise",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato_axis_edgerewards",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato_amazon",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato_gyftr",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato_axis_grabdeals",
        "availability": "Not Available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato_icici_ishop",
        "availability": "Not Available",
        "disclaimer": ""
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
    id: 'hdfc_millennia',
    name: 'HDFC Millennia',
    rewardType: 'cashback',
    pointValue: 1,
    spendBlock: 100,
    pointsPerBlock: 1,       // 1% base rate
    portalMultipliers: {
      hdfc_smartbuy: 5,
      shopwise: 0,
      icici_ishop: 0,
      axis_edgerewards: 0,
      axis_grabdeals: 0,
      gyftr: 1,
      amazon: 5,
      default: 1
    },
    applyURL: 'https://vouchwise.in/out/apply-hdfc-millennia',
    applyStatus: 'direct',
    assumption_note: '5% CashPoints on SmartBuy & Amazon (named partners); 1% elsewhere. Cap: ₹1,000/month on 5% categories.'
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
    id: 'icici_coral',
    name: 'ICICI Coral',
    rewardType: 'points',
    pointValue: 0.25,
    spendBlock: 100,
    pointsPerBlock: 2,       // 2 RP per ₹100 = 0.5% base
    portalMultipliers: {
      hdfc_smartbuy: 0,
      shopwise: 0,
      icici_ishop: 6,
      axis_edgerewards: 0,
      axis_grabdeals: 0,
      gyftr: 1,
      amazon: 1,
      default: 1
    },
    applyURL: 'https://vouchwise.in/out/apply-icici-coral',
    applyStatus: 'direct',
    assumption_note: 'Assuming 1 Reward Point = ₹0.25 via standard catalog redemption. iShop gives 6x multiplier per ICICI portal tiers.'
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
  // Purple
  {
    id: 'sbi_phonepe_purple',
    name: 'SBI PhonePe Purple',
    rewardType: 'cashback',
    pointValue: 1,
    spendBlock: 100,
    pointsPerBlock: 1,       // 2 RP/₹100 on online = 2%
    portalMultipliers: {
      hdfc_smartbuy: 0,
      shopwise: 0,
      icici_ishop: 0,
      axis_edgerewards: 0,
      axis_grabdeals: 0,
      gyftr: 2,              // online rate applies
      amazon: 2,
      default: 1
    },
    applyURL: 'https://vouchwise.in/out/apply-sbi-phonepe-purple',
    applyStatus: 'direct',
    assumption_note: 'Online rate 2 RP/₹100 applied to portals. 1 RP = ₹1. Excludes fuel, rent, wallet top-ups.'
  },

  // Select Black
  {
    id: 'sbi_phonepe_black',
    name: 'SBI PhonePe Select Black',
    rewardType: 'cashback',
    pointValue: 1,
    spendBlock: 100,
    pointsPerBlock: 1,       // 5 RP/₹100 on online = 5%
    portalMultipliers: {
      hdfc_smartbuy: 0,
      shopwise: 0,
      icici_ishop: 0,
      axis_edgerewards: 0,
      axis_grabdeals: 0,
      gyftr: 5,              // confirmed 5% on Gyftr
      amazon: 5,
      default: 1
    },
    applyURL: 'https://vouchwise.in/out/apply-sbi-phonepe-black',
    applyStatus: 'direct',
    assumption_note: '5 RP/₹100 on online spends (including Gyftr, Amazon); 1 RP = ₹1. Monthly cap: 2,000 RP per category. Excludes fuel, rent, wallet top-ups.'
  },
  {
    id: 'onecard',
    name: 'OneCard',
    rewardType: 'points',
    pointValue: 0.10,
    spendBlock: 50,
    pointsPerBlock: 1,       // 1 RP per ₹50 = 0.2% base
    portalMultipliers: {
      hdfc_smartbuy: 0,
      shopwise: 0,
      icici_ishop: 0,
      axis_edgerewards: 0,
      axis_grabdeals: 0,
      gyftr: 1,
      amazon: 1,
      default: 1
    },
    applyURL: 'https://vouchwise.in/out/apply-onecard',
    applyStatus: 'direct',
    assumption_note: 'Base rate only (0.2%). The 5X on top-2 categories is dynamic and unpredictable — not modelled here. 1 RP = ₹0.10.'
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