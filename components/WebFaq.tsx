// components/WebFaq.tsx

'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Was kostet eine professionelle Website bei CAITSocialMedia?',
    answer:
      'Die Kosten hängen vom Umfang ab. Eine einfache Unternehmenswebsite startet ab ca. 1.500 €, komplexe Systeme wie Shops oder Portale liegen entsprechend höher. Du erhältst von uns ein individuelles Angebot.',
  },
  {
    question: 'Wie lange dauert die Entwicklung einer Website?',
    answer:
      'Das hängt vom Projekt ab. Eine Standardseite dauert in der Regel 3–6 Wochen. Bei komplexen Projekten (z. B. Shop + CRM + API) können es 8–12 Wochen sein.',
  },
  {
    question: 'Ist die Website responsiv (für Handy & Tablet)?',
    answer:
      'Ja, 100 %. Jede Website ist bei uns für mobile Geräte optimiert – für ein perfektes Nutzererlebnis auf Smartphone, Tablet und Desktop.',
  },
  {
    question: 'Bietet ihr auch Webdesign an – oder nur Entwicklung?',
    answer:
      'Beides! Wir gestalten individuelle UI/UX-Designs und setzen sie technisch sauber um – Full-Service aus einer Hand.',
  },
  {
    question: 'Arbeitet ihr mit WordPress oder baut ihr alles selbst?',
    answer:
      'Beides ist möglich. Je nach Projektziel nutzen wir WordPress, Webflow oder setzen individuelle Systeme mit React/Next.js um.',
  },
  {
    question: 'Könnt ihr bestehende Websites überarbeiten oder modernisieren?',
    answer:
      'Ja. Ob Redesign, Performance-Tuning oder technisches Update – wir analysieren Ihre aktuelle Website und bringen sie auf den neuesten Stand.',
  },
  {
    question: 'Baut ihr auch Online-Shops?',
    answer:
      'Ja, wir entwickeln Shops mit Shopify, WooCommerce, Shopware oder Headless-Commerce-Ansätzen – mobiloptimiert, schnell & konvertierend.',
  },
  {
    question: 'Ist SEO bei der Website inklusive?',
    answer:
      'Ja, alle unsere Websites enthalten eine SEO-Grundoptimierung: Meta-Tags, Ladezeit, strukturierter Code, mobile Optimierung und mehr.',
  },
  {
    question: 'Können wir die Website später selbst pflegen?',
    answer:
      'Natürlich! Wir integrieren CMS-Systeme wie WordPress, Strapi oder Webflow und schulen Ihr Team für einfache Content-Pflege.',
  },
  {
    question: 'Ist ein Kontaktformular oder Newsletter-Integration möglich?',
    answer:
      'Ja. Wir binden alle gängigen Tools ein – ob Kontaktformular mit E-Mail-Versand, Terminbuchung, Newsletter oder CRM-Anbindung.',
  },
  {
    question: 'Welche Technologien verwendet ihr?',
    answer:
      'Je nach Projekt setzen wir auf React, Next.js, Tailwind, Node.js, WordPress, PHP, SQL, Headless CMS, REST APIs u. v. m.',
  },
  {
    question: 'Ist Hosting auch Teil des Angebots?',
    answer:
      'Ja. Auf Wunsch übernehmen wir das Hosting auf High-Performance-Servern inkl. SSL, Backups, Wartung und Domain.',
  },
  {
    question: 'Was ist, wenn ich später Änderungen brauche?',
    answer:
      'Kein Problem. Wir bieten flexible Wartungs- und Supportpakete – oder setzen Änderungswünsche auf Anfrage um.',
  },
  {
    question: 'Wird meine Website DSGVO-konform?',
    answer:
      'Ja. Wir achten auf Datenschutz: Cookie-Consent-Tools, SSL-Verschlüsselung, Datenschutzerklärung und Impressum inklusive.',
  },
  {
    question: 'Wie stellt ihr die Ladegeschwindigkeit sicher?',
    answer:
      'Durch optimierte Bilder, Lazy Loading, minimiertes CSS/JS, Caching und Core Web Vitals-Checks. Performance ist Teil unseres Prozesses.',
  },
  {
    question: 'Wie funktioniert die Zusammenarbeit?',
    answer:
      'Briefing → Design → Entwicklung → Feedback → Go-Live. Wir arbeiten agil, transparent und persönlich – mit fester Ansprechperson.',
  },
  {
    question: 'Was ist eine Headless-Website?',
    answer:
      'Ein System, bei dem Backend und Frontend getrennt sind. Das ermöglicht mehr Flexibilität, Geschwindigkeit und moderne Nutzererlebnisse.',
  },
  {
    question: 'Könnt ihr auch mehrsprachige Websites bauen?',
    answer:
      'Ja. Wir erstellen mehrsprachige Seiten mit Sprachumschaltung, länderspezifischem Content & SEO-Optimierung für jede Version.',
  },
  {
    question: 'Wie ist der Ablauf für ein neues Projekt?',
    answer:
      'Nach dem Erstgespräch erstellen wir ein Konzept, Angebot und Zeitplan. Nach Freigabe starten Design & Entwicklung Schritt für Schritt.',
  },
  {
    question: 'Kann ich meine bestehende Domain weiterverwenden?',
    answer:
      'Natürlich! Wir helfen bei der Domain-Verknüpfung, dem Umzug oder der Einrichtung von Subdomains für neue Projekte.',
  },
];

export default function WebFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
          Häufig gestellte Fragen zur Webentwicklung
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-300 rounded-lg overflow-hidden bg-white shadow-md"
            >
              <button
                className="w-full text-left px-4 py-4 bg-blue-200 hover:bg-blue-300 transition-all text-lg font-medium"
                onClick={() => toggle(index)}
              >
                {openIndex === index ? '▼' : '►'} {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-4 py-4 text-black bg-white border-t border-blue-300">
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