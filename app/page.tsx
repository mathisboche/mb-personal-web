"use client";

import Image from "next/image";
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
  // Objet email
  const mailto = "mailto:mathis@boche.co?subject=Contact%20via%20le%20site%20web";

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-neutral-100 selection:bg-orange-500/80 selection:text-neutral-900">
      {/* SEO */}
      <head>
        <title>Mathis Boche — Échecs, Communication & Web</title>
        <meta
          name="description"
          content="Mathis Boche : passionné d’échecs, animateur ChessMates, créateur web et responsable communication. Découvrez mon parcours, mes expériences et contactez-moi."
        />
        <meta name="keywords" content="Mathis Boche, échecs, ChessMates, animateur, communication, site web, Bois-Colombes, DAFFE 1, compétitions, réseau, Instagram" />
        <meta name="robots" content="index, follow" />
      </head>

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-br from-[#0b1e40] via-[#141327] to-black" />
      <div className="pointer-events-none absolute -z-10 top-[-10%] left-[60%] h-[35rem] w-[35rem] rounded-full bg-orange-500 mix-blend-soft-light blur-3xl opacity-10 animate-spin-slow" />
      <div className="pointer-events-none fixed -z-10 -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-600 mix-blend-soft-light blur-3xl opacity-10 animate-spin-reverse" />

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
            Communication et web pour ChessMates International. Joueur d’échecs passionné.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href={mailto}
              className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900"
            >
              Me contacter
            </a>
            <a
              href="#xp"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-orange-400"
            >
              Voir mon parcours
            </a>
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
      <div id="xp" className="mx-auto mt-32 mb-24 grid w-full max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-2 scroll-mt-[24px] md:scroll-mt-[24px]">
        
        <SectionCard icon={Info} title="À propos">
          <ul className="ml-5 list-disc space-y-1 text-base leading-relaxed">
            <li>17 ans, lycéen à Montrouge</li>
            <li>Responsable communication ChessMates International</li>
            <li>DAFFE 1 — Animateur diplômé</li>
            <li>Joueur d’échecs de compétition, club de Bois-Colombes</li>
            <li>Entrepreneuriat & web, focus efficacité</li>
          </ul>
        </SectionCard>

        <SectionCard icon={Briefcase} title="Expériences">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Crown className="mt-1 h-6 w-6 text-orange-400" />
              <div>
                <h3 className="text-lg font-semibold">ChessMates International</h3>
                <p className="text-sm text-neutral-400">Responsable communication & site web (2024–...)</p>
                <a href="https://chessmatesinternational.com" target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 underline hover:text-orange-400">
                  <ExternalLink size={16} /> chessmatesinternational.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="mt-1 h-6 w-6 text-orange-400" />
              <div>
                <h3 className="text-lg font-semibold">DAFFE 1 — Animateur échecs</h3>
                <p className="text-sm text-neutral-400">Diplômé en 2024, expérience terrain à Bois-Colombes & Cité des sciences</p>
                <a href="https://mtbh.fr/daffe" target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 underline hover:text-orange-400">
                  <ExternalLink size={16} /> mtbh.fr/daffe
                </a>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard icon={Crown} title="Échecs">
          <ul className="ml-5 list-disc space-y-1 text-base leading-relaxed">
            <li>Classement FIDE : 1746 (standard), 1687 (rapide), 1694 (blitz)</li>
            <li>Club : Bois‑Colombes</li>
            <li>Animateur à la Cité des sciences (depuis 2025)</li>
            <li>Deux championnats de France Jeunes</li>
          </ul>
          <a href="https://mtbh.fr/fide" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 underline hover:text-orange-400">
            <ExternalLink size={16} /> mtbh.fr/fide
          </a>
        </SectionCard>

        <SectionCard icon={Mail} title="Contact & réseaux">
          <div className="space-y-4 text-base">
            <a href={mailto} className="inline-flex items-center gap-2 underline hover:text-orange-400">
              <Mail size={18} /> mathis@boche.co
            </a>
            <div className="flex flex-wrap items-center gap-6">

              <a href="https://mtbh.fr/linkedin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline hover:text-orange-400">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://mtbh.fr/github" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline hover:text-orange-400">
                <Github size={18} /> GitHub
              </a>
              <a href="https://mtbh.fr/instagram" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline hover:text-orange-400">
                <Instagram size={18} /> Instagram
              </a>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Footer */}
      <footer className="mx-auto mb-12 text-center text-sm text-neutral-500">
        Dernière mise à jour : mai 2025 • Hébergé sur Vercel
      </footer>
    </main>
  );
}
