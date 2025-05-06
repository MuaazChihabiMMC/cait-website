// app/seo/technisches-seo/page.tsx
import type { Metadata } from 'next';
import TechnischesSeoClient from './TechnischesSeoClient';

export const metadata: Metadata = {
  title: 'CAIT SEO Agentur | SEO Agentur Berlin',
  description: 'Deine SEO Agentur für technisches SEO',
};

export default function TechnischesSEOPage() {
  return <TechnischesSeoClient />;
}