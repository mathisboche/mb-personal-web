"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Ghost, ArrowLeft } from "lucide-react";
import { translations } from "./lang";              // ➜ Ajustez le chemin si besoin

/* ----------------- Détection / persistance de langue ----------------- */
function detectLang() {
  if (typeof window === "undefined") return "en";
  return navigator.language.startsWith("fr") ? "fr" : "en";
}

/* ------------------------------- Page 404 ---------------------------- */
export default function NotFoundPage() {
  const [lang, setLang] = useState<"fr" | "en">("en");

  useEffect(() => {
    const saved =
      typeof window !== "undefined" && localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") setLang(saved);
    else setLang(detectLang());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center text-neutral-100 selection:bg-orange-500/80 selection:text-neutral-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-br from-[#0b1e40] via-[#141327] to-black" />
      <div className="pointer-events-none absolute -z-10 top-[-10%] left-[60%] h-[35rem] w-[35rem] rounded-full bg-orange-500 mix-blend-soft-light blur-3xl opacity-10 animate-spin-slow" />
      <div className="pointer-events-none fixed -z-10 -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-600 mix-blend-soft-light blur-3xl opacity-10 animate-spin-reverse" />

      {/* Toggle langue */}
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

      {/* Contenu principal */}
      <div className="relative flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md shadow-2xl w-[90vw] max-w-xl text-center">
        <Ghost className="h-16 w-16 text-orange-400 opacity-80" />
        <h1 className="font-spaceGrotesk text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]">
          404
        </h1>
        <p className="text-lg leading-relaxed">
          {t.notFoundTitle ?? "Oups ! Page introuvable."}
        </p>
        <p className="text-sm text-neutral-400 max-w-xs">
          {t.notFoundDesc ??
            "Le lien que vous avez suivi semble brisé ou la page a été déplacée."}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900"
          >
            <ArrowLeft size={18} />
            {t.backHome ?? "Retour à l’accueil"}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-orange-400"
          >
            {t.contact ?? "Contact"}
          </Link>
        </div>
      </div>
    </main>
  );
}
