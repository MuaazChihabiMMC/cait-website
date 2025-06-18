'use client'
import { motion } from 'framer-motion'

export default function SeoWhy() {
  return (
    <section className="bg-[#0c1832] py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content mit Berlin-Fokus */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-blue-300"
          >
            Warum SEO für Berliner Unternehmen essenziell ist
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg leading-relaxed"
          >
            In der dynamischen Wirtschaft Berlins entscheidet digitale Sichtbarkeit über Markterfolg. Ohne SEO verlieren Berliner Unternehmen täglich Kunden an besser platzierte Wettbewerber. 
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg leading-relaxed"
          >
            Als <strong>SEO Agentur Berlin</strong> wissen wir: Gute Rankings bei Google schaffen nicht nur Vertrauen, sondern bringen gezielt Berliner Kunden zu Ihnen - für mehr Anfragen und höhere Umsätze.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-700"
          >
            <h3 className="font-semibold text-blue-300 mb-2">Berliner SEO-Fakt:</h3>
            <p className="text-blue-100">
              Unternehmen auf Seite 1 von Google erhalten <strong>92% aller Klicks</strong> - in Berlin entscheidet SEO über Marktanteile.
            </p>
          </motion.div>
        </div>

        {/* Benefit Cards mit Berlin-Bezug */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Berliner Sichtbarkeit = Vertrauen",
              content: "Top-Rankings positionieren Sie als führende Adresse in Berlin und schaffen lokales Vertrauen."
            },
            {
              title: "Nachhaltiges Berlin-Wachstum",
              content: "SEO wirkt dauerhaft - einmal optimiert, generiert Ihre Website jahrelang Berliner Kunden."
            },
            {
              title: "Gezielte Berliner Kunden",
              content: "Sie erreichen genau die Berliner, die nach Ihrem Angebot suchen - ohne Streuverluste."
            },
            {
              title: "Mehr Umsatz in Berlin",
              content: "Organischer Traffic aus Berlin bedeutet qualifizierte Leads und höhere Conversion-Raten."
            }
          ].map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#1a2a4a] border border-[#2d3a5a] p-6 rounded-xl hover:border-blue-400 transition-all group"
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-3 group-hover:bg-blue-700 transition-colors">
                  <span className="text-blue-300">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-blue-100 pl-11">{benefit.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Berliner Callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 p-6 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl border border-blue-600"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white/10 p-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-2">Berliner Unternehmen im Fokus</h3>
            <p className="text-blue-100">
              Als <strong>SEO Agentur Berlin</strong> kennen wir die lokalen Besonderheiten: Von der Optimierung für Berliner Stadtteil-Keywords bis zur Steigerung der Sichtbarkeit in lokalen Suchergebnissen. Wir machen Ihr Unternehmen zum Top-Ergebnis für Berliner Kunden.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}