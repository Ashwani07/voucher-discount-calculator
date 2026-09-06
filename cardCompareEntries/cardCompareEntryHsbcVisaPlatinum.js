// cardCompareEntryHsbcVisaPlatinum.js
// One card, one file. Edit this file to update HSBC Visa Platinum Credit Card.
// After editing, regenerate js/cardCompareGeneratedData.js by running:
//   node cardCompareBuildData.js
// Do NOT hand-edit js/cardCompareGeneratedData.js — it's overwritten every run.

export const cardProfile = {
  "id": "hsbc_visa_platinum",
  "slug": "hsbc-visa-platinum",
  "name": "HSBC Visa Platinum Credit Card",
  "issuer": "HSBC",
  "bucket": "entry",
  "eligibility_notes": "Age 18-65 (salaried) or 25-65 (self-employed). Income: ₹6L/year salaried or ₹12L/year self-employed. Must be an Indian resident in one of 20 named cities. The city check is address-on-file, not necessarily where someone actually lives day-to-day — worth noting factually rather than as encouragement, since that's the kind of detail readers already know to work with via office addresses etc.",
  "tags": [
    "travel",
    "fuel",
    "dining",
    "shopping"
  ],
  "joining_fee": 0,
  "annual_fee": 0,
  "fees_gst_inclusive": null,
  "waiver_spend_threshold": null,
  "waiver_condition": "Always ₹0 — no joining or annual fee at all, no spend threshold needed. Genuinely fee-free, not a promotional waiver like ixigo AU's.",
  "base_reward_multiplier": 1.33,
  "base_point_value_inr": null,
  "base_is_estimate": 1,
  "accelerated_category_rate": null,
  "fees_mitc_url": null,
  "rewards_mitc_url": null,
  "source_url": "https://www.hsbc.co.in/credit-cards/products/platinum/",
  "last_verified": "2026-08-15",
  "notes": "Open-market card, unlike HSBC Premier — but NOT unrestricted: eligibility requires being an Indian resident specifically in one of 20 named cities (Chennai, Gurgaon, Delhi NCR, Pune, Noida, Hyderabad, Mumbai, Bengaluru, Kochi, Coimbatore, Jaipur, Chandigarh, Ahmedabad, Kolkata, Amritsar, Baroda, Indore, Lucknow, Nagpur, Surat, Trivandrum) — most cards in this dataset have no such geographic restriction, worth its own taxonomy consideration (income/relationship gating vs geographic gating are different kinds of \"can I even get this card\"). Income requirement: ₹6L/year salaried (age 18-65) or ₹12L/year self-employed (age 25-65) — much lower bar than HSBC Premier or Times Black. Forex markup: NOT stated on this page, genuine gap — HSBC Premier's own page had this conflict issue (0.99% vs 1.99%), so don't assume Platinum shares either number without checking its own MITC once found. Air miles conversion: direct partnerships with Air India, Etihad Airways, British Airways, and Singapore Airlines specifically named — narrower airline list than a typical points marketplace, worth noting as a real constraint on travel redemption value."
};

export const exclusions = [];

export const offers = [
  {
    "card_id": "hsbc_visa_platinum",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 5000,
    "frequency": "per_booking",
    "cap_count": 1,
    "value_description": "Welcome offer 1: 2,000 reward points for downloading + logging into the HSBC India Mobile Banking app and spending ₹5,000 within the first 30 days of having the card",
    "estimated_value_inr": null,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/platinum/"
  },
  {
    "card_id": "hsbc_visa_platinum",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "per_booking",
    "cap_count": 1,
    "value_description": "Welcome offer 2: complimentary 3-month Swiggy One membership on card activation",
    "estimated_value_inr": null,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/platinum/"
  },
  {
    "card_id": "hsbc_visa_platinum",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 300,
    "frequency": "per_booking",
    "cap_count": 1,
    "value_description": "Welcome offer 3: voucher worth up to ₹500 (Amazon Pay / Zomato / Swiggy) on activating the card with a single transaction of ₹300 or more",
    "estimated_value_inr": 500,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/platinum/"
  },
  {
    "card_id": "hsbc_visa_platinum",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "per_booking",
    "cap_count": 1,
    "value_description": "Welcome offer 4: ₹250 Amazon eGift Card for applying online and completing Video KYC",
    "estimated_value_inr": 250,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/platinum/"
  },
  {
    "card_id": "hsbc_visa_platinum",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 10000,
    "frequency": "quarterly",
    "cap_count": null,
    "value_description": "₹250 cashback on contactless (tap-and-pay) fuel purchases when spending ₹10,000/quarter on fuel, PLUS a separate fuel surcharge waiver up to ₹250/month on transactions between ₹400 and ₹4,000 — two distinct fuel benefits stacked, not one",
    "estimated_value_inr": 250,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/platinum/"
  },
  {
    "card_id": "hsbc_visa_platinum",
    "offer_type": "dining",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "monthly",
    "cap_count": null,
    "value_description": "District by Zomato: 10% off dining, activities, and shopping; buy-one-get-one cinema tickets",
    "estimated_value_inr": null,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/platinum/"
  },
  {
    "card_id": "hsbc_visa_platinum",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Visa Signature perks: complimentary 12-month Times Prime subscription (bundles Spotify Premium, Uber One, Discovery+, Moneycontrol Pro, Lenskart Gold); 2x/year complimentary flight seat selection on domestic MakeMyTrip bookings; 15% cashback to MakeMyTrip Wallet for India hotel stays booked with promo code VISASIGNATURE",
    "estimated_value_inr": null,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/platinum/"
  }
];
