'use client'
import { motion } from 'framer-motion'
import { Check, Star, BarChart, Target, Users, RefreshCw, ShoppingCart, FileText } from 'lucide-react'
import { ReactNode } from 'react';
// Typdefinition für die BenefitSection Props
interface BenefitSectionProps {
  icon: ReactNode;
  title: string;
  items: string[];
}
export default function GoogleAdsBenefits() {
  return (
    <section className="bg-gradient-to-b from-[#0c1832] to-[#0d1a36] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
            Warum CAIT als Google Ads Agentur Berlin?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Als erfahrene SEA Agentur liefern wir nicht nur Anzeigen, sondern echte Performance-Ergebnisse
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            'Individuelle Kampagnenstrategie Ihrer SEA Agentur',
            'Transparente Monats-Reports mit echten KPIs',
            'Zertifizierte Google Ads Spezialisten in Berlin',
            'Ihre Ads Agentur mit direktem Ansprechpartner',
            'Berliner Agentur für schnelle Umsetzung',
            'Verknüpfung mit Google Analytics & Tag Manager',
            'Flexibles Budgetmanagement mit maximalem ROI',
            'Erfahrung als Google Ads Agentur in 200+ Projekten',
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1a2a4a] to-[#15203a] border border-blue-500/20 p-5 rounded-xl flex items-start gap-3 group"
            >
              <div className="bg-blue-500/10 p-2 rounded-full mt-1 group-hover:bg-blue-500/20 transition-colors">
                <Check className="text-blue-400 w-5 h-5" strokeWidth={2} />
              </div>
              <p className="text-blue-100 leading-relaxed">{benefit}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#1a2a4a] to-[#15203a] border border-blue-500/30 rounded-2xl overflow-hidden mb-20">
          <div className="p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8 mb-12"
            >
              <div className="bg-blue-500/10 p-5 rounded-full">
                <BarChart className="text-blue-400 w-12 h-12" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-200 mb-4">
                  Google Ads Agentur Berlin: Gezielte Werbung, messbare Ergebnisse
                </h2>
                <p className="text-blue-100 text-lg">
                  Als erfahrene Agentur entwickeln wir maßgeschneiderte Strategien für effiziente Werbebudget-Nutzung
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitSection 
                icon={<Target className="w-6 h-6 text-blue-400" />}
                title="Warum Google Ads? Ihre Vorteile"
                items={[
                  'Sofortige Sichtbarkeit bei Google-Suchanfragen',
                  'Kontrollierbares Budget & messbare Ergebnisse',
                  'Präzise Zielgruppenansprache nach Standort & Gerät',
                  'Schneller ROI dank Conversion-Optimierung',
                  'Remarketing-Möglichkeiten & Segmentierung'
                ]}
              />
              
              <BenefitSection 
                icon={<Star className="w-6 h-6 text-blue-400" />}
                title="Unsere Leistungen als SEA Agentur"
                items={[
                  'Keyword-Recherche mit Fokus auf Kaufabsicht',
                  'Performance-orientierter Kampagnenaufbau',
                  'Überzeugende Anzeigentexte mit klaren USPs',
                  'Conversion-Tracking mit Analytics & Tag Manager',
                  'Kontinuierliche Optimierung aller Kampagnen'
                ]}
              />
              
              <BenefitSection 
                icon={<Users className="w-6 h-6 text-blue-400" />}
                title="Zielgruppenanalyse & Personas"
                items={[
                  'Fundierte Analyse Ihrer Kundenprofile',
                  'Geografisches Targeting für Berlin & Umgebung',
                  'Demografische und psychografische Ausrichtung',
                  'Reduzierte Streuverluste, mehr Conversion',
                  'Maßgeschneiderte Ansprache für jede Zielgruppe'
                ]}
              />
              
              <BenefitSection 
                icon={<RefreshCw className="w-6 h-6 text-blue-400" />}
                title="Kontinuierliche Optimierung"
                items={[
                  'Überwachung aller wichtigen KPIs (CTR, CPC, CPA)',
                  'Datengetriebene A/B-Tests von Anzeigen',
                  'Optimierung von Landingpages & Zielgruppen',
                  'Steigerung der Conversion-Rate',
                  'Maximierung des ROAS (Return on Ad Spend)'
                ]}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
              <ShoppingCart className="text-blue-400" />
              Für wen ist Google Ads ideal?
            </h3>
            <div className="bg-gradient-to-br from-[#1a2a4a]/50 to-[#15203a]/50 border border-blue-500/20 p-6 rounded-xl">
              <ul className="space-y-3">
                {[
                  'Lokale Dienstleister (Handwerker, Ärzte, Coaches)',
                  'Online-Shops & E-Commerce-Unternehmen',
                  'B2B-Unternehmen mit komplexen Angeboten',
                  'Start-ups mit skalierbaren Geschäftsmodellen',
                  'Eventveranstalter & lokale Anbieter'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-blue-100">
                    <Check className="text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
              <FileText className="text-blue-400" />
              Transparenz & Reporting
            </h3>
            <div className="bg-gradient-to-br from-[#1a2a4a]/50 to-[#15203a]/50 border border-blue-500/20 p-6 rounded-xl">
              <p className="text-blue-100 mb-4">
                Als professionelle Google Ads Agentur ist uns Transparenz besonders wichtig:
              </p>
              <ul className="space-y-3">
                {[
                  'Monatliche Reports mit klaren KPIs und Erfolgen',
                  'Verständliche Darstellung aller Kampagnenergebnisse',
                  'Konkrete Handlungsempfehlungen für Optimierungen',
                  'Regelmäßige Meetings zur Strategiebesprechung',
                  'DSGVO-konforme Einrichtung aller Tracking-Tools'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-blue-100">
                    <Check className="text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-2xl p-8 md:p-12 text-center mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-200 mb-4">
            Ihre Vorteile mit CAIT als Google Ads Agentur
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            {[
              { title: 'Persönlicher Ansprechpartner', desc: 'Direkt in Berlin' },
              { title: '100% Performance-Fokus', desc: 'Auf Ergebnisse optimiert' },
              { title: 'DSGVO-konform', desc: 'Sichere Tracking-Einrichtung' },
              { title: 'Flexible Zusammenarbeit', desc: 'Transparente Preise' },
              { title: '200+ Projekte', desc: 'Bewährte Expertise' },
              { title: 'Schnelle Umsetzung', desc: 'Berliner Agentur vor Ort' },
              { title: 'Ganzheitlicher Service', desc: 'Von Analyse bis Skalierung' },
              { title: 'Kostenlose Beratung', desc: 'Unverbindliches Gespräch' }
            ].map((item, index) => (
              <div key={index} className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/20">
                <div className="text-blue-300 font-semibold">{item.title}</div>
                <div className="text-blue-100 text-sm mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-200 mb-6 max-w-3xl mx-auto">
            Starten Sie jetzt durch mit einer professionellen Google Ads Agentur Berlin
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie ein kostenloses Beratungsgespräch und entdecken Sie das Potenzial für Ihr Unternehmen.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-[1.02] text-lg"
          >
            Jetzt unverbindlich beraten lassen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
// BenefitSection-Komponente mit Typdefinition
function BenefitSection({ icon, title, items }: BenefitSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="border-l-2 border-blue-500/30 pl-5 py-1"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-500/10 p-2 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-blue-200">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-blue-100">
            <Check className="text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
