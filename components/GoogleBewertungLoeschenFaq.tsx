'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: 'Ist es legal, eine Google Bewertung löschen zu lassen?',
    a: 'Ja, absolut. Wenn eine Rezension ungerechtfertigt ist, z. B. bei Verleumdung oder fehlendem Kundenkontakt, können Sie völlig legal Ihre Google Bewertung entfernen lassen. Häufig dient die DSGVO (Art. 17) als rechtliche Basis für den Löschantrag.',
  },
  {
    q: 'Kann man jede negative Google Bewertung löschen?',
    a: 'Nein. Sie können nur dann eine schlechte Google Bewertung löschen, wenn sie gegen die Google-Richtlinien (z.B. Fake-Profile) oder geltendes Recht verstößt. Reine subjektive Kritik von echten Kunden fällt meist unter die Meinungsfreiheit.',
  },
  {
    q: 'Wie beauftrage ich Sie, meine Google Rezension löschen zu lassen?',
    a: 'Schicken Sie uns den Link zur Bewertung. Wir und unsere Partner-Anwälte prüfen zunächst kostenfrei, ob sich die Google Bewertung entfernen lässt. Der offizielle Antrag wird dann rechtssicher formuliert.',
  },
  {
    q: 'Wie lange dauert es, bis Google die Bewertung entfernt?',
    a: 'Die Bearbeitungszeit bei Google variiert zwischen 5 und 14 Werktagen, nachdem wir beantragt haben, die Google Bewertung entfernen zu lassen. In dringenden Fällen (z. B. bei massiven Rufschädigungen) kann auch eine beschleunigte Eskalation angefragt werden.',
  },
  {
    q: 'Was kostet es, eine schlechte Google Bewertung löschen zu lassen?',
    a: 'Die erste Prüfung ist vollständig kostenlos. Erst wenn wir die Google Bewertung löschen konnten, stellen wir Ihnen ab 25 € pro Bewertung in Rechnung. Keine Löschung = keine Kosten.',
  },
  {
    q: 'Werden die Anträge durch einen Anwalt gestellt?',
    a: 'Ja, wir arbeiten eng mit spezialisierten Rechtsanwälten für IT- und Medienrecht zusammen. Das erhöht die Erfolgschancen bei Google enorm, da die Löschanträge juristisch fundiert und absolut rechtssicher formuliert werden. So können wir zuverlässig Ihre negative Google Bewertung löschen.',
  },
]

export default function GoogleBewertungLoeschenFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-gradient-to-b from-[#0c1832] to-[#0d1a36] py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
            Häufige Fragen (FAQ)
          </h2>
          <p className="text-xl text-gray-100">
            Antworten rund um das Thema: Negative Google Bewertung löschen
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-gradient-to-br from-[#1a2a4a] to-[#15203a] border border-blue-500/20 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-white font-semibold pr-4 group-hover:text-[#fcd066] transition-colors">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#fcd066]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-blue-500/10 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
