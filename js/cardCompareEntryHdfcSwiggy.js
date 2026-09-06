// cardCompareEntryHdfcSwiggy.js
// One card, one file. Edit this file to update Swiggy HDFC Bank Credit Card.
// After editing, regenerate js/cardCompareGeneratedData.js by running:
//   node cardCompareBuildData.js
// Do NOT hand-edit js/cardCompareGeneratedData.js — it's overwritten every run.

export const cardProfile = {
  "id": "hdfc_swiggy",
  "slug": "hdfc-swiggy",
  "name": "Swiggy HDFC Bank Credit Card",
  "issuer": "HDFC Bank (co-brand: Swiggy)",
  "bucket": "entry",
  "eligibility_notes": "No published income/age threshold sourced yet — same gap as the other entry-tier HDFC cards in this dataset.",
  "tags": [
    "cashback",
    "dining"
  ],
  "joining_fee": 500,
  "annual_fee": 500,
  "waiver_spend_threshold": 200000,
  "waiver_condition": "Renewal fee waived on ₹2 Lakh/year spend — CONFIRMED via master MITC fee table. No joining-fee waiver mentioned (unlike most other variants), joining fee appears to always apply.",
  "base_reward_multiplier": null,
  "base_point_value_inr": null,
  "base_is_estimate": 1,
  "fees_mitc_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf",
  "rewards_mitc_url": null,
  "source_url": null,
  "last_verified": "2026-08-14",
  "notes": "Weakest of the three HDFC cards added today. Cashback rate not disclosed anywhere in this MITC (same \"defined in product feature T&C\" gap as every other card). Forex markup and fuel surcharge waiver status: UNCONFIRMED — this card's row in the fee table did not show clear values for either column in the extracted text, genuinely ambiguous, not a confident inference. CONFIRMED and notable: cashback is credited DIRECTLY against statement balance (not points-based) for statements generated after 21 June 2024 — older \"Swiggy Money\" model (redeemable only on Swiggy app) applied before that cutoff. FUP cap: ₹3,500 cashback/statement cycle — a direct rupee cap, unlike the points-based caps on other cards (CONFIRMED). Cashback redemption fee: ₹0 — Swiggy card is EXPLICITLY EXCLUDED from the general ₹50 cashback redemption fee (confirmed, effective 1 Aug 2024) — a real, positive differentiator worth surfacing. No lounge access — Swiggy card is absent from the MITC's lounge-eligible variant list, which reads as an exhaustive list, so treating this as a confirmed \"no\" rather than an unknown."
};

export const exclusions = [
  {
    "card_id": "hdfc_swiggy",
    "category": "education",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: Swiggy card is explicitly named among cards where education transactions (including third-party apps) earn zero rewards.",
    "source_clause": "HDFC master MITC, Reward Points section, item (l)",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf"
  },
  {
    "card_id": "hdfc_swiggy",
    "category": "fuel",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: Swiggy card explicitly named among cards earning zero rewards on fuel transactions.",
    "source_clause": "HDFC master MITC, fuel surcharge footnote",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf"
  }
];

export const offers = [
  {
    "card_id": "hdfc_swiggy",
    "offer_type": "dining",
    "condition_type": "with_spend",
    "spend_threshold": 2000,
    "frequency": "monthly",
    "cap_count": 2,
    "offer_source": "vendor_offer",
    "valid_from": "2026-01-01",
    "valid_until": "2026-12-31",
    "value_description": "VENDOR OFFER (via SmartBuy, not a direct card benefit): 10% off, up to ₹200/transaction, on Swiggy Dineout bookings ≥₹2,000, coupon HDFCCARDS. Distinct from this card's own Swiggy cashback structure — this is a separate, stackable SmartBuy discount layered on top, not a substitute for the card's core cashback. Worth double-checking whether Swiggy HDFC cardholders can combine both, since \"cannot be combined with any other offer\" appears in the general T&Cs — that clause likely refers to OTHER SmartBuy offers, not the card's own base cashback, but this is inference, not confirmed.",
    "value_type": "voucher",
    "estimated_value_inr": 400,
    "source_url": "https://offers.smartbuy.hdfc.bank.in/offer_details/swiggy-dineout/26020"
  }
];
