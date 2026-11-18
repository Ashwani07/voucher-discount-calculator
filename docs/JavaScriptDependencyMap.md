# VouchWise - JavaScript Dependency Map

> **Core Project Scope:** This dependency map defines the active **Voucher Discount & Card Reward Optimizer** module graph. Unfinished card comparison and discovery models are maintained in `docs/WIP/` (Work In Progress).

Solid arrows represent static ES-module imports. Build-time relationships are separate from browser runtime relationships.

## Runtime Entry Points

```mermaid
graph TD
    Index[index.html] --> Main[js/main.js]
    Brands[brands.html] --> BrandsInline[inline module]
```

## Complete Import Graph

```mermaid
graph LR
    data[data.js]
    calculator[calculator.js]
    state[state.js]
    dom[dom.js]
    utils[utils.js]
    wallet[wallet.js]
    search[search.js]
    modals[modals.js]
    flags[flags.js]
    results[results.js]
    custom[customCalc.js]
    events[events.js]
    main[main.js]

    utils --> dom
    wallet --> data & dom & utils
    search --> data & dom & state
    modals --> data & dom & wallet
    flags --> data & utils
    results --> data & calculator & dom & state & utils & wallet & search & custom
    custom --> data & calculator & dom & state & utils & wallet
    events --> data & dom & state & utils & search & results & custom & wallet & modals & flags
    main --> dom & data & wallet & modals & events & search & results & flags

    classDef leaf fill:#e8f5e9,stroke:#2e7d32;
    class calculator,state,dom,ccCalc,ccState,ccDom,dcData,dcState,dcDom leaf;
```

## Core Module Table

| File | Imports | Responsibility |
|---|---|---|
| [js/main.js](../) | `dom`, `data`, `wallet`, `modals`, `events`, `search`, `results`, `flags` | Browser bootstrap and hash preselection |
| [js/events.js](../) | `data`, `dom`, `state`, `utils`, `search`, `results`, `customCalc`, `wallet`, `modals`, `flags` | Listener registration and event coordination |
| [js/results.js](../) | `data`, `calculator`, `dom`, `state`, `utils`, `wallet`, `search`, `customCalc` | Eligibility, ranking, result rendering |
| [js/customCalc.js](../) | `data`, `calculator`, `dom`, `state`, `utils`, `wallet` | Standalone discount calculations |
| [js/wallet.js](../) | `data`, `dom`, `utils` | Wallet persistence and UI |
| [js/search.js](../) | `data`, `dom`, `state` | Brand autocomplete and selection |
| [js/modals.js](../) | `data`, `dom`, `wallet` | Custom card/brand persistence UI |
| [js/flags.js](../) | `data`, `utils` | Flag discovery, rendering, removal |
| [js/utils.js](../) | `dom` | Shared lookup, validation, rendering, visibility helpers |
| [js/calculator.js](../) | None | Pure multiplier and net-cost calculations |
| [js/data.js](../) | None | Static datasets and localStorage persistence |
| [js/state.js](../) | None | Shared mutable calculator state |
| [js/dom.js](../) | None | Cached DOM references only |

## WIP Modules

The card-comparison and discovery implementation is not part of the active voucher optimizer. Its archived design notes are retained under [docs/WIP](../). Do not include those modules in the active dependency or deployment graph.

## Inline HTML Module Roots

- [index.html](../) has a standalone inline module for the brand-search portal preview and flag handling. It imports data directly and does not inherit `events.js` behavior.
- [brands.html](../) contains its own inline module for the brand guide.

## Dependency Constraints

- Keep `calculator.js`, `state.js`, and `dom.js` free of application-module imports.
- Do not introduce a reverse `customCalc.js -> results.js` dependency; shared behavior belongs in `utils.js` or `calculator.js`.
- Keep comparison data generation separate from the main calculator dataset.
- Treat inline HTML modules as separate roots when changing shared behavior.
