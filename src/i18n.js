/**
 * LinkedIn Shield - i18n
 * Auto-detected from navigator.language
 */

const TRANSLATIONS = {
  de: {
    locale: 'de-DE',
    status: 'AKTIV — Scanning blockiert',
    blockedLabel: 'BLOCKIERTE PROBE-ANFRAGEN',
    firstScan: 'ERSTER SCAN',
    lastScan: 'LETZTER SCAN',
    sectionTitle: 'DSGVO-BESCHWERDE GENERIEREN',
    namePlaceholder: 'Max Mustermann',
    nameLabel: 'Ihr Name (optional)',
    btnHamburg: 'HmbBfDI (Hamburg)',
    btnDPC: 'Irish DPC (Dublin)',
    btnClear: 'Log zurücksetzen',
    copyBtn: 'Text kopieren',
    copiedBtn: 'Kopiert!',
    clearConfirm: 'Log wirklich zurücksetzen? Alle Beweise gehen verloren.',
    githubLink: 'GitHub (Open Source)',
    showHamburg: true,
    hamburgNote: null,

    complaintDPC(count, first, last, name, fmt) {
      const n = name || '[Ihr Name]';
      const today = new Date().toLocaleDateString('de-DE');
      return `An:
Data Protection Commission (DPC)
21 Fitzwilliam Square South, Dublin 2, D02 RD28
info@dataprotection.ie

Betreff: DSGVO-Beschwerde gegen LinkedIn Ireland – BrowserGate
Datum: ${today}

Sehr geehrte Damen und Herren,

ich, ${n}, erhebe Beschwerde gemäß Art. 77 DSGVO gegen:
LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2

SACHVERHALT

LinkedIn betreibt ein JavaScript-System ("Spectroscopy"), das bei
jedem Seitenaufruf den Browser nach über 6.000 Extensions durchsucht,
ohne dies offenzulegen oder Einwilligung einzuholen. Die Liste enthält
Extensions, die auf Religion, politische Meinung und Gesundheit
schließen lassen (Art. 9 DSGVO, besondere Kategorien).

NACHWEIS (LinkedIn Shield):
- Erster Scan: ${fmt(first)}
- Letzter Scan: ${fmt(last)}
- Blockierte Anfragen: ${count}

RECHTLICHE GRUNDLAGE
1. Art. 5(1)(a) DSGVO – Transparenzverstoß
2. Art. 6 DSGVO – Keine Rechtsgrundlage
3. Art. 9 DSGVO – Besondere Kategorien ohne Einwilligung
4. Irish DPC ist Lead Authority gem. Art. 56 DSGVO

ANTRAG
- Einleitung eines Aufsichtsverfahrens
- Anordnung der Einstellung der Praxis
- Information gem. Art. 77(2) DSGVO

Log-Datei als Beweismittel liegt bei.

Mit freundlichen Grüßen,
${n}`;
    },

    complaintHamburg(count, first, last, name, fmt) {
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

ich, ${n}, erhebe Beschwerde gemäß Art. 77 DSGVO gegen
LinkedIn Germany GmbH sowie LinkedIn Ireland Unlimited Company
wegen des verdeckten Browser-Scannings ("BrowserGate").

SACHVERHALT

LinkedIn betreibt ein JavaScript-System ("Spectroscopy"), das bei
jedem Seitenaufruf den Browser nach über 6.000 installierten
Extensions durchsucht, ohne dies in der Datenschutzerklärung
offenzulegen oder eine Einwilligung einzuholen.

Die Scan-Liste enthält Extensions, die Rückschlüsse auf religiöse
Überzeugungen, politische Meinungen, Gesundheitszustand und
Neurodivergenz ermöglichen (Art. 9 DSGVO).

NACHWEIS (LinkedIn Shield Extension):
- Erster Scan: ${fmt(first)}
- Letzter Scan: ${fmt(last)}
- Blockierte Anfragen: ${count}

RECHTLICHE EINORDNUNG
1. Art. 5(1)(a) DSGVO – Transparenzverstoß
2. Art. 6 DSGVO – Keine Rechtsgrundlage
3. Art. 9 DSGVO – Besondere Kategorien ohne Einwilligung
4. § 202a StGB – Möglicher unbefugter Datenzugriff

ICH BEANTRAGE
- Einleitung eines Aufsichtsverfahrens gegen LinkedIn Germany GmbH
- Anordnung der sofortigen Einstellung der Praxis
- Information gem. Art. 77(2) DSGVO

Log-Datei als Beweismittel liegt bei.

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
    sectionTitle: 'GENERATE GDPR COMPLAINT',
    namePlaceholder: 'Jane Smith',
    nameLabel: 'Your name (optional)',
    btnHamburg: null,
    btnDPC: 'Irish DPC (Dublin)',
    btnClear: 'Reset log',
    copyBtn: 'Copy text',
    copiedBtn: 'Copied!',
    clearConfirm: 'Reset log? All evidence will be lost.',
    githubLink: 'GitHub (Open Source)',
    showHamburg: false,
    hamburgNote: 'German residents can also file with HmbBfDI Hamburg (datenschutz@datenschutz.hamburg.de)',

    complaintDPC(count, first, last, name, fmt) {
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

LinkedIn operates a JavaScript system ("Spectroscopy") that silently
scans visitors' browsers for over 6,000 browser extension IDs on
every page load. This is not disclosed in LinkedIn's privacy policy
and no consent is obtained. The list includes extensions revealing
religious beliefs, political opinions, and health conditions —
special-category data under Article 9 GDPR.

EVIDENCE (LinkedIn Shield browser extension):
- First probe detected: ${fmt(first)}
- Most recent probe: ${fmt(last)}
- Total blocked probes: ${count}

LEGAL BASIS
1. Art. 5(1)(a) GDPR – Transparency: practice absent from privacy policy
2. Art. 6 GDPR – No lawful basis for processing
3. Art. 9 GDPR – Special-category data processed without explicit consent
4. Irish DPC is lead authority under Art. 56 GDPR (one-stop-shop)

I REQUEST
- Investigation into LinkedIn Ireland's browser scanning practices
- Order to cease undisclosed special-category data processing
- Outcome notification per Art. 77(2) GDPR

Raw log file attached as evidence.

Yours sincerely,
${n}`;
    },

    complaintHamburg() { return ''; }
  },

  fr: {
    locale: 'fr-FR',
    status: 'ACTIF — Analyse bloquée',
    blockedLabel: 'REQUÊTES DE SONDAGE BLOQUÉES',
    firstScan: 'PREMIER SCAN',
    lastScan: 'DERNIER SCAN',
    sectionTitle: 'GÉNÉRER UNE PLAINTE RGPD',
    namePlaceholder: 'Jean Dupont',
    nameLabel: 'Votre nom (optionnel)',
    btnHamburg: null,
    btnDPC: 'Irish DPC (Dublin)',
    btnClear: 'Réinitialiser le journal',
    copyBtn: 'Copier le texte',
    copiedBtn: 'Copié !',
    clearConfirm: 'Réinitialiser le journal ? Toutes les preuves seront perdues.',
    githubLink: 'GitHub (Open Source)',
    showHamburg: false,
    hamburgNote: 'Les résidents allemands peuvent également déposer une plainte auprès du HmbBfDI Hamburg (datenschutz@datenschutz.hamburg.de)',

    complaintDPC(count, first, last, name, fmt) {
      const n = name || '[Votre nom]';
      const today = new Date().toLocaleDateString('fr-FR');
      return `À : Data Protection Commission (DPC)
21 Fitzwilliam Square South, Dublin 2, D02 RD28
info@dataprotection.ie

Objet : Plainte RGPD contre LinkedIn Ireland – BrowserGate
Date : ${today}

Madame, Monsieur,

Je soussigné(e), ${n}, dépose une plainte en vertu de l'article 77
du RGPD contre :
LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2

FAITS

LinkedIn exploite un système JavaScript ("Spectroscopy") qui analyse
silencieusement le navigateur des visiteurs à la recherche de plus de
6 000 identifiants d'extensions à chaque chargement de page, sans
divulgation dans la politique de confidentialité et sans obtenir de
consentement. La liste inclut des extensions révélant des convictions
religieuses, des opinions politiques et des données de santé —
catégories particulières au sens de l'article 9 du RGPD.

PREUVES (extension LinkedIn Shield) :
- Première détection : ${fmt(first)}
- Dernière détection : ${fmt(last)}
- Nombre total de requêtes bloquées : ${count}

BASE JURIDIQUE
1. Art. 5(1)(a) RGPD – Transparence : pratique absente de la politique
   de confidentialité
2. Art. 6 RGPD – Absence de base légale pour le traitement
3. Art. 9 RGPD – Données de catégorie particulière traitées sans
   consentement explicite
4. Le DPC irlandais est l'autorité chef de file en vertu de l'art. 56
   du RGPD (guichet unique)

JE DEMANDE
- L'ouverture d'une enquête sur les pratiques de LinkedIn Ireland
- L'ordre de cesser tout traitement non divulgué de données sensibles
- Une notification du résultat conformément à l'art. 77(2) du RGPD

Le fichier journal brut est joint en pièce à conviction.

Cordialement,
${n}`;
    },

    complaintHamburg() { return ''; }
  }
};

export function detectLang() {
  const lang = (navigator.language || 'en').toLowerCase().split('-')[0];
  return TRANSLATIONS[lang] || TRANSLATIONS['en'];
}

export { TRANSLATIONS };
