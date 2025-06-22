"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Github,
  Instagram,
  Download,
  ArrowLeft
} from "lucide-react";
import { translations } from "../lang";

function detectLang() {
  if (typeof window === "undefined") return "en";
  return navigator.language.startsWith("fr") ? "fr" : "en";
}

export default function ContactPage() {
  const [lang, setLang] = useState<"fr" | "en">("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") setLang(saved);
    else setLang(detectLang());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];
  const mailto = "mailto:mathis@boche.co?subject=Contact";
  const tel = "+33601868589";
  const waLink =
    "https://wa.me/33601868589?text=" +
    encodeURIComponent(lang === "fr" ? "Bonjour !" : "Hello!");

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#0b1e40] via-[#141327] to-black relative text-neutral-100">
      {/* Toggle langue minimal */}
      <div className="absolute top-4 right-4 z-50 flex space-x-2 text-sm font-medium">
        {(["fr", "en"] as const).map((code) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={`transition-colors ${
              lang === code
                ? "text-orange-400"
                : "text-neutral-400 hover:text-orange-400"
            }`}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Bouton Retour */}
      <Link
        href="/"
        className="fixed top-5 left-5 flex items-center gap-1 text-orange-400 hover:underline text-base z-50"
      >
        <ArrowLeft size={20} /> {t.back}
      </Link>

      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl w-[95vw] max-w-lg p-6 flex flex-col items-center gap-4 sm:p-10">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-orange-400 mb-2 text-center">
          {t.contactPageTitle}
        </h1>

        <div className="w-full flex flex-col gap-3">
          <a
            href={mailto}
            className="flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900 text-orange-400 bg-white/10 justify-center"
          >
            <Mail size={18} /> {t.emailLabel}
          </a>
          <a
            href={`tel:${tel}`}
            className="flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900 text-orange-400 bg-white/10 justify-center"
          >
            <Phone size={18} /> {t.callLabel}
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900 text-orange-400 bg-white/10 justify-center"
          >
            <MessageCircle size={18} /> {t.whatsappLabel}
          </a>

          <div className="flex flex-wrap gap-4 justify-center mt-3">
            <a
              href="https://www.linkedin.com/in/mathis-boche/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline hover:text-orange-400"
            >
              <Linkedin size={18} /> {t.linkedIn}
            </a>
            <a
              href="https://github.com/MathisBoche"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline hover:text-orange-400"
            >
              <Github size={18} /> {t.github}
            </a>
            <a
              href="https://www.instagram.com/mathis.boche/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline hover:text-orange-400"
            >
              <Instagram size={18} /> {t.instagram}
            </a>
          </div>
        </div>

        <a
          href="/MathisBoche.vcf"
          download="MathisBoche.vcf"
          className="mt-6 flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900 text-orange-400 bg-white/10"
        >
          <Download size={18} /> {t.addContactLabel}
        </a>

        <div className="mt-2 text-xs text-neutral-400 text-center">
          <div>
            {t.emailInfoLabel}{" "}
            <span className="font-mono text-neutral-100">{t.email}</span>
          </div>
          <div>
            {t.telInfoLabel}{" "}
            <span className="font-mono text-neutral-100">{tel}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
