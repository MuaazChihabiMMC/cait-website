// components/WebPageExpanded.tsx

export default function WebPageExpanded() {
    return (
      <section className="bg-white text-black py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-14">
  
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Webentwicklung & Design von CAITSocialMedia
            </h1>
            <p className="text-lg max-w-3xl mx-auto">
              Maßgeschneiderte digitale Lösungen, die überzeugen, performen und mit deinem Unternehmen wachsen. Professionell umgesetzt von Experten.
            </p>
          </div>
  
          <div>
            <h2 className="text-3xl font-bold mb-4">Warum professionelle Webentwicklung wichtig ist</h2>
            <p className="text-gray-800">
              Eine starke Website ist heute mehr als nur Online-Präsenz. Sie ist Verkaufsplattform, Kontaktpunkt, Marke und Wettbewerbsvorteil zugleich. Wir verbinden Design, Technik und Strategie für maximale Wirkung.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Unsere Kompetenzen</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>💻 Front-End & Back-End Entwicklung</li>
                <li>🔁 Full-Stack-Lösungen aus einer Hand</li>
                <li>📱 Mobile-Optimierung & responsives Design</li>
                <li>🛍️ E-Commerce (Shopify, WooCommerce, Magento)</li>
                <li>🧠 UI/UX-Design & Conversion-Optimierung</li>
                <li>🧱 CMS-Integration: WordPress, Drupal, Headless</li>
                <li>⚙️ Ladezeit- & Performance-Optimierung</li>
                <li>🔐 Sicherheit, Backups, DSGVO & SSL</li>
                <li>📈 SEO-freundliches Webdesign & Struktur</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Was uns auszeichnet</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Individuelles Design – keine Templates</li>
                <li>Skalierbare Lösungen für jedes Geschäftsmodell</li>
                <li>Technisch modern: React, Vue, Next.js, Node</li>
                <li>Responsives & barrierefreies Design</li>
                <li>Konversionsstarke CTAs und intuitive Navigation</li>
                <li>Hosting-Beratung & Cloud-Integration</li>
                <li>Schnittstellen zu Buchungssystemen, CRMs & mehr</li>
                <li>Datenbasierte Optimierung mit Heatmaps & A/B-Tests</li>
              </ul>
            </div>
          </div>
  
          <div className="bg-blue-900 text-white p-10 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für den nächsten Schritt?</h2>
            <p className="mb-6">Ob Relaunch, Redesign oder Neuentwicklung – wir bauen Ihre Website so, dass sie Besucher begeistert und messbare Ergebnisse liefert.</p>
            <a href="/kontakt" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition">
              Jetzt kostenlos beraten lassen
            </a>
          </div>
  
        </div>
      </section>
    );
  }
  