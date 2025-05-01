'use client';
import { motion } from 'framer-motion';
import { FaArrowRight, FaSearch, FaList, FaBullseye } from 'react-icons/fa';

export default function KeywordRecherchePage() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-7xl mx-auto bg-white text-blue-900 space-y-24">

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-gradient-to-b from-blue-100 to-white rounded-3xl px-6 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-blue-600">Keyword-Recherche</span> für gezielte Sichtbarkeit
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 text-blue-800">
            Wir finden heraus, wonach Ihre Zielgruppe sucht – für maximale Relevanz und Reichweite in Google.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/kontakt"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            Beratung zur Keyword-Recherche anfordern <FaArrowRight />
          </motion.a>
        </div>
      </motion.section>

      {/* Warum ist Keyword-Recherche wichtig */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Warum ist Keyword-Recherche so entscheidend?</h2>
          <p className="text-blue-800 text-lg">
            Keywords sind die Brücke zwischen dem, was Nutzer suchen, und Ihrem Angebot. Ohne strategische Recherche optimieren Sie ins Leere.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaSearch className="text-3xl" />,
            title: 'Suchintention verstehen',
            text: 'Wir identifizieren nicht nur Begriffe, sondern verstehen den Kontext dahinter – ob Informationssuche, Kaufabsicht oder Vergleich.'
          },{
            icon: <FaList className="text-3xl" />,
            title: 'Potenzial erkennen',
            text: 'Welche Keywords lohnen sich wirklich? Wir analysieren Suchvolumen, Wettbewerb und Klickpreise.'
          },{
            icon: <FaBullseye className="text-3xl" />,
            title: 'Zielgruppen präzise ansprechen',
            text: 'Durch Cluster und semantische Gruppen bauen wir thematische Autorität auf Ihrer Website auf.'
          }].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-blue-100 rounded-xl p-6 shadow-md text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-blue-800">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Unser Ablauf */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Unser strukturierter Rechercheprozess</h2>
        <div className="space-y-10">
          {[{
            title: '1. Zieldefinition & Wettbewerbsanalyse',
            description: 'Gemeinsam legen wir fest, wen Sie erreichen wollen, welche Produkte/Dienstleistungen im Fokus stehen und analysieren Ihre Top-Konkurrenz auf Rankingebene.'
          },{
            title: '2. Keyword-Daten sammeln & clustern',
            description: 'Mit Tools wie Ahrefs, SEMrush oder Google Keyword Planner extrahieren wir relevante Begriffe und ordnen sie nach Themen und Suchintention.'
          },{
            title: '3. Bewertung & Priorisierung',
            description: 'Wir bewerten Keywords nach Relevanz, Suchvolumen, Wettbewerb und Conversion-Potenzial – so entstehen SEO-fokussierte Seitenstrukturen.'
          },{
            title: '4. Content-Strategie ableiten',
            description: 'Aus den Clustern entstehen Blogartikel, Landingpages oder FAQs. Sie bilden die Grundlage für OnPage-Optimierung und Linkbuilding.'
          }].map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50 border border-blue-100 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-blue-800">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-blue-600 text-white rounded-3xl p-12 text-center relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto relative">
          <h3 className="text-3xl font-bold mb-4">Jetzt Keyword-Recherche starten</h3>
          <p className="text-xl mb-8">
            Gewinnen Sie langfristig Sichtbarkeit und bauen Sie eine Content-Strategie mit echtem Rankingpotenzial auf. Wir begleiten Sie Schritt für Schritt.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/kontakt"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            Beratung vereinbaren <FaArrowRight />
          </motion.a>
        </div>
      </motion.section>

    </main>
  );
}
