import GoogleAdsHero from '@/components/GoogleAdsHero';
import GoogleAdsFeatures from '@/components/GoogleAdsFeatures';
import GoogleAdsBenefits from '@/components/GoogleAdsBenefits';
import GoogleAdsFaq from '@/components/GoogleAdsFaq';
import GoogleAdsCta from '@/components/GoogleAdsCta';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Google Ads Agentur Berlin | CAIT für mehr Leads & Umsatz',
  description:
    'Kampagnen, Optimierung & Performance mit CAIT erreichst du deine Zielgruppe gezielt über Google Ads. Jetzt durchstarten!',
      alternates: {
    canonical: 'https://www.caitsocialmedia.com/google-ads-agentur-berlin',
  },
};

export default function GoogleAdsPage() {
  return (
    <>
      <GoogleAdsHero />

     

      <AnimatedSection delay={0.1}>
        <GoogleAdsFeatures />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <GoogleAdsBenefits />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <GoogleAdsFaq />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <GoogleAdsCta />
      </AnimatedSection>
    </>
  );
}