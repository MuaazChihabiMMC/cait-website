// app/beratung/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SEO Beratung Berlin | Kostenlose Strategie-Analyse | CAIT",
  description: "Professionelle SEO-Beratung für Berliner Unternehmen ✓ Technische Analyse ✓ Strategieentwicklung ✓ Maßgeschneiderte Lösungen. Jetzt Termin vereinbaren!",
  alternates: {
    canonical: "https://www.caitsocialmedia.com/seo-agentur-berlin/beratung"
  },
  keywords: [
    "SEO Beratung Berlin",
    "Suchmaschinenoptimierung Beratung Berlin",
    "SEO Experten Berlin",
    "SEO Agentur Beratung",
    "Kostenlose SEO-Analyse Berlin"
  ]
}

export default function BeratungPage() {
  return (
    <article className="bg-[#0c1832] text-white">
      {/* Hero Section */}
      <section className="relative isolate bg-gradient-to-b from-blue-900 to-blue-700 py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-cover opacity-5 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1832]/90 via-[#0c1832]/70 to-[#0c1832]/90 z-0" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block bg-blue-600 text-sm px-4 py-1.5 rounded-full">
            SEO-Strategieberatung
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
              SEO-Beratung
            </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-300">
              für Berliner Unternehmen
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Kostenlose Erstberatung mit individueller Strategieanalyse - Entdecken Sie Ihr ungenutztes SEO-Potenzial mit Experten aus Berlin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Termin vereinbaren
            </a>
            <a
              href="tel:+493022689840"
              className="inline-block border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-[#0c1832] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Berlin 030 2268 9840
            </a>
          </div>
        </div>
      </section>

      {/* Why Consultation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
              Warum eine SEO-Beratung in Berlin?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              In der dynamischen Berliner Wirtschaft entscheidet digitale Sichtbarkeit über Erfolg oder Misserfolg. Eine professionelle SEO-Beratung gibt Ihnen:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Klare Analyse Ihrer aktuellen SEO-Situation",
                "Identifikation von Wachstumschancen speziell für Berlin",
                "Maßgeschneiderte Strategie für Ihre Branche und Zielgruppe",
                "Praxistaugliche Umsetzungsempfehlungen",
                "Transparente Einschätzung des Investitionsbedarfs"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-900/30 p-5 rounded-lg border border-blue-700">
              <p className="text-blue-100">
                <strong>Berliner Unternehmen berichten:</strong> Nach unserer SEO-Beratung sehen 89% der Kunden innerhalb von 3 Monaten erste positive Veränderungen.
              </p>
            </div>
          </div>

          <div className="bg-[#1a2a4a] p-8 rounded-xl border border-[#2d3a5a]">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300 text-center">
              Ihr Weg zur kostenlosen Erstberatung
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: "1. Terminvereinbarung",
                  content: "Wählen Sie einen Wunschtermin für Ihr kostenloses Beratungsgespräch"
                },
                {
                  step: "2. Voranalyse",
                  content: "Wir analysieren vorab Ihre Website und Marktsituation in Berlin"
                },
                {
                  step: "3. Beratungsgespräch",
                  content: "60-minütiges Meeting (vor Ort in Berlin oder online)"
                },
                {
                  step: "4. Strategieempfehlung",
                  content: "Sie erhalten konkrete Handlungsempfehlungen für Ihr Unternehmen"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center text-blue-300 font-bold shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-1">{item.step}</h4>
                    <p className="text-blue-100">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Topics */}
      <section className="py-20 bg-[#0c1832] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300 text-center">
            Themen unserer SEO-Beratung in Berlin
          </h2>
          <p className="text-blue-100 text-center max-w-2xl mx-auto mb-16">
            Wir analysieren gemeinsam Ihre aktuelle Situation und entwickeln eine maßgeschneiderte Strategie
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technische SEO-Analyse",
                icon: "⚙️",
                description: "Prüfung von Website-Struktur, Ladezeiten, Mobile Usability und Indexierung"
              },
              {
                title: "Content-Strategie",
                icon: "📝",
                description: "Bewertung Ihrer Inhalte und Entwicklung einer Content-Strategie für Berlin"
              },
              {
                title: "Keyword-Recherche",
                icon: "🔍",
                description: "Identifikation relevanter Suchbegriffe für Ihr Berliner Unternehmen"
              },
              {
                title: "Lokale SEO-Optimierung",
                icon: "📍",
                description: "Strategie für mehr Sichtbarkeit in Berlin und Umgebung"
              },
              {
                title: "Backlink-Analyse",
                icon: "🔗",
                description: "Bewertung Ihrer Linkprofile und Entwicklung einer Linkbuilding-Strategie"
              },
              {
                title: "Wettbewerbsanalyse",
                icon: "📊",
                description: "Benchmarking gegen Ihre Berliner Wettbewerber"
              }
            ].map((service, index) => (
              <div key={index} className="bg-[#1a2a4a] border border-[#2d3a5a] p-8 rounded-xl hover:border-blue-400 transition-all">
                <div className="text-3xl mb-4 text-blue-400">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">{service.title}</h3>
                <p className="text-blue-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300 text-center">
            Was Sie von unserer Beratung erwarten können
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 border border-blue-700">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Ihr Nutzen</h3>
              <ul className="space-y-4">
                {[
                  "Kostenlose Erstanalyse Ihres SEO-Potenzials",
                  "Maßgeschneiderte Strategie für Ihr Berliner Unternehmen",
                  "Praxistaugliche Handlungsempfehlungen",
                  "Transparente Einschätzung von Aufwand und ROI",
                  "Keine Vertragsbindung oder weitere Verpflichtungen"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Ihre Vorteile</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Expertenwissen aus Berlin",
                    content: "15+ Jahre SEO-Erfahrung speziell mit Berliner Unternehmen"
                  },
                  {
                    title: "Branchenkenntnis",
                    content: "Tiefes Verständnis für Berlin-spezifische Marktanforderungen"
                  },
                  {
                    title: "Technische Expertise",
                    content: "Umfassende Analyse mit modernsten SEO-Tools"
                  },
                  {
                    title: "Individueller Ansatz",
                    content: "Keine Standardlösungen, sondern maßgeschneiderte Strategien"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center text-blue-300 font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-1">{item.title}</h4>
                      <p className="text-blue-100">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0c1832] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300 text-center">
            Das sagen Berliner Unternehmen
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Die SEO-Beratung hat uns völlig neue Perspektiven eröffnet. Innerhalb von 3 Monaten nach Umsetzung der Empfehlungen konnten wir unseren organischen Traffic verdoppeln.",
                author: "Sarah Meier, Geschäftsführerin BerlinMarketing GmbH"
              },
              {
                quote: "Endlich verstehen wir, wie SEO wirklich funktioniert! Die maßgeschneiderte Strategie speziell für unseren Berliner Markt war der Game-Changer für unser Business.",
                author: "Thomas Vogel, CTO TechStart Berlin"
              },
              {
                quote: "Die kompetente Beratung hat uns geholfen, unsere Ressourcen gezielt einzusetzen. Die vorgeschlagenen Maßnahmen zeigen bereits nach kurzer Zeit Wirkung.",
                author: "Julia Hoffmann, Online-Marketing Leiterin FashionBerlin"
              },
              {
                quote: "Als Berliner Startup hatten wir begrenzte Budgets. Die Beratung zeigte uns, welche SEO-Maßnahmen den größten Hebel für uns haben - mit beeindruckenden Ergebnissen.",
                author: "Markus Weber, Gründer FoodDelivery Berlin"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                <div className="text-blue-400 text-5xl mb-4">„</div>
                <p className="text-blue-100 italic mb-6">{testimonial.quote}</p>
                <div className="text-blue-300 font-semibold">{testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300 text-center">
            Häufige Fragen zur SEO-Beratung
          </h2>

          <div className="mt-12 space-y-6">
            {[
              {
                question: "Was kostet die SEO-Beratung?",
                answer: "Die Erstberatung ist für Berliner Unternehmen kostenlos. In diesem 60-minütigen Gespräch analysieren wir Ihre aktuelle Situation und entwickeln erste strategische Empfehlungen. Für umfassendere Analysen und Strategiepapiere bieten wir maßgeschneiderte Beratungspakete an."
              },
              {
                question: "Wie lange dauert eine Beratung?",
                answer: "Das kostenlose Erstgespräch dauert in der Regel 60 Minuten. Für umfassendere Beratungen bieten wir Pakete von 2-4 Stunden an, abhängig von der Komplexität Ihrer Anforderungen und der Größe Ihres Unternehmens."
              },
              {
                question: "Kann die Beratung online stattfinden?",
                answer: "Ja, wir bieten Beratungsgespräche sowohl online (per Videokonferenz) als auch vor Ort in Berlin an. Viele Kunden schätzen die Flexibilität der Online-Beratung, besonders bei knappen Zeitplänen."
              },
              {
                question: "Erhalte ich nach der Beratung konkrete Handlungsempfehlungen?",
                answer: "Ja, im Anschluss an Ihr Beratungsgespräch erhalten Sie eine schriftliche Zusammenfassung mit den wichtigsten Erkenntnissen und konkreten Handlungsempfehlungen für Ihr Berliner Unternehmen. Auf Wunsch erstellen wir auch detaillierte Strategiepapiere und Roadmaps."
              },
              {
                question: "Benötige ich Vorkenntnisse in SEO?",
                answer: "Nein, unsere Beratung ist für alle Wissensstände geeignet. Wir erklären komplexe Sachverhalte verständlich und fokussieren uns auf die für Ihr Unternehmen relevanten Aspekte. Egal ob SEO-Anfänger oder erfahrener Marketer - wir passen uns Ihrem Kenntnisstand an."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#1a2a4a] p-6 rounded-xl border border-[#2d3a5a]">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">{faq.question}</h3>
                <p className="text-blue-100">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </article>
  )
}