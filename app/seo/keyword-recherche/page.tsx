// app/seo/keyword-recherche/page.tsx
import type { Metadata } from 'next';
import KeywordClientPage from './KeywordClientPage';

export const metadata: Metadata = {
  title: 'Keyword-Recherche & Suchintention | CAITSocialMedia',
  description: 'Erfahre, wie eine präzise Keyword-Analyse und das Verständnis der Suchintention deine Sichtbarkeit und Conversion-Rate verbessern.',
};

export default function KeywordPage() {
  return <KeywordClientPage />;
}