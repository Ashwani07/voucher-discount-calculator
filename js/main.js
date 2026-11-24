// App bootstrapper for VouchWise. This is the only runtime entrypoint the page
// loads; it initializes the cached DOM, renders the wallet, and wires events.
import { dom } from './dom.js';
import { brands, lastVerified, loadScrapedDiscounts } from './data.js';
import { renderWalletUI, getActiveWalletIds } from './wallet.js';
import { applyBankDefaults } from './modals.js';
import { initEvents } from './events.js';
import { selectBrand } from './search.js';
import { handleCalculate, refreshPortalResults } from './results.js';
import { state } from './state.js';
import { renderCategoryBrands } from './search.js';
import { renderFlaggedDiscounts } from './flags.js';

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

async function bootstrap() {
  if (dom.verifiedDate && lastVerified) {
    dom.verifiedDate.textContent = lastVerified;
  }

  renderWalletUI();
  await loadScrapedDiscounts();
  if (dom.verifiedDate && lastVerified) {
    dom.verifiedDate.textContent = lastVerified;
  }
  applyBankDefaults();
  initEvents();
  renderFlaggedDiscounts();
  applyBrandPreselectFromHash();
}

// React whenever scraped catalog updates dynamically (e.g. background fetch / periodic reload)
window.addEventListener('vouchwise:catalog-updated', () => {
  if (dom.verifiedDate && lastVerified) {
    dom.verifiedDate.textContent = lastVerified;
  }
  renderFlaggedDiscounts();
  if (state.currentBrandId && getActiveWalletIds().length && dom.resultsSection && !dom.resultsSection.classList.contains('hidden')) {
    refreshPortalResults({ scroll: false, force: true });
  }
});

window.addEventListener("hashchange", () => {
  applyBrandPreselectFromHash();
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap, { once: true });
} else {
  bootstrap();
}
