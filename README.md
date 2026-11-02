# CAIT – Website

Website der Digitalagentur CAIT (Berlin-Zehlendorf): www.caitsocialmedia.com

Next.js 16 (App Router), React 19, Tailwind CSS 3, TypeScript.

## Entwicklung

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # Produktionsbuild inkl. Typprüfung
npm start
```

## Umgebungsvariablen (Kontaktformular)

| Variable | Pflicht | Beschreibung |
| --- | --- | --- |
| `EMAIL_USER` | ja | SMTP-Benutzer (Strato-Postfach), zugleich Absender |
| `EMAIL_PASS` | ja | SMTP-Passwort |
| `CONTACT_TO` | nein | Empfänger der Anfragen (Standard: `EMAIL_USER`) |
| `SMTP_HOST` / `SMTP_PORT` | nein | Standard: `smtp.strato.de` / `465` |

Fehlen `EMAIL_USER` oder `EMAIL_PASS`, antwortet `/api/kontakt` mit 503 und einem Hinweis auf E-Mail und Telefon.

## Struktur

- `lib/site.ts` – Unternehmensangaben, Navigation, Kundenliste (einzige Quelle für Adresse, Telefon usw.)
- `lib/services.ts` – Inhalte der sechs Leistungsseiten (Zielgruppen, Probleme, Umfang, Ablauf, Kostenfaktoren, FAQ)
- `components/site/` – Bausteine des Designsystems (Leistungsseiten-Vorlage, FAQ, CTA, Brotkrumen, 3D-Szene)
- `app/` – Routen. SEO-Unterseiten, Blog, PR und Bewertungen nutzen noch ihre bisherigen Layouts.

## Design

- Farben: Nachtblau `#0c1527`, Gold `#d4af37`, Kalk `#eceef2` (Tokens in `tailwind.config.js` und `app/globals.css`)
- Schriften: Bodoni Moda (Überschriften, angelehnt an die Wortmarke) und Inter (Text), lokal ausgeliefert über `next/font`
- Die Ringe auf der Startseite (`components/site/Gyroscope.tsx`) sind reines WebGL ohne Bibliothek. Sie starten erst im
  Leerlauf, pausieren außerhalb des Bildschirms und werden bei reduzierter Bewegung, Datensparmodus, schwacher Hardware
  oder fehlendem WebGL durch ein statisches SVG ersetzt.
- Scroll-Einblendungen (`[data-reveal]`) greifen nur mit JavaScript und ohne `prefers-reduced-motion`; Inhalte sind sonst sofort sichtbar.

## SEO

- Kanonische URLs und Metadaten je Seite, `app/sitemap.ts` erzeugt `/sitemap.xml`, `public/robots.txt`
- Strukturierte Daten: Organisation (ProfessionalService), WebSite, Service, BreadcrumbList, FAQPage, Person (Über uns)
- Weiterleitungen alter URLs in `next.config.js`
