// app/seo/page.tsx
import SeoPageExpanded from '@/components/SeoPageExpanded';
import SeoHero from '@/components/SeoHero';
import SeoFeatures from '@/components/SeoFeatures';
import SeoCta from '@/components/SeoCta';
import SeoWhy from '@/components/SeoWhy';
import SeoBenefits from '@/components/SeoBenefits';
import SeoFaq from '@/components/SeoFaq';
import AnimatedSection from '@/components/AnimatedSection';
import SeoIntroText from '@/components/SeoIntroText'


export const metadata = {
  title: 'SEO Agentur Berlin, Sichtbarkeit. Wachstum. Erfolg.',
  description: 'SEO-Service von CAIT Agentur: OnPage, OffPage, Technik, Content, Monitoring und mehr. Wir bringen dich bei Google ganz nach vorne.',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/seo-agentur-berlin',
  },
};
export default function SeoPage() {
  return (
    <>
      <SeoHero />
      <SeoIntroText />

      <AnimatedSection>
        <SeoPageExpanded />
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
