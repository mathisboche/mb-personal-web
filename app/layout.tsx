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
    "Contribution au développement du jeu d’échecs. Responsable communication pour ChessMates International. Membre du comité directeur du comité d’échecs des Hauts-de-Seine. Ateliers d’initiation aux échecs à la Cité des sciences et de l’industrie.",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://mathisboche.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Mathis Boche",
    description:
      "Contribution au développement du jeu d’échecs.",
    type: "website",
    url: "https://mathisboche.com",
    siteName: "Mathis Boche",
    locale: "fr_FR",
    images: [
      {
        url: "/og.png",
      },
    ],
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
