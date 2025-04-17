"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Info,
  Briefcase,
  Award,
  Crown,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" },
  }),
};

function SectionCard({ icon: Icon, title, children }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={0}
      className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl hover:shadow-orange-500/20 transition-shadow overflow-hidden"
    >
      <Icon className="absolute top-4 right-4 h-12 w-12 text-orange-400 opacity-20 rotate-45" />
      <h2 className="flex items-center font-spaceGrotesk text-2xl text-orange-400 mb-4">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen w-full text-neutral-100 selection:bg-orange-500/80 selection:text-neutral-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-br from-[#0b1e40] via-[#141327] to-black" />
      <div className="pointer-events-none absolute -z-10 top-[-10%] left-[60%] h-[35rem] w-[35rem] rounded-full bg-orange-500 mix-blend-soft-light blur-3xl opacity-10 animate-spin-slow" />
      <div className="pointer-events-none absolute -z-10 bottom-[-15%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-indigo-600 mix-blend-soft-light blur-3xl opacity-10 animate-spin-reverse" />

      {/* Hero */}
      <section className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pt-28 sm:pt-32 md:flex-row md:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]">
            Mathis&nbsp;Boche
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            Je code, je joue aux échecs et je construis des choses bien faites.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="mailto:mathis@m-b.co"
            className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900"
          >
            Me contacter
          </a>
            <Link
              href="#projets"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-orange-400"
            >
              Voir mes projets
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <Image
            src="/images/mathis-echecs.JPG"
            alt="Mathis à l'échiquier"
            width={340}
            height={340}
            className="rounded-3xl object-cover shadow-2xl saturate-150"
            priority
          />
          <span className="absolute inset-0 rounded-3xl border border-orange-400/30" />
        </motion.div>
      </section>

      {/* Main Sections Grid */}
      <div id="projets" className="mx-auto mt-32 mb-24 grid w-full max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <SectionCard icon={Info} title="À propos">
          <ul className="ml-5 list-disc space-y-1 text-base leading-relaxed">
            <li>17 ans, lycéen</li>
            <li>J’ai commencé à coder en seconde.</li>
            <li>Joueur d’échecs de compétition.</li>
            <li>Je combine code, communication et transmission.</li>
          </ul>
        </SectionCard>

        <SectionCard icon={Briefcase} title="Projets & expériences">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Crown className="mt-1 h-6 w-6 text-orange-400" />
              <div>
                <h3 className="text-lg font-semibold">ChessMates International</h3>
                <p className="text-sm text-neutral-400">Communication & site web — Depuis 2024</p>
                <Link href="https://chessmatesinternational.com" className="mt-1 inline-flex items-center gap-1 underline hover:text-orange-400">
                  <ExternalLink size={16} /> chessmatesinternational.com
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="mt-1 h-6 w-6 text-orange-400" />
              <div>
                <h3 className="text-lg font-semibold">DAFFE 1</h3>
                <p className="text-sm text-neutral-400">Animateur échecs — Diplômé en 2024</p>
                <Link href="https://mtbh.fr/daf" className="mt-1 inline-flex items-center gap-1 underline hover:text-orange-400">
                  <ExternalLink size={16} /> mtbh.fr/daf
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="mt-1 h-6 w-6 text-orange-400" />
              <div>
                <h3 className="text-lg font-semibold">Projets personnels</h3>
                <ul className="mt-2 ml-5 list-disc space-y-1">
                  <li>
                    <Link href="https://mathisboche.fr" className="inline-flex items-center gap-1 underline hover:text-orange-400">
                      <ExternalLink size={16} /> mathisboche.fr
                    </Link>
                    — ancienne version du site
                  </li>
                  <li>
                    <Link href="https://mtbh.fr" className="inline-flex items-center gap-1 underline hover:text-orange-400">
                      <ExternalLink size={16} /> mtbh.fr
                    </Link>
                    — raccourcisseur de liens
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard icon={Crown} title="Échecs">
          <ul className="ml-5 list-disc space-y-1 text-base leading-relaxed">
            <li>Classement : 1725 (standard), 1687 (rapide), 1694 (blitz)</li>
            <li>Membre du club de Bois‑Colombes</li>
            <li>Deux participations aux Championnats de France Jeunes</li>
            <li>Animateur à la Cité des sciences (depuis 2025)</li>
          </ul>
          <Link href="https://mtbh.fr/chess" className="mt-3 inline-flex items-center gap-1 underline hover:text-orange-400">
            <ExternalLink size={16} /> mtbh.fr/chess
          </Link>
        </SectionCard>

        <SectionCard icon={Mail} title="Contact">
          <div className="space-y-4 text-base">
            <a href="mailto:mathis@m-b.co" className="inline-flex items-center gap-2 underline hover:text-orange-400">
              <Mail size={18} /> mathis@m-b.co
            </a>
            <div className="flex flex-wrap items-center gap-6">
              <a href="https://github.com/mathisboche" className="inline-flex items-center gap-1 underline hover:text-orange-400">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com/in/mathisboche" className="inline-flex items-center gap-1 underline hover:text-orange-400">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://mtbh.fr" className="inline-flex items-center gap-1 underline hover:text-orange-400">
                <ExternalLink size={18} /> mtbh.fr
              </a>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Footer */}
      <footer className="mx-auto mb-12 text-center text-sm text-neutral-500">
        Dernière mise à jour : avril 2025 • Hébergé sur Vercel
      </footer>
    </main>
);
}