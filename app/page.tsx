'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaAd, FaLaptopCode, FaHashtag, FaChartLine, FaLightbulb, FaUsers, FaMobileAlt, FaShoppingCart, FaArrowRight, FaPaintBrush, FaCode, FaServer } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-7xl mx-auto bg-white text-blue-900 space-y-12 md:space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white rounded-3xl px-4 md:px-6 relative overflow-hidden"
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-blue-900">
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
            className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-800"
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
              className="inline-block bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all items-center gap-2 mx-auto"
            >
              Kostenlose Erstberatung
              <motion.span
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
                className="hidden sm:inline-block"
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* USP Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Warum Unternehmen uns vertrauen
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
              className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-blue-100 text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-800 text-sm md:text-base">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

 {/* SEO Section - Fully Responsive */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="bg-white rounded-3xl overflow-hidden border border-blue-100"
>
  <div className="flex flex-col lg:flex-row">
    {/* Content Column - Always visible */}
    <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 order-2 lg:order-1">
      <motion.div 
        className="flex items-center mb-4 md:mb-6"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
          <FaSearch className="text-blue-600 text-xl md:text-2xl" />
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold break-words max-w-full">
  Suchmaschinenoptimierung (SEO)
</h2>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-base md:text-lg mb-6 text-blue-600"
      >
        <strong>93% aller Online-Erlebnisse beginnen mit einer Suchmaschine .</strong> SEO ist der nachhaltigste Weg, um qualifizierten Traffic auf Ihre Website zu leiten.
      </motion.p>
      
      <div className="space-y-6">
        {[
          {
            title: "1. OnPage-Optimierung",
            content: "Technische und inhaltliche Optimierung Ihrer Website:",
            items: [
              "Umfassende Keyword-Recherche",
              "Content-Strategie mit Clustern",
              "Technische Meta-Tag Optimierung",
              "Ladezeitenoptimierung",
              "Mobile Optimierung"
            ]
          },
          {
            title: "2. OffPage-Optimierung",
            content: "Aufbau von Autorität durch Backlinks:",
            items: [
              "Natürlicher Linkaufbau",
              "Lokale SEO Optimierung",
              "Strategisches Brand Building",
              "Regelmäßige Link-Audits"
            ]
          }
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-blue-50 p-4 md:p-5 rounded-lg"
          >
            <h3 className="font-bold text-lg md:text-xl mb-3 text-blue-700">{section.title}</h3>
            <p className="text-blue-800 mb-3">{section.content}</p>
            <ul className="space-y-2 pl-5">
              {section.items.map((item, i) => (
                <motion.li 
                  key={i}
                  className="text-blue-800 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full pl-4"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="/seo"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-3 md:px-8 md:py-3.5 transition-all w-full sm:w-auto"
        >
          SEO-Strategie entwickeln
          <FaArrowRight className="ml-2" />
        </motion.a>
        <p className="text-sm text-blue-700 mt-3 text-center sm:text-left">
          Durchschnittliche Traffic-Steigerung: <span className="font-semibold">+187%</span> in 12 Monaten
        </p>
      </motion.div>
    </div>

    {/* Graphic Column - Hidden on mobile */}
    <div className="w-full lg:w-1/2 order-1 lg:order-2 hidden lg:block relative min-h-[300px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">📊</div>
          <h3 className="text-xl font-bold mb-4 text-blue-900">SEO Erfolgsmessung</h3>
          <ul className="space-y-3 text-left">
            {[
              "Organische Sichtbarkeit +240%",
              "Keyword-Rankings Top 3",
              "Klickrate (CTR) +35%",
              "Conversion Steigerung"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</motion.section>

      {/* Google Ads Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl overflow-hidden border border-blue-100"
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="h-full min-h-[300px] md:min-h-[500px] order-2 lg:order-1 relative">
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
                className="relative z-10 text-center p-6 md:p-8"
              >
                <div className="text-4xl md:text-6xl mb-3 md:mb-4">🔍</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-900">Google Ads Dashboard</h3>
                <ul className="text-left max-w-xs mx-auto space-y-2 text-blue-900 text-sm md:text-base">
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
          
          <div className="p-6 md:p-10 lg:p-14 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-4 md:mb-6"
            >
              <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                <FaAd className="text-blue-600 text-xl md:text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Google Ads Management</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg mb-4 md:mb-6 text-blue-800"
            >
              <strong>Unternehmen verdienen durchschnittlich $2 für jeden $1, den sie für Google Ads ausgeben.</strong> Unsere zielgerichteten Kampagnen bringen sofort Sichtbarkeit.
            </motion.p>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "1. Search Kampagnen",
                  content: "Textbasierte Anzeigen bei relevanten Suchanfragen Ihrer Zielgruppe:",
                  items: [
                    "Präzise Keyword-Strategie",
                    "Hochkonvertierende Anzeigentexte",
                    "Optimierte Landingpages",
                    "Smart Bidding Strategien"
                  ]
                },
                {
                  title: "2. Display & Video Kampagnen",
                  content: "Visuelle Werbung zur Steigerung der Markenbekanntheit:",
                  items: [
                    "Zielgruppen-Targeting",
                    "Remarketing",
                    "YouTube Videoanzeigen",
                    "A/B-Testing"
                  ]
                },
                {
                  title: "3. Shopping Kampagnen",
                  content: "Produktanzeigen direkt in den Suchergebnissen für E-Commerce:",
                  items: [
                    "Optimierung der Produktdaten",
                    "Produktgruppierung",
                    "Dynamisches Remarketing",
                    "Performance Max"
                  ],
                  example: "Ein E-Commerce-Unternehmen reduzierte seine Customer Acquisition Costs um 35%."
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">{section.title}</h3>
                  <p className="text-blue-800 text-sm md:text-base mb-3 md:mb-4">{section.content}</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-blue-800 text-sm md:text-base">
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
                      className="mt-3 md:mt-4 p-3 md:p-4 bg-blue-100 rounded-lg border border-blue-200 text-sm md:text-base"
                    >
                      <p className="text-blue-800"><strong>Erfolgsbeispiel:</strong> {section.example}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 md:mt-10"
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
                className="bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow hover:shadow-xl transition flex items-center gap-2 text-sm md:text-base w-full sm:w-auto justify-center"
              >
                Google Ads Strategie anfordern
                <FaArrowRight />
              </motion.a>
              <p className="text-xs md:text-sm text-blue-700 mt-2 text-center sm:text-left">Durchschnittliche Steigerung der Conversion Rate: <strong>+35%</strong></p>
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
        className="bg-blue-600 text-white rounded-3xl p-6 md:p-12 text-center relative overflow-hidden"
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
          <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Starten Sie jetzt durch mit Cait Marketing
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl mb-6 md:mb-8"
          >
            Unser Expertenteam steht bereit, um Ihr Business auf das nächste Level zu heben. Vereinbaren Sie ein kostenloses Beratungsgespräch.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 20px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/kontakt"
              className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition flex items-center gap-2 text-sm md:text-base justify-center"
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
                className="hidden sm:inline-block"
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
              className="bg-transparent border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition flex items-center gap-2 text-sm md:text-base justify-center"
            >
              Leistungen im Detail
              <FaArrowRight className="hidden sm:inline-block" />
            </motion.a>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-4 md:mt-6 text-blue-100 text-sm md:text-base"
          >
            Oder rufen Sie uns direkt an: <span className="font-semibold">+49 123 456 789</span>
          </motion.p>
        </div>
      </motion.section>

      {/* Digital Solutions Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white rounded-3xl px-4 md:px-6 relative overflow-hidden"
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
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
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
            className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-800"
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
              className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
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
                className="hidden sm:inline-block"
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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="p-6 md:p-10 lg:p-14">
            <motion.div 
              className="flex items-center mb-4 md:mb-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                <FaCode className="text-blue-600 text-xl md:text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Professionelle Webentwicklung</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg mb-4 md:mb-6 text-blue-800"
            >
              <strong>Eine moderne Website ist Ihr digitales Aushängeschild.</strong> Wir entwickeln hochperformante, sichere und skalierbare Webanwendungen.
            </motion.p>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "Frontend-Entwicklung",
                  content: "Ansprechende Benutzeroberflächen mit modernen Frameworks:",
                  items: [
                    "React.js/Next.js",
                    "Mobile-First Responsive Design",
                    "Progressive Web Apps",
                    "Barrierefreie Umsetzung",
                    "Ladezeitenoptimierung"
                  ],
                  icon: <FaMobileAlt className="text-blue-500" />
                },
                {
                  title: "Backend-Entwicklung",
                  content: "Leistungsstarke Server-Architekturen und APIs:",
                  items: [
                    "Node.js mit Express",
                    "Datenbanken: MongoDB, PostgreSQL",
                    "RESTful und GraphQL APIs",
                    "Microservices-Architekturen",
                    "Serverless-Funktionen"
                  ],
                  icon: <FaServer className="text-blue-500" />
                },
                {
                  title: "E-Commerce Lösungen",
                  content: "Hochverfügbare Online-Shops mit hoher Conversion-Rate:",
                  items: [
                    "Shopify & WooCommerce",
                    "Custom Shop-Entwicklung",
                    "Zahlungsgateways",
                    "Warenwirtschaftssystem-Anbindung"
                  ],
                  example: "Ein Mode-Label steigerte seinen Online-Umsatz um 150% nach Relaunch."
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
                    <h3 className="font-bold text-lg md:text-xl">{section.title}</h3>
                  </div>
                  <p className="text-blue-800 text-sm md:text-base mb-3">{section.content}</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-blue-800 text-sm md:text-base">
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
                      className="mt-3 p-3 bg-blue-100 rounded border border-blue-200 text-sm md:text-base"
                    >
                      <p className="text-blue-800"><strong>Erfolgsbeispiel:</strong> {section.example}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="h-full min-h-[300px] md:min-h-[500px] hidden lg:block relative">
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
                className="relative z-10 text-center p-6 md:p-8"
              >
                <div className="text-4xl md:text-6xl mb-3 md:mb-4">💻</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-900">Unsere Technologien</h3>
                <ul className="text-left max-w-xs mx-auto space-y-2 text-blue-900 text-sm md:text-base">
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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="h-full min-h-[300px] md:min-h-[500px] order-2 lg:order-1 relative">
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
                className="relative z-10 text-center p-6 md:p-8"
              >
                <div className="text-4xl md:text-6xl mb-3 md:mb-4">🎨</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-900">Design-Prozess</h3>
                <ol className="text-left max-w-xs mx-auto space-y-3 text-blue-900 text-sm md:text-base">
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
          
          <div className="p-6 md:p-10 lg:p-14 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-4 md:mb-6"
            >
              <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                <FaPaintBrush className="text-blue-600 text-xl md:text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Modernes Webdesign</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg mb-4 md:mb-6 text-blue-800"
            >
              <strong>Gutes Design ist mehr als nur Ästhetik.</strong> Wir schaffen visuelle Erlebnisse, die Nutzer begeistern und Conversion-Raten steigern.
            </motion.p>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "UI/UX Design",
                  content: "Nutzerzentrierte Gestaltung für beste User Experience:",
                  items: [
                    "Mobile-First Responsive Design",
                    "Prototyping & User Flows",
                    "A/B Testing",
                    "Conversion-Optimierte Layouts",
                    "Barrierefreie Gestaltung"
                  ]
                },
                {
                  title: "Brand Identity",
                  content: "Konsistente Markenauftritte über alle Kanäle:",
                  items: [
                    "Logo-Design & CI",
                    "Farbpaletten & Typografie",
                    "Bildsprache & Fotostil",
                    "Tone of Voice",
                    "Styleguides"
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
                  <h3 className="font-bold text-lg md:text-xl mb-2">{section.title}</h3>
                  <p className="text-blue-800 text-sm md:text-base mb-3">{section.content}</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-blue-800 text-sm md:text-base">
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
                      className="mt-3 p-3 bg-blue-100 rounded border border-blue-200 text-sm md:text-base"
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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="p-6 md:p-10 lg:p-14">
            <motion.div 
              className="flex items-center mb-4 md:mb-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                <FaHashtag className="text-blue-600 text-xl md:text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Social Media Management</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg mb-4 md:mb-6 text-blue-800"
            >
              <strong>Social Media ist das neue Schaufenster Ihres Unternehmens.</strong> Wir entwickeln Strategien, die echte Communities aufbauen.
            </motion.p>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "Content-Strategie",
                  content: "Ganzheitliche Planung für maximale Reichweite:",
                  items: [
                    "Plattformspezifische Content-Konzepte",
                    "Redaktionsplan & Content-Kalender",
                    "Community Management",
                    "Influencer-Kooperationen",
                    "Performance-Analyse"
                  ]
                },
                {
                  title: "Content-Produktion",
                  content: "Professionelle Erstellung von Inhalten:",
                  items: [
                    "Fotografie & Videoproduktion",
                    "Grafikdesign für Posts",
                    "Animierte Content-Formate",
                    "User-Generated Content",
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
                  <h3 className="font-bold text-lg md:text-xl mb-2">{section.title}</h3>
                  <p className="text-blue-800 text-sm md:text-base mb-3">{section.content}</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-blue-800 text-sm md:text-base">
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
                      className="mt-3 p-3 bg-blue-100 rounded border border-blue-200 text-sm md:text-base"
                    >
                      <p className="text-blue-800"><strong>Erfolgsbeispiel:</strong> {section.example}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="h-full min-h-[300px] md:min-h-[500px] hidden lg:block relative">
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
                className="relative z-10 text-center p-6 md:p-8"
              >
                <div className="text-4xl md:text-6xl mb-3 md:mb-4">📱</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-900">Social Media KPIs</h3>
                <ul className="text-left max-w-xs mx-auto space-y-2 text-blue-900 text-sm md:text-base">
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
        className="bg-blue-600 text-white rounded-3xl p-6 md:p-12 text-center relative overflow-hidden"
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
          <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Bereit für Ihre digitale Transformation?
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl mb-6 md:mb-8"
          >
            Kontaktieren Sie uns für ein kostenloses Beratungsgespräch und lassen Sie uns gemeinsam Ihre digitale Strategie entwickeln.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 20px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/kontakt"
              className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition flex items-center gap-2 text-sm md:text-base justify-center"
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
                className="hidden sm:inline-block"
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
              className="bg-transparent border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition flex items-center gap-2 text-sm md:text-base justify-center"
            >
              Alle Leistungen
              <FaArrowRight className="hidden sm:inline-block" />
            </motion.a>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-4 md:mt-6 text-blue-100 text-sm md:text-base"
          >
            Telefon: <span className="font-semibold">+49 123 456 789</span> | Email: <span className="font-semibold">info@cait-marketing.de</span>
          </motion.p>
        </div>
      </motion.section>
    </main>
  );
}