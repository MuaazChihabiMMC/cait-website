'use client'
import { motion } from 'framer-motion';
export default function SeoPageExpanded() {
  return (
    <section className="bg-[#0c1832] text-white py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Warum SEO? */}
        <div className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">Warum SEO?</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            SEO ist kein Bonus, es ist der Grundstein digitaler Sichtbarkeit. Wer nicht gefunden wird, verliert Kunden. Unsere Strategien vereinen Keyword-Analyse, technisches SEO, hochwertige Inhalte und nachhaltigen Linkaufbau für dauerhafte Google-Rankings.
          </p>
        </div>

        {/* Leistungen */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a]">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">Unsere SEO-Schwerpunkte</h3>
            <ul className="space-y-4">
              {[
                "🔍 OnPage-SEO: Meta-Tags, Content, Struktur, Ladezeit",
                "🔗 OffPage-SEO: Backlinks, Brand Mentions, Autorität",
                "🛠️ Technisches SEO: Fehlerfrei, schnell, mobil",
                "📍 Lokales SEO: Für regionale Suchergebnisse optimiert",
                "📝 Content-SEO: Landingpages, Blog, Conversion-Texte",
                "📊 SEO-Audits & Monitoring: Alles messbar im Überblick"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-400">•</span>
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a]">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">So arbeiten wir</h3>
            <ul className="space-y-4">
              {[
                "Individuelle Strategie statt Einheitslösung",
                "Keyword-Recherche mit Tools wie Semrush & Ahrefs",
                "Technische Analyse + UX-Optimierung (Heatmaps, Core Web Vitals)",
                "Conversion-orientierte Texte & Content-Marketing",
                "Monatliches Reporting inkl. Positionen & Traffic"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-400">•</span>
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Vertrauen & Qualität */}
        <div className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a]">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-300">Warum CAIT Social Media für Ihre SEO?</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "✅ Maßgeschneiderte SEO-Strategien für Ihre Branche",
              "✅ Echtzeit-Monitoring & transparente Berichte",
              "✅ White-Hat-Methoden, Google-konform & sicher",
              "✅ Vollständige Betreuung durch Inhouse-Expert:innen",
              "✅ Content + Technik aus einer Hand",
              "✅ Modernste Tools & Branchenstandards"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                <span className="text-blue-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}