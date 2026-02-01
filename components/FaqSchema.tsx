// components/FaqSchema.tsx
'use client';

import { useEffect } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSchemaProps {
    faqs: FaqItem[];
    pageUrl?: string;
}

export default function FaqSchema({ faqs, pageUrl }: FaqSchemaProps) {
    useEffect(() => {
        // Create the FAQ structured data
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };

        // Check if script already exists
        const existingScript = document.querySelector('script[data-faq-schema]');
        if (existingScript) {
            existingScript.remove();
        }

        // Add the script
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-faq-schema', 'true');
        script.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(script);

        return () => {
            const scriptToRemove = document.querySelector('script[data-faq-schema]');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, [faqs, pageUrl]);

    return null;
}

// Export the FAQ data for each service page
export const seoFaqs: FaqItem[] = [
    {
        question: "Was kostet SEO bei einer Agentur in Berlin?",
        answer: "Die Kosten für SEO variieren je nach Umfang und Wettbewerb. Bei CAIT beginnen SEO-Pakete ab 990€ pro Monat für lokale SEO in Berlin. Für umfangreichere Projekte mit nationaler Ausrichtung liegen die Kosten zwischen 1.500€ und 5.000€ monatlich. Wir erstellen individuelle Angebote basierend auf Ihren Zielen und Ihrer aktuellen Situation."
    },
    {
        question: "Wie lange dauert es, bis SEO Ergebnisse zeigt?",
        answer: "SEO ist eine langfristige Strategie. Erste Verbesserungen in den Rankings sind oft nach 3-4 Monaten sichtbar, signifikante Ergebnisse typischerweise nach 6-12 Monaten. Die genaue Dauer hängt von Faktoren wie Wettbewerbsintensität, aktueller Website-Zustand und investiertem Budget ab. Als erfahrene SEO Agentur Berlin setzen wir auf nachhaltige Strategien, die dauerhaft wirken."
    },
    {
        question: "Was ist der Unterschied zwischen OnPage und OffPage SEO?",
        answer: "OnPage SEO umfasst alle Optimierungen auf Ihrer Website selbst: Content, Meta-Tags, technische Aspekte, interne Verlinkung und Nutzerfreundlichkeit. OffPage SEO bezieht sich auf externe Faktoren, hauptsächlich Backlinks von anderen Websites. Beide Bereiche sind wichtig für gute Rankings. Als SEO Agentur in Berlin optimieren wir beide Bereiche ganzheitlich."
    },
    {
        question: "Brauche ich lokale SEO, wenn meine Kunden in ganz Berlin sind?",
        answer: "Ja, lokale SEO ist für Berliner Unternehmen essenziell. Viele Suchanfragen haben lokale Intention, auch wenn kein Stadtteil genannt wird. Google zeigt lokale Ergebnisse basierend auf dem Standort des Suchenden. Mit lokaler SEO erscheinen Sie in Google Maps, im Local Pack und bei standortbezogenen Suchen in allen Berliner Bezirken."
    },
    {
        question: "Kann ich SEO auch selbst machen?",
        answer: "Grundlegende SEO-Maßnahmen können Sie selbst umsetzen, wie die Optimierung von Meta-Tags oder das Erstellen von Blogbeiträgen. Für nachhaltige Top-Rankings in einem wettbewerbsintensiven Markt wie Berlin empfehlen wir jedoch professionelle Unterstützung. Eine SEO Agentur bringt Expertise, Tools und Erfahrung mit, die den Unterschied zwischen Seite 2 und Platz 1 ausmachen können."
    },
    {
        question: "Wie messen Sie den SEO-Erfolg?",
        answer: "Wir messen SEO-Erfolg anhand verschiedener KPIs: Keyword-Rankings, organischer Traffic, Sichtbarkeitsindex, Conversion-Rate aus organischem Traffic, Anzahl der indexierten Seiten und Backlink-Profil. Sie erhalten monatliche Berichte mit allen wichtigen Kennzahlen und konkreten Handlungsempfehlungen."
    }
];

export const googleAdsFaqs: FaqItem[] = [
    {
        question: "Was kostet Google Ads Betreuung in Berlin?",
        answer: "Die Agenturgebühr für Google Ads Betreuung liegt bei CAIT zwischen 400€ und 1.500€ monatlich, abhängig vom Werbebudget und der Kampagnenkomplexität. Dazu kommt Ihr Werbebudget, das direkt an Google geht. Für Berliner Unternehmen empfehlen wir ein Startbudget von mindestens 1.000€ pro Monat für aussagekräftige Ergebnisse."
    },
    {
        question: "Wie schnell wirken Google Ads Kampagnen?",
        answer: "Google Ads wirken sofort. Sobald Ihre Kampagne freigeschaltet ist, erscheinen Ihre Anzeigen in den Suchergebnissen. Die Optimierung auf maximale Profitabilität dauert in der Regel 2-4 Wochen, da wir Daten sammeln, A/B-Tests durchführen und Gebote anpassen müssen."
    },
    {
        question: "Was ist der Unterschied zwischen Google Ads und SEO?",
        answer: "Google Ads bringt sofortige Sichtbarkeit gegen Bezahlung. Sie zahlen pro Klick und die Anzeigen verschwinden, wenn Sie aufhören zu zahlen. SEO ist eine langfristige Investition in organische Rankings, die auch ohne laufende Kosten Traffic generieren. Idealerweise kombinieren Sie beide Kanäle für maximale Sichtbarkeit."
    },
    {
        question: "Kann ich mein Google Ads Budget selbst bestimmen?",
        answer: "Ja, Sie haben volle Kontrolle über Ihr Budget. Sie können Tages- und Monatsbudgets festlegen und jederzeit anpassen. Wir beraten Sie, welches Budget für Ihre Ziele und Branche sinnvoll ist. Bei Google Ads zahlen Sie nur für tatsächliche Klicks, nicht für Impressionen."
    },
    {
        question: "Wie werden Google Ads Agenturleistungen abgerechnet?",
        answer: "Bei CAIT arbeiten wir mit festen monatlichen Gebühren, nicht mit prozentualen Anteilen am Werbebudget. So haben Sie volle Kostentransparenz und wir sind motiviert, Ihr Budget effizient einzusetzen. Die Agenturgebühr ist unabhängig von Ihrem Werbebudget."
    },
    {
        question: "Was passiert, wenn Kampagnen nicht performen?",
        answer: "Wir analysieren kontinuierlich die Performance und optimieren entsprechend. Wenn einzelne Keywords, Anzeigen oder Zielgruppen nicht performen, pausieren wir sie und testen Alternativen. Transparente Kommunikation ist uns wichtig – Sie erfahren genau, was funktioniert und was wir ändern."
    }
];

export const socialMediaFaqs: FaqItem[] = [
    {
        question: "Was kostet Social Media Betreuung in Berlin?",
        answer: "Social Media Betreuung bei CAIT beginnt ab 800€ monatlich für ein Baspaket mit einer Plattform. Umfassende Betreuung mit mehreren Plattformen, Content-Produktion und Community Management liegt zwischen 1.500€ und 4.000€ monatlich. Wir erstellen individuelle Pakete basierend auf Ihren Anforderungen."
    },
    {
        question: "Wie oft sollte man auf Social Media posten?",
        answer: "Die optimale Posting-Frequenz hängt von der Plattform und Ihrer Zielgruppe ab. Generell empfehlen wir: Instagram 4-7 Posts pro Woche plus tägliche Stories, LinkedIn 2-5 Posts pro Woche, TikTok mindestens 1 Video täglich. Wichtiger als die Frequenz ist jedoch die Qualität und Konsistenz Ihrer Inhalte."
    },
    {
        question: "Welche Social Media Plattform ist die beste für mein Unternehmen?",
        answer: "Das hängt von Ihrer Zielgruppe und Branche ab. B2B-Unternehmen profitieren stark von LinkedIn. Lifestyle-Marken und lokale Geschäfte sind auf Instagram gut aufgehoben. Junge Zielgruppen erreichen Sie am besten über TikTok. Als Social Media Agentur Berlin analysieren wir Ihre Zielgruppe und empfehlen die passenden Plattformen."
    },
    {
        question: "Lohnt sich Social Media für B2B-Unternehmen?",
        answer: "Absolut. LinkedIn ist für B2B-Unternehmen unverzichtbar geworden. Hier erreichen Sie Entscheider, positionieren sich als Thought Leader und generieren qualifizierte Leads. Auch Instagram kann für B2B funktionieren, wenn Sie Employer Branding betreiben oder eine jüngere Zielgruppe ansprechen."
    },
    {
        question: "Was ist der Unterschied zwischen organischem Social Media und Social Ads?",
        answer: "Organisches Social Media umfasst alle unbezahlten Aktivitäten: Posts, Stories, Community Management. Die Reichweite ist begrenzt, aber authentisch. Social Ads sind bezahlte Werbeanzeigen mit präzisem Targeting und garantierter Reichweite. Beide Ansätze ergänzen sich und sollten kombiniert werden."
    },
    {
        question: "Wie messen Sie den Erfolg von Social Media?",
        answer: "Wir tracken relevante KPIs wie Reichweite, Engagement-Rate, Follower-Wachstum, Link-Klicks und Conversions. Für Sie sind am wichtigsten: Generierte Leads, Website-Traffic aus Social Media und letztlich der Beitrag zum Umsatz. Sie erhalten monatliche Reports mit allen wichtigen Kennzahlen."
    }
];

export const webdesignFaqs: FaqItem[] = [
    {
        question: "Was kostet eine professionelle Website in Berlin?",
        answer: "Die Kosten für eine Website variieren stark je nach Umfang und Komplexität. Eine einfache Unternehmenswebsite beginnt bei ca. 3.000€, ein mittelgroßes Projekt mit individuellem Design und CMS liegt zwischen 5.000€ und 15.000€. Komplexe Web-Applikationen oder E-Commerce-Projekte können 20.000€ und mehr kosten. Wir erstellen transparente Angebote nach einem kostenlosen Erstgespräch."
    },
    {
        question: "Wie lange dauert die Entwicklung einer Website?",
        answer: "Eine einfache Website kann in 4-6 Wochen umgesetzt werden. Mittlere Projekte benötigen 8-12 Wochen, komplexe Websites oder Shops 3-6 Monate. Die Dauer hängt von Umfang, Feedback-Zyklen und der Bereitstellung von Inhalten ab. Wir erstellen realistische Zeitpläne und halten Sie über den Fortschritt auf dem Laufenden."
    },
    {
        question: "Welches CMS ist das beste für meine Website?",
        answer: "Das hängt von Ihren Anforderungen ab. WordPress ist ideal für Content-lastige Websites und Blogs. Shopify eignet sich hervorragend für E-Commerce. Für maximale Performance und Flexibilität setzen wir auf Headless CMS wie Strapi oder Sanity in Kombination mit Next.js. Wir beraten Sie, welches System für Ihr Projekt am besten geeignet ist."
    },
    {
        question: "Ist meine Website auch für Mobilgeräte optimiert?",
        answer: "Selbstverständlich. Alle Websites, die wir entwickeln, sind vollständig responsive und für alle Geräte optimiert. Mit über 60% mobilem Traffic ist dies keine Option, sondern Pflicht. Wir entwickeln nach dem Mobile-First-Prinzip und testen auf verschiedenen Geräten und Bildschirmgrößen."
    },
    {
        question: "Kann ich meine Website selbst bearbeiten?",
        answer: "Ja, wir integrieren ein Content Management System (CMS), mit dem Sie Texte, Bilder und andere Inhalte selbst bearbeiten können. Nach der Fertigstellung schulen wir Sie oder Ihr Team in der Nutzung. Für technische Änderungen oder größere Anpassungen stehen wir als Support bereit."
    },
    {
        question: "Was passiert nach dem Launch meiner Website?",
        answer: "Nach dem Launch bieten wir Wartungspakete für Updates, Sicherheit und Backups. Viele Kunden entscheiden sich für eine kontinuierliche Zusammenarbeit, bei der wir die Website weiterentwickeln, SEO optimieren und Content erstellen. Wir sind auch nach dem Launch Ihr Partner für alles Digitale."
    }
];
