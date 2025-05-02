'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaAd, FaLaptopCode, FaHashtag, FaChartLine, FaLightbulb, FaUsers, FaMobileAlt, FaShoppingCart, FaArrowRight, FaPaintBrush, FaCode, FaServer } from 'react-icons/fa';

export const metadata = {
  title: 'Services | CAIT Marketing',
  description: 'Unsere Leistungen: SEO, Google Ads, Webentwicklung & Social Media Marketing. Maßgeschneiderte Lösungen für Ihr Business.',
};

export default function ServicesPage() {
  return (
    <main className="px-4 py-12 md:px-6 max-w-7xl mx-auto bg-white text-blue-900 space-y-12 md:space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white rounded-3xl px-6 relative overflow-hidden"
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
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-900"
          >
            Unsere <span className="text-blue-600">Leistungen</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-800"
          >
            Maßgeschneiderte Digital-Marketing Lösungen für nachhaltigen Erfolg
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* SEO Service */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaSearch className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">SEO Optimierung</h2>
            </div>
            
            <p className="text-blue-800 mb-6">
              Nachhaltige Suchmaschinenoptimierung für langfristigen organischen Traffic und bessere Sichtbarkeit.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "OnPage- & Technisches SEO",
                "Content-Strategien",
                "Keyword-Recherche",
                "Lokale SEO",
                "Backlink-Aufbau"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-blue-800">{item}</span>
                </li>
              ))}
            </ul>
            
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/seo"
              className="inline-flex items-center text-blue-600 font-medium"
            >
              Mehr erfahren <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>

          {/* Google Ads Service */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaAd className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">Google Ads</h2>
            </div>
            
            <p className="text-blue-800 mb-6">
              Zielgerichtete Werbekampagnen mit klarem ROI für sofortige Sichtbarkeit und Conversions.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Search Kampagnen",
                "Display & Video Ads",
                "Shopping Kampagnen",
                "Remarketing",
                "Performance Max"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-blue-800">{item}</span>
                </li>
              ))}
            </ul>
            
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/google-ads"
              className="inline-flex items-center text-blue-600 font-medium"
            >
              Mehr erfahren <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>

          {/* Webentwicklung Service */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-md border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaCode className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">Webentwicklung</h2>
            </div>
            
            <p className="text-blue-800 mb-6">
              Hochperformante Websites und Shops mit Fokus auf Nutzererlebnis und Conversion-Optimierung.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Responsive Webdesign",
                "Shopify & WooCommerce",
                "React/Next.js Entwicklung",
                "Technische SEO",
                "Ladezeitoptimierung"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-blue-800">{item}</span>
                </li>
              ))}
            </ul>
            
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/webentwicklung"
              className="inline-flex items-center text-blue-600 font-medium"
            >
              Mehr erfahren <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>

          {/* Social Media Service */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-md border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaHashtag className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">Social Media</h2>
            </div>
            
            <p className="text-blue-800 mb-6">
              Strategisches Social Media Marketing für authentische Markenpräsenz und Community-Aufbau.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Content-Strategie",
                "Community Management",
                "Paid Social Ads",
                "Influencer-Kooperationen",
                "Performance-Analyse"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-blue-800">{item}</span>
                </li>
              ))}
            </ul>
            
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/social-media"
              className="inline-flex items-center text-blue-600 font-medium"
            >
              Mehr erfahren <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-50 rounded-3xl p-8 md:p-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Unser Vorgehen</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Analyse",
              description: "Ausführliche Markt- und Wettbewerbsanalyse"
            },
            {
              step: "2",
              title: "Konzept",
              description: "Maßgeschneiderte Strategieentwicklung"
            },
            {
              step: "3",
              title: "Umsetzung",
              description: "Professionelle Implementierung"
            },
            {
              step: "4",
              title: "Optimierung",
              description: "Kontinuierliche Verbesserung"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-800">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Vereinbaren Sie ein unverbindliches Beratungsgespräch und erhalten Sie ein maßgeschneidertes Angebot.
        </p>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/kontakt"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg transition-all"
        >
          Kostenlose Beratung anfordern
        </motion.a>
      </motion.section>
    </main>
  );
}