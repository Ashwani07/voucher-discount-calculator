// cardCompareEntryHdfcRegaliaGold.js
// One card, one file. Edit this file to update HDFC Regalia Gold Credit Card.
// After editing, regenerate js/cardCompareGeneratedData.js by running:
//   node cardCompareBuildData.js
// Do NOT hand-edit js/cardCompareGeneratedData.js — it's overwritten every run.

export const cardProfile = {
  "id": "hdfc_regalia_gold",
  "slug": "hdfc-regalia-gold",
  "name": "HDFC Regalia Gold Credit Card",
  "issuer": "HDFC Bank",
  "bucket": "mid-tier",
  "eligibility_notes": "No published income/age threshold sourced yet for this specific card — same gap as Millennia. Given the fee tier and lounge/travel benefits, likely has a meaningfully higher income bar than Millennia in practice, but that's an inference, not a sourced fact — don't publish a number without confirming it.",
  "tags": [
    "travel",
    "lounge-access",
    "lifestyle"
  ],
  "joining_fee": 2500,
  "annual_fee": 2500,
  "waiver_spend_threshold": 400000,
  "waiver_condition": "Renewal fee waived on ₹4 Lakh/year spend — CONFIRMED via master MITC fee table",
  "base_reward_multiplier": 2.5,
  "base_point_value_inr": 0.65,
  "base_is_estimate": 0,
  "redemption_value_by_category_inr": {
    "exclusive_gold_catalogue": 0.65,
    "flights_and_hotels": 0.5,
    "airmiles": 0.5,
    "products_and_vouchers": 0.35,
    "statement_balance": 0.15
  },
  "redemption_browse_url": "https://offers.smartbuy.hdfcbank.com/",
  "fees_mitc_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf",
  "rewards_mitc_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/regalia-gold-credit-card/pdfs/regalia-gold-credit-card-reward-points-t-and-cs.pdf",
  "fees_and_charges_page_url": "https://www.hdfc.bank.in/credit-cards/regalia-gold-credit-card/fees-and-charges",
  "source_url": "https://www.hdfc.bank.in/credit-cards/regalia-gold-credit-card",
  "last_verified": "2026-09-06",
  "notes": "Base rate CONFIRMED: 5 points/₹200 (2.5%) on retail spend. BOTH prior conflicts now RESOLVED: (1) Welcome benefit — rgc2.pdf's \"Club Vistara Silver\" is dead: Vistara airline was decommissioned and no longer exists, so that document is stale on this point. Swiggy One + MMT Black Gold (from the live page) is the correct current benefit, still on the ₹1L/90-day threshold. rgc2.pdf should be treated as unreliable going forward, not just on this one field. (2) Statement-balance point value — confirmed ₹0.15/point via a properly re-rendered fees-and-charges page, matching the general MITC. The earlier ₹0.20 came from a bad/partial render of the same page, not a genuine second source — worth remembering that a failed or partial fetch can look like a legitimate conflicting source if not double-checked. PRODUCT DECISION applied here and going forward: base_point_value_inr uses the BEST confirmed redemption rate (not an average or the weakest one) plus a browse-out link, since actual best value depends on which channel the reader uses and that shifts over time — re-verify this field periodically rather than treating it as fixed. Lounge: 3 domestic visits/quarter, gated on ₹60,000 spend in the PRECEDING quarter. International: 6 complimentary Priority Pass visits/year. Forex markup — RESOLVED, two distinct fees, don't conflate them: (1) Standard foreign-currency-transaction markup: 2%, per the card's own live product page (Additional Features tab, 'Foreign Currency Markup — 2% on all your foreign currency spends'), captured via screenshot 2026-09-06 — I confirmed the URL and page structure directly but the literal tab text is taken from that screenshot, not an independent re-fetch of the tab content itself, since the page's nav menu prevented a clean fetch of the tab body. Re-verify with a direct fetch if this field is ever disputed. (2) Dynamic Currency Conversion (DCC) markup: 1.75%, effective 15 May 2026, CONFIRMED directly by me against the master MITC (mitc-in-english.pdf, v4.8, item (o)) — applies specifically to transactions billed in INR at an international location or at India-based merchants registered overseas (i.e., the DCC trap, not a standard forex swipe). This DCC clause is a blanket MITC term, not Regalia-Gold-specific, but it does apply to this card. These are two different, stackable charges depending on how a transaction is billed — don't collapse them into one number in any downstream calculation. Finance charge: 3.75%/month. FUP cap: 50,000 points/cycle. Redemption fees ₹99 (points)/₹50 (cashback) apply. SmartBuy portal has separate accelerated rates (up to 10X hotels/flights, 5X instant vouchers, up to 10X select brands) layered on top of the base 2.5% — not yet modeled, a further gap; see https://offers.smartbuy.hdfcbank.com/v2/accelerated-earn-rules."
};

export const exclusions = [
  {
    "card_id": "hdfc_regalia_gold",
    "category": "fuel",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via rewards T&C (rgc2.pdf): explicitly listed as reward-ineligible, alongside cash advances, outstanding-balance payments, card fees/charges, and Smart EMI/Dial-an-EMI conversions. This was already sourced and sitting in the card profile's notes text but had never been added as its own structured exclusion row — a data-entry gap, not a research gap.",
    "source_clause": "HDFC Regalia Gold rewards T&C (rgc2.pdf), Generic Terms section",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/regalia-gold-credit-card/fees-and-charges/rgc2.pdf"
  },
  {
    "card_id": "hdfc_regalia_gold",
    "category": "cash_advance",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED via rewards T&C (rgc2.pdf): explicitly listed as reward-ineligible, alongside payment of outstanding balances, card fees/charges, and Smart EMI/Dial-an-EMI conversions.",
    "source_clause": "HDFC Regalia Gold rewards T&C (rgc2.pdf), Generic Terms section",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/regalia-gold-credit-card/fees-and-charges/rgc2.pdf"
  },
  {
    "card_id": "hdfc_regalia_gold",
    "category": "rent",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: rent payments earn zero rewards on all HDFC variants, effective 1 Jan 2023.",
    "source_clause": "HDFC master MITC, Reward Points section, item (l)",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf"
  },
  {
    "card_id": "hdfc_regalia_gold",
    "category": "government_payment",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "CONFIRMED: government-related transactions earn zero rewards on Regalia Gold (not in the short list of business-card exceptions that DO earn on this category).",
    "source_clause": "HDFC master MITC, Reward Points section, item (l)",
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/personal-mitc/mitc-in-english.pdf"
  }
];

export const offers = [
  {
    "card_id": "hdfc_regalia_gold",
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
    "card_id": "hdfc_regalia_gold",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 100000,
    "frequency": "per_booking",
    "cap_count": null,
    "value_description": "Welcome benefit: complimentary Swiggy One + MMT Black Gold membership, unlocked on ₹1 Lakh net retail spend within first 90 days. RESOLVED: rgc2.pdf's \"Club Vistara Silver\" claim is stale — Vistara airline was decommissioned and no longer exists, so that document's welcome-benefit info predates the current program and should not be trusted on this or likely other fields.",
    "estimated_value_inr": null,
    "source_url": "https://www.hdfc.bank.in/credit-cards/regalia-gold-credit-card"
  },
  {
    "card_id": "hdfc_regalia_gold",
    "offer_type": "shopping",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "monthly",
    "cap_count": null,
    "value_description": "5X reward points on Myntra, Nykaa, Reliance Digital, and Marks & Spencer (combined), capped 5,000 RP/month across all four merchants combined, min ₹150/transaction — wallet payments not eligible even if wallet was funded via this card",
    "estimated_value_inr": null,
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/regalia-gold-credit-card/fees-and-charges/rgc2.pdf"
  },
  {
    "card_id": "hdfc_regalia_gold",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 150000,
    "frequency": "quarterly",
    "cap_count": 1,
    "value_description": "Quarterly milestone: choice of ₹1,500 voucher (Marriott Experience / Myntra / MMT Hotels / Marks & Spencer / Reliance Digital), unlocked on ₹1,50,000 net retail spend in a calendar quarter",
    "value_type": "voucher",
    "estimated_value_inr": 1500,
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/regalia-gold-credit-card/fees-and-charges/rgc2.pdf"
  },
  {
    "card_id": "hdfc_regalia_gold",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 500000,
    "frequency": "yearly",
    "cap_count": 1,
    "value_description": "Annual milestone, tier 1: ₹5,000 worth flight vouchers on ₹5 Lakh net retail spend in a card year — CORRECTED: previously only the ₹7.5L tier was captured, missed this lower tier entirely. Both tiers are cumulative (a ₹7.5L spender gets ₹10,000 total across both), not one-or-the-other.",
    "value_type": "voucher",
    "estimated_value_inr": 5000,
    "source_url": "https://www.hdfc.bank.in/credit-cards/regalia-gold-credit-card"
  },
  {
    "card_id": "hdfc_regalia_gold",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 750000,
    "frequency": "yearly",
    "cap_count": 1,
    "value_description": "Annual milestone, tier 2: another ₹5,000 worth flight vouchers on ₹7.5 Lakh net retail spend in a card year — stacks with the ₹5L tier above, both unlocked in the same year would total ₹10,000",
    "value_type": "voucher",
    "estimated_value_inr": 5000,
    "source_url": "https://www.hdfc.bank.in/credit-cards/regalia-gold-credit-card"
  },
  {
    "card_id": "hdfc_regalia_gold",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "quarterly",
    "cap_count": 2,
    "value_description": "Boarding Edge Program: complimentary spa, buffet, hotel room upgrade, or airport transfer — any 2 per calendar quarter, unlocked by uploading a boarding pass on SmartBuy. Support via DreamFolks (1800-1234-109 / helpdesk@dreamfolks.com).",
    "estimated_value_inr": null,
    "source_url": "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/credit-cards/regalia-gold-credit-card/pdfs/regalia-gold-travel-edge-tnc.pdf"
  },
  {
    "card_id": "hdfc_regalia_gold",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Insurance: accidental air death cover ₹1 Crore, emergency overseas hospitalization up to ₹15 Lakhs, credit liability cover up to ₹9 Lakhs",
    "estimated_value_inr": null,
    "source_url": "https://www.hdfc.bank.in/credit-cards/regalia-gold-credit-card"
  },
  {
    "card_id": "hdfc_regalia_gold",
    "offer_type": "lounge",
    "condition_type": "with_spend",
    "spend_threshold": null,
    "frequency": "quarterly",
    "cap_count": null,
    "value_description": "RESOLVED — 3 domestic lounge visits/calendar quarter, gated on ₹60,000 spend in the PRECEDING quarter (previously this MITC-sourced entry only said \"meeting quarterly spends criteria\" with no number). International: 6 complimentary Priority Pass visits/year (also newly confirmed — was previously just \"on request, minimum 4 transactions\"). Overage beyond complimentary visits charged at $27+taxes/visit. Support: DreamFolks 24x7 (1800-1234-109 / helpdesk@dreamfolks.com).",
    "estimated_value_inr": null,
    "source_url": "https://www.hdfc.bank.in/credit-cards/regalia-gold-credit-card"
  }
];