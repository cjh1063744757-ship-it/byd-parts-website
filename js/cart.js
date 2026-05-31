/**
 * CM IMPORT&EXPORT — Inquiry Cart System
 * localStorage-based cart + Google Apps Script backend
 */

const CART_KEY = 'cm_cart_v1';
const INQUIRY_KEY = 'cm_inquiries_v1';

// ─────────────────────────────────────────────────────────────
//  BACKEND CONFIG  (paste your Google Apps Script URL here)
// ─────────────────────────────────────────────────────────────
const APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

// ─── Cart CRUD ───────────────────────────────────────────────

function cartLoad() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  catch(e) { return []; }
}

function cartSave(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  cartRefreshBadge();
}

function cartAdd(tire) {
  const cart = cartLoad();
  const key  = tire.brand + '|' + tire.size + '|' + tire.pattern;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += 100;
  } else {
    cart.push({ key, brand: tire.brand, size: tire.size, pattern: tire.pattern,
                category: tire.category, rmb: tire.rmb, usd: tire.usd,
                qty: 100, addedAt: Date.now() });
  }
  cartSave(cart);
  showToast('✓ ' + tire.size + ' added to inquiry list');
}

function cartRemove(key) {
  cartSave(cartLoad().filter(i => i.key !== key));
}

function cartSetQty(key, qty) {
  const cart = cartLoad();
  const item = cart.find(i => i.key === key);
  if (item) { item.qty = Math.max(1, parseInt(qty) || 1); cartSave(cart); }
}

function cartClear() {
  localStorage.removeItem(CART_KEY);
  cartRefreshBadge();
}

function cartCount() { return cartLoad().length; }

// ─── UI helpers ──────────────────────────────────────────────

function cartRefreshBadge() {
  const el = document.getElementById('cartBadge');
  if (!el) return;
  const n = cartCount();
  el.textContent = n;
  el.style.display = n > 0 ? 'flex' : 'none';
}

function showToast(msg) {
  let t = document.getElementById('cmToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'cmToast';
    t.className = 'cm-toast';
    document.body.appendChild(t);
  }
  t.innerHTML = msg;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── Inquiry submission ──────────────────────────────────────

function genId() {
  const d = new Date();
  const p = n => String(n).padStart(2,'0');
  return 'INQ-' + d.getFullYear() + p(d.getMonth()+1) + p(d.getDate())
       + '-' + Math.random().toString(36).substr(2,5).toUpperCase();
}

function inquirySave(obj) {
  const list = JSON.parse(localStorage.getItem(INQUIRY_KEY) || '[]');
  list.unshift(obj);
  localStorage.setItem(INQUIRY_KEY, JSON.stringify(list));
}

function inquiryLoadAll() {
  try { return JSON.parse(localStorage.getItem(INQUIRY_KEY) || '[]'); }
  catch(e) { return []; }
}

async function inquirySubmitBackend(obj) {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('YOUR_')) return false;
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    });
    return true;
  } catch(e) {
    console.warn('Backend post failed:', e);
    return false;
  }
}

// Init badge on every page
document.addEventListener('DOMContentLoaded', cartRefreshBadge);
