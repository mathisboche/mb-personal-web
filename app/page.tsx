"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Info,
  Briefcase,
  Award,
  Crown,
  Instagram,
} from "lucide-react";
import { translations } from "./lang";

function SectionCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl hover:shadow-orange-500/20 transition-shadow overflow-hidden">
      <Icon className="absolute top-4 right-4 h-12 w-12 text-orange-400 opacity-20 rotate-45" />
      <h2 className="flex items-center font-display text-2xl text-orange-400 mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

function detectLang() {
  if (typeof window === "undefined") return "en";
  return navigator.language.startsWith("fr") ? "fr" : "en";
}

export default function Home() {
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
  const mailto = "mailto:mathis@boche.co?subject=Contact%20via%20le%20site%20web";

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-neutral-100 selection:bg-orange-500/80 selection:text-neutral-900">
      {/* Toggle langue minimal */}
      <div className="absolute top-4 right-4 z-10 flex space-x-2 text-sm font-medium">
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

      {/* SEO */}
      <head>
        <title>Mathis Boche — Échecs, Communication & Web</title>
        <meta name="description" content={t.heroDesc} />
        <meta
          name="keywords"
          content="Mathis Boche, échecs, ChessMates, communication, web"
        />
        <meta name="robots" content="index, follow" />
      </head>

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-br from-[#0b1e40] via-[#141327] to-black" />
      <div className="pointer-events-none absolute -z-10 top-[-10%] left-[60%] h-[35rem] w-[35rem] rounded-full bg-orange-500 mix-blend-soft-light blur-3xl opacity-10 animate-spin-slow" />
      <div className="pointer-events-none fixed -z-10 -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-600 mix-blend-soft-light blur-3xl opacity-10 animate-spin-reverse" />

      {/* Hero */}
      <section className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pt-28 sm:pt-32 md:flex-row md:items-center lg:gap-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]">
            {t.heroTitle}
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            {t.heroDesc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900"
            >
              {t.contact}
            </a>
            <a
              href="#xp"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-orange-400"
            >
              {t.parcours}
            </a>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <Image
            src="/images/mathis-echecs.JPG"
            alt="Mathis à l'échiquier"
            width={340}
            height={340}
            className="rounded-3xl object-cover shadow-2xl saturate-150"
            priority
          />
          <span className="absolute inset-0 rounded-3xl border border-orange-400/30" />
        </div>
      </section>

      {/* Sections */}
      <div
        id="xp"
        className="mx-auto mt-32 mb-24 grid w-full max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-2 scroll-mt-[24px]"
      >
        <SectionCard icon={Info} title={t.aboutTitle}>
          <ul className="ml-5 list-disc space-y-1 text-base leading-relaxed">
            {t.aboutList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard icon={Briefcase} title={t.expTitle}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Crown className="mt-1 h-6 w-6 text-orange-400" />
              <div>
                <h3 className="text-lg font-semibold">{t.exp1Title}</h3>
                <p className="text-sm text-neutral-400">{t.exp1Desc}</p>
                <a
                  href={`https://${t.exp1Link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 underline hover:text-orange-400"
                >
                  <ExternalLink size={16} /> {t.exp1Link}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="mt-1 h-6 w-6 text-orange-400" />
              <div>
                <h3 className="text-lg font-semibold">{t.exp2Title}</h3>
                <p className="text-sm text-neutral-400">{t.exp2Desc}</p>
                <a
                  href={`https://${t.exp2Link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 underline hover:text-orange-400"
                >
                  <ExternalLink size={16} /> {t.exp2Link}
                </a>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard icon={Crown} title={t.chessTitle}>
          <ul className="ml-5 list-disc space-y-1 text-base leading-relaxed">
            {t.chessList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <a
            href="https://mtbh.fr/fide"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 underline hover:text-orange-400"
          >
            <ExternalLink size={16} /> mtbh.fr/fide
          </a>
        </SectionCard>

        <SectionCard icon={Mail} title={t.contactTitle}>
          <div className="space-y-4 text-base">
            <a
              href={mailto}
              className="inline-flex items-center gap-2 underline hover:text-orange-400"
            >
              <Mail size={18} /> {t.email}
            </a>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://mtbh.fr/linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline hover:text-orange-400"
              >
                <Linkedin size={18} /> {t.linkedIn}
              </a>
              <a
                href="https://mtbh.fr/github"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline hover:text-orange-400"
              >
                <Github size={18} /> {t.github}
              </a>
              <a
                href="https://mtbh.fr/instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline hover:text-orange-400"
              >
                <Instagram size={18} /> {t.instagram}
              </a>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Footer */}
      <footer className="mx-auto mb-12 text-center text-sm text-neutral-500">
        {t.lastUpdate}
      </footer>
    </main>
  );
}
