// app/seo/technisches-seo/page.tsx
import type { Metadata } from 'next';
import TechnischesSeoClient from './TechnischesSeoClient';

export const metadata: Metadata = {
  title: 'Technisches SEO Agentur | CAIT SEO Berlin',
  description: 'Technisches SEO vom Profi: Ladezeit, Core Web Vitals, Crawling & Indexierung. CAIT ist deine SEO Agentur für nachhaltige Performance.',
    alternates: {
    canonical: 'https://www.caitsocialmedia.com/seo/technisches-seo',
  },
};


export default function TechnischesSEOPage() {
  return <TechnischesSeoClient />;
}