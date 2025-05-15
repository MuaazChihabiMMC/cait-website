// app/seo/offpage-seo/OffPageSeoClient.tsx
'use client';

import { motion } from 'framer-motion';
import { FaLink, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function OffPageSeoClient() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-5xl mx-auto bg-white text-blue-900 space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-32 md:pt-40 bg-white"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">
          🌐 OffPage-SEO & Backlinkaufbau
        </h1>
      <p className="text-base text-blue-800 mt-4">
  Die <strong>CAIT SEO Agentur in Berlin</strong> ist spezialisiert auf <strong>OffPage SEO & Linkaufbau</strong>. Wir helfen dir dabei, Autorität im Web aufzubauen und durch hochwertige Backlinks langfristig zu ranken.
</p>

      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaLink className="text-blue-600" /> Warum OffPage-SEO?
          </h2>
          <p className="text-blue-800">
            Google bewertet nicht nur den Inhalt deiner Website, sondern auch, wie vertrauenswürdig du im Web bist. Backlinks – also Empfehlungen anderer Seiten – sind ein zentraler Rankingfaktor. Aber nicht jeder Link ist gleich: Qualität schlägt Quantität.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">Unsere OffPage-Leistungen</h2>
          <ul className="list-disc list-inside space-y-3 pl-4 text-blue-800">
            <li><strong>Backlinkanalyse & Linkaudit:</strong> Wir identifizieren toxische Links und beseitigen Risiken für dein Ranking.</li>
            <li><strong>Strategischer Linkaufbau:</strong> Natürliche Backlinks von hochwertigen, relevanten Seiten.</li>
            <li><strong>Digital PR & Outreach:</strong> Wir platzieren deine Inhalte in Online-Medien und Blogs deiner Branche.</li>
            <li><strong>Lokale Verzeichnisse & Citations:</strong> Besonders wichtig für Local SEO & regionale Sichtbarkeit.</li>
            <li><strong>Content-Distribution:</strong> Wir verbreiten deinen Content auf Plattformen mit SEO-Effekt.</li>
          </ul>
        </div>

        <motion.div className="pt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
          >
            Beratung zu Backlinks anfordern <FaArrowRight />
          </motion.a>
          <p className="mt-3 text-sm text-blue-700">
            Durchschnittlicher Sichtbarkeitszuwachs unserer Kunden nach 6 Monaten: <strong>+120%</strong>
          </p>
        </motion.div>
      </motion.section>

      <section className="text-center pt-12">
        <p className="text-blue-800">
          Zurück zu <Link href="/seo" className="underline text-blue-600">SEO Übersicht</Link>
        </p>
      </section>
    </main>
  );
}