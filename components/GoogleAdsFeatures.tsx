'use client'
import { motion } from 'framer-motion'

const adsFeatures = [
  {
    title: 'Keyword-Recherche & Zielgruppenanalyse',
    icon: '🔍',
    description: 'Wir identifizieren Suchbegriffe mit hoher Conversion-Wahrscheinlichkeit und richten Kampagnen exakt auf Ihre Berliner Zielgruppe aus.'
  },
  {
    title: 'Responsive Anzeigen & Erweiterungen',
    icon: '📱',
    description: 'Hochperformante Anzeigentexte mit Sitelinks, Anruferweiterungen & mehr, angepasst an alle Geräte.'
  },
  {
    title: 'Conversion-Tracking & Optimierung',
    icon: '📈',
    description: 'Wir messen was zählt: Conversions. Damit optimieren wir Ihre Kampagnen auf echte Ergebnisse, nicht nur Klicks.'
  },
  {
    title: 'Budget-Effizienz & A/B-Testing',
    icon: '💰',
    description: 'Mit strukturierter Kampagnenarchitektur holen wir das Maximum aus Ihrem Werbebudget.'
  },
  {
    title: 'Komplett-Service: Setup & Betreuung',
    icon: '🛠️',
    description: 'Von der ersten Anzeige bis zur Optimierung - wir übernehmen alles für nachhaltigen Erfolg.'
  },
  {
    title: 'Lokale & internationale Ads',
    icon: '🌍',
    description: 'Ob Berliner Dienstleister oder globaler Shop: Wir skalieren Kampagnen für jede Zielregion.'
  }
];

export default function GoogleAdsFeatures() {
  return (
    <section className="bg-[#0c1832] py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300">
            Leistungen Ihrer Google Ads Agentur Berlin
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Umfassende Google Ads Strategien für mehr Leads und Umsatz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a2a4a] border border-[#2d3a5a] p-6 rounded-xl hover:border-blue-400 transition-all group"
            >
              <div className="text-3xl mb-4 text-blue-400">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300 group-hover:text-blue-200 transition">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}