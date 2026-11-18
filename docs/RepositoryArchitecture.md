# VouchWise - Repository Architecture

This document describes the implemented repository as of November 2026. The JavaScript import graph is documented separately in [JavaScriptDependencyMap.md](../).

> **Core Project Scope:** This document defines the **Voucher Discount & Card Reward Optimizer** (Voucher price, portal discount, convenience fee, denomination flooring, card reward calculation, card and portal eligibility, wallet selections, ranking, custom cards, custom brands, standalone discount calculator, scraped catalog generation, live catalog refresh, and HITL/pre-flight pipeline).
> Unfinished card-comparison and category-discovery models are maintained in `docs/WIP/` (Work In Progress) and are excluded from active voucher optimizer scope.

## 1. Project Understanding

### Stack

- Static HTML pages with browser-native ES modules.
- Vanilla JavaScript; no frontend framework and no backend application server.
- Tailwind CSS 3.4.4, loaded from the CDN by the main pages. [src/input.css](../) contains the local Tailwind source directives.
- Cloudflare Pages static assets behind [_worker.js](../), configured by [wrangler.jsonc](../).
- Browser `localStorage` for wallet selections, custom cards, custom brands, and flagged discounts.
- External affiliate destinations represented in [routes.json](../).

### Architecture style

VouchWise is a static web application with native browser ES modules. It is not a microservice or event-driven backend. Each HTML page owns a browser entry point; calculation and rendering execute in the browser. Browser persistence (`localStorage`) is the only user-specific data layer.

The active runtime is the **Voucher Discount & Card Reward Optimizer**:
- **Main Calculator**: [index.html](../) plus `main.js`, `events.js`, `results.js`, `customCalc.js`, `calculator.js`, `cardRules.js`, `wallet.js`, `search.js`, `modals.js`, `flags.js`, and `data.js`.
- **Brand Guide & Direct Route Routing**: [brands.html](../) with native module integration.

*(Note: Unfinished card comparison and discovery models are preserved under `docs/WIP/` for future reference).*

## 2. High-Level Architecture

```mermaid
flowchart TB
    Visitor[Visitor browser]
    Worker[Cloudflare Worker _worker.js]
    Assets[Cloudflare Pages assets]
    Pages[Static HTML pages: index.html, brands.html]
    Core[Voucher calculator & reward optimizer graph]
    Storage[(Browser localStorage: wallet, custom cards, flags)]
    Affiliate[External affiliate & portal destinations]

    Visitor --> Worker
    Worker -->|redirect /out/*| Affiliate
    Worker -->|asset request| Assets
    Assets --> Pages
    Pages --> Core
    Core --> Storage
```

The worker is a routing boundary, not a business-service boundary. It redirects known affiliate paths from [routes.json](../) and delegates other requests to Pages assets.

## 3. Folder-Structure Map

```mermaid
flowchart TD
    Root[vouchwise/]
    Root --> Pages[HTML pages\nindex.html, brands.html]
    Root --> JS[js/]
    Root --> Assets[assets/\nicons and brand assets]
    Root --> Functions[functions/\nedge/serverless helpers]
    Root --> CSS[src/\nTailwind input]
    Root --> Config[Deployment/config\n_worker.js, routes.json, wrangler.jsonc]
    Root --> Docs[Architecture and product notes\n*.md]

    JS --> CoreJS[Core calculator modules\ndata, state, dom, utils, calculator]
    JS --> FeatureJS[Feature modules\nsearch, wallet, modals, results, customCalc, flags, events]
```

At the repository root, the HTML files are page templates, `js/` contains browser and Node modules, `assets/` contains static media, `src/` contains Tailwind input directives, and the worker/configuration files define deployment and redirect behavior.

## 4. Page and Entry-Point Map

```mermaid
graph LR
    Index[index.html\nmain calculator] --> Main[js/main.js]
    Brands[brands.html?brand=id\nbrand guide] --> BrandInline[inline module]
    Worker[_worker.js] --> Routes[routes.json]
    Worker --> Assets[Pages assets]
    Main --> Core[core calculator graph]
```

## 5. Core Voucher Calculator

```mermaid
graph TD
    Main[main.js\nbootstrap + hash preselect]
    Events[events.js\nlistener wiring]
    Data[data.js\nstatic data + localStorage merge]
    State[state.js\nshared mutable state]
    Dom[dom.js\nDOM cache]
    Utils[utils.js\nshared helpers]
    Search[search.js\nautocomplete + selection]
    Wallet[wallet.js\nwallet persistence + rendering]
    Modals[modals.js\ncustom card/brand saves]
    Results[results.js\nportal comparison + rendering]
    Custom[customCalc.js\ndiscount calculator]
    Calc[calculator.js\npure financial math]
    Flags[flags.js\nflagged discount panel]

    Main --> Dom & Data & Wallet & Modals & Events & Search & Results & Flags
    Events --> Data & Dom & State & Utils & Search & Results & Custom & Wallet & Modals & Flags
    Search --> Data & Dom & State
    Wallet --> Data & Dom & Utils
    Modals --> Data & Dom & Wallet
    Flags --> Data & Utils
    Results --> Data & Calc & Dom & State & Utils & Wallet & Search & Custom
    Custom --> Data & Calc & Dom & State & Utils & Wallet
    Utils --> Dom

    classDef pure fill:#e8f5e9,stroke:#2e7d32;
    classDef entry fill:#fff3cd,stroke:#b8860b;
    class Calc,State,Dom pure;
    class Main,Events entry;
```

`events.js` is the composition root for user interaction. `results.js` owns portal eligibility, calculation orchestration, ranking, and rendering. `customCalc.js` owns the standalone discount flow. `calculator.js` is pure and imports no application modules.

## 6. Data Pipeline

```mermaid
flowchart LR
    Scrapers[vouchwise-admin extractor CSVs] --> Adapter[generate_payment_optimizer_data.py]
    Adapter --> Catalog[scrapedDiscounts.json]
    Master[masterbrands.xlsx] --> Catalog
    StaticCards[data.js card profiles] --> Runtime[data.js runtime arrays]
    Rules[cardRules.js] --> Runtime
    LocalStorage[(customCards / customBrands)] --> Runtime
    Catalog --> Runtime
    Runtime --> MainUI[index.html]
    MainUI --> Calc[calculator.js]
    Calc --> MainUI
```

The main calculator merges built-in card and brand data with custom records in browser storage. Live portal discounts and fees are loaded from `scrapedDiscounts.json`. Card-comparison and discovery models are not part of this pipeline and remain WIP under `docs/WIP/`.

## 8. Data Flow and Control Flow

The main calculation path is:

```text
Page load
  -> main.bootstrap()
  -> renderWalletUI(), applyBankDefaults(), initEvents(), renderFlaggedDiscounts()
  -> user selects brand through search.selectBrand()
  -> user saves card IDs through wallet.saveWalletIds()
  -> events click handler calls results.handleCalculate()
  -> results.getEligibleResults()
  -> calculator.calculateTrueNetMetricsWithFlooring() per eligible card/portal
  -> results.groupAndSortResults()
  -> results.renderResults()
  -> optional /out/* request is redirected by _worker.js using routes.json
```

```mermaid
flowchart TD
    Load[Load index.html] --> Bootstrap[main.bootstrap]
    Bootstrap --> Ready[Search and wallet ready]
    Ready --> Brand[selectBrand]
    Brand --> Wallet[save wallet card IDs]
    Wallet --> Calculate[handleCalculate]
    Calculate --> Validate[validateVoucherAmount]
    Validate --> Filter[Filter unavailable portals and ineligible cards]
    Filter --> Math[calculateTrueNetMetricsWithFlooring]
    Math --> Rank[groupAndSortResults]
    Rank --> Render[renderResults]
    Render --> Affiliate[Optional affiliate redirect]
```

## 9. Key Workflow Sequences

### Find the best voucher deal

```mermaid
sequenceDiagram
    actor User
    participant Search as search.js
    participant Wallet as wallet.js
    participant Results as results.js
    participant Calc as calculator.js
    participant Store as localStorage

    User->>Search: type and select brand
    Search->>Search: handleBrandInput(), selectBrand()
    User->>Wallet: select cards and save wallet
    Wallet->>Store: save walletCardIds
    User->>Results: click Find Best Deal
    Results->>Results: validate amount and getEligibleResults()
    loop each eligible card and portal
        Results->>Calc: calculateTrueNetMetricsWithFlooring()
        Calc-->>Results: net paid, reward, net cost, rate
    end
    Results->>Results: groupAndSortResults()
    Results-->>User: ranked deal cards
```

### Run the custom discount calculator

```mermaid
sequenceDiagram
    actor User
    participant Events as events.js
    participant Custom as customCalc.js
    participant Wallet as wallet.js
    participant Calc as calculator.js
    participant DOM as index.html DOM

    User->>Events: click custom calculator
    Events->>Custom: handleCustomCalculate()
    Custom->>Wallet: getActiveWalletIds()
    Custom->>Custom: filter eligible cards
    loop each card
        Custom->>Calc: calculateTrueNetMetricsWithFlooring()
        Calc-->>Custom: metrics
    end
    Custom->>Custom: sort by effective net rate
    Custom-->>DOM: renderCustomResults()
```

## 10. UML Views

### Module/class view

The code is function-oriented rather than class-oriented, so this UML view models modules and public responsibilities.

```mermaid
classDiagram
    class Main { +bootstrap() +applyBrandPreselectFromHash() }
    class Events { +initEvents() }
    class Data { +brands +cards +portals +saveCustomCard() +saveCustomBrand() }
    class State { +currentBrandId +lastCustomCalc }
    class Calculator { +getCardPortalMultiplier() +calculateTrueNetMetrics() +calculateTrueNetMetricsWithFlooring() }
    class Results { +getEligibleResults() +groupAndSortResults() +handleCalculate() +renderResults() }
    class CustomCalculator { +runCustomCalculation() +handleCustomCalculate() +renderCustomResults() }
    class Wallet { +loadWalletIds() +saveWalletIds() +renderWalletUI() +getActiveWalletIds() }

    Main --> Events
    Main --> Wallet
    Events --> Results
    Events --> CustomCalculator
    Results --> Calculator
    CustomCalculator --> Calculator
    Results --> Data
    Wallet --> Data
    Results --> State
```

### Use cases

```mermaid
flowchart LR
    User((Visitor))
    Admin((Maintainer))
    User --> Find[Find best voucher deal]
    User --> Custom[Evaluate custom discount]
    User --> Wallet[Manage card wallet]
    User --> Flag[Flag outdated discount]
    User --> Browse[Browse brand guide]
    Admin --> Recompile[Recompile scraped catalog]
    Admin --> Verify[Run pre-flight verification]
```

### Main activity

```mermaid
flowchart TD
    Start([Page load]) --> Bootstrap[Bootstrap DOM, wallet, events, flags]
    Bootstrap --> Brand{Brand selected?}
    Brand -->|No| Error[Show selection error]
    Brand -->|Yes| Amount{Amount positive?}
    Amount -->|No| AmountError[Show validation error]
    Amount -->|Yes| Wallet{Cards selected?}
    Wallet -->|No| WalletError[Show wallet warning]
    Wallet -->|Yes| Filter[Filter unavailable portals and ineligible cards]
    Filter --> Calculate[Calculate each card/portal]
    Calculate --> Sort[Group and sort]
    Sort --> Render[Render result]
    Render --> Buy[Optional affiliate redirect]
```

### Main state diagram

```mermaid
stateDiagram-v2
    [*] --> Ready
    Ready --> BrandSelected: selectBrand()
    BrandSelected --> WalletEditing: edit wallet
    WalletEditing --> Ready: save or cancel
    BrandSelected --> ResultsVisible: calculate valid amount
    ResultsVisible --> ResultsVisible: refresh amount or wallet
    ResultsVisible --> Ready: reset
    BrandSelected --> CustomResultsVisible: custom calculation
    CustomResultsVisible --> ResultsVisible: main calculation
    CustomResultsVisible --> Ready: reset
```

## 11. Feature-to-File Mapping

| Feature | Files and symbols |
|---|---|
| Bootstrap | [js/main.js](../), `bootstrap`, `applyBrandPreselectFromHash` |
| DOM cache | [js/dom.js](../), `dom` |
| Static/custom data | [js/data.js](../), `brands`, `cards`, `portals`, `saveCustomCard`, `saveCustomBrand` |
| Brand search | [js/search.js](../), `handleBrandInput`, `selectBrand`, `renderCategoryBrands` |
| Wallet | [js/wallet.js](../), `loadWalletIds`, `saveWalletIds`, `renderWalletUI`, `renderWalletChipBar` |
| Custom card/brand UI | [js/modals.js](../), `applyBankDefaults`, `handleSaveCard`, `handleSaveBrand` |
| Portal comparison | [js/results.js](../), `getEligibleResults`, `groupAndSortResults`, `handleCalculate`, `renderResults` |
| Financial math | [js/calculator.js](../), `getCardPortalMultiplier`, `calculateTrueNetMetricsWithFlooring` |
| Custom discount flow | [js/customCalc.js](../), `runCustomCalculation`, `handleCustomCalculate` |
| Shared helpers | [js/utils.js](../), `validateVoucherAmount`, `getBrandById`, `getPortalById` |
| Flags | [js/flags.js](../), `getAllFlags`, `renderFlaggedDiscounts`, `removeFlag` |
| Event wiring | [js/events.js](../), `initEvents` |
| Affiliate routing | [_worker.js](../), [routes.json](../) |

## 12. Important Invariants

- Portal eligibility is determined by `isCardPortalEligible(card, portal)`; discount-only issuer portals remain eligible even when accelerated rewards are zero.
- Unavailable brand portals must be filtered before calculation.
- UI-facing flows use `calculateTrueNetMetricsWithFlooring`, not the raw calculation function.
- `localStorage` keys such as `walletCardIds`, `customCards`, `customBrands`, and `flag:<brandId>:<portalId>` are compatibility contracts.
- `customCalc.js` must not import `results.js`; shared behavior belongs in `utils.js` or `calculator.js`.
- The inline preview modules in [index.html](../) and [brands.html](../) are separate module roots and do not inherit `events.js` behavior.
