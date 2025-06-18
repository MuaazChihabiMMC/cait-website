'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Keyword-Recherche & Suchintention',
    icon: '🔍',
    description: (
      <>
        Wir analysieren, wonach Ihre Kunden suchen, und warum. Damit Sie nicht nur Klicks bekommen, sondern
        relevanten Traffic, der konvertiert.{' '}
        <Link href="/seo-agentur-berlin/keyword-recherche" className="text-blue-300 underline hover:text-blue-400 transition">
          Mehr erfahren
        </Link>
      </>
    ),
  },
  {
    title: 'OnPage-SEO',
    icon: '🛠️',
    description: (
      <>
        Optimierung Ihrer Website-Struktur, Inhalte, Meta-Tags, internen Verlinkungen und technischen Basis.{' '}
        <Link href="/seo-agentur-berlin/onpage-seo" className="text-blue-300 underline hover:text-blue-400 transition">
          Mehr erfahren
        </Link>
      </>
    ),
  },
  {
    title: 'OffPage-SEO & Backlinkaufbau',
    icon: '🌐',
    description: (
      <>
        Wir stärken Ihre Domain-Autorität mit qualitativen Backlinks, PR-Erwähnungen und strategischer OffPage-Optimierung.{' '}
        <Link href="/seo-agentur-berlin/offpage-seo" className="text-blue-300 underline hover:text-blue-400 transition">
          Mehr erfahren
        </Link>
      </>
    ),
  },
  {
    title: 'Technisches SEO',
    icon: '⚙️',
    description: (
      <>
        Core Web Vitals, Mobile Optimierung, Fehleranalyse, Indexierung und Crawling.{' '}
        <Link href="/seo-agentur-berlin/technisches-seo" className="text-blue-300 underline hover:text-blue-400 transition">
          Mehr erfahren
        </Link>
      </>
    ),
  },
  {
    title: 'Lokale SEO',
    icon: '📍',
    description: (
      <>
        Optimierung Ihres Google-Profils, lokaler Content und Sichtbarkeit in Ihrer Region.{' '}
        <Link href="/seo-agentur-berlin/lokale-seo" className="text-blue-300 underline hover:text-blue-400 transition">
          Mehr erfahren
        </Link>
      </>
    ),
  },
  {
    title: 'SEO-Content-Erstellung',
    icon: '📝',
    description: (
      <>
        Inhalte, die Google liebt und Nutzer lesen wollen, von Blogbeiträgen bis zu Landingpages.{' '}
        <Link href="/seo-agentur-berlin/content-erstellung" className="text-blue-300 underline hover:text-blue-400 transition">
          Mehr erfahren
        </Link>
      </>
    ),
  },
  {
    title: 'Monitoring & Reporting',
    icon: '📊',
    description: (
      <>
        Echtzeit-Analysen, monatliche Reports und Handlungsempfehlungen für Ihr SEO.{' '}
        <Link href="/seo-agentur-berlin/monitoring-reporting" className="text-blue-300 underline hover:text-blue-400 transition">
          Mehr erfahren
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300">
            Unsere SEO-Leistungen im Überblick
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Umfassende SEO-Strategien für nachhaltige Sichtbarkeit und messbare Ergebnisse
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a2a4a] border border-[#2d3a5a] p-6 rounded-xl hover:border-blue-400 transition-all group"
            >
              <div className="text-3xl mb-4 text-blue-400">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300 group-hover:text-blue-200 transition">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}