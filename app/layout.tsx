// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script'; // Wichtig!
import './globals.css';
import LayoutWrapper from './LayoutWrapper';
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata: Metadata = {
  title: 'CAIT Agentur',
  description: 'Digital Marketing Agentur in Berlin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <head>
          <meta name="google-site-verification" content="9xauJxQ8qmfHv9TK92pcGdFhdMPVBgyYoIVW1bT4ZR0" />       </head>
          {/* Google Analytics (gtag.js) */}
          <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-WFV8MYNPQ6"
                  />
                  <Script
                    id="ga-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                      __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-WFV8MYNPQ6');
                      `,
                    }}
                  />
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}