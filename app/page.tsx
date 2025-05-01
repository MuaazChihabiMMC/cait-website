'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaAd, FaLaptopCode, FaHashtag, FaChartLine, FaLightbulb, FaUsers, FaMobileAlt, FaShoppingCart, FaArrowRight, FaPaintBrush, FaCode, FaServer } from 'react-icons/fa';
export default function HomePage() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-7xl mx-auto bg-white text-blue-900 space-y-24">
      {/* Hero Section with Enhanced Animation */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-gradient-to-b from-blue-50 to-white rounded-3xl px-6 relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
              <motion.span 
                className="text-blue-600"
                animate={{ 
                  textShadow: "0 0 10px rgba(37, 99, 235, 0.3)"
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Digitale Marketinglösungen
              </motion.span> für nachhaltigen Erfolg
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-blue-800"
          >
            Cait Marketing - Ihre Full-Service Agentur für messbare Ergebnisse in <span className="font-semibold text-blue-600">SEO</span>, <span className="font-semibold text-blue-500">Google Ads</span>, <span className="font-semibold text-blue-400">Webdesign</span> und <span className="font-semibold text-blue-300">Social Media</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/kontakt"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all items-center gap-2"
            >
              Kostenlose Erstberatung anfordern
              <motion.span
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* USP Section with Staggered Animations */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Warum Unternehmen uns vertrauen
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaChartLine className="text-3xl" />,
              title: "Datengetriebene Strategien",
              content: "Wir basieren jede Entscheidung auf konkreten Daten und Analysen, nicht auf Vermutungen. Durch fortlaufende Optimierung erreichen wir maximale Ergebnisse für Ihr Budget."
            },
            {
              icon: <FaLightbulb className="text-3xl" />,
              title: "Branchenspezifisches Know-how",
              content: "Über 10 Jahre Erfahrung in verschiedenen Branchen von E-Commerce über Handwerk bis zu B2B-Dienstleistungen. Wir verstehen Ihre spezifischen Herausforderungen."
            },
            {
              icon: <FaUsers className="text-3xl" />,
              title: "Transparente Zusammenarbeit",
              content: "Klare Kommunikation und regelmäßige Berichte zeigen Ihnen genau, was wir erreichen. Sie behalten stets den Überblick über Ihre Marketingaktivitäten."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(37, 99, 235, 0.1)"
              }}
              className="bg-white p-8 rounded-xl shadow-md border border-blue-100 text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-800">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SEO Section with Enhanced Content */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-50 rounded-3xl overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="p-10 lg:p-14">
            <motion.div 
              className="flex items-center mb-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaSearch className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold">Suchmaschinenoptimierung (SEO)</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-6 text-blue-800"
            >
              <strong>93% aller Online-Erlebnisse beginnen mit einer Suchmaschine (HubSpot).</strong> SEO ist der nachhaltigste Weg, um qualifizierten Traffic auf Ihre Website zu leiten. Im Gegensatz zu bezahlter Werbung generieren Sie hier <strong>kostenlose Besucher</strong>, die aktiv nach Ihren Lösungen suchen.
            </motion.p>
            
            <div className="space-y-8">
              {[
                {
                  title: "1. OnPage-Optimierung",
                  content: "Die technische und inhaltliche Optimierung Ihrer Website bildet das Fundament für erfolgreiches SEO:",
                  items: [
                    "Umfassende Keyword-Recherche mit Fokus auf kommerzielle und informative Suchintentionen",
                    "Content-Strategie mit thematischen Clustern für bessere thematische Relevanz",
                    "Technische Optimierung aller Meta-Tags, URL-Strukturen und Heading-Hierarchien",
                    "Ladezeitenoptimierung durch Code-Minification, Caching und Bildkompression",
                    "Mobile Optimierung mit Responsive Design für alle Geräteklassen"
                  ]
                },
                {
                  title: "2. OffPage-Optimierung",
                  content: "Der Aufbau von Autorität und Vertrauen durch hochwertige Backlinks:",
                  items: [
                    "Natürlicher Linkaufbau durch Content-Marketing und PR-Arbeit",
                    "Lokale SEO für regionale Unternehmen mit Google My Business Optimierung",
                    "Strategisches Brand Building durch Markenerwähnungen",
                    "Regelmäßiges Link-Audit zur Identifikation toxischer Links"
                  ]
                },
                {
                  title: "3. Technisches SEO",
                  content: "Die technische Infrastruktur für maximale Crawlbarkeit und Indexierung:",
                  items: [
                    "Implementierung von strukturierten Daten (Schema.org)",
                    "Optimierung der Crawling-Effizienz durch XML-Sitemaps",
                    "Strategische Steuerung der Indexierung mit robots.txt",
                    "Fachgerechte Durchführung von Website-Migrationen"
                  ],
                  example: "Ein mittelständischer B2B-Anbieter steigerte seinen organischen Traffic um 240% in 9 Monaten durch unsere ganzheitliche SEO-Strategie."
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h3 className="font-bold text-xl mb-3">{section.title}</h3>
                  <p className="text-blue-800 mb-4">{section.content}</p>
                  <ul className="list-disc list-inside space-y-3 pl-4 text-blue-800">
                    {section.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  {section.example && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-200"
                    >
                      <p className="text-blue-800"><strong>Erfolgsbeispiel:</strong> {section.example}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 5px 15px rgba(37, 99, 235, 0.3)"
                }}
                href="/seo"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:shadow-xl transition flex items-center gap-2"
              >
                SEO-Strategie entwickeln
                <FaArrowRight />
              </motion.a>
              <p className="text-sm text-blue-700 mt-2">Durchschnittliche Traffic-Steigerung unserer Kunden: <strong>+187%</strong> in 12 Monaten</p>
            </motion.div>
          </div>
          
          <div className="h-full min-h-[500px] hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-blue-100 flex items-center justify-center rounded-l-3xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative z-10 text-center p-8"
              >
                <div className="text-6xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">SEO-Erfolgsmessung</h3>
                <ul className="text-left max-w-xs mx-auto space-y-2 text-blue-900">
                  {[
                    "Organische Sichtbarkeit",
                    "Keyword-Rankings",
                    "Klickrate (CTR)",
                    "Conversions",
                    "Backlink-Wachstum"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="text-blue-600">✔</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Google Ads Section with Enhanced Animations */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl overflow-hidden border border-blue-100"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-full min-h-[500px] order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-blue-100 flex items-center justify-center rounded-r-3xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-l from-blue-400 to-blue-600"></div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative z-10 text-center p-8"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Google Ads Dashboard</h3>
                <ul className="text-left max-w-xs mx-auto space-y-2 text-blue-900">
                  {[
                    "Kosten pro Conversion",
                    "Klickrate (CTR)",
                    "Conversion Rate",
                    "Qualitätsfaktor",
                    "Return on Ad Spend"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="text-blue-600">✔</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="p-10 lg:p-14 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-6"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaAd className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold">Google Ads Management</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg mb-6 text-blue-800"
            >
              <strong>Unternehmen verdienen durchschnittlich $2 für jeden $1, den sie für Google Ads ausgeben.</strong> Unsere zielgerichteten Kampagnen bringen sofort Sichtbarkeit und messbare Conversions - Sie zahlen nur für tatsächliche Klicks.
            </motion.p>
            
            <div className="space-y-8">
              {[
                {
                  title: "1. Search Kampagnen",
                  content: "Textbasierte Anzeigen bei relevanten Suchanfragen Ihrer Zielgruppe:",
                  items: [
                    "Präzise Keyword-Strategie mit verschiedenen Match-Types",
                    "Hochkonvertierende Anzeigentexte mit USP-Hervorhebungen",
                    "Optimierte Landingpages für maximale Conversion Rate",
                    "Strategischer Einsatz von Smart Bidding für optimale Ergebnisse"
                  ]
                },
                {
                  title: "2. Display & Video Kampagnen",
                  content: "Visuelle Werbung zur Steigerung der Markenbekanntheit:",
                  items: [
                    "Zielgruppen-Targeting nach Demografie und Interessen",
                    "Remarketing zur Wiedergewinnung von Besuchern",
                    "YouTube Videoanzeigen für verschiedene Marketingziele",
                    "A/B-Testing verschiedener Bannerformate"
                  ]
                },
                {
                  title: "3. Shopping Kampagnen",
                  content: "Produktanzeigen direkt in den Suchergebnissen für E-Commerce:",
                  items: [
                    "Optimierung der Produktdaten-Feeds",
                    "Logische Produktgruppierung für gezieltes Bidding",
                    "Dynamisches Remarketing für angesehene Produkte",
                    "Nutzung von Performance Max für maximale Reichweite"
                  ],
                  example: "Ein E-Commerce-Unternehmen reduzierte seine Customer Acquisition Costs um 35% bei gleichzeitiger Steigerung der Conversion Rate um 22%."
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h3 className="font-bold text-xl mb-3">{section.title}</h3>
                  <p className="text-blue-800 mb-4">{section.content}</p>
                  <ul className="list-disc list-inside space-y-3 pl-4 text-blue-800">
                    {section.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  {section.example && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-200"
                    >
                      <p className="text-blue-800"><strong>Erfolgsbeispiel:</strong> {section.example}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 5px 15px rgba(37, 99, 235, 0.3)"
                }}
                href="/google-ads"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:shadow-xl transition flex items-center gap-2"
              >
                Google Ads Strategie anfordern
                <FaArrowRight />
              </motion.a>
              <p className="text-sm text-blue-700 mt-2">Durchschnittliche Steigerung der Conversion Rate: <strong>+35%</strong></p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section with Enhanced Animation */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-blue-600 text-white rounded-3xl p-12 text-center relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Starten Sie jetzt durch mit Cait Marketing
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Unser Expertenteam steht bereit, um Ihr Business auf das nächste Level zu heben. Vereinbaren Sie ein kostenloses Beratungsgespräch und erfahren Sie, wie wir Ihnen zu mehr Sichtbarkeit, Leads und Umsatz verhelfen können.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 20px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/kontakt"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition flex items-center gap-2"
            >
              Jetzt Termin vereinbaren
              <motion.span
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/leistungen"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition flex items-center gap-2"
            >
              Leistungen im Detail
              <FaArrowRight />
            </motion.a>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-blue-100"
          >
            Oder rufen Sie uns direkt an: <span className="font-semibold">+49 123 456 789</span>
          </motion.p>
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-gradient-to-b from-blue-50 to-white rounded-3xl px-6 relative overflow-hidden"
      >
        {/* Background animation elements */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <motion.span 
              className="text-blue-600"
              animate={{ 
                textShadow: "0 0 10px rgba(37, 99, 235, 0.3)"
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Komplette Digital-Lösungen
            </motion.span> für Ihr Business
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-blue-800"
          >
            Cait Marketing - Ihr Full-Service Partner für <span className="font-semibold text-blue-600">Webentwicklung</span>, <span className="font-semibold text-blue-500">Design</span>, <span className="font-semibold text-blue-400">Marketing</span> und <span className="font-semibold text-blue-300">Social Media</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/kontakt"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              Kostenlos beraten lassen
              <motion.span
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Webentwicklung Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-50 rounded-3xl overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="p-10 lg:p-14">
            <motion.div 
              className="flex items-center mb-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaCode className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold">Professionelle Webentwicklung</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg mb-6 text-blue-800"
            >
              <strong>Eine moderne Website ist Ihr digitales Aushängeschild.</strong> Wir entwickeln hochperformante, sichere und skalierbare Webanwendungen mit modernsten Technologien.
            </motion.p>
            
            <div className="space-y-8">
              {[
                {
                  title: "Frontend-Entwicklung",
                  content: "Ansprechende Benutzeroberflächen mit modernen Frameworks:",
                  items: [
                        "React.js/Next.js für dynamische Single-Page-Applications",
                        "Mobile-First Responsive Design",
                        "Progressive Web Apps (PWA) für App-ähnliches Erlebnis",
                        "Barrierefreie Umsetzung (WCAG 2.1)",
                        "Ladezeitenoptimierung unter 2 Sekunden"
                  ],
                  icon: <FaMobileAlt className="text-blue-500" />
                },
                {
                  title: "Backend-Entwicklung",
                  content: "Leistungsstarke Server-Architekturen und APIs:",
                  items: [
                        "Node.js mit Express oder NestJS",
                        "Datenbanken: MongoDB, PostgreSQL, MySQL",
                        "RESTful und GraphQL APIs",
                        "Microservices-Architekturen",
                        "Serverless-Funktionen (AWS Lambda)"
                  ],
                  icon: <FaServer className="text-blue-500" />
                },
                {
                  title: "E-Commerce Lösungen",
                  content: "Hochverfügbare Online-Shops mit hoher Conversion-Rate:",
                  items: [
                        "Shopify & WooCommerce Integrationen",
                        "Custom Shop-Entwicklung",
                        "Zahlungsgateways (Stripe, PayPal)",
                        "Warenwirtschaftssystem-Anbindung",
                        "Checkout-Optimierung"
                  ],
                  example: "Ein Mode-Label steigerte seinen Online-Umsatz um 150% nach Relaunch durch unser Team."
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white p-4 rounded-lg border border-blue-100"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {section.icon && section.icon}
                    <h3 className="font-bold text-xl">{section.title}</h3>
                  </div>
                  <p className="text-blue-800 mb-3">{section.content}</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-blue-800">
                    {section.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  {section.example && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 p-3 bg-blue-100 rounded border border-blue-200"
                    >
                      <p className="text-blue-800"><strong>Erfolgsbeispiel:</strong> {section.example}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="h-full min-h-[500px] hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-blue-100 flex items-center justify-center rounded-l-3xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative z-10 text-center p-8"
              >
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Unsere Technologien</h3>
                <ul className="text-left max-w-xs mx-auto space-y-2 text-blue-900">
                  {[
                    "React.js / Next.js",
                    "Node.js / Express",
                    "TypeScript",
                    "MongoDB / PostgreSQL",
                    "AWS / Google Cloud",
                    "Docker / Kubernetes"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="text-blue-600">✔</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Design Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl overflow-hidden border border-blue-100"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-full min-h-[500px] order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-blue-50 flex items-center justify-center rounded-r-3xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-l from-blue-400 to-blue-600"></div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative z-10 text-center p-8"
              >
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Design-Prozess</h3>
                <ol className="text-left max-w-xs mx-auto space-y-3 text-blue-900">
                  {[
                    "1. Analyse & Konzept",
                    "2. Wireframing",
                    "3. Moodboard",
                    "4. Design-Entwurf",
                    "5. Feedback & Iteration",
                    "6. Finale Umsetzung"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="p-10 lg:p-14 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-6"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaPaintBrush className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold">Modernes Webdesign</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg mb-6 text-blue-800"
            >
              <strong>Gutes Design ist mehr als nur Ästhetik.</strong> Wir schaffen visuelle Erlebnisse, die Nutzer begeistern und Conversion-Raten steigern.
            </motion.p>
            
            <div className="space-y-8">
              {[
                {
                  title: "UI/UX Design",
                  content: "Nutzerzentrierte Gestaltung für beste User Experience:",
                  items: [
                    "Mobile-First Responsive Design",
                    "Prototyping & User Flows",
                    "A/B Testing von Designvarianten",
                    "Conversion-Optimierte Layouts",
                    "Barrierefreie Gestaltung (WCAG)"
                  ]
                },
                {
                  title: "Brand Identity",
                  content: "Konsistente Markenauftritte über alle Kanäle:",
                  items: [
                    "Logo-Design & Corporate Identity",
                    "Farbpaletten & Typografie",
                    "Bildsprache & Fotostil",
                    "Tone of Voice & Markenbotschaft",
                    "Styleguides & Designsysteme"
                  ]
                },
                {
                  title: "Motion Design",
                  content: "Dynamische Elemente für mehr Engagement:",
                  items: [
                    "Mikro-Interaktionen",
                    "Animierte Übergänge",
                    "Scroll-Animationen",
                    "Lottie-Animationen",
                    "Video-Content"
                  ],
                  example: "Ein Fintech-Startup erhöhte seine Conversion Rate um 40% durch unser optimiertes UI-Design."
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white p-4 rounded-lg border border-blue-100"
                >
                  <h3 className="font-bold text-xl mb-2">{section.title}</h3>
                  <p className="text-blue-800 mb-3">{section.content}</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-blue-800">
                    {section.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  {section.example && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 p-3 bg-blue-100 rounded border border-blue-200"
                    >
                      <p className="text-blue-800"><strong>Erfolgsbeispiel:</strong> {section.example}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-50 rounded-3xl overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="p-10 lg:p-14">
            <motion.div 
              className="flex items-center mb-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaHashtag className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold">Social Media Management</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg mb-6 text-blue-800"
            >
              <strong>Social Media ist das neue Schaufenster Ihres Unternehmens.</strong> Wir entwickeln Strategien, die echte Communities aufbauen und messbare Ergebnisse liefern.
            </motion.p>
            
            <div className="space-y-8">
              {[
                {
                  title: "Content-Strategie",
                  content: "Ganzheitliche Planung für maximale Reichweite:",
                  items: [
                    "Plattformspezifische Content-Konzepte",
                    "Redaktionsplan & Content-Kalender",
                    "Community Management Strategie",
                    "Influencer-Kooperationen",
                    "Performance-Analyse & Optimierung"
                  ]
                },
                {
                  title: "Content-Produktion",
                  content: "Professionelle Erstellung von Inhalten:",
                  items: [
                    "Fotografie & Videoproduktion",
                    "Grafikdesign für Posts & Stories",
                    "Animierte Content-Formate",
                    "User-Generated Content Kampagnen",
                    "Live-Streaming Konzepte"
                  ]
                },
                {
                  title: "Paid Social Advertising",
                  content: "Zielgruppengenaue Werbekampagnen:",
                  items: [
                    "Facebook & Instagram Ads",
                    "LinkedIn B2B Marketing",
                    "TikTok & Pinterest Ads",
                    "Remarketing Strategien",
                    "Conversion-Optimierung"
                  ],
                  example: "Eine Beauty-Marke steigerte ihren Umsatz über Social Media um 320% durch unsere Kampagnen."
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white p-4 rounded-lg border border-blue-100"
                >
                  <h3 className="font-bold text-xl mb-2">{section.title}</h3>
                  <p className="text-blue-800 mb-3">{section.content}</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-blue-800">
                    {section.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  {section.example && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 p-3 bg-blue-100 rounded border border-blue-200"
                    >
                      <p className="text-blue-800"><strong>Erfolgsbeispiel:</strong> {section.example}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="h-full min-h-[500px] hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-blue-100 flex items-center justify-center rounded-l-3xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative z-10 text-center p-8"
              >
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Social Media KPIs</h3>
                <ul className="text-left max-w-xs mx-auto space-y-2 text-blue-900">
                  {[
                    "Engagement Rate",
                    "Reichweite & Impressionen",
                    "Follower-Wachstum",
                    "Website-Klicks",
                    "Conversion Rate",
                    "Return on Ad Spend"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="text-blue-600">✔</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-blue-600 text-white rounded-3xl p-12 text-center relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Bereit für Ihre digitale Transformation?
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Kontaktieren Sie uns für ein kostenloses Beratungsgespräch und lassen Sie uns gemeinsam Ihre digitale Strategie entwickeln.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 20px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/kontakt"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition flex items-center gap-2"
            >
              Jetzt Termin vereinbaren
              <motion.span
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/leistungen"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition flex items-center gap-2"
            >
              Alle Leistungen
              <FaArrowRight />
            </motion.a>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-blue-100"
          >
            Telefon: <span className="font-semibold">+49 123 456 789</span> | Email: <span className="font-semibold">info@cait-marketing.de</span>
          </motion.p>
        </div>
      </motion.section>
    </main>
  );
}