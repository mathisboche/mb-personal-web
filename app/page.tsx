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
    <main className="garage-shell">
      <div className="garage-backdrop" aria-hidden="true" />
      <div className="garage-sheet">
        <header className="garage-hero">
          <h1 className="garage-headline garage-line" style={nextLineStyle()}>
            <TextCascade text="Mathis Boche" />
          </h1>

          <p className="garage-lead garage-line" style={nextLineStyle()}>
            <TextCascade text="Contribution au développement du jeu d’échecs." />
          </p>
        </header>

        <section className="garage-section">
          <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
            <TextCascade text="Activités" />
          </h2>
          <ul className="garage-list garage-list--activities">
            <li className="garage-item garage-line" style={nextLineStyle()}>
              <span className="garage-item-title">
                <TextCascade text="Responsable communication pour ChessMates International" />
              </span>
              <a
                className="garage-link"
                href="https://www.chessmatesinternational.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                chessmatesinternational.com
              </a>
            </li>
            <li className="garage-item garage-line" style={nextLineStyle()}>
              <span className="garage-item-title">
                <TextCascade text="Membre du Comité départemental du jeu d’échecs des Hauts-de-Seine" />
              </span>
              <a
                className="garage-link"
                href="https://www.echecs92.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                echecs92.com
              </a>
            </li>
            <li className="garage-item garage-line" style={nextLineStyle()}>
              <span className="garage-item-title">
                <TextCascade text="Cité des sciences et de l’industrie (Paris) : ateliers d’initiation aux échecs." />
              </span>
            </li>
          </ul>
        </section>

        <section className="garage-section garage-section--contact">
          <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
            <TextCascade text="Contact" />
          </h2>

          <ul className="garage-list garage-list--contact">
            <li className="garage-row garage-line" style={nextLineStyle()}>
              <TextCascade text="LinkedIn" />{" "}
              <a
                className="garage-link"
                href="https://linkedin.com/in/mathisboche"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/mathisboche
              </a>
            </li>
            <li className="garage-row garage-line" style={nextLineStyle()}>
              <TextCascade text="Email" />{" "}
              <a className="garage-link" href="mailto:mathis@mathisboche.com">
                mathis@mathisboche.com
              </a>
            </li>
            <li className="garage-row garage-line" style={nextLineStyle()}>
              <TextCascade text="Téléphone" /> <PhoneCaptcha />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
