import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const text = Inter({
  subsets: ["latin"],
  variable: "--font-text",
});

export const metadata: Metadata = {
  title: {
    default: "Mathis Boche — Communication & coordination",
    template: "%s — Mathis Boche",
  },
  description:
    "Étudiant en PCSI (Lycée Chaptal, Paris). Communication & coordination — ChessMates International.",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://mathisboche.com"),
  openGraph: {
    title: "Mathis Boche — Communication & coordination",
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
  themeColor: "#FAF7F1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${text.variable}`}>
      <body className="bg-ivory text-ink antialiased">{children}</body>
    </html>
  );
}

