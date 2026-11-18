// cardRules.js
// Declarative card reward policies, caps, MCC exclusions, and devaluation overrides for VouchWise
// Direct reference URLs are embedded in each rule for instant verification during audits.

export const cardRules = {
  version: "2026.11",
  lastUpdated: "2026-11-17",
  description: "Declarative card reward policies, caps, MCC exclusions, and devaluation overrides for VouchWise",

  portalOverrides: {
    axis_edgerewards: {
      acceleratedMultiplier: 0,
      isDiscountOnly: true,
      notice: "Axis Bank removed bonus points on voucher purchases. Net savings reflect upfront discount only.",
      sourceUrl: "https://www.axisbank.com/retail/cards/credit-card/edge-rewards"
    },
    axis_grabdeals: {
      acceleratedMultiplier: 0,
      isDiscountOnly: true,
      notice: "GrabDeals accelerated rewards no longer apply to gift vouchers. Net savings reflect upfront discount only.",
      sourceUrl: "https://grabdeals.axisbank.com/"
    }
  },

  amazonPortalOverrides: {
    brand_voucher: {
      sbi_cashback: {
        rewardRate: 5.0,
        notice: "MCC Dependent: SBI Card officially excludes gift card MCCs (0%). However, Amazon transactions often code under general retail (earning 5%). Cashback is not guaranteed and depends on Amazon's payment gateway MCC.",
        reason: "Variable MCC at Amazon checkout; earns 5% on retail MCC, 0% if coded under financial/prepaid MCC.",
        sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/rewards/cashback-sbi-card.page"
      },
      icici_amazon: {
        rewardRate: 2.0,
        reason: "Amazon Pay ICICI card earns 2% on gift cards (physical retail shopping is 5%).",
        sourceUrl: "https://www.amazon.in/cbcc/market"
      }
    },
    amazon_pay_gift_card: {
      sbi_cashback: {
        rewardRate: 0,
        reason: "Wallet load / gift voucher exclusion.",
        sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/rewards/cashback-sbi-card.page"
      },
      hdfc_infinia: {
        rewardRate: 0,
        reason: "Codes as MCC 6540 (Prepaid card / wallet load), ineligible for accelerated reward points.",
        sourceUrl: "https://offers.smartbuy.hdfcbank.com/v2/accelerated-earn-rules"
      }
    }
  },

  // Level 1 Card Limits: Issuer & Card Reward Caps with Direct Verification Sources
  cardCaps: {
    // SBI Cashback: Online cashback capped at ₹2,000 per statement cycle (effective spend: ₹40,000 at 5%; 0% thereafter)
    sbi_cashback: {
      default: {
        maxCashback: 2000,
        period: "statement_cycle",
        overflowRule: "zero",
        notice: "SBI Cashback monthly cap: ₹2,000 cashback (reached at ₹40,000 spend). Spend beyond ₹40k earns 0%.",
        sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/rewards/cashback-sbi-card.page"
      }
    },

    // HDFC SmartBuy Instant Brand Vouchers (GyFTR): Single-day transaction limit of 2,000 RP/day (Regalia Gold)
    // and 2,500 RP/day (Infinia/DBM), within the overall 3,000 accelerated Reward Points / calendar month voucher sub-cap.
    // Exceeding spend drops to 1X base rate (3.33% on Infinia/DBM, 1.33% on Regalia Gold).
    hdfc_infinia: {
      hdfc_smartbuy: {
        maxAcceleratedPoints: 2500,
        period: "day_and_month",
        overflowRule: "base_rate",
        notice: "SmartBuy daily limit: 2,500 accelerated RP/day (reached at ₹18,750 spend). Excess spend earns 1X base rate (3.33%). Pro-tip: Split over 2+ days to unlock up to 3,000 RP/month.",
        sourceUrl: "https://offers.smartbuy.hdfcbank.com/v2/accelerated-earn-rules"
      }
    },
    hdfc_dbm: {
      hdfc_smartbuy: {
        maxAcceleratedPoints: 2500,
        period: "day_and_month",
        overflowRule: "base_rate",
        notice: "SmartBuy daily limit: 2,500 accelerated RP/day (reached at ₹18,750 spend). Excess spend earns 1X base rate (3.33%). Pro-tip: Split over 2+ days to unlock up to 3,000 RP/month.",
        sourceUrl: "https://offers.smartbuy.hdfcbank.com/v2/accelerated-earn-rules"
      }
    },
    hdfc_diners_black: {
      hdfc_smartbuy: {
        maxAcceleratedPoints: 2500,
        period: "day_and_month",
        overflowRule: "base_rate",
        notice: "SmartBuy daily limit: 2,500 accelerated RP/day (reached at ₹18,750 spend). Excess spend earns 1X base rate (3.33%). Pro-tip: Split over 2+ days to unlock up to 3,000 RP/month.",
        sourceUrl: "https://offers.smartbuy.hdfcbank.com/v2/accelerated-earn-rules"
      }
    },
    hdfc_regalia_gold: {
      hdfc_smartbuy: {
        maxAcceleratedPoints: 2000,
        period: "day_and_month",
        overflowRule: "base_rate",
        notice: "SmartBuy daily limit: 2,000 accelerated RP/day (reached at ₹18,750 spend). Excess spend earns 1X base rate (1.33%). Pro-tip: Split over 2+ days to unlock up to 3,000 RP/month.",
        sourceUrl: "https://offers.smartbuy.hdfcbank.com/v2/accelerated-earn-rules"
      }
    },
    hdfc_millennia: {
      hdfc_smartbuy: {
        maxCashback: 1000,
        period: "calendar_month",
        overflowRule: "zero",
        notice: "Millennia SmartBuy 5% CashPoints cap: ₹1,000 per calendar month (reached at ₹20,000 spend).",
        sourceUrl: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/millennia-credit-card"
      },
      amazon: {
        maxCashback: 1000,
        period: "calendar_month",
        overflowRule: "zero",
        notice: "Millennia Amazon 5% CashPoints cap: ₹1,000 per calendar month.",
        sourceUrl: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/millennia-credit-card"
      }
    },
    hdfc_tata_neu_infinity: {
      hdfc_smartbuy: {
        maxCashback: 1000,
        period: "calendar_month",
        overflowRule: "zero",
        notice: "Tata Neu Infinity SmartBuy cap: 1,000 NeuCoins per calendar month.",
        sourceUrl: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/tata-neu-infinity-hdfc-bank-credit-card"
      }
    },
    hdfc_swiggy: {
      default: {
        maxCashback: 1500,
        period: "statement_month",
        overflowRule: "zero",
        notice: "Swiggy HDFC cashback cap: ₹1,500 per statement month.",
        sourceUrl: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/swiggy-hdfc-bank-credit-card"
      }
    },

    // ICICI iShop cards (Accelerated Reward Points monthly caps; excess earns 1X base rate)
    icici_emeralde: {
      icici_ishop: {
        maxAcceleratedPoints: 12000,
        period: "calendar_month",
        overflowRule: "base_rate",
        notice: "ICICI iShop Emeralde cap: 12,000 accelerated RP/month. Excess earns 1X base rate.",
        sourceUrl: "https://ishoprewards.com/shopping-vouchers"
      }
    },
    icici_epm: {
      icici_ishop: {
        maxAcceleratedPoints: 18000,
        period: "calendar_month",
        overflowRule: "base_rate",
        notice: "ICICI iShop Emeralde Private cap: 18,000 accelerated RP/month. Excess earns 1X base rate.",
        sourceUrl: "https://ishoprewards.com/shopping-vouchers"
      }
    },
    icici_sapphiro: {
      icici_ishop: {
        maxAcceleratedPoints: 9000,
        period: "calendar_month",
        overflowRule: "base_rate",
        notice: "ICICI iShop Sapphiro cap: 9,000 accelerated RP/month. Excess earns 1X base rate.",
        sourceUrl: "https://ishoprewards.com/shopping-vouchers"
      }
    },
    icici_rubyx: {
      icici_ishop: {
        maxAcceleratedPoints: 6000,
        period: "calendar_month",
        overflowRule: "base_rate",
        notice: "ICICI iShop Rubyx cap: 6,000 accelerated RP/month. Excess earns 1X base rate.",
        sourceUrl: "https://ishoprewards.com/shopping-vouchers"
      }
    },

    // Amex Shopwise cards (Bonus MR monthly caps; excess earns 1X base rate)
    amex_platinum: {
      amex_shopwise: {
        maxBonusPoints: 25000,
        period: "calendar_month",
        overflowRule: "base_rate",
        notice: "Amex Platinum Shopwise cap: 25,000 bonus MR points/month. Excess earns 1X base rate.",
        sourceUrl: "https://www.americanexpress.com/en-in/rewards/multiplier/"
      }
    },
    amex_gold: {
      amex_shopwise: {
        maxBonusPoints: 10000,
        period: "calendar_month",
        overflowRule: "base_rate",
        notice: "Amex Gold Shopwise cap: 10,000 bonus MR points/month. Excess earns 1X base rate.",
        sourceUrl: "https://www.americanexpress.com/en-in/rewards/multiplier/"
      }
    },
    amex_platinum_reserve: {
      amex_shopwise: {
        maxBonusPoints: 10000,
        period: "calendar_month",
        overflowRule: "base_rate",
        notice: "Amex Reserve Shopwise cap: 10,000 bonus MR points/month. Excess earns 1X base rate.",
        sourceUrl: "https://www.americanexpress.com/en-in/rewards/multiplier/"
      }
    }
  },

  // Brand-level monthly purchase velocity limits (GyFTR / SmartBuy quotas per user)
  brandPurchaseCaps: {
    amazon_shopping: {
      hdfc_smartbuy: 10000,
      gyftr: 10000
    },
    amazon_pay: {
      hdfc_smartbuy: 10000,
      gyftr: 10000
    },
    swiggy: {
      hdfc_smartbuy: 10000
    },
    zomato: {
      hdfc_smartbuy: 10000
    },
    flipkart: {
      hdfc_smartbuy: 25000
    },
    _sourceUrl: "https://offers.smartbuy.hdfcbank.com/v2/instant_vouchers"
  },

  standardMCCExclusions: {
    6540: "Prepaid cards, stored value, wallet loading",
    5947: "Gift, novelty, and souvenir shops (Excluded by SBI Cashback & most reward programs)",
    4814: "Telecommunication and utility services",
    4900: "Electric, gas, and water utilities",
    5541: "Fuel and service stations",
    6211: "Securities and investment brokers"
  }
};
