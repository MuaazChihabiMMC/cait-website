// app/seo/content-erstellung/page.tsx
import type { Metadata } from 'next';
import ContentErstellungClient from './contenterstellungClientPage';

export const metadata: Metadata = {
  title: 'CAIT SEO Agentur Berlin | Content-Erstellung & SEO Texte',
  description: 'Mit CAIT zur starken Content-Strategie: SEO Texte, die ranken und deine Zielgruppe erreichen professionell, datengestützt und konversionsstark.',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/seo/content-erstellung',
  },

};

export default function ContentErstellungPage() {
  return <ContentErstellungClient />;
}