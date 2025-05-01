import MainIntro from '@/components/MainIntro';
import MainServicesOverview from '@/components/MainServicesOverview';
import MainCta from '@/components/MainCta';
import MobileMenu from '@/components/MobileMenu';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'CAIT Social Media | Agentur für SEO, Webdesign, Google Ads & Social Media',
  description:
    'Deine Agentur für ganzheitliches Online-Marketing: SEO, Webentwicklung, Google Ads, Social Media. Alles aus einer Hand – mit Strategie, Design & Performance.',
};

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <MainIntro />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <MainServicesOverview />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <MainCta />
      </AnimatedSection>

      <MobileMenu />
    </>
  );
}