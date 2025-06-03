'use client'
import { motion } from 'framer-motion'

export default function GoogleAdsHero() {
  return (
    <section className="relative isolate bg-[#0c1832] text-white py-24 md:py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-cover opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1832]/90 to-[#1a2a4a]/70" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
            Ihre Google Ads Agentur Berlin
          </span>{' '}
          <br className="hidden sm:block" />
          für mehr Leads & Umsatz
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Als führende SEA Agentur in Berlin erstellen wir hochperformante Google Ads Kampagnen, die nicht nur Klicks bringen, sondern echte Kunden. Zielgerichtet. Messbar. Skalierbar.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/kontakt"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Jetzt Strategiegespräch buchen
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+493022689840"
            className="inline-block border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-[#0c1832] font-semibold px-8 py-3.5 rounded-full transition-all"
          >
            030 2268 9840
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-blue-100 text-sm md:text-base max-w-4xl mx-auto bg-[#1a2a4a]/50 p-6 rounded-lg border border-[#2d3a5a]"
        >
          <p>
            Als zertifizierte <strong className="text-blue-300">Google Ads Agentur Berlin</strong> kombinieren wir technisches Know-how mit kreativer Performance-Strategie. 
            Unsere <strong className="text-blue-300">SEA Agentur</strong> optimiert jeden Aspekt Ihrer Kampagnen, vom ersten Klick bis zum Kaufabschluss.
          </p>
        </motion.div>
      </div>
    </section>
  )
}