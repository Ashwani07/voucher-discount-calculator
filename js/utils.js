// Small shared helpers used by the feature modules.
// validateVoucherAmount, hidePortalResults and hideBrandGuideLink live here
// (not in results.js) to break the circular import: customCalc.js ↔ results.js
import { dom } from './dom.js';

const brandCache = new Map();
const portalCache = new Map();

export function debounce(fn, wait = 150) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function getBrandById(brandId, brands) {
  if (!brandId) return null;
  if (brandCache.has(brandId)) return brandCache.get(brandId);
  const brand = brands.find(item => item.id === brandId) || null;
  brandCache.set(brandId, brand);
  return brand;
}

export function getPortalById(portalId, portals) {
  if (!portalId) return null;
  if (portalCache.has(portalId)) return portalCache.get(portalId);
  const portal = portals.find(item => item.id === portalId) || null;
  portalCache.set(portalId, portal);
  return portal;
}

export function groupCardsByBank(cards) {
  const groups = {};
  cards.forEach(card => {
    let bank = 'Others';
    if (card.id.startsWith('hdfc_')) bank = 'HDFC Bank';
    else if (card.id.startsWith('sbi_')) bank = 'SBI Card';
    else if (card.id.startsWith('axis_')) bank = 'Axis Bank';
    else if (card.id.startsWith('icici_')) bank = 'ICICI Bank';
    else if (card.id.startsWith('amex_')) bank = 'American Express';
    else if (card.id.startsWith('hsbc_')) bank = 'HSBC Bank';
    else if (card.id.startsWith('custom_')) bank = 'Custom Cards';
    if (!groups[bank]) groups[bank] = [];
    groups[bank].push(card);
  });
  return groups;
}

export function renderMetricGrid(rows) {
  return `
    <div class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-slate-500 mt-2 w-full">
      ${rows.map(row => `
        <span class="${row.labelClass || ''}">${escapeHtml(row.label)}</span>
        <span class="${row.valueClass || 'text-right'}">${row.value}</span>
      `).join('')}
    </div>`;
}

export function renderApplyBadge(card) {
  const canApply = card.applyURL && card.applyStatus !== 'invite_only' && card.applyStatus !== 'closed';
  if (canApply) {
    return `<a href="${card.applyURL}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="text-[10px] uppercase font-bold tracking-wider text-blue-600 border border-blue-200 hover:bg-blue-50 px-2 py-0.5 rounded transition-colors">Apply Now</a>`;
  }
  if (card.applyStatus === 'invite_only') {
    return `<span class="text-[10px] text-slate-400 border border-slate-200 px-2 py-0.5 rounded">Invite Only</span>`;
  }
  return '';
}
// ---------------------------------------------------------------------------
// Voucher amount validation — single source of truth, used by both calculators
// ---------------------------------------------------------------------------
export function validateVoucherAmount(rawValue) {
  const amount = parseFloat(rawValue);
  if (!amount || amount < 500) {
    return { valid: false, error: 'Please enter a valid voucher amount (minimum ₹500).' };
  }
  if (amount % 500 !== 0) {
    const nearest = Math.round(amount / 500) * 500 || 500;
    return { valid: false, error: `Voucher amount must be a multiple of ₹500 (e.g. ₹${nearest}).` };
  }
  return { valid: true, amount };
}

// ---------------------------------------------------------------------------
// Shared visibility helpers — here to avoid circular imports
// ---------------------------------------------------------------------------
export function hidePortalResults() {
  dom.resultsSection.classList.add('hidden');
}

export function hideBrandGuideLink() {
  const link = document.getElementById('brandGuideLink');
  if (link) link.classList.add('hidden');
}