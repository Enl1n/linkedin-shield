/**
 * LinkedIn Shield - Popup Script
 * Auto-detects browser language (DE / EN / FR), falls back to EN.
 */

import { detectLang } from './i18n.js';

const STORAGE_KEY = 'liShieldLog';
const t = detectLang();

function fmt(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleString(t.locale, {
    day: '2-digit', month: '2-digit', year: '2-digit',
    hour: '2-digit', minute: '2-digit'
  });
}

function applyTranslations() {
  document.getElementById('statusLabel').textContent   = t.status;
  document.getElementById('counterLabel').textContent  = t.blockedLabel;
  document.getElementById('firstScanLabel').textContent = t.firstScan;
  document.getElementById('lastScanLabel').textContent  = t.lastScan;
  document.getElementById('sectionTitle').textContent  = t.sectionTitle;
  document.getElementById('nameLabel').textContent     = t.nameLabel;
  document.getElementById('userName').placeholder      = t.namePlaceholder;
  document.getElementById('btnDPC').textContent        = t.btnDPC;
  document.getElementById('btnClear').textContent      = t.btnClear;
  document.getElementById('githubLink').textContent    = t.githubLink;
  document.getElementById('emailHint').textContent     = t.emailHint;

  const btnHamburg = document.getElementById('btnHamburg');
  if (t.showHamburg) {
    btnHamburg.textContent = t.btnHamburg;
    btnHamburg.style.display = '';
  } else {
    btnHamburg.style.display = 'none';
    if (t.hamburgNote) {
      const noteEl = document.getElementById('hamburgNote');
      if (noteEl) { noteEl.textContent = t.hamburgNote; noteEl.style.display = ''; }
    }
  }
}

async function loadStats() {
  const result = await chrome.storage.local.get(STORAGE_KEY);
  const log = result[STORAGE_KEY] ?? [];

  const countEl = document.getElementById('scanCount');
  countEl.textContent = log.length;
  countEl.className = 'counter-value' + (log.length === 0 ? ' zero' : '');

  document.getElementById('firstDate').textContent =
    log.length > 0 ? fmt(log[0].ts) : '—';
  document.getElementById('lastDate').textContent =
    log.length > 0 ? fmt(log[log.length - 1].ts) : '—';

  return log;
}

function downloadJSON(log) {
  const json = JSON.stringify(log, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'linkedin-shield-evidence-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function openMailto(email, subject, body) {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailto, '_self');
}

async function init() {
  applyTranslations();

  const log   = await loadStats();
  const first = log.length > 0 ? log[0].ts : null;
  const last  = log.length > 0 ? log[log.length - 1].ts : null;

  // Hamburg button (DE only)
  document.getElementById('btnHamburg').addEventListener('click', () => {
    const name = document.getElementById('userName').value.trim();
    downloadJSON(log);
    setTimeout(() => {
      openMailto(
        t.emailHamburg,
        t.subjectHamburg,
        t.bodyHamburg(log.length, first, last, name, fmt)
      );
    }, 300);
  });

  // DPC button (all languages)
  document.getElementById('btnDPC').addEventListener('click', () => {
    const name = document.getElementById('userName').value.trim();
    downloadJSON(log);
    setTimeout(() => {
      openMailto(
        t.emailDPC,
        t.subjectDPC,
        t.bodyDPC(log.length, first, last, name, fmt)
      );
    }, 300);
  });

  // Clear
  document.getElementById('btnClear').addEventListener('click', async () => {
    if (confirm(t.clearConfirm)) {
      await chrome.storage.local.set({ [STORAGE_KEY]: [] });
      location.reload();
    }
  });
}

init();
