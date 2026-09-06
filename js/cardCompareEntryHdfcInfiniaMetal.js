// cardCompareEntryHdfcInfiniaMetal.js
// One card, one file. Edit this file to update HDFC Infinia Credit Card (Metal Edition).
// After editing, regenerate js/cardCompareGeneratedData.js by running:
//   node cardCompareBuildData.js
// Do NOT hand-edit js/cardCompareGeneratedData.js — it's overwritten every run.

export const cardProfile = {
  "id": "hdfc_infinia_metal",
  "slug": "hdfc-infinia",
  "name": "HDFC Infinia Credit Card (Metal Edition)",
  "issuer": "HDFC Bank",
  "bucket": "premier-gated",
  "eligibility_notes": "\"By Invite Only\" — no published income or spend threshold at all, unlike HSBC Premier which at least states a criterion. In practice, relationship managers can sometimes facilitate an invite for high-value existing HDFC customers, but there's no public path to apply for or work toward — state this plainly rather than implying it's reachable through a stated number.",
  "tags": [
    "travel",
    "lounge-access",
    "lifestyle",
    "forex",
    "dining"
  ],
  "joining_fee": 12500,
  "annual_fee": 12500,
  "waiver_spend_threshold": 1000000,
  "waiver_condition": "Renewal fee waived on ₹10 Lakh/year spend, for cards sourced after 18 Oct 2021 (current tier). Cards sourced BEFORE that date have a lower fee/threshold: ₹10,000 fee, ₹8 Lakh waiver — a real legacy-tier split, not a typo. This profile uses the current (post-2021) tier as default since that's what new applicants get.",
  "base_reward_multiplier": 3.33,
  "base_point_value_inr": null,
  "base_is_estimate": 1,
  "accelerated_category_rate": null,
  "fees_mitc_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf",
  "rewards_mitc_url": null,
  "source_url": "https://www.hdfc.bank.in/credit-cards/infinia-credit-card",
  "last_verified": "2026-08-15",
  "notes": "Invite-only card — \"By Invite Only\" stated directly on the page, meaning this isn't even an open-application premier-gated card the way HSBC Premier is (which at least has stated eligibility criteria you could work toward) — Infinia is discretionary invitation, no published path to qualify. Forex markup: 2% CONFIRMED, explicitly stated as \"lowest markup fee.\" Fuel surcharge waiver: 1%, unusually wide ₹400–₹1,00,000 range (other cards cap around ₹5,000) — CONFIRMED. POSITIVE DIFFERENTIATOR, explicitly confirmed: insurance, utilities, and education ALL earn the full base rate normally — Infinia does NOT apply the exclusions/caps/reduced-rates seen on Times Black, Millennia, ixigo AU, or Scapia for these categories. This is a genuine standout worth surfacing in any comparison. Cross-referenced against the general master MITC (already on file) for Infinia-specific rules not repeated on this page: reward point validity 3 years (not the standard 2); FUP cap 2,00,000 points/statement cycle (highest of any card in the dataset); insurance-specific monthly cap 10,000 points (higher than the 2,000 general-card cap, consistent with \"earns normally\" claim above); flight/hotel redemption cap 1,50,000 points/month; up to 70% of booking value redeemable via points; Infinia is EXCLUDED from both the ₹99 points-redemption fee and ₹50 cashback-redemption fee that apply to nearly every other card in this dataset — a real, confirmed cost advantage. Tanishq voucher redemption capped 50,000 points/quarter; Apple product redemption capped to 1 unit/quarter — both Infinia-specific caps from the general MITC."
};

export const exclusions = [
  {
    "card_id": "hdfc_infinia_metal",
    "category": "fuel",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: no reward points earned on fuel transactions, stated directly on the product page. Note the fuel SURCHARGE waiver (1%, ₹400-₹1,00,000) is a separate mechanism and still applies — don't conflate the two, same distinction as every other card in this dataset.",
    "source_clause": "HDFC Infinia product page, Additional Benefits section",
    "source_url": "https://www.hdfc.bank.in/credit-cards/infinia-credit-card"
  },
  {
    "card_id": "hdfc_infinia_metal",
    "category": "rent",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: this was already sourced (the general master MITC states rent earns zero rewards \"on all the cards,\" with no exception for Infinia) but was never added as its own row for this card — a data-entry gap, not a research gap, same pattern as the earlier Regalia Gold fuel miss. Independently corroborated by a third-party comparison (CardExpress) explicitly listing \"no reward points on rent\" as an Infinia limitation.",
    "source_clause": "HDFC master MITC, Reward Points section, item (l) — applies universally, no Infinia exception listed",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf"
  },
  {
    "card_id": "hdfc_infinia_metal",
    "category": "government_payment",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: same gap-close as rent above — the general MITC's government-transaction exclusion applies to all cards except a named list of business/co-brand cards, and Infinia is not on that exception list. Independently corroborated by CardExpress.",
    "source_clause": "HDFC master MITC, Reward Points section, item (l) — by omission from the exception list",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf"
  }
];

export const offers = [
  {
    "card_id": "hdfc_infinia_metal",
    "offer_type": "dining",
    "condition_type": "with_spend",
    "spend_threshold": 3500,
    "frequency": "monthly",
    "cap_count": 2,
    "offer_source": "vendor_offer",
    "valid_from": "2026-01-01",
    "valid_until": "2026-12-31",
    "value_description": "VENDOR OFFER (via SmartBuy, not a direct card benefit): 10% off, up to ₹500/transaction, on Swiggy Dineout bookings ≥₹3,500 (post restaurant discount), using coupon HDFCINFINIA. Up to twice/month. This is layered on top of whatever base reward rate applies to the spend, not a substitute for it.",
    "value_type": "voucher",
    "estimated_value_inr": 1000,
    "source_url": "https://offers.smartbuy.hdfc.bank.in/offer_details/swiggy-dineout/26020"
  },
  {
    "card_id": "hdfc_infinia_metal",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "per_booking",
    "cap_count": 1,
    "value_description": "Welcome benefit: 12,500 reward points on card issuance, plus complimentary Club Marriott membership for the first year",
    "estimated_value_inr": null,
    "source_url": "https://www.hdfc.bank.in/credit-cards/infinia-credit-card"
  },
  {
    "card_id": "hdfc_infinia_metal",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": 1,
    "value_description": "Renewal benefit: 12,500 reward points upon renewal fee realization and card activation each year — recurring, not just a one-time welcome bonus, and separate from the ₹10L spend-based fee waiver.",
    "estimated_value_inr": null,
    "source_url": "https://www.hdfc.bank.in/credit-cards/infinia-credit-card"
  },
  {
    "card_id": "hdfc_infinia_metal",
    "offer_type": "lounge",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Unlimited complimentary domestic AND international airport lounge access (1,000+ lounges worldwide via Priority Pass), for both primary and add-on cardholders — no spend gate at all, unlike Regalia Gold's quarterly threshold",
    "estimated_value_inr": null,
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/infinia-credit-card/airport-lounge-access-program-30sep2025.pdf"
  },
  {
    "card_id": "hdfc_infinia_metal",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Unlimited complimentary golf lessons and games at leading India courses plus select courses worldwide, with 100% green fee waiver at select courses; 24x7 golf concierge for bookings",
    "estimated_value_inr": null,
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/infinia-credit-card/Golf-T-and-C-for-INFINIA-05-08-25.pdf"
  },
  {
    "card_id": "hdfc_infinia_metal",
    "offer_type": "dining",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Club Marriott membership (first year, via welcome benefit): up to 50% off dining/stay across Asia-Pacific, Monday buy-one-get-one drink, Tuesday 50% off food + 25% off beverage. Separately: 3 nights for the price of 2, plus 1+1 complimentary buffet, at participating ITC hotels.",
    "estimated_value_inr": null,
    "source_url": "https://hdfcinfinia-itcoffers.thriwe.com/"
  },
  {
    "card_id": "hdfc_infinia_metal",
    "offer_type": "shopping",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "monthly",
    "cap_count": null,
    "value_description": "Up to 10X reward points on SmartBuy travel and shopping spends — exact multiplier per category not pinned down yet, needs the SmartBuy accelerated-earn-rules page (same open gap as Regalia Gold's SmartBuy rates)",
    "estimated_value_inr": null,
    "source_url": "https://offers.smartbuy.hdfc.bank.in/v2/infinia/home"
  }
];
