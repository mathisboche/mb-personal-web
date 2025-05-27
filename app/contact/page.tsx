'use client';

import { Mail, Phone, MessageCircle, Linkedin, Github, Instagram, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

const mailto = "mailto:mathis@boche.co?subject=Contact";
const tel = "+33601868589";
const waNumber = "33601868589";
const waMessage = encodeURIComponent("Bonjour");
const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#0b1e40] via-[#141327] to-black relative">
      {/* Bouton retour en-dehors de la carte */}
      <Link
        href="/"
        className="fixed top-5 left-5 flex items-center gap-1 text-orange-400 hover:underline text-base z-50"
      >
        <ArrowLeft size={20} /> Retour
      </Link>
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl w-[95vw] max-w-lg p-6 flex flex-col items-center gap-4 sm:p-10">
        <h1 className="font-spaceGrotesk text-2xl sm:text-3xl font-bold text-orange-400 mb-2 text-center">
          Me contacter
        </h1>
        <div className="w-full flex flex-col gap-3">
          <a href={mailto} className="flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900 text-orange-400 bg-white/10 justify-center">
            <Mail size={18} /> Email
          </a>
          <a href={`tel:${tel}`} className="flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900 text-orange-400 bg-white/10 justify-center">
            <Phone size={18} /> Appeler
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900 text-orange-400 bg-white/10 justify-center">
            <MessageCircle size={18} /> WhatsApp
          </a>
          <div className="flex flex-wrap gap-4 justify-center mt-3">
            <a href="https://www.linkedin.com/in/mathis-boche/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline hover:text-orange-400">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/MathisBoche" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline hover:text-orange-400">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.instagram.com/mathis.boche/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline hover:text-orange-400">
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
        <a
          href="/MathisBoche.vcf"
          download="MathisBoche.vcf"
          className="mt-6 flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900 text-orange-400 bg-white/10"
        >
          <Download size={18} /> Ajouter à mes contacts
        </a>
        <div className="mt-2 text-xs text-neutral-400 text-center">
          <div>
            Email : <span className="font-mono text-neutral-100">mathis@boche.co</span>
          </div>
          <div>
            Tel : <span className="font-mono text-neutral-100">+33 6 01 86 85 89</span>
          </div>
        </div>
      </div>
    </main>
  );
}
