// App bootstrapper for VouchWise. This is the only runtime entrypoint the page
// loads; it initializes the cached DOM, renders the wallet, and wires events.
import { dom } from './dom.js';
import { brands, lastVerified } from './data.js';
import { renderWalletUI, getActiveWalletIds } from './wallet.js';
import { applyBankDefaults } from './modals.js';
import { initEvents } from './events.js';
import { selectBrand } from './search.js';
import { handleCalculate } from './results.js';

function applyBrandPreselectFromHash() {
  const hash = decodeURIComponent(window.location.hash.replace('#', '')).trim().toLowerCase();
  if (!hash) return;

  const brand = brands.find(item => item.id.toLowerCase() === hash);
  if (!brand) return;

  selectBrand(brand.id);

  if (getActiveWalletIds().length) {
    handleCalculate({ scroll: true });
  }
}

function bootstrap() {
  if (dom.verifiedDate && lastVerified) {
    dom.verifiedDate.textContent = lastVerified;
  }

  renderWalletUI();
  applyBankDefaults();
  initEvents();
  applyBrandPreselectFromHash();
}

window.addEventListener("hashchange", () => {
  applyBrandPreselectFromHash();
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap, { once: true });
} else {
  bootstrap();
}