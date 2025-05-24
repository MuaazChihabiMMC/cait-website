// components/MainExpandedHome.tsx

export default function MainExpandedHome() {
    return (
      <section className="bg-white text-black py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
  
          {/* Hero */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Willkommen bei CAIT Agentur, Ihr Partner für digitalen Erfolg
            </h1>
            <p className="text-lg max-w-3xl mx-auto">
              Entfalten Sie heute das volle Potenzial Ihres Unternehmens im Internet. Unser Expertenteam entwickelt digitale Lösungen, die messbar wirken, individuell, modern und ergebnisorientiert.
            </p>
          </div>
  
          {/* Leistungen */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Unsere Spezialisierung</h2>
              <p className="text-gray-800 mb-4">
                Wir bieten maßgeschneiderte digitale Dienstleistungen, um Ihre Marke online sichtbar und erfolgreich zu machen. Unser Fokus: Wachstum, Sichtbarkeit und echte Ergebnisse.
              </p>
              <ul className="space-y-2 list-disc list-inside text-blue-900 font-medium">
                <li>🔍 Suchmaschinenoptimierung (SEO)</li>
                <li>💻 Webdesign & Webentwicklung</li>
                <li>📢 Google Ads Kampagnen</li>
                <li>📱 Social Media Marketing & Content</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Unsere Stärken:</h3>
              <ul className="space-y-2 text-black">
                <li>✅ Bewährte Erfolgsgeschichten & Referenzen</li>
                <li>✅ Individuelle, datenbasierte Strategien</li>
                <li>✅ Höchste Performance bei Design & Technik</li>
                <li>✅ Volle Transparenz & persönlicher Support</li>
              </ul>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="text-center py-10">
            <h2 className="text-3xl font-bold mb-4">
              Handeln Sie jetzt, stärken Sie Ihre digitale Präsenz
            </h2>
            <p className="text-lg mb-6">
              Lassen Sie uns Ihre Vision gemeinsam verwirklichen. Mit wirkungsvollen Strategien bringen wir Ihre Website, Ihre Inhalte und Ihre Werbung auf das nächste Level.
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Jetzt unverbindlich beraten lassen
            </a>
          </div>
  
          {/* Kundenstimmen */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-8">Was unsere Kunden sagen</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="bg-blue-100 p-6 rounded-xl">
                <p className="text-lg italic mb-2">
                  „Ich bin absolut beeindruckt von der Webseite, die sie gestaltet haben. Sie ist modern, übersichtlich und funktioniert einwandfrei. Ihre SEO- und Marketingstrategie hat meine Besucherzahlen deutlich erhöht.“
                </p>
                <footer className="text-right font-semibold">, Emily Roberts</footer>
              </blockquote>
              <blockquote className="bg-blue-100 p-6 rounded-xl">
                <p className="text-lg italic mb-2">
                  „Die Google-Werbekampagnen brachten sofort Ergebnisse. Das Team ist professionell, kommunikativ und effektiv. Sehr zu empfehlen!“
                </p>
                <footer className="text-right font-semibold">, Jason Malik</footer>
              </blockquote>
              <blockquote className="bg-blue-100 p-6 rounded-xl">
                <p className="text-lg italic mb-2">
                  „Von der Beratung bis zur Umsetzung , alles top! Meine neue Webseite sieht fantastisch aus, und durch die SEO-Maßnahmen habe ich bessere Platzierungen.“
                </p>
                <footer className="text-right font-semibold">, Sofia Ahmed</footer>
              </blockquote>
              <blockquote className="bg-blue-100 p-6 rounded-xl">
                <p className="text-lg italic mb-2">
                  „Hervorragender Service von Anfang bis Ende! Die Webentwicklung und Google Ads haben meine Sichtbarkeit deutlich gesteigert.“
                </p>
                <footer className="text-right font-semibold">, Liam Turner</footer>
              </blockquote>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  