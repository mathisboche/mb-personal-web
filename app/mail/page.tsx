'use client';

import { useEffect } from "react";
import { Mail } from "lucide-react";

export default function MailPage() {
  useEffect(() => {
    // Pré-remplit l'objet du mail
    window.location.href = "mailto:mathis@boche.co?subject=Contact%20depuis%20mtbh.fr";
  }, []);

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#0b1e40] via-[#141327] to-black">
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-2xl w-full max-w-md flex flex-col items-center gap-4">
        <Mail className="text-orange-400 w-10 h-10 mb-2" />
        <h1 className="font-spaceGrotesk text-2xl sm:text-3xl font-bold text-orange-400">
          Contact par email
        </h1>
        <p className="text-neutral-200 text-base mb-2 text-center">
          Ouverture de votre messagerie…
        </p>
        <a
          href="mailto:mathis@boche.co?subject=Contact%20depuis%20mtbh.fr"
          className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-sm font-medium transition hover:bg-orange-400 hover:text-neutral-900 text-orange-400 bg-white/10"
        >
          Si rien ne se passe, cliquez ici
        </a>
        <div className="mt-3 text-xs text-neutral-400 text-center">
          Ou copiez simplement&nbsp;
          <span className="font-mono text-neutral-100">mathis@boche.co</span>
        </div>
      </div>
    </main>
  );
}
