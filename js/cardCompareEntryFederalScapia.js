// cardCompareEntryFederalScapia.js
// One card, one file. Edit this file to update Scapia Federal Credit Card.
// After editing, regenerate js/cardCompareGeneratedData.js by running:
//   node cardCompareBuildData.js
// Do NOT hand-edit js/cardCompareGeneratedData.js — it's overwritten every run.

export const cardProfile = {
  "id": "federal_scapia",
  "slug": "federal-scapia",
  "name": "Scapia Federal Credit Card",
  "issuer": "Federal Bank (co-brand: Scapia)",
  "bucket": "entry",
  "eligibility_notes": "No published income/eligibility threshold found in any source gathered so far — appears to be a genuinely open, low-bar application (consistent with its lifetime-free positioning). Worth confirming directly if this matters for the comparison, since \"no stated criteria\" and \"confirmed no criteria\" aren't the same claim.",
  "tags": [
    "travel",
    "forex",
    "lounge-access",
    "shopping"
  ],
  "joining_fee": 0,
  "annual_fee": 0,
  "waiver_spend_threshold": null,
  "waiver_condition": "Lifetime free — CONFIRMED via MITC v11 (30.04.2026), no threshold needed",
  "base_reward_multiplier": 10,
  "base_point_value_inr": 0.2,
  "base_is_estimate": 0,
  "variants": [
    {
      "network": "visa",
      "base_reward_multiplier": 10,
      "min_transaction_inr": 20,
      "notes": "International lounge access, broader global acceptance. This is the variant the card-level base_reward_multiplier above reflects."
    },
    {
      "network": "rupay",
      "base_reward_multiplier": 5,
      "min_transaction_inr": 500,
      "notes": "UPI-linkable (Visa variant is not). The ₹500 minimum matters in practice: most small UPI purchases (chai, auto-rickshaw, parking) fall below it and earn nothing, which undercuts the \"earn on UPI\" pitch for everyday spend."
    }
  ],
  "fees_mitc_url": "https://www.federal.bank.in/documents/d/guest/mitc_v11-30_04_26",
  "rewards_mitc_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26",
  "kfs_url": "https://www.federal.bank.in/documents/d/guest/kfs_v11-30_04_26",
  "source_url": "https://www.federal.bank.in/scapia",
  "last_verified": "2026-08-14",
  "notes": "Base rate CONFIRMED via official Federal Bank Cardholder Agreement: 10% Scapia Coins on Visa (min ₹20/txn), 5% on RuPay/UPI (min ₹500/txn), 20% on app travel bookings (variant-agnostic) — all under the same 5-coins=₹1 conversion, so real values are 2%, 1%, and 4% respectively. RuPay's \"5%\" ambiguity from earlier is now resolved: it IS coin-count, same as Visa. Coin value can change with 1 month notice per the Agreement — not permanently fixed. Per the Cardholder Agreement, spend on each variant tracks separately toward the ₹20,000 lounge threshold too — a cardholder with both variants can't combine Visa + RuPay spend to unlock lounge access faster; see the lounge offer entry."
};

export const exclusions = [
  {
    "card_id": "federal_scapia",
    "category": "international_spend",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via official Cardholder Agreement: \"forex transaction\" is explicitly listed in the MCC-coded ineligible-rewards table. Forex markup remains 0% — two separate facts, don't conflate.",
    "source_clause": "Federal Bank Cardholder Agreement v13 (20.06.2026), rewards section MCC table",
    "source_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26"
  },
  {
    "card_id": "federal_scapia",
    "category": "rent",
    "reward_factor": 0,
    "extra_fee_percent": 1,
    "extra_fee_cap_inr": 3000,
    "notes": "Zero rewards CONFIRMED via Cardholder Agreement MCC table. Convenience fee (1%+GST, capped ₹3,000/txn) also CONFIRMED, no minimum threshold — applies to any rent amount.",
    "source_clause": "Federal Bank Cardholder Agreement v13 (20.06.2026)",
    "source_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26"
  },
  {
    "card_id": "federal_scapia",
    "category": "wallet_load",
    "reward_factor": 0,
    "extra_fee_percent": 1,
    "extra_fee_cap_inr": 3000,
    "notes": "CONFLICT BETWEEN TWO OFFICIAL FEDERAL BANK DOCUMENTS, not resolved: the fees MITC (item 18) states rent AND wallet-load both carry the 1%+GST convenience fee. This Cardholder Agreement's fee section only lists utility/fuel/rent as fee-bearing — wallet-load isn't mentioned there, only in the separate zero-reward MCC list. Zero rewards on wallet-load is solid either way; whether the extra fee also applies is genuinely unclear from conflicting first-party sources. Do not resolve this by picking one — flag both to the reader or confirm with the bank directly.",
    "source_clause": "CONFLICTING: MITC v11 item 18 vs Cardholder Agreement v13 fee section",
    "source_url": "https://www.federal.bank.in/documents/d/guest/mitc_v11-30_04_26"
  },
  {
    "card_id": "federal_scapia",
    "category": "emi_conversion",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via Cardholder Agreement MCC table. If an EMI is later cancelled, rewards are NOT reinstated — explicit in the Agreement, worth surfacing since it's a common point of confusion.",
    "source_clause": "Federal Bank Cardholder Agreement v13 (20.06.2026)",
    "source_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26"
  },
  {
    "card_id": "federal_scapia",
    "category": "insurance_premium",
    "reward_factor": 0,
    "cap_points_per_statement_cycle": null,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via Cardholder Agreement MCC table (MCC 6300) — fully excluded, unlike Times Black's reduced-cap pattern or ixigo AU's reduced-rate pattern for the same category. Three different cards, three different mechanisms for the same spend category — worth a comparison callout.",
    "source_clause": "Federal Bank Cardholder Agreement v13 (20.06.2026)",
    "source_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26"
  },
  {
    "card_id": "federal_scapia",
    "category": "utility_bill_via_app",
    "reward_factor": 0,
    "cap_points_per_statement_cycle": null,
    "extra_fee_percent": 1,
    "extra_fee_cap_inr": 3000,
    "notes": "Fully zero-reward (MCC 4900/4812/4814/4816), AND separately attracts the 1%+GST convenience fee if over ₹50,000/billing cycle. Both mechanisms confirmed via official documents — this is the most-penalized exclusion pattern of any category on any of the 4 cards.",
    "source_clause": "Federal Bank Cardholder Agreement v13 + MITC v11",
    "source_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26"
  },
  {
    "card_id": "federal_scapia",
    "category": "education",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via Cardholder Agreement MCC table (MCC 8211/8220/8241/8244/8249/8299) — education and school fees earn zero rewards.",
    "source_clause": "Federal Bank Cardholder Agreement v13 (20.06.2026)",
    "source_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26"
  },
  {
    "card_id": "federal_scapia",
    "category": "cash_advance",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via Cardholder Agreement — cash withdrawals earn zero rewards. Standard cash advance fee terms apply per the MITC (not yet cross-checked for the exact %).",
    "source_clause": "Federal Bank Cardholder Agreement v13 (20.06.2026)",
    "source_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26"
  },
  {
    "card_id": "federal_scapia",
    "category": "crypto",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via Cardholder Agreement MCC table (MCC 6051/6012/6011) — crypto/digital asset transactions and financial institution transactions earn zero rewards. New category not previously in the taxonomy — worth adding to the standard exclusion-category list given crypto spend is increasingly common.",
    "source_clause": "Federal Bank Cardholder Agreement v13 (20.06.2026)",
    "source_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26"
  },
  {
    "card_id": "federal_scapia",
    "category": "money_transfer",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via Cardholder Agreement — money transfers, gift cards, and credit card bill repayments (paying one card's bill with another) all earn zero rewards. New category, distinct from wallet_load.",
    "source_clause": "Federal Bank Cardholder Agreement v13 (20.06.2026)",
    "source_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26"
  }
];

export const offers = [
  {
    "card_id": "federal_scapia",
    "offer_type": "lounge",
    "condition_type": "with_spend",
    "spend_threshold": 5000,
    "frequency": "monthly",
    "cap_count": null,
    "value_description": "Unlimited domestic lounge access, unlocked by ₹20,000 combined spend in a billing cycle",
    "estimated_value_inr": null,
    "source_url": "https://www.federal.bank.in/documents/d/guest/cardholder-agreement-v13-20_06_26",
    "notes": "CORRECTED: Scapia's own marketing site (scapia.cards) states ₹5,000/month for lounge access — this directly contradicts the official Cardholder Agreement's ₹20,000/billing-cycle figure. The Agreement is the legally binding document; trusting it over marketing copy. Also note: per-variant — spend on Visa vs RuPay tracks separately and cannot be combined toward this threshold, per the Agreement."
  },
  {
    "card_id": "federal_scapia",
    "offer_type": "dining",
    "condition_type": "with_spend",
    "spend_threshold": 20000,
    "frequency": "monthly",
    "cap_count": null,
    "value_description": "Up to ₹1,000 back on airport shopping/dining/spa, unlocked on ₹20,000 combined monthly spend",
    "estimated_value_inr": 1000,
    "source_url": "https://www.scapia.cards/"
  }
];
