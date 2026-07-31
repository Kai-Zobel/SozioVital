# SozioVital

Moderne, responsive Website für SozioVital – Soziotherapie und Alltagshilfe von Antje Zobel im Raum Ribnitz-Damgarten, Barth und in einem Umkreis von etwa 35 Kilometern.

## Inhalt

Die Website übernimmt die inhaltlichen Aussagen der bisherigen SozioVital-Website und stellt sie neu strukturiert dar:

- Soziotherapie nach § 37a SGB V
- Alltagshilfe und Entlastungsleistungen nach § 45b SGB XI
- Strukturierung des Alltags, Krisenbegleitung und Netzwerkarbeit
- regionale und flexible Hausbesuche
- tiergestützte Elemente mit Besuchshund Leyla
- Haltung und Arbeitsweise
- Einsatzgebiet
- Kontakt per Telefon, E-Mail und WhatsApp
- Link zum KBV-Praxisleitfaden Soziotherapie

## Technischer Aufbau

Die Website ist vollständig statisch und besteht aus HTML, CSS, lokalem JavaScript, einem lokal gespeicherten Porträtfoto und einer selbst erstellten schematischen SVG-Karte. Es werden keine Frameworks, externen Schriftarten, Trackingdienste oder eingebetteten Inhalte verwendet.

Das JavaScript erfüllt ausschließlich diese Aufgaben:

- mobile Navigation öffnen und schließen
- Header beim Scrollen anpassen
- dezente Einblendeffekte
- aktuelles Jahr im Footer anzeigen

Das Skript verwendet keine Cookies, keine Browser-Speicher und keine Netzwerkaufrufe.

## Datenschutz

Die Website enthält kein Kontaktformular. Dadurch werden über die Website selbst keine Kontaktdaten erfasst. Telefon-, E-Mail- und WhatsApp-Verknüpfungen werden erst nach einem bewussten Klick geöffnet.

Die Website ist für GitHub Pages vorbereitet. GitHub protokolliert beim Besuch einer GitHub-Pages-Seite nach eigenen Angaben die IP-Adresse zu Sicherheitszwecken. Die Datenschutzerklärung berücksichtigt außerdem mögliche technische Nutzungsdaten, GitHub-Cookies, internationale Datenübermittlungen, E-Mail-Kontakt, WhatsApp-Kontakt, externe Links und die lokale technische Umsetzung.

Vor der Veröffentlichung sollte in GitHub Pages „Enforce HTTPS“ aktiviert werden.

## Bilder

`assets/antje-zobel.webp` basiert auf einem von Antje Zobel selbst bereitgestellten Porträtfoto.

Das Foto aus dem Artikel der Ostsee-Zeitung ist nicht im Repository enthalten, da eine Quellenangabe allein keine Nutzungsrechte für die Veröffentlichung auf der Website ersetzt. Es sollte nur verwendet werden, wenn eine ausdrückliche Nutzungserlaubnis des Rechteinhabers vorliegt.

## Karte

`assets/einsatzgebiet.svg` ist eine schematische, nicht maßstabsgetreue Darstellung. Sie verwendet keine Google-Maps-, OpenStreetMap- oder sonstigen externen Kartendaten und verursacht beim Laden keine Verbindung zu einem Kartendienst.

## Noch offener Platzhalter

Im Impressum bleibt ausschließlich der Abschnitt zu berufsrechtlichen und behördlichen Angaben als klar gekennzeichneter Platzhalter bestehen. Vor der endgültigen Veröffentlichung sollte geprüft werden, welche Anerkennungsstelle, Aufsichtsbehörde, Berufsbezeichnung, Zulassung oder berufsrechtliche Regelung anzugeben ist.

## Dateien

```text
.gitignore
CNAME
README.md
assets/
  antje-zobel.webp
  einsatzgebiet.svg
datenschutz.html
impressum.html
index.html
robots.txt
script.js
sitemap.xml
styles.css
```

## Veröffentlichung über GitHub Pages

1. Alle Dateien in das Hauptverzeichnis des Repositorys hochladen.
2. Unter `Settings → Pages` die Veröffentlichung aus dem gewünschten Branch aktivieren.
3. Als Custom Domain `www.soziovital.de` eintragen.
4. Die DNS-Einträge beim Domainanbieter konfigurieren.
5. Nach erfolgreicher Zertifikatserstellung `Enforce HTTPS` aktivieren.
6. Die Domain bei GitHub verifizieren, um Domain-Takeover-Risiken zu reduzieren.

## Rechtlicher Hinweis

Die Datenschutzerklärung wurde passend zur derzeitigen technischen Umsetzung erstellt, ersetzt jedoch keine individuelle Rechtsberatung. Bei Änderungen am Hosting, an Kontaktwegen, Analysewerkzeugen, Formularen, Karten, Videos, Social-Media-Einbindungen oder anderen externen Diensten muss sie erneut geprüft und angepasst werden.
