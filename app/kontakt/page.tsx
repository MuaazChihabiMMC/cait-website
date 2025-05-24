// app/kontakt/page.tsx
import KontaktHero from '@/components/KontaktHero';
import KontaktForm from '@/components/KontaktForm';

export const metadata = {
  title: 'Kontakt | CAIT Social Media Agentur Berlin',
  description: 'Kontaktiere die CAIT Agentur für SEO, Google Ads, Webdesign & Social Media. Wir freuen uns auf deine Nachricht!',
       alternates: {
    canonical: 'https://www.caitsocialmedia.com/kontakt',
  },

};

export default function KontaktPage() {
  return (
    <>
      <KontaktHero />
      <KontaktForm />
    </>
  );
}