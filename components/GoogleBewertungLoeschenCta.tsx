'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function GoogleBewertungLoeschenCta() {
  return (
    <section className="bg-[#fcd066] py-16 md:py-24 px-4 overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-[#0c1832] text-[#fcd066] p-3 rounded-full flex items-center gap-2 px-6 font-semibold shadow-lg">
              <ShieldCheck className="w-5 h-5" />
              100% Kostenlose Erstprüfung
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0c1832] mb-6 tracking-tight">
            Jetzt negative Google Bewertung löschen!
          </h2>
          
          <p className="text-lg md:text-xl text-[#0c1832]/80 mb-10 max-w-2xl mx-auto font-medium">
            Lassen Sie nicht zu, dass Fake-Accounts oder unfaire Kritik Ihr Geschäft schädigen. Wir helfen Ihnen, jede unrechtmäßige Google Rezension löschen zu lassen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 bg-[#0c1832] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-lg w-full sm:w-auto"
            >
              Jetzt Löschung anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="mailto:info@caitsocialmedia.com"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[#0c1832] border-2 border-[#0c1832] font-bold px-8 py-4 rounded-full transition-all hover:bg-[#0c1832]/10 text-lg w-full sm:w-auto"
            >
              E-Mail schreiben
            </a>
          </div>
          
          <p className="mt-8 text-sm text-[#0c1832]/70 font-medium">
            Nur bei erfolgreicher Löschung fallen Kosten an (ab 25 €).
          </p>
        </motion.div>
      </div>
    </section>
  )
}
