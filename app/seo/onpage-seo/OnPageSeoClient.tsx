// app/seo/onpage-seo/OnPageSeoClient.tsx
'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaCode, FaLink, FaMobileAlt, FaRocket, FaSitemap } from 'react-icons/fa';
import Link from 'next/link';

export default function OnPageSeoClient() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-7xl mx-auto bg-white text-blue-900 space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-gradient-to-b from-blue-50 to-white rounded-3xl px-6 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600">OnPage-SEO</span> für maximale Sichtbarkeit
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-blue-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Struktur, Inhalt und Technik perfekt abgestimmt.So optimieren wir Ihre Website von innen heraus.
          </motion.p>

          <p className="text-base text-blue-800 mt-4">
  Als erfahrene <strong>OnPage SEO Agentur</strong> übernehmen wir die <strong>technische & inhaltliche Optimierung</strong> deiner Website – für bessere Rankings und Nutzerfreundlichkeit.
</p>
          <motion.a
            href="/kontakt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all items-center gap-2"
          >
            Jetzt SEO-Beratung starten <FaArrowRight />
          </motion.a>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FaRocket className="text-blue-600" /> Technische Optimierung
            </h2>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li>Optimierung von Ladezeiten durch Lazy Loading und Komprimierung</li>
              <li>Mobile-First Design für alle Endgeräte <FaMobileAlt className="inline ml-1 text-blue-600" /></li>
              <li>Core Web Vitals als Rankingfaktor berücksichtigen</li>
              <li>HTTPS-Verschlüsselung und strukturierter Code</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FaCode className="text-blue-600" /> HTML & Struktur
            </h2>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li>Saubere Überschriftenstruktur (H1 bis H6)</li>
              <li>Sprechende URLs mit Keywords</li>
              <li>Strukturierte Daten (Schema.org) für Rich Snippets</li>
              <li>Interne Verlinkung und klare Informationsarchitektur <FaSitemap className="inline ml-1 text-blue-600" /></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FaLink className="text-blue-600" /> Content & Relevanz
            </h2>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li>Einzigartige, zielgerichtete Inhalte mit Fokus auf Suchintention</li>
              <li>Einbindung von Bildern, Videos & interaktiven Elementen</li>
              <li>Keyword-Dichte, WDF*IDF-Analyse & semantische Optimierung</li>
              <li>Regelmäßige Content-Pflege und Aktualisierung</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-blue-100 rounded-xl p-6 border border-blue-200"
          >
            <p className="text-blue-900 text-lg">
              <FaCheckCircle className="inline mr-2 text-blue-600" />
              <strong>Praxisbeispiel:</strong> Ein Online-Shop erhöhte seine Verweildauer um 48% und die Conversion-Rate um 21%, allein durch technische & inhaltliche OnPage-Optimierung.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-blue-600 text-white rounded-3xl p-12 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">OnPage-SEO bringt Struktur & Erfolg</h3>
          <p className="text-xl mb-8">
            Lassen Sie uns gemeinsam Ihre Website fit für Suchmaschinen und Nutzer machen. Nachhaltig. Effizient. Wirkungsvoll.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition items-center gap-2"
          >
            Jetzt optimieren <FaArrowRight />
          </Link>
        </div>
      </motion.section>
    </main>
  );
}