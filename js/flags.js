// Flagged-discount tracking. The ⚑ icon on results.js and brands.html writes
// `flag:${brandId}:${portalId}` = '1' to localStorage, but until now nothing
// ever read that list back or gave a way to clear it — a flag, once set,
// stayed forever with no visible undo path anywhere in the app. This module
// scans for every flag key, resolves brand/portal names for display, and
// renders a small clearable list so people can find what they flagged.
import { brands, portals } from './data.js';
import { getBrandById, getPortalById } from './utils.js';

const FLAG_PREFIX = 'flag:';

export function getAllFlags() {
  const flags = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(FLAG_PREFIX)) continue;
    const rest = key.slice(FLAG_PREFIX.length);
    const separatorIndex = rest.indexOf(':');
    if (separatorIndex === -1) continue; // Malformed key — skip rather than crash.
    flags.push({
      key,
      brandId: rest.slice(0, separatorIndex),
      portalId: rest.slice(separatorIndex + 1)
    });
  }
  return flags;
}

export function removeFlag(key) {
  localStorage.removeItem(key);
}

export function renderFlaggedDiscounts() {
  const section = document.getElementById('flaggedDiscountsSection');
  const list = document.getElementById('flaggedDiscountsList');
  const countEl = document.getElementById('flaggedCount');
  if (!section || !list || !countEl) return;

  const flags = getAllFlags();
  countEl.textContent = flags.length;

  if (!flags.length) {
    section.classList.add('hidden');
    list.innerHTML = '';
    return;
  }

  list.innerHTML = flags.map(flag => {
    const brand = getBrandById(flag.brandId, brands);
    const portal = getPortalById(flag.portalId, portals);
    const brandName = brand ? brand.name : flag.brandId;
    const portalName = portal ? portal.name : flag.portalId;
    return `
      <div class="flex items-center justify-between gap-2 py-1.5 border-b border-amber-100 last:border-0">
        <span class="text-slate-700">${brandName} <span class="text-slate-400">via</span> ${portalName}</span>
        <button data-unflag-key="${flag.key}" type="button" class="text-[11px] font-semibold text-sky-600 hover:underline whitespace-nowrap shrink-0">Remove flag</button>
      </div>`;
  }).join('');

  section.classList.remove('hidden');
}