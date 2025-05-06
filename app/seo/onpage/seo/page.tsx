// app/seo/onpage-seo/page.tsx
import type { Metadata } from 'next';
import OnPageSeoClient from './OnPageSeoClient';

export const metadata: Metadata = {
  title: 'CAIT SEO Agentur | SEO Agentur Berlin',
  description: 'Deine SEO Agentur für onpage SEO',
};

export default function OnPageSEOPage() {
  return <OnPageSeoClient />;
}