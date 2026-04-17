# LinkedIn Shield

**Schützt deine Privatsphäre. Generiert DSGVO-Beschwerden. 100% legal.**

## Was tut diese Extension?

LinkedIn betreibt seit mindestens 2017 ein verdecktes Scanning-System ("Spectroscopy"), das bei jedem Seitenaufruf deinen Browser nach über 6.000 installierten Erweiterungen durchsucht – ohne Einwilligung, ohne Hinweis in der Datenschutzerklärung.

Die Scan-Liste enthält Extensions die auf religiöse Überzeugungen, politische Meinungen, Gesundheitszustand und Neurodivergenz schließen lassen (Art. 9 DSGVO, besondere Kategorien).

**LinkedIn Shield:**
1. Blockiert diese Probe-Anfragen auf deinem eigenen Gerät
2. Loggt jeden Versuch mit Zeitstempel als Beweissicherung
3. Generiert auf Knopfdruck eine fertige DSGVO-Beschwerde (HmbBfDI oder Irish DPC)

## Rechtliche Einordnung

Diese Extension ist vollständig legal. Sie schützt ausschließlich dein eigenes Gerät. Es werden keine Anfragen an LinkedIn-Server manipuliert oder deren Betrieb gestört.

Relevant für LinkedIn's Praxis:
- Art. 5, 6, 9 DSGVO
- § 202a StGB (möglicher unbefugter Datenzugriff)
- Digital Markets Act (DMA)

Verweise: Fairlinked e.V. "BrowserGate" Report (2026), Irish DPC Entscheidung gegen LinkedIn (Oktober 2024, 310 Mio. EUR Bußgeld)

## Installation (Chrome/Brave/Edge)

1. `chrome://extensions/` öffnen
2. "Entwicklermodus" aktivieren
3. "Entpackte Erweiterung laden" → diesen Ordner auswählen

Firefox: Extension ist kompatibel, aber Firefox blockiert das Scanning bereits nativ. Der DSGVO-Complaint-Generator bleibt trotzdem nützlich.

## Beschwerden einreichen

**HmbBfDI (Hamburg):** Zuständig für LinkedIn Germany GmbH  
datenschutz@datenschutz.hamburg.de

**Irish DPC (Lead Authority):** Zuständig für LinkedIn Ireland (EU One-Stop-Shop)  
info@dataprotection.ie

## Tech Stack

- Manifest V3
- Content Script (document_start) – Fetch/XHR/Image Interception
- chrome.storage.local – Beweisprotokoll
- BroadcastChannel – Content Script <-> Background Kommunikation
- Kein Backend, kein Tracking, keine externen Server

## Lizenz

MIT – Fork it, verbreite es, verbessere es.

## Mitmachen

Pull Requests willkommen. Besonders gesucht:
- Aktualisierte Extension-ID-Blacklists aus dem Fairlinked-Bericht
- Übersetzungen (EN, FR)
- Firefox-Manifest-V2-Kompatibilität
