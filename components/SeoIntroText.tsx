'use client'
import { motion } from 'framer-motion';

export default function SeoIntro() {
  return (
    <section className="bg-[#0c1832] py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#fcd066]">
            Ihre SEO Agentur aus Berlin für nachhaltigen Erfolg
          </h1>
          <p className="text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
            Als erfahrene <strong className="text-gray-200">SEO Agentur in Berlin</strong> sorgt CAIT Social Media für Top-Platzierungen in den Suchergebnissen. Wir steigern Ihre Sichtbarkeit durch datenbasierte Strategien, technische Exzellenz und Inhalte, die Kunden wirklich erreichen.
          </p>
        </motion.div>

        <div className="space-y-6 text-gray-100 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ob lokales Geschäft in Berlin oder internationales E-Commerce , mit gezieltem SEO erreichen Sie genau die Menschen, die nach Ihrem Angebot suchen. Unsere Maßnahmen steigern nicht nur Ihren Traffic, sondern vor allem die Qualität der Besucher , für mehr Anfragen, mehr Umsatz und nachhaltiges Wachstum.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Wir begleiten Sie von der Keyword-Recherche über die technische Optimierung bis zur laufenden Analyse und Optimierung Ihrer Rankings. Als <strong className="text-gray-200">SEO Experten aus Berlin</strong> setzen wir auf messbare Ergebnisse und transparente Kommunikation , ganz ohne leere Versprechen.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
