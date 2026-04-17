/**
 * LinkedIn Shield - GDPR Complaint Templates
 * Generates personalised complaint text for:
 *   - HmbBfDI (Hamburg, supervisory authority for LinkedIn Germany GmbH)
 *   - Irish DPC (lead supervisory authority for LinkedIn Ireland, EU one-stop-shop)
 */

export function buildComplaintHmbBfDI(scanCount, firstScanDate, lastScanDate, userName) {
  const name = userName || '[Ihr Name]';
  const today = new Date().toLocaleDateString('de-DE');

  return `An den
Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit (HmbBfDI)
Ludwig-Erhard-Str. 22
20459 Hamburg
datenschutz@datenschutz.hamburg.de

Betreff: DSGVO-Beschwerde gegen LinkedIn Germany GmbH – unerlaubtes Browser-Scanning (BrowserGate)

Hamburg, den ${today}

Sehr geehrte Damen und Herren,

ich, ${name}, erhebe hiermit Beschwerde gemäß Art. 77 DSGVO gegen

LinkedIn Germany GmbH
Marlene-Dietrich-Platz 1
80636 München

sowie gegen die Muttergesellschaft LinkedIn Ireland Unlimited Company, wegen des verdeckten und uninformierten Scannens meines Browsers nach installierten Browsererweiterungen.

Sachverhalt:

LinkedIn betreibt auf seinen Webseiten ein als „Spectroscopy" bezeichnetes JavaScript-System, das bei jedem Seitenaufruf die Browser-Umgebung der Nutzenden auf über 6.000 bekannte Erweiterungen untersucht, ohne hierüber in der Datenschutzerklärung zu informieren oder eine Einwilligung einzuholen.

Die Erweiterungsliste enthält u. a. Tools, die Rückschlüsse auf religiöse Überzeugungen, politische Meinungen, Gesundheitszustand und Neurodivergenz ermöglichen – allesamt besondere Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO.

Mein persönlicher Nachweis (erhoben durch die Browser-Extension „LinkedIn Shield"):

- Erste erfasste Scan-Aktivität: ${firstScanDate}
- Letzte erfasste Scan-Aktivität: ${lastScanDate}
- Anzahl blockierter Probe-Anfragen: ${scanCount}

Rechtliche Einordnung:

1. Verstoß gegen Art. 5 Abs. 1 lit. a DSGVO (Transparenzgrundsatz): Die Praxis wird in der Datenschutzerklärung von LinkedIn nicht erwähnt.
2. Verstoß gegen Art. 6 DSGVO: Es liegt keine Rechtsgrundlage für die Verarbeitung vor. Der berechtigte Interesse-Einwand (Art. 6 Abs. 1 lit. f) scheidet aus, da das Scanning weit über Anti-Scraping-Maßnahmen hinausgeht.
3. Verstoß gegen Art. 9 DSGVO: Die Verarbeitung besonderer Kategorien personenbezogener Daten (Religion, Gesundheit, politische Meinung) erfolgt ohne ausdrückliche Einwilligung.
4. Möglicher Verstoß gegen § 202a StGB: Das unerlaubte Abfragen der Browser-Umgebung kann als unbefugter Datenzugriff gewertet werden.

Ich beantrage:
- Einleitung eines Aufsichtsverfahrens gegen LinkedIn Germany GmbH
- Prüfung, ob die Praxis unverzüglich eingestellt werden muss
- Information über den Stand und das Ergebnis der Prüfung gemäß Art. 77 Abs. 2 DSGVO

Als Nachweis lege ich die exportierte Log-Datei meiner Browser-Extension bei.

Mit freundlichen Grüßen,
${name}`;
}

export function buildComplaintIrishDPC(scanCount, firstScanDate, lastScanDate, userName) {
  const name = userName || '[Your Name]';
  const today = new Date().toLocaleDateString('en-IE');

  return `To:
Data Protection Commission (DPC)
21 Fitzwilliam Square South
Dublin 2, D02 RD28
Ireland
info@dataprotection.ie
https://forms.dataprotection.ie/contact

Subject: GDPR Complaint against LinkedIn Ireland Unlimited Company – Covert Browser Extension Scanning ("BrowserGate")

${today}

Dear Commissioner,

I, ${name}, hereby lodge a complaint pursuant to Article 77 GDPR against:

LinkedIn Ireland Unlimited Company
Wilton Place
Dublin 2
Ireland

on the grounds of covert, undisclosed scanning of my browser for installed extensions.

Facts:

LinkedIn operates a JavaScript system referred to internally as "Spectroscopy" that, on every page load, silently probes visitors' browsers for over 6,000 known browser extension identifiers. This occurs without disclosure in LinkedIn's privacy policy and without obtaining any form of user consent.

The scanned extension list includes tools that reveal religious beliefs, political opinions, health conditions and neurodivergent status – all of which constitute special categories of personal data under Article 9 GDPR.

Evidence collected by the browser extension "LinkedIn Shield":

- First probe detected: ${firstScanDate}
- Most recent probe detected: ${lastScanDate}
- Total blocked probe requests: ${scanCount}

Legal basis for complaint:

1. Article 5(1)(a) GDPR – Principle of transparency: The scanning practice is entirely absent from LinkedIn's published privacy policy.
2. Article 6 GDPR – Lawfulness of processing: No valid legal basis exists. A legitimate interests claim under Art. 6(1)(f) cannot cover the scanning of health, religious, and political-orientation extensions.
3. Article 9 GDPR – Special category data: Processing of data revealing religion, health, and political opinions occurs without explicit consent.
4. The Irish DPC is the lead supervisory authority for LinkedIn under the GDPR one-stop-shop mechanism (Article 56 GDPR).

I request that the DPC:
- Open an investigation into LinkedIn Ireland's browser scanning practices
- Order cessation of undisclosed special-category data processing
- Inform me of the outcome of this complaint as required by Article 77(2) GDPR

I attach the raw log file exported from "LinkedIn Shield" as supporting evidence.

Yours sincerely,
${name}`;
}
