// app/google-bewertungen-loeschen/page.tsx
import AnimatedSection from '@/components/AnimatedSection';
import GoogleBewertungLoeschenHero from '@/components/GoogleBewertungLoeschenHero';
import GoogleBewertungLoeschenInfo from '@/components/GoogleBewertungLoeschenInfo';
import GoogleBewertungLoeschenProcess from '@/components/GoogleBewertungLoeschenProcess';
import GoogleBewertungLoeschenFaq from '@/components/GoogleBewertungLoeschenFaq';
import GoogleBewertungLoeschenCta from '@/components/GoogleBewertungLoeschenCta';

export const metadata = {
  title: 'Google Bewertung löschen | Rezension entfernen lassen | CAIT',
  description:
    'Sie möchten eine negative Google Bewertung löschen? Wir lassen ungerechtfertigte und schlechte Google Bewertungen entfernen. DSGVO-konform, mit anwaltlicher Prüfung.',
  keywords:
    'Google Bewertung löschen, negative Google Bewertung löschen, Google Rezension löschen lassen, Google Bewertung entfernen, schlechte Google Bewertung löschen, Google Bewertung entfernen lassen, DSGVO Bewertung löschen',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/google-bewertungen-loeschen',
  },
  openGraph: {
    title: 'Google Bewertung löschen lassen | DSGVO | CAIT Social Media',
    description:
      'Wir prüfen Ihre Google Bewertungen und stellen professionelle Löschanträge nach DSGVO. Schnell, diskret, ohne Anwaltskosten.',
    url: 'https://www.caitsocialmedia.com/google-bewertungen-loeschen',
    type: 'website',
  },
};

export default function GoogleBewertungenPage() {
  return (
    <>
      <GoogleBewertungLoeschenHero />

      <AnimatedSection delay={0.1}>
        <GoogleBewertungLoeschenInfo />
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <GoogleBewertungLoeschenProcess />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <GoogleBewertungLoeschenFaq />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <GoogleBewertungLoeschenCta />
      </AnimatedSection>
    </>
  );
}
