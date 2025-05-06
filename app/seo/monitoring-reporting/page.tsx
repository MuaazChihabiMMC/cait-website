// app/seo/monitoring-reporting/page.tsx
import type { Metadata } from 'next';
import MonitoringReportingClient from './MonitoringReportingClient';

export const metadata: Metadata = {
  title: 'SEO Monitoring Agentur Berlin | CAIT SEO Experten',
  description: 'Mit professionellem SEO Monitoring behalten wir Rankings, Sichtbarkeit & Performance im Blick. CAIT ist deine Agentur für datengetriebene SEO.',
};


export default function MonitoringReportingPage() {
  return <MonitoringReportingClient />;
}