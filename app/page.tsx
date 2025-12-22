import Image from "next/image";
import type { CSSProperties } from "react";

import PortraitScrollBehavior from "../components/PortraitScrollBehavior";
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
      <PortraitScrollBehavior />
      <div className="garage-backdrop" aria-hidden="true" />
      <div className="garage-sheet">
        <div className="garage-layout">
          <div className="garage-layout-media garage-line" style={nextLineStyle()}>
            <div className="garage-portrait-frame">
              <Image
                src="/hd_boche-mathis.jpg"
                alt="Portrait de Mathis Boche"
                fill
                sizes="(max-width: 820px) 70vw, 340px"
                priority
                quality={82}
                className="garage-portrait-image"
              />
            </div>
          </div>
          <div className="garage-layout-content">
            <header className="garage-hero">
              <h1 className="garage-headline garage-line" style={nextLineStyle()}>
                <TextCascade text="Mathis Boche" />
              </h1>
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
                    <TextCascade text="Membre du Comité départemental du jeu d’échecs des Hauts\u2011de\u2011Seine" />
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
                    <TextCascade text="Cité des sciences et de l’industrie (Paris)\u202F: ateliers d’initiation aux échecs." />
                  </span>
                </li>
              </ul>
            </section>

            <section className="garage-section">
              <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
                <TextCascade text="Événement" />
              </h2>
              <ul className="garage-list">
                <li className="garage-item garage-line" style={nextLineStyle()}>
                  <span className="garage-item-title">
                    <TextCascade text="Colloque «\u202FLe sport universitaire\u202F: l’urgence d’agir\u202F»\u00A0-\u00A0Sénat." />
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
        </div>
      </div>
    </main>
  );
}
