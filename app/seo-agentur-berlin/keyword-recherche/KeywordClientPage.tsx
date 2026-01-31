'use client';
import { motion } from 'framer-motion';
import { FaArrowRight, FaSearch, FaList, FaBullseye } from 'react-icons/fa';
import Link from 'next/link';

export default function KeywordRecherchePage() {
  return (
    <main className="bg-primary min-h-screen text-white">

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-dark" />
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gold-300/10 blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full glass-panel text-gold-300 text-sm font-medium mb-6"
          >
            SEO Agentur Berlin
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-gradient-gold">Keyword-Recherche</span> für gezielte Sichtbarkeit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Wir finden heraus, wonach Ihre Zielgruppe sucht – für maximale Relevanz und Reichweite in Google.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Link
              href="/kontakt"
              className="btn-shine btn-glow inline-flex items-center gap-2 bg-gold-300 text-primary px-8 py-4 rounded-full font-semibold text-lg"
            >
              Beratung anfordern <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed">
            <strong className="text-gold-300">Erfahrung aus der Praxis:</strong> Als erfahrene SEO-Agentur mit Fokus auf datenbasierte Strategien helfen wir Unternehmen seit Jahren, durch gezielte Keyword-Recherche online sichtbar zu werden. Ob lokale Dienstleister, nationale E-Commerce-Shops oder spezialisierte Fachärzte – jedes Projekt beginnt mit den richtigen Keywords.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Warum ist Keyword-Recherche entscheidend?</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Keywords sind die Brücke zwischen dem, was Nutzer suchen, und Ihrem Angebot.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <FaSearch />, title: 'Suchintention verstehen', text: 'Wir identifizieren nicht nur Begriffe, sondern verstehen den Kontext dahinter.' },
              { icon: <FaList />, title: 'Potenzial erkennen', text: 'Welche Keywords lohnen sich? Wir analysieren Suchvolumen, Wettbewerb und Klickpreise.' },
              { icon: <FaBullseye />, title: 'Zielgruppen ansprechen', text: 'Durch Cluster und semantische Gruppen bauen wir thematische Autorität auf.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel card-hover p-6 rounded-xl text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-300/10 flex items-center justify-center text-gold-300 text-2xl mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Unser Rechercheprozess</h2>

          <div className="space-y-6">
            {[
              { title: 'Zieldefinition & Wettbewerbsanalyse', desc: 'Gemeinsam legen wir fest, wen Sie erreichen wollen und analysieren Ihre Top-Konkurrenz.' },
              { title: 'Keyword-Daten sammeln & clustern', desc: 'Mit Tools wie Ahrefs und SEMrush extrahieren wir relevante Begriffe.' },
              { title: 'Bewertung & Priorisierung', desc: 'Wir bewerten Keywords nach Relevanz, Suchvolumen und Conversion-Potenzial.' },
              { title: 'Content-Strategie ableiten', desc: 'Aus den Clustern entstehen Blogartikel, Landingpages oder FAQs.' },
              { title: 'Regelmäßige Überprüfung', desc: 'Keyword-Trends verändern sich. Wir überprüfen regelmäßig und passen an.' }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gold-300/20 flex items-center justify-center text-gold-300 font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel rounded-2xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Jetzt Keyword-Recherche starten</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Gewinnen Sie langfristig Sichtbarkeit und bauen Sie eine Content-Strategie mit echtem Rankingpotenzial auf.
            </p>
            <Link
              href="/kontakt"
              className="btn-shine btn-glow inline-flex items-center gap-2 bg-gold-300 text-primary px-8 py-4 rounded-full font-semibold text-lg"
            >
              Beratung vereinbaren <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
