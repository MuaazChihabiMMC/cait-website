import SocialMediaHero from '@/components/SocialMediaHero';
import SocialMediaFeatures from '@/components/SocialMediaFeatures';
import SocialMediaBenefits from '@/components/SocialMediaBenefits';
import SocialMediaCta from '@/components/SocialMediaCta';
import SocialMediaFaq from '@/components/SocialMediaFaq';
import AnimatedSection from '@/components/AnimatedSection';
import SocialMediaSeoText from '@/components/SocialMediaSeoText';

export const metadata = {
  title: 'Social Media Marketing | CAITSocialMedia',
  description:
    'Content, Strategie und Performance: Wir bringen deine Marke auf Social Media nach vorn, auf Instagram, TikTok, LinkedIn & Co.',
       alternates: {
    canonical: 'https://www.caitsocialmedia.com/social-media',
  },
};

export default function SocialMediaPage() {
  return (
    <>
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


      <AnimatedSection delay={0.2}>
        <SocialMediaCta />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <SocialMediaFaq />
      </AnimatedSection>
    </>
  );
}