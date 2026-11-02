import CookieBanner from '@/components/CookieBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/site/RevealObserver';
import StickyButtons from '@/components/StickyButtons';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="inhalt" tabIndex={-1} className="relative outline-none">
        {children}
      </main>
      <Footer />
      <StickyButtons />
      <CookieBanner />
      <RevealObserver />
    </>
  );
}
