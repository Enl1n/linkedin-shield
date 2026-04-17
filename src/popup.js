/**
 * LinkedIn Shield - Popup Script
 */

const STORAGE_KEY = 'liShieldLog';

function fmt(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleString('de-DE', {
    day: '2-digit', month: '2-digit', year: '2-digit',
    hour: '2-digit', minute: '2-digit'
  });
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

function buildComplaintHamburg(count, first, last, name) {
  const n = name || '[Ihr Name]';
  const today = new Date().toLocaleDateString('de-DE');
  return `An den
Hamburgischen Beauftragten für Datenschutz
und Informationsfreiheit (HmbBfDI)
Ludwig-Erhard-Str. 22, 20459 Hamburg
datenschutz@datenschutz.hamburg.de

Betreff: DSGVO-Beschwerde gegen LinkedIn Germany GmbH
Datum: ${today}

Sehr geehrte Damen und Herren,

ich, ${n}, erhebe hiermit Beschwerde gemäß Art. 77 DSGVO gegen
LinkedIn Germany GmbH (Sitz: München) sowie LinkedIn Ireland
Unlimited Company wegen des verdeckten Browser-Scannings.

SACHVERHALT

LinkedIn betreibt auf seinen Seiten ein JavaScript-System
("Spectroscopy"), das bei jedem Seitenaufruf den Browser nach
über 6.000 installierten Erweiterungen durchsucht, ohne dies
in der Datenschutzerklärung offenzulegen oder eine Einwilligung
einzuholen.

Die Scan-Liste enthält Extensions, die Rückschlüsse auf
religiöse Überzeugungen, politische Meinungen, Gesundheits-
zustand und Neurodivergenz ermöglichen (Art. 9 DSGVO).

MEIN NACHWEIS (LinkedIn Shield Extension):
- Erster erfasster Scan: ${fmt(first)}
- Letzter erfasster Scan: ${fmt(last)}
- Blockierte Probe-Anfragen: ${count}

RECHTLICHE EINORDNUNG
1. Art. 5(1)(a) DSGVO – Transparenzverstoß (kein Hinweis in der
   Datenschutzerklärung)
2. Art. 6 DSGVO – Keine Rechtsgrundlage für die Verarbeitung
3. Art. 9 DSGVO – Besondere Kategorien ohne ausdrückliche
   Einwilligung verarbeitet
4. § 202a StGB – Möglicher unbefugter Datenzugriff

ICH BEANTRAGE
- Einleitung eines Aufsichtsverfahrens gegen LinkedIn Germany GmbH
- Anordnung der sofortigen Einstellung der Praxis
- Information über Ergebnis gem. Art. 77(2) DSGVO

Als Beweis lege ich die Log-Datei meiner Browser-Extension bei.

Mit freundlichen Grüßen,
${n}`;
}

function buildComplaintDPC(count, first, last, name) {
  const n = name || '[Your Name]';
  const today = new Date().toLocaleDateString('en-IE');
  return `To: Data Protection Commission (DPC)
21 Fitzwilliam Square South, Dublin 2, D02 RD28
info@dataprotection.ie

Subject: GDPR Complaint – LinkedIn Ireland / BrowserGate
Date: ${today}

Dear Commissioner,

I, ${n}, lodge a complaint under Article 77 GDPR against:
LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2

FACTS

LinkedIn runs a JavaScript system ("Spectroscopy") that silently
scans visitors' browsers for over 6,000 browser extension IDs on
every page load. This is not disclosed in LinkedIn's privacy policy
and no consent is sought. The list includes extensions revealing
religious beliefs, political opinions, and health conditions,
constituting special-category data under Article 9 GDPR.

EVIDENCE (LinkedIn Shield browser extension):
- First probe detected: ${fmt(first)}
- Most recent probe: ${fmt(last)}
- Total blocked probes: ${count}

LEGAL BASIS
1. Art. 5(1)(a) GDPR – Transparency: practice absent from privacy policy
2. Art. 6 GDPR – No lawful basis; legitimate interests cannot cover
   processing of health/religion/political-opinion extension data
3. Art. 9 GDPR – Special-category data processed without explicit consent
4. Irish DPC is lead authority under Art. 56 GDPR (one-stop-shop)

I REQUEST
- Investigation into LinkedIn Ireland's browser scanning
- Order to cease undisclosed special-category data processing
- Outcome notification per Art. 77(2) GDPR

Raw log file attached as evidence.

Yours sincerely,
${n}`;
}

async function init() {
  const log = await loadStats();

  const first = log.length > 0 ? log[0].ts : null;
  const last  = log.length > 0 ? log[log.length - 1].ts : null;

  const wrap = document.getElementById('complaintWrap');
  const textArea = document.getElementById('complaintText');
  const copyBtn = document.getElementById('copyBtn');

  function showComplaint(text) {
    textArea.value = text;
    wrap.classList.add('visible');
    copyBtn.classList.remove('copied');
    copyBtn.textContent = 'Text kopieren';
  }

  document.getElementById('btnHamburg').addEventListener('click', () => {
    const name = document.getElementById('userName').value.trim();
    showComplaint(buildComplaintHamburg(log.length, first, last, name));
  });

  document.getElementById('btnDPC').addEventListener('click', () => {
    const name = document.getElementById('userName').value.trim();
    showComplaint(buildComplaintDPC(log.length, first, last, name));
  });

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(textArea.value).then(() => {
      copyBtn.textContent = 'Kopiert!';
      copyBtn.classList.add('copied');
    });
  });

  document.getElementById('btnClear').addEventListener('click', async () => {
    if (confirm('Log wirklich zurücksetzen? Alle Beweise gehen verloren.')) {
      await chrome.storage.local.set({ [STORAGE_KEY]: [] });
      location.reload();
    }
  });
}

init();
