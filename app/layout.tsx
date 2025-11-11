import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-ZRSBZW56BL";

export const metadata: Metadata = {
  title: {
    default: "Mathis Boche",
    template: "%s — Mathis Boche",
  },
  description:
    "Étudiant en PCSI (Lycée Chaptal, Paris). Communication & coordination — ChessMates International.",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://mathisboche.com"),
  openGraph: {
    title: "Mathis Boche",
    description:
      "Étudiant en PCSI (Lycée Chaptal, Paris). Communication & coordination — ChessMates International.",
    type: "website",
    url: "https://mathisboche.com",
    siteName: "Mathis Boche",
    locale: "fr_FR",
  },
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
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
