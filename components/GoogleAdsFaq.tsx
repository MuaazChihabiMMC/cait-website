// components/GoogleAdsFaq.tsx
'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Was ist Google Ads?',
    answer: 'Google Ads ist ein Werbesystem von Google, mit dem Unternehmen bezahlte Anzeigen in den Google-Suchergebnissen und im gesamten Werbenetzwerk schalten können.',
  },
  {
    question: 'Wie funktionieren Google Ads?',
    answer: 'Google Ads funktioniert auf Basis eines Auktionssystems. Werbetreibende bieten auf Keywords, um bei passenden Suchanfragen angezeigt zu werden.',
  },
  {
    question: 'Welche Vorteile bieten Google Ads?',
    answer: 'Google Ads ermöglicht schnelle Sichtbarkeit, gezielte Ansprache von Zielgruppen, messbare Ergebnisse und hohe Flexibilität bei Budget und Anzeigenformat.',
  },
  {
    question: 'Was kostet Google Ads?',
    answer: 'Die Kosten hängen vom Wettbewerb auf Keywords, der Klickrate (CTR) und dem Qualitätsfaktor ab. Du bestimmst dein tägliches oder monatliches Budget.',
  },
  {
    question: 'Welche Arten von Google Ads gibt es?',
    answer: 'Es gibt Suchanzeigen, Display-Anzeigen, Videoanzeigen (YouTube), Shopping-Anzeigen (E-Commerce) und App-Kampagnen.',
  },
  {
    question: 'Wie schnell sehe ich Ergebnisse mit Google Ads?',
    answer: 'Oft schon nach wenigen Stunden. Allerdings sind regelmäßige Optimierungen nötig, um stabile und skalierbare Ergebnisse zu erzielen.',
  },
  {
    question: 'Muss ich eine Landingpage haben?',
    answer: 'Ja, eine optimierte Zielseite erhöht die Qualität der Anzeige, verbessert die Conversion-Rate und senkt die Klickkosten (CPC).',
  },
  {
    question: 'Was bedeutet Qualitätsfaktor?',
    answer: 'Der Qualitätsfaktor ist ein Wert (1-10), der die Relevanz von Anzeige, Keyword und Landingpage bewertet. Er beeinflusst den Anzeigenrang und Preis.',
  },
  {
    question: 'Kann ich mein Google Ads-Konto selbst verwalten?',
    answer: 'Grundsätzlich ja, aber eine professionelle Betreuung steigert Performance, spart Budget und nutzt alle Optimierungsmöglichkeiten.',
  },
  {
    question: 'Wie messe ich den Erfolg meiner Kampagne?',
    answer: 'Mit Tools wie Google Analytics, Conversions-Tracking, Call-Tracking und individuellem Reporting. Wir richten alles für dich ein.',
  },
  {
    question: 'Welche Branchen profitieren besonders von Google Ads?',
    answer: 'Dienstleister, Online-Shops, Coaches, Berater, Agenturen, lokale Anbieter, eigentlich jedes Business mit klarem Ziel & Angebot.',
  },
  {
    question: 'Wie viel sollte ich monatlich investieren?',
    answer: 'Ein Startbudget von 500-1.000€ ist oft sinnvoll. Wir beraten dich transparent, abhängig von Branche, Wettbewerb und Zielen.',
  },
  {
    question: 'Was ist Remarketing?',
    answer: 'Remarketing zeigt Anzeigen gezielt Besuchern, die deine Website bereits besucht haben, das erhöht die Conversion-Chance enorm.',
  },
  {
    question: 'Was sind negative Keywords?',
    answer: 'Keywords, bei denen deine Anzeigen NICHT erscheinen sollen. So vermeidest du Streuverluste und sparst Budget.',
  },
  {
    question: 'Was unterscheidet Google Ads von SEO?',
    answer: 'Google Ads bringt sofort bezahlte Sichtbarkeit, SEO liefert langfristig organischen Traffic. Die Kombination ist ideal.',
  },
  {
    question: 'Betreut ihr auch bestehende Google Ads-Konten?',
    answer: 'Ja, wir analysieren und optimieren bestehende Accounts, oft holen wir 30-50% mehr aus deinem aktuellen Budget heraus.',
  },
  {
    question: 'Übernehmt ihr auch die Texterstellung für Anzeigen?',
    answer: 'Ja, unsere Performance-Texter schreiben suchintensive und konversionsstarke Anzeigentexte, passend zur Zielgruppe.',
  },
  {
    question: 'Erstellt ihr auch Anzeigen für YouTube oder das Displaynetzwerk?',
    answer: 'Ja, inklusive Bannerdesign, Targeting, Budgetsteuerung und A/B-Tests.',
  },
  {
    question: 'Wie lange bindet man sich vertraglich?',
    answer: 'Unsere Betreuung ist flexibel, monatlich kündbar oder mit festen Laufzeiten je nach Zielsetzung. Kein Risiko.',
  },
  {
    question: 'Was unterscheidet eure Agentur von anderen?',
    answer: 'Erfahrung, Fokus auf Performance, transparente Kommunikation, keine versteckten Kosten, und echte Ergebnisse. Wir zeigen dir, was zählt.',
  },
];

export default function GoogleAdsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0c1832] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#fcd066]">
          Häufige Fragen zu Google Ads
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#fcd066]/30 rounded-lg overflow-hidden bg-[#fcd066] text-[#0c1832]/10 shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <button
                className="w-full text-left px-6 py-5 bg-[#fcd066] text-[#0c1832]/20 hover:bg-[#fcd066] text-[#0c1832]/30 transition-all text-lg font-medium text-white flex items-center"
                onClick={() => toggle(index)}
              >
                <span className="mr-3 text-[#fcd066]">
                  {openIndex === index ? '▼' : '►'}
                </span>
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 text-gray-200 bg-[#fcd066] text-[#0c1832]/10 border-t border-[#fcd066]/30">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}