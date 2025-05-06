import WebPageExpanded from '@/components/WebPageExpanded';
import WebDevHero from '@/components/WebDevHero';
import WebDevFeatures from '@/components/WebDevFeatures';
import WebDevBenefits from '@/components/WebDevBenefits';
import WebDevCta from '@/components/WebDevCta';
import WebFaq from '@/components/WebFaq';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Webentwicklung & Design | CAITSocialMedia',
  description:
    'Maßgeschneiderte Websites mit modernen Technologien, klarer Struktur und optimaler Performance. Wir entwickeln digitale Erlebnisse, die funktionieren.',
};
<meta name="seobility" content="1c042f5ea33996f2bddc2b223ead5944"></meta>
export default function WebDevPage() {
  return (
    <>
      <WebDevHero />

      <AnimatedSection>
        <WebDevFeatures />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <WebPageExpanded />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <WebDevBenefits />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <WebDevCta />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <WebFaq />
      </AnimatedSection>
    </>
  );
}