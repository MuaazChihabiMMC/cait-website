// app/kontakt/page.tsx
import KontaktHero from '@/components/KontaktHero';
import KontaktForm from '@/components/KontaktForm';

export const metadata = {
  title: 'Kontakt | CAITSocialMedia',
  description: 'Nimm Kontakt mit uns auf – wir freuen uns auf deine Anfrage. Jetzt kostenloses Erstgespräch vereinbaren.',
};

export default function KontaktPage() {
  return (
    <>
      <KontaktHero />
      <KontaktForm />
    </>
  );
}