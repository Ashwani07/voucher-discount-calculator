// cardCompareEntryHsbcPremier.js
// One card, one file. Edit this file to update HSBC Premier Credit Card.
// After editing, regenerate js/cardCompareGeneratedData.js by running:
//   node cardCompareBuildData.js
// Do NOT hand-edit js/cardCompareGeneratedData.js — it's overwritten every run.

export const cardProfile = {
  "id": "hsbc_premier",
  "slug": "hsbc-premier",
  "name": "HSBC Premier Credit Card",
  "issuer": "HSBC",
  "bucket": "premier-gated",
  "eligibility_notes": "Requires an existing HSBC Premier banking relationship: ₹50L+ average quarterly balance, OR ₹3L+/month salary credit, OR a ₹1.15cr+ mortgage with HSBC. This is a relationship-tier gate, not a hard product-level lock — an RM can sometimes help structure balances/salary routing to qualify, which is common practice for relationship-banking products generally. State the condition; the workaround path is the reader's call, not something to imply is guaranteed.",
  "tags": [
    "travel",
    "lounge-access",
    "forex"
  ],
  "joining_fee": 14160,
  "annual_fee": 0,
  "fees_gst_inclusive": null,
  "waiver_spend_threshold": null,
  "waiver_condition": "Always waived for HSBC Premier banking customers (eligibility itself requires the Premier relationship, so this is functionally permanent for anyone who can get the card)",
  "base_reward_multiplier": 3,
  "base_point_value_inr": 0.25,
  "base_is_estimate": 0,
  "fees_mitc_url": "https://www.hsbc.co.in/content/dam/hsbc/in/documents/premier_cc_tariff_mitc.pdf",
  "rewards_mitc_url": "https://www.hsbc.co.in/content/dam/hsbc/in/documents/hsbc-rewards-tcs.pdf",
  "rewards_page_url": "https://www.hsbc.co.in/credit-cards/products/premier/rewards/",
  "kfs_url": "https://www.hsbc.co.in/content/dam/hsbc/in/documents/credit-card-key-fact-statement.pdf",
  "source_url": "https://www.hsbc.co.in/credit-cards/products/premier/",
  "last_verified": "2026-08-14",
  "notes": "Eligibility-gated card — requires existing HSBC Premier relationship (₹50L+ TRB, or ₹3L/month salary, or ₹1.15cr+ mortgage as of Jan 2026). Not open-market. Flag prominently in UI, not just in this note. REAL CONFLICT: marketing page states 0.99% forex markup; the official MITC tariff sheet states 1.99%. MITC footer reads \"PREM MITC 01/2023\" — may be unupdated, or the marketing page may be wrong. Flag both to the reader, don't pick one. POINT VALUE now sourced: HSBC's own redemption FAQ states the range is ₹0.25–₹1.00 depending on redemption path — Apple sits at the ₹1 ceiling; the Accor hotel path calculates out to roughly ₹1.78/point (2,000 points = EUR40 ≈ ₹3,560 per the rewards page, using a Dec 2024 FX rate) — actually ABOVE the stated ceiling, meaning the \"up to ₹1.00\" claim is itself understated for at least one real redemption path. This is the kind of thing worth verifying with a fresh FX rate before publishing, since the source date is stale. Fuel surcharge waiver: 1% on ₹400–4,000. Rent: 1% processing fee + tax, no cap. Cash advance: 2.5% (min ₹300). Finance charge: 2.49%/month (29.88% p.a.). Redemption handling fee: reported as ₹50/redemption by a third-party source (bankbazaar) — not yet confirmed against the official T&Cs, treat cautiously."
};

export const exclusions = [
  {
    "card_id": "hsbc_premier",
    "category": "rent",
    "reward_factor": null,
    "extra_fee_percent": 1,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via official MITC: rent/rental payments attract a 1% processing fee + applicable taxes, effective 25 Jan 2023, no cap stated (unlike Scapia/Times Black which cap at ₹3,000/txn). Reward-earning status on rent is NOT stated in the MITC (which has no rewards content at all) — genuinely unknown, not assumed excluded.",
    "source_clause": "HSBC Premier Credit Card MITC (fees_mitc_url), tariff sheet",
    "source_url": "https://www.hsbc.co.in/content/dam/hsbc/in/documents/premier_cc_tariff_mitc.pdf"
  },
  {
    "card_id": "hsbc_premier",
    "category": "cash_advance",
    "reward_factor": null,
    "extra_fee_percent": 2.5,
    "extra_fee_cap_inr": null,
    "notes": "Cash advance fee: 2.5% of transaction (min ₹300), plus finance charges from the date of withdrawal — no interest-free period applies to cash advances, unlike purchases. Reward-earning status not stated (MITC has no rewards content).",
    "source_clause": "HSBC Premier Credit Card MITC (fees_mitc_url), tariff sheet",
    "source_url": "https://www.hsbc.co.in/content/dam/hsbc/in/documents/premier_cc_tariff_mitc.pdf"
  }
];

export const offers = [
  {
    "card_id": "hsbc_premier",
    "offer_type": "lounge",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Unlimited domestic + international lounge access, plus 8 international guest visits/year",
    "estimated_value_inr": null,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/premier/"
  },
  {
    "card_id": "hsbc_premier",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "per_booking",
    "cap_count": 1,
    "value_description": "Welcome benefit: 20,000 reward points on card issuance",
    "estimated_value_inr": 5000,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/premier/"
  },
  {
    "card_id": "hsbc_premier",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "monthly",
    "cap_count": null,
    "value_description": "Travel with Points: up to 12X reward points on hotel, flight, and car rental bookings — layered on top of the 3-points/₹100 base rate, exact rupee value depends on the point-value used for this accelerated category, not yet separately priced",
    "estimated_value_inr": null,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/premier/"
  },
  {
    "card_id": "hsbc_premier",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Online fraud protection, and lost-card liability cover up to ₹3,00,000",
    "estimated_value_inr": null,
    "source_url": "https://www.hsbc.co.in/credit-cards/products/premier/"
  }
];
