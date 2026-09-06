import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import { site } from '@/content/site';
import { launch } from '@/content/launch';
import { trustedOrigin } from '@/lib/seo';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: trustedOrigin(launch.origin)
    ? new URL(launch.origin!)
    : undefined,
  title: {
    default: 'Premier Power | Electrical, CCTV & Maintenance Services',
    template: '%s | Premier Power',
  },
  description: site.description,
  robots: { index: launch.indexable, follow: launch.indexable },
  icons: {
    icon: '/images/premier-power-logo.png',
    apple: '/images/premier-power-logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#fbfaf7',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className={geist.variable}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
