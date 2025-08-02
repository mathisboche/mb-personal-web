// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ReactNode } from "react";

// -----------------------------------------------------------------------------
// Site constants
// -----------------------------------------------------------------------------
const SITE_URL = "https://www.mathisboche.com" as const;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const BRAND_ORANGE = "#ff7a18" as const;

// -----------------------------------------------------------------------------
// Metadata (SEO + Social + PWA)
// -----------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Mathis Boche",
  generator: "Next.js 14",
  title: {
    default: "Mathis Boche",
    template: "%s — Mathis Boche",
  },
  description:
    "Communication et web chez ChessMates International. Joueur d’échecs.",
  keywords: [
    "Mathis Boche",
    "ChessMates International",
    "échecs",
    "communication digitale",
    "réseaux sociaux",
    "Next.js",
    "TailwindCSS",
    "portfolio",
    "DAFFE 1"
  ],
  category: "portfolio",
  themeColor: BRAND_ORANGE,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Mathis Boche",
    title: "Mathis Boche",
    description:
      "Communication et web chez ChessMates International. Joueur d’échecs.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Mathis Boche",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mathisboche",
    title: "Mathis Boche",
    description:
      "Communication et web chez ChessMates International. Joueur d’échecs.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


// -----------------------------------------------------------------------------
// Structured-data (JSON-LD)
// -----------------------------------------------------------------------------
const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mathis Boche",
  url: SITE_URL,
  image: `${SITE_URL}/images/mathis-echecs.JPG`,
  jobTitle: "Développeur Web",
  knowsAbout: ["Next.js", "TypeScript", "TailwindCSS", "React", "Échecs"],
  sameAs: [
    "https://github.com/mathisboche",
    "https://linkedin.com/in/mathis-boche",
  ],
} as const;

// -----------------------------------------------------------------------------
// Root layout
// -----------------------------------------------------------------------------
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* PWA & icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={BRAND_ORANGE}
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Performance: police principale (CLS) */}
        <link
          rel="preload"
          href="/fonts/display"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Color scheme */}
        <meta name="color-scheme" content="dark light" />

        {/* Structured data : Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
        />

        {/* Google Analytics GA4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} // prettier-ignore
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans bg-black text-white antialiased selection:bg-orange-500/80 selection:text-neutral-900">
        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
