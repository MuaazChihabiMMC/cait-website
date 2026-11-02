import type { Metadata } from 'next';
import DatenschutzPageClient from './DatenschutzPageClient';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung gemäß DSGVO für die Website von CAIT.',
  alternates: { canonical: absoluteUrl('/datenschutz') },
};

export default function DatenschutzPage() {
  return <DatenschutzPageClient />;
}
