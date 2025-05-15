// app/seo/offpage-seo/page.tsx
import type { Metadata } from 'next';
import OffPageSeoClient from './OffPageSeoClient';

export const metadata: Metadata = {
  title: 'CAIT SEO Agentur Berlin | OffPage SEO & Linkaufbau',
  description: 'Mehr Sichtbarkeit durch gezielten Linkaufbau: CAIT ist deine OffPage SEO Agentur in Berlin. Backlinks, Autorität & Reichweite vom Profi.',
};

export default function OffPageSeoPage() {
  return <OffPageSeoClient />;
}