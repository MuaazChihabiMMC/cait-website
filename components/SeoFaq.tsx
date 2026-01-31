'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
  {
    question: 'Was ist SEO und warum ist es wichtig?',
    answer:
      'SEO (Search Engine Optimization) umfasst alle Maßnahmen, die dazu dienen, deine Website in den organischen Suchergebnissen besser auffindbar zu machen. Ohne gute Sichtbarkeit auf Google verschenkst du enormes Potenzial an Reichweite, Umsatz und Markenbekanntheit.',
  },
  {
    question: 'Wie lange dauert es, bis SEO-Ergebnisse sichtbar werden?',
    answer:
      'Je nach Wettbewerb und Ausgangslage können erste Verbesserungen nach 1-3 Monaten sichtbar sein. Wirklich nachhaltige Resultate entstehen in der Regel über einen Zeitraum von 6 bis 12 Monaten.',
  },
  {
    question: 'Was kostet professionelle SEO?',
    answer:
      'Die Kosten hängen vom Umfang und den Zielen ab. Wir bieten individuelle Pakete an, vom einmaligen SEO-Audit bis zur laufenden Betreuung. Transparenz steht bei uns an erster Stelle.',
  },
  {
    question: 'Was ist der Unterschied zwischen OnPage- und OffPage-SEO?',
    answer:
      'OnPage-SEO bezieht sich auf Optimierungen direkt auf deiner Website (Content, Struktur, Technik). OffPage-SEO betrifft externe Faktoren wie Backlinks und Online-Reputation.',
  },
  {
    question: 'Optimiert ihr auch für lokale Suchanfragen?',
    answer:
      'Ja! Lokale SEO ist eine unserer Stärken. Gerade für Dienstleister und lokale Unternehmen ist eine Top-Platzierung bei Suchanfragen in der Region entscheidend.',
  },
  {
    question: 'Welche Tools verwendet ihr für die SEO-Analyse?',
    answer:
      'Wir arbeiten mit den führenden Tools der Branche: Sistrix, Ahrefs, Semrush, Google Search Console, Screaming Frog u. v. m.',
  },
  {
    question: 'Ist SEO auch für kleine Unternehmen sinnvoll?',
    answer:
      'Unbedingt! Gerade kleine Unternehmen profitieren von gezieltem SEO, da sie oft in Nischenmärkten agieren, in denen man mit guter Optimierung schnell Sichtbarkeit aufbauen kann.',
  },
  {
    question: 'Kann ich SEO selbst machen?',
    answer:
      'Grundlagen kannst du dir aneignen, aber professionelle SEO ist komplex, datengetrieben und braucht Erfahrung. Eine Agentur spart Zeit, vermeidet Fehler und bringt messbare Ergebnisse.',
  },
  {
    question: 'Wie messt ihr den SEO-Erfolg?',
    answer:
      'Wir nutzen Keyword-Rankings, organischen Traffic, Sichtbarkeitsindizes, technische KPIs und Conversion-Ziele. Du bekommst von uns monatliche Auswertungen mit konkreten Empfehlungen.',
  },
  {
    question: 'Gibt es eine Erfolgsgarantie?',
    answer:
      'Eine seriöse SEO-Agentur gibt keine Platzierungsversprechen, Google ist ein unabhängiger Algorithmus. Aber: Mit der richtigen Strategie sind Top-10-Rankings für viele Keywords realistisch.',
  },
  {
    question: 'Wie unterscheidet sich eure Agentur von anderen?',
    answer:
      'Wir kombinieren datenbasierte Strategie mit kreativem Content, technischer Tiefe und transparenter Zusammenarbeit. Keine leeren Versprechen, sondern echte Ergebnisse.',
  },
  {
    question: 'Was bedeutet White-Hat-SEO?',
    answer:
      'White-Hat-SEO meint seriöse, nachhaltige Optimierung im Einklang mit den Google-Richtlinien. Keine Tricks, kein Risiko von Abstrafungen, stattdessen langfristige Sichtbarkeit.',
  },
  {
    question: 'Könnt ihr bestehende SEO-Projekte übernehmen oder optimieren?',
    answer:
      'Ja. Egal ob Relaunch, stockende Rankings oder bestehende SEO-Betreuung, wir steigen ein, analysieren und verbessern gezielt mit einem neutralen Blick von außen.',
  },
];

export default function SeoFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-[#0c1832] py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#fcd066]">
            Häufige Fragen zur Suchmaschinenoptimierung
          </h2>
          <p className="text-gray-100 mt-4">
            Antworten auf die wichtigsten Fragen zu unserer SEO-Arbeit
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-[#2d3a5a] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left p-5 transition-all ${activeIndex === index ? 'bg-[#1a2a4a]' : 'bg-[#0c1832] hover:bg-[#1a2a4a]'}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#fcd066]">
                    {item.question}
                  </h3>
                  <span className="text-[#fcd066] text-xl">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#1a2a4a]"
                  >
                    <div className="p-5 text-gray-100">
                      {item.answer}
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