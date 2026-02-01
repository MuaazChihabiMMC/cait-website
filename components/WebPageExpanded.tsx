// components/WebPageExpanded.tsx
export default function WebPageExpanded() {
  return (
    <section className="bg-[#0c1832] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Webentwicklung & Design von CAIT Agentur
          </h2>
          <p className="text-xl text-[#fcd066] max-w-3xl mx-auto leading-relaxed">
            Maßgeschneiderte digitale Lösungen, die überzeugen, performen und mit deinem Unternehmen wachsen. Professionell umgesetzt von Experten.
          </p>
        </div>

        <div className="bg-[#fcd066] text-[#0c1832]/10 p-8 rounded-xl border border-[#fcd066]/30">
          <h2 className="text-3xl font-bold mb-6 text-gray-200">Warum professionelle Webentwicklung wichtig ist</h2>
          <p className="text-gray-100 text-lg leading-relaxed">
            Eine starke Website ist heute mehr als nur Online-Präsenz. Sie ist Verkaufsplattform, Kontaktpunkt, Marke und Wettbewerbsvorteil zugleich. Wir verbinden Design, Technik und Strategie für maximale Wirkung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#fcd066] text-[#0c1832]/10 p-8 rounded-xl border border-[#fcd066]/30">
            <h3 className="text-2xl font-semibold text-[#fcd066] mb-4">Unsere Kompetenzen</h3>
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
                <li key={index} className="flex items-start gap-3 text-gray-100">
                  <span className="text-[#fcd066]">{item.split(' ')[0]}</span>
                  <span>{item.split(' ').slice(1).join(' ')}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#fcd066] text-[#0c1832]/10 p-8 rounded-xl border border-[#fcd066]/30">
            <h3 className="text-2xl font-semibold text-[#fcd066] mb-4">Was uns auszeichnet</h3>
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
                <li key={index} className="flex items-start gap-3 text-gray-100">
                  <span className="text-[#fcd066]">{item.split(' ')[0]}</span>
                  <span>{item.split(' ').slice(1).join(' ')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#1a2b5a] p-8 rounded-xl border border-blue-900/50">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Unser Webentwicklungs-Prozess</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#0c1832] p-4 rounded-lg">
              <div className="text-4xl mb-2 text-[#fcd066]">1</div>
              <h4 className="font-bold text-white mb-2">Analyse</h4>
              <p className="text-sm text-gray-400">Zielgruppen-Check, SEO-Audit und technische Planung.</p>
            </div>
            <div className="bg-[#0c1832] p-4 rounded-lg">
              <div className="text-4xl mb-2 text-[#fcd066]">2</div>
              <h4 className="font-bold text-white mb-2">Design</h4>
              <p className="text-sm text-gray-400">Erstellung von Wireframes und klickbaren Prototypen.</p>
            </div>
            <div className="bg-[#0c1832] p-4 rounded-lg">
              <div className="text-4xl mb-2 text-[#fcd066]">3</div>
              <h4 className="font-bold text-white mb-2">Code</h4>
              <p className="text-sm text-gray-400">Programmierung mit modernsten Frameworks (Next.js).</p>
            </div>
            <div className="bg-[#0c1832] p-4 rounded-lg">
              <div className="text-4xl mb-2 text-[#fcd066]">4</div>
              <h4 className="font-bold text-white mb-2">Launch</h4>
              <p className="text-sm text-gray-400">Testing, Go-Live und kontinuierliche Wartung.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#fcd066] text-[#0c1832]/20 p-10 rounded-xl text-center border border-[#fcd066]/30 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-white">Bereit für den nächsten Schritt?</h2>
          <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
            Ob Relaunch, Redesign oder Neuentwicklung, wir bauen Ihre Website so, dass sie Besucher begeistert und messbare Ergebnisse liefert.
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-[#fcd066] text-[#0c1832] hover:bg-[#fcd066] text-[#0c1832] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
          >
            Jetzt kostenlos beraten lassen
          </a>
        </div>

      </div>
    </section>
  );
}