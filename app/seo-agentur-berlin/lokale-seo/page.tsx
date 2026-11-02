// app/seo/lokale-seo/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import LokaleSEOPageClient from './LokaleSEOPageClient';

export const metadata: Metadata = {
  title: { absolute: 'Lokale SEO Agentur Berlin | CAIT SEO Experten' },
  description: 'Mehr Sichtbarkeit in deiner Stadt: CAIT ist deine Agentur für lokale SEO in Berlin. Wir bringen dein Business bei Google nach vorn.',
   alternates: {
    canonical: 'https://www.caitsocialmedia.com/seo-agentur-berlin/lokale-seo',
  },
};

export default function LokaleSEOPage() {
  return <LokaleSEOPageClient />;
}