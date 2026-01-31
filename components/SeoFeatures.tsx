'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Berliner Keyword-Recherche',
    icon: '🔍',
    description: (
      <>
        Wir analysieren Berlin-spezifische Suchanfragen und Intentions, damit Sie nicht nur Klicks bekommen, sondern
        relevante Berliner Kunden.{' '}
        <Link href="/seo-agentur-berlin/keyword-recherche" className="text-[#fcd066] underline hover:text-[#fcd066] transition">
          Berliner SEO-Strategien
        </Link>
      </>
    ),
  },
  {
    title: 'OnPage-SEO für Berlin',
    icon: '🛠️',
    description: (
      <>
        Optimierung von Meta-Tags, Content und Struktur speziell für Berliner Websites und Zielgruppen.{' '}
        <Link href="/seo-agentur-berlin/onpage-seo" className="text-[#fcd066] underline hover:text-[#fcd066] transition">
          Berliner OnPage-Optimierung
        </Link>
      </>
    ),
  },
  {
    title: 'Berliner Backlinkaufbau',
    icon: '🌐',
    description: (
      <>
        Aufbau qualitativer Backlinks aus Berliner Medien, Blogs und lokalen Verzeichnissen.{' '}
        <Link href="/seo-agentur-berlin/offpage-seo" className="text-[#fcd066] underline hover:text-[#fcd066] transition">
          Backlinks aus Berlin
        </Link>
      </>
    ),
  },
  {
    title: 'Technisches SEO Berlin',
    icon: '⚙️',
    description: (
      <>
        Core Web Vitals-Optimierung für Berliner Nutzer, Mobile First-Ansatz, Fehlerbehebung.{' '}
        <Link href="/seo-agentur-berlin/technisches-seo" className="text-[#fcd066] underline hover:text-[#fcd066] transition">
          Technische SEO Berlin
        </Link>
      </>
    ),
  },
  {
    title: 'Lokale SEO Berlin',
    icon: '📍',
    description: (
      <>
        Google Business Profile Optimierung, lokale Keywords, Bewertungsmanagement für Berlin.{' '}
        <Link href="/seo-agentur-berlin/lokale-seo" className="text-[#fcd066] underline hover:text-[#fcd066] transition">
          Top in Berlin ranken
        </Link>
      </>
    ),
  },
  {
    title: 'Berliner Content-Erstellung',
    icon: '📝',
    description: (
      <>
        Berlin-relevante Inhalte, die lokale Kunden ansprechen und Google überzeugen.{' '}
        <Link href="/seo-agentur-berlin/content-erstellung" className="text-[#fcd066] underline hover:text-[#fcd066] transition">
          Content für Berlin
        </Link>
      </>
    ),
  },
  {
    title: 'E-Commerce SEO Berlin',
    icon: '🛒',
    description: (
      <>
        Spezialstrategien für Berliner Online-Shops mit lokalem Fokus.{' '}
        <Link href="/seo-agentur-berlin/ecommerce-seo" className="text-[#fcd066] underline hover:text-[#fcd066] transition">
          Berliner Shops optimieren
        </Link>
      </>
    ),
  },
  {
    title: 'Berliner SEO-Monitoring',
    icon: '📊',
    description: (
      <>
        Gezieltes Tracking von Berliner Keywords und Wettbewerbern.{' '}
        <Link href="/seo-agentur-berlin/monitoring-reporting" className="text-[#fcd066] underline hover:text-[#fcd066] transition">
          Berlin Ranking-Reports
        </Link>
      </>
    ),
  },
  {
    title: 'Berliner SEO-Beratung',
    icon: '💡',
    description: (
      <>
        Individuelle Strategieentwicklung speziell für Berliner Unternehmen.{' '}
        <Link href="/seo-agentur-berlin/beratung" className="text-[#fcd066] underline hover:text-[#fcd066] transition">
          Kostenlose SEO-Analyse
        </Link>
      </>
    ),
  },
];

export default function SeoFeatures() {
  return (
    <section className="bg-[#0c1832] py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fcd066]">
            Unsere Berliner SEO-Leistungen
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Maßgeschneiderte SEO-Strategien für Berliner Unternehmen - von lokal bis international
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="bg-[#1a2a4a] border border-[#2d3a5a] p-6 rounded-xl hover:border-[#fcd066] transition-all group relative overflow-hidden"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a4a]/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
              
              <div className="relative z-10">
                <div className="text-3xl mb-4 text-[#fcd066] group-hover:text-[#fcd066] transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#fcd066] group-hover:text-gray-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Berlin-Fokus Abschnitt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 border border-blue-700"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-white/10 p-4 rounded-xl flex items-center justify-center">
              <div className="text-5xl">🏙️</div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#fcd066] mb-4">
                Warum Berlin-spezifische SEO wichtig ist
              </h3>
              <p className="text-gray-100 mb-4">
                Als <strong>SEO Agentur Berlin</strong> wissen wir: Der Berliner Markt hat besondere Anforderungen. 
                Von der Optimierung für Stadtteil-Keywords bis zur Kenntnis der lokalen Wettbewerbslandschaft 
                - wir machen Ihr Unternehmen zum Top-Ergebnis für Berliner Suchanfragen.
              </p>
              <p className="text-gray-100">
                Unsere Berliner SEO-Experten kombinieren lokales Know-how mit technischer Exzellenz für 
                nachhaltige Rankings in der Hauptstadt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}