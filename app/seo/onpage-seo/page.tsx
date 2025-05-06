// app/seo/onpage-seo/page.tsx
import type { Metadata } from 'next';
import OnPageSeoClient from './OnPageSeoClient';

export const metadata: Metadata = {
  title: 'OnPage SEO Agentur | Technische & inhaltliche Optimierung',
  description: 'Verbessere dein Google-Ranking mit OnPage SEO: Wir optimieren Inhalte, Technik & Struktur deiner Website für maximale Sichtbarkeit und Performance.',
};

export default function OnPageSEOPage() {
  return <OnPageSeoClient />;
}