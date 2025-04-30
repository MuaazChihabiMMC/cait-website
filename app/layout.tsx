import type { Metadata } from 'next';
import './globals.css';
import LayoutWrapper from './LayoutWrapper';

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <head>
<meta name="google-site-verification" content="9xauJxQ8qmfHv9TK92pcGdFhdMPVBgyYoIVW1bT4ZR0" />       </head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}