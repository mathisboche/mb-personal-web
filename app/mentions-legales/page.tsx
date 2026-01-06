import type { CSSProperties } from "react";
import type { Metadata } from "next";

import TextCascade from "../../components/TextCascade";

type LineAwareStyle = CSSProperties & {
  "--line-index"?: number;
};

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  let lineIndex = 0;
  const nextLineStyle = (): LineAwareStyle => ({
    "--line-index": lineIndex++,
  });

  return (
    <main className="garage-shell">
      <div className="garage-backdrop" aria-hidden="true" />
      <div className="garage-sheet">
        <div className="legal-layout">
          <header>
            <h1 className="garage-headline garage-line" style={nextLineStyle()}>
              <TextCascade text="Mentions légales" />
            </h1>
            <p className="garage-lead garage-line" style={nextLineStyle()}>
              <TextCascade text="Informations légales relatives au site mathisboche.com." />
            </p>
          </header>

          <section className="garage-section">
            <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
              <TextCascade text="Éditeur du site" />
            </h2>
            <div className="legal-block">
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="Mathis Boche." />
              </p>
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="Email :" />{" "}
                <a className="garage-link" href="mailto:mathis@mathisboche.com">
                  mathis@mathisboche.com
                </a>
              </p>
            </div>
          </section>

          <section className="garage-section">
            <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
              <TextCascade text="Directeur de publication" />
            </h2>
            <div className="legal-block">
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="Mathis Boche." />
              </p>
            </div>
          </section>

          <section className="garage-section">
            <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
              <TextCascade text="Hébergement" />
            </h2>
            <div className="legal-block">
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="Hébergeur : Vercel Inc." />
              </p>
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="Site web :" />{" "}
                <a
                  className="garage-link"
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          <section className="garage-section">
            <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
              <TextCascade text="Cookies et mesure d’audience" />
            </h2>
            <div className="legal-block">
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="Ce site utilise Google Analytics pour mesurer l’audience et améliorer le contenu." />
              </p>
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="Des cookies peuvent être déposés à cette fin. Vous pouvez les refuser ou les supprimer via les paramètres de votre navigateur." />
              </p>
            </div>
          </section>

          <section className="garage-section">
            <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
              <TextCascade text="Propriété intellectuelle" />
            </h2>
            <div className="legal-block">
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="L’ensemble des contenus (textes, images, éléments graphiques) est la propriété de Mathis Boche, sauf mention contraire." />
              </p>
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="Toute reproduction, représentation ou diffusion est interdite sans autorisation préalable." />
              </p>
            </div>
          </section>

          <section className="garage-section">
            <h2 className="garage-subhead garage-line" style={nextLineStyle()}>
              <TextCascade text="Données personnelles" />
            </h2>
            <div className="legal-block">
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="Les données collectées via les outils de mesure d’audience sont utilisées uniquement à des fins statistiques." />
              </p>
              <p className="legal-text garage-line" style={nextLineStyle()}>
                <TextCascade text="Pour toute demande relative à vos données (accès, rectification, suppression), vous pouvez contacter" />{" "}
                <a className="garage-link" href="mailto:mathis@mathisboche.com">
                  mathis@mathisboche.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
