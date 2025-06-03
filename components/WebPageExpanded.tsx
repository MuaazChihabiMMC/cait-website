// components/WebPageExpanded.tsx
export default function WebPageExpanded() {
  return (
    <section className="bg-[#0c1832] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Webentwicklung & Design von CAIT Agentur
          </h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto leading-relaxed">
            Maßgeschneiderte digitale Lösungen, die überzeugen, performen und mit deinem Unternehmen wachsen. Professionell umgesetzt von Experten.
          </p>
        </div>

        <div className="bg-blue-500/10 p-8 rounded-xl border border-blue-400/30">
          <h2 className="text-3xl font-bold mb-6 text-blue-200">Warum professionelle Webentwicklung wichtig ist</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Eine starke Website ist heute mehr als nur Online-Präsenz. Sie ist Verkaufsplattform, Kontaktpunkt, Marke und Wettbewerbsvorteil zugleich. Wir verbinden Design, Technik und Strategie für maximale Wirkung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-500/10 p-8 rounded-xl border border-blue-400/30">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">Unsere Kompetenzen</h3>
            <ul className="space-y-3">
              {[
                "💻 Front-End & Back-End Entwicklung",
                "🔁 Full-Stack-Lösungen aus einer Hand",
                "📱 Mobile-Optimierung & responsives Design",
                "🛍️ E-Commerce (Shopify, WooCommerce, Magento)",
                "🧠 UI/UX-Design & Conversion-Optimierung",
                "🧱 CMS-Integration: WordPress, Drupal, Headless",
                "⚙️ Ladezeit- & Performance-Optimierung",
                "🔐 Sicherheit, Backups, DSGVO & SSL",
                "📈 SEO-freundliches Webdesign & Struktur"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-blue-100">
                  <span className="text-blue-300">{item.split(' ')[0]}</span>
                  <span>{item.split(' ').slice(1).join(' ')}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-500/10 p-8 rounded-xl border border-blue-400/30">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">Was uns auszeichnet</h3>
            <ul className="space-y-3">
              {[
                "🎨 Individuelles Design, keine Templates",
                "📊 Skalierbare Lösungen für jedes Geschäftsmodell",
                "⚛️ Technisch modern: React, Vue, Next.js, Node",
                "📱 Responsives & barrierefreies Design",
                "🔄 Konversionsstarke CTAs und intuitive Navigation",
                "☁️ Hosting-Beratung & Cloud-Integration",
                "🔌 Schnittstellen zu Buchungssystemen, CRMs & mehr",
                "📊 Datenbasierte Optimierung mit Heatmaps & A/B-Tests"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-blue-100">
                  <span className="text-blue-300">{item.split(' ')[0]}</span>
                  <span>{item.split(' ').slice(1).join(' ')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-500/20 p-10 rounded-xl text-center border border-blue-400/30 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-white">Bereit für den nächsten Schritt?</h2>
          <p className="text-blue-200 mb-8 text-lg max-w-2xl mx-auto">
            Ob Relaunch, Redesign oder Neuentwicklung, wir bauen Ihre Website so, dass sie Besucher begeistert und messbare Ergebnisse liefert.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
          >
            Jetzt kostenlos beraten lassen
          </a>
        </div>

      </div>
    </section>
  );
}