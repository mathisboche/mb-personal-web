'use client';

import { useEffect } from "react";
import { Mail } from "lucide-react";

export default function MailPage() {
  useEffect(() => {
    window.location.href =
      "mailto:mathis@boche.co?subject=Contact";
  }, []);

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#0b1e40] via-[#141327] to-black">
      <div
        className="
          relative
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-md
          shadow-2xl
          w-[90vw] max-w-sm
          p-5
          flex flex-col items-center gap-3
          sm:p-8
          "
      >
        <Mail className="text-orange-400 w-8 h-8 mb-1 sm:w-10 sm:h-10" />
        <h1 className="font-spaceGrotesk text-xl sm:text-2xl font-bold text-orange-400 text-center">
          Contact par email
        </h1>
        <p className="text-neutral-200 text-sm sm:text-base mb-1 text-center">
          Ouverture de votre messagerie…
        </p>
        <a
          href="mailto:mathis@boche.co?subject=Contact%20depuis%20mtbh.fr"
          className="
            inline-flex items-center gap-2
            rounded-full border border-orange-400
            px-4 py-2
            text-xs sm:text-sm font-medium
            transition
            hover:bg-orange-400 hover:text-neutral-900
            text-orange-400 bg-white/10
          "
        >
          Si rien ne se passe, cliquez ici
        </a>
        <div className="mt-2 text-xs text-neutral-400 text-center break-all">
          Ou copiez&nbsp;
          <span className="font-mono text-neutral-100">mathis@boche.co</span>
        </div>
      </div>
    </main>
  );
}
