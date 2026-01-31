'use client'
import { motion } from 'framer-motion';

export default function SeoBenefits() {
  const benefits = [
    'Berlin-spezifische SEO-Strategien',
    'Transparentes Reporting mit Berliner KPIs',
    'Lokales Technik-Know-how & kreativer Berlin-Content',
    'Langfristige Partnerschaft mit Berliner Unternehmen',
    '15+ Jahre Erfahrung mit Berliner Projekten',
    'White-Hat-SEO für nachhaltige Berlin-Rankings',
    'Alles aus einer Hand: Berliner SEO-Experten',
    'Kenntnis der Berliner Wettbewerbslandschaft',
    'Fokus auf messbare Ergebnisse für Berliner Kunden',
    'Vor-Ort-Termine in Berlin möglich',
    'Netzwerk zu Berliner Medien & Influencern',
    'Optimierung für Berliner Stadtteil-Keywords'
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fcd066]">
            Warum Berliner Unternehmen uns wählen
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Als führende <strong>SEO Agentur Berlin</strong> kombinieren wir lokale Expertise mit technischer Exzellenz für nachhaltige Top-Rankings in der Hauptstadt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.slice(0, 6).map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3 items-start bg-[#1a2a4a] border border-[#2d3a5a] p-4 rounded-lg hover:border-[#fcd066] transition-all group"
                >
                  <span className="text-[#fcd066] mt-0.5 group-hover:text-[#fcd066] transition-colors">✓</span>
                  <p className="text-gray-100 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {benefit}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a2a4a] to-blue-700 p-8 rounded-2xl border border-blue-600"
          >
            <h3 className="text-2xl font-bold text-[#fcd066] mb-4">
              Berliner SEO-Erfolge
            </h3>
            <div className="space-y-4">
              {[
                { metric: "92%", text: "Berliner Kunden mit Top-3-Rankings" },
                { metric: "15+", text: "Jahre Berliner SEO-Erfahrung" },
                { metric: "250+", text: "Optimierte Berliner Websites" },
                { metric: "98%", text: "Kundenzufriedenheit in Berlin" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-[#fcd066] shrink-0 w-20">{item.metric}</div>
                  <div className="text-gray-100">{item.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.slice(6).map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex gap-3 items-start bg-[#1a2a4a] border border-[#2d3a5a] p-4 rounded-lg hover:border-[#fcd066] transition-all group"
            >
              <span className="text-[#fcd066] mt-0.5 group-hover:text-[#fcd066] transition-colors">✓</span>
              <p className="text-gray-100 leading-relaxed group-hover:text-gray-200 transition-colors">
                {benefit}
              </p>
            </motion.li>
          ))}
        </div>

        {/* Berliner Zitat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto p-8 bg-[#1a2a4a] rounded-2xl border border-blue-600 relative"
        >
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#0c1832] px-4 text-[#fcd066] font-bold">
            Berliner Stimme
          </div>
          <blockquote className="text-gray-100 italic text-lg mb-4">
            "Als Berliner Startup haben wir mit CAIT Social Media unsere organische Sichtbarkeit in der Hauptstadt verdreifacht. Die lokale SEO-Expertise und das Verständnis für den Berliner Markt machen den entscheidenden Unterschied."
          </blockquote>
          <div className="text-[#fcd066] font-semibold">
            Markus 
          </div>
        </motion.div>
      </div>
    </section>
  );
}