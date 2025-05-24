// app/datenschutz/page.tsx
import DatenschutzPageClient from './DatenschutzPageClient';

export const metadata = {
  title: 'Datenschutzerklärung | CAITSocialMedia',
  description: 'Vollständige Datenschutzerklärung gemäß DSGVO für CAITSocialMedia.',
        alternates: {
    canonical: 'https://www.caitsocialmedia.com/datenschutz',
  },
};

export default function DatenschutzPage() {
  return <DatenschutzPageClient />;
}