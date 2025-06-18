'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const adsFeatures = [
  {
    title: 'Keyword-Recherche & Zielgruppenanalyse',
    description: 'Wir identifizieren Suchbegriffe mit hoher Conversion-Wahrscheinlichkeit und richten Kampagnen exakt auf Ihre Berliner Zielgruppe aus.'
  },
  {
    title: 'Responsive Anzeigen & Erweiterungen',
    description: 'Hochperformante Anzeigentexte mit Sitelinks, Anruferweiterungen & mehr, angepasst an alle Geräte.'
  },
  {
    title: 'Conversion-Tracking & Optimierung',
    description: 'Wir messen was zählt: Conversions. Damit optimieren wir Ihre Kampagnen auf echte Ergebnisse, nicht nur Klicks.'
  },
  {
    title: 'Budget-Effizienz & A/B-Testing',
    description: 'Mit strukturierter Kampagnenarchitektur holen wir das Maximum aus Ihrem Werbebudget.'
  },
  {
    title: 'Komplett-Service: Setup & Betreuung',
    description: 'Von der ersten Anzeige bis zur Optimierung - wir übernehmen alles für nachhaltigen Erfolg.'
  },
  {
    title: 'Lokale & internationale Ads',
    description: 'Ob Berliner Dienstleister oder globaler Shop: Wir skalieren Kampagnen für jede Zielregion.'
  }
];

export default function GoogleAdsFeatures() {
  return (
    <section className="bg-gradient-to-b from-[#0c1832] to-[#121f3d] py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
            Leistungen Ihrer Google Ads Agentur Berlin
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Umfassende Google Ads Strategien für mehr Leads und Umsatz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "backOut"
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
              }}
              className="bg-gradient-to-br from-[#1a2a4a] to-[#15203a] border border-blue-500/20 p-7 rounded-2xl group relative overflow-hidden"
            >
              {/* Hintergrundeffekt */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon mit Animation */}
              <motion.div 
                className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <CheckCircle2 className="text-blue-400 w-7 h-7" strokeWidth={1.5} />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3 text-blue-200 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover-Indikator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-200 mb-4">
            Ihr Vorteil als Berliner Kunde
          </h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Als lokale Google Ads Agentur in Berlin bieten wir persönliche Beratung vor Ort und 
            tiefes Verständnis für den Berliner Markt - kombiniert mit internationaler SEA-Expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}