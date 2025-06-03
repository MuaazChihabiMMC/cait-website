// components/SocialMediaFaq.tsx

'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Was umfasst Social Media Marketing?',
    answer: 'Social Media Marketing beinhaltet das strategische Planen, Erstellen und Veröffentlichen von Inhalten auf Plattformen wie Instagram, Facebook, LinkedIn oder TikTok, um Markenbekanntheit, Reichweite und Kundenbindung zu erhöhen.',
  },
  {
    question: 'Welche Plattformen betreut ihr?',
    answer: 'Wir betreuen alle gängigen Kanäle: Instagram, Facebook, LinkedIn, TikTok, Pinterest und YouTube, je nach Zielgruppe und Branche.',
  },
  {
    question: 'Warum ist Social Media für Unternehmen wichtig?',
    answer: 'Weil es Sichtbarkeit schafft, Vertrauen stärkt und Kundenbindung aufbaut. Außerdem ist es ein kosteneffizienter Kanal zur Leadgenerierung und Kundenkommunikation.',
  },
  {
    question: 'Was unterscheidet organisches Wachstum von bezahlter Werbung?',
    answer: 'Organisches Wachstum basiert auf Reichweite durch Inhalte. Paid Ads erzielen Reichweite durch Budgeteinsatz. Optimal ist eine Kombination aus beidem.',
  },
  {
    question: 'Erstellt ihr auch Beiträge und Designs?',
    answer: 'Ja. Wir übernehmen die komplette Content Creation: Grafiken, Reels, Texte, Story-Vorlagen, auf Wunsch mit Branding & Redaktionsplan.',
  },
  {
    question: 'Wie oft wird gepostet?',
    answer: 'Das hängt vom Paket ab, z.B. 3-5 Beiträge pro Woche inkl. Storys, Reels und Interaktion. Wir beraten dich zur optimalen Frequenz.',
  },
  {
    question: 'Betreut ihr auch Social Ads (bezahlte Werbung)?',
    answer: 'Ja, von Kampagnenstrategie über Werbeanzeigen-Design bis hin zu Budgetverwaltung und A/B-Tests bieten wir Full-Service Ads Management.',
  },
  {
    question: 'Wie messt ihr Erfolge?',
    answer: 'Wir tracken Reichweite, Engagement, Klicks, Leads & Sales, und erstellen monatlich transparente Berichte mit Handlungsempfehlungen.',
  },
  {
    question: 'Wie läuft die Zusammenarbeit ab?',
    answer: 'Wir starten mit Strategie, Zielgruppenanalyse und Contentplanung. Danach erfolgt Produktion, Freigabe & regelmäßiges Reporting.',
  },
  {
    question: 'Wie schnell sieht man Erfolge?',
    answer: 'Das hängt vom Ziel ab. Reichweite & Engagement verbessern sich oft in den ersten Wochen, Sales meist nach 2-3 Monaten.',
  },
  {
    question: 'Übernehmt ihr auch Community Management?',
    answer: 'Ja. Wir beantworten Kommentare, DMs und moderieren Diskussionen im Namen deiner Marke, schnell, empathisch & markenkonform.',
  },
  {
    question: 'Gibt es feste Laufzeiten?',
    answer: 'Wir bieten flexible monatliche Pakete, ideal für langfristige Zusammenarbeit oder kurzfristige Kampagnenphasen.',
  },
  {
    question: 'Entwerft ihr auch Social Media Strategien?',
    answer: 'Ja. Wir erstellen detaillierte Strategiepapiere inklusive Zielgruppenanalyse, Formate, Hashtag-System, KPIs & Posting-Frequenz.',
  },
  {
    question: 'Wie wichtig ist ein einheitliches Design?',
    answer: 'Sehr wichtig. Einheitliches Branding schafft Wiedererkennung, Vertrauen und ein professionelles Auftreten im Feed.',
  },
  {
    question: 'Was kostet professionelles Social Media Management?',
    answer: 'Das hängt vom Leistungsumfang ab. Unsere Pakete starten ab 600€/Monat, individuell skalierbar je nach Kanal und Ziel.',
  },
  {
    question: 'Erstellt ihr auch Instagram Reels und TikToks?',
    answer: 'Ja. Wir entwickeln kreative Short-Form-Video-Strategien inklusive Skript, Schnitt und Musik, ideal für virale Reichweite.',
  },
  {
    question: 'Habt ihr Erfahrung mit B2B-Social-Media?',
    answer: 'Ja, besonders mit LinkedIn & YouTube für B2B-Branchen. Wir passen Inhalte gezielt für Entscheider, Fachkräfte & HR an.',
  },
  {
    question: 'Betreut ihr auch Influencer-Kooperationen?',
    answer: 'Ja. Wir suchen passende Creator, kümmern uns um Briefings, Vertragsabwicklung & Auswertung der Kooperationen.',
  },
  {
    question: 'Könnt ihr bestehende Accounts optimieren?',
    answer: 'Ja. Wir analysieren dein Profil, optimieren Bio, Highlights, visuelle Sprache und Contentstruktur für besseren ersten Eindruck.',
  },
  {
    question: 'Was macht CaitSocialMedia besonders?',
    answer: 'Individuelle Beratung, kreative Designs, datengetriebene Strategien & transparente Kommunikation, mit echten Ergebnissen.',
  },
];

export default function SocialMediaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0c1832] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">
          Häufige Fragen zum Thema Social Media
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-400/30 rounded-xl overflow-hidden bg-blue-500/10 shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <button
                className="w-full text-left px-6 py-5 bg-blue-500/20 hover:bg-blue-500/30 transition-all text-lg font-medium text-white flex items-center"
                onClick={() => toggle(index)}
              >
                <span className="mr-4 text-blue-300">
                  {openIndex === index ? '▼' : '►'}
                </span>
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 text-blue-100 bg-blue-500/10 border-t border-blue-400/30">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/kontakt"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]"
          >
            Weitere Fragen? Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}