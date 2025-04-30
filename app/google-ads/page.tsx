import GoogleAdsHero from '@/components/GoogleAdsHero';
import GoogleAdsFeatures from '@/components/GoogleAdsFeatures';
import GoogleAdsBenefits from '@/components/GoogleAdsBenefits';
import GoogleAdsFaq from '@/components/GoogleAdsFaq';
import GoogleAdsCta from '@/components/GoogleAdsCta';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Google Ads Agentur – Mehr Reichweite & Conversions mit CAITSocialMedia',
  description:
    'Erreiche mit gezielter Google Ads Werbung deine Zielgruppe. Wir bieten Kampagnen-Setup, Optimierung, Monitoring und messbare Ergebnisse. Jetzt starten!',
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