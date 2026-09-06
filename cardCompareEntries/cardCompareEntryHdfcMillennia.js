// cardCompareEntryHdfcMillennia.js
// One card, one file. Edit this file to update HDFC Millennia Credit Card.
// After editing, regenerate js/cardCompareGeneratedData.js by running:
//   node cardCompareBuildData.js
// Do NOT hand-edit js/cardCompareGeneratedData.js — it's overwritten every run.

export const cardProfile = {
  "id": "hdfc_millennia",
  "slug": "hdfc-millennia",
  "name": "HDFC Millennia Credit Card",
  "issuer": "HDFC Bank",
  "bucket": "entry",
  "eligibility_notes": "No published income/age threshold sourced yet for this specific card — HDFC's general credit card eligibility criteria likely apply (typically salaried/self-employed income bands set per-application, not published per-card), but that hasn't been confirmed against an actual HDFC eligibility page for Millennia specifically.",
  "tags": [
    "cashback",
    "shopping"
  ],
  "joining_fee": 1000,
  "annual_fee": 1000,
  "fees_gst_inclusive": null,
  "waiver_spend_threshold": 100000,
  "waiver_condition": "Renewal fee waived on ₹1 Lakh/year spend — CONFIRMED via master MITC fee table",
  "base_reward_multiplier": 1,
  "base_point_value_inr": 1,
  "base_is_estimate": 0,
  "accelerated_category_rate": 5,
  "fees_mitc_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf",
  "rewards_mitc_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf",
  "source_url": "https://www.hdfc.bank.in/credit-cards/millennia-credit-card",
  "last_verified": "2026-08-14",
  "notes": "RESOLVED — the biggest gap on any HDFC card so far. 5% cashback on 10 named merchants, capped 1,000 CashPoints (₹1,000)/month SEPARATELY from 1% on other spends, also capped 1,000/month — so max monthly cashback is ₹2,000 combined, not ₹1,000. NO complimentary lounge access since 1 Dec 2023 (explicit, confirmed removal — worth surfacing since \"entry\" bucket travel-curious readers might assume otherwise). Card-SPECIFIC fee caps differ from the general MITC: rent-via-third-party-app / fuel>₹15k / utility>₹50k / education-via-third-party all capped at ₹3,000/txn here, NOT the general MITC's ₹4,999 — a genuine per-card override worth flagging since using the wrong cap would understate the fee. Insurance transactions explicitly NOT treated as utility spend, so no utility surcharge applies to insurance. Cashback redemption fee: ₹50 (effective 1 Aug 2024, for statement-credit redemption specifically) — separate from ₹99+tax for rewards-catalogue redemption. Min redemption: 500 CashPoints. SmartBuy flight/hotel/catalogue redemption: 1 CashPoint = ₹0.30, up to 50% of booking value, capped 50,000 points/month. Unredeemed points expire after 2 years."
};

export const exclusions = [
  {
    "card_id": "hdfc_millennia",
    "category": "rent",
    "reward_factor": 0,
    "extra_fee_percent": 1,
    "extra_fee_cap_inr": 3000,
    "notes": "CONFIRMED via Millennia-specific rewards T&C: zero rewards, PLUS a 1% convenience fee capped ₹3,000/txn for rent paid via third-party apps (CRED, Paytm, Cheq, MobiKwik, etc). This cap is LOWER than the general MITC's ₹4,999 — the card-specific document overrides the general one, use ₹3,000.",
    "source_clause": "Millennia rewards T&C (millennia-tnc-20th-jul26.pdf), Important Changes in Charges",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  },
  {
    "card_id": "hdfc_millennia",
    "category": "education",
    "reward_factor": 0,
    "extra_fee_percent": 1,
    "extra_fee_cap_inr": 3000,
    "notes": "RESOLVED (previously flagged unclear): zero rewards ONLY for education paid via third-party apps (CRED, Paytm, Cheq, MobiKwik) — direct payment via college/school website or their own POS machines still earns normally, and international education payments are excluded from the fee entirely. Fee: 1%, capped ₹3,000/txn (Millennia-specific, lower than general MITC's ₹4,999) for the third-party-app case only.",
    "source_clause": "Millennia rewards T&C (millennia-tnc-20th-jul26.pdf)",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  },
  {
    "card_id": "hdfc_millennia",
    "category": "wallet_load",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: wallet loading transactions earn zero rewards, effective 1 Sept 2024. MCC 6540.",
    "source_clause": "Millennia rewards T&C (millennia-tnc-20th-jul26.pdf)",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  },
  {
    "card_id": "hdfc_millennia",
    "category": "emi_conversion",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: EMI transactions earn zero rewards, effective 1 Sept 2024. The 1% category is explicit that this includes ALL EMI \"even if preclosed\" — broader wording than the 5% category clause, worth noting the asymmetry.",
    "source_clause": "Millennia rewards T&C (millennia-tnc-20th-jul26.pdf)",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  },
  {
    "card_id": "hdfc_millennia",
    "category": "fuel",
    "reward_factor": 0,
    "extra_fee_percent": 1,
    "extra_fee_cap_inr": 3000,
    "notes": "CONFIRMED: zero rewards on all fuel spend. Separately, transactions over ₹15,000 attract a 1% fee capped ₹3,000/txn — below that threshold, no fee (distinct from the fuel SURCHARGE waiver, which is a different mechanism entirely).",
    "source_clause": "Millennia rewards T&C (millennia-tnc-20th-jul26.pdf)",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  },
  {
    "card_id": "hdfc_millennia",
    "category": "utility_bill_via_app",
    "reward_factor": 1,
    "cap_points_per_statement_cycle": null,
    "extra_fee_percent": 1,
    "extra_fee_cap_inr": 3000,
    "notes": "NOT excluded from rewards (earns under the normal 1% category, subject to the ₹1,000/month cap) — but a separate 1% convenience fee, capped ₹3,000/txn, applies to utility spend OVER ₹50,000/txn. Insurance transactions are explicitly NOT treated as utility spend, so no fee applies to insurance regardless of amount.",
    "source_clause": "Millennia rewards T&C (millennia-tnc-20th-jul26.pdf)",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  },
  {
    "card_id": "hdfc_millennia",
    "category": "cash_advance",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: cash advances explicitly listed as reward-ineligible under both the 5% and 1% categories.",
    "source_clause": "Millennia rewards T&C (millennia-tnc-20th-jul26.pdf)",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  },
  {
    "card_id": "hdfc_millennia",
    "category": "government_payment",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: government-related transactions earn zero rewards, effective 1 Jan 2023.",
    "source_clause": "Millennia rewards T&C (millennia-tnc-20th-jul26.pdf)",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  }
];

export const offers = [
  {
    "card_id": "hdfc_millennia",
    "offer_type": "dining",
    "condition_type": "with_spend",
    "spend_threshold": 2000,
    "frequency": "monthly",
    "cap_count": 2,
    "offer_source": "vendor_offer",
    "valid_from": "2026-01-01",
    "valid_until": "2026-12-31",
    "value_description": "VENDOR OFFER (via SmartBuy, not a direct card benefit): 10% off, up to ₹200/transaction, on Swiggy Dineout bookings ≥₹2,000 (post restaurant discount), using coupon HDFCCARDS — the \"other cards\" tier, lower than Infinia's. Up to twice/month.",
    "value_type": "voucher",
    "estimated_value_inr": 400,
    "source_url": "https://offers.smartbuy.hdfc.bank.in/offer_details/swiggy-dineout/26020"
  },
  {
    "card_id": "hdfc_millennia",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "per_booking",
    "cap_count": 1,
    "value_description": "Welcome benefit: 1,000 CashPoints (₹1,000) credited once the joining membership fee is paid. No CashPoints for renewal fee payments.",
    "estimated_value_inr": 1000,
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  },
  {
    "card_id": "hdfc_millennia",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 100000,
    "frequency": "quarterly",
    "cap_count": 1,
    "value_description": "Quarterly milestone: ₹1,000 gift voucher choice (Big Basket / BookMyShow / Pizza Hut / PVR / Uber), unlocked on ₹1 Lakh net spend in a calendar quarter. Voucher must be claimed within 120 days of the SMS/email trigger, or it lapses unreissued.",
    "value_type": "voucher",
    "estimated_value_inr": 1000,
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  },
  {
    "card_id": "hdfc_millennia",
    "offer_type": "lounge",
    "condition_type": "with_spend",
    "spend_threshold": null,
    "frequency": "quarterly",
    "cap_count": null,
    "value_description": "CONFLICTING SOURCES — NOT confirmed either way: the card's own dedicated rewards T&C (millennia-tnc-20th-jul26.pdf, the same document used for every other Millennia figure in this dataset) explicitly states lounge access was REMOVED effective 1 Dec 2023. But HDFC's general Millennia-family marketing page still lists \"complimentary domestic airport lounge access\" as a current benefit \"with certain cards such as Millennia Credit Card,\" and a third-party review (CardMaven, ~1 month old) describes lounge access as \"no longer complimentary simply by presenting the card\" — implying it still exists, just spend-gated now. The Millennia DEBIT card (a different product) has a confirmed, dated rule: 1 free visit/quarter on ₹10,000+ spend, effective 10 Jan 2026 — possibly the credit card follows an identical pattern, but this is inference, not confirmation. Given the dedicated T&C is the more specific and more authoritative source for THIS card, the honest default is to treat lounge access as likely NOT available — but this is genuinely unresolved, not settled either direction.",
    "estimated_value_inr": null,
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/millennia-credit-card/pdf/millennia-tnc-20th-jul26.pdf"
  }
];
