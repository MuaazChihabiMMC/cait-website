// app/ecommerce-seo-berlin/page.tsx
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: { absolute: "E-Commerce SEO Berlin | Shop-Optimierung & Top-Rankings | CAIT" },
  description: "Spezial-SEO für Berliner Online-Shops ✓ Technische Optimierung ✓ Lokale SEO ✓ Content-Strategie. Jetzt kostenlose Analyse anfordern!",
  alternates: {
    canonical: "https://www.caitsocialmedia.com/seo-agentur-berlin/ecommerce-seo"
  },
  keywords: [
    "E-Commerce SEO Berlin",
    "Onlineshop Optimierung Berlin",
    "Shop SEO Berlin",
    "E-Commerce Suchmaschinenoptimierung Berlin",
    "Onlinehandel SEO Berlin"
  ]
}

export default function EcommerceSeoBerlin() {
  return (
    <article className="bg-[#0c1527] text-white">
      {/* Hero Section */}
      <section className="relative isolate bg-gradient-to-b from-night-700 to-night py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-cover opacity-5 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1527]/90 via-[#0c1527]/70 to-[#0c1527]/90 z-0" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block bg-night-600 text-sm px-4 py-1.5 rounded-full">
            E-Commerce SEO Berlin
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-gold-400">
              Höhere Rankings.
            </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-gold-400">
              Mehr Berliner Umsatz.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-ink-soft mb-10 max-w-3xl mx-auto">
            Spezial-SEO für Berliner Online-Shops: Wir optimieren Ihre Produktseiten, Kategorien und technische Basis für mehr Sichtbarkeit bei Google und mehr Verkäufe aus Berlin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="inline-block bg-night-600 hover:bg-gold-300 text-night font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Kostenlose Shop-Analyse
            </a>
            <a
              href="tel:+493022689840"
              className="inline-block border-2 border-gold-300/40 text-gold-300 hover:bg-gold-300 hover:text-[#0c1527] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Berlin 030 2268 9840
            </a>
          </div>
        </div>
      </section>

      {/* Why E-Commerce SEO */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold-200">
              Warum spezielle SEO für Berliner Online-Shops?
            </h2>
            <p className="text-ink-soft mb-6 text-lg">
              E-Commerce SEO unterscheidet sich fundamental von anderen SEO-Bereichen. Als <strong>Berliner SEO-Agentur</strong> kennen wir die besonderen Herausforderungen von Online-Shops:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Produktkategorien mit hunderten Artikeln",
                "Duplicate Content durch Filter & Varianten",
                "Technische Herausforderungen bei großen Shops",
                "Lokale Optimierung für Berliner Kunden",
                "Konversion-Optimierung von Produktseiten"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold-300 mt-1">•</span>
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-night-700/30 p-5 rounded-lg border border-night-600">
              <p className="text-ink-soft">
                <strong>Berliner E-Commerce Fakt:</strong> Shops auf Seite 1 von Google generieren bis zu 92% des organischen Traffics. Mit unserer spezialisierten SEO-Strategie bringen wir Ihren Berliner Shop nach oben.
              </p>
            </div>
          </div>

          <div className="bg-[#131f38] p-8 rounded-xl border border-[#1b2a4a]">
            <h3 className="text-2xl font-semibold mb-4 text-gold-200">Vorteile für Berliner Shops</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Mehr Sichtbarkeit in Berlin",
                  content: "Optimierung für Berlin-spezifische Suchanfragen wie 'Kaufen in Berlin'"
                },
                {
                  title: "Höhere Conversion Rates",
                  content: "Shop-optimierte Inhalte, die Berliner Kunden überzeugen"
                },
                {
                  title: "Technische Perfektion",
                  content: "Schnelle Ladezeiten, mobile Optimierung und fehlerfreie Struktur"
                },
                {
                  title: "Nachhaltiges Wachstum",
                  content: "Langfristige Ranking-Verbesserungen statt kurzfristiger Tricks"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-night-700 w-12 h-12 rounded-full flex items-center justify-center text-gold-200 font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gold-200 mb-1">{item.title}</h4>
                    <p className="text-ink-soft">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#0c1527] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold-200 text-center">
            Unsere E-Commerce SEO Leistungen für Berlin
          </h2>
          <p className="text-ink-soft text-center max-w-2xl mx-auto mb-16">
            Maßgeschneiderte Lösungen für Berliner Online-Shops - von der technischen Basis bis zur Conversion-Optimierung
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technische Shop-Optimierung",
                icon: "⚙️",
                description: "Core Web Vitals, Mobile Performance, Indexierung, Crawling-Fehlerbehebung für Berliner Shops"
              },
              {
                title: "Produkt-SEO Berlin",
                icon: "📦",
                description: "Optimierung von Produktseiten, Meta-Daten, Unique Content und Schema Markup für Berliner Kunden"
              },
              {
                title: "Kategorie-Optimierung",
                icon: "🗂️",
                description: "Strukturierung von Kategorieseiten, Filteroptimierung und Duplicate Content Lösung"
              },
              {
                title: "Lokale E-Commerce SEO",
                icon: "📍",
                description: "Google Business Optimierung, lokale Keywords und Sichtbarkeit für Berlin"
              },
              {
                title: "Content-Strategie für Shops",
                icon: "📝",
                description: "Produktbeschreibungen, Kategorietexte und Blogcontent für Berliner Zielgruppen"
              },
              {
                title: "Conversion-Optimierung",
                icon: "📈",
                description: "Analyse und Verbesserung der Kaufprozesse für höhere Umsätze aus Berlin"
              }
            ].map((service, index) => (
              <div key={index} className="bg-[#131f38] border border-[#1b2a4a] p-8 rounded-xl hover:border-gold-300/40 transition-all">
                <div className="text-3xl mb-4 text-gold-300">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gold-200">{service.title}</h3>
                <p className="text-ink-soft">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold-200 text-center">
            Unser 5-Stufen-Plan für Berliner E-Commerce SEO
          </h2>

          <div className="mt-16 space-y-12">
            {[
              {
                step: "1. Analyse & Strategie",
                content: "Detailliertes SEO-Audit, Konkurrenzanalyse mit Berlin-Fokus, Zieldefinition für Ihren Shop"
              },
              {
                step: "2. Technische Optimierung",
                content: "Behebung technischer Probleme, Mobile Optimization, Ladezeiten-Optimierung für Berliner Nutzer"
              },
              {
                step: "3. OnPage-Optimierung",
                content: "Keyword-Optimierung, Content-Erstellung, Meta-Tags und interne Verlinkung für Berliner Suchanfragen"
              },
              {
                step: "4. Lokale SEO",
                content: "Google Business Optimierung, lokale Backlinks und Sichtbarkeit in Berlin steigern"
              },
              {
                step: "5. Monitoring & Skalierung",
                content: "Laufende Erfolgskontrolle, Anpassung der Strategie, Erweiterung auf neue Berliner Keywords"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-night-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gold-200">{item.step}</h3>
                  <p className="text-ink-soft">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold-200 text-center">
            Häufige Fragen zu E-Commerce SEO in Berlin
          </h2>

          <div className="mt-12 space-y-6">
            {[
              {
                question: "Warum braucht mein Berliner Online-Shop spezielle SEO?",
                answer: "E-Commerce SEO stellt besondere Anforderungen: Produktkategorien mit vielen Artikeln, Duplicate Content durch Varianten, komplexe Navigation und lokale Optimierung für Berlin. Generische SEO-Strategien greifen hier oft zu kurz."
              },
              {
                question: "Wie lange dauert es, bis SEO-Ergebnisse sichtbar werden?",
                answer: "Erste Verbesserungen sind oft nach 2-3 Monaten sichtbar, signifikante Ergebnisse nach 4-6 Monaten. Der genaue Zeitrahmen hängt vom Wettbewerbsniveau Ihrer Branche in Berlin und dem aktuellen Zustand Ihrer Website ab."
              },
              {
                question: "Kann ich mit SEO meinen Berliner Umsatz steigern?",
                answer: "Ja, gezielte SEO-Maßnahmen führen zu mehr qualifiziertem Traffic aus Berlin. Durch Optimierung der Customer Journey und Conversion Rate Optimization können wir Ihre Umsätze nachhaltig steigern - wie unser Fallbeispiel zeigt."
              },
              {
                question: "Wie unterscheidet sich lokale SEO für Berliner Shops?",
                answer: "Lokale SEO für Berliner E-Commerce fokussiert auf Suchanfragen mit Regionalbezug ('Kaufen in Berlin'), Optimierung des Google Business Profils und Aufbau lokaler Backlinks. Wir integrieren zudem Berlin-spezifische Inhalte und Keywords."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#131f38] p-6 rounded-xl border border-[#1b2a4a]">
                <h3 className="text-xl font-semibold mb-3 text-gold-200">{faq.question}</h3>
                <p className="text-ink-soft">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </article>
  )
}