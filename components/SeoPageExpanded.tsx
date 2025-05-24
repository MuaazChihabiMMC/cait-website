// components/SeoPageExpanded.tsx

export default function SeoPageExpanded() {
    return (
      <section className="bg-white text-black py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-14">
  
       
  
          {/* Warum SEO? */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Warum SEO?</h2>
            <p className="text-gray-800">
              SEO ist kein Bonus, es ist der Grundstein digitaler Sichtbarkeit. Wer nicht gefunden wird, verliert Kunden. Unsere Strategien vereinen Keyword-Analyse, technisches SEO, hochwertige Inhalte und nachhaltigen Linkaufbau für dauerhafte Google-Rankings.
            </p>
          </div>
  
          {/* Leistungen */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Unsere SEO-Schwerpunkte</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>🔍 OnPage-SEO: Meta-Tags, Content, Struktur, Ladezeit</li>
                <li>🔗 OffPage-SEO: Backlinks, Brand Mentions, Autorität</li>
                <li>🛠️ Technisches SEO: Fehlerfrei, schnell, mobil</li>
                <li>📍 Lokales SEO: Für regionale Suchergebnisse optimiert</li>
                <li>📝 Content-SEO: Landingpages, Blog, Conversion-Texte</li>
                <li>📊 SEO-Audits & Monitoring: Alles messbar im Überblick</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">So arbeiten wir</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Individuelle Strategie statt Einheitslösung</li>
                <li>Keyword-Recherche mit Tools wie Semrush & Ahrefs</li>
                <li>Technische Analyse + UX-Optimierung (Heatmaps, Core Web Vitals)</li>
                <li>Conversion-orientierte Texte & Content-Marketing</li>
                <li>Monatliches Reporting inkl. Positionen & Traffic</li>
              </ul>
            </div>
          </div>
  
          {/* CTA */}
          <div className="bg-blue-900 text-white p-10 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Starten Sie Ihre SEO-Erfolgsgeschichte</h2>
            <p className="mb-6">Unser Team begleitet Sie von der Analyse bis zur Umsetzung, mit fundiertem Fachwissen, smarten Tools und persönlichem Support.</p>
            <a href="/kontakt" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition">
              Jetzt kostenlos beraten lassen
            </a>
          </div>
  
          {/* Vertrauen & Qualität */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Warum CAITSocialMedia für Ihre SEO?</h3>
            <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
              <li>✅ Maßgeschneiderte SEO-Strategien für Ihre Branche</li>
              <li>✅ Echtzeit-Monitoring & transparente Berichte</li>
              <li>✅ White-Hat-Methoden, Google-konform & sicher</li>
              <li>✅ Vollständige Betreuung durch Inhouse-Expert:innen</li>
              <li>✅ Content + Technik aus einer Hand</li>
              <li>✅ Modernste Tools & Branchenstandards</li>
            </ul>
          </div>
  
        </div>
      </section>
    );
  }
  