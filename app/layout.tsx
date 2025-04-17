import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script'; // Import pour Google Analytics

// Remplace par TON ID de suivi Google Analytics
const GA_TRACKING_ID = 'G-FN2NYQ9436';

export const metadata: Metadata = {
  title: 'Mathis Boche - Lycéen & Développeur Web',
  description: 'Portfolio de Mathis Boche, lycéen passionné de code et d\'échecs, projets Next.js, Tailwind, inspirations Midjourney.',
  openGraph: {
    type: 'website',
    url: 'https://www.mathisboche.fr/',
    title: 'Mathis Boche - Lycéen & Développeur Web',
    description: 'Portfolio de Mathis Boche : développement web, échecs, projets, contact.',
    images: [
      {
        url: 'https://www.mathisboche.fr/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Mathis Boche - Lycéen & Développeur Web',
      },
    ],
    siteName: 'Mathis Boche Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mathisboche',
    title: 'Mathis Boche - Lycéen & Développeur Web',
    description: 'Portfolio de Mathis Boche : développement web, échecs, projets.',
    images: ['https://www.mathisboche.fr/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.mathisboche.fr/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* FAVICONS / MANIFEST */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-black text-white">
        {/* --- GOOGLE ANALYTICS SCRIPTS --- */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* --- END GA --- */}

        {children}
      </body>
    </html>
  );
}