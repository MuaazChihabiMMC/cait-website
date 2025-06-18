// app/seo/monitoring-reporting/page.tsx
import type { Metadata } from 'next';
import MonitoringReportingClient from './MonitoringReportingClient';

export const metadata: Metadata = {
  title: 'SEO Monitoring Agentur Berlin | CAIT SEO Experten',
  description: 'Mit professionellem SEO Monitoring behalten wir Rankings, Sichtbarkeit & Performance im Blick. CAIT ist deine Agentur für datengetriebene SEO.',
     alternates: {
    canonical: 'https://www.caitsocialmedia.com/seo-agentur-berlin/monitoring-reporting',
  },
};


export default function MonitoringReportingPage() {
  return <MonitoringReportingClient />;
}