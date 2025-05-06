// app/seo/offpage-seo/page.tsx
import type { Metadata } from 'next';
import OffPageSeoClient from './OffPageSeoClient';

export const metadata: Metadata = {
  title: 'CAIT SEO Agentur | SEO Agentur Berlin',
  description: 'Deine SEO Agentur für OFFpage SEO',
};

export default function OffPageSeoPage() {
  return <OffPageSeoClient />;
}