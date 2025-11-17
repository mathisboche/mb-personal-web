import PhoneCaptcha from "../components/PhoneCaptcha";
import TextCascade from "../components/TextCascade";

export default function Page() {
  return (
    <main className="garage-sheet">
      <h1 className="garage-headline">
        <TextCascade text="Mathis Boche" />
      </h1>

      <p className="garage-lead">
        <TextCascade text="Étudiant en classe préparatoire scientifique à Paris" />
        <br />
      </p>

      <section className="mt-8">
        <h2 className="garage-subhead">
          <TextCascade text="Activités" />
        </h2>
        <ul>
          <li>
            <TextCascade text="Responsable communication pour ChessMates International" /> — <a className="garage-link" href="https://www.chessmatesinternational.com" target="_blank" rel="noopener noreferrer">chessmatesinternational.com</a>
          </li>
          <li>
            <TextCascade text="Membre du Comité départemental du jeu d’échecs des Hauts-de-Seine" /> — <a className="garage-link" href="https://www.echecs92.com" target="_blank" rel="noopener noreferrer">echecs92.com</a>
          </li>
          <li>
            <TextCascade text="Cité des sciences et de l’industrie (Paris) : ateliers d’initiation aux échecs." />
          </li>
        </ul>
      </section>

      <hr className="garage-rule" />
      <h2 className="garage-subhead">
        <TextCascade text="Contact" />
      </h2>

      <ul className="garage-list">
        <li className="garage-row">
          <TextCascade text="LinkedIn :" /> <a className="garage-link" href="https://linkedin.com/in/mathisboche" target="_blank" rel="noopener noreferrer">linkedin.com/in/mathisboche</a>
        </li>
        <li className="garage-row">
          <TextCascade text="Email :" /> <a className="garage-link" href="mailto:mathis@mathisboche.com">mathis@mathisboche.com</a>
        </li>
        <li className="garage-row">
          <TextCascade text="Téléphone :" /> <PhoneCaptcha />
        </li>
      </ul>
    </main>
  );
}
