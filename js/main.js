// App bootstrapper for VouchWise. This is the only runtime entrypoint the page
// loads; it initializes the cached DOM, renders the wallet, and wires events.
import { dom } from './dom.js';
import { lastVerified } from './data.js';
import { renderWalletUI } from './wallet.js';
import { applyBankDefaults } from './modals.js';
import { initEvents } from './events.js';

if (dom.verifiedDate && lastVerified) {
  dom.verifiedDate.textContent = lastVerified;
}

renderWalletUI();
applyBankDefaults();
initEvents();