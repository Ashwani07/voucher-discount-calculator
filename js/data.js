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
    amex_shopwise:    { value: 1, frozen: false }
  },
  Other: {
    // All bank-specific portals are frozen at 0 for "Other" — a card from an
    // unlisted bank cannot earn on HDFC/ICICI/Axis/Amex's own portals.
    hdfc_smartbuy:    { value: 0, frozen: true },
    icici_ishop:      { value: 0, frozen: true },
    axis_edgerewards: { value: 0, frozen: true },
    axis_grabdeals:   { value: 0, frozen: true },
    amex_shopwise:    { value: 0, frozen: true }
  }
};

// All bank-specific portal IDs (used to know which fields to freeze/unfreeze
// when a bank is NOT explicitly covered above, e.g. Other freezes all of these).
export const bankSpecificPortalIds = [
  'hdfc_smartbuy', 'icici_ishop', 'axis_edgerewards', 'axis_grabdeals', 'amex_shopwise'
];

export const portals = [
  { id: "hdfc_smartbuy", name: "HDFC SmartBuy", group: "hdfc_portal" },
  { id: "amex_shopwise", name: "Amex Shopwise", group: "amex_shopwise" },
  { id: "icici_ishop", name: "ICICI iShop", group: "ishop" },
  { id: "axis_edgerewards", name: "Axis EdgeRewards", group: "axis_portal" },
  { id: "axis_grabdeals", name: "Axis GrabDeals Woohoo", group: "axis_portal" },
  { id: "gyftr", name: "Gyftr", group: "gyftr" },
  { id: "amazon", name: "Amazon", group: "amazon" },
  { id: "woohoo", name: "Woohoo", group: "woohoo" },
  { id: "myntra", name: "Myntra", group: "hdfc_retailbuy" },
  { id: "nykaa", name: "Nykaa", group: "hdfc_retailbuy" },
  { id: "reliance_digital", name: "Reliance Digital", group: "hdfc_retailbuy" },
  { id: "marks_spencer", name: "Marks & Spencer", group: "hdfc_retailbuy" }
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
    "id": "adidas_kids",
    "name": "Adidas Kids",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "adidas_kids_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-adidas_kids-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_kids_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-adidas_kids-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "adidas_kids_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-adidas_kids-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_kids_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-adidas_kids-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_kids_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-adidas_kids-hdfc_smartbuy",
        "availability": "available",
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
        "compositeId": "air_india_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-air_india-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-air_india-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "air_india_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-air_india-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-air_india-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-air_india-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-air_india-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-air_india-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ajio",
    "name": "AJIO",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "ajio_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-ajio-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.25,
        "site": "https://www.vouchwise.in/out/buy-ajio-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ajio_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://www.vouchwise.in/out/buy-ajio-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-ajio-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-ajio-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-ajio-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-ajio-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon",
    "name": "Amazon",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "amazon_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://www.vouchwise.in/out/buy-amazon-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": -4.13,
        "site": "https://www.vouchwise.in/out/buy-amazon-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://www.vouchwise.in/out/buy-amazon-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_fresh",
    "name": "Amazon Fresh",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "amazon_fresh_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon_fresh-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon_fresh-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_fresh_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://www.vouchwise.in/out/buy-amazon_fresh-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon_fresh-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon_fresh-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon_fresh-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon_fresh-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_prime_membership",
    "name": "Amazon Prime Membership",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "amazon_prime_membership_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-amazon_prime_membership-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_prime_membership_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://www.vouchwise.in/out/buy-amazon_prime_membership-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-amazon_prime_membership-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-amazon_prime_membership-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon_prime_membership-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_prime_membership-12_months",
    "name": "Amazon Prime Membership-12 months",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "amazon_prime_membership-12_months_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15,
        "site": "https://www.vouchwise.in/out/buy-amazon_prime_membership-12_months-axis_grabdeals",
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
        "compositeId": "amazon_shopping_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon_shopping-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://www.vouchwise.in/out/buy-amazon_shopping-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_shopping_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon_shopping-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-amazon_shopping-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": -4.13,
        "site": "https://www.vouchwise.in/out/buy-amazon_shopping-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://www.vouchwise.in/out/buy-amazon_shopping-icici_ishop",
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
        "compositeId": "apollo_pharmacy_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-apollo_pharmacy-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-apollo_pharmacy-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "apollo_pharmacy_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://www.vouchwise.in/out/buy-apollo_pharmacy-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9.5,
        "site": "https://www.vouchwise.in/out/buy-apollo_pharmacy-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-apollo_pharmacy-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "barbeque_nation",
    "name": "Barbeque Nation",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "barbeque_nation_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-barbeque_nation-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://www.vouchwise.in/out/buy-barbeque_nation-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "barbeque_nation_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-barbeque_nation-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-barbeque_nation-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-barbeque_nation-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-barbeque_nation-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bath_and_body_works",
    "name": "Bath and Body Works",
    "category_name": "Beauty",
    "portals": [
      {
        "compositeId": "bath_and_body_works_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://www.vouchwise.in/out/buy-bath_and_body_works-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://www.vouchwise.in/out/buy-bath_and_body_works-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bath_and_body_works_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://www.vouchwise.in/out/buy-bath_and_body_works-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-bath_and_body_works-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-bath_and_body_works-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-bath_and_body_works-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bigbasket",
    "name": "BigBasket",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "bigbasket_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-bigbasket-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-bigbasket-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bigbasket_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://www.vouchwise.in/out/buy-bigbasket-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://www.vouchwise.in/out/buy-bigbasket-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-bigbasket-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-bigbasket-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-bigbasket-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "blinkit",
    "name": "Blinkit",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "blinkit_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://www.vouchwise.in/out/buy-blinkit-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0.5,
        "site": "https://www.vouchwise.in/out/buy-blinkit-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-blinkit-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-blinkit-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-blinkit-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-blinkit-icici_ishop",
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
        "compositeId": "bookmyshow_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://www.vouchwise.in/out/buy-bookmyshow-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bookmyshow_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-bookmyshow-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bookmyshow_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-bookmyshow-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bookmyshow_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-bookmyshow-icici_ishop",
        "availability": "available",
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
        "compositeId": "cleartrip_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-cleartrip-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.3,
        "site": "https://www.vouchwise.in/out/buy-cleartrip-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "cleartrip_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-cleartrip-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-cleartrip-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-cleartrip-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-cleartrip-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-cleartrip-icici_ishop",
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
        "compositeId": "cleartrip_hotel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 15,
        "site": "https://www.vouchwise.in/out/buy-cleartrip_hotel-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 11.9,
        "site": "https://www.vouchwise.in/out/buy-cleartrip_hotel-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "cleartrip_hotel_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 16.5,
        "site": "https://www.vouchwise.in/out/buy-cleartrip_hotel-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 16,
        "site": "https://www.vouchwise.in/out/buy-cleartrip_hotel-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://www.vouchwise.in/out/buy-cleartrip_hotel-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-cleartrip_hotel-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-cleartrip_hotel-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "costa_coffee",
    "name": "Costa Coffee",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "costa_coffee_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-costa_coffee-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-costa_coffee-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-costa_coffee-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-costa_coffee-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-costa_coffee-icici_ishop",
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
        "compositeId": "croma_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-croma-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-croma-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "croma_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-croma-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-croma-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-croma-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-croma-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-croma-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "decathlon",
    "name": "Decathlon",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "decathlon_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://www.vouchwise.in/out/buy-decathlon-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-decathlon-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "decathlon_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://www.vouchwise.in/out/buy-decathlon-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://www.vouchwise.in/out/buy-decathlon-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-decathlon-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-decathlon-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "dominos",
    "name": "DOMINOs",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "dominos_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://www.vouchwise.in/out/buy-dominos-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 9,
        "site": "https://www.vouchwise.in/out/buy-dominos-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "dominos_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://www.vouchwise.in/out/buy-dominos-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://www.vouchwise.in/out/buy-dominos-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://www.vouchwise.in/out/buy-dominos-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-dominos-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-dominos-icici_ishop",
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
        "compositeId": "easemytrip_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-easemytrip-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-easemytrip-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "easemytrip_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-easemytrip-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-easemytrip-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-easemytrip-icici_ishop",
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
        "compositeId": "easemytrip_holiday_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-easemytrip_holiday-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.8,
        "site": "https://www.vouchwise.in/out/buy-easemytrip_holiday-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "easemytrip_holiday_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://www.vouchwise.in/out/buy-easemytrip_holiday-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://www.vouchwise.in/out/buy-easemytrip_holiday-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-easemytrip_holiday-hdfc_smartbuy",
        "availability": "available",
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
        "compositeId": "easemytrip_hotel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://www.vouchwise.in/out/buy-easemytrip_hotel-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hotel_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.1,
        "site": "https://www.vouchwise.in/out/buy-easemytrip_hotel-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "easemytrip_hotel_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 13.5,
        "site": "https://www.vouchwise.in/out/buy-easemytrip_hotel-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hotel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-easemytrip_hotel-axis_grabdeals",
        "availability": "available",
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
        "site": "https://www.vouchwise.in/out/buy-fabindia-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fabindia_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-fabindia-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ferns_n_petals",
    "name": "Ferns N Petals",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "ferns_n_petals_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-ferns_n_petals-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ferns_n_petals_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://www.vouchwise.in/out/buy-ferns_n_petals-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://www.vouchwise.in/out/buy-ferns_n_petals-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-ferns_n_petals-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-ferns_n_petals-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "flipkart_gift_card",
    "name": "Flipkart Gift Card",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "flipkart_gift_card_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-flipkart_gift_card-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "flipkart_gift_card_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-flipkart_gift_card-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_gift_card_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-flipkart_gift_card-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_gift_card_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-flipkart_gift_card-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_gift_card_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-flipkart_gift_card-icici_ishop",
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
        "compositeId": "igp_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7.4,
        "site": "https://www.vouchwise.in/out/buy-igp-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "igp_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://www.vouchwise.in/out/buy-igp-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://www.vouchwise.in/out/buy-igp-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-igp-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-igp-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ikea",
    "name": "IKEA",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "ikea_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-ikea-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.65,
        "site": "https://www.vouchwise.in/out/buy-ikea-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ikea_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-ikea-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://www.vouchwise.in/out/buy-ikea-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-ikea-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-ikea-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-ikea-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "itc_hotels",
    "name": "ITC Hotels",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "itc_hotels_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-itc_hotels-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-itc_hotels-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "itc_hotels_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://www.vouchwise.in/out/buy-itc_hotels-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-itc_hotels-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-itc_hotels-icici_ishop",
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
        "compositeId": "jiohotstar_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-jiohotstar-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-jiohotstar-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-jiohotstar-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-jiohotstar-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kfc",
    "name": "KFC",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "kfc_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-kfc-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-kfc-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "kfc_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-kfc-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://www.vouchwise.in/out/buy-kfc-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://www.vouchwise.in/out/buy-kfc-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-kfc-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-kfc-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "klook",
    "name": "Klook",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "klook_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-klook-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-klook-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6.5,
        "site": "https://www.vouchwise.in/out/buy-klook-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-klook-hdfc_smartbuy",
        "availability": "available",
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
        "compositeId": "lakme_salon_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-lakme_salon-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lakme_salon_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-lakme_salon-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lakme_salon_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-lakme_salon-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lakme_salon_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-lakme_salon-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lenskart",
    "name": "LENSKART",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "lenskart_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-lenskart-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.3,
        "site": "https://www.vouchwise.in/out/buy-lenskart-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lenskart_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://www.vouchwise.in/out/buy-lenskart-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-lenskart-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-lenskart-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-lenskart-icici_ishop",
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
        "compositeId": "levis_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-levis-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-levis-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "levis_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-levis-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-levis-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-levis-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-levis-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-levis-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lifestyle",
    "name": "Lifestyle",
    "category_name": "Fashion",
    "portals": [
      {
        "compositeId": "lifestyle_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://www.vouchwise.in/out/buy-lifestyle-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.3,
        "site": "https://www.vouchwise.in/out/buy-lifestyle-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lifestyle_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://www.vouchwise.in/out/buy-lifestyle-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-lifestyle-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://www.vouchwise.in/out/buy-lifestyle-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-lifestyle-hdfc_smartbuy",
        "availability": "available",
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
        "compositeId": "lifestyle_online_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://www.vouchwise.in/out/buy-lifestyle_online-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.5,
        "site": "https://www.vouchwise.in/out/buy-lifestyle_online-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lifestyle_online_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://www.vouchwise.in/out/buy-lifestyle_online-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-lifestyle_online-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-lifestyle_online-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-lifestyle_online-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip",
    "name": "MakeMyTrip",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "makemytrip_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-makemytrip-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-makemytrip-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5.5,
        "site": "https://www.vouchwise.in/out/buy-makemytrip-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://www.vouchwise.in/out/buy-makemytrip-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-makemytrip-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-makemytrip-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-makemytrip-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_bus",
    "name": "MakeMyTrip Bus",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "makemytrip_bus_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_bus-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_cab",
    "name": "MakeMyTrip Cab",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "makemytrip_cab_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_cab-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_holiday",
    "name": "MakeMyTrip Holiday",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "makemytrip_holiday_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_holiday-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_holiday-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_holiday_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_holiday-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 13.5,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_holiday-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11.5,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_holiday-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_holiday-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_holiday-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_hotel",
    "name": "MakeMyTrip Hotel",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "makemytrip_hotel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_hotel-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_hotel-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_hotel_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_hotel-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_hotel-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_hotel-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_hotel-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_hotel-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_rail",
    "name": "MakeMyTrip Rail",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "makemytrip_rail_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-makemytrip_rail-axis_grabdeals",
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
        "compositeId": "manyavar_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-manyavar-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-manyavar-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "manyavar_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-manyavar-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-manyavar-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "marks_&_spencer",
    "name": "Marks & Spencer",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "marks_&_spencer_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-marks_&_spencer-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks_&_spencer_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.25,
        "site": "https://www.vouchwise.in/out/buy-marks_&_spencer-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "marks_&_spencer_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://www.vouchwise.in/out/buy-marks_&_spencer-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks_&_spencer_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://www.vouchwise.in/out/buy-marks_&_spencer-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks_&_spencer_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://www.vouchwise.in/out/buy-marks_&_spencer-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks_&_spencer_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-marks_&_spencer-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks_&_spencer_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-marks_&_spencer-icici_ishop",
        "availability": "available",
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
        "compositeId": "max_fashion_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-max_fashion-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://www.vouchwise.in/out/buy-max_fashion-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "max_fashion_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://www.vouchwise.in/out/buy-max_fashion-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://www.vouchwise.in/out/buy-max_fashion-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://www.vouchwise.in/out/buy-max_fashion-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-max_fashion-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-max_fashion-hdfc_smartbuy",
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
        "compositeId": "max_fashion_online_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-max_fashion_online-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 4.4,
        "site": "https://www.vouchwise.in/out/buy-max_fashion_online-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "max_fashion_online_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://www.vouchwise.in/out/buy-max_fashion_online-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-max_fashion_online-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-max_fashion_online-hdfc_smartbuy",
        "availability": "available",
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
        "compositeId": "myntra_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://www.vouchwise.in/out/buy-myntra-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-myntra-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "myntra_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2,
        "site": "https://www.vouchwise.in/out/buy-myntra-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-myntra-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://www.vouchwise.in/out/buy-myntra-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-myntra-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-myntra-icici_ishop",
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
        "compositeId": "netmeds_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://www.vouchwise.in/out/buy-netmeds-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-netmeds-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-netmeds-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nykaa",
    "name": "Nykaa",
    "category_name": "Beauty",
    "portals": [
      {
        "compositeId": "nykaa_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-nykaa-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-nykaa-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nykaa_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://www.vouchwise.in/out/buy-nykaa-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://www.vouchwise.in/out/buy-nykaa-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-nykaa-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-nykaa-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-nykaa-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nykaa_fashion",
    "name": "Nykaa Fashion",
    "category_name": "Beauty",
    "portals": [
      {
        "compositeId": "nykaa_fashion_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-nykaa_fashion-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-nykaa_fashion-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nykaa_fashion_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://www.vouchwise.in/out/buy-nykaa_fashion-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://www.vouchwise.in/out/buy-nykaa_fashion-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-nykaa_fashion-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-nykaa_fashion-hdfc_smartbuy",
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
        "compositeId": "nykaa_man_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-nykaa_man-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-nykaa_man-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nykaa_man_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://www.vouchwise.in/out/buy-nykaa_man-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-nykaa_man-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-nykaa_man-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-nykaa_man-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ola_cabs",
    "name": "OLA CABS",
    "category_name": "Travel",
    "portals": [
      {
        "compositeId": "ola_cabs_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://www.vouchwise.in/out/buy-ola_cabs-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ola_cabs_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-ola_cabs-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ola_cabs_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-ola_cabs-hdfc_smartbuy",
        "availability": "available",
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
        "compositeId": "pantaloons_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-pantaloons-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-pantaloons-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pantaloons_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://www.vouchwise.in/out/buy-pantaloons-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-pantaloons-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-pantaloons-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-pantaloons-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-pantaloons-icici_ishop",
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
        "site": "https://www.vouchwise.in/out/buy-pharmeasy-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pizza_hut",
    "name": "Pizza Hut",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "pizza_hut_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-pizza_hut-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-pizza_hut-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pizza_hut_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://www.vouchwise.in/out/buy-pizza_hut-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://www.vouchwise.in/out/buy-pizza_hut-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://www.vouchwise.in/out/buy-pizza_hut-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-pizza_hut-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-pizza_hut-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "puma",
    "name": "Puma",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "puma_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-puma-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://www.vouchwise.in/out/buy-puma-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "puma_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-puma-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-puma-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-puma-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pvr_cinemas",
    "name": "PVR Cinemas",
    "category_name": "Entertainment",
    "portals": [
      {
        "compositeId": "pvr_cinemas_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 20,
        "site": "https://www.vouchwise.in/out/buy-pvr_cinemas-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_cinemas_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-pvr_cinemas-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pvr_cinemas_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://www.vouchwise.in/out/buy-pvr_cinemas-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_cinemas_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15.5,
        "site": "https://www.vouchwise.in/out/buy-pvr_cinemas-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_cinemas_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://www.vouchwise.in/out/buy-pvr_cinemas-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_cinemas_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-pvr_cinemas-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_cinemas_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-pvr_cinemas-icici_ishop",
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
        "compositeId": "reliance_digital_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-reliance_digital-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-reliance_digital-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-reliance_digital-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_smart",
    "name": "Reliance Smart",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "reliance_smart_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-reliance_smart-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "reliance_smart_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-reliance_smart-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-reliance_smart-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-reliance_smart-hdfc_smartbuy",
        "availability": "available",
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
        "compositeId": "shoppers_stop_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://www.vouchwise.in/out/buy-shoppers_stop-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-shoppers_stop-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "shoppers_stop_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-shoppers_stop-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7,
        "site": "https://www.vouchwise.in/out/buy-shoppers_stop-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-shoppers_stop-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-shoppers_stop-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-shoppers_stop-icici_ishop",
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
        "compositeId": "skechers_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://www.vouchwise.in/out/buy-skechers-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://www.vouchwise.in/out/buy-skechers-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "skechers_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-skechers-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-skechers-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-skechers-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-skechers-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-skechers-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sonyliv",
    "name": "SonyLiv",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "sonyliv_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 20,
        "site": "https://www.vouchwise.in/out/buy-sonyliv-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://www.vouchwise.in/out/buy-sonyliv-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 20,
        "site": "https://www.vouchwise.in/out/buy-sonyliv-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "starbucks",
    "name": "Starbucks",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "starbucks_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-starbucks-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 4.2,
        "site": "https://www.vouchwise.in/out/buy-starbucks-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "starbucks_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-starbucks-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://www.vouchwise.in/out/buy-starbucks-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-starbucks-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-starbucks-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-starbucks-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "subway",
    "name": "Subway",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "subway_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-subway-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://www.vouchwise.in/out/buy-subway-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "subway_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-subway-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://www.vouchwise.in/out/buy-subway-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-subway-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-subway-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-subway-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "swiggy",
    "name": "Swiggy",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "swiggy_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-swiggy-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "swiggy_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-swiggy-icici_ishop",
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
        "compositeId": "taj_experiences_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://www.vouchwise.in/out/buy-taj_experiences-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.4,
        "site": "https://www.vouchwise.in/out/buy-taj_experiences-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "taj_experiences_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-taj_experiences-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://www.vouchwise.in/out/buy-taj_experiences-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-taj_experiences-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tanishq_gold_jewellery",
    "name": "Tanishq Gold Jewellery",
    "category_name": "Jewellery",
    "portals": [
      {
        "compositeId": "tanishq_gold_jewellery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-tanishq_gold_jewellery-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-tanishq_gold_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-tanishq_gold_jewellery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-tanishq_gold_jewellery-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tata_cliq",
    "name": "Tata Cliq",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "tata_cliq_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tata_cliq_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tata_cliq_luxury",
    "name": "Tata CliQ Luxury",
    "category_name": "E-Commerce",
    "portals": [
      {
        "compositeId": "tata_cliq_luxury_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq_luxury-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq_luxury-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tata_cliq_luxury_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq_luxury-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq_luxury-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7.5,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq_luxury-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq_luxury-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-tata_cliq_luxury-icici_ishop",
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
        "compositeId": "uber_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://www.vouchwise.in/out/buy-uber-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-uber-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "uber_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://www.vouchwise.in/out/buy-uber-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://www.vouchwise.in/out/buy-uber-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-uber-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-uber-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-uber-icici_ishop",
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
        "compositeId": "vijay_sales_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-vijay_sales-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-vijay_sales-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "vijay_sales_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-vijay_sales-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-vijay_sales-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://www.vouchwise.in/out/buy-vijay_sales-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-vijay_sales-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-vijay_sales-icici_ishop",
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
        "compositeId": "westside_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-westside-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-westside-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "westside_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-westside-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-westside-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-westside-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-westside-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zepto",
    "name": "Zepto",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "zepto_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-zepto-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zomato",
    "name": "Zomato",
    "category_name": "Food & Dining",
    "portals": [
      {
        "compositeId": "zomato_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-zomato-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0.5,
        "site": "https://www.vouchwise.in/out/buy-zomato-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 0,
        "site": "https://www.vouchwise.in/out/buy-zomato-hdfc_smartbuy",
        "availability": "available",
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
    "pointValue": "0.33",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "3",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-platinum-reserve",
    "applyStatus": "referral",
    "assumption_note": "Assuming 1 MR Point = ₹0.33 based on standard catalog yield."
  },
  {
    "id": "amex_platinum_travel",
    "name": "Amex Platinum Travel",
    "rewardType": "points",
    "pointValue": "0.33",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "3",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1",
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-platinum-travel",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 MR Point = ₹0.33; optimal value unlocked at milestone spends.",
  },
  {
    "id": "amex_mrcc",
    "name": "Amex MRCC",
    "rewardType": "points",
    "pointValue": "0.33",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "2",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-mrcc",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 MR Point = ₹0.33 based on 24K Gold Collection redemption.",
  },
  {
    "id": "amex_gold",
    "name": "Amex Gold",
    "rewardType": "points",
    "pointValue": "0.33",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "5",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-gold",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 MR Point = ₹0.33 based on 24K Gold Collection redemption.",
  },
  {
    "id": "axis_magnus_burgundy",
    "name": "Axis Magnus Burgundy",
    "rewardType": "points",
    "pointValue": "0.8",
    "spendBlock": "200",
    "pointsPerBlock": "12",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "1",
      "axis_grabdeals": "1",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-magnus-burgundy",
    "applyStatus": "referral",
    "assumption_note": "Assuming 5 Edge Rewards = 4 Air Miles = ₹4.00 (₹0.80 per point).",
  },
  {
    "id": "axis_magnus",
    "name": "Axis Magnus",
    "rewardType": "points",
    "pointValue": "0.4",
    "spendBlock": "200",
    "pointsPerBlock": "12",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "1",
      "axis_grabdeals": "1",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-magnus",
    "applyStatus": "referral",
    "assumption_note": "Assuming 5 Edge Rewards = 2 Air Miles = ₹2.00 (₹0.40 per point).",
  },
  {
    "id": "axis_atlas",
    "name": "Axis Atlas",
    "rewardType": "points",
    "pointValue": "2",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "1",
      "axis_grabdeals": "1",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-atlas",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 Edge Mile = 2 Partner Miles = ₹2.00.",
    "direct_reward_note": ""
  },
  {
    "id": "axis_horizon",
    "name": "Axis Horizon",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "1",
      "axis_grabdeals": "1",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-horizon",
    "applyStatus": "referral",
    "assumption_note": "Assuming 1 Edge Reward = 1 Partner Mile = ₹1.00.",
  },
  {
    "id": "hdfc_infinia",
    "name": "HDFC Infinia",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "150",
    "pointsPerBlock": "5",
    "portalMultipliers": {
      "hdfc_smartbuy": "5",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1",
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-infinia",
    "applyStatus": "invite_only",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via SmartBuy travel redemption.",
  },
  {
    "id": "hdfc_dbm",
    "name": "HDFC Diners Black Metal",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "150",
    "pointsPerBlock": "5",
    "portalMultipliers": {
      "hdfc_smartbuy": "3",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1",
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-dbm",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via SmartBuy travel redemption.",
  },
  {
    "id": "hdfc_regalia_gold",
    "name": "HDFC Regalia Gold",
    "rewardType": "points",
    "pointValue": "0.5",
    "spendBlock": "200",
    "pointsPerBlock": "5",
    "portalMultipliers": {
      "hdfc_smartbuy": "5",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1",
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-regalia-gold",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.50 via SmartBuy travel redemption.",
  },
  {
    "id": "hdfc_swiggy",
    "name": "HDFC Swiggy",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "5",
    "portalMultipliers": {
      "hdfc_smartbuy": "1",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "0",
      "amazon": "0",
      "default": "0"
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-swiggy",
    "applyStatus": "direct",
    "assumption_note": "Direct statement cashback; no valuation assumption required.",
  },
  {
    "id": "hsbc_premier",
    "name": "HSBC Premier",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "3",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-premier",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = 1 Air Mile = ₹1.00.",
  },
  {
    "id": "hsbc_travelone",
    "name": "HSBC Travel One",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-travelone",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = 1 Air Mile = ₹1.00.",
  },
  {
    "id": "hsbc_liveplus",
    "name": "HSBC Live+",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1.5",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-liveplus",
    "applyStatus": "direct",
    "assumption_note": "Direct statement cashback; no valuation assumption required.",
  },
  {
    "id": "hsbc_visaplatinum",
    "name": "HSBC Visa Platinum",
    "rewardType": "points",
    "pointValue": "0.5",
    "spendBlock": "150",
    "pointsPerBlock": "2",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-visaplatinum",
    "applyStatus": "direct",
    "assumption_note": "Assuming 2 Reward Point = 1 Air Mile = ₹0.50.",
  },
  {
    "id": "icici_epm",
    "name": "ICICI Emeralde Private Metal",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "200",
    "pointsPerBlock": "6",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "6",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-epm",
    "applyStatus": "invite_only",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via in-app redemption.",
  },
  {
    "id": "icici_times",
    "name": "ICICI Times Black",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "6",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-times",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via in-app redemption.",
  },
  {
    "id": "icici_emeralde",
    "name": "ICICI Emeralde",
    "rewardType": "points",
    "pointValue": "0.25",
    "spendBlock": "100",
    "pointsPerBlock": "4",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "6",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-emeralde",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.25 via standard catalog redemption. iShop gives 6x multiplier per ICICI portal tiers.",
  },
  {
    "id": "icici_sapphiro",
    "name": "ICICI Sapphiro",
    "rewardType": "points",
    "pointValue": "0.25",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "6",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-sapphiro",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.25 via standard catalog redemption. iShop gives 6x multiplier per ICICI portal tiers.",
  },
  {
    "id": "icici_amazon",
    "name": "ICICI Amazon",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "4",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "0",
      "amazon": "5",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-amazon",
    "applyStatus": "direct",
    "assumption_note": "Direct Amazon Pay balance cashback; no valuation assumption required.",
  },
  {
    "id": "sbi_cashback",
    "name": "SBI Cashback",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "0",
      "amazon": "5",
      "default": "5"
    },
    "applyURL": "https://vouchwise.in/out/apply-sbi-cashback",
    "applyStatus": "direct",
    "assumption_note": "Direct statement cashback; no valuation assumption required.",
  },
  {
    "id": "scapia",
    "name": "Scapia",
    "rewardType": "points",
    "pointValue": "0.2",
    "spendBlock": "20",
    "pointsPerBlock": "2",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-scapia",
    "applyStatus": "referral",
    "assumption_note": "Assuming 5 Scapia coins = ₹1.00 (₹0.20 per coin) via in-app travel booking.",
  },
  {
    "id": "kotak_airplus",
    "name": "Kotak Air+",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-kotak-airplus",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Mile = ₹1 (Kotak Unbox) or 1:1 Air India",
  },
  {
    "id": "kotak_solitare",
    "name": "Kotak Solitare",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "3",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-kotak-solitare",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Mile = ₹1 (Kotak Unbox) or 1:1 Air India",
  },
  {
    "id": "hdfc_millennia",
    "name": "HDFC Millennia",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "5",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "5",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-millennia",
    "applyStatus": "direct",
    "assumption_note": "5% CashPoints on SmartBuy & Amazon (named partners); 1% elsewhere. Cap: ₹1,000/month on 5% categories.",
  },
  {
    "id": "icici_coral",
    "name": "ICICI Coral",
    "rewardType": "points",
    "pointValue": "0.25",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "6",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-coral",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.25 via standard catalog redemption. iShop gives 6x multiplier per ICICI portal tiers.",
  },
  {
    "id": "onecard",
    "name": "OneCard",
    "rewardType": "points",
    "pointValue": "0.1",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-onecard",
    "applyStatus": "direct",
    "assumption_note": "Base rate only (0.2%). The 5X on top-2 categories is dynamic and unpredictable — not modelled here. 1 RP = ₹0.10.",
  },
  {
    "id": "sbi_phonepe_purple",
    "name": "SBI PhonePe Purple",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "2",
      "amazon": "2",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-sbi-phonepe-purple",
    "applyStatus": "direct",
    "assumption_note": "Online rate 2 RP/₹100 applied to portals. 1 RP = ₹1. Excludes fuel, rent, wallet top-ups.",
  },
  {
    "id": "sbi_phonepe_black",
    "name": "SBI PhonePe Select Black",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "5",
      "amazon": "5",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-sbi-phonepe-black",
    "applyStatus": "direct",
    "assumption_note": "5 RP/₹100 on online spends (including Gyftr, Amazon); 1 RP = ₹1. Monthly cap: 2,000 RP per category. Excludes fuel, rent, wallet top-ups.",
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