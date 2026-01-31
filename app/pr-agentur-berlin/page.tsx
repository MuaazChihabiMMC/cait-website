import type { Metadata } from 'next';
import PRClientPage from './PRClientPage';

export const metadata: Metadata = {
    title: 'PR Agentur Berlin | Public Relations & Kommunikation | CAIT',
    description: 'Ihre PR Agentur in Berlin für strategische Öffentlichkeitsarbeit, Medienarbeit, Krisenkommunikation und Pressearbeit. Jetzt kostenloses Erstgespräch vereinbaren.',
    keywords: 'PR Agentur Berlin, Public Relations Berlin, Pressearbeit Berlin, Medienarbeit, Krisenkommunikation, Unternehmenskommunikation Berlin',
    alternates: {
        canonical: 'https://www.caitsocialmedia.com/pr-agentur-berlin',
    },
    openGraph: {
        title: 'PR Agentur Berlin | CAIT Social Media',
        description: 'Strategische PR & Kommunikation für Berliner Unternehmen. Pressearbeit, Medienarbeit, Krisenkommunikation.',
        url: 'https://www.caitsocialmedia.com/pr-agentur-berlin',
        type: 'website',
    },
};

export default function PRPage() {
    return <PRClientPage />;
}
