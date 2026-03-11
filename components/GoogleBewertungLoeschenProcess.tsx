'use client'
import { motion } from 'framer-motion'
import { Search, FileText, Send, CheckCircle, Euro } from 'lucide-react'

const steps = [
  {
    icon: <Search className="w-8 h-8 text-[#fcd066]" />,
    step: '01',
    title: 'Kostenlose Prüfung',
    desc: 'Schicken Sie uns den Link zur negativen Rezension. Wir prüfen kostenlos, ob wir die Google Bewertung löschen können.',
  },
  {
    icon: <FileText className="w-8 h-8 text-[#fcd066]" />,
    step: '02',
    title: 'Anwaltliche Analyse',
    desc: 'Unsere Partner-Anwälte prüfen die Optionen, um per DSGVO oder Persönlichkeitsrecht die Google Bewertung entfernen zu lassen.',
  },
  {
    icon: <Send className="w-8 h-8 text-[#fcd066]" />,
    step: '03',
    title: 'Löschantrag stellen',
    desc: 'Wir reichen den fundierten Löschantrag ein, um die Google Rezension löschen zu lassen – direkt an die Rechtsabteilung von Google.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[#fcd066]" />,
    step: '04',
    title: 'Erfolgreich entfernt',
    desc: 'Sobald wir die negative Google Bewertung löschen konnten, erhalten Sie die Bestätigung. Sie zahlen nur im Erfolgsfall.',
  },
]

const preise = [
  {
    title: 'Einzelne Bewertung',
    preis: 'ab 25 €',
    items: [
      'Prüfung der Lösch-Chancen',
      'DSGVO-Löschantrag an Google',
      'Nur bei erfolgreicher Löschung',
      'Ergebnis in 5–14 Werktagen',
    ],
    highlight: false,
  },
  {
    title: 'Paket: 3–5 Bewertungen',
    preis: 'ab 20 € / Stk.',
    items: [
      'Alles aus Einzelbewertung',
      'Priorisierte Bearbeitung',
      'Strategie-Empfehlung',
      'Nur bei erfolgreicher Löschung',
    ],
    highlight: true,
  },
  {
    title: 'Intensiv-Paket 6+',
    preis: 'Auf Anfrage',
    items: [
      'Unbegrenzte Bewertungen prüfen',
      'Monatliche Überwachung',
      'Persönlicher Ansprechpartner',
      'Reporting & Dokumentation',
    ],
    highlight: false,
  },
]

export default function GoogleBewertungLoeschenProcess() {
  return (
    <section className="bg-[#0c1832] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
            Ablauf: Google Bewertung entfernen
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Vier einfache Schritte, um eine <strong className="text-white">schlechte Google Bewertung löschen</strong> zu lassen
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-gradient-to-br from-[#1a2a4a] to-[#15203a] border border-blue-500/20 rounded-xl p-6 group hover:border-[#fcd066]/40 transition-colors"
            >
              <div className="absolute top-4 right-4 text-5xl font-black text-white/5 select-none">
                {step.step}
              </div>
              <div className="bg-[#fcd066]/10 border border-[#fcd066]/20 p-3 rounded-xl w-fit mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Preise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-200 mb-3">
            Transparente Preise – nur bei Erfolg
          </h3>
          <p className="text-center text-gray-300 mb-10">
            Wir geben <strong className="text-[#fcd066]">keine Garantie</strong> auf Löschung –
            aber wir berechnen auch nichts, wenn die Löschung nicht klappt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preise.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 border transition-all ${
                p.highlight
                  ? 'bg-gradient-to-br from-[#1e3060] to-[#1a2a4a] border-[#fcd066]/50 shadow-lg shadow-[#fcd066]/10 scale-[1.02]'
                  : 'bg-gradient-to-br from-[#1a2a4a] to-[#15203a] border-blue-500/20'
              }`}
            >
              {p.highlight && (
                <div className="text-center mb-4">
                  <span className="bg-[#fcd066] text-[#0c1832] text-xs font-bold px-3 py-1 rounded-full">
                    EMPFOHLEN
                  </span>
                </div>
              )}
              <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
              <div className="flex items-end gap-1 mb-6">
                <Euro className="w-5 h-5 text-[#fcd066] mb-1" />
                <span className="text-3xl font-black text-[#fcd066]">{p.preis}</span>
              </div>
              <ul className="space-y-3">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#fcd066] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/kontakt"
                className={`mt-8 block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                  p.highlight
                    ? 'bg-[#fcd066] text-[#0c1832] hover:bg-yellow-300'
                    : 'border-2 border-[#fcd066]/50 text-[#fcd066] hover:bg-[#fcd066]/10'
                }`}
              >
                Jetzt anfragen
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
