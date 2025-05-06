// app/google-ads/conversion-optimierung/page.tsx
import type { Metadata } from 'next';
import ConversionOptimierungClient from './ConversionOptimierungClient';

export const metadata: Metadata = {
  title: 'Conversion Optimierung in Google Ads | Ads Agentur',
  description: 'Erfahren Sie, wie Sie mit Landingpages, A/B-Tests und Anzeigenerweiterungen mehr aus Ihrem Budget holen.',
};

export default function ConversionOptimierungPage() {
  return <ConversionOptimierungClient />;
}