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
    hdfc_smartbuy:    { value: 5, frozen: false }
  },
  ICICI: {
    icici_ishop:      { value: 6, frozen: false }
  },
  Axis: {
    axis_edgerewards: { value: 1, frozen: false },
    axis_grabdeals:   { value: 1, frozen: false }
  },
  SBI: {
    // No established base rate yet (unlike HDFC/ICICI/Axis, which had real
    // prior data) — 1x is a placeholder starting point, same treatment as
    // Amex's "varies per card" default. Verify against an actual SBI card's
    // T&Cs before trusting this number in a calculation.
    sbi_gyftr:        { value: 1, frozen: false }
  },
  HSBC: {
    // Same caveat as SBI above — placeholder, not a verified rate.
    hsbc_gyftr:       { value: 1, frozen: false }
  },
  Amex: {
    amex_shopwise:    { value: 1, frozen: false }
  },
  Other: {
    // All bank-specific portals are frozen at 0 for "Other" — a card from an
    // unlisted bank cannot earn on HDFC/ICICI/Axis/SBI/HSBC/Amex's own portals.
    hdfc_smartbuy:    { value: 0, frozen: true },
    icici_ishop:      { value: 0, frozen: true },
    axis_edgerewards: { value: 0, frozen: true },
    axis_grabdeals:   { value: 0, frozen: true },
    sbi_gyftr:        { value: 0, frozen: true },
    hsbc_gyftr:       { value: 0, frozen: true },
    amex_shopwise:    { value: 0, frozen: true }
  }
};

// All bank-specific portal IDs (used to know which fields to freeze/unfreeze
// when a bank is NOT explicitly covered above, e.g. Other freezes all of these).
export const bankSpecificPortalIds = [
  'hdfc_smartbuy', 'icici_ishop', 'axis_edgerewards', 'axis_grabdeals', 'sbi_gyftr', 'hsbc_gyftr', 'amex_shopwise'
];

export const portals = [
  { id: "hdfc_smartbuy", name: "HDFC SmartBuy", group: "hdfc_portal" },
  { id: "amex_shopwise", name: "Amex Shopwise", group: "amex_shopwise" },
  { id: "icici_ishop", name: "ICICI iShop", group: "ishop" },
  { id: "axis_edgerewards", name: "Axis EdgeRewards", group: "axis_portal" },
  { id: "axis_grabdeals", name: "Axis GrabDeals Woohoo", group: "axis_portal" },
  { id: "sbi_gyftr", name: "SBI Gyftr", group: "sbi_gyftr" },
  { id: "hsbc_gyftr", name: "HSBC Gyftr", group: "hsbc_gyftr" },
  { id: "maximize_money", name: "Maximize Money", group: "maximize_money" },
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
// https://ishoprewards.com/shopping-vouchers

// <<BRANDS_START>>
export const masterBrands = [
  {
    "id": "abraham__thakore_luxe_gift_card",
    "name": "Abraham & Thakore- Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "abraham__thakore_luxe_gift_card_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-abraham__thakore_luxe_gift_card-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "abraham__thakore_luxe_gift_card_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-abraham__thakore_luxe_gift_card-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "abraham__thakore_luxe_gift_card_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-abraham__thakore_luxe_gift_card-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "abraham__thakore_luxe_gift_card_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-abraham__thakore_luxe_gift_card-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "absolute_barbecues_custom",
    "name": "Absolute Barbecues (Custom)",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "absolute_barbecues_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-absolute_barbecues_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "absolute_barbeque",
    "name": "Absolute Barbeque",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "absolute_barbeque_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-absolute_barbeque-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "absolute_barbeque_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-absolute_barbeque-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "absolute_barbeque_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-absolute_barbeque-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "absolute_barbeque_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-absolute_barbeque-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "absolute_barbeque_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-absolute_barbeque-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "absolute_barbeque_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-absolute_barbeque-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "absolute_barbeque_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-absolute_barbeque-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "absolute_barbeque_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-absolute_barbeque-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "absolute_barbeque_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-absolute_barbeque-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "absolute_barbeque_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-absolute_barbeque-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "adani_meet_and_greet",
    "name": "Adani Meet and Greet",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "adani_meet_and_greet_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adani_meet_and_greet-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "adidas_kids",
    "name": "Adidas Kids-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "adidas_kids_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas_kids-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_kids_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-adidas_kids-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "adidas_kids_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas_kids-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_kids_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas_kids-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_kids_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-adidas_kids-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adidas_kids_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-adidas_kids-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "adventra",
    "name": "Adventra",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "adventra_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-adventra-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adventra_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-adventra-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adventra_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adventra-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "adventra_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-adventra-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "aeropostalebagline",
    "name": "Aeropostale - Bagline",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "aeropostalebagline_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-aeropostalebagline-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "aeropostalebagline_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-aeropostalebagline-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aeropostalebagline_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-aeropostalebagline-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "air_india",
    "name": "Air India",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "air_india_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-air_india-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air_india-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "air_india_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-air_india-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-air_india-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-air_india-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-air_india-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-air_india-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air_india-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.26,
        "site": "https://vouchwise.in/out/buy-air_india-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-air_india-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "air_india_10000",
    "name": "Air India 10000",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "air_india_10000_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-air_india_10000-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "air_india_addons",
    "name": "Air India Add-ons",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "air_india_addons_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-air_india_addons-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "air_india_ancillary",
    "name": "Air India Ancillary",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "air_india_ancillary_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 24.5,
        "site": "https://vouchwise.in/out/buy-air_india_ancillary-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "air_india_ancillary_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 16.01,
        "site": "https://vouchwise.in/out/buy-air_india_ancillary-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "air_india_domestic_gift_card",
    "name": "Air India Domestic Gift Card",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "air_india_domestic_gift_card_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-air_india_domestic_gift_card-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "air_india_fly_rajasthan",
    "name": "Air India Fly Rajasthan",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "air_india_fly_rajasthan_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-air_india_fly_rajasthan-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "airtel_xstream",
    "name": "Airtel Xstream",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "airtel_xstream_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-airtel_xstream-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ajio",
    "name": "AJIO",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "ajio_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-ajio-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.25,
        "site": "https://vouchwise.in/out/buy-ajio-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ajio_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-ajio-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-ajio-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-ajio-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ajio-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.01,
        "site": "https://vouchwise.in/out/buy-ajio-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-ajio-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ajio_luxe",
    "name": "Ajio Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "ajio_luxe_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-ajio_luxe-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ajio_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ajio_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-ajio_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_luxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-ajio_luxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-ajio_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-ajio_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_luxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-ajio_luxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_luxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.01,
        "site": "https://vouchwise.in/out/buy-ajio_luxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ajio_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-ajio_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "akokluxe",
    "name": "Akok-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "akokluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-akokluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "aldo",
    "name": "Aldo",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "aldo_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-aldo-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aldo_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-aldo-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "aldo_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-aldo-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aldo_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-aldo-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aldo_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-aldo-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aldo_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-aldo-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aldo_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-aldo-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aldo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-aldo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aldo_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-aldo-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "aliste",
    "name": "Aliste",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "aliste_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-aliste-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aliste_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 27.5,
        "site": "https://vouchwise.in/out/buy-aliste-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "aliste_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 32.5,
        "site": "https://vouchwise.in/out/buy-aliste-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aliste_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-aliste-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aliste_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-aliste-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aliste_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-aliste-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aliste_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-aliste-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aliste_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-aliste-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "allen_solly",
    "name": "Allen Solly",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "allen_solly_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-allen_solly-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "allen_solly_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.75,
        "site": "https://vouchwise.in/out/buy-allen_solly-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "allen_solly_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-allen_solly-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "allen_solly_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-allen_solly-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "allen_solly_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-allen_solly-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "allen_solly_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-allen_solly-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "allen_solly_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-allen_solly-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "allen_solly_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-allen_solly-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "allen_solly_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-allen_solly-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_fresh",
    "name": "Amazon Fresh",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "amazon_fresh_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_fresh_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-amazon_fresh-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-amazon_fresh-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-amazon_fresh-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-amazon_fresh-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-amazon_fresh-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_fresh_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_fresh-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_pay",
    "name": "Amazon Pay",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "amazon_pay_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_pay-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_pay_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon_pay-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_pay_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_pay-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_pay_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_pay-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_pay_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_pay-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_pay_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon_pay-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_pay_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_pay-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_pay_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_pay-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_prime_lite_edition",
    "name": "Amazon Prime Lite Edition",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "amazon_prime_lite_edition_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon_prime_lite_edition-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_prime_lite_edition_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-amazon_prime_lite_edition-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_lite_edition_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_prime_lite_edition-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_lite_edition_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 13.01,
        "site": "https://vouchwise.in/out/buy-amazon_prime_lite_edition-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_prime_membership",
    "name": "Amazon Prime Membership",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "amazon_prime_membership_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_prime_membership__12_months",
    "name": "Amazon Prime Membership - 12 Months",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "amazon_prime_membership__12_months_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership__12_months-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_prime_membership__12_months_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership__12_months-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership__12_months_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 13.01,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership__12_months-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_prime_membership__3_months",
    "name": "Amazon Prime Membership - 3 Months",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "amazon_prime_membership__3_months_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership__3_months-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_prime_membership__3_months_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership__3_months-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_membership__3_months_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 13.01,
        "site": "https://vouchwise.in/out/buy-amazon_prime_membership__3_months-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_prime_shopping_edition",
    "name": "Amazon Prime Shopping Edition",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "amazon_prime_shopping_edition_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon_prime_shopping_edition-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_prime_shopping_edition_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-amazon_prime_shopping_edition-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_shopping_edition_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_prime_shopping_edition-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_prime_shopping_edition_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-amazon_prime_shopping_edition-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "amazon_shopping_voucher",
    "name": "Amazon Shopping Voucher",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "amazon_shopping_voucher_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_voucher-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_voucher_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_voucher-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "amazon_shopping_voucher_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_voucher-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_voucher_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_voucher-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_voucher_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_voucher-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_voucher_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_voucher-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_voucher_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_voucher-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_voucher_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_voucher-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "amazon_shopping_voucher_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon_shopping_voucher-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "american_eagle",
    "name": "American Eagle",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "american_eagle_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-american_eagle-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_eagle_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.75,
        "site": "https://vouchwise.in/out/buy-american_eagle-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "american_eagle_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-american_eagle-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_eagle_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-american_eagle-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_eagle_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-american_eagle-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_eagle_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-american_eagle-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_eagle_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-american_eagle-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_eagle_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-american_eagle-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_eagle_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-american_eagle-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "american_tourister",
    "name": "American Tourister",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "american_tourister_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-american_tourister-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_tourister_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.4,
        "site": "https://vouchwise.in/out/buy-american_tourister-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "american_tourister_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-american_tourister-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_tourister_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-american_tourister-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_tourister_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-american_tourister-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_tourister_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-american_tourister-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_tourister_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-american_tourister-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_tourister_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.26,
        "site": "https://vouchwise.in/out/buy-american_tourister-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "american_tourister_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-american_tourister-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "apollo_diagnostics",
    "name": "Apollo Diagnostics",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "apollo_diagnostics_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo_diagnostics-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_diagnostics_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-apollo_diagnostics-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_diagnostics_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-apollo_diagnostics-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_diagnostics_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.26,
        "site": "https://vouchwise.in/out/buy-apollo_diagnostics-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_diagnostics_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-apollo_diagnostics-sbi_gyftr",
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
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apollo_pharmacy_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "apollo_pharmacy_ahl",
    "name": "Apollo Pharmacy AHL",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "apollo_pharmacy_ahl_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_ahl-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "apollo_pharmacy_apl",
    "name": "Apollo Pharmacy APL",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "apollo_pharmacy_apl_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_apl-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "apollo_pharmacy_apl_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_apl-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "apollo_pharmacy_instore",
    "name": "Apollo Pharmacy InStore",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "apollo_pharmacy_instore_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-apollo_pharmacy_instore-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "app_store_codes",
    "name": "App Store Codes",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "app_store_codes_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-app_store_codes-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "apparel_group",
    "name": "Apparel Group",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "apparel_group_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-apparel_group-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apparel_group_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-apparel_group-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "apple_premium_reseller",
    "name": "Apple Premium Reseller",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "apple_premium_reseller_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-apple_premium_reseller-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "apple_premium_reseller_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.26,
        "site": "https://vouchwise.in/out/buy-apple_premium_reseller-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "appyhigh_prime",
    "name": "AppyHigh Prime",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "appyhigh_prime_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 15.01,
        "site": "https://vouchwise.in/out/buy-appyhigh_prime-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "archies_gallery",
    "name": "Archies Gallery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "archies_gallery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-archies_gallery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "archies_gallery_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-archies_gallery-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "archies_gallery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-archies_gallery-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "archies_gallery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-archies_gallery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "archies_gallery_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-archies_gallery-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "archies_gallery_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-archies_gallery-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "archies_gallery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-archies_gallery-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "archies_gallery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.01,
        "site": "https://vouchwise.in/out/buy-archies_gallery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "archies_gallery_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-archies_gallery-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "armani_exchange_luxe",
    "name": "Armani Exchange -Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "armani_exchange_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-armani_exchange_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "armani_exchange_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-armani_exchange_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "armani_exchange_luxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-armani_exchange_luxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "armani_exchange_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-armani_exchange_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "armani_exchange_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-armani_exchange_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "armani_exchange_luxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-armani_exchange_luxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "armani_exchange_luxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-armani_exchange_luxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "armani_exchange_luxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-armani_exchange_luxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "armani_exchange_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-armani_exchange_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "arrow",
    "name": "Arrow",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "arrow_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-arrow-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "arvind_brands",
    "name": "Arvind Brands",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "arvind_brands_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-arvind_brands-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "asia_seven_express",
    "name": "Asia Seven Express",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "asia_seven_express_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-asia_seven_express-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "asia_seven_express_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-asia_seven_express-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "asia_seven_express_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-asia_seven_express-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "asia_seven_express_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-asia_seven_express-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "assembly",
    "name": "Assembly",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "assembly_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-assembly-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "assembly_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-assembly-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "assembly_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-assembly-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "assembly_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-assembly-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "assembly_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-assembly-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "assembly_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-assembly-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "assembly_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 13.51,
        "site": "https://vouchwise.in/out/buy-assembly-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "assembly_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-assembly-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "aurelia",
    "name": "Aurelia",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "aurelia_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-aurelia-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aurelia_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-aurelia-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aurelia_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-aurelia-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aurelia_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-aurelia-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aurelia_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-aurelia-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aurelia_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-aurelia-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aurelia_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.01,
        "site": "https://vouchwise.in/out/buy-aurelia-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "aurelia_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-aurelia-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "auric",
    "name": "Auric",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "auric_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-auric-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "auric_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 37.5,
        "site": "https://vouchwise.in/out/buy-auric-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "auric_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-auric-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "auric_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 30,
        "site": "https://vouchwise.in/out/buy-auric-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "auric_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 35,
        "site": "https://vouchwise.in/out/buy-auric-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "auric_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-auric-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "auric_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 34.76,
        "site": "https://vouchwise.in/out/buy-auric-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "auric_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 30,
        "site": "https://vouchwise.in/out/buy-auric-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "avast",
    "name": "Avast",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "avast_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-avast-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bagline",
    "name": "Bagline",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "bagline_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-bagline-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bagline_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.01,
        "site": "https://vouchwise.in/out/buy-bagline-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bakingo",
    "name": "Bakingo",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "bakingo_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-bakingo-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bakingo_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-bakingo-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bakingo_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-bakingo-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bakingo_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-bakingo-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bakingo_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bakingo-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bakingo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.01,
        "site": "https://vouchwise.in/out/buy-bakingo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bakingo_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-bakingo-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ballyluxe",
    "name": "Bally-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "ballyluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-ballyluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ballyluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ballyluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ballyluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ballyluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ballyluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ballyluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ballyluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-ballyluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "barbeque_nation",
    "name": "Barbeque Nation",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "barbeque_nation_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-barbeque_nation-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-barbeque_nation-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "barbeque_nation_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-barbeque_nation-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-barbeque_nation-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-barbeque_nation-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-barbeque_nation-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-barbeque_nation-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque_nation-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-barbeque_nation-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "barbeque_nation_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-barbeque_nation-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bare_anatomy",
    "name": "Bare Anatomy",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "bare_anatomy_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-bare_anatomy-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bare_anatomy_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-bare_anatomy-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bare_anatomy_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-bare_anatomy-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bare_anatomy_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bare_anatomy-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bare_anatomy_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-bare_anatomy-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "baskin_robbins",
    "name": "Baskin Robbins",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "baskin_robbins_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-baskin_robbins-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "baskin_robbins_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-baskin_robbins-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "baskin_robbins_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-baskin_robbins-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "baskin_robbins_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-baskin_robbins-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "baskin_robbins_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-baskin_robbins-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "baskin_robbins_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-baskin_robbins-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "baskin_robbins_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-baskin_robbins-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "baskin_robbins_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.01,
        "site": "https://vouchwise.in/out/buy-baskin_robbins-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "baskin_robbins_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-baskin_robbins-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bata",
    "name": "Bata",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "bata_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bata-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bata_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-bata-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bata_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bata-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bata_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-bata-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bata_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-bata-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bata_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-bata-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bata_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bata-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bata_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bata-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bata_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.01,
        "site": "https://vouchwise.in/out/buy-bata-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bata_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-bata-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bath_and_body_works",
    "name": "Bath and Body Works",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "bath_and_body_works_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-bath_and_body_works-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-bath_and_body_works-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bath_and_body_works_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-bath_and_body_works-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bath_and_body_works-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-bath_and_body_works-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-bath_and_body_works-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bath_and_body_works-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-bath_and_body_works-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bath_and_body_works_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-bath_and_body_works-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bear_house",
    "name": "Bear House",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "bear_house_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-bear_house-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "beer_cafe",
    "name": "Beer Cafe",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "beer_cafe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-beer_cafe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "beer_cafe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-beer_cafe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beer_cafe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-beer_cafe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beer_cafe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-beer_cafe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beer_cafe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-beer_cafe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beer_cafe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-beer_cafe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beer_cafe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-beer_cafe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "behrouz_biryani",
    "name": "Behrouz Biryani",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "behrouz_biryani_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-behrouz_biryani-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "behrouz_biryani_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-behrouz_biryani-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "behrouz_biryani_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-behrouz_biryani-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "behrouz_biryani_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-behrouz_biryani-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "behrouz_biryani_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-behrouz_biryani-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "behrouz_biryani_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-behrouz_biryani-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "behrouz_biryani_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.26,
        "site": "https://vouchwise.in/out/buy-behrouz_biryani-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "behrouz_biryani_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-behrouz_biryani-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "beverly_hills_polo_club",
    "name": "Beverly Hills Polo Club",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "beverly_hills_polo_club_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-beverly_hills_polo_club-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beverly_hills_polo_club_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-beverly_hills_polo_club-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "beverly_hills_polo_club_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-beverly_hills_polo_club-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beverly_hills_polo_club_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-beverly_hills_polo_club-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beverly_hills_polo_club_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-beverly_hills_polo_club-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beverly_hills_polo_club_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-beverly_hills_polo_club-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beverly_hills_polo_club_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-beverly_hills_polo_club-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beverly_hills_polo_club_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-beverly_hills_polo_club-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beverly_hills_polo_club_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-beverly_hills_polo_club-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "beyoung",
    "name": "Beyoung",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "beyoung_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-beyoung-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "beyoung_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-beyoung-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beyoung_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 21,
        "site": "https://vouchwise.in/out/buy-beyoung-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beyoung_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-beyoung-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beyoung_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-beyoung-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beyoung_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-beyoung-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beyoung_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 21.01,
        "site": "https://vouchwise.in/out/buy-beyoung-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "beyoung_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-beyoung-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bgmi_uc",
    "name": "BGMI UC",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "bgmi_uc_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bgmi_uc-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bgmi_uc_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-bgmi_uc-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bgmi_uc_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-bgmi_uc-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bhima_jewellers__coin",
    "name": "Bhima Jewellers - Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "bhima_jewellers__coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bhima_jewellers__coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bhima_jewellers__gold_jewellery",
    "name": "Bhima Jewellers - Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "bhima_jewellers__gold_jewellery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bhima_jewellers__gold_jewellery-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bhima_jewellery",
    "name": "Bhima Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "bhima_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-bhima_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bhima_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-bhima_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "biba",
    "name": "BIBA",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "biba_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-biba-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "biba_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-biba-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "biba_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-biba-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "biba_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-biba-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "biba_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-biba-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "biba_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-biba-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "biba_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-biba-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "biba_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-biba-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bigbasket",
    "name": "BigBasket",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "bigbasket_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-bigbasket-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bigbasket_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-bigbasket-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-bigbasket-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-bigbasket-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-bigbasket-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-bigbasket-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.76,
        "site": "https://vouchwise.in/out/buy-bigbasket-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bigbasket_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-bigbasket-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bigbasket_custom",
    "name": "Bigbasket (Custom)",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "bigbasket_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.26,
        "site": "https://vouchwise.in/out/buy-bigbasket_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bikanervala",
    "name": "Bikanervala",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "bikanervala_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.2,
        "site": "https://vouchwise.in/out/buy-bikanervala-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bikanervala_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bikanervala-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bikanervala_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.01,
        "site": "https://vouchwise.in/out/buy-bikanervala-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "birkenstock",
    "name": "Birkenstock",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "birkenstock_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-birkenstock-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "birkenstock_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.2,
        "site": "https://vouchwise.in/out/buy-birkenstock-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "birkenstock_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-birkenstock-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "birkenstock_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-birkenstock-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "birkenstock_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-birkenstock-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "black__decker",
    "name": "Black + Decker",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "black__decker_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-black__decker-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "black__decker_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-black__decker-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "blaupunkt",
    "name": "Blaupunkt",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "blaupunkt_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blaupunkt-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blaupunkt_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 16.01,
        "site": "https://vouchwise.in/out/buy-blaupunkt-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "blinkit",
    "name": "Blinkit",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "blinkit_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-blinkit-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0.5,
        "site": "https://vouchwise.in/out/buy-blinkit-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-blinkit-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-blinkit-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-blinkit-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.26,
        "site": "https://vouchwise.in/out/buy-blinkit-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blinkit_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-blinkit-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "blissclub",
    "name": "Blissclub",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "blissclub_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-blissclub-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blissclub_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-blissclub-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "blissclub_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-blissclub-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blissclub_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-blissclub-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blissclub_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-blissclub-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blissclub_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-blissclub-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blissclub_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.26,
        "site": "https://vouchwise.in/out/buy-blissclub-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blissclub_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-blissclub-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "blue_tokai_coffe",
    "name": "Blue Tokai Coffe",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "blue_tokai_coffe_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-blue_tokai_coffe-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "blue_tokai_coffe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.01,
        "site": "https://vouchwise.in/out/buy-blue_tokai_coffe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bluestone",
    "name": "Bluestone",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "bluestone_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bluestone-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bluestone_diamond",
    "name": "BlueStone Diamond",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "bluestone_diamond_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bluestone_diamond-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bluestone_diamond_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-bluestone_diamond-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bluestone_diamond_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-bluestone_diamond-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bluestone_diamond_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.76,
        "site": "https://vouchwise.in/out/buy-bluestone_diamond-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bluestone_diamond_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-bluestone_diamond-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bluestone_gold",
    "name": "BlueStone Gold",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "bluestone_gold_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-bluestone_gold-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bluestone_gold_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-bluestone_gold-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bluestone_gold_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-bluestone_gold-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bluestone_gold_jewellery",
    "name": "BlueStone Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "bluestone_gold_jewellery_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bluestone_gold_jewellery-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bluestone_gold_jewellery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-bluestone_gold_jewellery-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bluestone_gold_jewellery_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-bluestone_gold_jewellery-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bluestone_gold_jewellery_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-bluestone_gold_jewellery-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "boat",
    "name": "Boat",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "boat_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.01,
        "site": "https://vouchwise.in/out/buy-boat-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bobbi_brown",
    "name": "Bobbi Brown",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "bobbi_brown_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-bobbi_brown-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bobbi_brown_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-bobbi_brown-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bobbi_brown_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-bobbi_brown-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bobbi_brown_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bobbi_brown-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "boditive",
    "name": "Boditive",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "boditive_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.76,
        "site": "https://vouchwise.in/out/buy-boditive-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bodycraft",
    "name": "Body Craft",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "bodycraft_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-bodycraft-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bodycraft_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-bodycraft-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bodycraft_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bodycraft-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "body_craft_clinic",
    "name": "Body Craft (Clinic)",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "body_craft_clinic_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-body_craft_clinic-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "body_craft_clinic_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-body_craft_clinic-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "body_craft_salon",
    "name": "Body Craft (Salon)",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "body_craft_salon_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-body_craft_salon-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "body_craft_salon_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-body_craft_salon-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bombay_shaving_company",
    "name": "BOMBAY SHAVING COMPANY",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "bombay_shaving_company_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bombay_shaving_company-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bookmyshow",
    "name": "BookMyShow",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "bookmyshow_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-bookmyshow-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bookmyshow_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-bookmyshow-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bookmyshow_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bookmyshow_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.76,
        "site": "https://vouchwise.in/out/buy-bookmyshow-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bottega_venetaluxe",
    "name": "Bottega Veneta-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "bottega_venetaluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-bottega_venetaluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "bottega_venetaluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bottega_venetaluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bottega_venetaluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bottega_venetaluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bottega_venetaluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-bottega_venetaluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bottega_venetaluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-bottega_venetaluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "bpcl_smartdrive_fuel",
    "name": "BPCL SmartDrive Fuel",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "bpcl_smartdrive_fuel_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bpcl_smartdrive_fuel-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bpcl_smartdrive_fuel_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bpcl_smartdrive_fuel-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "bpcl_smartdrive_fuel_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bpcl_smartdrive_fuel-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "braingymjr",
    "name": "BrainGymJr",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "braingymjr_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-braingymjr-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "braingymjr_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-braingymjr-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "braingymjr_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-braingymjr-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "braingymjr_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.76,
        "site": "https://vouchwise.in/out/buy-braingymjr-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "braingymjr_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-braingymjr-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "brooks_brothersluxe",
    "name": "Brooks Brothers-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "brooks_brothersluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-brooks_brothersluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "brooks_brothersluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-brooks_brothersluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "brooks_brothersluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-brooks_brothersluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "brooks_brothersluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-brooks_brothersluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "brooks_brothersluxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-brooks_brothersluxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "brooks_brothersluxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-brooks_brothersluxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "brooks_brothersluxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-brooks_brothersluxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "brooks_brothersluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-brooks_brothersluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "buywithemi",
    "name": "BuyWithEMI",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "buywithemi_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-buywithemi-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cafe_coffee_day",
    "name": "Cafe Coffee Day",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "cafe_coffee_day_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.8,
        "site": "https://vouchwise.in/out/buy-cafe_coffee_day-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "cafe_coffee_day_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-cafe_coffee_day-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cafe_coffee_day_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cafe_coffee_day-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cafe_coffee_day_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-cafe_coffee_day-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cafe_delhi_heights",
    "name": "Cafe Delhi Heights",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "cafe_delhi_heights_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-cafe_delhi_heights-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "cafe_delhi_heights_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-cafe_delhi_heights-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cafe_delhi_heights_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-cafe_delhi_heights-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cafe_delhi_heights_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-cafe_delhi_heights-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cafe_delhi_heights_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-cafe_delhi_heights-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cafe_delhi_heights_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cafe_delhi_heights-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cafe_delhi_heights_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-cafe_delhi_heights-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cafe_delhi_heights_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-cafe_delhi_heights-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cahoot",
    "name": "CAHOOT",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "cahoot_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-cahoot-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cahoot_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-cahoot-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cahoot_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cahoot-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "call_it_spring",
    "name": "Call It Spring",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "call_it_spring_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-call_it_spring-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "call_it_spring_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-call_it_spring-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "call_it_spring_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-call_it_spring-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "call_it_spring_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-call_it_spring-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "call_it_spring_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-call_it_spring-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "call_it_spring_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-call_it_spring-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "call_it_spring_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-call_it_spring-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "call_it_spring_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-call_it_spring-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "call_it_spring_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-call_it_spring-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "campus",
    "name": "Campus",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "campus_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-campus-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "campus_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-campus-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "campus_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-campus-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "campus_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-campus-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "campus_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-campus-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "campus_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-campus-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "campus_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.76,
        "site": "https://vouchwise.in/out/buy-campus-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "campus_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-campus-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "campus_sutra",
    "name": "Campus Sutra",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "campus_sutra_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-campus_sutra-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "canaliluxe",
    "name": "Canali-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "canaliluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-canaliluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "canaliluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-canaliluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "canaliluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-canaliluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "canaliluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-canaliluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "canaliluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-canaliluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "candere_diamond_jewellery",
    "name": "Candere Diamond Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "candere_diamond_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-candere_diamond_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_diamond_jewellery_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-candere_diamond_jewellery-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "candere_diamond_jewellery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-candere_diamond_jewellery-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_diamond_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-candere_diamond_jewellery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_diamond_jewellery_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-candere_diamond_jewellery-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_diamond_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.26,
        "site": "https://vouchwise.in/out/buy-candere_diamond_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_diamond_jewellery_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-candere_diamond_jewellery-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "candere_gold_coin",
    "name": "Candere Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "candere_gold_coin_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-candere_gold_coin-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_gold_coin_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-candere_gold_coin-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_gold_coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-candere_gold_coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_gold_coin_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-candere_gold_coin-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "candere_gold_jewellery",
    "name": "Candere Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "candere_gold_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-candere_gold_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_gold_jewellery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-candere_gold_jewellery-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_gold_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-candere_gold_jewellery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_gold_jewellery_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-candere_gold_jewellery-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_gold_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-candere_gold_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "candere_gold_jewellery_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-candere_gold_jewellery-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cello",
    "name": "Cello",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "cello_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-cello-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cello_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5.1,
        "site": "https://vouchwise.in/out/buy-cello-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "cello_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-cello-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cello_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-cello-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cello_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-cello-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cello_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-cello-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cello_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cello-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cello_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.01,
        "site": "https://vouchwise.in/out/buy-cello-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cello_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-cello-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cgh_earth",
    "name": "CGH Earth",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "cgh_earth_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.76,
        "site": "https://vouchwise.in/out/buy-cgh_earth-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "charles__keith",
    "name": "Charles and Keith",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "charles__keith_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-charles__keith-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "charles__keith_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-charles__keith-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "charles__keith_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-charles__keith-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "charles__keith_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-charles__keith-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "charles__keith_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-charles__keith-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "charles__keith_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-charles__keith-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "charles__keith_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-charles__keith-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "charles__keith_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-charles__keith-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "charles__keith_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-charles__keith-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "charles_tyrwhittluxe",
    "name": "Charles Tyrwhitt-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "charles_tyrwhittluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-charles_tyrwhittluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "charles_tyrwhittluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-charles_tyrwhittluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "charles_tyrwhittluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-charles_tyrwhittluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "charles_tyrwhittluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-charles_tyrwhittluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "charles_tyrwhittluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-charles_tyrwhittluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "chemist_at_play",
    "name": "Chemist At Play",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "chemist_at_play_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-chemist_at_play-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chemist_at_play_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-chemist_at_play-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chemist_at_play_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-chemist_at_play-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chemist_at_play_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-chemist_at_play-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chemist_at_play_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-chemist_at_play-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "chicago_pizza",
    "name": "Chicago Pizza",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "chicago_pizza_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-chicago_pizza-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "chicco",
    "name": "Chicco",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "chicco_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-chicco-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "chumbak",
    "name": "Chumbak",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "chumbak_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-chumbak-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chumbak_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7.7,
        "site": "https://vouchwise.in/out/buy-chumbak-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "chumbak_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-chumbak-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chumbak_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-chumbak-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chumbak_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-chumbak-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chumbak_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-chumbak-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chumbak_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-chumbak-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chumbak_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-chumbak-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chumbak_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.01,
        "site": "https://vouchwise.in/out/buy-chumbak-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "chumbak_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-chumbak-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cinepolis",
    "name": "Cinepolis",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "cinepolis_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 24.5,
        "site": "https://vouchwise.in/out/buy-cinepolis-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cinepolis_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-cinepolis-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cinepolis_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-cinepolis-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cinepolis_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 23.01,
        "site": "https://vouchwise.in/out/buy-cinepolis-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "citizen_watches",
    "name": "Citizen Watches",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "citizen_watches_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-citizen_watches-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "citizen_watches_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-citizen_watches-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "citizen_watches_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-citizen_watches-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "citizen_watches_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-citizen_watches-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "citizen_watches_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-citizen_watches-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "citizen_watches_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-citizen_watches-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "citizen_watches_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.01,
        "site": "https://vouchwise.in/out/buy-citizen_watches-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "citizen_watches_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-citizen_watches-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "clayco",
    "name": "CLAYCO",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "clayco_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-clayco-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "clayco_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-clayco-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "clayco_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-clayco-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "clayco_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-clayco-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "clayco_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-clayco-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "clayco_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 17.01,
        "site": "https://vouchwise.in/out/buy-clayco-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "clayco_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-clayco-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cleartax",
    "name": "Cleartax",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "cleartax_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 72.5,
        "site": "https://vouchwise.in/out/buy-cleartax-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartax_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 70,
        "site": "https://vouchwise.in/out/buy-cleartax-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartax_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartax-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartax_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 48.01,
        "site": "https://vouchwise.in/out/buy-cleartax-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartax_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 55,
        "site": "https://vouchwise.in/out/buy-cleartax-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cleartrip_generic",
    "name": "Cleartrip Generic",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "cleartrip_generic_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip_generic-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_generic_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.3,
        "site": "https://vouchwise.in/out/buy-cleartrip_generic-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "cleartrip_generic_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-cleartrip_generic-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_generic_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip_generic-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_generic_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip_generic-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_generic_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-cleartrip_generic-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_generic_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-cleartrip_generic-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_generic_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip_generic-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_generic_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.76,
        "site": "https://vouchwise.in/out/buy-cleartrip_generic-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_generic_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip_generic-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cleartrip_hotel",
    "name": "Cleartrip Hotel",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "cleartrip_hotel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 11.9,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "cleartrip_hotel_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 16.5,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cleartrip_hotel_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotel-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cleartrip_hotels_custom",
    "name": "Cleartrip Hotels (Custom)",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "cleartrip_hotels_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.41,
        "site": "https://vouchwise.in/out/buy-cleartrip_hotels_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "clovia",
    "name": "Clovia",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "clovia_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-clovia-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "coachluxe",
    "name": "Coach-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "coachluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-coachluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "coachluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-coachluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "coachluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-coachluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "coachluxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-coachluxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "coachluxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-coachluxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "coachluxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-coachluxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "coachluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-coachluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "colorplus",
    "name": "ColorPlus",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "colorplus_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-colorplus-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "colorplus_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-colorplus-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "colorplus_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-colorplus-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "colorplus_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-colorplus-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "colorplus_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-colorplus-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "colorplus_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-colorplus-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "colorplus_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-colorplus-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "columbia_sportswear",
    "name": "Columbia Sportswear",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "columbia_sportswear_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-columbia_sportswear-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "columbia_sportswear_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-columbia_sportswear-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "columbia_sportswear_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-columbia_sportswear-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "columbia_sportswear_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-columbia_sportswear-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "columbia_sportswear_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-columbia_sportswear-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "columbia_sportswear_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.76,
        "site": "https://vouchwise.in/out/buy-columbia_sportswear-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "columbia_sportswear_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-columbia_sportswear-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cordelia_cruises",
    "name": "Cordelia Cruises",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "cordelia_cruises_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-cordelia_cruises-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cordelia_cruises_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-cordelia_cruises-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cordelia_cruises_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-cordelia_cruises-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cordelia_cruises_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-cordelia_cruises-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cordelia_cruises_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.01,
        "site": "https://vouchwise.in/out/buy-cordelia_cruises-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cordelia_cruises_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-cordelia_cruises-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cosmopolitan_india",
    "name": "Cosmopolitan India",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "cosmopolitan_india_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 37.76,
        "site": "https://vouchwise.in/out/buy-cosmopolitan_india-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cosmopolitan_india_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cosmopolitan_india-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "costa_coffee",
    "name": "Costa Coffee",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "costa_coffee_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-costa_coffee-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-costa_coffee-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-costa_coffee-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-costa_coffee-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa_coffee-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa_coffee-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-costa_coffee-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "costa_coffee_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa_coffee-sbi_gyftr",
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
        "site": "https://vouchwise.in/out/buy-croma-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "croma_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-croma-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.56,
        "site": "https://vouchwise.in/out/buy-croma-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "croma_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "croma_custom",
    "name": "Croma (Custom)",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "croma_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.51,
        "site": "https://vouchwise.in/out/buy-croma_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "crossword",
    "name": "Crossword",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "crossword_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-crossword-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "crossword_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-crossword-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "crossword_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-crossword-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "crossword_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-crossword-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "crossword_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-crossword-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "crossword_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-crossword-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "crossword_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-crossword-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "crossword_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-crossword-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "crosswords_online",
    "name": "Crosswords Online",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "crosswords_online_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-crosswords_online-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "cult_fit",
    "name": "Cult fit",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "cult_fit_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cult_fit-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cult_fit_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cult_fit-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "cult_fit_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-cult_fit-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cult_fit_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-cult_fit-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cult_fit_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cult_fit-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cult_fit_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cult_fit-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "cult_fit_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cult_fit-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "daily_objects",
    "name": "Daily Objects",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "daily_objects_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-daily_objects-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "daily_objects_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-daily_objects-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "daily_objects_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-daily_objects-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "daily_objects_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-daily_objects-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "daily_objects_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-daily_objects-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "daily_objects_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-daily_objects-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "daily_objects_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.76,
        "site": "https://vouchwise.in/out/buy-daily_objects-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "daily_objects_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-daily_objects-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "decathlon_custom",
    "name": "Decathlon (Custom)",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "decathlon_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-decathlon_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "decathlon_omni",
    "name": "Decathlon Omni",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "decathlon_omni_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon_omni-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "decathlon_sports",
    "name": "Decathlon Sports",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "decathlon_sports_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-decathlon_sports-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_sports_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-decathlon_sports-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "decathlon_sports_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-decathlon_sports-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_sports_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-decathlon_sports-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_sports_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-decathlon_sports-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_sports_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-decathlon_sports-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_sports_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-decathlon_sports-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_sports_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-decathlon_sports-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "decathlon_sports_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-decathlon_sports-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "dieselluxe",
    "name": "Diesel-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "dieselluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-dieselluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "dieselluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-dieselluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dieselluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-dieselluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dieselluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-dieselluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "discord",
    "name": "Discord",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "discord_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-discord-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "discord_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-discord-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "discovery_plus",
    "name": "Discovery Plus",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "discovery_plus_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 27.5,
        "site": "https://vouchwise.in/out/buy-discovery_plus-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "discovery_plus_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-discovery_plus-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "discovery_plus_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-discovery_plus-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "discovery_plus_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-discovery_plus-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "discovery_plus_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-discovery_plus-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "discovery_plus_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 36.01,
        "site": "https://vouchwise.in/out/buy-discovery_plus-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "discovery_plus_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 21,
        "site": "https://vouchwise.in/out/buy-discovery_plus-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "district_by_zomato",
    "name": "District by Zomato",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "district_by_zomato_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-district_by_zomato-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "district_by_zomato_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-district_by_zomato-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "district_by_zomato_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-district_by_zomato-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "district_by_zomato_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-district_by_zomato-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "docubay",
    "name": "DocuBay",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "docubay_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-docubay-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "dominos_pizza",
    "name": "Domino's Pizza",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "dominos_pizza_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-dominos_pizza-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_pizza_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-dominos_pizza-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "dominos_pizza_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-dominos_pizza-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_pizza_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-dominos_pizza-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_pizza_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-dominos_pizza-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_pizza_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-dominos_pizza-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_pizza_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 16.5,
        "site": "https://vouchwise.in/out/buy-dominos_pizza-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_pizza_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dominos_pizza-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_pizza_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 17.01,
        "site": "https://vouchwise.in/out/buy-dominos_pizza-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dominos_pizza_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-dominos_pizza-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "dominos_pizza_custom",
    "name": "Dominos Pizza (Custom)",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "dominos_pizza_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-dominos_pizza_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "donatekart",
    "name": "Donatekart",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "donatekart_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-donatekart-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "donatekart_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-donatekart-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "donatekart_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.76,
        "site": "https://vouchwise.in/out/buy-donatekart-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "dpauls_travel__tours",
    "name": "DPauls Travel & Tours",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "dpauls_travel__tours_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.3,
        "site": "https://vouchwise.in/out/buy-dpauls_travel__tours-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "dpauls_travel__tours_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-dpauls_travel__tours-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dpauls_travel__tours_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-dpauls_travel__tours-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dpauls_travel__tours_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dpauls_travel__tours-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dpauls_travel__tours_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-dpauls_travel__tours-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dpauls_travel__tours_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-dpauls_travel__tours-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dpauls_travel__tours_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-dpauls_travel__tours-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "dune_londonluxe",
    "name": "Dune London-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "dune_londonluxe_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-dune_londonluxe-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dune_londonluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-dune_londonluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "dune_londonluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-dune_londonluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dune_londonluxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-dune_londonluxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dune_londonluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dune_londonluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dune_londonluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-dune_londonluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dune_londonluxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-dune_londonluxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dune_londonluxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dune_londonluxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dune_londonluxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-dune_londonluxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "dune_londonluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-dune_londonluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "duroflex",
    "name": "Duroflex",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "duroflex_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12.1,
        "site": "https://vouchwise.in/out/buy-duroflex-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "duroflex_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-duroflex-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "duroflex_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-duroflex-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "duroflex_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-duroflex-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "duroflex_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.26,
        "site": "https://vouchwise.in/out/buy-duroflex-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "duroflex_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-duroflex-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ea_sports",
    "name": "EA Sports",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "ea_sports_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.26,
        "site": "https://vouchwise.in/out/buy-ea_sports-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ea_sports_fc_26",
    "name": "EA SPORTS FC 26",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "ea_sports_fc_26_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-ea_sports_fc_26-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ea7_luxe",
    "name": "EA-7- Luxe",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "ea7_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-ea7_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ea7_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ea7_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ea7_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ea7_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ea7_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-ea7_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "easemytrip_generic",
    "name": "EaseMyTrip Generic",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "easemytrip_generic_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-easemytrip_generic-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_generic_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_generic-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "easemytrip_generic_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-easemytrip_generic-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_generic_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-easemytrip_generic-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_generic_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-easemytrip_generic-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_generic_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_generic-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_generic_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.26,
        "site": "https://vouchwise.in/out/buy-easemytrip_generic-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "easemytrip_holiday",
    "name": "EaseMyTrip Holiday",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "easemytrip_holiday_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.8,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "easemytrip_holiday_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_holiday_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.26,
        "site": "https://vouchwise.in/out/buy-easemytrip_holiday-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "easemytrip_hotels",
    "name": "EaseMyTrip Hotels",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "easemytrip_hotels_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotels-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hotels_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.1,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotels-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "easemytrip_hotels_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 13.5,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotels-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hotels_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotels-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easemytrip_hotels_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-easemytrip_hotels-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "easybuy",
    "name": "Easybuy",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "easybuy_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-easybuy-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easybuy_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-easybuy-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "easybuy_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-easybuy-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easybuy_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-easybuy-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easybuy_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-easybuy-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "easybuy_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-easybuy-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "eatsure",
    "name": "Eatsure",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "eatsure_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-eatsure-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "eatsure_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-eatsure-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "eatsure_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-eatsure-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "eatsure_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-eatsure-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "eatsure_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-eatsure-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "eatsure_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-eatsure-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "eatsure_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-eatsure-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "eazydiner",
    "name": "EazyDiner",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "eazydiner_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-eazydiner-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "electricity_bill_payment",
    "name": "Electricity Bill Payment",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "electricity_bill_payment_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-electricity_bill_payment-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "elivaas",
    "name": "Elivaas",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "elivaas_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-elivaas-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "elivaas_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-elivaas-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "elivaas_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-elivaas-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "elivaas_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-elivaas-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "elivaas_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-elivaas-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "elivaas_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-elivaas-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "elivaas_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.01,
        "site": "https://vouchwise.in/out/buy-elivaas-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "elivaas_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-elivaas-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "elleven",
    "name": "Elleven",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "elleven_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-elleven-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "elleven_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-elleven-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "elleven_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-elleven-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "elleven_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.01,
        "site": "https://vouchwise.in/out/buy-elleven-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "elleven_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-elleven-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "elver",
    "name": "Elver",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "elver_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 26.76,
        "site": "https://vouchwise.in/out/buy-elver-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "emporio_armaniluxe",
    "name": "Emporio Armani-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "emporio_armaniluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-emporio_armaniluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "emporio_armaniluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-emporio_armaniluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "emporio_armaniluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-emporio_armaniluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "emporio_armaniluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-emporio_armaniluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "emporio_armaniluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-emporio_armaniluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "epic_on_1_month_plan",
    "name": "Epic On 1 Month Plan",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "epic_on_1_month_plan_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-epic_on_1_month_plan-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "epic_on_1_month_plan_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.51,
        "site": "https://vouchwise.in/out/buy-epic_on_1_month_plan-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "epic_on_1_year_plan",
    "name": "Epic On 1 Year Plan",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "epic_on_1_year_plan_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-epic_on_1_year_plan-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "epic_on_1_year_plan_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.51,
        "site": "https://vouchwise.in/out/buy-epic_on_1_year_plan-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "epic_on_3_month_plan",
    "name": "Epic On 3 Month Plan",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "epic_on_3_month_plan_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-epic_on_3_month_plan-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "epic_on_3_month_plan_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.51,
        "site": "https://vouchwise.in/out/buy-epic_on_3_month_plan-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "epic_on_6_month_plan",
    "name": "Epic On 6 Month Plan",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "epic_on_6_month_plan_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-epic_on_6_month_plan-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "epic_on_6_month_plan_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.51,
        "site": "https://vouchwise.in/out/buy-epic_on_6_month_plan-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "estele",
    "name": "Estele",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "estele_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 30.7,
        "site": "https://vouchwise.in/out/buy-estele-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "estele_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-estele-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "estele_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-estele-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "estele_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-estele-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "estele_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-estele-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "estele_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 18.01,
        "site": "https://vouchwise.in/out/buy-estele-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "estele_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-estele-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "estuary_world",
    "name": "Estuary World",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "estuary_world_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 38.01,
        "site": "https://vouchwise.in/out/buy-estuary_world-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "euphoria_diamond_jewellery",
    "name": "Euphoria Diamond Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "euphoria_diamond_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-euphoria_diamond_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_diamond_jewellery_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-euphoria_diamond_jewellery-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "euphoria_diamond_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-euphoria_diamond_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_diamond_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.26,
        "site": "https://vouchwise.in/out/buy-euphoria_diamond_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "euphoria_gold_coin",
    "name": "Euphoria Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "euphoria_gold_coin_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-euphoria_gold_coin-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "euphoria_gold_coin_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-euphoria_gold_coin-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_gold_coin_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-euphoria_gold_coin-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_gold_coin_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-euphoria_gold_coin-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_gold_coin_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-euphoria_gold_coin-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_gold_coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.01,
        "site": "https://vouchwise.in/out/buy-euphoria_gold_coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_gold_coin_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-euphoria_gold_coin-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "euphoria_gold_jewellery",
    "name": "Euphoria Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "euphoria_gold_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-euphoria_gold_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "euphoria_jewellery_silver_coin",
    "name": "Euphoria Jewellery Silver Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "euphoria_jewellery_silver_coin_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-euphoria_jewellery_silver_coin-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "euphoria_jewellery_silver_coin_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-euphoria_jewellery_silver_coin-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_jewellery_silver_coin_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-euphoria_jewellery_silver_coin-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_jewellery_silver_coin_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-euphoria_jewellery_silver_coin-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_jewellery_silver_coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.51,
        "site": "https://vouchwise.in/out/buy-euphoria_jewellery_silver_coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "euphoria_jewellery_silver_coin_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-euphoria_jewellery_silver_coin-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "exitlag",
    "name": "ExitLag",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "exitlag_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-exitlag-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "faasos",
    "name": "Faasos",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "faasos_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-faasos-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "faasos_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-faasos-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "faasos_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-faasos-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "faasos_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-faasos-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "faasos_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-faasos-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "faasos_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-faasos-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "faasos_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-faasos-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fab_hotels",
    "name": "Fab Hotels",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "fab_hotels_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-fab_hotels-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "fab_hotels_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-fab_hotels-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fab_hotels_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-fab_hotels-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fab_hotels_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-fab_hotels-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fab_hotels_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-fab_hotels-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fab_hotels_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fab_hotels-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fab_hotels_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-fab_hotels-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fabindia",
    "name": "Fabindia",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "fabindia_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-fabindia-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fabindia_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fabindia_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fabindia_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fashion_factory",
    "name": "Fashion Factory",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "fashion_factory_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-fashion_factory-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fashion_factory_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-fashion_factory-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fashion_factory_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-fashion_factory-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fashion_factory_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-fashion_factory-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fashion_factory_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.51,
        "site": "https://vouchwise.in/out/buy-fashion_factory-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fashion_factory_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-fashion_factory-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fastag_recharge",
    "name": "Fastag Recharge",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "fastag_recharge_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fastag_recharge-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fastrack",
    "name": "Fastrack",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "fastrack_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-fastrack-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-fastrack-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "fastrack_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-fastrack-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-fastrack-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-fastrack-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-fastrack-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fastrack-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-fastrack-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-fastrack-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fastrack_bags",
    "name": "Fastrack Bags",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "fastrack_bags_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-fastrack_bags-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_bags_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fastrack_bags-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_bags_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-fastrack_bags-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_bags_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-fastrack_bags-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_bags_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-fastrack_bags-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_bags_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-fastrack_bags-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fastrack_gift_card__rs1000",
    "name": "Fastrack Gift Card - Rs.1000",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "fastrack_gift_card__rs1000_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fastrack_gift_card__rs1000-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fastrack_gift_card__rs3000",
    "name": "Fastrack Gift Card - Rs.3000",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "fastrack_gift_card__rs3000_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fastrack_gift_card__rs3000-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fastrack_gift_card__rs5000",
    "name": "Fastrack Gift Card - Rs.5000",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "fastrack_gift_card__rs5000_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fastrack_gift_card__rs5000-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fastrack_smartwatches",
    "name": "Fastrack Smartwatches",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "fastrack_smartwatches_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-fastrack_smartwatches-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_smartwatches_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-fastrack_smartwatches-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_smartwatches_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-fastrack_smartwatches-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_smartwatches_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-fastrack_smartwatches-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fastrack_smartwatches_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-fastrack_smartwatches-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "femmella",
    "name": "Femmella",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "femmella_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-femmella-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "femmella_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-femmella-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "femmella_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-femmella-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "femmella_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-femmella-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "femmella_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-femmella-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "femmella_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-femmella-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "femmella_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.76,
        "site": "https://vouchwise.in/out/buy-femmella-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "femmella_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-femmella-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ferns_n_petals",
    "name": "Ferns N Petals",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "ferns_n_petals_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ferns_n_petals_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 13.01,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferns_n_petals_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-ferns_n_petals-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ferragamo_luxe_gift_card",
    "name": "FERRAGAMO- Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "ferragamo_luxe_gift_card_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ferragamo_luxe_gift_card-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferragamo_luxe_gift_card_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferragamo_luxe_gift_card-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferragamo_luxe_gift_card_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ferragamo_luxe_gift_card-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ferragamo_luxe_gift_card_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-ferragamo_luxe_gift_card-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "finusmart_easy_cash",
    "name": "FinuSmart Easy Cash",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "finusmart_easy_cash_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-finusmart_easy_cash-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "finusmart_suraksha",
    "name": "FinuSmart Suraksha",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "finusmart_suraksha_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-finusmart_suraksha-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "firstcry",
    "name": "FirstCry",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "firstcry_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-firstcry-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "firstcry_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-firstcry-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "firstcry_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-firstcry-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "firstcry_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-firstcry-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "firstcry_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.76,
        "site": "https://vouchwise.in/out/buy-firstcry-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fitpass",
    "name": "Fitpass",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "fitpass_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-fitpass-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fitpass_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-fitpass-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "fitpass_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-fitpass-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fitpass_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 21,
        "site": "https://vouchwise.in/out/buy-fitpass-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fitpass_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-fitpass-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fitpass_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-fitpass-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fitpass_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fitpass-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fitpass_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 18.51,
        "site": "https://vouchwise.in/out/buy-fitpass-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fitpass_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-fitpass-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "flipkart",
    "name": "Flipkart",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "flipkart_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "flipkart_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-flipkart-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-flipkart-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": -4.13,
        "site": "https://vouchwise.in/out/buy-flipkart-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flipkart_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-flipkart-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "flipkart_pay",
    "name": "Flipkart Pay",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "flipkart_pay_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-flipkart_pay-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "flixbus",
    "name": "FlixBus",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "flixbus_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-flixbus-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flixbus_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.01,
        "site": "https://vouchwise.in/out/buy-flixbus-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "flower_aura",
    "name": "Flower Aura",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "flower_aura_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-flower_aura-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flower_aura_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-flower_aura-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flower_aura_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-flower_aura-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flower_aura_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-flower_aura-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flower_aura_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-flower_aura-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flower_aura_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flower_aura-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flower_aura_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.01,
        "site": "https://vouchwise.in/out/buy-flower_aura-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "flower_aura_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-flower_aura-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "flying_machine",
    "name": "Flying Machine",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "flying_machine_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-flying_machine-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "forever_new",
    "name": "Forever New",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "forever_new_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-forever_new-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "forever_new_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-forever_new-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "forever_new_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-forever_new-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "forever_new_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-forever_new-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "forever_new_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.76,
        "site": "https://vouchwise.in/out/buy-forever_new-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "forever21",
    "name": "Forever21",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "forever21_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-forever21-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "foxtale",
    "name": "Foxtale",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "foxtale_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-foxtale-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "foxtale_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-foxtale-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "foxtale_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-foxtale-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "foxtale_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-foxtale-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "foxtale_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-foxtale-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "foxtale_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 21,
        "site": "https://vouchwise.in/out/buy-foxtale-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "foxtale_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-foxtale-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "foxtale_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 15.76,
        "site": "https://vouchwise.in/out/buy-foxtale-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "foxtale_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-foxtale-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "freecultr",
    "name": "Freecultr",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "freecultr_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-freecultr-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "freecultr_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 18.5,
        "site": "https://vouchwise.in/out/buy-freecultr-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "freecultr_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-freecultr-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "freecultr_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-freecultr-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "freecultr_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-freecultr-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "freecultr_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-freecultr-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "freecultr_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-freecultr-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "freecultr_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 19.01,
        "site": "https://vouchwise.in/out/buy-freecultr-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "freecultr_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-freecultr-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "french_accent",
    "name": "French Accent",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "french_accent_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-french_accent-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "french_accent_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-french_accent-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "french_accent_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-french_accent-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "fresh_menu",
    "name": "Fresh Menu",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "fresh_menu_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fresh_menu-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fresh_menu_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fresh_menu-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "fresh_menu_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-fresh_menu-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fresh_menu_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fresh_menu-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "fresh_menu_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.76,
        "site": "https://vouchwise.in/out/buy-fresh_menu-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "frido",
    "name": "Frido",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "frido_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-frido-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "frido_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-frido-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "frido_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-frido-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "frido_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-frido-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "frido_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-frido-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "frido_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-frido-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "frido_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 13.26,
        "site": "https://vouchwise.in/out/buy-frido-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "frido_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-frido-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "funcity",
    "name": "Funcity",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "funcity_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.3,
        "site": "https://vouchwise.in/out/buy-funcity-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "funcity_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-funcity-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "funcity_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.01,
        "site": "https://vouchwise.in/out/buy-funcity-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "future_world__apple_reseller",
    "name": "FUTURE WORLD - APPLE RESELLER",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "future_world__apple_reseller_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-future_world__apple_reseller-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "future_world__apple_reseller_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-future_world__apple_reseller-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "future_world__apple_reseller_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-future_world__apple_reseller-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "future_world__apple_reseller_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-future_world__apple_reseller-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "future_world__apple_reseller_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-future_world__apple_reseller-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "future_world__apple_reseller_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-future_world__apple_reseller-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "future_world__apple_reseller_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-future_world__apple_reseller-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "future_world__apple_reseller_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.51,
        "site": "https://vouchwise.in/out/buy-future_world__apple_reseller-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "future_world__apple_reseller_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-future_world__apple_reseller-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "gaana",
    "name": "Gaana",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "gaana_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-gaana-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gaana_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-gaana-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gaana_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-gaana-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gaana_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-gaana-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gaana_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-gaana-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gaana_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 15.01,
        "site": "https://vouchwise.in/out/buy-gaana-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gaana_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-gaana-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "gaana_egift_12m",
    "name": "Gaana E-Gift -12M",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "gaana_egift_12m_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-gaana_egift_12m-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "gaana_egift_1m",
    "name": "Gaana E-Gift -1M",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "gaana_egift_1m_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-gaana_egift_1m-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "gas_bill_payment",
    "name": "Gas Bill Payment",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "gas_bill_payment_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-gas_bill_payment-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "gasluxe",
    "name": "Gas-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "gasluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-gasluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "gasluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-gasluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gasluxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-gasluxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gasluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-gasluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gasluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-gasluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gasluxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-gasluxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gasluxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-gasluxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gasluxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-gasluxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "gasluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-gasluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "giorgio_armaniluxe",
    "name": "Giorgio Armani-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "giorgio_armaniluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-giorgio_armaniluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "giorgio_armaniluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-giorgio_armaniluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giorgio_armaniluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-giorgio_armaniluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giorgio_armaniluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-giorgio_armaniluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giorgio_armaniluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-giorgio_armaniluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "giva",
    "name": "GIVA",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "giva_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-giva-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-giva-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "giva_gold_jewellery",
    "name": "Giva Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "giva_gold_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-giva_gold_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_gold_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-giva_gold_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_gold_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-giva_gold_jewellery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_gold_jewellery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-giva_gold_jewellery-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_gold_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.26,
        "site": "https://vouchwise.in/out/buy-giva_gold_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_gold_jewellery_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-giva_gold_jewellery-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "giva_jewellery",
    "name": "Giva Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "giva_jewellery_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-giva_jewellery-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "giva_jewellery_men",
    "name": "Giva Jewellery Men",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "giva_jewellery_men_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-giva_jewellery_men-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "giva_silver_coin",
    "name": "Giva Silver Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "giva_silver_coin_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-giva_silver_coin-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_silver_coin_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-giva_silver_coin-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_silver_coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.76,
        "site": "https://vouchwise.in/out/buy-giva_silver_coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_silver_coin_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-giva_silver_coin-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "giva_silver_coin_custom",
    "name": "GIVA Silver Coin (Custom)",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "giva_silver_coin_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-giva_silver_coin_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "giva_silver_jewellery",
    "name": "Giva Silver Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "giva_silver_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-giva_silver_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_silver_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-giva_silver_jewellery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_silver_jewellery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-giva_silver_jewellery-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_silver_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.76,
        "site": "https://vouchwise.in/out/buy-giva_silver_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "giva_silver_jewellery_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-giva_silver_jewellery-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "glam_studios",
    "name": "Glam Studios",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "glam_studios_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.76,
        "site": "https://vouchwise.in/out/buy-glam_studios-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "goibibo_generic",
    "name": "Goibibo Generic",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "goibibo_generic_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-goibibo_generic-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "goibibo_generic_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-goibibo_generic-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "goibibo_hotel",
    "name": "Goibibo Hotel",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "goibibo_hotel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-goibibo_hotel-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "goibibo_hotel_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.1,
        "site": "https://vouchwise.in/out/buy-goibibo_hotel-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "goibibo_hotel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-goibibo_hotel-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "goibibo_hotel_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.26,
        "site": "https://vouchwise.in/out/buy-goibibo_hotel-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "google_play",
    "name": "Google Play",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "google_play_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-google_play-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "google_play_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-google_play-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "grt_jewellers",
    "name": "GRT Jewellers",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "grt_jewellers_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-grt_jewellers-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "grt_jewellers_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-grt_jewellers-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "grt_jewellers_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-grt_jewellers-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "grt_jewellers_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-grt_jewellers-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "grt_jewellers_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-grt_jewellers-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "grt_jewellers_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.01,
        "site": "https://vouchwise.in/out/buy-grt_jewellers-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "grt_jewellers_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-grt_jewellers-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "gstarluxe_gift_card",
    "name": "G-STAR-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "gstarluxe_gift_card_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-gstarluxe_gift_card-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "gyftr_pay",
    "name": "GyFTR PAY",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "gyftr_pay_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-gyftr_pay-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "h_by_hamleys_luxe",
    "name": "H BY HAMLEYS - Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "h_by_hamleys_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-h_by_hamleys_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "h_by_hamleys_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-h_by_hamleys_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "h_by_hamleys_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-h_by_hamleys_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "h_by_hamleys_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-h_by_hamleys_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hamleys_luxe",
    "name": "Hamleys - Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "hamleys_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-hamleys_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "hamleys_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-hamleys_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hamleys_luxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-hamleys_luxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hamleys_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-hamleys_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hamleys_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-hamleys_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hamleys_luxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-hamleys_luxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hamleys_luxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hamleys_luxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hamleys_luxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-hamleys_luxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hamleys_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-hamleys_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hammer",
    "name": "Hammer",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "hammer_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 23,
        "site": "https://vouchwise.in/out/buy-hammer-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hammer_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-hammer-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hammer_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hammer-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hammer_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hammer-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hammer_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 22.01,
        "site": "https://vouchwise.in/out/buy-hammer-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hammer_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-hammer-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "harpers_bazaar_india",
    "name": "Harper's Bazaar India",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "harpers_bazaar_india_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-harpers_bazaar_india-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "harpers_bazaar_india_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-harpers_bazaar_india-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "haute_sauce",
    "name": "Haute Sauce",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "haute_sauce_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-haute_sauce-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "haute_sauce_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-haute_sauce-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "haute_sauce_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-haute_sauce-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "headout",
    "name": "Headout",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "headout_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-headout-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "health_and_glow",
    "name": "Health and Glow",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "health_and_glow_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-health_and_glow-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "health_and_glow_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.2,
        "site": "https://vouchwise.in/out/buy-health_and_glow-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "health_and_glow_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-health_and_glow-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "health_and_glow_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-health_and_glow-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "health_and_glow_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-health_and_glow-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "health_and_glow_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-health_and_glow-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "health_and_glow_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.26,
        "site": "https://vouchwise.in/out/buy-health_and_glow-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "healthians",
    "name": "Healthians",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "healthians_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-healthians-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthians_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-healthians-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthians_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-healthians-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthians_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-healthians-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthians_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 16.76,
        "site": "https://vouchwise.in/out/buy-healthians-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthians_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-healthians-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "healthifyme_smart_plan",
    "name": "HealthifyMe Smart Plan",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "healthifyme_smart_plan_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.76,
        "site": "https://vouchwise.in/out/buy-healthifyme_smart_plan-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "healthkart",
    "name": "HealthKart",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "healthkart_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-healthkart-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthkart_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7.7,
        "site": "https://vouchwise.in/out/buy-healthkart-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "healthkart_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-healthkart-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthkart_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-healthkart-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthkart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-healthkart-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthkart_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-healthkart-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthkart_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-healthkart-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthkart_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.01,
        "site": "https://vouchwise.in/out/buy-healthkart-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "healthkart_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-healthkart-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "helios",
    "name": "Helios",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "helios_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-helios-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "helios_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-helios-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "helios_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-helios-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "helios_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-helios-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "helios_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-helios-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "helios_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-helios-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "helios_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-helios-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "helios_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-helios-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hidesign",
    "name": "Hidesign",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "hidesign_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-hidesign-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hidesign_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-hidesign-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "hidesign_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-hidesign-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hidesign_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-hidesign-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hidesign_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-hidesign-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hidesign_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-hidesign-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hidesign_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-hidesign-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hidesign_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hidesign-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hidesign_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.01,
        "site": "https://vouchwise.in/out/buy-hidesign-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hidesign_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-hidesign-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "himalaya",
    "name": "Himalaya",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "himalaya_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-himalaya-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "himalaya_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-himalaya-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "himalaya_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-himalaya-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "himalaya_wellness",
    "name": "Himalaya Wellness",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "himalaya_wellness_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-himalaya_wellness-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "himalaya_wellness_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 13.5,
        "site": "https://vouchwise.in/out/buy-himalaya_wellness-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "himalaya_wellness_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-himalaya_wellness-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "himalaya_wellness_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-himalaya_wellness-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "himalaya_wellness_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-himalaya_wellness-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "himalaya_wellness_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-himalaya_wellness-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "himalaya_wellness_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-himalaya_wellness-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hindustan_times_premium",
    "name": "Hindustan Times Premium",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "hindustan_times_premium_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 47.5,
        "site": "https://vouchwise.in/out/buy-hindustan_times_premium-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hindustan_times_premium_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 40,
        "site": "https://vouchwise.in/out/buy-hindustan_times_premium-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hindustan_times_premium_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 40,
        "site": "https://vouchwise.in/out/buy-hindustan_times_premium-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hindustan_times_premium_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 30,
        "site": "https://vouchwise.in/out/buy-hindustan_times_premium-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hindustan_times_premium_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hindustan_times_premium-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hoichoi",
    "name": "Hoichoi",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "hoichoi_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-hoichoi-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hoichoi_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hoichoi-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hoichoi_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-hoichoi-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hoichoi_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hoichoi-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hoichoi_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 15.26,
        "site": "https://vouchwise.in/out/buy-hoichoi-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hoichoi_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-hoichoi-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "holiday_tribe",
    "name": "Holiday Tribe",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "holiday_tribe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.26,
        "site": "https://vouchwise.in/out/buy-holiday_tribe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "home_stop",
    "name": "Home Stop",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "home_stop_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-home_stop-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "homecentre_offline",
    "name": "Homecentre Offline",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "homecentre_offline_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-homecentre_offline-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_offline_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.2,
        "site": "https://vouchwise.in/out/buy-homecentre_offline-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "homecentre_offline_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-homecentre_offline-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_offline_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-homecentre_offline-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_offline_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-homecentre_offline-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_offline_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-homecentre_offline-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_offline_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-homecentre_offline-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_offline_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.01,
        "site": "https://vouchwise.in/out/buy-homecentre_offline-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_offline_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-homecentre_offline-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "homecentre_online",
    "name": "Homecentre Online",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "homecentre_online_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-homecentre_online-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_online_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.4,
        "site": "https://vouchwise.in/out/buy-homecentre_online-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "homecentre_online_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-homecentre_online-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_online_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-homecentre_online-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_online_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-homecentre_online-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "homecentre_online_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-homecentre_online-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hoora",
    "name": "Hoora",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "hoora_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-hoora-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hoora_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-hoora-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hopscotch",
    "name": "Hopscotch",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "hopscotch_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-hopscotch-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hopscotch_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-hopscotch-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hopscotch_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hopscotch-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hp_pay",
    "name": "HP Pay",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "hp_pay_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hp_pay-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hp_pay_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hp_pay-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hp_pay_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-hp_pay-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hp_pay_inapp",
    "name": "HP Pay (In-App)",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "hp_pay_inapp_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hp_pay_inapp-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hp_pay_inr_5000",
    "name": "HP Pay (INR 5000)",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "hp_pay_inr_5000_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hp_pay_inr_5000-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hubble_physical_multibrand",
    "name": "Hubble Physical Multibrand",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "hubble_physical_multibrand_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hubble_physical_multibrand-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hugo_bossluxe",
    "name": "Hugo Boss-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "hugo_bossluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-hugo_bossluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "hugo_bossluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-hugo_bossluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hugo_bossluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hugo_bossluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hugo_bossluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-hugo_bossluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hugo_bossluxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hugo_bossluxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hugo_bossluxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-hugo_bossluxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hugo_bossluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-hugo_bossluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hunkemoller_luxe",
    "name": "Hunkemoller - Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "hunkemoller_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-hunkemoller_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hunkemoller_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hunkemoller_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hunkemoller_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-hunkemoller_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hunkemoller_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-hunkemoller_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hush_puppies",
    "name": "Hush Puppies",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "hush_puppies_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-hush_puppies-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "hush_puppies_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-hush_puppies-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hush_puppies_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-hush_puppies-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hush_puppies_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-hush_puppies-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hush_puppies_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-hush_puppies-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hush_puppies_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-hush_puppies-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hush_puppies_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-hush_puppies-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hush_puppies_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.01,
        "site": "https://vouchwise.in/out/buy-hush_puppies-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "hush_puppies_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-hush_puppies-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "hush_puppies_fixed",
    "name": "Hush Puppies (Fixed)",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "hush_puppies_fixed_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.76,
        "site": "https://vouchwise.in/out/buy-hush_puppies_fixed-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "igp",
    "name": "IGP",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "igp_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7.4,
        "site": "https://vouchwise.in/out/buy-igp-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "igp_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-igp-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-igp-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-igp-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-igp-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.76,
        "site": "https://vouchwise.in/out/buy-igp-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "igp_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-igp-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ikea",
    "name": "IKEA",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "ikea_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-ikea-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.65,
        "site": "https://vouchwise.in/out/buy-ikea-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ikea_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ikea-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-ikea-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-ikea-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-ikea-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ikea-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.01,
        "site": "https://vouchwise.in/out/buy-ikea-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ikea_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-ikea-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "imagine_apple_premium_reseller",
    "name": "Imagine Apple Premium Reseller",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "imagine_apple_premium_reseller_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-imagine_apple_premium_reseller-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "imagine_apple_premium_reseller_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.01,
        "site": "https://vouchwise.in/out/buy-imagine_apple_premium_reseller-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "india_today_english",
    "name": "India Today English",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "india_today_english_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-india_today_english-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "indian_terrain",
    "name": "Indian Terrain",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "indian_terrain_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-indian_terrain-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "indian_terrain_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-indian_terrain-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "indian_terrain_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-indian_terrain-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "indian_terrain_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-indian_terrain-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "indian_terrain_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-indian_terrain-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "indriya__aditya_birla_gold_jewellery",
    "name": "INDRIYA - Aditya Birla Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "indriya__aditya_birla_gold_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-indriya__aditya_birla_gold_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "indriya__aditya_birla_jewellery",
    "name": "INDRIYA - Aditya Birla Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "indriya__aditya_birla_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-indriya__aditya_birla_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "indriya__aditya_birla_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.01,
        "site": "https://vouchwise.in/out/buy-indriya__aditya_birla_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "indriya__aditya_birla_studded_jewellery",
    "name": "INDRIYA - Aditya Birla Studded Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "indriya__aditya_birla_studded_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-indriya__aditya_birla_studded_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "inglot",
    "name": "Inglot",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "inglot_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-inglot-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "inglot_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-inglot-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "inglot_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-inglot-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "inglot_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-inglot-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "inglot_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-inglot-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "inglot_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-inglot-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "inglot_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-inglot-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "inglot_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-inglot-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "inglot_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-inglot-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "inox_cinemas",
    "name": "INOX Cinemas",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "inox_cinemas_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 18.26,
        "site": "https://vouchwise.in/out/buy-inox_cinemas-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "instafab_plus",
    "name": "Instafab Plus",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "instafab_plus_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-instafab_plus-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "instafab_plus_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-instafab_plus-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "instafab_plus_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-instafab_plus-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "iocl",
    "name": "IOCL",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "iocl_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-iocl-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "iocl_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-iocl-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "irctc",
    "name": "IRCTC",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "irctc_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-irctc-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "irctc_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-irctc-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "irctc_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-irctc-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "itc_hotels",
    "name": "ITC Hotels",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "itc_hotels_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-itc_hotels-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-itc_hotels-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "itc_hotels_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-itc_hotels-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-itc_hotels-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-itc_hotels-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-itc_hotels-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-itc_hotels-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-itc_hotels-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "itc_hotels_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-itc_hotels-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ixigo",
    "name": "Ixigo",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "ixigo_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-ixigo-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ixigo_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-ixigo-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ixigo_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-ixigo-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ixigo_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ixigo-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ixigo_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ixigo-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ixigo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-ixigo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ixigo_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-ixigo-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ixigo_hotel",
    "name": "ixigo hotel",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "ixigo_hotel_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ixigo_hotel-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ixigo_hotel_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-ixigo_hotel-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ixigo_hotel_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-ixigo_hotel-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ixigo_hotel_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-ixigo_hotel-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "jimmy_chooluxe",
    "name": "JIMMY CHOO - Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "jimmy_chooluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-jimmy_chooluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "jimmy_chooluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-jimmy_chooluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jimmy_chooluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jimmy_chooluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jimmy_chooluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-jimmy_chooluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jimmy_chooluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-jimmy_chooluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "jiohotstar",
    "name": "JioHotstar",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "jiohotstar_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-jiohotstar-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-jiohotstar-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-jiohotstar-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-jiohotstar-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-jiohotstar-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-jiohotstar-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jiohotstar_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-jiohotstar-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "jockey",
    "name": "Jockey",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "jockey_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-jockey-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jockey_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-jockey-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "jockey_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-jockey-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jockey_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-jockey-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jockey_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-jockey-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jockey_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-jockey-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jockey_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-jockey-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jockey_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jockey-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jockey_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.01,
        "site": "https://vouchwise.in/out/buy-jockey-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jockey_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-jockey-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "jockey_custom",
    "name": "Jockey (Custom)",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "jockey_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.26,
        "site": "https://vouchwise.in/out/buy-jockey_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "jos_alukkas_diamond",
    "name": "Jos Alukkas Diamond",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "jos_alukkas_diamond_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-jos_alukkas_diamond-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jos_alukkas_diamond_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jos_alukkas_diamond-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "jos_alukkas_diamond_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-jos_alukkas_diamond-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jos_alukkas_diamond_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-jos_alukkas_diamond-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "jos_alukkas_gold_coin",
    "name": "Jos Alukkas Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "jos_alukkas_gold_coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jos_alukkas_gold_coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "jos_alukkas_gold_jewellery",
    "name": "Jos Alukkas Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "jos_alukkas_gold_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-jos_alukkas_gold_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jos_alukkas_gold_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-jos_alukkas_gold_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jos_alukkas_gold_jewellery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jos_alukkas_gold_jewellery-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "jos_alukkas_gold_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-jos_alukkas_gold_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "jos_alukkas_jewellery",
    "name": "Jos Alukkas Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "jos_alukkas_jewellery_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jos_alukkas_jewellery-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "joyalukas_diamond",
    "name": "Joyalukas Diamond",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "joyalukas_diamond_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-joyalukas_diamond-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "joyalukas_gold_jewellery",
    "name": "Joyalukas Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "joyalukas_gold_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-joyalukas_gold_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "joyalukas_gold_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-joyalukas_gold_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "joyalukas_gold_jewellery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-joyalukas_gold_jewellery-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "joyalukkas_diamond",
    "name": "Joyalukkas Diamond",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "joyalukkas_diamond_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-joyalukkas_diamond-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "joyalukkas_diamond_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.66,
        "site": "https://vouchwise.in/out/buy-joyalukkas_diamond-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "joyalukkas_diamond__platinum",
    "name": "Joyalukkas Diamond & Platinum",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "joyalukkas_diamond__platinum_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-joyalukkas_diamond__platinum-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "joyalukkas__diamond_jewellery",
    "name": "Joyalukkas Diamond Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "joyalukkas__diamond_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-joyalukkas__diamond_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "joyalukkas_gold_and_diamond",
    "name": "Joyalukkas Gold and Diamond",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "joyalukkas_gold_and_diamond_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.41,
        "site": "https://vouchwise.in/out/buy-joyalukkas_gold_and_diamond-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "joyalukkas__gold_coin",
    "name": "Joyalukkas Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "joyalukkas__gold_coin_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-joyalukkas__gold_coin-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "joyalukkas_pure_gold",
    "name": "Joyalukkas Pure Gold",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "joyalukkas_pure_gold_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.26,
        "site": "https://vouchwise.in/out/buy-joyalukkas_pure_gold-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "juicy_couturebagline",
    "name": "Juicy Couture-Bagline",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "juicy_couturebagline_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-juicy_couturebagline-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "juicy_couturebagline_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-juicy_couturebagline-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "juicy_couturebagline_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.01,
        "site": "https://vouchwise.in/out/buy-juicy_couturebagline-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "just_lil_things",
    "name": "Just Lil Things",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "just_lil_things_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7.9,
        "site": "https://vouchwise.in/out/buy-just_lil_things-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "just_lil_things_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-just_lil_things-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "just_lil_things_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 20.01,
        "site": "https://vouchwise.in/out/buy-just_lil_things-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kalki",
    "name": "KALKI",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "kalki_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-kalki-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalki_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-kalki-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalki_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-kalki-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalki_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-kalki-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalki_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.51,
        "site": "https://vouchwise.in/out/buy-kalki-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalki_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-kalki-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kalyan_diamond",
    "name": "Kalyan Diamond",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "kalyan_diamond_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-kalyan_diamond-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "kalyan_diamond_jewellery",
    "name": "Kalyan Diamond Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "kalyan_diamond_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-kalyan_diamond_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_diamond_jewellery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-kalyan_diamond_jewellery-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_diamond_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-kalyan_diamond_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_diamond_jewellery_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-kalyan_diamond_jewellery-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_diamond_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.51,
        "site": "https://vouchwise.in/out/buy-kalyan_diamond_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_diamond_jewellery_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-kalyan_diamond_jewellery-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kalyan_gold_and_silver_coins",
    "name": "Kalyan Gold and Silver coins",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "kalyan_gold_and_silver_coins_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.21,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_and_silver_coins-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kalyan_gold_coins",
    "name": "Kalyan Gold Coins",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "kalyan_gold_coins_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_coins-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_gold_coins_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.01,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_coins-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_gold_coins_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_coins-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kalyan_gold_jewellery",
    "name": "Kalyan Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "kalyan_gold_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_gold_jewellery_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_jewellery-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "kalyan_gold_jewellery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0.5,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_jewellery-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_gold_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_gold_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_jewellery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_gold_jewellery_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_jewellery-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_gold_jewellery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_jewellery-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_gold_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.51,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kalyan_gold_jewellery_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-kalyan_gold_jewellery-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kalyan_jewellers__gold_coin",
    "name": "Kalyan Jewellers - Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "kalyan_jewellers__gold_coin_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kalyan_jewellers__gold_coin-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kalyan_jewellers__gold_jewellery",
    "name": "Kalyan Jewellers - Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "kalyan_jewellers__gold_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-kalyan_jewellers__gold_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kalyan_jewellers_diamond_jewellery",
    "name": "Kalyan Jewellers Diamond Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "kalyan_jewellers_diamond_jewellery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kalyan_jewellers_diamond_jewellery-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kama_ayurveda",
    "name": "Kama Ayurveda",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "kama_ayurveda_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-kama_ayurveda-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "kama_ayurveda_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-kama_ayurveda-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kama_ayurveda_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kama_ayurveda-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kama_ayurveda_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-kama_ayurveda-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kama_ayurveda_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-kama_ayurveda-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kama_ayurveda_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kama_ayurveda-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kama_ayurveda_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-kama_ayurveda-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kate_spade_luxe",
    "name": "Kate Spade-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "kate_spade_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-kate_spade_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "kate_spade_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-kate_spade_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kate_spade_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kate_spade_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kate_spade_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-kate_spade_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kate_spade_luxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kate_spade_luxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kate_spade_luxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-kate_spade_luxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kate_spade_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-kate_spade_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ketan_diamonds__diamond_only",
    "name": "Ketan Diamonds - Diamond Only",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ketan_diamonds__diamond_only_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.01,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds__diamond_only-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ketan_diamonds__gold_coin",
    "name": "Ketan Diamonds - Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ketan_diamonds__gold_coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.41,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds__gold_coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ketan_diamonds__gold_jewellery",
    "name": "Ketan Diamonds - Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ketan_diamonds__gold_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.86,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds__gold_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ketan_diamonds_diamond_only",
    "name": "Ketan Diamonds Diamond Only",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ketan_diamonds_diamond_only_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_diamond_only-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ketan_diamonds_diamond_only_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_diamond_only-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ketan_diamonds_diamond_only_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_diamond_only-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ketan_diamonds_diamond_only_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_diamond_only-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ketan_diamonds_diamond_only_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_diamond_only-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ketan_diamonds_gold_coin",
    "name": "Ketan Diamonds Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ketan_diamonds_gold_coin_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_gold_coin-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ketan_diamonds_gold_coin_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_gold_coin-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ketan_diamonds_gold_coin_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_gold_coin-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ketan_diamonds_gold_coin_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_gold_coin-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ketan_diamonds_gold_jewellery",
    "name": "Ketan Diamonds Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ketan_diamonds_gold_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_gold_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ketan_diamonds_gold_jewellery_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_gold_jewellery-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ketan_diamonds_gold_jewellery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_gold_jewellery-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ketan_diamonds_gold_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_gold_jewellery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ketan_diamonds_gold_jewellery_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_gold_jewellery-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ketan_diamonds_gold_jewellery_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ketan_diamonds_gold_jewellery-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kfc",
    "name": "KFC",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "kfc_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-kfc-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "kfc_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-kfc-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-kfc-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-kfc-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-kfc-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-kfc-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.26,
        "site": "https://vouchwise.in/out/buy-kfc-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kfc_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kiehls",
    "name": "Kiehls",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "kiehls_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kiehls-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kiehls_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.76,
        "site": "https://vouchwise.in/out/buy-kiehls-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "kimirica",
    "name": "Kimirica",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "kimirica_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-kimirica-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kimirica_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-kimirica-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "kimirica_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-kimirica-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kimirica_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-kimirica-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kimirica_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-kimirica-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kimirica_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-kimirica-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kimirica_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.76,
        "site": "https://vouchwise.in/out/buy-kimirica-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "kimirica_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-kimirica-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "klook",
    "name": "Klook",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "klook_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-klook-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-klook-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-klook-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-klook-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-klook-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-klook-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "klook_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-klook-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "la_martinaluxe",
    "name": "La Martina-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "la_martinaluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-la_martinaluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "la_martinaluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-la_martinaluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "la_martinaluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-la_martinaluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "la_martinaluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-la_martinaluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "la_martinaluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-la_martinaluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lakme",
    "name": "Lakme",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "lakme_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-lakme-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lakme_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.01,
        "site": "https://vouchwise.in/out/buy-lakme-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lakme_salon",
    "name": "Lakme Salon",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "lakme_salon_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-lakme_salon-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lakme_salon_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme_salon-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lakme_salon_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme_salon-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lakme_salon_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.66,
        "site": "https://vouchwise.in/out/buy-lakme_salon-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "landline_bill_payment",
    "name": "Landline Bill Payment",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "landline_bill_payment_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-landline_bill_payment-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lawrence_and_mayo",
    "name": "Lawrence And Mayo",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "lawrence_and_mayo_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lawrence_and_mayo-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lawrence_and_mayo_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-lawrence_and_mayo-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lawrence_and_mayo_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lawrence_and_mayo-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lawrence_and_mayo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-lawrence_and_mayo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "le_creuset",
    "name": "Le Creuset",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "le_creuset_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-le_creuset-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "le_creuset_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-le_creuset-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "le_creuset_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-le_creuset-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "leaf",
    "name": "Leaf",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "leaf_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-leaf-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lee",
    "name": "Lee",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "lee_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-lee-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lee_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-lee-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lee_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-lee-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lee_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lee-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lee_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.76,
        "site": "https://vouchwise.in/out/buy-lee-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lenskart",
    "name": "LENSKART",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "lenskart_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-lenskart-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.3,
        "site": "https://vouchwise.in/out/buy-lenskart-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lenskart_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-lenskart-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-lenskart-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-lenskart-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-lenskart-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-lenskart-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lenskart-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-lenskart-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lenskart_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lenskart-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "levis",
    "name": "Levis",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "levis_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-levis-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "levis_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-levis-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-levis-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-levis-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-levis-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "levis_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "levis_offline",
    "name": "Levis Offline",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "levis_offline_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis_offline-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "liberty_offline",
    "name": "Liberty Offline",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "liberty_offline_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-liberty_offline-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_offline_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-liberty_offline-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_offline_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-liberty_offline-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_offline_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-liberty_offline-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_offline_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-liberty_offline-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_offline_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-liberty_offline-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_offline_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-liberty_offline-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "liberty_online",
    "name": "Liberty Online",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "liberty_online_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-liberty_online-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "liberty_online_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-liberty_online-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_online_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-liberty_online-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_online_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-liberty_online-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_online_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-liberty_online-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_online_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.76,
        "site": "https://vouchwise.in/out/buy-liberty_online-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "liberty_online_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-liberty_online-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lifestyle_offline",
    "name": "Lifestyle Offline",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "lifestyle_offline_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.3,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lifestyle_offline_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.01,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_offline_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle_offline-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lifestyle_online",
    "name": "Lifestyle Online",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "lifestyle_online_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle_online-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-lifestyle_online-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lifestyle_online_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-lifestyle_online-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-lifestyle_online-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-lifestyle_online-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-lifestyle_online-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-lifestyle_online-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.26,
        "site": "https://vouchwise.in/out/buy-lifestyle_online-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lifestyle_online_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle_online-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "linen_club",
    "name": "Linen Club",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "linen_club_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-linen_club-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "linen_club_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.2,
        "site": "https://vouchwise.in/out/buy-linen_club-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "linen_club_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-linen_club-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "linen_club_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-linen_club-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "linen_club_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.26,
        "site": "https://vouchwise.in/out/buy-linen_club-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lionsgate_play",
    "name": "Lionsgate Play",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "lionsgate_play_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-lionsgate_play-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lionsgate_play_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-lionsgate_play-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lionsgate_play_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 21,
        "site": "https://vouchwise.in/out/buy-lionsgate_play-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lionsgate_play_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 19.01,
        "site": "https://vouchwise.in/out/buy-lionsgate_play-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lionsgate_play_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-lionsgate_play-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lite_bite_foods",
    "name": "Lite Bite Foods",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "lite_bite_foods_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-lite_bite_foods-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lite_bite_foods_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-lite_bite_foods-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lite_bite_foods_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lite_bite_foods-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "live_hindustan",
    "name": "Live Hindustan",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "live_hindustan_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 47.5,
        "site": "https://vouchwise.in/out/buy-live_hindustan-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "live_hindustan_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 40,
        "site": "https://vouchwise.in/out/buy-live_hindustan-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "live_hindustan_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 40,
        "site": "https://vouchwise.in/out/buy-live_hindustan-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "live_hindustan_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 30,
        "site": "https://vouchwise.in/out/buy-live_hindustan-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "live_hindustan_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-live_hindustan-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "live_mint",
    "name": "Live Mint",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "live_mint_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 40,
        "site": "https://vouchwise.in/out/buy-live_mint-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "live_mint_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-live_mint-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "live_mint_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 33.76,
        "site": "https://vouchwise.in/out/buy-live_mint-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lohono_stays",
    "name": "Lohono Stays",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "lohono_stays_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lohono_stays-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lohono_stays_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lohono_stays-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lohono_stays_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-lohono_stays-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lohono_stays_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-lohono_stays-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lohono_stays_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-lohono_stays-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lohono_stays_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-lohono_stays-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lohono_stays_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-lohono_stays-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lohono_stays_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-lohono_stays-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "louis_philippe",
    "name": "Louis Philippe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "louis_philippe_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-louis_philippe-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "louis_philippe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.75,
        "site": "https://vouchwise.in/out/buy-louis_philippe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "louis_philippe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-louis_philippe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "louis_philippe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-louis_philippe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "louis_philippe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-louis_philippe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "louis_philippe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-louis_philippe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "louis_philippe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-louis_philippe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "louis_philippe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.01,
        "site": "https://vouchwise.in/out/buy-louis_philippe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "louis_philippe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-louis_philippe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lulu_hypermarket",
    "name": "LuLu Hypermarket",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "lulu_hypermarket_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lulu_hypermarket-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lulu_hypermarket_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.01,
        "site": "https://vouchwise.in/out/buy-lulu_hypermarket-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "lunch_box",
    "name": "Lunch Box",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "lunch_box_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-lunch_box-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "lunch_box_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-lunch_box-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lunch_box_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-lunch_box-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lunch_box_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-lunch_box-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lunch_box_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-lunch_box-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "lunch_box_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lunch_box-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "luxe",
    "name": "Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.2,
        "site": "https://vouchwise.in/out/buy-luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "luxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-luxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "luxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-luxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "luxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-luxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "luzo",
    "name": "Luzo",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "luzo_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-luzo-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "luzo_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-luzo-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "luzo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.76,
        "site": "https://vouchwise.in/out/buy-luzo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "luzo_salon_spa_and_clinics",
    "name": "Luzo salon Spa And Clinics",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "luzo_salon_spa_and_clinics_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-luzo_salon_spa_and_clinics-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mac",
    "name": "Mac",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "mac_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-mac-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mac_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-mac-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mac_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mac-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "machaan",
    "name": "Machaan",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "machaan_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-machaan-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "machaan_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-machaan-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "machaan_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-machaan-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "machaan_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-machaan-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "machaan_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.01,
        "site": "https://vouchwise.in/out/buy-machaan-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "machaan_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-machaan-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mainland_china",
    "name": "Mainland China",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "mainland_china_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-mainland_china-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mainland_china_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-mainland_china-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "mainland_china_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-mainland_china-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mainland_china_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-mainland_china-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mainland_china_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-mainland_china-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mainland_china_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-mainland_china-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mainland_china_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mainland_china-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mainland_china_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.01,
        "site": "https://vouchwise.in/out/buy-mainland_china-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mainland_china_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-mainland_china-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "majeluxe",
    "name": "Maje-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "majeluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-majeluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "majeluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-majeluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "majeluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-majeluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "majeluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-majeluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "majeluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-majeluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip",
    "name": "MakeMyTrip",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "makemytrip_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-makemytrip-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-makemytrip-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-makemytrip-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-makemytrip-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-makemytrip-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_bus",
    "name": "MakeMyTrip Bus",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "makemytrip_bus_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-makemytrip_bus-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_bus_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-makemytrip_bus-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_bus_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_bus-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_bus_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-makemytrip_bus-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_cab",
    "name": "MakeMyTrip Cab",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "makemytrip_cab_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-makemytrip_cab-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_cab_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-makemytrip_cab-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_cab_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_cab-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_cab_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-makemytrip_cab-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_holiday",
    "name": "MakeMyTrip Holiday",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "makemytrip_holiday_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_holiday_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 13.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.26,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_holiday_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-makemytrip_holiday-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_hotel",
    "name": "MakeMyTrip Hotel",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "makemytrip_hotel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "makemytrip_hotel_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.26,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_hotel_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-makemytrip_hotel-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_international",
    "name": "MakeMyTrip International",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "makemytrip_international_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.26,
        "site": "https://vouchwise.in/out/buy-makemytrip_international-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_rail",
    "name": "MakeMyTrip Rail",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "makemytrip_rail_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-makemytrip_rail-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_rail_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-makemytrip_rail-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "makemytrip_rail_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.26,
        "site": "https://vouchwise.in/out/buy-makemytrip_rail-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_12m",
    "name": "MakeMyTrip_12M",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "makemytrip_12m_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.51,
        "site": "https://vouchwise.in/out/buy-makemytrip_12m-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "makemytrip_6m",
    "name": "MakeMyTrip_6M",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "makemytrip_6m_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.01,
        "site": "https://vouchwise.in/out/buy-makemytrip_6m-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "malabar_diamond",
    "name": "Malabar Diamond",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "malabar_diamond_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-malabar_diamond-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "malabar_diamond_custom",
    "name": "Malabar Diamond (Custom)",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "malabar_diamond_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.51,
        "site": "https://vouchwise.in/out/buy-malabar_diamond_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "malabar_diamond_jewllery",
    "name": "Malabar Diamond Jewllery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "malabar_diamond_jewllery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-malabar_diamond_jewllery-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "malabar_diamonds",
    "name": "Malabar Diamonds",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "malabar_diamonds_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-malabar_diamonds-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_diamonds_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-malabar_diamonds-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_diamonds_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-malabar_diamonds-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_diamonds_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.51,
        "site": "https://vouchwise.in/out/buy-malabar_diamonds-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_diamonds_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-malabar_diamonds-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "malabar_gold_coin",
    "name": "Malabar Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "malabar_gold_coin_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-malabar_gold_coin-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_gold_coin_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-malabar_gold_coin-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_gold_coin_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-malabar_gold_coin-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_gold_coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.26,
        "site": "https://vouchwise.in/out/buy-malabar_gold_coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_gold_coin_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-malabar_gold_coin-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "malabar_gold_jewellery",
    "name": "Malabar Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "malabar_gold_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-malabar_gold_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_gold_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.01,
        "site": "https://vouchwise.in/out/buy-malabar_gold_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "malabar_jewellery",
    "name": "Malabar Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "malabar_jewellery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-malabar_jewellery-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-malabar_jewellery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_jewellery_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-malabar_jewellery-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "malabar_jewellery_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-malabar_jewellery-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mango",
    "name": "Mango",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "mango_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mango-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mango_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-mango-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mango_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-mango-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mango_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-mango-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mango_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-mango-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mango_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mango-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mango_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-mango-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "manyavar",
    "name": "Manyavar",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "manyavar_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-manyavar-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "manyavar_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-manyavar-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-manyavar-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "manyavar_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "marks__spencer",
    "name": "Marks & Spencer",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "marks__spencer_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-marks__spencer-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks__spencer_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.25,
        "site": "https://vouchwise.in/out/buy-marks__spencer-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "marks__spencer_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-marks__spencer-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks__spencer_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-marks__spencer-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks__spencer_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-marks__spencer-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks__spencer_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-marks__spencer-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks__spencer_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-marks__spencer-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks__spencer_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-marks__spencer-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marks__spencer_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-marks__spencer-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "marks_and_spencer",
    "name": "Marks and Spencer",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "marks_and_spencer_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-marks_and_spencer-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "marriott_hotels_india",
    "name": "Marriott Hotels India",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "marriott_hotels_india_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-marriott_hotels_india-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "marriott_hotels_india_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-marriott_hotels_india-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marriott_hotels_india_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-marriott_hotels_india-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "marriott_hotels_india_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-marriott_hotels_india-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "marriott_india_dining",
    "name": "Marriott India -Dining",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "marriott_india_dining_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-marriott_india_dining-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "marriott_india_spa",
    "name": "Marriott India -Spa",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "marriott_india_spa_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-marriott_india_spa-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "marriott_indiadining_variant_1b2b",
    "name": "Marriott India-Dining Variant 1-B2B",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "marriott_indiadining_variant_1b2b_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-marriott_indiadining_variant_1b2b-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "marriott_indiaspa_variant",
    "name": "Marriott India-Spa Variant",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "marriott_indiaspa_variant_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-marriott_indiaspa_variant-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "marriott_spa",
    "name": "Marriott Spa",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "marriott_spa_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-marriott_spa-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "matrix",
    "name": "Matrix",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "matrix_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-matrix-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "matrix_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-matrix-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "matrix_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-matrix-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "matrix_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-matrix-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "max_fashion_offline",
    "name": "Max Fashion Offline",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "max_fashion_offline_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-max_fashion_offline-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_offline_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-max_fashion_offline-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "max_fashion_offline_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-max_fashion_offline-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_offline_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-max_fashion_offline-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_offline_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-max_fashion_offline-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_offline_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-max_fashion_offline-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_offline_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-max_fashion_offline-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_offline_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.26,
        "site": "https://vouchwise.in/out/buy-max_fashion_offline-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_offline_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-max_fashion_offline-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "max_fashion_online",
    "name": "Max Fashion Online",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "max_fashion_online_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-max_fashion_online-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 4.4,
        "site": "https://vouchwise.in/out/buy-max_fashion_online-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "max_fashion_online_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-max_fashion_online-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-max_fashion_online-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-max_fashion_online-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-max_fashion_online-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max_fashion_online-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "max_fashion_online_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-max_fashion_online-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "me_n_moms",
    "name": "Me N Moms",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "me_n_moms_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-me_n_moms-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "me_n_moms_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-me_n_moms-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "me_n_moms_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-me_n_moms-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "me_n_moms_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-me_n_moms-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "me_n_moms_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-me_n_moms-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "me_n_moms_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-me_n_moms-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "me_n_moms_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.76,
        "site": "https://vouchwise.in/out/buy-me_n_moms-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "me_n_moms_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-me_n_moms-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "medibuddy",
    "name": "Medibuddy",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "medibuddy_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.7,
        "site": "https://vouchwise.in/out/buy-medibuddy-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mediwheel",
    "name": "Mediwheel",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "mediwheel_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-mediwheel-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mediwheel_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 21,
        "site": "https://vouchwise.in/out/buy-mediwheel-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mediwheel_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-mediwheel-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mediwheel_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-mediwheel-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mediwheel_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mediwheel-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mediwheel_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-mediwheel-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mia_by_tanishq",
    "name": "Mia by Tanishq",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "mia_by_tanishq_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-mia_by_tanishq-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mia_by_tanishq_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mia_by_tanishq-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "mia_by_tanishq_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-mia_by_tanishq-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mia_by_tanishq_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mia_by_tanishq-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mia_by_tanishq_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mia_by_tanishq-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mia_by_tanishq_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-mia_by_tanishq-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mia_by_tanishq_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-mia_by_tanishq-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "michael_korsluxe",
    "name": "Michael Kors-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "michael_korsluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-michael_korsluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "michael_korsluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-michael_korsluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "michael_korsluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-michael_korsluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "michael_korsluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-michael_korsluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "michael_korsluxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-michael_korsluxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "michael_korsluxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-michael_korsluxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "michael_korsluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-michael_korsluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "microsoft_office",
    "name": "Microsoft Office",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "microsoft_office_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-microsoft_office-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "microsoft_office_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-microsoft_office-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "microsoft_xbox_game_pass_core",
    "name": "Microsoft Xbox Game Pass Core",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "microsoft_xbox_game_pass_core_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-microsoft_xbox_game_pass_core-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "microsoft_xbox_game_pass_core_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-microsoft_xbox_game_pass_core-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "microsoft_xbox_game_pass_core_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-microsoft_xbox_game_pass_core-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "microsoft_xbox_pc_game_pass",
    "name": "Microsoft Xbox PC Game Pass",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "microsoft_xbox_pc_game_pass_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-microsoft_xbox_pc_game_pass-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "microsoft_xbox_pc_game_pass_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-microsoft_xbox_pc_game_pass-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "milkbasket",
    "name": "Milkbasket",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "milkbasket_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-milkbasket-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "milkbasket_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-milkbasket-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "milkbasket_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-milkbasket-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "milkbasket_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-milkbasket-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "milkbasket_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-milkbasket-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "milkbasket_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-milkbasket-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "milton",
    "name": "Milton",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "milton_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-milton-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "milton_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-milton-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "milton_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-milton-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "miniklub",
    "name": "MiniKlub",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "miniklub_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.2,
        "site": "https://vouchwise.in/out/buy-miniklub-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "miniklub_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-miniklub-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "miniklub_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-miniklub-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "minus30",
    "name": "Minus30",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "minus30_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-minus30-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "minus30_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-minus30-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "minus30_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-minus30-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "minus30_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-minus30-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "minus30_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-minus30-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "minus30_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.76,
        "site": "https://vouchwise.in/out/buy-minus30-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "minus30_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-minus30-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "miraggio",
    "name": "Miraggio",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "miraggio_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-miraggio-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "miraggio_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-miraggio-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "miraggio_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-miraggio-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mmt_wedding",
    "name": "MMT Wedding",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "mmt_wedding_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mmt_wedding-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "moba_legends_5v5",
    "name": "Moba Legends 5v5",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "moba_legends_5v5_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-moba_legends_5v5-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "moba_legends_5v5_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-moba_legends_5v5-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "moba_legends_5v5_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-moba_legends_5v5-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "moba_legends_5v5_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-moba_legends_5v5-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mobile_postpaid__bill_payment",
    "name": "Mobile Postpaid - Bill Payment",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "mobile_postpaid__bill_payment_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mobile_postpaid__bill_payment-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mobile_prepaid__recharge",
    "name": "Mobile Prepaid - Recharge",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "mobile_prepaid__recharge_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mobile_prepaid__recharge-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "modern_bazaar",
    "name": "Modern Bazaar",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "modern_bazaar_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.26,
        "site": "https://vouchwise.in/out/buy-modern_bazaar-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mokobara",
    "name": "Mokobara",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "mokobara_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-mokobara-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mokobara_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-mokobara-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "mokobara_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-mokobara-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mokobara_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-mokobara-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mother_care_luxe",
    "name": "Mother Care-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "mother_care_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-mother_care_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "mother_care_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-mother_care_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mother_care_luxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-mother_care_luxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mother_care_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mother_care_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mother_care_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-mother_care_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mother_care_luxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-mother_care_luxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mother_care_luxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-mother_care_luxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mother_care_luxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.76,
        "site": "https://vouchwise.in/out/buy-mother_care_luxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mother_care_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-mother_care_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mpj_gold_jewellery",
    "name": "MPJ Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "mpj_gold_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-mpj_gold_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mpj_gold_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-mpj_gold_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "mpj_diamond_jewellery",
    "name": "MPJ Diamond Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "mpj_diamond_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-mpj_diamond_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "mpj_diamond_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-mpj_diamond_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ms_xbox_game_pass_ultimate",
    "name": "MS Xbox Game Pass Ultimate",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "ms_xbox_game_pass_ultimate_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ms_xbox_game_pass_ultimate-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ms_xbox_game_pass_ultimate_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ms_xbox_game_pass_ultimate-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ms_xbox_game_pass_ultimate_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ms_xbox_game_pass_ultimate-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "muji_cafe",
    "name": "Muji Cafe",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "muji_cafe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-muji_cafe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "muji_luxe",
    "name": "MUJI-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "muji_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-muji_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "muji_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-muji_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "muji_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-muji_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "muji_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-muji_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "muro_qc",
    "name": "Muro QC",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "muro_qc_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-muro_qc-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "muscle_blaze",
    "name": "Muscle Blaze",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "muscle_blaze_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.01,
        "site": "https://vouchwise.in/out/buy-muscle_blaze-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "muthoot_gold_voucher",
    "name": "Muthoot Gold Voucher",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "muthoot_gold_voucher_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-muthoot_gold_voucher-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "muthoot_gold_voucher_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-muthoot_gold_voucher-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "muthoot_gold_voucher_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-muthoot_gold_voucher-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "muthoot_gold_voucher_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-muthoot_gold_voucher-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "muthoot_gold_voucher_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-muthoot_gold_voucher-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "my_jio_store",
    "name": "My Jio Store",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "my_jio_store_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-my_jio_store-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "myntra",
    "name": "Myntra",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "myntra_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "myntra_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-myntra-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-myntra-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "myntra_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "myntra_custom",
    "name": "Myntra (Custom)",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "myntra_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "myupchar_medicines",
    "name": "myUpchar Medicines",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "myupchar_medicines_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myupchar_medicines-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nat_habit",
    "name": "Nat Habit",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "nat_habit_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-nat_habit-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nat_habit_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 24.2,
        "site": "https://vouchwise.in/out/buy-nat_habit-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nat_habit_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 27.5,
        "site": "https://vouchwise.in/out/buy-nat_habit-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nat_habit_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-nat_habit-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nat_habit_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-nat_habit-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nat_habit_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-nat_habit-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nat_habit_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-nat_habit-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "natural_salon_10k",
    "name": "Natural Salon 10K",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "natural_salon_10k_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-natural_salon_10k-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "natural_salon_10k_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.76,
        "site": "https://vouchwise.in/out/buy-natural_salon_10k-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "natural_salon_20k",
    "name": "Natural Salon 20K",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "natural_salon_20k_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-natural_salon_20k-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "natural_salon_20k_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.76,
        "site": "https://vouchwise.in/out/buy-natural_salon_20k-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "natural_salon_4k",
    "name": "Natural Salon 4K",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "natural_salon_4k_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-natural_salon_4k-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "natural_salon_4k_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.76,
        "site": "https://vouchwise.in/out/buy-natural_salon_4k-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "naturals_salons",
    "name": "Naturals Salons",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "naturals_salons_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-naturals_salons-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "natures_basket",
    "name": "Nature's Basket",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "natures_basket_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-natures_basket-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "natures_basket_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-natures_basket-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nautica",
    "name": "Nautica",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "nautica_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nautica-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nautica_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-nautica-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nautica_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-nautica-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nautica_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nautica-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nautica_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.01,
        "site": "https://vouchwise.in/out/buy-nautica-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nautica_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-nautica-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "neemans",
    "name": "Neemans",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "neemans_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-neemans-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "neemans_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-neemans-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "neemans_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-neemans-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "neemans_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-neemans-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "neemans_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-neemans-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "neemans_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-neemans-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "neemans_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-neemans-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "neemans_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-neemans-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "neerus",
    "name": "Neerus",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "neerus_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.76,
        "site": "https://vouchwise.in/out/buy-neerus-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nestasia",
    "name": "Nestasia",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "nestasia_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-nestasia-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nestasia_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-nestasia-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nestasia_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-nestasia-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nestasia_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.26,
        "site": "https://vouchwise.in/out/buy-nestasia-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nestasia_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-nestasia-sbi_gyftr",
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
        "site": "https://vouchwise.in/out/buy-netmeds-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-netmeds-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-netmeds-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-netmeds-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.01,
        "site": "https://vouchwise.in/out/buy-netmeds-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "netmeds_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-netmeds-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "next",
    "name": "Next",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "next_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-next-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "next_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-next-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "next_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-next-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "next_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-next-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "next_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-next-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "next_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-next-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "next_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-next-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nilkamal_homes",
    "name": "Nilkamal Homes",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "nilkamal_homes_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nilkamal_homes-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nilkamal_homes_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-nilkamal_homes-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nilkamal_homes_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.51,
        "site": "https://vouchwise.in/out/buy-nilkamal_homes-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nintendo_shop",
    "name": "Nintendo Shop",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "nintendo_shop_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-nintendo_shop-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nintendo_shop_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-nintendo_shop-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nua_woman",
    "name": "Nua Woman",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "nua_woman_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-nua_woman-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nua_woman_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-nua_woman-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nua_woman_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 27.5,
        "site": "https://vouchwise.in/out/buy-nua_woman-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nua_woman_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 26,
        "site": "https://vouchwise.in/out/buy-nua_woman-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nua_woman_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-nua_woman-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nua_woman_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-nua_woman-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nua_woman_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 24.76,
        "site": "https://vouchwise.in/out/buy-nua_woman-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nua_woman_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-nua_woman-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nykaa",
    "name": "Nykaa",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "nykaa_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-nykaa-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nykaa_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-nykaa-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.01,
        "site": "https://vouchwise.in/out/buy-nykaa-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nykaa_fashion",
    "name": "Nykaa Fashion",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "nykaa_fashion_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nykaa_fashion_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_fashion_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.01,
        "site": "https://vouchwise.in/out/buy-nykaa_fashion-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "nykaa_man",
    "name": "Nykaa Man",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "nykaa_man_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa_man-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_man-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "nykaa_man_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa_man-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa_man-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa_man-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-nykaa_man-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa_man-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa_man-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "nykaa_man_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.01,
        "site": "https://vouchwise.in/out/buy-nykaa_man-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "o2_spa",
    "name": "O2 Spa",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "o2_spa_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-o2_spa-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ode_spa",
    "name": "ODE Spa",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "ode_spa_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-ode_spa-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ode_spa_salon",
    "name": "Ode Spa Salon",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "ode_spa_salon_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.2,
        "site": "https://vouchwise.in/out/buy-ode_spa_salon-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ode_spa_salon_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.76,
        "site": "https://vouchwise.in/out/buy-ode_spa_salon-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "oh_calcutta",
    "name": "Oh! Calcutta",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "oh_calcutta_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-oh_calcutta-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "oh_calcutta_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-oh_calcutta-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oh_calcutta_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-oh_calcutta-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oh_calcutta_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-oh_calcutta-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oh_calcutta_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-oh_calcutta-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oh_calcutta_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-oh_calcutta-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oh_calcutta_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-oh_calcutta-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oh_calcutta_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-oh_calcutta-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ola_cabs",
    "name": "OLA CABS",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "ola_cabs_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-ola_cabs-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ola_cabs_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola_cabs-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ola_cabs_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-ola_cabs-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ola_cabs_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-ola_cabs-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ola_cabs_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-ola_cabs-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ola_cabs_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-ola_cabs-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "only",
    "name": "ONLY",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "only_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-only-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "organic_india",
    "name": "Organic India",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "organic_india_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7.3,
        "site": "https://vouchwise.in/out/buy-organic_india-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "organic_india_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-organic_india-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "organic_india_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-organic_india-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "organic_india_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-organic_india-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "organic_india_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-organic_india-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "organic_india_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-organic_india-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "organic_india_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.26,
        "site": "https://vouchwise.in/out/buy-organic_india-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "organic_india_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-organic_india-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ornaz",
    "name": "Ornaz",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "ornaz_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-ornaz-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ornaz_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ornaz-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "oven_story",
    "name": "Oven Story",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "oven_story_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-oven_story-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oven_story_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-oven_story-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "oven_story_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-oven_story-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oven_story_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-oven_story-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oven_story_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-oven_story-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oven_story_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-oven_story-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oven_story_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.76,
        "site": "https://vouchwise.in/out/buy-oven_story-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "oven_story_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-oven_story-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "palmonas",
    "name": "Palmonas",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "palmonas_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-palmonas-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "palmonas_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-palmonas-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "palmonas_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-palmonas-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "palmonas_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-palmonas-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "palmonas_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-palmonas-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "palmonas_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.51,
        "site": "https://vouchwise.in/out/buy-palmonas-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "palmonas_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-palmonas-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pantaloons",
    "name": "Pantaloons",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "pantaloons_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-pantaloons-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pantaloons_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-pantaloons-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pantaloons-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-pantaloons-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-pantaloons-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pantaloons-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-pantaloons-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pantaloons_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-pantaloons-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "park_avenue",
    "name": "Park Avenue",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "park_avenue_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-park_avenue-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "park_avenue_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-park_avenue-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "park_avenue_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-park_avenue-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "park_avenue_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-park_avenue-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "park_avenue_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-park_avenue-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "park_avenue_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-park_avenue-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "park_avenue_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-park_avenue-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "parx",
    "name": "Parx",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "parx_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-parx-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "parx_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-parx-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "parx_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-parx-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "parx_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-parx-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "parx_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-parx-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "parx_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-parx-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "parx_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-parx-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "paul_and_shark_luxe",
    "name": "Paul and Shark -Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "paul_and_shark_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-paul_and_shark_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "paul_and_shark_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-paul_and_shark_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "paul_and_shark_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-paul_and_shark_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "paul_and_shark_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-paul_and_shark_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "paul_and_shark_luxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.76,
        "site": "https://vouchwise.in/out/buy-paul_and_shark_luxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "paul_and_shark_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-paul_and_shark_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "paul_smith_luxe",
    "name": "Paul Smith- Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "paul_smith_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-paul_smith_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "paul_smith_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-paul_smith_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "paul_smith_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-paul_smith_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pc_chandra_gold_coin",
    "name": "PC Chandra Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "pc_chandra_gold_coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pc_chandra_gold_coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pc_jeweller_diamond",
    "name": "PC Jeweller Diamond",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "pc_jeweller_diamond_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_diamond-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_diamond_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_diamond-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pc_jeweller_diamond_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_diamond-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_diamond_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_diamond-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_diamond_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_diamond-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_diamond_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_diamond-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_diamond_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.51,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_diamond-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_diamond_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_diamond-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pc_jeweller_gold",
    "name": "PC Jeweller Gold",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "pc_jeweller_gold_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0.5,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_gold-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_gold_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_gold-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_gold_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_gold-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_gold_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_gold-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_gold_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_gold-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_gold_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_gold-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pc_jeweller_gold_coin",
    "name": "PC Jeweller Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "pc_jeweller_gold_coin_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_gold_coin-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_gold_coin_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_gold_coin-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_gold_coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_gold_coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pc_jeweller_gold_coin_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pc_jeweller_gold_coin-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "peora_fashions",
    "name": "Peora Fashions",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "peora_fashions_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-peora_fashions-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "peora_fashions_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-peora_fashions-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "peora_fashions_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-peora_fashions-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pepperfry",
    "name": "Pepperfry",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "pepperfry_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-pepperfry-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pepperfry_luxury",
    "name": "Pepperfry Luxury",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "pepperfry_luxury_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pepperfry_luxury-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pepperfry_luxury_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.4,
        "site": "https://vouchwise.in/out/buy-pepperfry_luxury-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pepperfry_luxury_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-pepperfry_luxury-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pepperfry_luxury_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pepperfry_luxury-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pepperfry_luxury_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.76,
        "site": "https://vouchwise.in/out/buy-pepperfry_luxury-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "peter_england",
    "name": "Peter England",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "peter_england_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-peter_england-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "peter_england_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.75,
        "site": "https://vouchwise.in/out/buy-peter_england-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "peter_england_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-peter_england-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "peter_england_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-peter_england-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "peter_england_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-peter_england-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "peter_england_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-peter_england-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "peter_england_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-peter_england-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "peter_england_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-peter_england-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "peter_england_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-peter_england-sbi_gyftr",
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
        "site": "https://vouchwise.in/out/buy-pharmeasy-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "philips",
    "name": "Philips",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "philips_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-philips-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "philips_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-philips-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "philips_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-philips-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "philips_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-philips-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "philips_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.76,
        "site": "https://vouchwise.in/out/buy-philips-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "philips_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-philips-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "phonepe_fixed",
    "name": "PhonePe (Fixed)",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "phonepe_fixed_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-phonepe_fixed-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "phonepe_5000_and_10000",
    "name": "PhonePe 5000 and 10000",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "phonepe_5000_and_10000_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-phonepe_5000_and_10000-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pigeon",
    "name": "Pigeon",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "pigeon_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-pigeon-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pigeon_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-pigeon-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pigeon_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-pigeon-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pigeon_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-pigeon-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pigeon_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-pigeon-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pigeon_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.76,
        "site": "https://vouchwise.in/out/buy-pigeon-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pigeon_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pigeon-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pineperksrupayprimewh",
    "name": "PinePerksRupayPrim",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "pineperksrupayprimewh_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pineperksrupayprimewh-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pixel_go",
    "name": "Pixel Go",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "pixel_go_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.76,
        "site": "https://vouchwise.in/out/buy-pixel_go-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pizza_hut",
    "name": "Pizza Hut",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "pizza_hut_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pizza_hut-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pizza_hut-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pizza_hut_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-pizza_hut-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-pizza_hut-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-pizza_hut-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-pizza_hut-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-pizza_hut-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pizza_hut-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.01,
        "site": "https://vouchwise.in/out/buy-pizza_hut-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pizza_hut_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-pizza_hut-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "planet_fashion",
    "name": "Planet Fashion",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "planet_fashion_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-planet_fashion-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "planet_fashion_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-planet_fashion-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "planet_fashion_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-planet_fashion-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "planet_fashion_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-planet_fashion-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "planet_fashion_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-planet_fashion-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "planet_fashion_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-planet_fashion-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "planet_fashion_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-planet_fashion-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "planet_fashion_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-planet_fashion-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "points_for_good",
    "name": "Points for Good",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "points_for_good_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-points_for_good-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "points_for_good_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-points_for_good-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "points_for_good_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-points_for_good-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "points_for_good_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-points_for_good-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "points_for_good_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-points_for_good-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "points_for_good_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-points_for_good-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "points_for_good_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.26,
        "site": "https://vouchwise.in/out/buy-points_for_good-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "points_for_good_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-points_for_good-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "polar_bear",
    "name": "Polar Bear",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "polar_bear_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-polar_bear-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "polar_bear_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-polar_bear-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "polar_bear_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-polar_bear-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "polar_bear_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.76,
        "site": "https://vouchwise.in/out/buy-polar_bear-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "porter",
    "name": "Porter",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "porter_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-porter-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "porter_packers_and_movers",
    "name": "Porter Packers and Movers",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "porter_packers_and_movers_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-porter_packers_and_movers-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "porter_packers_and_movers_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-porter_packers_and_movers-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "porter_packers_and_movers_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-porter_packers_and_movers-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "porter_packers_and_movers_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-porter_packers_and_movers-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "porter_packers_and_movers_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-porter_packers_and_movers-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "porter_packers_and_movers_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-porter_packers_and_movers-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pottery_barn_luxe",
    "name": "Pottery Barn-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "pottery_barn_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-pottery_barn_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pottery_barn_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pottery_barn_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pottery_barn_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pottery_barn_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pottery_barn_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pottery_barn_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pottery_barn_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-pottery_barn_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "power_sutra",
    "name": "Power Sutra",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "power_sutra_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-power_sutra-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "power_sutra_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-power_sutra-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "prestige",
    "name": "Prestige",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "prestige_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-prestige-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "prestige_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-prestige-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "prestige_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-prestige-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "prestige_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-prestige-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "prestige_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-prestige-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "prestige_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-prestige-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "prestige_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-prestige-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "prestige_smart_kitchen",
    "name": "Prestige Smart Kitchen",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "prestige_smart_kitchen_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-prestige_smart_kitchen-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "prestige_smart_kitchen_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-prestige_smart_kitchen-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "prestige_smart_kitchen_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-prestige_smart_kitchen-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pret_a_manger_luxe",
    "name": "Pret A Manger-Luxe",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "pret_a_manger_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-pret_a_manger_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pret_a_manger_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pret_a_manger_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pret_a_manger_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pret_a_manger_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pret_a_manger_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pret_a_manger_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pret_a_manger_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-pret_a_manger_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pronto",
    "name": "Pronto",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "pronto_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-pronto-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pronto_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pronto-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pronto_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-pronto-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pronto_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-pronto-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pronto_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pronto-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pronto_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-pronto-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pronto_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.51,
        "site": "https://vouchwise.in/out/buy-pronto-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pronto_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-pronto-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "puma",
    "name": "Puma",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "puma_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-puma-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-puma-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "puma_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-puma-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-puma-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-puma-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-puma-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-puma-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "puma_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-puma-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "punjab_grill",
    "name": "Punjab Grill",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "punjab_grill_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-punjab_grill-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "punjab_grill_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-punjab_grill-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "punjab_grill_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-punjab_grill-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "punjab_grill_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-punjab_grill-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pure_home_living",
    "name": "Pure Home & Living",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "pure_home_living_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-pure_home_living-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pure_home_living_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-pure_home_living-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pure_home_living_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-pure_home_living-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pure_home_living_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pure_home_living-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pure_home_living_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-pure_home_living-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pure_home_living_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.01,
        "site": "https://vouchwise.in/out/buy-pure_home_living-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pure_home_living_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-pure_home_living-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pvr_cinemas",
    "name": "PVR Cinemas",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "pvr_cinemas_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-pvr_cinemas-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_cinemas_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pvr_cinemas-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "pvr_cinemas_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 18.26,
        "site": "https://vouchwise.in/out/buy-pvr_cinemas-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "pvr_inox",
    "name": "PVR INOX",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "pvr_inox_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-pvr_inox-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_inox_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 23.5,
        "site": "https://vouchwise.in/out/buy-pvr_inox-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_inox_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-pvr_inox-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_inox_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-pvr_inox-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_inox_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-pvr_inox-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_inox_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 22.01,
        "site": "https://vouchwise.in/out/buy-pvr_inox-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "pvr_inox_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pvr_inox-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "rb",
    "name": "R&B",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "rb_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-rb-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "rb_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-rb-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rb_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-rb-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rb_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-rb-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rb_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-rb-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rb_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-rb-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rb_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-rb-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rb_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-rb-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "rainbow_six_mobile",
    "name": "Rainbow Six Mobile",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "rainbow_six_mobile_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-rainbow_six_mobile-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rainbow_six_mobile_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.01,
        "site": "https://vouchwise.in/out/buy-rainbow_six_mobile-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "rangriti",
    "name": "Rangriti",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "rangriti_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-rangriti-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rangriti_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-rangriti-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "rangriti_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-rangriti-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rangriti_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-rangriti-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rangriti_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-rangriti-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rangriti_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-rangriti-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rangriti_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-rangriti-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rangriti_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.51,
        "site": "https://vouchwise.in/out/buy-rangriti-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rangriti_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-rangriti-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ratnadeep_super_market",
    "name": "Ratnadeep Super Market",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "ratnadeep_super_market_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ratnadeep_super_market-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ratnadeep_super_market_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-ratnadeep_super_market-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ratnadeep_super_market_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ratnadeep_super_market-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ratnadeep_super_market_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-ratnadeep_super_market-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ray_ban",
    "name": "Ray Ban",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "ray_ban_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-ray_ban-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ray_ban_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-ray_ban-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ray_ban_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-ray_ban-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ray_ban_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ray_ban-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ray_ban_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-ray_ban-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "raymond__ready_to_wear",
    "name": "Raymond - Ready to Wear",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "raymond__ready_to_wear_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-raymond__ready_to_wear-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "raymond__ready_to_wear_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-raymond__ready_to_wear-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "raymond__ready_to_wear_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-raymond__ready_to_wear-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "raymond__ready_to_wear_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-raymond__ready_to_wear-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "raymond__ready_to_wear_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-raymond__ready_to_wear-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "raymond__ready_to_wear_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-raymond__ready_to_wear-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "razer_gold",
    "name": "Razer Gold",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "razer_gold_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.01,
        "site": "https://vouchwise.in/out/buy-razer_gold-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "razorpay_money_bill",
    "name": "Razorpay Money Bill",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "razorpay_money_bill_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-razorpay_money_bill-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "razorpay_money_flex",
    "name": "Razorpay Money Flex",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "razorpay_money_flex_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-razorpay_money_flex-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "razorpay_money_flex_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.26,
        "site": "https://vouchwise.in/out/buy-razorpay_money_flex-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "readers_digest",
    "name": "Reader's Digest",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "readers_digest_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-readers_digest-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "relaxo",
    "name": "Relaxo",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "relaxo_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7.4,
        "site": "https://vouchwise.in/out/buy-relaxo-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "relaxo_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-relaxo-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "relaxo_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-relaxo-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "relaxo_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-relaxo-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "relaxo_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-relaxo-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "relaxo_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-relaxo-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "relaxo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-relaxo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "relaxo_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-relaxo-sbi_gyftr",
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
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-reliance_digital-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_digital-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-reliance_digital-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_digital-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_digital_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_digital-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_jewels",
    "name": "Reliance Jewels",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "reliance_jewels_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-reliance_jewels-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_jewels_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_jewels-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_jewels_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_jewels-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_jewels_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_jewels-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_jio_mart",
    "name": "Reliance Jio Mart",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "reliance_jio_mart_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-reliance_jio_mart-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_jio_mart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_jio_mart-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_jio_mart_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-reliance_jio_mart-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_jio_mart_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_jio_mart-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_jio_mart_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_jio_mart-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_my_jio_store",
    "name": "Reliance My Jio Store",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "reliance_my_jio_store_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_my_jio_store-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_my_jio_store_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-reliance_my_jio_store-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_my_jio_store_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_my_jio_store-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_my_jio_store_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_my_jio_store-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_smart",
    "name": "Reliance Smart",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "reliance_smart_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_smart-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "reliance_smart_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-reliance_smart-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_smart-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-reliance_smart-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance_smart-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-reliance_smart-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_smart_bazaar",
    "name": "Reliance Smart Bazaar",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "reliance_smart_bazaar_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance_smart_bazaar-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_bazaar_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-reliance_smart_bazaar-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_bazaar_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_smart_bazaar-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_bazaar_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-reliance_smart_bazaar-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_bazaar_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance_smart_bazaar-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_smart_point",
    "name": "Reliance Smart Point",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "reliance_smart_point_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-reliance_smart_point-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_point_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_smart_point-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_point_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-reliance_smart_point-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_point_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance_smart_point-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_smart_point_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance_smart_point-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_trends",
    "name": "Reliance Trends",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "reliance_trends_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-reliance_trends-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_trends_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance_trends-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "reliance_trends_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-reliance_trends-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_trends_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-reliance_trends-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_trends_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance_trends-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_trends_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-reliance_trends-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_trends_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.51,
        "site": "https://vouchwise.in/out/buy-reliance_trends-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_trends_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-reliance_trends-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "reliance_trends_footwear",
    "name": "Reliance Trends Footwear",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "reliance_trends_footwear_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-reliance_trends_footwear-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_trends_footwear_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-reliance_trends_footwear-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_trends_footwear_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-reliance_trends_footwear-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_trends_footwear_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-reliance_trends_footwear-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "reliance_trends_footwear_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-reliance_trends_footwear-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "replay_luxe_gift_card",
    "name": "Replay - Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "replay_luxe_gift_card_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-replay_luxe_gift_card-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "resonate",
    "name": "Resonate",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "resonate_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-resonate-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "resonate_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-resonate-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "resonate_router_ups",
    "name": "Resonate Router UPS",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "resonate_router_ups_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.2,
        "site": "https://vouchwise.in/out/buy-resonate_router_ups-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "resonate_router_ups_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-resonate_router_ups-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "rhythm_and_blues_rb",
    "name": "Rhythm and blues R&B",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "rhythm_and_blues_rb_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-rhythm_and_blues_rb-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "riot_league_of_legends_1660",
    "name": "Riot League of Legends 1660",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "riot_league_of_legends_1660_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.26,
        "site": "https://vouchwise.in/out/buy-riot_league_of_legends_1660-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "riot_league_of_legends_2900",
    "name": "Riot League of Legends 2900",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "riot_league_of_legends_2900_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.26,
        "site": "https://vouchwise.in/out/buy-riot_league_of_legends_2900-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "riot_league_of_legends_415",
    "name": "Riot League of Legends 415",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "riot_league_of_legends_415_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.26,
        "site": "https://vouchwise.in/out/buy-riot_league_of_legends_415-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "riot_league_of_legends_4150",
    "name": "Riot League of Legends 4150",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "riot_league_of_legends_4150_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.26,
        "site": "https://vouchwise.in/out/buy-riot_league_of_legends_4150-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "riot_league_of_legends_830",
    "name": "Riot League of Legends 830",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "riot_league_of_legends_830_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.26,
        "site": "https://vouchwise.in/out/buy-riot_league_of_legends_830-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ritu_kumarluxe",
    "name": "RITU KUMAR-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "ritu_kumarluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-ritu_kumarluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "ritu_kumarluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ritu_kumarluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ritu_kumarluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ritu_kumarluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ritu_kumarluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ritu_kumarluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ritu_kumarluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-ritu_kumarluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "roblox",
    "name": "Roblox",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "roblox_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-roblox-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "roblox_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-roblox-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "roblox_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.91,
        "site": "https://vouchwise.in/out/buy-roblox-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "roblox__20_credit__1600_robux__bonus",
    "name": "Roblox - $20 Credit / 1600 Robux + Bonus",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "roblox__20_credit__1600_robux__bonus_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-roblox__20_credit__1600_robux__bonus-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "roblox__50_credit__4000_robux__bonus",
    "name": "Roblox - $50 Credit / 4000 Robux + Bonus",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "roblox__50_credit__4000_robux__bonus_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-roblox__50_credit__4000_robux__bonus-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "roblox_gift_card",
    "name": "Roblox Gift Card",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "roblox_gift_card_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-roblox_gift_card-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "rowan_luxe_gift_card",
    "name": "ROWAN- Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "rowan_luxe_gift_card_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-rowan_luxe_gift_card-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rowan_luxe_gift_card_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-rowan_luxe_gift_card-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rowan_luxe_gift_card_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-rowan_luxe_gift_card-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "rowan_luxe_gift_card_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-rowan_luxe_gift_card-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "salvatoreferragamo_luxe",
    "name": "Salvatore-Ferragamo -Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "salvatoreferragamo_luxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-salvatoreferragamo_luxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "samsonite",
    "name": "Samsonite",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "samsonite_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-samsonite-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "samsonite_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-samsonite-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "samsonite_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-samsonite-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "samsonite_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-samsonite-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "samsonite_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-samsonite-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "samsonite_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-samsonite-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "samsonite_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.26,
        "site": "https://vouchwise.in/out/buy-samsonite-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "samsonite_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-samsonite-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sandroluxe",
    "name": "Sandro-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "sandroluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-sandroluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "sandroluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-sandroluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sandroluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sandroluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sandroluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-sandroluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sandroluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-sandroluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "satya_paul_accessories_luxe_gift_card",
    "name": "Satya Paul Accessories-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "satya_paul_accessories_luxe_gift_card_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-satya_paul_accessories_luxe_gift_card-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "satya_paul_luxe",
    "name": "Satya Paul-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "satya_paul_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-satya_paul_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "satya_paul_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-satya_paul_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "satya_paul_luxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-satya_paul_luxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "satya_paul_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-satya_paul_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "satya_paul_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-satya_paul_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "satya_paul_luxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-satya_paul_luxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "satya_paul_luxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-satya_paul_luxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "satya_paul_luxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-satya_paul_luxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "satya_paul_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-satya_paul_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "scotch__soda_luxe",
    "name": "Scotch & Soda-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "scotch__soda_luxe_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-scotch__soda_luxe-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "scotch__soda_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-scotch__soda_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "scotch__soda_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-scotch__soda_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "scotch__soda_luxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-scotch__soda_luxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "scotch__soda_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-scotch__soda_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "scotch__soda_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-scotch__soda_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "scotch__soda_luxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-scotch__soda_luxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "scotch__soda_luxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-scotch__soda_luxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "scotch__soda_luxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-scotch__soda_luxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "scotch__soda_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-scotch__soda_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "senco_gold",
    "name": "Senco Gold",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "senco_gold_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.26,
        "site": "https://vouchwise.in/out/buy-senco_gold-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "shell_fuel",
    "name": "Shell Fuel",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "shell_fuel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-shell_fuel-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shell_fuel_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shell_fuel-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "shemaroome",
    "name": "ShemarooMe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "shemaroome_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 32.5,
        "site": "https://vouchwise.in/out/buy-shemaroome-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shemaroome_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 28,
        "site": "https://vouchwise.in/out/buy-shemaroome-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shemaroome_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-shemaroome-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shemaroome_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 30,
        "site": "https://vouchwise.in/out/buy-shemaroome-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shemaroome_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-shemaroome-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "shiv_naresh",
    "name": "Shiv Naresh",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "shiv_naresh_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shiv_naresh-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "shiva_organic",
    "name": "Shiva Organic",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "shiva_organic_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-shiva_organic-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shiva_organic_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-shiva_organic-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shiva_organic_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-shiva_organic-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "shoppers_stop",
    "name": "Shoppers Stop",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "shoppers_stop_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-shoppers_stop-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers_stop-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "shoppers_stop_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-shoppers_stop-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-shoppers_stop-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers_stop-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-shoppers_stop-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-shoppers_stop-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers_stop-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shoppers_stop_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-shoppers_stop-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "shopy_vision",
    "name": "Shopy Vision",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "shopy_vision_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shopy_vision-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "shopy_vision_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-shopy_vision-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shopy_vision_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-shopy_vision-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shopy_vision_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shopy_vision-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "shopy_vision_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-shopy_vision-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sigree",
    "name": "SIGREE",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "sigree_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sigree-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sigree_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.01,
        "site": "https://vouchwise.in/out/buy-sigree-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "simon_carter",
    "name": "Simon Carter",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "simon_carter_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-simon_carter-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "simon_carter_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.13,
        "site": "https://vouchwise.in/out/buy-simon_carter-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "simon_carter_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-simon_carter-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "simon_carter_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-simon_carter-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "simon_carter_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-simon_carter-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "simon_carter_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-simon_carter-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "simon_carter_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-simon_carter-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "simon_carter_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.91,
        "site": "https://vouchwise.in/out/buy-simon_carter-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "simon_carter_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-simon_carter-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "simple",
    "name": "Simple",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "simple_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-simple-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "simple_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-simple-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "skechers",
    "name": "Skechers",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "skechers_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-skechers-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-skechers-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "skechers_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-skechers-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-skechers-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-skechers-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-skechers-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-skechers-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skechers_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-skechers-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "skinn",
    "name": "Skinn",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "skinn_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-skinn-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skinn_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-skinn-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skinn_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-skinn-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skinn_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-skinn-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skinn_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-skinn-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skinn_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-skinn-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "skullcandy",
    "name": "Skullcandy",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "skullcandy_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-skullcandy-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skullcandy_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-skullcandy-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "skullcandy_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-skullcandy-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skullcandy_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skullcandy-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skullcandy_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-skullcandy-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skullcandy_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-skullcandy-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skullcandy_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-skullcandy-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skullcandy_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 15.51,
        "site": "https://vouchwise.in/out/buy-skullcandy-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "skullcandy_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-skullcandy-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "smile_foundation",
    "name": "Smile Foundation",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "smile_foundation_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-smile_foundation-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "smile_foundation_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-smile_foundation-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "smile_foundation_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-smile_foundation-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "smile_foundation_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-smile_foundation-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "smile_foundation_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.76,
        "site": "https://vouchwise.in/out/buy-smile_foundation-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "smile_foundation_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-smile_foundation-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "snitch",
    "name": "Snitch",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "snitch_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-snitch-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "snitch_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-snitch-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "snitch_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-snitch-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "snitch_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-snitch-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "snitch_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-snitch-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "snitch_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-snitch-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "snitch_custom",
    "name": "Snitch (Custom)",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "snitch_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.26,
        "site": "https://vouchwise.in/out/buy-snitch_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "soch",
    "name": "Soch",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "soch_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5.1,
        "site": "https://vouchwise.in/out/buy-soch-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "soch_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-soch-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "soch_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-soch-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "soch_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-soch-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "soch_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-soch-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "soch_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.01,
        "site": "https://vouchwise.in/out/buy-soch-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "soch_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-soch-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sony_playstation",
    "name": "Sony Playstation",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "sony_playstation_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sony_playstation-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sonyliv",
    "name": "SonyLiv",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "sonyliv_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-sonyliv-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-sonyliv-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-sonyliv-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sonyliv_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-sonyliv-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sotc_travel",
    "name": "SOTC Travel",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "sotc_travel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-sotc_travel-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sotc_travel_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sotc_travel-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "sotc_travel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-sotc_travel-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sotc_travel_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.26,
        "site": "https://vouchwise.in/out/buy-sotc_travel-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "soulflower",
    "name": "Soulflower",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "soulflower_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-soulflower-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "soulflower_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-soulflower-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "soulflower_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-soulflower-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "soulflower_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-soulflower-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "soulflower_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 13.76,
        "site": "https://vouchwise.in/out/buy-soulflower-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "soulflower_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-soulflower-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "spar_hypermarket",
    "name": "Spar Hypermarket",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "spar_hypermarket_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-spar_hypermarket-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "speedo",
    "name": "Speedo",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "speedo_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-speedo-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "speedo_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-speedo-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "speedo_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-speedo-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "speedo_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-speedo-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "speedo_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-speedo-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "speedo_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-speedo-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "speedo_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-speedo-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "speedo_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-speedo-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "speedo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-speedo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "speedo_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-speedo-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "spencers_retail",
    "name": "Spencer's Retail",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "spencers_retail_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-spencers_retail-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "spencers_retail_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-spencers_retail-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "spencers_retail_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-spencers_retail-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "spencers_retail_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-spencers_retail-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "spencers_retail_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-spencers_retail-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "spicejet",
    "name": "SpiceJet",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "spicejet_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-spicejet-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "spicejet_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-spicejet-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ssunsu",
    "name": "SSUNSU",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "ssunsu_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-ssunsu-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ssunsu_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-ssunsu-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ssunsu_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ssunsu-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ssunsu_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ssunsu-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "ssunsu_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.01,
        "site": "https://vouchwise.in/out/buy-ssunsu-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "star_bazaar",
    "name": "STAR BAZAAR",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "star_bazaar_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-star_bazaar-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "starbucks",
    "name": "Starbucks",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "starbucks_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-starbucks-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 4.2,
        "site": "https://vouchwise.in/out/buy-starbucks-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "starbucks_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-starbucks-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-starbucks-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-starbucks-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-starbucks-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-starbucks-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-starbucks-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.76,
        "site": "https://vouchwise.in/out/buy-starbucks-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "starbucks_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-starbucks-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "stay_vista",
    "name": "Stay Vista",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "stay_vista_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-stay_vista-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "stay_vista_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.76,
        "site": "https://vouchwise.in/out/buy-stay_vista-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "steam",
    "name": "Steam",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "steam_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-steam-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "steam_wallet",
    "name": "Steam Wallet",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "steam_wallet_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-steam_wallet-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steam_wallet_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-steam_wallet-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steam_wallet_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-steam_wallet-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steam_wallet_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-steam_wallet-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "steam_wallet_inr_150",
    "name": "Steam Wallet INR 150",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "steam_wallet_inr_150_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.26,
        "site": "https://vouchwise.in/out/buy-steam_wallet_inr_150-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "steam_wallet_inr_1680",
    "name": "Steam Wallet INR 1680",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "steam_wallet_inr_1680_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.26,
        "site": "https://vouchwise.in/out/buy-steam_wallet_inr_1680-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "steam_wallet_inr_500",
    "name": "Steam Wallet INR 500",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "steam_wallet_inr_500_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.26,
        "site": "https://vouchwise.in/out/buy-steam_wallet_inr_500-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "steam_wallet_inr_975",
    "name": "Steam Wallet INR 975",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "steam_wallet_inr_975_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.26,
        "site": "https://vouchwise.in/out/buy-steam_wallet_inr_975-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sterling_holidays",
    "name": "Sterling Holidays",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "sterling_holidays_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.2,
        "site": "https://vouchwise.in/out/buy-sterling_holidays-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "sterling_holidays_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-sterling_holidays-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sterling_holidays_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sterling_holidays-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sterling_holidays_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-sterling_holidays-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "steve_maddenluxe",
    "name": "Steve Madden-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "steve_maddenluxe_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-steve_maddenluxe-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steve_maddenluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-steve_maddenluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "steve_maddenluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-steve_maddenluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steve_maddenluxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-steve_maddenluxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steve_maddenluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-steve_maddenluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steve_maddenluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-steve_maddenluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steve_maddenluxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-steve_maddenluxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steve_maddenluxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-steve_maddenluxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steve_maddenluxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-steve_maddenluxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "steve_maddenluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-steve_maddenluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "street_foods_by_punjab_grill",
    "name": "Street Foods By Punjab Grill",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "street_foods_by_punjab_grill_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-street_foods_by_punjab_grill-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "street_foods_by_punjab_grill_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-street_foods_by_punjab_grill-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "street_foods_by_punjab_grill_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-street_foods_by_punjab_grill-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "street_foods_by_punjab_grill_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-street_foods_by_punjab_grill-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "style_baazar",
    "name": "STYLE BAAZAR",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "style_baazar_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-style_baazar-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "style_baazar_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-style_baazar-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "style_baazar_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-style_baazar-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "style_baazar_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-style_baazar-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "style_baazar_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.26,
        "site": "https://vouchwise.in/out/buy-style_baazar-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "style_baazar_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-style_baazar-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "subway",
    "name": "Subway",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "subway_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-subway-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-subway-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "subway_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-subway-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-subway-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-subway-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-subway-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-subway-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-subway-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-subway-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "subway_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-subway-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "subway_custom",
    "name": "Subway (Custom)",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "subway_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-subway_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sunglass_hut_luxe",
    "name": "Sunglass Hut-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "sunglass_hut_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-sunglass_hut_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "sunglass_hut_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-sunglass_hut_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sunglass_hut_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sunglass_hut_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sunglass_hut_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-sunglass_hut_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sunglass_hut_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-sunglass_hut_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sunscoop",
    "name": "Sunscoop",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "sunscoop_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-sunscoop-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sunscoop_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-sunscoop-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sunscoop_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-sunscoop-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sunscoop_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sunscoop-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sunscoop_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-sunscoop-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "supa",
    "name": "SUPA",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "supa_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-supa-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "superbottoms",
    "name": "Superbottoms",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "superbottoms_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-superbottoms-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superbottoms_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-superbottoms-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superbottoms_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-superbottoms-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superbottoms_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.01,
        "site": "https://vouchwise.in/out/buy-superbottoms-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superbottoms_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-superbottoms-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "superdry_sport_luxe",
    "name": "SUPERDRY SPORT- Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "superdry_sport_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-superdry_sport_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superdry_sport_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-superdry_sport_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superdry_sport_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-superdry_sport_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superdry_sport_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-superdry_sport_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "superdry_luxe",
    "name": "Superdry-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "superdry_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-superdry_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "superdry_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-superdry_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superdry_luxe_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-superdry_luxe-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superdry_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-superdry_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superdry_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-superdry_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superdry_luxe_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-superdry_luxe-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superdry_luxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-superdry_luxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superdry_luxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-superdry_luxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "superdry_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-superdry_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "surat_diamond_offer",
    "name": "Surat Diamond Offer",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "surat_diamond_offer_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-surat_diamond_offer-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "surat_diamonds",
    "name": "Surat Diamonds",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "surat_diamonds_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-surat_diamonds-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "surat_diamonds_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-surat_diamonds-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "surat_diamonds_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-surat_diamonds-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "surat_diamonds_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-surat_diamonds-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "surat_diamonds_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.76,
        "site": "https://vouchwise.in/out/buy-surat_diamonds-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "surat_diamonds_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-surat_diamonds-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "surat_diamonds_main",
    "name": "Surat Diamonds Main",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "surat_diamonds_main_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-surat_diamonds_main-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "surat_diamonds_main_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-surat_diamonds_main-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "surat_diamonds_main_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-surat_diamonds_main-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "surat_diamonds_main_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.01,
        "site": "https://vouchwise.in/out/buy-surat_diamonds_main-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "surat_diamonds_solitaire",
    "name": "Surat Diamonds Solitaire",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "surat_diamonds_solitaire_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-surat_diamonds_solitaire-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "surat_diamonds_solitaire_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-surat_diamonds_solitaire-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "surat_diamonds_solitaire_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.01,
        "site": "https://vouchwise.in/out/buy-surat_diamonds_solitaire-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "swathi_hospitality",
    "name": "Swathi Hospitality",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "swathi_hospitality_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-swathi_hospitality-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sweet_bengal",
    "name": "Sweet Bengal",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "sweet_bengal_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-sweet_bengal-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "sweet_bengal_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-sweet_bengal-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_bengal_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-sweet_bengal-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_bengal_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-sweet_bengal-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_bengal_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-sweet_bengal-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_bengal_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sweet_bengal-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_bengal_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 12.01,
        "site": "https://vouchwise.in/out/buy-sweet_bengal-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_bengal_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-sweet_bengal-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sweet_truth",
    "name": "Sweet Truth",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "sweet_truth_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-sweet_truth-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_truth_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-sweet_truth-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_truth_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-sweet_truth-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_truth_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-sweet_truth-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_truth_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-sweet_truth-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_truth_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-sweet_truth-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "sweet_truth_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-sweet_truth-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "sweet_truth_dessert",
    "name": "Sweet Truth Dessert",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "sweet_truth_dessert_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-sweet_truth_dessert-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "swiggy_instamart",
    "name": "Swiggy Instamart",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "swiggy_instamart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-swiggy_instamart-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "swiggy_money_voucher",
    "name": "Swiggy Money Voucher",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "swiggy_money_voucher_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy_money_voucher-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "swiggy_money_voucher_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-swiggy_money_voucher-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_money_voucher_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-swiggy_money_voucher-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_money_voucher_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy_money_voucher-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_money_voucher_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-swiggy_money_voucher-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_money_voucher_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-swiggy_money_voucher-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_money_voucher_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy_money_voucher-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "swiggy_money_voucher_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-swiggy_money_voucher-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "swiss_beauty",
    "name": "SWISS BEAUTY",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "swiss_beauty_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiss_beauty-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ta_iserveu_gift_card__generic_upto_2000",
    "name": "TA iServeU Gift Card - Generic (Upto 2000)",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ta_iserveu_gift_card__generic_upto_2000_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": -0.25,
        "site": "https://vouchwise.in/out/buy-ta_iserveu_gift_card__generic_upto_2000-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ta_iserveu_gift_card__generic_variant",
    "name": "TA iServeU Gift Card - Generic Variant",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ta_iserveu_gift_card__generic_variant_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ta_iserveu_gift_card__generic_variant-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ta_iserveu_gift_card__limited_upto_2000",
    "name": "TA iServeU Gift Card - Limited (Upto 2000)",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ta_iserveu_gift_card__limited_upto_2000_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.25,
        "site": "https://vouchwise.in/out/buy-ta_iserveu_gift_card__limited_upto_2000-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ta_iserveu_gift_card__limited_variant",
    "name": "TA iServeU Gift Card - Limited Variant",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ta_iserveu_gift_card__limited_variant_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ta_iserveu_gift_card__limited_variant-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ta_iserveu_gift_card__max_variant",
    "name": "TA iServeU Gift Card - Max Variant",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ta_iserveu_gift_card__max_variant_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ta_iserveu_gift_card__max_variant-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "ta_iserveu_gift_card__max_variant_upto_1000",
    "name": "TA iServeU Gift Card - Max Variant (Upto 1000)",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "ta_iserveu_gift_card__max_variant_upto_1000_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ta_iserveu_gift_card__max_variant_upto_1000-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "taco_bell",
    "name": "Taco Bell",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "taco_bell_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-taco_bell-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taco_bell_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-taco_bell-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "taco_bell_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-taco_bell-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taco_bell_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.76,
        "site": "https://vouchwise.in/out/buy-taco_bell-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tailorman",
    "name": "Tailorman",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "tailorman_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tailorman-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "taj_experiences",
    "name": "Taj Experiences",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "taj_experiences_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-taj_experiences-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.4,
        "site": "https://vouchwise.in/out/buy-taj_experiences-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "taj_experiences_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-taj_experiences-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-taj_experiences-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-taj_experiences-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-taj_experiences-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-taj_experiences-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_experiences_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-taj_experiences-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "taj_hotels",
    "name": "Taj Hotels",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "taj_hotels_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-taj_hotels-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_hotels_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-taj_hotels-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "taj_hotels_j_wellness_circle",
    "name": "Taj Hotels J Wellness Circle",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "taj_hotels_j_wellness_circle_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-taj_hotels_j_wellness_circle-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_hotels_j_wellness_circle_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-taj_hotels_j_wellness_circle-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_hotels_j_wellness_circle_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-taj_hotels_j_wellness_circle-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_hotels_j_wellness_circle_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-taj_hotels_j_wellness_circle-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taj_hotels_j_wellness_circle_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-taj_hotels_j_wellness_circle-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "taj_hotels_j_wellness_circle_bliss_duo",
    "name": "Taj Hotels J Wellness Circle Bliss Duo",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "taj_hotels_j_wellness_circle_bliss_duo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.26,
        "site": "https://vouchwise.in/out/buy-taj_hotels_j_wellness_circle_bliss_duo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "taj_hotels_j_wellness_circle_bliss_solo",
    "name": "Taj Hotels J Wellness Circle Bliss Solo",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "taj_hotels_j_wellness_circle_bliss_solo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.26,
        "site": "https://vouchwise.in/out/buy-taj_hotels_j_wellness_circle_bliss_solo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "taj_hotels_j_wellness_couple_spa",
    "name": "Taj Hotels J Wellness Couple SPA",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "taj_hotels_j_wellness_couple_spa_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-taj_hotels_j_wellness_couple_spa-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "taj_hotels_j_wellness_spa",
    "name": "Taj Hotels J Wellness SPA",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "taj_hotels_j_wellness_spa_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-taj_hotels_j_wellness_spa-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "taneira",
    "name": "Taneira",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "taneira_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-taneira-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taneira_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-taneira-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "taneira_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-taneira-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taneira_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-taneira-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taneira_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-taneira-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taneira_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-taneira-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taneira_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-taneira-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taneira_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-taneira-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "taneira_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-taneira-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tanishq",
    "name": "Tanishq",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "tanishq_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tanishq_diamond_jewellery",
    "name": "Tanishq Diamond Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "tanishq_diamond_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_diamond_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_diamond_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_diamond_jewellery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_diamond_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-tanishq_diamond_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tanishq_gold_coin",
    "name": "Tanishq Gold Coin",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "tanishq_gold_coin_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_coin-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_coin_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_coin-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_coin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_coin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tanishq_gold_jewellery",
    "name": "Tanishq Gold Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "tanishq_gold_jewellery_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tanishq_gold_jewellery_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.26,
        "site": "https://vouchwise.in/out/buy-tanishq_gold_jewellery-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tanishq_mia_studded_jewellery",
    "name": "Tanishq Mia Studded Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "tanishq_mia_studded_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-tanishq_mia_studded_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tanishq_studded",
    "name": "Tanishq Studded",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "tanishq_studded_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_studded-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tanishq_studded_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq_studded-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tanishq_studded_jewellery",
    "name": "Tanishq Studded Jewellery",
    "category_name": "Miscellaneous",
    "portals": [
      {
        "compositeId": "tanishq_studded_jewellery_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-tanishq_studded_jewellery-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tasva",
    "name": "Tasva",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tasva_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tasva-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tasva_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-tasva-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tasva_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.26,
        "site": "https://vouchwise.in/out/buy-tasva-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tata_cliq",
    "name": "TATA CLiQ",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tata_cliq_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tata_cliq-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tata_cliq-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tata_cliq_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata_cliq-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata_cliq-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-tata_cliq-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-tata_cliq-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata_cliq-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-tata_cliq-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-tata_cliq-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tata_cliq_fashion",
    "name": "TATA CLiQ Fashion",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tata_cliq_fashion_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata_cliq_fashion-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_fashion_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-tata_cliq_fashion-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tata_cliq_luxury",
    "name": "Tata CliQ Luxury",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tata_cliq_luxury_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tata_cliq_luxury_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tata_cliq_luxury_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-tata_cliq_luxury-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tattva_spa",
    "name": "Tattva Spa",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "tattva_spa_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7.4,
        "site": "https://vouchwise.in/out/buy-tattva_spa-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tattva_spa_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-tattva_spa-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tattva_spa_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-tattva_spa-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tattva_spa_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tattva_spa-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tattva_spa_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-tattva_spa-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tattva_spa_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.76,
        "site": "https://vouchwise.in/out/buy-tattva_spa-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tattva_spa_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-tattva_spa-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tcns_aurelia",
    "name": "TCNS Aurelia",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tcns_aurelia_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tcns_aurelia-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "tcns_w",
    "name": "TCNS W",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tcns_w_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tcns_w-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "tego",
    "name": "Tego",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "tego_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-tego-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tego_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-tego-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tego_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tego-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tego_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tego-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tego_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-tego-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tego_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tego-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tego_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 13.76,
        "site": "https://vouchwise.in/out/buy-tego-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tego_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-tego-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tgif",
    "name": "TGIF",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "tgif_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tgif-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tgif_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tgif-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tgif_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-tgif-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tgif_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tgif-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tgif_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tgif-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tgif_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.76,
        "site": "https://vouchwise.in/out/buy-tgif-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tgif_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-tgif-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_bear_house",
    "name": "The Bear House",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "the_bear_house_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-the_bear_house-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_body_shop",
    "name": "The Body Shop",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "the_body_shop_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-the_body_shop-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "the_body_shop_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-the_body_shop-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_body_shop_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-the_body_shop-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_body_shop_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-the_body_shop-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_body_shop_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-the_body_shop-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_body_shop_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-the_body_shop-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_body_shop_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.01,
        "site": "https://vouchwise.in/out/buy-the_body_shop-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_body_shop_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-the_body_shop-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_collective",
    "name": "The Collective",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "the_collective_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-the_collective-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "the_collective_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-the_collective-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_collective_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-the_collective-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_good_bowl",
    "name": "The Good Bowl",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "the_good_bowl_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-the_good_bowl-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_good_bowl_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-the_good_bowl-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_good_bowl_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-the_good_bowl-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_good_bowl_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-the_good_bowl-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_good_bowl_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-the_good_bowl-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_good_bowl_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.76,
        "site": "https://vouchwise.in/out/buy-the_good_bowl-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_good_bowl_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-the_good_bowl-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_leela",
    "name": "The Leela",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "the_leela_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.1,
        "site": "https://vouchwise.in/out/buy-the_leela-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "the_leela_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-the_leela-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_leela_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-the_leela-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_man_company",
    "name": "The Man Company",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "the_man_company_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-the_man_company-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "the_man_company_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-the_man_company-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_man_company_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-the_man_company-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_man_company_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-the_man_company-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_man_company_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-the_man_company-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_man_company_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 14.76,
        "site": "https://vouchwise.in/out/buy-the_man_company-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_man_company_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-the_man_company-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_postcard_hotels",
    "name": "The Postcard Hotels",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "the_postcard_hotels_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.2,
        "site": "https://vouchwise.in/out/buy-the_postcard_hotels-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "the_postcard_hotels_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-the_postcard_hotels-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_raymond_shop",
    "name": "The Raymond Shop",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "the_raymond_shop_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-the_raymond_shop-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "the_raymond_shop_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-the_raymond_shop-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_raymond_shop_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-the_raymond_shop-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_raymond_shop_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-the_raymond_shop-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_raymond_shop_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-the_raymond_shop-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_raymond_shop_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-the_raymond_shop-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_raymond_shop_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.26,
        "site": "https://vouchwise.in/out/buy-the_raymond_shop-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_raymond_shop_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-the_raymond_shop-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_reading_habit",
    "name": "The Reading Habit",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "the_reading_habit_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-the_reading_habit-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_skin_story",
    "name": "The Skin Story",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "the_skin_story_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-the_skin_story-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_sleep_company",
    "name": "The Sleep Company",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "the_sleep_company_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-the_sleep_company-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "the_wellness_co",
    "name": "The Wellness Co",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "the_wellness_co_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.1,
        "site": "https://vouchwise.in/out/buy-the_wellness_co-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      }
    ]
  },
  {
    "id": "the_white_crowluxe",
    "name": "The White Crow-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "the_white_crowluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-the_white_crowluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "the_white_crowluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-the_white_crowluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_white_crowluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-the_white_crowluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_white_crowluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-the_white_crowluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "the_white_crowluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-the_white_crowluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "third_wave_coffee",
    "name": "Third Wave Coffee",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "third_wave_coffee_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-third_wave_coffee-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "third_wave_coffee_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-third_wave_coffee-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tim_hortons",
    "name": "Tim Hortons",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tim_hortons_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-tim_hortons-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tim_hortons_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tim_hortons-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tim_hortons_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tim_hortons-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tim_hortons_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tim_hortons-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tim_hortons_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-tim_hortons-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tim_hortons_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-tim_hortons-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tim_hortons_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.51,
        "site": "https://vouchwise.in/out/buy-tim_hortons-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tim_hortons_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-tim_hortons-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "timezone",
    "name": "Timezone",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "timezone_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-timezone-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "timezone_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-timezone-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "timezone_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-timezone-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "timezone_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-timezone-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "timezone_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-timezone-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "timezone_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-timezone-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "timezone_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-timezone-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tinder",
    "name": "Tinder",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "tinder_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tinder-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tinder_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-tinder-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tinder_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-tinder-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tinder_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.01,
        "site": "https://vouchwise.in/out/buy-tinder-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tira_beauty",
    "name": "Tira beauty",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tira_beauty_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tira_beauty-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tira_beauty_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-tira_beauty-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tira_beauty_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-tira_beauty-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "titan",
    "name": "Titan",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "titan_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-titan-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "titan_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-titan-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-titan-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-titan-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-titan-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-titan-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-titan-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-titan-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-titan-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "titan_eye_plus",
    "name": "Titan Eye Plus",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "titan_eye_plus_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-titan_eye_plus-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "titan_eye_plus_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-titan_eye_plus-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_eye_plus_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-titan_eye_plus-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_eye_plus_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-titan_eye_plus-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_eye_plus_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-titan_eye_plus-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_eye_plus_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.51,
        "site": "https://vouchwise.in/out/buy-titan_eye_plus-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "titan_minimals",
    "name": "Titan Minimals",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "titan_minimals_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-titan_minimals-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_minimals_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-titan_minimals-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_minimals_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-titan_minimals-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_minimals_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-titan_minimals-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_minimals_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-titan_minimals-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_minimals_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-titan_minimals-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "titan_smartwatches",
    "name": "Titan Smartwatches",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "titan_smartwatches_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-titan_smartwatches-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_smartwatches_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-titan_smartwatches-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_smartwatches_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-titan_smartwatches-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "titan_smartwatches_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-titan_smartwatches-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tods_luxe",
    "name": "TODS-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tods_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-tods_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tods_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tods_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tods_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tods_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tods_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tods_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tods_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-tods_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tommy_hilfigerbagline",
    "name": "Tommy Hilfiger-Bagline",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tommy_hilfigerbagline_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-tommy_hilfigerbagline-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tommy_hilfigerbagline_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-tommy_hilfigerbagline-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tory_burch_luxe",
    "name": "TORY BURCH-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tory_burch_luxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-tory_burch_luxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tory_burch_luxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tory_burch_luxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tory_burch_luxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tory_burch_luxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tory_burch_luxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tory_burch_luxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tory_burch_luxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-tory_burch_luxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "toscano",
    "name": "Toscano",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "toscano_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-toscano-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "toscano_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-toscano-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "toscano_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-toscano-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "toscano_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-toscano-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "toscano_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.01,
        "site": "https://vouchwise.in/out/buy-toscano-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "trends_footwear",
    "name": "Trends Footwear",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "trends_footwear_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-trends_footwear-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "trends_footwear_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-trends_footwear-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "trends_footwear_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-trends_footwear-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "trends_footwear_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.26,
        "site": "https://vouchwise.in/out/buy-trends_footwear-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "trends_junior",
    "name": "Trends Junior",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "trends_junior_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-trends_junior-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "trends_junior_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-trends_junior-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "trends_junior_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-trends_junior-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "trends_junior_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.36,
        "site": "https://vouchwise.in/out/buy-trends_junior-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "trends_man",
    "name": "Trends Man",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "trends_man_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-trends_man-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "trends_man_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-trends_man-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "trends_man_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-trends_man-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "trends_man_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.01,
        "site": "https://vouchwise.in/out/buy-trends_man-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "trends_women",
    "name": "Trends Women",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "trends_women_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-trends_women-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "trends_women_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-trends_women-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "trends_women_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-trends_women-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "trends_women_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.01,
        "site": "https://vouchwise.in/out/buy-trends_women-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tripxoxo",
    "name": "TripXOXO",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "tripxoxo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.51,
        "site": "https://vouchwise.in/out/buy-tripxoxo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "truefitt__hill",
    "name": "Truefitt & Hill",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "truefitt__hill_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-truefitt__hill-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "truefitt__hill_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 18.75,
        "site": "https://vouchwise.in/out/buy-truefitt__hill-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "truefitt__hill_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 24.5,
        "site": "https://vouchwise.in/out/buy-truefitt__hill-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "truefitt__hill_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-truefitt__hill-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "truefitt__hill_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-truefitt__hill-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "truefitt__hill_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-truefitt__hill-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "truefitt__hill_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-truefitt__hill-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "truefitt__hill_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 22.76,
        "site": "https://vouchwise.in/out/buy-truefitt__hill-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "truefitt__hill_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-truefitt__hill-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "tumiluxe",
    "name": "Tumi - Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "tumiluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-tumiluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "tumiluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-tumiluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tumiluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tumiluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tumiluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tumiluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tumiluxe_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tumiluxe-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tumiluxe_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.76,
        "site": "https://vouchwise.in/out/buy-tumiluxe-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "tumiluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-tumiluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "typsy_beauty",
    "name": "Typsy Beauty",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "typsy_beauty_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-typsy_beauty-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "typsy_beauty_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-typsy_beauty-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "typsy_beauty_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-typsy_beauty-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "typsy_beauty_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-typsy_beauty-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "typsy_beauty_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 22,
        "site": "https://vouchwise.in/out/buy-typsy_beauty-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "typsy_beauty_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-typsy_beauty-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "uber",
    "name": "Uber",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "uber_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-uber-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "uber_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-uber-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-uber-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-uber-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-uber-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-uber-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 2.01,
        "site": "https://vouchwise.in/out/buy-uber-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "uber_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-uber-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "unicorn_apple_premium_partner",
    "name": "Unicorn Apple Premium Partner",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "unicorn_apple_premium_partner_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-unicorn_apple_premium_partner-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "unicorn_apple_premium_partner_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.51,
        "site": "https://vouchwise.in/out/buy-unicorn_apple_premium_partner-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "unipin",
    "name": "UniPin",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "unipin_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-unipin-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "unipin_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-unipin-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "unipin_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.26,
        "site": "https://vouchwise.in/out/buy-unipin-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "unipin_bgmi",
    "name": "Unipin BGMI",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "unipin_bgmi_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-unipin_bgmi-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "unipin_bgmi_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-unipin_bgmi-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "unipin_bgmi_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-unipin_bgmi-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "unipin_bgmi_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-unipin_bgmi-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "unipin_bgmi_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.76,
        "site": "https://vouchwise.in/out/buy-unipin_bgmi-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "united_colors_of_benettonbagline",
    "name": "United Colors of Benetton-Bagline",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "united_colors_of_benettonbagline_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.1,
        "site": "https://vouchwise.in/out/buy-united_colors_of_benettonbagline-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "united_colors_of_benettonbagline_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-united_colors_of_benettonbagline-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "united_colors_of_benettonbagline_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.76,
        "site": "https://vouchwise.in/out/buy-united_colors_of_benettonbagline-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "unlimited",
    "name": "Unlimited",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "unlimited_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-unlimited-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "unlimited_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-unlimited-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "unlimited_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.01,
        "site": "https://vouchwise.in/out/buy-unlimited-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "urban_ladder",
    "name": "Urban Ladder",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "urban_ladder_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-urban_ladder-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "urban_ladder_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-urban_ladder-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "urban_ladder_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-urban_ladder-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "urban_ladder_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.01,
        "site": "https://vouchwise.in/out/buy-urban_ladder-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "urban_space",
    "name": "Urban Space",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "urban_space_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-urban_space-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "urban_space_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-urban_space-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "urban_space_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-urban_space-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "urban_space_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-urban_space-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "urban_space_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 5.76,
        "site": "https://vouchwise.in/out/buy-urban_space-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "urban_space_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-urban_space-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "us_polo",
    "name": "US Polo",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "us_polo_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-us_polo-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "v_mart",
    "name": "V Mart",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "v_mart_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-v_mart-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "v_mart_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-v_mart-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "v_mart_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-v_mart-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "v_mart_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-v_mart-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "v_mart_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.26,
        "site": "https://vouchwise.in/out/buy-v_mart-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "v_mart_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-v_mart-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "v_mart_custom",
    "name": "V Mart (Custom)",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "v_mart_custom_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.76,
        "site": "https://vouchwise.in/out/buy-v_mart_custom-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "vaango",
    "name": "Vaango",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "vaango_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.76,
        "site": "https://vouchwise.in/out/buy-vaango-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "valentinoluxe",
    "name": "Valentino-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "valentinoluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-valentinoluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "valentinoluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-valentinoluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "valentinoluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-valentinoluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "valentinoluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-valentinoluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "valentinoluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-valentinoluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "valorant_points",
    "name": "Valorant Points",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "valorant_points_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-valorant_points-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "valorant_points_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-valorant_points-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "valorant_points_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-valorant_points-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "valorant_points_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-valorant_points-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "valorant_points_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-valorant_points-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "valorant_points_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.26,
        "site": "https://vouchwise.in/out/buy-valorant_points-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "valorant_points_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-valorant_points-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "van_heusen",
    "name": "Van Heusen",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "van_heusen_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-van_heusen-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "van_heusen_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 2.75,
        "site": "https://vouchwise.in/out/buy-van_heusen-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "van_heusen_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-van_heusen-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "van_heusen_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-van_heusen-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "van_heusen_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-van_heusen-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "van_heusen_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-van_heusen-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "van_heusen_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-van_heusen-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "van_heusen_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 1.01,
        "site": "https://vouchwise.in/out/buy-van_heusen-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "van_heusen_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-van_heusen-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "veridicus",
    "name": "Veridicus",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "veridicus_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-veridicus-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "versaceluxe",
    "name": "VERSACE-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "versaceluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-versaceluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "versaceluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-versaceluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "versaceluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-versaceluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "versaceluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-versaceluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "versaceluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-versaceluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "victorias_secret",
    "name": "VICTORIA'S SECRET",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "victorias_secret_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-victorias_secret-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-victorias_secret-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "victorias_secret_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-victorias_secret-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-victorias_secret-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-victorias_secret-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-victorias_secret-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-victorias_secret-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-victorias_secret-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-victorias_secret-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "victorias_secret_beauty",
    "name": "VICTORIA'S SECRET BEAUTY",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "victorias_secret_beauty_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-victorias_secret_beauty-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_beauty_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-victorias_secret_beauty-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_beauty_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-victorias_secret_beauty-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_beauty_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-victorias_secret_beauty-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_beauty_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-victorias_secret_beauty-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_beauty_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 9.76,
        "site": "https://vouchwise.in/out/buy-victorias_secret_beauty-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "victorias_secret_beauty_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-victorias_secret_beauty-sbi_gyftr",
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
        "site": "https://vouchwise.in/out/buy-vijay_sales-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay_sales-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "vijay_sales_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay_sales-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay_sales-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay_sales-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-vijay_sales-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-vijay_sales-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay_sales-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0.51,
        "site": "https://vouchwise.in/out/buy-vijay_sales-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vijay_sales_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay_sales-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "villeroy_and_bochluxe",
    "name": "VILLEROY AND BOCH-Luxe",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "villeroy_and_bochluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-villeroy_and_bochluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "villeroy_and_bochluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-villeroy_and_bochluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "villeroy_and_bochluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-villeroy_and_bochluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "villeroy_and_bochluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-villeroy_and_bochluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "villeroy_and_bochluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-villeroy_and_bochluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "vinci_botanicals",
    "name": "Vinci Botanicals",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "vinci_botanicals_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 33,
        "site": "https://vouchwise.in/out/buy-vinci_botanicals-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "vinci_botanicals_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 37.5,
        "site": "https://vouchwise.in/out/buy-vinci_botanicals-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vinci_botanicals_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 33,
        "site": "https://vouchwise.in/out/buy-vinci_botanicals-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vinci_botanicals_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 30,
        "site": "https://vouchwise.in/out/buy-vinci_botanicals-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vinci_botanicals_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 35,
        "site": "https://vouchwise.in/out/buy-vinci_botanicals-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "vmart",
    "name": "V-Mart",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "vmart_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-vmart-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "vmart_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-vmart-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vmart_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vmart-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "vmart_unlimited",
    "name": "Vmart -Unlimited",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "vmart_unlimited_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-vmart_unlimited-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "vrott",
    "name": "VROTT",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "vrott_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 47.5,
        "site": "https://vouchwise.in/out/buy-vrott-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vrott_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 42,
        "site": "https://vouchwise.in/out/buy-vrott-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vrott_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 40,
        "site": "https://vouchwise.in/out/buy-vrott-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vrott_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 40,
        "site": "https://vouchwise.in/out/buy-vrott-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vrott_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 37.76,
        "site": "https://vouchwise.in/out/buy-vrott-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "vrott_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vrott-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "w_for_women",
    "name": "W for Women",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "w_for_women_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-w_for_women-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "w_for_women_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-w_for_women-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "w_for_women_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-w_for_women-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "w_for_women_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-w_for_women-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "w_for_women_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-w_for_women-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "w_for_women_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-w_for_women-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "w_for_women_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-w_for_women-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "w_for_women_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-w_for_women-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "w_for_women_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-w_for_women-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "wakefit",
    "name": "Wakefit",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "wakefit_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-wakefit-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "wakefit_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-wakefit-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wakefit_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-wakefit-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wakefit_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-wakefit-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "water_bill_payment",
    "name": "Water Bill Payment",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "water_bill_payment_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-water_bill_payment-gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "wellbeing_nutrition",
    "name": "Wellbeing Nutrition",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "wellbeing_nutrition_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 13.5,
        "site": "https://vouchwise.in/out/buy-wellbeing_nutrition-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wellbeing_nutrition_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-wellbeing_nutrition-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wellbeing_nutrition_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-wellbeing_nutrition-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wellbeing_nutrition_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-wellbeing_nutrition-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wellbeing_nutrition_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-wellbeing_nutrition-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wellbeing_nutrition_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-wellbeing_nutrition-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "wendys",
    "name": "Wendy's",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "wendys_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-wendys-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wendys_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-wendys-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "wendys_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-wendys-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wendys_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-wendys-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wendys_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-wendys-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wendys_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-wendys-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wendys_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-wendys-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wendys_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-wendys-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "west_elmluxe",
    "name": "WEST ELM-Luxe",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "west_elmluxe_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-west_elmluxe-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "west_elmluxe_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-west_elmluxe-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "west_elmluxe_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-west_elmluxe-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "west_elmluxe_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-west_elmluxe-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "west_elmluxe_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-west_elmluxe-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "westside",
    "name": "Westside",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "westside_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "westside_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-westside-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-westside-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-westside-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "westside_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "westside_no_cooling_period",
    "name": "Westside [No Cooling Period]",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "westside_no_cooling_period_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside_no_cooling_period-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "whats_up_wellness",
    "name": "What's Up Wellness",
    "category_name": "Health & Wellness",
    "portals": [
      {
        "compositeId": "whats_up_wellness_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-whats_up_wellness-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "whats_up_wellness_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-whats_up_wellness-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "wildcraft",
    "name": "Wildcraft",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "wildcraft_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-wildcraft-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "wildcraft_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-wildcraft-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wildcraft_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-wildcraft-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wildcraft_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-wildcraft-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wildcraft_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-wildcraft-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wildcraft_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-wildcraft-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wildcraft_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-wildcraft-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wildcraft_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-wildcraft-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wildcraft_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-wildcraft-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "william_penn",
    "name": "William Penn",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "william_penn_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5.4,
        "site": "https://vouchwise.in/out/buy-william_penn-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "william_penn_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-william_penn-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "william_penn_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-william_penn-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "william_penn_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-william_penn-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "william_penn_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-william_penn-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "william_penn_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-william_penn-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "william_penn_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.76,
        "site": "https://vouchwise.in/out/buy-william_penn-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "william_penn_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-william_penn-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "woggles",
    "name": "Woggles",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "woggles_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-woggles-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "woggles_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-woggles-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "wonderchef",
    "name": "Wonderchef",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "wonderchef_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-wonderchef-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "wonderchef_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-wonderchef-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wonderchef_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-wonderchef-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wonderchef_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-wonderchef-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wonderchef_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-wonderchef-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wonderchef_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-wonderchef-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wonderchef_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-wonderchef-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wonderchef_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.26,
        "site": "https://vouchwise.in/out/buy-wonderchef-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wonderchef_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-wonderchef-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "woodland",
    "name": "Woodland",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "woodland_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-woodland-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "woodland_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-woodland-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "woodland_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-woodland-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "woodland_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-woodland-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "woodland_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-woodland-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "woodland_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-woodland-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "woodland_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.76,
        "site": "https://vouchwise.in/out/buy-woodland-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "woodland_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-woodland-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "world_of_titan",
    "name": "World of Titan",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "world_of_titan_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.01,
        "site": "https://vouchwise.in/out/buy-world_of_titan-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "world_of_titan_smartwatch",
    "name": "World of Titan SmartWatch",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "world_of_titan_smartwatch_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-world_of_titan_smartwatch-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "world_of_titan_smartwatch_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.26,
        "site": "https://vouchwise.in/out/buy-world_of_titan_smartwatch-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "wowchicken",
    "name": "Wow!Chicken",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "wowchicken_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-wowchicken-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchicken_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-wowchicken-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchicken_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-wowchicken-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchicken_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-wowchicken-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchicken_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-wowchicken-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchicken_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-wowchicken-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "wowchina",
    "name": "Wow!China",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "wowchina_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-wowchina-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchina_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-wowchina-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchina_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-wowchina-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchina_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-wowchina-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchina_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-wowchina-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchina_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 8.01,
        "site": "https://vouchwise.in/out/buy-wowchina-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowchina_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-wowchina-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "wowmomo",
    "name": "Wow!Momo",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "wowmomo_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-wowmomo-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowmomo_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-wowmomo-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowmomo_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-wowmomo-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowmomo_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-wowmomo-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowmomo_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-wowmomo-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wowmomo_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-wowmomo-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "wrangler",
    "name": "WRANGLER",
    "category_name": "Fashion & Accessories",
    "portals": [
      {
        "compositeId": "wrangler_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-wrangler-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wrangler_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-wrangler-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "wrangler_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-wrangler-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wrangler_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-wrangler-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "wrangler_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-wrangler-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "xbox_game_pass_ultimate_1_month",
    "name": "Xbox Game Pass Ultimate 1 Month",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "xbox_game_pass_ultimate_1_month_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-xbox_game_pass_ultimate_1_month-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "xbox_game_pass_ultimate_3_month",
    "name": "Xbox Game Pass Ultimate 3 Month",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "xbox_game_pass_ultimate_3_month_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-xbox_game_pass_ultimate_3_month-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "xbox_microsoft_game_pass_core_1_month_esd_in",
    "name": "Xbox Microsoft Game Pass Core 1 Month ESD IN",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "xbox_microsoft_game_pass_core_1_month_esd_in_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-xbox_microsoft_game_pass_core_1_month_esd_in-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "xbox_microsoft_game_pass_core_12_month_esd_in",
    "name": "Xbox Microsoft Game Pass Core 12 Month ESD IN",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "xbox_microsoft_game_pass_core_12_month_esd_in_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-xbox_microsoft_game_pass_core_12_month_esd_in-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "xbox_microsoft_game_pass_core_6_month_esd_in",
    "name": "Xbox Microsoft Game Pass Core 6 Month ESD IN",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "xbox_microsoft_game_pass_core_6_month_esd_in_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-xbox_microsoft_game_pass_core_6_month_esd_in-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yalla_ludo",
    "name": "Yalla Ludo",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "yalla_ludo_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-yalla_ludo-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yalla_ludo_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-yalla_ludo-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yatra",
    "name": "Yatra",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "yatra_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-yatra-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-yatra-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "yatra_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-yatra-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-yatra-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 70,
        "site": "https://vouchwise.in/out/buy-yatra-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-yatra-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 3.26,
        "site": "https://vouchwise.in/out/buy-yatra-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-yatra-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yatra__1000",
    "name": "Yatra - 1000",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "yatra__1000_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 62.76,
        "site": "https://vouchwise.in/out/buy-yatra__1000-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yatra__1500",
    "name": "Yatra - 1500",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "yatra__1500_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 33.01,
        "site": "https://vouchwise.in/out/buy-yatra__1500-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yatra__2000",
    "name": "Yatra - 2000",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "yatra__2000_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 23.01,
        "site": "https://vouchwise.in/out/buy-yatra__2000-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yatra__500",
    "name": "Yatra - 500",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "yatra__500_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 83.01,
        "site": "https://vouchwise.in/out/buy-yatra__500-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yatra_hotel",
    "name": "Yatra Hotel",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "yatra_hotel_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-yatra_hotel-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_hotel_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-yatra_hotel-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_hotel_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-yatra_hotel-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_hotel_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 13,
        "site": "https://vouchwise.in/out/buy-yatra_hotel-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_hotel_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 11.76,
        "site": "https://vouchwise.in/out/buy-yatra_hotel-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_hotel_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-yatra_hotel-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yatra_hotels__holidays",
    "name": "Yatra Hotels & Holidays",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "yatra_hotels__holidays_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-yatra_hotels__holidays-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_hotels__holidays_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-yatra_hotels__holidays-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatra_hotels__holidays_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 4.26,
        "site": "https://vouchwise.in/out/buy-yatra_hotels__holidays-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yatra_travel_treat__1200",
    "name": "Yatra Travel Treat – 1200",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "yatra_travel_treat__1200_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 48.5,
        "site": "https://vouchwise.in/out/buy-yatra_travel_treat__1200-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yatra_travel_treat__500",
    "name": "Yatra Travel Treat - 500",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "yatra_travel_treat__500_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 83,
        "site": "https://vouchwise.in/out/buy-yatra_travel_treat__500-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "yatracom",
    "name": "Yatra.com",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "yatracom_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-yatracom-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatracom_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-yatracom-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "yatracom_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-yatracom-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "youmee",
    "name": "YouMee",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "youmee_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-youmee-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "youmee_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-youmee-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "youmee_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-youmee-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "youmee_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-youmee-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zambar",
    "name": "Zambar",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "zambar_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-zambar-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "zambar_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-zambar-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zambar_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 6.51,
        "site": "https://vouchwise.in/out/buy-zambar-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zee5",
    "name": "Zee5",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "zee5_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 21,
        "site": "https://vouchwise.in/out/buy-zee5-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zee5_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-zee5-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zee5_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 20,
        "site": "https://vouchwise.in/out/buy-zee5-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zee5_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-zee5-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zee5_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 17,
        "site": "https://vouchwise.in/out/buy-zee5-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zee5_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zee5-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zee5_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 19.76,
        "site": "https://vouchwise.in/out/buy-zee5-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zee5_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 25,
        "site": "https://vouchwise.in/out/buy-zee5-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zee5_12m_4k",
    "name": "Zee5 12M 4K",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "zee5_12m_4k_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 14.1,
        "site": "https://vouchwise.in/out/buy-zee5_12m_4k-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "zee5_12m_4k_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-zee5_12m_4k-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zee5_12m_hd",
    "name": "Zee5 12M HD",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "zee5_12m_hd_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 14.1,
        "site": "https://vouchwise.in/out/buy-zee5_12m_hd-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "zee5_12m_hd_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-zee5_12m_hd-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zee5_1m_hd",
    "name": "Zee5 1M HD",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "zee5_1m_hd_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-zee5_1m_hd-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zee5_3m_hd",
    "name": "Zee5 3M HD",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "zee5_3m_hd_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 14.1,
        "site": "https://vouchwise.in/out/buy-zee5_3m_hd-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "zee5_3m_hd_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-zee5_3m_hd-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zee5_6m_hd",
    "name": "Zee5 6M HD",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "zee5_6m_hd_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 14.1,
        "site": "https://vouchwise.in/out/buy-zee5_6m_hd-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "zee5_6m_hd_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 22.5,
        "site": "https://vouchwise.in/out/buy-zee5_6m_hd-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zee5_fifa",
    "name": "Zee5 FIFA",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "zee5_fifa_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 18,
        "site": "https://vouchwise.in/out/buy-zee5_fifa-amazon",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zee5_fifa_wc26",
    "name": "Zee5 FIFA WC26",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "zee5_fifa_wc26_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 16.51,
        "site": "https://vouchwise.in/out/buy-zee5_fifa_wc26-maximize_money",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zee5_fifa_wc26_12m_4k_annual",
    "name": "Zee5 FIFA WC26 12M 4K Annual",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "zee5_fifa_wc26_12m_4k_annual_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-zee5_fifa_wc26_12m_4k_annual-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zee5_fifa_wc26_3m_4k_quarter",
    "name": "Zee5 FIFA WC26 3M 4K Quarter",
    "category_name": "Entertainment & OTT",
    "portals": [
      {
        "compositeId": "zee5_fifa_wc26_3m_4k_quarter_axis_grabdeals",
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-zee5_fifa_wc26_3m_4k_quarter-axis_grabdeals",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zepto",
    "name": "Zepto",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "zepto_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-zepto-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zepto_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zepto_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zomato",
    "name": "Zomato",
    "category_name": "Dining & Food",
    "portals": [
      {
        "compositeId": "zomato_amazon",
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-zomato-amazon",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0.5,
        "site": "https://vouchwise.in/out/buy-zomato-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": null,
        "site": "https://vouchwise.in/out/buy-zomato-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 0.75,
        "site": "https://vouchwise.in/out/buy-zomato-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zomato_icici_ishop",
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-icici_ishop",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zoomcar",
    "name": "Zoomcar",
    "category_name": "Travel & Leisure",
    "portals": [
      {
        "compositeId": "zoomcar_amex_shopwise",
        "portalId": "amex_shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zoomcar-amex_shopwise",
        "availability": "available",
        "disclaimer": "You can earn up to 25000 bonus Membership Reward® points in a month"
      },
      {
        "compositeId": "zoomcar_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-zoomcar-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zoomcar_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-zoomcar-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zoomcar_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-zoomcar-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zoomcar_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-zoomcar-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zoomcar_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 7.76,
        "site": "https://vouchwise.in/out/buy-zoomcar-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zoomcar_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-zoomcar-sbi_gyftr",
        "availability": "available",
        "disclaimer": ""
      }
    ]
  },
  {
    "id": "zouk",
    "name": "Zouk",
    "category_name": "Electronics",
    "portals": [
      {
        "compositeId": "zouk_axis_edgerewards",
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-zouk-axis_edgerewards",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zouk_gyftr",
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-zouk-gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zouk_hdfc_smartbuy",
        "portalId": "hdfc_smartbuy",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-zouk-hdfc_smartbuy",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zouk_hsbc_gyftr",
        "portalId": "hsbc_gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-zouk-hsbc_gyftr",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zouk_maximize_money",
        "portalId": "maximize_money",
        "upfrontDiscountPercent": 10.01,
        "site": "https://vouchwise.in/out/buy-zouk-maximize_money",
        "availability": "available",
        "disclaimer": ""
      },
      {
        "compositeId": "zouk_sbi_gyftr",
        "portalId": "sbi_gyftr",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-zouk-sbi_gyftr",
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
    "mult_amex_shopwise": "3",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "3",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-platinum-reserve",
    "applyStatus": "referral",
    "assumption_note": "Assuming 1 MR Point = ₹0.33 based on standard catalog yield.",
    "direct_reward_note": ""
  },
  {
    "id": "amex_platinum_travel",
    "name": "Amex Platinum Travel",
    "rewardType": "points",
    "pointValue": "0.33",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "mult_amex_shopwise": "3",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "3",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-platinum-travel",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 MR Point = ₹0.33; optimal value unlocked at milestone spends.",
    "direct_reward_note": ""
  },
  {
    "id": "amex_mrcc",
    "name": "Amex MRCC",
    "rewardType": "points",
    "pointValue": "0.33",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "mult_amex_shopwise": "2",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "2",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-mrcc",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 MR Point = ₹0.33 based on 24K Gold Collection redemption.",
    "direct_reward_note": ""
  },
  {
    "id": "amex_gold",
    "name": "Amex Gold",
    "rewardType": "points",
    "pointValue": "0.33",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "mult_amex_shopwise": "5",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "5",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-amex-gold",
    "applyStatus": "closed",
    "assumption_note": "Assuming 1 MR Point = ₹0.33 based on 24K Gold Collection redemption.",
    "direct_reward_note": ""
  },
  {
    "id": "axis_magnus_burgundy",
    "name": "Axis Magnus Burgundy",
    "rewardType": "points",
    "pointValue": "0.8",
    "spendBlock": "200",
    "pointsPerBlock": "12",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "1",
      "axis_grabdeals": "1",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-magnus-burgundy",
    "applyStatus": "referral",
    "assumption_note": "Assuming 5 Edge Rewards = 4 Air Miles = ₹4.00 (₹0.80 per point).",
    "direct_reward_note": ""
  },
  {
    "id": "axis_magnus",
    "name": "Axis Magnus",
    "rewardType": "points",
    "pointValue": "0.4",
    "spendBlock": "200",
    "pointsPerBlock": "12",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "1",
      "axis_grabdeals": "1",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-magnus",
    "applyStatus": "referral",
    "assumption_note": "Assuming 5 Edge Rewards = 2 Air Miles = ₹2.00 (₹0.40 per point).",
    "direct_reward_note": ""
  },
  {
    "id": "axis_atlas",
    "name": "Axis Atlas",
    "rewardType": "points",
    "pointValue": "2",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "1",
      "axis_grabdeals": "1",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
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
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "1",
      "axis_grabdeals": "1",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-axis-horizon",
    "applyStatus": "referral",
    "assumption_note": "Assuming 1 Edge Reward = 1 Partner Mile = ₹1.00.",
    "direct_reward_note": ""
  },
  {
    "id": "hdfc_infinia",
    "name": "HDFC Infinia",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "150",
    "pointsPerBlock": "5",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "5",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-infinia",
    "applyStatus": "invite_only",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via SmartBuy travel redemption.",
    "direct_reward_note": "5x on SmartBuy capped at ₹22,500/month voucher spend (3,000 RP)"
  },
  {
    "id": "hdfc_dbm",
    "name": "HDFC Diners Black Metal",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "150",
    "pointsPerBlock": "5",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "3",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-dbm",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via SmartBuy travel redemption.",
    "direct_reward_note": "5x on SmartBuy capped at ₹45,000/month voucher spend (3,000 RP)"
  },
  {
    "id": "hdfc_regalia_gold",
    "name": "HDFC Regalia Gold",
    "rewardType": "points",
    "pointValue": "0.5",
    "spendBlock": "200",
    "pointsPerBlock": "5",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "5",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-regalia-gold",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.50 via SmartBuy travel redemption.",
    "direct_reward_note": "5x on SmartBuy capped at ₹30,000/month voucher spend (3,000 RP)"
  },
  {
    "id": "hdfc_swiggy",
    "name": "HDFC Swiggy",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "5",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "0",
    "portalMultipliers": {
      "hdfc_smartbuy": "1",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "0",
      "amazon": "0",
      "maximize_money": "0",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "0"
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-swiggy",
    "applyStatus": "direct",
    "assumption_note": "Direct statement cashback; no valuation assumption required.",
    "direct_reward_note": "Earns 10% cashback directly on Swiggy app orders (up to ₹1,500/month) and 5% on Amazon, Flipkart, Myntra, Nykaa (up to ₹1,500/month). Buying vouchers for these brands via a portal is likely suboptimal compared to direct spend on this card."
  },
  {
    "id": "hsbc_premier",
    "name": "HSBC Premier",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "3",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "1",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-premier",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = 1 Air Mile = ₹1.00.",
    "direct_reward_note": ""
  },
  {
    "id": "hsbc_travelone",
    "name": "HSBC Travel One",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "1",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-travelone",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = 1 Air Mile = ₹1.00.",
    "direct_reward_note": ""
  },
  {
    "id": "hsbc_liveplus",
    "name": "HSBC Live+",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1.5",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "1",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-liveplus",
    "applyStatus": "direct",
    "assumption_note": "Direct statement cashback; no valuation assumption required.",
    "direct_reward_note": ""
  },
  {
    "id": "hsbc_visaplatinum",
    "name": "HSBC Visa Platinum",
    "rewardType": "points",
    "pointValue": "0.5",
    "spendBlock": "150",
    "pointsPerBlock": "2",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "1",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "1",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hsbc-visaplatinum",
    "applyStatus": "direct",
    "assumption_note": "Assuming 2 Reward Point = 1 Air Mile = ₹0.50.",
    "direct_reward_note": ""
  },
  {
    "id": "icici_epm",
    "name": "ICICI Emeralde Private Metal",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "200",
    "pointsPerBlock": "6",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "6",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-epm",
    "applyStatus": "invite_only",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via in-app redemption.",
    "direct_reward_note": "6x on iShop capped at ₹120,000/month spend (18,000 RP)"
  },
  {
    "id": "icici_times",
    "name": "ICICI Times Black",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "6",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-times",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹1.00 via in-app redemption.",
    "direct_reward_note": "6x on iShop capped at ₹150,000/month spend (15,000 RP)"
  },
  {
    "id": "icici_emeralde",
    "name": "ICICI Emeralde",
    "rewardType": "points",
    "pointValue": "0.25",
    "spendBlock": "100",
    "pointsPerBlock": "4",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "6",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-emeralde",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.25 via standard catalog redemption. iShop gives 6x multiplier per ICICI portal tiers.",
    "direct_reward_note": "6x on iShop capped at ₹60,000/month spend (12,000 RP)"
  },
  {
    "id": "icici_sapphiro",
    "name": "ICICI Sapphiro",
    "rewardType": "points",
    "pointValue": "0.25",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "6",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-sapphiro",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.25 via standard catalog redemption. iShop gives 6x multiplier per ICICI portal tiers.",
    "direct_reward_note": "6x on iShop capped at ₹90,000/month spend (9,000 RP)"
  },
  {
    "id": "icici_amazon",
    "name": "ICICI Amazon",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "4",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "0",
      "amazon": "2",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-amazon",
    "applyStatus": "direct",
    "assumption_note": "Direct Amazon Pay balance cashback; no valuation assumption required.",
    "direct_reward_note": "Earns 5% cashback directly on Amazon.in purchases — buying an Amazon voucher via iShop adds a 4x multiplier but the net math rarely beats direct spend. Use this card directly on Amazon; reserve iShop for non-Amazon brands."
  },
  {
    "id": "sbi_cashback",
    "name": "SBI Cashback",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "5",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "0",
      "amazon": "5",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-sbi-cashback",
    "applyStatus": "direct",
    "assumption_note": "Direct statement cashback; no valuation assumption required.",
    "direct_reward_note": "Earns 5% cashback on all eligible online spends — not restricted to specific merchants. Buying vouchers via portals stacks on top only where the portal gives an upfront discount. For brands with 0% portal discount, direct online payment on this card gives the same 5% with less friction."
  },
  {
    "id": "scapia",
    "name": "Scapia",
    "rewardType": "points",
    "pointValue": "0.2",
    "spendBlock": "20",
    "pointsPerBlock": "2",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-scapia",
    "applyStatus": "referral",
    "assumption_note": "Assuming 5 Scapia coins = ₹1.00 (₹0.20 per coin) via in-app travel booking.",
    "direct_reward_note": ""
  },
  {
    "id": "kotak_airplus",
    "name": "Kotak Air+",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-kotak-airplus",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Mile = ₹1 (Kotak Unbox) or 1:1 Air India",
    "direct_reward_note": ""
  },
  {
    "id": "kotak_solitare",
    "name": "Kotak Solitare",
    "rewardType": "points",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "3",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-kotak-solitare",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Mile = ₹1 (Kotak Unbox) or 1:1 Air India",
    "direct_reward_note": ""
  },
  {
    "id": "hdfc_millennia",
    "name": "HDFC Millennia",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "5",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "5",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-hdfc-millennia",
    "applyStatus": "direct",
    "assumption_note": "5% CashPoints on SmartBuy & Amazon (named partners); 1% elsewhere. Cap: ₹1,000/month on 5% categories.",
    "direct_reward_note": "Earns 5% CashPoints directly on Amazon, Flipkart, Myntra, Swiggy, Zomato, Uber, BookMyShow, SonyLiv, Tata CLiQ, Cult.fit — buying vouchers for these brands via any portal may not add incremental value. Cap: ₹1,000/month on 5% categories."
  },
  {
    "id": "icici_coral",
    "name": "ICICI Coral",
    "rewardType": "points",
    "pointValue": "0.25",
    "spendBlock": "100",
    "pointsPerBlock": "2",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "6",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-icici-coral",
    "applyStatus": "direct",
    "assumption_note": "Assuming 1 Reward Point = ₹0.25 via standard catalog redemption. iShop gives 6x multiplier per ICICI portal tiers.",
    "direct_reward_note": ""
  },
  {
    "id": "onecard",
    "name": "OneCard",
    "rewardType": "points",
    "pointValue": "0.1",
    "spendBlock": "50",
    "pointsPerBlock": "1",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "1",
      "amazon": "1",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-onecard",
    "applyStatus": "direct",
    "assumption_note": "Base rate only (0.2%). The 5X on top-2 categories is dynamic and unpredictable — not modelled here. 1 RP = ₹0.10.",
    "direct_reward_note": ""
  },
  {
    "id": "sbi_phonepe_purple",
    "name": "SBI PhonePe Purple",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "2",
      "amazon": "2",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-sbi-phonepe-purple",
    "applyStatus": "direct",
    "assumption_note": "Online rate 2 RP/₹100 applied to portals. 1 RP = ₹1. Excludes fuel, rent, wallet top-ups.",
    "direct_reward_note": ""
  },
  {
    "id": "sbi_phonepe_black",
    "name": "SBI PhonePe Select Black",
    "rewardType": "cashback",
    "pointValue": "1",
    "spendBlock": "100",
    "pointsPerBlock": "1",
    "mult_amex_shopwise": "0",
    "mult_sbi_gyftr": "0",
    "mult_hsbc_gyftr": "0",
    "mult_maximize_money": "1",
    "portalMultipliers": {
      "hdfc_smartbuy": "0",
      "amex_shopwise": "0",
      "icici_ishop": "0",
      "axis_edgerewards": "0",
      "axis_grabdeals": "0",
      "gyftr": "5",
      "amazon": "5",
      "maximize_money": "1",
      "sbi_gyftr": "0",
      "hsbc_gyftr": "0",
      "default": "1"
    },
    "applyURL": "https://vouchwise.in/out/apply-sbi-phonepe-black",
    "applyStatus": "direct",
    "assumption_note": "5 RP/₹100 on online spends (including Gyftr, Amazon); 1 RP = ₹1. Monthly cap: 2,000 RP per category. Excludes fuel, rent, wallet top-ups.",
    "direct_reward_note": ""
  }
];
// <<CARDS_END>>


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