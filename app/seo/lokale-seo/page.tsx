// app/seo/lokale-seo/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import LokaleSEOPageClient from './LokaleSEOPageClient';

export const metadata: Metadata = {
  title: 'CAIT SEO Agentur | technisches SEO Agentur Berlin',
  description: 'Deine SEO Agentur für Lokale SEO in Berlin',
};

export default function LokaleSEOPage() {
  return <LokaleSEOPageClient />;
}