'use client'
import { motion } from 'framer-motion'
import { Check, X, AlertTriangle, Scale, Shield, Users } from 'lucide-react'

const loeschGruende = [
  'Fake-Bewertung – Person war kein Kunde',
  'Beleidigung oder Rufschädigung',
  'Falsche Tatsachenbehauptungen',
  'Bewertung ohne echten geschäftlichen Kontakt',
  'Veröffentlichung persönlicher Daten',
  'Bewertung von Konkurrenten (Wettbewerbsrecht)',
  'Name eines Mitarbeiters wird genannt',
]

const nichtLoeschbar = [
  '"Service war schlecht" (Meinungsfreiheit)',
  'Schlechte Note ohne Beleidigung',
  'Kritische, aber sachliche Bewertungen',
  'Bewertungen echter Kunden mit Erfahrung',
]

const rechtsbasis = [
  {
    icon: <Shield className="w-6 h-6 text-[#fcd066]" />,
    title: 'Art. 17 DSGVO',
    desc: 'Recht auf Löschung personenbezogener Daten ohne berechtigtes Interesse der Gegenseite.',
  },
  {
    icon: <Scale className="w-6 h-6 text-[#fcd066]" />,
    title: 'Art. 6 DSGVO',
    desc: 'Ohne geschäftliche Beziehung ist die Datenverarbeitung durch den Bewerter unzulässig.',
  },
  {
    icon: <Users className="w-6 h-6 text-[#fcd066]" />,
    title: 'Persönlichkeitsrecht',
    desc: 'Beleidigungen und unwahre Tatsachenbehauptungen verletzen das allgemeine Persönlichkeitsrecht.',
  },
]

export default function GoogleBewertungLoeschenInfo() {
  return (
    <section className="bg-gradient-to-b from-[#0d1a36] to-[#0c1832] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
            Wann kann man eine Google Bewertung entfernen lassen?
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Nicht jede Kritik lässt sich anfechten. Wenn Sie jedoch eine ungerechtfertigte oder <strong className="text-white">negative Google Bewertung löschen</strong> wollen, gibt es klare rechtliche Ansätze.
          </p>
        </motion.div>

        {/* Zwei Spalten: Löschbar / Nicht löschbar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Löschbar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1a2a4a] to-[#15203a] border border-green-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500/20 p-3 rounded-full">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-300">Google Rezension löschen lassen (Gute Chancen)</h3>
            </div>
            <ul className="space-y-3">
              {loeschGruende.map((grund, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-100">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span>{grund}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <p className="text-green-200 text-sm">
                <strong>DSGVO-Argument:</strong> „Es liegt keine geschäftliche Beziehung vor.
                Die Verarbeitung personenbezogener Daten ist unzulässig nach Art. 6 DSGVO."
              </p>
            </div>
          </motion.div>

          {/* Nicht löschbar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1a2a4a] to-[#15203a] border border-red-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-500/20 p-3 rounded-full">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-300">Schwer zu entfernende Bewertungen</h3>
            </div>
            <ul className="space-y-3">
              {nichtLoeschbar.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-100">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" />
                <p className="text-red-200 text-sm">
                  <strong>Meinungsfreiheit:</strong> Reine Meinungsäußerungen ohne falsche
                  Tatsachenbehauptungen fallen unter Art. 5 GG und können nicht per DSGVO gelöscht werden.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rechtsbasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-200 mb-10">
            Unsere rechtliche Argumentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rechtsbasis.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#1a2a4a] to-[#15203a] border border-blue-500/20 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#fcd066]/10 p-3 rounded-full border border-[#fcd066]/20">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-[#fcd066] font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer / Anwalt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#fcd066]/5 border border-[#fcd066]/20 rounded-xl p-6 text-center"
        >
          <Scale className="w-6 h-6 text-[#fcd066] inline-block mb-2" />
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            <strong className="text-[#fcd066]">Rechtssicher mit Anwalt:</strong> Wir arbeiten
            mit erfahrenen Rechtsanwälten für IT- und Medienrecht zusammen. Jeder komplexe Fall
            wird anwaltlich geprüft, und der DSGVO-Löschantrag wird auf Wunsch direkt über unsere
            Partner-Kanzlei eingereicht – für Sie ohne rechtliches Risiko.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
