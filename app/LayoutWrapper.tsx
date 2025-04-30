// components/LayoutWrapper.tsx
'use client';
import CookieBanner from '../components/CookieBanner';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}