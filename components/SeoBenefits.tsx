'use client'
import { motion } from 'framer-motion';

export default function SeoBenefits() {
  const benefits = [
    'Individuelle Strategien statt Standard-SEO',
    'Transparente Kommunikation & Reporting',
    'Technisches Know-how trifft auf kreativen Content',
    'Langfristige Partnerschaft auf Augenhöhe',
    'Erfahrung mit lokalen & internationalen Projekten',
    'White-Hat-SEO für nachhaltige Sichtbarkeit',
    'Alle Leistungen aus einer Hand: Technik, Text & Strategie',
    'Zugang zu Top-Tools wie Sistrix, Ahrefs & Semrush',
    'Fokus auf messbare Ergebnisse & echten ROI',
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300">
            Warum CAIT Social Media die richtige Wahl ist
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Unsere Agentur verbindet Strategie, Technik und Content zu einem ganzheitlichen SEO-Ansatz, der funktioniert. Statt leeren Versprechen liefern wir echte Resultate, datenbasiert, transparent und nachhaltig.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-3 items-start bg-[#1a2a4a] border border-[#2d3a5a] p-4 rounded-lg hover:border-blue-400 transition-all"
            >
              <span className="text-blue-400 mt-0.5">✓</span>
              <p className="text-blue-100 leading-relaxed">{benefit}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}