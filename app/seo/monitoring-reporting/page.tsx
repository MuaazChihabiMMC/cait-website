// app/seo/monitoring-reporting/page.tsx
import type { Metadata } from 'next';
import MonitoringReportingClient from './MonitoringReportingClient';

export const metadata: Metadata = {
  title: 'CAIT SEO Agentur | Monitoring SEO Agentur Berlin',
  description: 'SEO Agentur für Monitoring SEO',
};

export default function MonitoringReportingPage() {
  return <MonitoringReportingClient />;
}