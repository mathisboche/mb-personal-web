import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

import ThemeColorSync from "../components/ThemeColorSync";

const GA_MEASUREMENT_ID = "G-ZRSBZW56BL";

export const metadata: Metadata = {
  title: {
    default: "Mathis Boche",
    template: "%s — Mathis Boche",
  },
  description: "",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://mathisboche.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  openGraph: {
    title: "Mathis Boche",
    description: "",
    type: "website",
    url: "https://mathisboche.com",
    siteName: "Mathis Boche",
    locale: "fr_FR",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Mathis Boche",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mathis Boche",
    description: "",
    images: ["/favicon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ThemeColorSync />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
