// app/seo/monitoring-reporting/MonitoringReportingClient.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChartLine, FaArrowRight } from 'react-icons/fa';

export default function MonitoringReportingClient() {
  return (
    <main className="px-4 pt-32 md:pt-40 pb-12 md:px-6 max-w-5xl mx-auto text-blue-900">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
          <FaChartLine className="text-blue-600" /> Monitoring & Reporting
        </h1>

        <p className="text-base text-blue-800 mt-2">
          Als erfahrene <strong>SEO Monitoring Agentur in Berlin</strong> bieten die <strong>CAIT SEO Experten</strong> dir volle Transparenz, datenbasierte Entscheidungen und klare Handlungsempfehlungen – in Echtzeit.
        </p>

        <p className="text-lg text-blue-800">
          Echtzeit-Analysen, monatliche Reports, Handlungsempfehlungen: Du weißt jederzeit, was wir tun, und was es bringt.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Was wir bieten:</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-800">
            <li>Individuelle Dashboards mit Live-Daten zu Traffic, Rankings und Conversions</li>
            <li>Monatliche Performance-Reports mit allen relevanten KPIs</li>
            <li>Transparente Auswertung der SEO-Maßnahmen</li>
            <li>Handlungsempfehlungen zur weiteren Optimierung</li>
            <li>Frühzeitiges Erkennen von Rankingverlusten oder technischen Problemen</li>
            <li>Automatisierte Alerts bei Traffic-Verlusten oder fehlerhaften Seiten</li>
            <li>Detailanalysen auf Keyword-, Seiten- und Geräteebene</li>
            <li>Segmentierte Berichte für verschiedene Zielgruppen (Marketing, Technik, Management)</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Einblick in die Zahlen</h3>
          <p className="text-blue-800 mb-4">
            Wir nutzen Tools wie Google Analytics, Google Search Console, Ahrefs, SISTRIX, SEMrush, Matomo und weitere, um jederzeit datengestützt zu handeln. So triffst du keine Entscheidungen aus dem Bauchgefühl, sondern auf Grundlage echter Nutzer- und Suchdaten.
          </p>
          <p className="text-blue-800 mb-2">
            Besonders wichtig ist uns dabei die Kombination aus technischer Präzision und unternehmerischem Nutzen. Jedes Reporting wird auf dein Business abgestimmt und liefert dir wertvolle Erkenntnisse für strategische Entscheidungen.
          </p>
          <p className="text-blue-800">
            Ob Keyword-Entwicklung, Backlink-Wachstum oder Nutzerverhalten auf mobilen Geräten – du erhältst nicht nur Daten, sondern konkrete Handlungsempfehlungen.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Warum SEO Monitoring entscheidend ist</h2>
          <p className="text-blue-800">
            Der Google-Algorithmus verändert sich ständig, und was heute funktioniert, kann morgen schon überholt sein. Ohne Monitoring bleiben wichtige Entwicklungen oft unbemerkt – bis der Traffic plötzlich einbricht. Mit professionellem SEO Monitoring erkennst du Probleme, bevor sie sich auf dein Ranking auswirken.
          </p>
          <p className="text-blue-800">
            Neben technischen Faktoren wie Ladezeiten oder Indexierungsfehlern behalten wir auch deine Mitbewerber im Auge. Wer rankt besser und warum? Welche Keywords verlierst du? Wo entstehen Chancen? All das liefert dir unser Reporting – klar und verständlich.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Unsere Monitoring-Philosophie</h2>
          <p className="text-blue-800">
            Wir glauben an Transparenz, Klarheit und strategisches Handeln. Deshalb gestalten wir Monitoring nicht nur als reinen Datenabruf, sondern als aktiven Teil deiner Wachstumsstrategie. Die CAIT Agentur versteht Monitoring als Dialog: zwischen deinen Zielen, deinem aktuellen SEO-Status und den nächsten Schritten.
          </p>
          <p className="text-blue-800">
            Jedes unserer Dashboards ist individuell konfigurierbar. Du entscheidest, welche KPIs du regelmäßig sehen möchtest. Wir helfen dir bei der Interpretation der Zahlen – und setzen direkt die Maßnahmen um, die dich weiterbringen.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Beispiele aus der Praxis</h2>
          <ul className="list-disc pl-6 text-blue-800 space-y-2">
            <li>Ein Online-Shop konnte durch frühzeitiges Erkennen von Ladezeitproblemen seine Mobile Conversion Rate um 27 % steigern.</li>
            <li>Ein B2B-Dienstleister reagierte durch unser Monitoring auf Rankingverluste bei einem Hauptkeyword – noch bevor es zu Umsatzverlusten kam.</li>
            <li>Ein lokales Unternehmen stellte mithilfe der Dashboard-Analysen fest, dass 40 % seines Traffics aus einer nicht relevanten Stadt kam – nach Anpassung der Zielregion stiegen die Kontaktanfragen um 38 %.</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Häufige Fragen</h2>
          <div>
            <p className="font-semibold text-blue-900">Wie oft erhalte ich Reports?</p>
            <p className="text-blue-800">Standardmäßig einmal im Monat. Auf Wunsch auch wöchentlich oder täglich bei kritischen Entwicklungen.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-900">Sind die Dashboards in Echtzeit?</p>
            <p className="text-blue-800">Ja. Wir nutzen APIs und Schnittstellen, um Live-Daten direkt ins Dashboard zu ziehen.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-900">Kann ich eigene KPIs einbauen?</p>
            <p className="text-blue-800">Absolut. Unsere Dashboards sind vollständig anpassbar an deine Ziele und Reporting-Vorlieben.</p>
          </div>
        </div>

        <div className="mt-6">
          <Link 
            href="/kontakt" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition"
          >
            Beratung anfordern <FaArrowRight />
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
