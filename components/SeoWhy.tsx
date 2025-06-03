'use client'
import { motion } from 'framer-motion'

export default function SeoWhy() {
  return (
    <section className="bg-[#0c1832] py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300">
            Warum SEO heute unverzichtbar ist
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Sichtbarkeit im Netz entscheidet über den Erfolg Ihres Unternehmens. Ohne SEO verlieren Sie potenzielle Kunden an Wettbewerber, die digital präsenter sind. Gute Platzierungen bei Google schaffen Vertrauen, bringen qualifizierten Traffic und sorgen für messbaren Umsatz.
          </p>
          <p className="text-blue-100 text-lg leading-relaxed">
            Ob lokale Dienstleistung oder internationaler E-Commerce: Mit der richtigen Strategie werden Sie gefunden, und zwar genau von denen, die nach Ihrem Angebot suchen.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Sichtbarkeit = Vertrauen",
              content: "Top-Rankings bei Google erzeugen Autorität, Glaubwürdigkeit und Vertrauen, essenziell für jede Marke."
            },
            {
              title: "Nachhaltig statt kurzfristig",
              content: "Anders als Ads wirkt SEO langfristig. Einmal optimiert, liefert Ihre Seite dauerhaft Traffic."
            },
            {
              title: "Gezielte Kundengewinnung",
              content: "Sie erreichen genau die Menschen, die nach Ihnen suchen, ohne Streuverluste oder hohe Klickkosten."
            },
            {
              title: "Mehr Umsatz durch Sichtbarkeit",
              content: "Qualifizierte Besucher bedeuten mehr Anfragen, mehr Kunden, mehr Umsatz. SEO macht Sie sichtbar."
            }
          ].map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a2a4a] border border-[#2d3a5a] p-6 rounded-xl hover:border-blue-400 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-300">{benefit.title}</h3>
              <p className="text-blue-100">{benefit.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}