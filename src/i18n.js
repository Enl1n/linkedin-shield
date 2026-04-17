/**
 * LinkedIn Shield - i18n
 * DE / EN / FR — auto-detected from navigator.language
 */

const TRANSLATIONS = {
  de: {
    locale: 'de-DE',
    status: 'AKTIV — Scanning blockiert',
    blockedLabel: 'BLOCKIERTE PROBE-ANFRAGEN',
    firstScan: 'ERSTER SCAN',
    lastScan: 'LETZTER SCAN',
    sectionTitle: 'DSGVO-BESCHWERDE SENDEN',
    nameLabel: 'Ihr Name (für die Beschwerde)',
    namePlaceholder: 'Max Mustermann',
    btnHamburg: 'HmbBfDI (Hamburg)',
    btnDPC: 'Irish DPC (Dublin)',
    btnClear: 'Log zurücksetzen',
    copyBtn: 'Text kopieren',
    copiedBtn: 'Kopiert!',
    clearConfirm: 'Log zurücksetzen? Alle Beweise gehen verloren.',
    githubLink: 'GitHub (Open Source)',
    emailHint: '✉ Klick öffnet dein E-Mail-Programm vorausgefüllt.',
    showHamburg: true,
    hamburgNote: null,
    subjectHamburg: 'DSGVO-Beschwerde gegen LinkedIn Germany GmbH – BrowserGate',
    subjectDPC: 'GDPR Complaint – LinkedIn Ireland / BrowserGate',
    emailHamburg: 'datenschutz@datenschutz.hamburg.de',
    emailDPC: 'info@dataprotection.ie',

    bodyHamburg(count, first, last, name, fmt) {
      const n = name || '[Ihr Name]';
      return `An den Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit (HmbBfDI)
Ludwig-Erhard-Str. 22, 20459 Hamburg
datenschutz@datenschutz.hamburg.de

Betreff: DSGVO-Beschwerde gegen LinkedIn Germany GmbH – BrowserGate
Datum: ${new Date().toLocaleDateString('de-DE')}

Sehr geehrte Damen und Herren,

ich, ${n}, erhebe Beschwerde gemäß Art. 77 DSGVO gegen LinkedIn Germany GmbH sowie LinkedIn Ireland Unlimited Company wegen des verdeckten Browser-Scannings ("BrowserGate").

SACHVERHALT

LinkedIn betreibt ein JavaScript-System ("Spectroscopy"), das bei jedem Seitenaufruf den Browser nach über 6.000 installierten Erweiterungen durchsucht – ohne Einwilligung und ohne Hinweis in der Datenschutzerklärung. Die Scan-Liste enthält Erweiterungen, die Rückschlüsse auf religiöse Überzeugungen, politische Meinungen, Gesundheitszustand und Neurodivergenz ermöglichen (Art. 9 DSGVO, besondere Kategorien).

MEIN NACHWEIS (LinkedIn Shield Extension):
- Erster erfasster Scan: ${fmt(first)}
- Letzter erfasster Scan: ${fmt(last)}
- Blockierte Probe-Anfragen: ${count}

RECHTLICHE EINORDNUNG
1. Art. 5(1)(a) DSGVO – Transparenzverstoß: Praxis nicht in der Datenschutzerklärung erwähnt
2. Art. 6 DSGVO – Keine Rechtsgrundlage für die Verarbeitung
3. Art. 9 DSGVO – Besondere Kategorien ohne ausdrückliche Einwilligung verarbeitet
4. § 202a StGB – Möglicher unbefugter Datenzugriff

ICH BEANTRAGE
- Einleitung eines Aufsichtsverfahrens gegen LinkedIn Germany GmbH
- Anordnung der sofortigen Einstellung der Praxis
- Information über das Ergebnis gemäß Art. 77(2) DSGVO

Mit freundlichen Grüßen,
${n}`;
    },

    bodyDPC(count, first, last, name, fmt) {
      const n = name || '[Ihr Name]';
      return `To: Data Protection Commission (DPC)
21 Fitzwilliam Square South, Dublin 2, D02 RD28
info@dataprotection.ie

Subject: GDPR Complaint – LinkedIn Ireland / BrowserGate
Date: ${new Date().toLocaleDateString('de-DE')}

Dear Commissioner,

I, ${n}, lodge a complaint under Article 77 GDPR against LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, regarding covert browser extension scanning ("BrowserGate").

FACTS

LinkedIn operates a JavaScript system ("Spectroscopy") that silently scans visitors' browsers for over 6,000 extension IDs on every page load – without consent and without disclosure in the privacy policy. The list includes extensions revealing religious beliefs, political opinions, health conditions and neurodivergence (Art. 9 GDPR, special-category data).

EVIDENCE (LinkedIn Shield browser extension):
- First probe detected: ${fmt(first)}
- Most recent probe: ${fmt(last)}
- Total blocked probes: ${count}

LEGAL BASIS
1. Art. 5(1)(a) GDPR – Transparency: practice absent from privacy policy
2. Art. 6 GDPR – No lawful basis for processing
3. Art. 9 GDPR – Special-category data processed without explicit consent
4. Irish DPC is lead supervisory authority under Art. 56 GDPR (one-stop-shop)

I REQUEST
- Investigation into LinkedIn Ireland's browser scanning practices
- Order to cease undisclosed special-category data processing
- Outcome notification per Art. 77(2) GDPR

Mit freundlichen Grüßen,
${n}`;
    }
  },

  en: {
    locale: 'en-GB',
    status: 'ACTIVE — Scanning blocked',
    blockedLabel: 'BLOCKED PROBE REQUESTS',
    firstScan: 'FIRST SCAN',
    lastScan: 'LAST SCAN',
    sectionTitle: 'SEND GDPR COMPLAINT',
    nameLabel: 'Your name (for the complaint)',
    namePlaceholder: 'Jane Smith',
    btnHamburg: null,
    btnDPC: 'Irish DPC (Dublin)',
    btnClear: 'Reset log',
    copyBtn: 'Copy text',
    copiedBtn: 'Copied!',
    clearConfirm: 'Reset log? All evidence will be lost.',
    githubLink: 'GitHub (Open Source)',
    emailHint: '✉ Click opens your email client pre-filled.',
    showHamburg: false,
    hamburgNote: 'German residents can also file with HmbBfDI Hamburg: datenschutz@datenschutz.hamburg.de',
    subjectDPC: 'GDPR Complaint – LinkedIn Ireland / BrowserGate',
    emailDPC: 'info@dataprotection.ie',

    bodyDPC(count, first, last, name, fmt) {
      const n = name || '[Your Name]';
      return `To: Data Protection Commission (DPC)
21 Fitzwilliam Square South, Dublin 2, D02 RD28
info@dataprotection.ie

Subject: GDPR Complaint – LinkedIn Ireland / BrowserGate
Date: ${new Date().toLocaleDateString('en-IE')}

Dear Commissioner,

I, ${n}, lodge a complaint under Article 77 GDPR against LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, regarding covert browser extension scanning ("BrowserGate").

FACTS

LinkedIn operates a JavaScript system ("Spectroscopy") that silently scans visitors' browsers for over 6,000 extension IDs on every page load – without consent and without disclosure in the privacy policy. The list includes extensions revealing religious beliefs, political opinions, health conditions and neurodivergence (Art. 9 GDPR, special-category data).

EVIDENCE (LinkedIn Shield browser extension):
- First probe detected: ${fmt(first)}
- Most recent probe: ${fmt(last)}
- Total blocked probes: ${count}

LEGAL BASIS
1. Art. 5(1)(a) GDPR – Transparency: practice absent from privacy policy
2. Art. 6 GDPR – No lawful basis for processing
3. Art. 9 GDPR – Special-category data processed without explicit consent
4. Irish DPC is lead supervisory authority under Art. 56 GDPR (one-stop-shop)

I REQUEST
- Investigation into LinkedIn Ireland's browser scanning practices
- Order to cease undisclosed special-category data processing
- Outcome notification per Art. 77(2) GDPR

Yours sincerely,
${n}`;
    },

    bodyHamburg() { return ''; }
  },

  fr: {
    locale: 'fr-FR',
    status: 'ACTIF — Analyse bloquée',
    blockedLabel: 'REQUÊTES DE SONDAGE BLOQUÉES',
    firstScan: 'PREMIER SCAN',
    lastScan: 'DERNIER SCAN',
    sectionTitle: 'ENVOYER UNE PLAINTE RGPD',
    nameLabel: 'Votre nom (pour la plainte)',
    namePlaceholder: 'Jean Dupont',
    btnHamburg: null,
    btnDPC: 'Irish DPC (Dublin)',
    btnClear: 'Réinitialiser le journal',
    copyBtn: 'Copier le texte',
    copiedBtn: 'Copié !',
    clearConfirm: 'Réinitialiser ? Toutes les preuves seront perdues.',
    githubLink: 'GitHub (Open Source)',
    emailHint: '✉ Le clic ouvre votre client e-mail pré-rempli.',
    showHamburg: false,
    hamburgNote: 'Les résidents allemands peuvent aussi contacter le HmbBfDI Hamburg: datenschutz@datenschutz.hamburg.de',
    subjectDPC: 'Plainte RGPD – LinkedIn Ireland / BrowserGate',
    emailDPC: 'info@dataprotection.ie',

    bodyDPC(count, first, last, name, fmt) {
      const n = name || '[Votre nom]';
      return `À : Data Protection Commission (DPC)
21 Fitzwilliam Square South, Dublin 2, D02 RD28
info@dataprotection.ie

Objet : Plainte RGPD – LinkedIn Ireland / BrowserGate
Date : ${new Date().toLocaleDateString('fr-FR')}

Madame, Monsieur,

Je soussigné(e), ${n}, dépose une plainte en vertu de l'article 77 du RGPD contre LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, concernant l'analyse couverte des extensions de navigateur ("BrowserGate").

FAITS

LinkedIn exploite un système JavaScript ("Spectroscopy") qui analyse silencieusement le navigateur des visiteurs à la recherche de plus de 6 000 identifiants d'extensions à chaque chargement de page – sans consentement et sans mention dans la politique de confidentialité. La liste inclut des extensions révélant des convictions religieuses, des opinions politiques, des données de santé et la neurodivergence (art. 9 RGPD, catégories particulières).

PREUVES (extension LinkedIn Shield) :
- Première détection : ${fmt(first)}
- Dernière détection : ${fmt(last)}
- Requêtes bloquées : ${count}

BASE JURIDIQUE
1. Art. 5(1)(a) RGPD – Transparence : pratique absente de la politique de confidentialité
2. Art. 6 RGPD – Absence de base légale
3. Art. 9 RGPD – Catégories particulières traitées sans consentement explicite
4. Le DPC irlandais est l'autorité chef de file (art. 56 RGPD)

JE DEMANDE
- L'ouverture d'une enquête sur les pratiques de LinkedIn Ireland
- L'ordre de cesser ce traitement non divulgué
- Une notification du résultat conformément à l'art. 77(2) RGPD

Cordialement,
${n}`;
    },

    bodyHamburg() { return ''; }
  }
};

export function detectLang() {
  const lang = (navigator.language || 'en').toLowerCase().split('-')[0];
  return TRANSLATIONS[lang] || TRANSLATIONS['en'];
}

export { TRANSLATIONS };
