'use client'
import { motion } from 'framer-motion'

export default function GoogleAdsHero() {
  return (
    <section className="relative isolate bg-[#0c1832] text-white py-24 md:py-36 px-4 overflow-hidden">
      {/* Optimierter Hintergrund mit Performance-Aspekten */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1832] via-[#121f3d] to-[#1a2a5a]" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '120px'
        }}
      />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97]
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 block">
            Ihre Google Ads Agentur Berlin
          </span>
          <span className="block mt-3 text-xl md:text-2xl lg:text-3xl font-medium text-blue-100">
            für mehr Leads & Umsatz
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.15,
            ease: "easeOut"
          }}
          className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Als führende <strong className="text-white">SEA Agentur</strong> in Berlin erstellen wir hochperformante Google Ads Kampagnen, die nicht nur Klicks bringen, sondern <strong className="text-white">echte Kunden</strong>. Zielgerichtet. Messbar. Skalierbar.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            ease: "easeOut"
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#3b82f6"
            }}
            whileTap={{ scale: 0.97 }}
            href="/kontakt"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-blue-500/20 transition-all text-lg"
          >
            Jetzt Strategiegespräch buchen
          </motion.a>
          
          <motion.a
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#60a5fa",
              color: "#0c1832"
            }}
            whileTap={{ scale: 0.97 }}
            href="tel:+493022689840"
            className="inline-block border-2 border-blue-400 text-blue-300 font-semibold px-8 py-4 rounded-full transition-all text-lg"
          >
            030 2268 9840
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.45,
            ease: "easeOut"
          }}
          className="mt-16 md:mt-20 text-blue-100 text-base md:text-lg max-w-4xl mx-auto bg-gradient-to-r from-[#1a2a4a]/70 to-[#1a2a5a]/60 p-6 rounded-xl border border-[#2d3a5a] backdrop-blur-sm"
        >
          <p>
            Als zertifizierte <strong className="text-blue-300 font-semibold">Google Ads Agentur Berlin</strong> kombinieren wir technisches Know-how mit kreativer Performance-Strategie. 
            Unsere <strong className="text-blue-300 font-semibold">SEA Experten</strong> optimieren jeden Aspekt Ihrer Kampagnen, vom ersten Klick bis zum Kaufabschluss.
          </p>
        </motion.div>
      </div>
    </section>
  )
}