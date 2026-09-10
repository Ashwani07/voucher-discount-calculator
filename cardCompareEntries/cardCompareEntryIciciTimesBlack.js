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
    "shopping",
    "dining"
  ],
  "joining_fee": 20000,
  "annual_fee": 20000,
  "waiver_spend_threshold": 2500000,
  "waiver_condition": "Annual fee waived from the 2nd year onwards, based on minimum spend of ₹25,00,000 in the PREVIOUS card year — confirmed via direct fetch of ICICI's live page FAQ. Note: this app's calculator currently uses the same single annual-spend figure for both Year 1 and Year 2 (no separate prior-year input), so this eligibility check is an approximation, not a true prior-year lookback.",
  "base_reward_multiplier": 2,
  "base_point_value_inr": 0.4,
  "base_is_estimate": 0,
  "fees_mitc_url": "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/mitc_cc.pdf",
  "rewards_mitc_url": "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/times-black-icici-credit-card-terms-conditions.pdf",
  "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card",
  "last_verified": "2026-09-06",
  "notes": "RESOLVED — base rate gap closed. 2% on domestic spend, 2.5% on international, per ICICI's own FAQ. cardData.js is currently single-rate-per-card, so international's 2.5% isn't modeled yet — same simplification already noted for Scapia's app-travel rate. Add a category-level reward_rules table when a second card needs this (now two do). FEE CORRECTION (2026-09-06): joining_fee/annual_fee were previously stored as 23600 — this was the GST-inclusive figure (20000 x 1.18 = 23600 exactly), never labeled as such. Corrected to 20000, the pre-GST figure printed on ICICI's own live page ('₹20,000 + GST'), per site-wide policy to record pre-GST figures as shown on the issuer's page. GST will be layered in separately once the calculator supports it — until then, real cost is understated by the GST amount, same known gap as every other card. FOREX/DCC (2026-09-06): CONFIRMED via direct fetch of the card's own reward-points-tncs.pdf — forex markup and DCC (dynamic currency conversion) markup are the SAME unified rate, 1.49%, not two separate fees. This differs from HDFC Regalia Gold, where forex (2%) and DCC (1.75%) are genuinely two different charges — don't assume that pattern carries over to every card; each issuer's structure needs checking individually. POINT VALUE (2026-09-06): base_point_value_inr of 0.4 is the CASH/statement-credit redemption rate, confirmed via direct fetch of timesblack.com/allrewards ('Cashback at a value of 1 Reward Point = INR 0.40/-'). A higher ceiling of 'up to INR 1/-' exists for non-cash redemption categories (merchandise/vouchers), not modeled here — same conservative-value convention already used for HSBC Premier's redemption range. RENT SURCHARGE (2026-09-06): per the card's own reward-points-tncs.pdf, a 1% fee applies to rent payments via third-party merchants, but only from the 2nd such transaction in a calendar month — the first is fee-free. Recorded on the rent exclusion row below as a flat 1%, which slightly overstates the true cost on a month with only one rent payment — a known, flagged approximation, not a fabricated precision."
};

export const exclusions = [
  {
    "card_id": "icici_times_black",
    "category": "fuel",
    "reward_factor": 0,
    "extra_fee_percent": null,
    "extra_fee_cap_inr": null,
    "notes": "Zero reward points on fuel transactions. If mistakenly credited, ICICI explicitly reverses them. Separately, a 1% fuel surcharge WAIVER applies (see offers array) — that's a different mechanism (a fee reduction) from this reward exclusion, don't conflate the two.",
    "source_clause": "ICICI's own FAQ, confirmed",
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "category": "rent",
    "reward_factor": 0,
    "extra_fee_percent": 1,
    "extra_fee_cap_inr": null,
    "notes": "Zero reward points on rent payments (same reversal policy as fuel). Additionally, per the card's own reward-points-tncs.pdf (confirmed via direct fetch, 2026-09-06): a 1% fee applies to rent paid via third-party merchants, starting from the 2ND such transaction each calendar month — the first is fee-free. This extra_fee_percent field has no 'skip first occurrence' concept, so applying 1% flatly will slightly overstate cost for a month with exactly one rent payment. Flagged as a known approximation, not a guess.",
    "source_clause": "Times Black Rewards Points Program T&C (reward-points-tncs.pdf), confirmed directly",
    "source_url": "https://static.timesblack.com/static/reward-points-tncs.pdf"
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
    "notes": "Same shared 5,000-point cap — see utility_bill_via_app row. IMPORTANT CHANNEL CAVEAT, confirmed via direct fetch of reward-points-tncs.pdf (2026-09-06): education payments made through third-party apps (CRED, Cheq, MobiKwik, and similar) earn ZERO points, regardless of the cap — only payments made directly via the college/school's own website or POS machine earn normally (subject to the shared cap). This app's calculator has no payment-channel concept, so it currently assumes the direct-channel case for all education spend, which is optimistic if the reader actually pays via a third-party app. Flagged, not silently modeled.",
    "source_clause": "Times Black Rewards Points Program T&C (reward-points-tncs.pdf), confirmed directly",
    "source_url": "https://static.timesblack.com/static/reward-points-tncs.pdf"
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
    "value_description": "Unlimited DOMESTIC lounge access, 1,300+ lounges across 600+ cities, primary + add-on cardholders",
    "estimated_value_inr": null,
    "source_url": "https://www.timesblack.com/"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "lounge",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Unlimited INTERNATIONAL lounge access via complimentary Priority Pass Membership (primary + Plus/add-on cardholders) — 1,900+ lounges in 145+ countries. NEW (2026-09-06), confirmed directly via ICICI's own FAQ — previously not distinguished from the domestic lounge entry above.",
    "estimated_value_inr": null,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "per_booking",
    "cap_count": 1,
    "value_description": "Welcome/joining benefit (ONE-TIME ONLY): choice of ₹12,000 Lohono voucher OR ₹10,000 EaseMyTrip voucher. CORRECTED (2026-09-06): previously this single entry also bundled CribLife, Zomato Gold, the Atlys/OneVasco visa perk, and Toni&Guy/Interflora vouchers as if all one-time — those are recurring annual benefits per ICICI's own page (listed under its ongoing 'Save Money' benefits, not as a joining-only perk) and have been moved to their own entries below. ICICI's FAQ confirms a genuine one-time joining benefit exists: delivered by email within 45 business days of paying the joining fee.",
    "value_type": "voucher",
    "estimated_value_inr": 12000,
    "source_url": "https://www.timesblack.com/"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Elite Club: membership offers and access to events at The Quorum Club, plus dining discounts at select restaurants. NEW (2026-09-06), confirmed directly via ICICI's live page.",
    "estimated_value_inr": null,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": 6,
    "value_description": "Curated Luxury Services: lifestyle management services via CribLife, 6 exclusive offerings per year. MOVED here (2026-09-06) from the welcome-benefit entry — this is a recurring annual entitlement, not a one-time joining perk, per ICICI's own page structure.",
    "estimated_value_inr": null,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "dining",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Gourmet Indulgence: annual Zomato Gold membership for dining privileges. MOVED here (2026-09-06) from the welcome-benefit entry — ICICI's page explicitly labels this an 'annual membership,' so it recurs each card year, not a one-time signup gift.",
    "estimated_value_inr": null,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Travel visa benefits with Atlys and OneVasco, worth ₹10,000. EXPANDED (2026-09-06): previously only 'Atlys visa fee waiver' was noted, bundled in the welcome entry, with no rupee figure and no mention of OneVasco. Now sourced with both providers and the stated value, and reclassified as a recurring annual perk (no spend gate stated on ICICI's page), not one-time.",
    "estimated_value_inr": 10000,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Lifestyle Gift Cards: Toni & Guy (₹3,000) and Interflora (₹1,000), ₹4,000 combined. EXPANDED (2026-09-06): previously only ₹3,000 Toni&Guy was noted (Interflora was missing entirely), bundled into the welcome entry. Reclassified as a recurring annual perk, no spend gate stated.",
    "estimated_value_inr": 4000,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
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
    "value_description": "INTERNATIONAL SPEND, full picture: 2.5% reward points (vs. 2% domestic base rate), PLUS a 1.49% forex/DCC markup fee applies on the spend itself. UPDATED (2026-09-06): forex markup and DCC (dynamic currency conversion) markup are CONFIRMED to be the same unified 1.49% rate on this card, per direct fetch of the card's own reward-points-tncs.pdf — not two separate fees the way HDFC Regalia Gold has (2% forex vs 1.75% DCC there). Net effect isn't modeled as a single number yet — the higher reward rate and the markup fee both need to be applied to international spend, and this app's calculator doesn't yet compute that combined net effect automatically.",
    "estimated_value_inr": null,
    "source_url": "https://static.timesblack.com/static/reward-points-tncs.pdf"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 2000000,
    "frequency": "yearly",
    "cap_count": 1,
    "value_description": "Milestone: one night luxury stay at Ayatana or Lohono, on ₹20,00,000 net spend in a card year.",
    "value_type": "voucher",
    "estimated_value_inr": 20000,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 1000000,
    "frequency": "yearly",
    "cap_count": 1,
    "value_description": "Milestone: Tata CLiQ Luxury Gift Card, on ₹10,00,000 net spend in a card year.",
    "value_type": "voucher",
    "estimated_value_inr": 10000,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 500000,
    "frequency": "yearly",
    "cap_count": 1,
    "value_description": "Milestone: choice of WeWork day passes (India) or an airport transfer (Thumby Aviation, Avis, or Indian Travel House), on ₹5,00,000 net spend in a card year.",
    "value_type": "voucher",
    "estimated_value_inr": 10000,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "with_spend",
    "spend_threshold": 200000,
    "frequency": "yearly",
    "cap_count": 1,
    "value_description": "Milestone: Klook international experiences/activities credit, on ₹2,00,000 net spend in a card year.",
    "value_type": "voucher",
    "estimated_value_inr": 10000,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "Travel insurance: trip cancellation cover, lost baggage cover, travel document protection. NOT re-verified on 2026-09-06 — this entry predates today's review and wasn't confirmed against ICICI's live page today (which instead surfaced a differently-described 'Air Accident Insurance cover,' added as its own entry below rather than assumed to be the same benefit). Left standing rather than deleted, since I have no evidence it's wrong — just unconfirmed today.",
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
    "value_description": "Premium Protection: Air Accident Insurance cover. NEW (2026-09-06), confirmed directly via ICICI's live page. Coverage amount not disclosed on that page — see the linked T&C PDF for details; not yet independently verified by fetching that PDF.",
    "estimated_value_inr": null,
    "source_url": "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/Comprehensive-Insurance-Cover-and-t-and-c.pdf"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "other",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "No cancellation charges on domestic flight and hotel bookings, refunded up to ₹12,000. NEW (2026-09-06), confirmed directly via ICICI's live page. Treated as a contingent/conditional benefit (like the voucher-type offers elsewhere in this file) rather than a guaranteed value, since it only pays out if a cancellation actually happens — estimated_value_inr left null on that basis rather than assumed as guaranteed ₹12,000/year.",
    "estimated_value_inr": null,
    "source_url": "https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/revamp-page-images/docs/pdf/cancellation-cfar-claim-process.pdf"
  },
  {
    "card_id": "icici_times_black",
    "offer_type": "fuel",
    "condition_type": "flat",
    "spend_threshold": null,
    "frequency": "yearly",
    "cap_count": null,
    "value_description": "1% fuel surcharge waiver at all fuel stations. NEW (2026-09-06), confirmed directly via ICICI's live page — distinct from the fuel reward-points EXCLUSION already recorded above (zero points on fuel spend). Both are true simultaneously: no reward points on fuel, but the usual 1% fuel surcharge is waived. Don't conflate the two when reading this card's fuel treatment.",
    "estimated_value_inr": null,
    "source_url": "https://www.icici.bank.in/personal-banking/cards/credit-card/times-black-icici-credit-card"
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
    "value_description": "24x7 domestic and international concierge service for bookings and assistance. Toll-free: 1800-267-0731 (number added 2026-09-06, confirmed via ICICI's live page).",
    "estimated_value_inr": null,
    "source_url": "https://www.timesblack.com/"
  }
];