// app/social-media/page.tsx
import SocialMediaHero from '@/components/SocialMediaHero';
import SocialMediaFeatures from '@/components/SocialMediaFeatures';
import SocialMediaBenefits from '@/components/SocialMediaBenefits';
import SocialMediaCta from '@/components/SocialMediaCta';
import SocialMediaFaq from '@/components/SocialMediaFaq';
import AnimatedSection from '@/components/AnimatedSection';
import SocialMediaSeoText from '@/components/SocialMediaSeoText';
import SocialMediaContentExpanded from '@/components/SocialMediaContentExpanded';
import FaqSchema, { socialMediaFaqs } from '@/components/FaqSchema';

export const metadata = {
  title: 'Social Media Agentur Berlin | Instagram, TikTok & LinkedIn | CAIT',
  description: 'Social Media Agentur Berlin: Strategie, Content & Community Management für Instagram, TikTok, LinkedIn & Facebook. Mehr Reichweite für Ihre Marke!',
  keywords: 'Social Media Agentur Berlin, Instagram Marketing Berlin, TikTok Agentur Berlin, LinkedIn Marketing Berlin, Social Media Marketing Berlin, Content Creator Berlin',
  alternates: {
    canonical: 'https://www.caitsocialmedia.com/social-media',
  },
  openGraph: {
    title: 'Social Media Agentur Berlin | CAIT Social Media',
    description: 'Ihre Social Media Agentur in Berlin für Instagram, TikTok, LinkedIn und mehr. Content, Strategie & Community Management.',
    url: 'https://www.caitsocialmedia.com/social-media',
    type: 'website',
  },
};

export default function SocialMediaPage() {
  return (
    <>
      <FaqSchema faqs={socialMediaFaqs} pageUrl="https://www.caitsocialmedia.com/social-media" />

      <SocialMediaHero />

      <AnimatedSection>
        <SocialMediaFeatures />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <SocialMediaBenefits />
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <SocialMediaSeoText />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <SocialMediaContentExpanded />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <SocialMediaCta />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <SocialMediaFaq />
      </AnimatedSection>
    </>
  );
}