import type { CSSProperties } from "react";

import PhoneCaptcha from "../components/PhoneCaptcha";
import TextCascade from "../components/TextCascade";

type LineAwareStyle = CSSProperties & {
  "--line-index"?: number;
};

export default function Page() {
  let lineIndex = 0;
  const nextLineStyle = (): LineAwareStyle => ({
    "--line-index": lineIndex++,
  });

  return (
    <main className="garage-sheet">
      <h1 className="garage-headline garage-line" style={nextLineStyle()}>
        <TextCascade text="Mathis Boche" />
      </h1>

      <p className="garage-lead garage-line" style={nextLineStyle()}>
        <TextCascade text="Étudiant en classe préparatoire scientifique à Paris" />
        <br />
      </p>

      <section className="mt-8">
        <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
          <TextCascade text="Activités" />
        </h2>
        <ul>
          <li className="garage-line" style={nextLineStyle()}>
            <TextCascade text="Responsable communication pour ChessMates International" /> — <a className="garage-link" href="https://www.chessmatesinternational.com" target="_blank" rel="noopener noreferrer">chessmatesinternational.com</a>
          </li>
          <li className="garage-line" style={nextLineStyle()}>
            <TextCascade text="Membre du Comité départemental du jeu d’échecs des Hauts-de-Seine" /> — <a className="garage-link" href="https://www.echecs92.com" target="_blank" rel="noopener noreferrer">echecs92.com</a>
          </li>
          <li className="garage-line" style={nextLineStyle()}>
            <TextCascade text="Cité des sciences et de l’industrie (Paris) : ateliers d’initiation aux échecs." />
          </li>
        </ul>
      </section>

      <hr className="garage-rule garage-line" style={nextLineStyle()} />
      <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
        <TextCascade text="Contact" />
      </h2>

      <ul className="garage-list">
        <li className="garage-row garage-line" style={nextLineStyle()}>
          <TextCascade text="LinkedIn :" /> <a className="garage-link" href="https://linkedin.com/in/mathisboche" target="_blank" rel="noopener noreferrer">linkedin.com/in/mathisboche</a>
        </li>
        <li className="garage-row garage-line" style={nextLineStyle()}>
          <TextCascade text="Email :" /> <a className="garage-link" href="mailto:mathis@mathisboche.com">mathis@mathisboche.com</a>
        </li>
        <li className="garage-row garage-line" style={nextLineStyle()}>
          <TextCascade text="Téléphone :" /> <PhoneCaptcha />
        </li>
      </ul>
    </main>
  );
}
