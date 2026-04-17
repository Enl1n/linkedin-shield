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
  document.getElementById('statusLabel').textContent    = t.status;
  document.getElementById('counterLabel').textContent   = t.blockedLabel;
  document.getElementById('firstScanLabel').textContent = t.firstScan;
  document.getElementById('lastScanLabel').textContent  = t.lastScan;
  document.getElementById('sectionTitle').textContent   = t.sectionTitle;
  document.getElementById('nameLabel').textContent      = t.nameLabel;
  document.getElementById('userName').placeholder       = t.namePlaceholder;
  document.getElementById('btnDPC').textContent         = t.btnDPC;
  document.getElementById('btnClear').textContent       = t.btnClear;
  document.getElementById('githubLink').textContent     = t.githubLink;
  document.getElementById('emailHint').textContent      = t.emailHint;
  document.getElementById('copyBtn').textContent        = t.copyBtn;

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

function showComplaint(text) {
  const wrap = document.getElementById('complaintWrap');
  const ta   = document.getElementById('complaintText');
  ta.value = text;
  wrap.classList.add('visible');
}

function openMailto(email, subject, body) {
  // Use encodeURIComponent for proper UTF-8 encoding including umlauts and line breaks
  const uri = 'mailto:' + email
    + '?subject=' + encodeURIComponent(subject)
    + '&body='    + encodeURIComponent(body);
  window.open(uri, '_self');
}

async function init() {
  applyTranslations();

  const log   = await loadStats();
  const first = log.length > 0 ? log[0].ts : null;
  const last  = log.length > 0 ? log[log.length - 1].ts : null;

  document.getElementById('btnHamburg').addEventListener('click', () => {
    const name = document.getElementById('userName').value.trim();
    const body = t.bodyHamburg(log.length, first, last, name, fmt);
    showComplaint(body);
    setTimeout(() => openMailto(t.emailHamburg, t.subjectHamburg, body), 300);
  });

  document.getElementById('btnDPC').addEventListener('click', () => {
    const name = document.getElementById('userName').value.trim();
    const body = t.bodyDPC(log.length, first, last, name, fmt);
    showComplaint(body);
    setTimeout(() => openMailto(t.emailDPC, t.subjectDPC, body), 300);
  });

  document.getElementById('copyBtn').addEventListener('click', () => {
    const ta  = document.getElementById('complaintText');
    const btn = document.getElementById('copyBtn');
    navigator.clipboard.writeText(ta.value).then(() => {
      btn.textContent = t.copiedBtn;
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = t.copyBtn;
        btn.classList.remove('copied');
      }, 2000);
    });
  });

  document.getElementById('btnClear').addEventListener('click', async () => {
    if (confirm(t.clearConfirm)) {
      await chrome.storage.local.set({ [STORAGE_KEY]: [] });
      location.reload();
    }
  });
}

init();
