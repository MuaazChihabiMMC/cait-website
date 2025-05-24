'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaAd, FaLaptopCode, FaHashtag, FaChartLine, FaLightbulb, FaUsers, FaMobileAlt, FaShoppingCart, FaArrowRight, FaPaintBrush, FaCode, FaServer, FaMapMarkerAlt, FaTrophy, FaHandshake, FaBullseye } from 'react-icons/fa';

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
                CAIT Agentur Berlin
              </motion.span> - Ihre Top Marketing Agentur in Berlin
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-800"
          >
            Als führende <span className="font-semibold text-blue-600">SEO Agentur Berlin</span>, <span className="font-semibold text-blue-500">Google Ads Agentur Berlin</span>, <span className="font-semibold text-blue-400">Webdesign Agentur Berlin</span> und <span className="font-semibold text-blue-300">Social Media Agentur Berlin</span> helfen wir Unternehmen in Berlin, online sichtbar zu werden und mehr Kunden zu gewinnen.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { text: "SEO Agentur Berlin", bg: "bg-blue-600" },
              { text: "Google Ads Berlin", bg: "bg-blue-500" },
              { text: "Webdesign Berlin", bg: "bg-blue-400" },
              { text: "Social Media Berlin", bg: "bg-blue-300" }
            ].map((tag, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`${tag.bg} text-white px-4 py-2 rounded-full text-sm font-medium shadow-md`}
                whileHover={{ scale: 1.05 }}
              >
                {tag.text}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
              Kostenlose Erstberatung in Berlin
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
              href="tel:+493022689840"
              className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition items-center gap-2 mx-auto"
            >
              <span>030 2268 9840</span>
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-2 text-blue-700"
          >
            <FaMapMarkerAlt />
            <span>Berlin Zehlendorf</span>
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
          Warum Berliner Unternehmen uns als ihre Marketing Agentur wählen
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <FaTrophy className="text-3xl" />,
              title: "Top-ranking SEO Agentur Berlin",
              content: "Als erfahrene SEO Agentur Berlin helfen wir Ihnen, in den organischen Suchergebnissen von Google auf Platz 1 zu ranken. Unsere datenbasierten Strategien steigern Ihre Sichtbarkeit nachhaltig."
            },
            {
              icon: <FaChartLine className="text-3xl" />,
              title: "Performance-starke Google Ads Berlin",
              content: "Als zertifizierte Google Ads Agentur Berlin erstellen wir hocheffiziente Kampagnen mit maximaler Conversion Rate. Wir optimieren kontinuierlich für den besten ROI."
            },
            {
              icon: <FaUsers className="text-3xl" />,
              title: "Engagierende Social Media Agentur Berlin",
              content: "Als kreative Social Media Agentur Berlin entwickeln wir Content-Strategien, die Ihre Zielgruppe begeistern und echte Communities aufbauen."
            },
            {
              icon: <FaLaptopCode className="text-3xl" />,
              title: "Modernste Webdesign Agentur Berlin",
              content: "Als innovative Webdesign Agentur Berlin erstellen wir responsive Websites mit herausragender User Experience, die Besucher in Kunden verwandeln."
            },
            {
              icon: <FaHandshake className="text-3xl" />,
              title: "Lokale Expertise für Berliner Unternehmen",
              content: "Wir kennen die Berliner Märkte und Zielgruppen. Unsere Marketingstrategien sind perfekt auf die Bedürfnisse von Berliner Unternehmen zugeschnitten."
            },
            {
              icon: <FaBullseye className="text-3xl" />,
              title: "Transparente Erfolgsmessung",
              content: "Klare KPIs und regelmäßige Berichte zeigen Ihnen genau, wie wir Ihre Marketingziele erreichen. Sie sehen jederzeit den ROI Ihrer Investition."
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
              className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-blue-100"
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

      {/* SEO Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl overflow-hidden border border-blue-100"
      >
        <div className="flex flex-col lg:flex-row">
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
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                SEO Agentur Berlin - Nachhaltig auf Platz 1 ranken
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg mb-6 text-blue-600"
            >
              <strong>93% aller Online-Erlebnisse beginnen mit einer Suchmaschine.</strong> Als erfahrene SEO Agentur Berlin helfen wir Ihnen, in den organischen Suchergebnissen für Ihre wichtigsten Keywords zu ranken - nachhaltig und kosteneffizient.
            </motion.p>
            
            <div className="space-y-6">
              {[
                {
                  title: "1. OnPage-Optimierung für Berliner Unternehmen",
                  content: "Technische und inhaltliche Optimierung Ihrer Website für bessere Rankings:",
                  items: [
                    "Umfassende Keyword-Recherche mit Berlin-Bezug",
                    "Content-Strategie mit Themenclustern",
                    "Technische SEO (Ladezeiten, Mobile Usability)",
                    "Strukturierte Daten & Rich Snippets",
                    "Lokale SEO für Berliner Unternehmen"
                  ]
                },
                {
                  title: "2. OffPage-Optimierung & Linkbuilding",
                  content: "Aufbau von Autorität durch hochwertige Backlinks:",
                  items: [
                    "Natürlicher Linkaufbau mit Berlin-Bezug",
                    "Lokale Verzeichnisse & Branchenbücher",
                    "Content-Marketing für organische Links",
                    "Digital PR für Berliner Medien",
                    "Regelmäßige Link-Audits"
                  ]
                },
                {
                  title: "3. Lokale SEO für Berlin",
                  content: "Optimierung für lokale Suchanfragen in Berlin:",
                  items: [
                    "Google My Business Optimierung",
                    "Lokale Citations & NAP-Konsistenz",
                    "Berlin-spezifische Landingpages",
                    "Bewertungsmanagement",
                    "Lokale Influencer-Kooperationen"
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

            <div className="mt-8 bg-blue-100 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-2 text-blue-700">SEO Erfolge für Berliner Kunden</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "+240%", label: "Organische Sichtbarkeit" },
                  { value: "Top 3", label: "Keyword-Rankings" },
                  { value: "+35%", label: "Klickrate (CTR)" },
                  { value: "+187%", label: "Organischer Traffic" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-3 rounded-lg text-center shadow-sm"
                  >
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-blue-800">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
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
                SEO-Strategie für Berlin entwickeln
                <FaArrowRight className="ml-2" />
              </motion.a>
              <p className="text-sm text-blue-700 mt-3 text-center sm:text-left">
                Als führende SEO Agentur Berlin helfen wir Ihnen, nachhaltig auf Platz 1 zu ranken.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
              <div className="text-center max-w-md">
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
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-900">SEO Agentur Berlin - Unsere Leistungen</h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "Technische SEO-Analyse",
                      "Content-Strategie mit Berlin-Bezug",
                      "Lokale SEO für Berliner Unternehmen",
                      "Shop-SEO für E-Commerce",
                      "SEO-Beratung vor Ort in Berlin",
                      "Regelmäßige Reporting-Gespräche"
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
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
                <div className="text-4xl md:text-6xl mb-3 md:mb-4">📈</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-900">Google Ads Berlin - Unsere Erfolge</h3>
                <ul className="text-left max-w-xs mx-auto space-y-2 text-blue-900 text-sm md:text-base">
                  {[
                    "Durchschnittlich 35% niedrigere CPA",
                    "Bis zu 300% mehr Conversions",
                    "ROI-optimierte Kampagnen",
                    "Berlin-spezifisches Targeting",
                    "Transparente Erfolgsmessung"
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
              <h2 className="text-2xl md:text-3xl font-bold">Google Ads Agentur Berlin</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg mb-4 md:mb-6 text-blue-800"
            >
              <strong>Als zertifizierte Google Ads Agentur Berlin</strong> erstellen wir hocheffiziente Kampagnen, die messbare Ergebnisse liefern. Unternehmen in Berlin verdienen durchschnittlich 200% ROI mit unseren optimierten Google Ads Strategien.
            </motion.p>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "1. Search Kampagnen für Berlin",
                  content: "Textbasierte Anzeigen bei relevanten Suchanfragen Ihrer Berliner Zielgruppe:",
                  items: [
                    "Berlin-spezifische Keyword-Strategie",
                    "Lokale Anzeigenerweiterungen",
                    "Standort-Targeting für Berlin",
                    "Konversionsoptimierte Landingpages"
                  ]
                },
                {
                  title: "2. Display & Video Kampagnen",
                  content: "Visuelle Werbung zur Steigerung der Markenbekanntheit in Berlin:",
                  items: [
                    "Zielgruppen-Targeting für Berlin",
                    "Remarketing für Website-Besucher",
                    "YouTube Videoanzeigen",
                    "A/B-Testing für maximale Performance"
                  ]
                },
                {
                  title: "3. Shopping Kampagnen für Berliner Händler",
                  content: "Produktanzeigen direkt in den Suchergebnissen für Berliner E-Commerce:",
                  items: [
                    "Optimierung der Produktdaten",
                    "Lokale Produktverfügbarkeit",
                    "Dynamisches Remarketing",
                    "Performance Max Kampagnen"
                  ],
                  example: "Ein Berliner Modehändler reduzierte seine Customer Acquisition Costs um 42% durch unsere Shopping-Kampagnen."
                },
                {
                  title: "4. Lokale Kampagnen für Berlin",
                  content: "Geotargeting für lokale Geschäfte und Dienstleister in Berlin:",
                  items: [
                    "Radius-Targeting um Ihre Filiale",
                    "Lokale Anzeigenerweiterungen",
                    "Call-Tracking für Leads",
                    "Google My Business Integration"
                  ]
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
                      <p className="text-blue-800"><strong>Erfolgsbeispiel aus Berlin:</strong> {section.example}</p>
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
                Kostenlose Google Ads Beratung
                <FaArrowRight />
              </motion.a>
              <p className="text-xs md:text-sm text-blue-700 mt-2 text-center sm:text-left">
                Als Google Ads Agentur Berlin bieten wir Ihnen maßgeschneiderte Lösungen für Ihren Markterfolg.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Webdesign Section */}
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
                <FaLaptopCode className="text-blue-600 text-xl md:text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Webdesign Agentur Berlin</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg mb-4 md:mb-6 text-blue-800"
            >
              <strong>Als kreative Webdesign Agentur Berlin</strong> entwickeln wir moderne Websites, die Besucher begeistern und in Kunden verwandeln. Eine professionelle Website ist Ihr wichtigster Verkaufsmitarbeiter - 24/7 verfügbar.
            </motion.p>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "1. Responsive Webdesign für Berliner Unternehmen",
                  content: "Mobile-optimierte Websites, die auf allen Geräten perfekt aussehen:",
                  items: [
                    "Mobile-First Design-Ansatz",
                    "Touch-optimierte Navigation",
                    "Schnelle Ladezeiten",
                    "Barrierefreie Umsetzung"
                  ],
                  icon: <FaMobileAlt className="text-blue-500" />
                },
                {
                  title: "2. Conversion-Optimierung",
                  content: "Design, das Besucher zu Kunden macht:",
                  items: [
                    "A/B-Testing von Design-Elementen",
                    "Strategische Call-to-Action Platzierung",
                    "Vertrauenssignale & Social Proof",
                    "Checkout-Optimierung"
                  ],
                  icon: <FaShoppingCart className="text-blue-500" />
                },
                {
                  title: "3. E-Commerce Lösungen für Berlin",
                  content: "Hochverfügbare Online-Shops mit hoher Conversion-Rate:",
                  items: [
                    "Shopify & WooCommerce Entwicklung",
                    "Produktdaten-Import/-Export",
                    "Zahlungsgateway-Integration",
                    "Warenwirtschaftssystem-Anbindung"
                  ],
                  example: "Ein Berliner Mode-Label steigerte seinen Online-Umsatz um 180% nach unserem Shop-Relaunch."
                },
                {
                  title: "4. WordPress Entwicklung",
                  content: "Individuelle WordPress-Lösungen für Berliner Unternehmen:",
                  items: [
                    "Custom Themes & Plugins",
                    "Headless WordPress",
                    "Performance-Optimierung",
                    "Sicherheits-Hardening"
                  ]
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
                      <p className="text-blue-800"><strong>Berliner Erfolgsbeispiel:</strong> {section.example}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Responsive Design",
                "SEO-optimiert",
                "Schnelle Ladezeiten",
                "Barrierefrei",
                "Conversion-Fokus",
                "Berlin-spezifisch"
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="bg-white p-3 rounded-lg border border-blue-200 text-center shadow-sm"
                >
                  <div className="text-blue-600 text-sm">{feature}</div>
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
                <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-900">Webdesign Berlin - Unsere Technologien</h3>
                <ul className="text-left max-w-xs mx-auto space-y-2 text-blue-900 text-sm md:text-base">
                  {[
                    "React.js / Next.js",
                    "WordPress / WooCommerce",
                    "Shopify / Shopware",
                    "Headless CMS",
                    "TypeScript",
                    "Tailwind CSS"
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

      {/* Social Media Section */}
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
                <div className="text-4xl md:text-6xl mb-3 md:mb-4">📱</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-900">Social Media Berlin - Unsere Plattformen</h3>
                <ul className="text-left max-w-xs mx-auto space-y-2 text-blue-900 text-sm md:text-base">
                  {[
                    "Instagram Marketing",
                    "Facebook Kampagnen",
                    "LinkedIn B2B Strategien",
                    "TikTok Content",
                    "YouTube Video-Marketing",
                    "Pinterest Ads"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
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
                <FaHashtag className="text-blue-600 text-xl md:text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Social Media Agentur Berlin</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg mb-4 md:mb-6 text-blue-800"
            >
              <strong>Als kreative Social Media Agentur Berlin</strong> entwickeln wir Content-Strategien, die Ihre Zielgruppe begeistern und echte Communities aufbauen. Social Media ist das neue Schaufenster Ihres Unternehmens.
            </motion.p>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "1. Content-Strategie für Berlin",
                  content: "Ganzheitliche Planung für maximale Reichweite in Berlin:",
                  items: [
                    "Plattformspezifische Content-Konzepte",
                    "Redaktionsplan & Content-Kalender",
                    "Community Management",
                    "Berlin-spezifische Themen"
                  ]
                },
                {
                  title: "2. Content-Produktion",
                  content: "Professionelle Erstellung von Inhalten:",
                  items: [
                    "Fotografie & Videoproduktion in Berlin",
                    "Grafikdesign für Posts",
                    "Animierte Content-Formate",
                    "User-Generated Content"
                  ]
                },
                {
                  title: "3. Paid Social Advertising",
                  content: "Zielgruppengenaue Werbekampagnen für Berlin:",
                  items: [
                    "Facebook & Instagram Ads",
                    "LinkedIn B2B Marketing",
                    "TikTok & Pinterest Ads",
                    "Remarketing Strategien"
                  ],
                  example: "Eine Berliner Beauty-Marke steigerte ihren Umsatz über Social Media um 320% durch unsere Kampagnen."
                },
                {
                  title: "4. Influencer Marketing",
                  content: "Authentische Kooperationen mit Berliner Influencern:",
                  items: [
                    "Influencer-Recherche",
                    "Kampagnenplanung",
                    "Content-Co-Creation",
                    "Performance-Tracking"
                  ]
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
                      <p className="text-blue-800"><strong>Berliner Erfolgsbeispiel:</strong> {section.example}</p>
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
                href="/social-media"
                className="bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow hover:shadow-xl transition flex items-center gap-2 text-sm md:text-base w-full sm:w-auto justify-center"
              >
                Social Media Strategie entwickeln
                <FaArrowRight />
              </motion.a>
              <p className="text-xs md:text-sm text-blue-700 mt-2 text-center sm:text-left">
                Als Social Media Agentur Berlin helfen wir Ihnen, Ihre Zielgruppe zu begeistern.
              </p>
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
            Bereit für mehr Sichtbarkeit in Berlin?
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl mb-6 md:mb-8"
          >
            Kontaktieren Sie uns für ein kostenloses Beratungsgespräch und lassen Sie uns gemeinsam Ihre digitale Strategie entwickeln - ob als SEO Agentur Berlin, Google Ads Agentur Berlin, Webdesign Agentur Berlin oder Social Media Agentur Berlin.
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
              href="tel:+493022689840"
              className="bg-transparent border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition flex items-center gap-2 text-sm md:text-base justify-center"
            >
              <span>030 2268 9840</span>
            </motion.a>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-4 md:mt-6 text-blue-100 text-sm md:text-base"
          >
            CAIT Agentur Berlin | Berliner Straße 17 | 14169 Berlin-Zehlendorf
          </motion.p>
        </div>
      </motion.section>
    </main>
    
  );
}
