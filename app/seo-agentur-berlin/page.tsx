// app/seo-agentur-berlin/page.tsx
import SeoPageExpanded from '@/components/SeoPageExpanded';
import SeoHero from '@/components/SeoHero';
import SeoFeatures from '@/components/SeoFeatures';
import SeoCta from '@/components/SeoCta';
import SeoWhy from '@/components/SeoWhy';
import SeoBenefits from '@/components/SeoBenefits';
import SeoFaq from '@/components/SeoFaq';
import AnimatedSection from '@/components/AnimatedSection';
import SeoIntroText from '@/components/SeoIntroText';
import SeoContentExpanded from '@/components/SeoContentExpanded';
import FaqSchema, { seoFaqs } from '@/components/FaqSchema';

export const metadata = {
  title: 'SEO Agentur Berlin | Mehr Sichtbarkeit, mehr Kunden | CAIT',
  description: 'Ihre SEO Agentur in Berlin: Professionelle Suchmaschinenoptimierung für Top-Rankings bei Google. OnPage, OffPage, Technisches SEO & Lokale SEO. Jetzt beraten lassen!',
  keywords: 'SEO Agentur Berlin, Suchmaschinenoptimierung Berlin, SEO Berlin, Local SEO Berlin, OnPage SEO, OffPage SEO, Google Rankings Berlin',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/seo-agentur-berlin',
  },
  openGraph: {
    title: 'SEO Agentur Berlin | CAIT Social Media',
    description: 'Ihre SEO Agentur in Berlin für nachhaltige Top-Rankings bei Google. Über 100 erfolgreiche Projekte.',
    url: 'https://www.caitsocialmedia.com/seo-agentur-berlin',
    type: 'website',
  },
};

export default function SeoPage() {
  return (
    <>
      <FaqSchema faqs={seoFaqs} pageUrl="https://www.caitsocialmedia.com/seo-agentur-berlin" />

      <SeoHero />
      <SeoIntroText />

      <AnimatedSection>
        <SeoPageExpanded />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <SeoContentExpanded />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <SeoWhy />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <SeoFeatures />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <SeoBenefits />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <SeoFaq />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <SeoCta />
      </AnimatedSection>
    </>
  );
}
