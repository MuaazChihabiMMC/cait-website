'use client'
import { motion } from 'framer-motion';
export default function SeoPageExpanded() {
  return (
    <section className="bg-[#0c1832] text-white py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Warum SEO? mit Berlin-Fokus */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#fcd066]">
            Warum SEO für Berliner Unternehmen?
          </h2>
          <p className="text-gray-100 text-lg leading-relaxed">
            SEO ist der entscheidende Wettbewerbsvorteil im digitalen Berlin. Wer in der Hauptstadt nicht bei Google sichtbar ist, verliert Kunden an die Konkurrenz. Unsere <strong>Berlin-spezifischen SEO-Strategien</strong> kombinieren lokale Keyword-Analyse, technische Optimierung und Content-Marketing für dauerhafte Top-Platzierungen in der Region.
          </p>
        </motion.div>

        {/* Leistungen mit Berlin-Bezug */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a]"
          >
            <h3 className="text-2xl font-semibold text-[#fcd066] mb-4">
              Unsere Berliner SEO-Schwerpunkte
            </h3>
            <ul className="space-y-4">
              {[
                "🔍 Lokale SEO: Google Business Optimierung für Berlin",
                "🔗 OffPage-SEO: Backlinks aus Berliner Medien & Blogs",
                "🛠️ Technisches SEO: Mobile Optimierung für Berliner Nutzer",
                "📍 Geotargeting: Optimierung für Berliner Stadtteile",
                "📝 Content-SEO: Berlin-spezifische Landingpages & Blogs",
                "📊 Local Ranking Monitoring: Positionsverfolgung in Berlin"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#fcd066]">•</span>
                  <span className="text-gray-100">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a]"
          >
            <h3 className="text-2xl font-semibold text-[#fcd066] mb-4">
              So optimieren wir Berliner Websites
            </h3>
            <ul className="space-y-4">
              {[
                "Berlin-spezifische Keyword-Recherche (z.B. 'SEO Agentur Berlin')",
                "Lokale Backlink-Strategie mit Berlin-Fokus",
                "Technische Optimierung für Core Web Vitals",
                "Erstellung von Berlin-relevantem Content",
                "Lokales Citation Building in Berliner Verzeichnissen",
                "Monatliches Reporting mit Berliner Ranking-Daten"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#fcd066]">•</span>
                  <span className="text-gray-100">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Berlin-spezifische Vorteile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a]"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#fcd066]">
            Warum Berliner Unternehmen mit uns arbeiten
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "✅ Berliner SEO-Experten mit lokaler Marktkenntnis",
              "✅ Spezialisiert auf Berliner Branchen & Zielgruppen",
              "✅ Netzwerk zu Berliner Medien & Influencern",
              "✅ Vor-Ort-Termine in Berlin möglich",
              "✅ Kenntnis der Berliner Wettbewerbslandschaft",
              "✅ Optimierung für Berlin-spezifische Suchanfragen"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 bg-[#0c1832] rounded-lg"
              >
                <span className="text-[#fcd066]">✓</span>
                <span className="text-gray-100">{item}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Berliner Case Study */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-blue-900/30 rounded-lg border border-blue-700"
          >
            <h4 className="text-xl font-semibold mb-3 text-[#fcd066]">
              Erfolgsbeispiel: Berliner E-Commerce Shop
            </h4>
            <p className="text-gray-100 mb-4">
              Für einen Berliner Modehändler erzielten wir innerhalb 6 Monate:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-blue-800/50 rounded">
                <div className="text-2xl font-bold text-[#fcd066]">+320%</div>
                <div className="text-sm text-gray-200">Organischer Traffic</div>
              </div>
              <div className="text-center p-3 bg-blue-800/50 rounded">
                <div className="text-2xl font-bold text-[#fcd066]">#1-3</div>
                <div className="text-sm text-gray-200">Für 42 Berlin-Keywords</div>
              </div>
              <div className="text-center p-3 bg-blue-800/50 rounded">
                <div className="text-2xl font-bold text-[#fcd066]">+75%</div>
                <div className="text-sm text-gray-200">Online-Umsatz Berlin</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}