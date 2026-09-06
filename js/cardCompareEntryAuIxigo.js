// cardCompareEntryAuIxigo.js
// One card, one file. Edit this file to update ixigo AU Bank Credit Card.
// After editing, regenerate js/cardCompareGeneratedData.js by running:
//   node cardCompareBuildData.js
// Do NOT hand-edit js/cardCompareGeneratedData.js — it's overwritten every run.

export const cardProfile = {
  "id": "au_ixigo",
  "slug": "au-ixigo",
  "name": "ixigo AU Bank Credit Card",
  "issuer": "AU Small Finance Bank (co-brand: ixigo)",
  "bucket": "entry",
  "eligibility_notes": "No published income/eligibility threshold found in any source gathered so far. Same caveat as Scapia — absence of a stated criterion isn't confirmation there is none, just that we haven't found it yet.",
  "tags": [
    "travel",
    "forex",
    "lounge-access"
  ],
  "joining_fee": 0,
  "annual_fee": 0,
  "waiver_spend_threshold": null,
  "waiver_condition": "Officially ₹999+GST joining/annual fee, currently Lifetime Free as a PROMOTIONAL waiver — unlike Scapia this is not structurally guaranteed, could revert. Flag this distinction in UI.",
  "base_reward_multiplier": 2.5,
  "base_point_value_inr": 0.5,
  "base_is_estimate": 0,
  "fees_mitc_url": "https://www.au.bank.in/content/dam/aubank/in/en/pdf/credit-card/MITC(with-Schedule-of-Charges).pdf",
  "rewards_mitc_url": "https://www.au.bank.in/pdf/credit-card/revision-of-ixigo-au-credit-card-usage-tnc.pdf",
  "source_url": "https://www.ixigo.com/travel-credit-card/comparison",
  "last_verified": "2026-08-13",
  "notes": "RESOLVED — base rate gap closed. Real effective rate is 1.25% (best-case, via ixigo Money), not the \"5 points/₹200\" framing alone. ₹99+GST redemption fee applies per redemption (min 200 points) — a real friction cost worth surfacing in UI. Monthly earn cap: 10,000 points/statement cycle. Quarterly milestone: ₹75,000 spend → 5,000 bonus points (₹2,500 best-case value). Train bookings via ixigo earn at 2.5% (stated directly as a rupee-value %, not coin-count — unlike the base rate; source doesn't clarify, treat with same caution as Scapia's RuPay ambiguity). Lounge spend threshold conflicting across sources (₹20,000 vs ₹50,000/quarter) — see offers entry. NOTE re: variants — unlike Scapia, ixigo AU's Visa and RuPay variants earn the SAME base rate (5 points/₹200 both) per the official comparison page — no `variants` array needed here. The two variants differ on features instead: UPI support and ₹2L travel insurance are RuPay-only, international acceptance and Priority Pass lounge are Visa-only. Don't assume every co-branded card needs a variants split — check each one."
};

export const exclusions = [
  {
    "card_id": "au_ixigo",
    "category": "fuel",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via ixigo's own official page: zero reward points on fuel. Separate 1% surcharge waiver also applies, capped ₹250/month for transactions ₹400-5,000 — different mechanism, do not conflate.",
    "source_clause": "ixigo's own official comparison/FAQ page",
    "source_url": "https://www.ixigo.com/travel-credit-card/comparison"
  },
  {
    "card_id": "au_ixigo",
    "category": "rent",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via ixigo's own official page: \"rent payments through third-party apps\" earn zero points.",
    "source_clause": "ixigo's own official comparison/FAQ page",
    "source_url": "https://www.ixigo.com/travel-credit-card/comparison"
  },
  {
    "card_id": "au_ixigo",
    "category": "wallet_load",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via ixigo's own official page: \"jewelry\" and wallet reload transactions earn zero points. (jewellery has no dedicated category in the taxonomy yet — filed under wallet_load for now, revisit if it needs its own row.)",
    "source_clause": "ixigo's own official comparison/FAQ page",
    "source_url": "https://www.ixigo.com/travel-credit-card/comparison"
  },
  {
    "card_id": "au_ixigo",
    "category": "cash_advance",
    "reward_factor": 0,
    "extra_fee_percent": 2.5,
    "extra_fee_cap_inr": null,
    "notes": "Zero reward points, plus a real cash advance fee of 2.5% of amount (min ₹500) — same \"penalty, not just exclusion\" pattern seen on Scapia's rent/wallet-load.",
    "source_clause": "ixigo's own official comparison/FAQ page",
    "source_url": "https://www.ixigo.com/travel-credit-card/comparison"
  },
  {
    "card_id": "au_ixigo",
    "category": "government_payment",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "BBPS (Bharat Bill Payment System) transactions specifically discontinued from earning rewards effective 22 Dec 2024, per an official AU Bank amendment PDF — this is the strongest-sourced exclusion on this card, a genuine dated regulatory-style notice rather than a marketing claim.",
    "source_clause": "AU Bank official amendment PDF, effective 22 Dec 2024",
    "source_url": "https://www.au.bank.in/pdf/credit-card/revision-of-ixigo-au-credit-card-usage-tnc.pdf"
  },
  {
    "card_id": "au_ixigo",
    "category": "utility_bill_via_app",
    "reward_factor": 0.4,
    "cap_points_per_statement_cycle": null,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "NOT fully excluded, contrary to some marketing copy — reduced rate of 1 point per ₹100 (vs 2.5 base), per the same official amendment PDF. Per-transaction cap also applies: max 100 points per insurance/utility transaction ≥₹10,000. This is a third distinct pattern from Times Black's shared-cycle-cap — a per-transaction cap on a reduced rate, not a shared pool. Worth a schema note: cap_points_per_statement_cycle doesn't capture \"per-transaction\" caps, only \"per-cycle\" ones — may need a cap_points_per_transaction field eventually.",
    "source_clause": "AU Bank official amendment PDF, effective 22 Dec 2024",
    "source_url": "https://www.au.bank.in/pdf/credit-card/revision-of-ixigo-au-credit-card-usage-tnc.pdf"
  },
  {
    "card_id": "au_ixigo",
    "category": "insurance_premium",
    "reward_factor": 0.4,
    "cap_points_per_statement_cycle": null,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "Same reduced-rate-with-per-transaction-cap pattern as utility_bill_via_app — see that row. Note this directly contradicts the \"insurance excluded entirely\" claim on ixigo's own marketing page — the official amendment PDF is the higher-authority source here, trust the reduced-rate version.",
    "source_clause": "AU Bank official amendment PDF, effective 22 Dec 2024",
    "source_url": "https://www.au.bank.in/pdf/credit-card/revision-of-ixigo-au-credit-card-usage-tnc.pdf"
  },
  {
    "card_id": "au_ixigo",
    "category": "international_spend",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "As of an April 2026 update, international spend no longer earns points, even though forex markup remains 0%.",
    "source_clause": "unresolved — needs direct MITC confirmation of this specific claim",
    "source_url": null
  }
];

export const offers = [
  {
    "card_id": "au_ixigo",
    "offer_type": "lounge",
    "condition_type": "with_spend",
    "spend_threshold": 50000,
    "frequency": "quarterly",
    "cap_count": 8,
    "value_description": "8 domestic airport lounge visits/year (2/quarter), gated on spend in the PRECEDING quarter — ixigo's own page declines to state the exact figure (\"refer to latest T&Cs\"), but two independent third-party reviews (cardinsider, paisabazaar) both cite ₹50,000/quarter as of an April 2026 devaluation, up from an earlier ₹20,000. Treat ₹50,000 as reasonably confident, not MITC-confirmed.",
    "estimated_value_inr": null,
    "source_url": "https://www.ixigo.com/travel-credit-card/comparison"
  },
  {
    "card_id": "au_ixigo",
    "offer_type": "lounge",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": 8,
    "value_description": "8 domestic railway lounge visits/year, no spend condition",
    "estimated_value_inr": null,
    "source_url": "https://www.ixigo.com/payments/cbcc"
  }
];
