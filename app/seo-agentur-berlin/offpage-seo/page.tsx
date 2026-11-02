// app/seo/offpage-seo/page.tsx
import type { Metadata } from 'next';
import OffPageSeoClient from './OffPageSeoClient';

export const metadata: Metadata = {
  title: { absolute: 'CAIT SEO Agentur Berlin | OffPage SEO & Linkaufbau' },
  description: 'Mehr Sichtbarkeit durch gezielten Linkaufbau: CAIT ist deine OffPage SEO Agentur in Berlin. Backlinks, Autorität & Reichweite vom Profi.',
     alternates: {
    canonical: 'https://www.caitsocialmedia.com/seo-agentur-berlin/offpage-seo',
  },
};

export default function OffPageSeoPage() {
  return <OffPageSeoClient />;
}