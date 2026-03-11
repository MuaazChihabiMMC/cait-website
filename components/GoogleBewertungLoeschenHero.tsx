'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Star } from 'lucide-react'

export default function GoogleBewertungLoeschenHero() {
  return (
    <section className="relative isolate bg-[#0c1832] text-white py-24 md:py-36 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1832] via-[#121f3d] to-[#1a2a5a]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '120px'
        }}
      />

      {/* Floating stars decoration */}
      <div className="absolute top-20 left-10 opacity-20">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="inline-block w-5 h-5 text-[#fcd066] fill-[#fcd066] mx-0.5" />
        ))}
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="inline-block w-5 h-5 text-[#fcd066] fill-[#fcd066] mx-0.5" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#fcd066]/10 border border-[#fcd066]/30 text-[#fcd066] px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <ShieldCheck className="w-4 h-4" />
          DSGVO-konform · Professionell · Diskret
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 block">
            Negative Google Bewertung löschen
          </span>
          <span className="block mt-3 text-xl md:text-2xl lg:text-3xl font-medium text-gray-100">
            Wir lassen Ihre Google Rezension löschen – rechtssicher nach DSGVO
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Fake-Bewertungen oder unfaire Kritik schädigen Ihren Ruf.
          Wir prüfen, ob wir Ihre <strong className="text-white">schlechte Google Bewertung löschen</strong> können,
          und stellen professionelle Löschanträge nach <strong className="text-white">Art. 17 DSGVO</strong>.
          Lassen Sie unzulässige Einträge über unsere Partner-Anwälte anfechten und die <strong className="text-white">Google Bewertung entfernen</strong>.
          Nur bei <strong className="text-[#fcd066]">garantierter Löschung</strong> zahlen Sie – ab 25 € pro Profil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/kontakt"
            className="inline-block bg-[#fcd066] text-[#0c1832] font-semibold px-8 py-4 rounded-full shadow-lg shadow-yellow-500/20 transition-all text-lg"
          >
            Jetzt kostenlos prüfen lassen
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="tel:+493022689840"
            className="inline-block border-2 border-[#fcd066] text-[#fcd066] font-semibold px-8 py-4 rounded-full transition-all text-lg"
          >
            030 2268 9840
          </motion.a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: 'Ab 25 €', label: 'pro Bewertung' },
            { value: 'Nur bei Erfolg', label: 'zahlen Sie' },
            { value: 'DSGVO', label: 'Art. 17 konform' },
            { value: '24h', label: 'Erstprüfung' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#1a2a4a]/70 to-[#1a2a5a]/60 border border-[#2d3a5a] rounded-xl p-4 text-center"
            >
              <div className="text-[#fcd066] text-2xl font-bold">{item.value}</div>
              <div className="text-gray-300 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
