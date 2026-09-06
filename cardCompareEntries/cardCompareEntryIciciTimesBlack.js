// cardCompareEntryIciciTimesBlack.js
// One card, one file. Edit this file to update Times Black ICICI Bank Credit Card.
// After editing, regenerate js/cardCompareGeneratedData.js by running:
//   node cardCompareBuildData.js
// Do NOT hand-edit js/cardCompareGeneratedData.js — it's overwritten every run.

export const cardProfile = {
  "id": "icici_times_black",
  "slug": "icici-times-black",
  "name": "Times Black ICICI Bank Credit Card",
  "issuer": "ICICI Bank",
  "bucket": "high-tier",
  "eligibility_notes": "Salaried: ₹2,00,000/month income. Self-employed: ₹24,00,000/year. Genuinely high bar, not a soft one — this isn't the kind of card an RM typically bends much on, since it's tied to underwriting income bands rather than a relationship/balance threshold.",
  "tags": [
    "travel",
    "lifestyle",
    "lounge-access",
    "shopping"
  ],
  "joining_fee": 23600,
  "annual_fee": 23600,
  "fees_gst_inclusive": null,
  "waiver_spend_threshold": 2500000,
  "waiver_condition": "Waived if annual spend >= ₹25,00,000",
  "base_reward_multiplier": 2,
  "base_point_value_inr": 0.4,
  "base_is_estimate": 0,
  "fees_mitc_url": "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/mitc_cc.pdf",
  "rewards_mitc_url": "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/times-black-icici-credit-card-terms-conditions.pdf",
  "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card",
  "last_verified": "2026-08-13",
  "notes": "RESOLVED — base rate gap closed. 2% on domestic spend, 2.5% on international, per ICICI's own FAQ. cardData.js is currently single-rate-per-card, so international's 2.5% isn't modeled yet — same simplification already noted for Scapia's app-travel rate. Add a category-level reward_rules table when a second card needs this (now two do)."
};

export const exclusions = [
  {
    "card_id": "icici_times_black",
    "category": "fuel",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "Zero reward points on fuel transactions. If mistakenly credited, ICICI explicitly reverses them.",
    "source_clause": "ICICI's own FAQ, confirmed",
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "category": "rent",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "Zero reward points on rent payments. Same reversal policy as fuel.",
    "source_clause": "ICICI's own FAQ, confirmed",
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "category": "emi_conversion",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "Zero reward points on transactions converted to EMI. Same reversal policy as fuel/rent.",
    "source_clause": "ICICI's own FAQ, confirmed",
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "category": "utility_bill_via_app",
    "reward_factor": 1,
    "cap_points_per_statement_cycle": 5000,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "NOT excluded — earns normally, but capped at 5,000 reward points per statement cycle, shared across utility/insurance/education/government payments combined (not 5,000 each). New pattern, distinct from a flat exclusion — schema needs this cap field, which fuel/rent/EMI do not use.",
    "source_clause": "ICICI's own FAQ, confirmed",
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "category": "insurance_premium",
    "reward_factor": 1,
    "cap_points_per_statement_cycle": 5000,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "Same shared 5,000-point cap as utility_bill_via_app — see that row for the combined-cap caveat.",
    "source_clause": "ICICI's own FAQ, confirmed",
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "category": "education",
    "reward_factor": 1,
    "cap_points_per_statement_cycle": 5000,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "Same shared 5,000-point cap — see utility_bill_via_app row.",
    "source_clause": "ICICI's own FAQ, confirmed",
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "category": "government_payment",
    "reward_factor": 1,
    "cap_points_per_statement_cycle": 5000,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "Same shared 5,000-point cap — see utility_bill_via_app row.",
    "source_clause": "ICICI's own FAQ, confirmed",
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  }
];

export const offers = [
  {
    "card_id": "icici_times_black",
    "offer_type": "lounge",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Unlimited lounge access, 1,300+ lounges across 600+ cities, primary + add-on cardholders",
    "estimated_value_inr": null,
    "source_url": "https://www.timesblack.com/"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "per_booking",
    "cap_count": 1,
    "value_description": "Welcome benefit: choice of ₹12,000 Lohono voucher OR ₹10,000 EaseMyTrip voucher, plus Atlys visa fee waiver, 6 CribLife concierge requests, ₹3,000 Tony&Guy voucher, and Zomato Gold membership",
    "value_type": "voucher",
    "estimated_value_inr": 12000,
    "source_url": "https://www.timesblack.com/"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "shopping",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "monthly",
    "cap_count": null,
    "value_description": "6X reward points on flights/shopping via iShop, 12X reward points on hotel bookings via iShop — layered on top of the 2% base rate, exact rupee value depends on the point-value used for these accelerated categories, not yet separately priced",
    "estimated_value_inr": null,
    "source_url": "https://www.timesblack.com/"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "2.5% reward points on forex/international spend (higher than the 2% domestic base rate) — see cardProfile notes for the international-rate detail",
    "estimated_value_inr": null,
    "source_url": "https://www.timesblack.com/"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Tiered milestone benefits at spend thresholds — gift cards, mobility perks, luxury hotel stays. Exact thresholds and values not sourced in detail yet, flagged as a real gap rather than guessed.",
    "estimated_value_inr": null,
    "source_url": "https://www.timesblack.com/"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Travel insurance: trip cancellation cover, lost baggage cover, travel document protection",
    "estimated_value_inr": null,
    "source_url": "https://www.timesblack.com/"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "dining",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Lifestyle perks: Encalm Privé airport lounges, Truefitt & Hill grooming session (₹3,100 value), AAYNA Privé aesthetic clinic session (₹23,000 value), The Quorum Club member events",
    "value_type": "voucher",
    "estimated_value_inr": 26100,
    "source_url": "https://www.timesblack.com/"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "24x7 domestic and international concierge service for bookings and assistance",
    "estimated_value_inr": null,
    "source_url": "https://www.timesblack.com/"
  }
];
