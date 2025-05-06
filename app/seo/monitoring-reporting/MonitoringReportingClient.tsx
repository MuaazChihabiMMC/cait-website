// app/seo/monitoring-reporting/MonitoringReportingClient.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChartLine, FaArrowRight } from 'react-icons/fa';

export default function MonitoringReportingClient() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-5xl mx-auto text-blue-900">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
          <FaChartLine className="text-blue-600" /> Monitoring & Reporting
        </h1>
        <p className="text-lg text-blue-800">
          Echtzeit-Analysen, monatliche Reports, Handlungsempfehlungen: Du weißt jederzeit, was wir tun – und was es bringt.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Was wir bieten:</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-800">
            <li>Individuelle Dashboards mit Live-Daten zu Traffic, Rankings und Conversions</li>
            <li>Monatliche Performance-Reports mit allen relevanten KPIs</li>
            <li>Transparente Auswertung der SEO-Maßnahmen</li>
            <li>Handlungsempfehlungen zur weiteren Optimierung</li>
            <li>Frühzeitiges Erkennen von Rankingverlusten oder technischen Problemen</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Einblick in die Zahlen</h3>
          <p className="text-blue-800">
            Wir nutzen Tools wie Google Analytics, Google Search Console, Ahrefs und weitere, um jederzeit datengestützt zu handeln. So triffst du keine Entscheidungen aus dem Bauchgefühl, sondern auf Grundlage echter Nutzer- und Suchdaten.
          </p>
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