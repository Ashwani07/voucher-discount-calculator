export const lastVerified = 'June 2026';

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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-adidas-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas-edgerewards",
        "perks": "Earns 2.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-adidas-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-adidas-ishop",
        "perks": "",
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air-india-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-air-india-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-air-india-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-air-india-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-air-india-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-air-india-ishop",
        "perks": "1% iCash"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.25,
        "site": "https://vouchwise.in/out/buy-ajio-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-ajio-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ajio-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-ajio-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-ajio-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ajio-ishop",
        "perks": "1% iCash"
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
        "perks": "",
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
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
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://vouchwise.in/out/buy-amazon-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-ishop",
        "perks": "1.5% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-fresh-ishop",
        "perks": "3% iCash",
        "disclaimer": "overrideRewardMultiplier: 0"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-prime-membership-ishop",
        "perks": "18% iCash"
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
        "perks": "",
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": -1.77,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
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
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": -3.54,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-amazon-shopping-ishop",
        "perks": "2.5% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-apollo-pharmacy-ishop",
        "perks": "",
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
        "perks": "Free Promo code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-barbeque-nation-ishop",
        "perks": "3% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 14,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bath-and-body-works-ishop",
        "perks": "9% iCash"
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
        "perks": "",
        "disclaimer": "Monthly Limit: ₹2,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-bigbasket-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-bigbasket-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-bigbasket-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-bigbasket-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bigbasket-ishop",
        "perks": "1% iCash"
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
        "perks": "",
        "disclaimer": "Monthly Limit: ₹2,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0.5,
        "site": "https://vouchwise.in/out/buy-blinkit-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-blinkit-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-gyftr",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-blinkit-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-blinkit-ishop",
        "perks": ""
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
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-edgerewards",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-bookmyshow-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-gyftr",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-bookmyshow-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-bookmyshow-ishop",
        "perks": "",
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
        "perks": "Free Promo code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.3,
        "site": "https://vouchwise.in/out/buy-cleartrip-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-cleartrip-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip-ishop",
        "perks": "3% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 11.9,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 16.5,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-cleartrip-hotel-ishop",
        "perks": "6% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.1,
        "site": "https://vouchwise.in/out/buy-costa-coffee-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-costa-coffee-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-costa-coffee-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-costa-coffee-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa-coffee-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-costa-coffee-ishop",
        "perks": "5% iCash"
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
        "perks": "",
        "disclaimer": "Monthly Limit: ₹75,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-croma-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-croma-ishop",
        "perks": ""
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-decathlon-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-decathlon-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-decathlon-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-decathlon-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-decathlon-ishop",
        "perks": "2% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-dominos-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-dominos-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-dominos-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-dominos-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dominos-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-dominos-ishop",
        "perks": "4% iCash"
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
        "perks": "Free Promo code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-easemytrip-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-easemytrip-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-gyftr",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-easemytrip-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-ishop",
        "perks": "3% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.8,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-edgerewards",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-holiday-ishop",
        "perks": "",
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
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.1,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-gyftr",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-easemytrip-hotel-ishop",
        "perks": "",
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
        "perks": "Free Promo code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-edgerewards",
        "perks": "Earns 8% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-gyftr",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-fabindia-ishop",
        "perks": "4% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ferns-n-petals-ishop",
        "perks": "8% iCash"
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
        "perks": "",
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-edgerewards",
        "perks": "Earns 1.0% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-flipkart-gift-card-ishop",
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
        "site": "https://vouchwise.in/out/buy-igp-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7.4,
        "site": "https://vouchwise.in/out/buy-igp-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 17.5,
        "site": "https://vouchwise.in/out/buy-igp-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 15,
        "site": "https://vouchwise.in/out/buy-igp-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-igp-ishop",
        "perks": "10% iCash"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.65,
        "site": "https://vouchwise.in/out/buy-ikea-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ikea-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-ikea-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-ikea-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-ikea-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ikea-ishop",
        "perks": "1% iCash"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-itc-hotels-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-itc-hotels-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-itc-hotels-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-itc-hotels-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-itc-hotels-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-itc-hotels-ishop",
        "perks": "5% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-jiohotstar-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-jiohotstar-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-jiohotstar-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-jiohotstar-ishop",
        "perks": "",
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-kfc-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-kfc-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-kfc-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-kfc-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-kfc-ishop",
        "perks": "2% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-klook-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-klook-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-klook-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-klook-ishop",
        "perks": "",
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
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-edgerewards",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-lakme-salon-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-gyftr",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-lakme-salon-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lakme-salon-ishop",
        "perks": "1% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.3,
        "site": "https://vouchwise.in/out/buy-lenskart-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-lenskart-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-lenskart-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-lenskart-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-lenskart-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lenskart-ishop",
        "perks": "5% iCash"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-levis-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-levis-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-levis-ishop",
        "perks": "6% iCash"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.3,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-edgerewards",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-offline-ishop",
        "perks": "",
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-lifestyle-online-ishop",
        "perks": "",
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-makemytrip-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-makemytrip-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-ishop",
        "perks": "3% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-edgerewards",
        "perks": "Earns 1.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 11.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 13.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-holiday-ishop",
        "perks": "4% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6.6,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 12,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-makemytrip-hotel-ishop",
        "perks": "6% iCash"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-manyavar-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-manyavar-ishop",
        "perks": "",
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8.25,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 12.5,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-marks-and-spencer-ishop",
        "perks": "8% iCash"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 4.4,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-online-ishop",
        "perks": "",
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 3.75,
        "site": "https://vouchwise.in/out/buy-max-fashion-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-max-fashion-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-max-fashion-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-max-fashion-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-max-fashion-ishop",
        "perks": "",
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
        "perks": "Free Promo Code",
        "disclaimer": "Monthly Limit: ₹10,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-edgerewards",
        "perks": "Earns 2.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-myntra-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-myntra-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-myntra-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-myntra-ishop",
        "perks": "2% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-netmeds-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-netmeds-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-netmeds-ishop",
        "perks": "",
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-nykaa-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-ishop",
        "perks": "",
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-fashion-ishop",
        "perks": "4% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-man-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 3.5,
        "site": "https://vouchwise.in/out/buy-nykaa-man-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-man-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-nykaa-man-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 4.5,
        "site": "https://vouchwise.in/out/buy-nykaa-man-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-nykaa-man-ishop",
        "perks": "4% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 8.8,
        "site": "https://vouchwise.in/out/buy-ola-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-edgerewards",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-ola-ishop",
        "perks": "",
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-pantaloons-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-pantaloons-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pantaloons-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pantaloons-ishop",
        "perks": "8% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-edgerewards",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-gyftr",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pharmeasy-ishop",
        "perks": "",
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pizza-hut-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-pizza-hut-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pizza-hut-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-pizza-hut-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 6.5,
        "site": "https://vouchwise.in/out/buy-pizza-hut-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pizza-hut-ishop",
        "perks": "4% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-puma-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-puma-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-puma-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-puma-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8.5,
        "site": "https://vouchwise.in/out/buy-puma-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-puma-ishop",
        "perks": "",
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-pvr-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 14.5,
        "site": "https://vouchwise.in/out/buy-pvr-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 19,
        "site": "https://vouchwise.in/out/buy-pvr-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 16,
        "site": "https://vouchwise.in/out/buy-pvr-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 15.5,
        "site": "https://vouchwise.in/out/buy-pvr-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-pvr-ishop",
        "perks": "1% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-edgerewards",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-digital-ishop",
        "perks": "",
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-smart-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-reliance-smart-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance-smart-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-smart-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-reliance-smart-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-reliance-smart-ishop",
        "perks": "",
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-edgerewards",
        "perks": "Earns 4.0% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 3,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-shoppers-stop-ishop",
        "perks": "",
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-skechers-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers-edgerewards",
        "perks": "Earns 2.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 9,
        "site": "https://vouchwise.in/out/buy-skechers-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-skechers-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-skechers-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-skechers-ishop",
        "perks": "6% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 40,
        "site": "https://vouchwise.in/out/buy-sonyliv-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 38,
        "site": "https://vouchwise.in/out/buy-sonyliv-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-sonyliv-ishop",
        "perks": "",
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 4.2,
        "site": "https://vouchwise.in/out/buy-starbucks-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-starbucks-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-starbucks-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-starbucks-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 5.5,
        "site": "https://vouchwise.in/out/buy-starbucks-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-starbucks-ishop",
        "perks": "2% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 6,
        "site": "https://vouchwise.in/out/buy-subway-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 10,
        "site": "https://vouchwise.in/out/buy-subway-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-subway-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-subway-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 9.5,
        "site": "https://vouchwise.in/out/buy-subway-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-subway-ishop",
        "perks": "5% iCash"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-swiggy-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-amazon",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-swiggy-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-swiggy-ishop",
        "perks": "1% iCash",
        "disclaimer": "overrideRewardMultiplier: 0"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 2.4,
        "site": "https://vouchwise.in/out/buy-taj-experiences-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-taj-experiences-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 11,
        "site": "https://vouchwise.in/out/buy-taj-experiences-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-taj-experiences-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 10.5,
        "site": "https://vouchwise.in/out/buy-taj-experiences-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-taj-experiences-ishop",
        "perks": "2% iCash"
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
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 2,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-gyftr",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tanishq-gold-jewellery-ishop",
        "perks": "",
        "disclaimer": "overrideRewardMultiplier: 0"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
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
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata-cliq-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata-cliq-ishop",
        "perks": "3% iCash"
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
        "perks": "Free Promo Code"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 1.2,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 7,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 7.5,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-tata-cliq-luxury-ishop",
        "perks": "3% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1.5,
        "site": "https://vouchwise.in/out/buy-uber-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 4,
        "site": "https://vouchwise.in/out/buy-uber-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-uber-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-uber-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-uber-ishop",
        "perks": "1% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay-sales-edgerewards",
        "perks": "Earns 0.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-amazon",
        "perks": "",
        "disclaimer": "Seller: GyFTR"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay-sales-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 1,
        "site": "https://vouchwise.in/out/buy-vijay-sales-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-vijay-sales-ishop",
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
        "upfrontDiscountPercent": 2.5,
        "site": "https://vouchwise.in/out/buy-westside-smartbuy",
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-shopwise",
        "perks": "",
        "disclaimer": "You can earn up to 25,000 bonus Membership Reward® points in a month"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-edgerewards",
        "perks": "Earns 7.5% GyFTR Coins"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 8,
        "site": "https://vouchwise.in/out/buy-westside-grabdeal",
        "perks": ""
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-westside-ishop",
        "perks": "5% iCash"
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
        "perks": ""
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-edgerewards",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-gyftr",
        "perks": ""
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zepto-ishop",
        "perks": "",
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
        "perks": "",
        "disclaimer": "Monthly Limit: ₹2,000"
      },
      {
        "portalId": "shopwise",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-shopwise",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_edgerewards",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-edgerewards",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "amazon",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-amazon",
        "perks": "",
        "disclaimer": "Seller: PineLabs"
      },
      {
        "portalId": "gyftr",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-gyftr",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "axis_grabdeals",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-grabdeal",
        "perks": "",
        "disclaimer": "Not Available"
      },
      {
        "portalId": "icici_ishop",
        "upfrontDiscountPercent": 0,
        "site": "https://vouchwise.in/out/buy-zomato-ishop",
        "perks": "",
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
      "gyftr": 1,
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