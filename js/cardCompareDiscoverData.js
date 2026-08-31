// js/cardCompareDiscoverData.js
// Config for "/best-for/{category}" discovery pages. No card data lives
// here — this only maps a URL-facing slug to display copy, and records
// which categories actually have sourced exclusion data across the
// 9-card dataset in cardCompareData.js. Cross-check against that file's
// `exclusions` array before flipping a category to 'confirmed'.
//
// coverageStatus:
//   'confirmed'   — at least one card has an explicit exclusions row
//                   for this category (excluded, reduced, or capped),
//                   so a ranking reflects real sourced data.
//   'unconfirmed' — no card has a sourced row for this category. Do
//                   NOT build a ranked page for these — see `groceries`
//                   below for why.

export const DISCOVERY_CATEGORIES = {
  education: {
    label: 'Education payments',
    slug: 'education',
    metaDescription: 'Compare real reward rates for education fee payments across Indian credit cards. Exclusions and unverified rates flagged — no guesswork.',
    coverageStatus: 'confirmed'
  },
  insurance_premium: {
    label: 'Insurance premiums',
    slug: 'insurance',
    metaDescription: 'Compare real reward rates for insurance premium payments across Indian credit cards.',
    coverageStatus: 'confirmed'
  },
  rent: {
    label: 'Rent payments',
    slug: 'rent',
    metaDescription: 'Compare reward rates and convenience fees for paying rent by credit card in India — most cards earn nothing here, some also charge extra.',
    coverageStatus: 'confirmed'
  },
  fuel: {
    label: 'Fuel spend',
    slug: 'fuel',
    metaDescription: 'Compare real reward rates on fuel spend across Indian credit cards, including surcharge waivers.',
    coverageStatus: 'confirmed'
  },
  utility_bill_via_app: {
    label: 'Utility bills (via app)',
    slug: 'utility-bills',
    metaDescription: 'Compare reward rates for utility bill payments made via third-party apps across Indian credit cards.',
    coverageStatus: 'confirmed'
  },
  international_spend: {
    label: 'International / forex spend',
    slug: 'international',
    metaDescription: 'Compare reward rates and forex markup for international spend across Indian credit cards.',
    coverageStatus: 'confirmed'
  },

  // UNCONFIRMED — do not route to this page yet.
  // No card in the current dataset has a sourced exclusion OR
  // accelerated-rate row specifically for "groceries." A ranking here
  // would silently default every card to its base rate, which LOOKS
  // like a verified answer but isn't one — exactly the failure mode
  // "correctness over completeness" exists to prevent. Source
  // grocery-specific MCC treatment per card (does any card exclude
  // supermarkets/hypermarkets, or accelerate them?) before enabling.
  groceries: {
    label: 'Groceries',
    slug: 'groceries',
    metaDescription: null,
    coverageStatus: 'unconfirmed'
  }
};

export function getCategoryConfig(slug) {
  const found = Object.entries(DISCOVERY_CATEGORIES).find(([, c]) => c.slug === slug);
  return found ? { key: found[0], ...found[1] } : null;
}
