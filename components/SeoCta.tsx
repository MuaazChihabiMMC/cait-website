'use client'
import { motion } from 'framer-motion'

export default function SeoCta() {
  return (
    <section className="relative bg-gradient-to-r from-[#0c1832] to-[#1a2a4a] py-20 md:py-28 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern-bg.png')] bg-cover" />
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#fcd066] text-[#0c1832] rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
        >
          Starten Sie jetzt Ihre SEO-Erfolgsgeschichte
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto"
        >
          Egal ob lokales Unternehmen, Online-Shop oder internationale Marke - mit CAIT Agentur werden Sie online sichtbar. Vereinbaren Sie Ihr kostenloses Erstgespräch und erfahren Sie, wie wir Ihr Google-Ranking gezielt verbessern.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/kontakt"
            className="inline-block bg-white text-[#0c1832] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-100 transition-all"
          >
            Kostenloses Erstgespräch
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+493022689840"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0c1832] transition-all"
          >
            030 2268 9840
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}