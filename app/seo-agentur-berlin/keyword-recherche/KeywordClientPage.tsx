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
            Wir finden heraus, wonach Ihre Zielgruppe sucht, für maximale Relevanz und Reichweite in Google.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/kontakt"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all items-center gap-2"
          >
            Beratung zur Keyword-Recherche anfordern <FaArrowRight />
          </motion.a>
        </div>
      </motion.section>

      {/* Intro Experience */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-blue-800 text-lg"
      >
        <p>
          <strong>Erfahrung aus der Praxis:</strong> Als erfahrene SEO-Agentur mit Fokus auf datenbasierte Strategien helfen wir Unternehmen seit Jahren, durch gezielte Keyword-Recherche online sichtbar zu werden. Ob lokale Dienstleister wie Juweliere im Preußenpark, nationale E-Commerce-Shops oder spezialisierte Fachärzte, jedes Projekt beginnt mit den richtigen Keywords.
        </p>
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
          <p className="text-blue-800 text-lg mb-6">
            Keywords sind die Brücke zwischen dem, was Nutzer suchen, und Ihrem Angebot. Ohne strategische Recherche optimieren Sie ins Leere.
          </p>
          <p className="text-blue-800 text-lg">
            Eine erfolgreiche Keyword-Recherche verbindet drei Ebenen: <strong>Suchvolumen, Suchintention und Wettbewerb</strong>. Besonders bei sensiblen Themen wie Gesundheit, hochpreisigen Produkten oder komplexen Dienstleistungen ist es entscheidend, die Nutzerintention wirklich zu verstehen.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaSearch className="text-3xl" />,
            title: 'Suchintention verstehen',
            text: 'Wir identifizieren nicht nur Begriffe, sondern verstehen den Kontext dahinter, ob Informationssuche, Kaufabsicht oder Vergleich.'
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

      {/* Rechercheprozess */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Unser strukturierter Rechercheprozess</h2>
        <div className="space-y-10">
          {[
            'Zieldefinition & Wettbewerbsanalyse',
            'Keyword-Daten sammeln & clustern',
            'Bewertung & Priorisierung',
            'Content-Strategie ableiten',
            'Suchintention verfeinern & SERP-Typ analysieren',
            'Regelmäßige Überprüfung & Aktualisierung'
          ].map((title, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50 border border-blue-100 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-2">{index + 1}. {title}</h3>
              <p className="text-blue-800">
                {[...Array(6)].map((_, i) => {
                  const descriptions = [
                    'Gemeinsam legen wir fest, wen Sie erreichen wollen, welche Produkte/Dienstleistungen im Fokus stehen und analysieren Ihre Top-Konkurrenz auf Rankingebene.',
                    'Mit Tools wie Ahrefs, SEMrush oder Google Keyword Planner extrahieren wir relevante Begriffe und ordnen sie nach Themen und Suchintention.',
                    'Wir bewerten Keywords nach Relevanz, Suchvolumen, Wettbewerb und Conversion-Potenzial, so entstehen SEO-fokussierte Seitenstrukturen.',
                    'Aus den Clustern entstehen Blogartikel, Landingpages oder FAQs. Sie bilden die Grundlage für OnPage-Optimierung und Linkbuilding.',
                    'Google zeigt bei verschiedenen Keywords unterschiedliche SERP-Formate. Wir analysieren diese gezielt, um den Content-Typ exakt anzupassen.',
                    'Keyword-Trends verändern sich. Wir überprüfen regelmäßig Rankings, neue Begriffe und passen Ihre Content-Strategie entsprechend an.'
                  ];
                  return index === i ? descriptions[i] : null;
                })}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tools */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Unsere bewährten Tools für die Keyword-Recherche</h2>
        <ul className="text-blue-800 text-lg space-y-4 list-disc pl-6">
          <li><strong>Ahrefs & SEMrush:</strong> Wettbewerbsanalyse, Backlinkquellen, Keyword-Datenbanken</li>
          <li><strong>Google Keyword Planner:</strong> direkt aus der Quelle, ideal für SEA & SEO</li>
          <li><strong>Google Trends:</strong> Trendanalysen über Zeiträume hinweg</li>
          <li><strong>AnswerThePublic & AlsoAsked:</strong> Fragen & Cluster aus echter Nutzerperspektive</li>
          <li><strong>SurferSEO & NeuronWriter:</strong> für semantisch optimierten Content basierend auf NLP</li>
        </ul>
      </motion.section>

      {/* Praxisbeispiele */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Beispiele aus der Praxis</h2>
        <div className="space-y-6 text-blue-800 text-lg">
          <p><strong>E-Commerce:</strong> Clusterbildung für Produktkategorien wie „Sneaker Damen weiß“ oder „beste Smartwatch 2025“, mit Conversion-orientierten Landingpages.</p>
          <p><strong>Ärzte & Praxen:</strong> Kombination aus lokalen Keywords („Zahnarzt Berlin Zehlendorf“) und informativen Ratgeberseiten, unter Berücksichtigung von YMYL-Faktoren.</p>
          <p><strong>Juwelier am Preußenpark:</strong> Optimierung auf Begriffe wie „Goldankauf Berlin“, „Altgold verkaufen Steglitz“ kombiniert mit Google-Business-Profil, um lokale Sichtbarkeit zu maximieren.</p>
        </div>
      </motion.section>

      {/* CTA */}
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
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            Beratung vereinbaren <FaArrowRight />
          </motion.a>
        </div>
      </motion.section>

    </main>
  );
}
