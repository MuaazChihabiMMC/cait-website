// app/google-ads-agentur-berlin/page.tsx
import GoogleAdsHero from '@/components/GoogleAdsHero';
import GoogleAdsFeatures from '@/components/GoogleAdsFeatures';
import GoogleAdsBenefits from '@/components/GoogleAdsBenefits';
import GoogleAdsFaq from '@/components/GoogleAdsFaq';
import GoogleAdsCta from '@/components/GoogleAdsCta';
import AnimatedSection from '@/components/AnimatedSection';
import GoogleAdsSeoText from '@/components/GoogleAdsSeoText';
import GoogleAdsContentExpanded from '@/components/GoogleAdsContentExpanded';
import FaqSchema, { googleAdsFaqs } from '@/components/FaqSchema';

export const metadata = {
  title: 'Google Ads Agentur Berlin | Mehr Leads & Umsatz | CAIT',
  description: 'Google Ads Agentur Berlin: Professionelle Kampagnen für maximalen ROI. Search Ads, Shopping, Display & Performance Max. Kostenloser Account Check!',
  keywords: 'Google Ads Agentur Berlin, Google Ads Berlin, Google AdWords Berlin, SEA Agentur Berlin, PPC Agentur Berlin, Performance Marketing Berlin',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/google-ads-agentur-berlin',
  },
  openGraph: {
    title: 'Google Ads Agentur Berlin | CAIT Social Media',
    description: 'Profitables Google Ads Management für Berliner Unternehmen. Zertifizierte Experten für maximalen ROI.',
    url: 'https://www.caitsocialmedia.com/google-ads-agentur-berlin',
    type: 'website',
  },
};

export default function GoogleAdsPage() {
  return (
    <>
      <FaqSchema faqs={googleAdsFaqs} pageUrl="https://www.caitsocialmedia.com/google-ads-agentur-berlin" />

      <GoogleAdsHero />

      <AnimatedSection delay={0.1}>
        <GoogleAdsFeatures />
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <GoogleAdsSeoText />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <GoogleAdsContentExpanded />
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