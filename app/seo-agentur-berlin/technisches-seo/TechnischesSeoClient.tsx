'use client';

import React from 'react';
import {
  FaTools,
  FaArrowRight,
  FaMobileAlt,
  FaBug,
  FaSearch,
  FaCogs,
  FaShieldAlt,
  FaSitemap,
  FaRocket,
  FaBook,
  FaTachometerAlt
} from 'react-icons/fa';
import Link from 'next/link';

export default function TechnischesSeoClient() {
  return (
    <div className="px-4 py-12 md:px-6 max-w-6xl mx-auto bg-primary text-white space-y-24">

      {/* HERO */}
      <section className="pt-32 md:pt-40 bg-primary-light rounded-3xl p-8 md:p-12 shadow-lg text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-primary-light p-4 rounded-full">
            <FaTools className="text-gold-300 text-3xl" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-ink-muted">
          🔧 Technisches SEO, das Google & Nutzer lieben
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Von Ladezeit über Indexierung bis hin zu Mobile Performance: Als technische SEO Agentur sorgen wir für ein solides Fundament, das Rankings ermöglicht und Nutzern ein perfektes Erlebnis liefert.
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Wir analysieren deinen Code, deine Serverperformance und deine Seitengeschwindigkeit, und sorgen für eine einwandfreie Umsetzung der Google-Richtlinien. So holst du das Maximum aus deinem Content heraus.
        </p>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 bg-gold-300 text-night px-6 py-3 mt-4 rounded-lg font-semibold shadow hover:bg-night-600 transition"
        >
          Jetzt technische Analyse starten <FaArrowRight />
        </Link>
      </section>

      {/* Einführung */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaCogs className="text-gold-300" /> Was ist technisches SEO?
          </h2>
          <p className="text-gray-300 text-lg">
            Technisches SEO umfasst alle Maßnahmen, die dafür sorgen, dass Suchmaschinen deine Website fehlerfrei crawlen, indexieren und bewerten können. Dazu zählen Ladezeiten, Mobile-Optimierung, strukturierte Daten, saubere URLs, HTTPS, Canonicals und vieles mehr.
          </p>
          <p className="text-gray-300 text-lg">
            Ohne diese Basis bleiben Inhalte oft unsichtbar, ganz gleich, wie hochwertig sie sind. Technisches SEO ist das Fundament erfolgreicher Sichtbarkeit.
          </p>
        </div>
      </section>

      {/* Core Web Vitals */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaTachometerAlt className="text-gold-300" /> Core Web Vitals optimieren
          </h2>
          <p className="text-gray-300 text-lg">
            Die Core Web Vitals sind ein zentraler Bestandteil der Google Page Experience. Sie messen, wie schnell, stabil und interaktiv deine Website ist. Wir helfen dir, diese Metriken gezielt zu verbessern:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
            <li><span className="font-semibold text-white">LCP (Largest Contentful Paint):</span> Messung der Ladezeit des größten sichtbaren Elements</li>
            <li><span className="font-semibold text-white">FID (First Input Delay):</span> Zeit bis zur ersten Nutzerinteraktion</li>
            <li><span className="font-semibold text-white">CLS (Cumulative Layout Shift):</span> Stabilität des Layouts bei Ladevorgängen</li>
            <li><span className="font-semibold text-white">INP (Interaction to Next Paint):</span> Nachfolger von FID, misst Interaktionsqualität</li>
          </ul>
          <p className="text-gray-300">
            Wir nutzen Tools wie <strong>PageSpeed Insights</strong>, <strong>Lighthouse</strong> und <strong>CrUX-Daten</strong>, um diese Werte zu messen und zu optimieren, z. B. durch Bildoptimierung, Lazy Loading, Code Splitting und Cache-Kontrolle.
          </p>
        </div>
      </section>

      {/* Mobile SEO */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaMobileAlt className="text-gold-300" /> Mobile-First SEO
          </h2>
          <p className="text-gray-300 text-lg">
            Google bewertet deine Website primär in der mobilen Version, und das auf echten Geräten. Eine technisch saubere Mobile-Darstellung ist daher entscheidend für dein Ranking.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
            <li><span className="font-semibold text-white">Responsives Design:</span> Wir stellen sicher, dass deine Inhalte auf jedem Gerät optimal dargestellt werden</li>
            <li><span className="font-semibold text-white">Mobilfreundliche Navigation:</span> Buttons, Menüs und Inhalte sind touch-optimiert</li>
            <li><span className="font-semibold text-white">Viewport-Konfiguration:</span> Richtige Skalierung für verschiedene Displaygrößen</li>
            <li><span className="font-semibold text-white">Mobile Ladezeiten:</span> Minimierung von JS, CSS & Bildern speziell für mobile Nutzer</li>
          </ul>
        </div>
      </section>

      {/* Fehleranalyse */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaBug className="text-gold-300" /> Fehleranalyse & technischer Audit
          </h2>
          <p className="text-gray-300 text-lg">
            Technische Fehler können deine Rankings dramatisch verschlechtern. Wir führen gründliche Audits durch, mit Tools wie Screaming Frog, Ryte und GSC, und identifizieren:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
            <li><strong>HTTP-Fehler:</strong> 404, 500er, Redirect Chains & Loops</li>
            <li><strong>Duplicate Content:</strong> durch fehlende Canonicals oder Session-URLs</li>
            <li><strong>Broken Internal Links:</strong> tote interne Verlinkungen</li>
            <li><strong>JavaScript-Probleme:</strong> Inhalte nicht renderbar, blockiertes Crawling</li>
            <li><strong>Fehlende strukturierte Daten:</strong> keine Rich Snippets, mangelhafte Schema.org-Daten</li>
          </ul>
          <p className="text-gray-300">
            Auf Basis der Ergebnisse erstellen wir eine konkrete Liste mit Handlungsempfehlungen für Entwickler, CMS-Nutzer oder deine IT.
          </p>
        </div>
      </section>

      {/* Crawling & Indexierung */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaSitemap className="text-gold-300" /> Indexierung & Crawling optimieren
          </h2>
          <p className="text-gray-300 text-lg">
            Wenn Google deine Seite nicht versteht oder falsch crawlt, bleiben Rankings aus. Wir sorgen für eine klare Indexierungsstrategie:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
            <li><strong>robots.txt:</strong> Steuerung des Crawlings und Ausschluss irrelevanter Bereiche</li>
            <li><strong>XML-Sitemaps:</strong> saubere, dynamische Sitemaps für alle wichtigen Inhalte</li>
            <li><strong>Canonicals:</strong> Vermeidung von Duplicate Content und URL-Problemen</li>
            <li><strong>Noindex / Nofollow:</strong> gezielter Ausschluss technischer Seiten (Login, Warenkorb etc.)</li>
            <li><strong>Pagination & Facettennavigation:</strong> strukturierte Lösung für Shops und Filterlogik</li>
            <li><strong>hreflang:</strong> korrekte Sprach- & Länderversionen</li>
          </ul>
          <p className="text-gray-300">
            Zusätzlich analysieren wir das Crawl-Budget großer Websites und verhindern Verschwendung durch unnötige Parameter-URLs, Kalender, Tags etc.
          </p>
        </div>
      </section>
      {/* E-E-A-T & Trust-Signale */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaShieldAlt className="text-gold-300" /> Technische Vertrauenssignale & E-E-A-T
          </h2>
          <p className="text-gray-300 text-lg">
            Google bewertet nicht nur Inhalte, auch die technische Infrastruktur deiner Website beeinflusst das Vertrauen. Wir achten gezielt auf Signale, die Vertrauen aufbauen:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
            <li><strong>HTTPS:</strong> Standard für sichere, vertrauenswürdige Verbindungen</li>
            <li><strong>Saubere Seitenstruktur:</strong> Klare URL-Hierarchie, semantisches HTML (Header, Footer, Main)</li>
            <li><strong>Strukturierte Daten:</strong> Rich Snippets, Autoreninformationen, Bewertungen</li>
            <li><strong>Autoritätsverlinkungen:</strong> Zuverlässige externe Quellen, z. B. Wikipedia, Ämter, Standards</li>
            <li><strong>Transparenzseiten:</strong> Impressum, Datenschutz, Kontakt, Redaktion</li>
          </ul>
          <p className="text-gray-300">
            Diese Aspekte stärken nicht nur das Ranking, sie fördern auch das Vertrauen deiner Nutzer.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaRocket className="text-gold-300" /> Unsere Tools für technisches SEO
          </h2>
          <p className="text-gray-300 text-lg">
            Für die technische Analyse und Optimierung setzen wir auf ein bewährtes Set an professionellen SEO-Tools:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
            <li><strong>Google Search Console:</strong> Indexstatus, Core Web Vitals, Crawling-Reports</li>
            <li><strong>Pagespeed Insights / Lighthouse:</strong> Performance-Messung & Handlungsempfehlungen</li>
            <li><strong>Screaming Frog:</strong> Crawler für Linkstruktur, Statuscodes, Metadaten & mehr</li>
            <li><strong>Ryte:</strong> Monitoring, SEO Health Scores & strukturierte Daten</li>
            <li><strong>Semrush / Ahrefs:</strong> Technisches Audit, Wettbewerbervergleich & Health Score</li>
          </ul>
          <p className="text-gray-300">
            Wir kombinieren die Tools für einen ganzheitlichen technischen SEO-Audit, mit konkreten Maßnahmen für dein Dev-Team oder CMS.
          </p>
        </div>
      </section>

      {/* Best Practices & Fehler */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaBug className="text-gold-300" /> Häufige Fehler im technischen SEO
          </h2>
          <p className="text-gray-300 text-lg">
            Viele Websites verlieren Sichtbarkeit, obwohl der Content gut ist, wegen technischer Hürden. Diese Fehler sehen wir regelmäßig:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
            <li><strong>Fehlende Canonical-Tags:</strong> Duplicate Content & Ranking-Verlust</li>
            <li><strong>JavaScript-Rendering-Probleme:</strong> Inhalte sind für Google nicht sichtbar</li>
            <li><strong>Langsame Serverzeiten:</strong> Crawl-Budget wird verschwendet</li>
            <li><strong>Fehlerhafte Robots.txt:</strong> wichtige Seiten werden blockiert</li>
            <li><strong>Mobile UX ignoriert:</strong> Touch-Ziele zu klein, Schriften zu eng</li>
            <li><strong>Fehlende strukturierte Daten:</strong> keine Rich Snippets, schlechter CTR</li>
          </ul>
        </div>
      </section>

      {/* Glossar */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FaBook className="text-gold-300" /> Glossar: Technisches SEO erklärt
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
            <li><strong>LCP:</strong> Largest Contentful Paint, Ladezeit des größten sichtbaren Elements</li>
            <li><strong>CLS:</strong> Cumulative Layout Shift, visuelle Stabilität beim Laden</li>
            <li><strong>robots.txt:</strong> Datei zur Steuerung des Crawlings von Google</li>
            <li><strong>hreflang:</strong> Markierung für Sprach-/Länderversionen</li>
            <li><strong>Canonical:</strong> Verweis auf die Hauptversion einer Seite</li>
            <li><strong>Disavow:</strong> Entwertung schädlicher Links über Google Tool</li>
            <li><strong>Health Score:</strong> technischer Zustand einer Website im Audit</li>
          </ul>
        </div>
      </section>

      {/* Checkliste */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            ✅ Technisches SEO Checkliste (2025)
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
            <li>✓ HTTPS aktiv auf allen Seiten</li>
            <li>✓ Ladezeit unter 2,5 Sekunden (LCP)</li>
            <li>✓ CLS-Wert unter 0.1</li>
            <li>✓ Responsive Design & Mobile UX</li>
            <li>✓ robots.txt & XML-Sitemap korrekt</li>
            <li>✓ Canonical-Tags bei Duplicate Pages</li>
            <li>✓ Strukturierte Daten (Schema.org)</li>
            <li>✓ Fehlerseiten korrekt umgeleitet (301)</li>
            <li>✓ Core Web Vitals regelmäßig prüfen</li>
            <li>✓ Google Search Console eingerichtet</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            ❓ FAQ: Häufige Fragen zu technischem SEO
          </h2>
          <div className="space-y-3 text-gray-300">
            <p><strong>Wie oft sollte technisches SEO gemacht werden?</strong><br />Mindestens quartalsweise oder nach jedem Relaunch/Update.</p>
            <p><strong>Was kostet technisches SEO?</strong><br />Das hängt vom Umfang ab, von kleinen Audits bis zu komplexen Shop-Analysen.</p>
            <p><strong>Brauche ich das bei WordPress auch?</strong><br />Unbedingt, gerade Plugins und Themes verursachen oft Probleme.</p>
            <p><strong>Wie schnell sehe ich Ergebnisse?</strong><br />Technische Verbesserungen wirken meist binnen 2-6 Wochen sichtbar.</p>
          </div>
        </div>
      </section>

      {/* CTA Abschluss */}
      <section className="bg-gold-300 text-night rounded-3xl p-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Bereit für technisches SEO, das Ergebnisse liefert?</h2>
          <p className="text-xl">
            Wir finden technische Bremsen, beseitigen sie und holen das Maximum aus deinem Content heraus, für messbare Sichtbarkeit.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-primary text-gold-300 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-gold-300/20 transition"
          >
            Jetzt technische Analyse buchen <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Footer-Backlink */}
      <section className="text-center pt-12">
        <p className="text-gray-300">
          Zurück zur <Link href="/seo-agentur-berlin" className="underline text-gold-300">SEO Übersicht</Link>
        </p>
      </section>
    </div>
  );
}

