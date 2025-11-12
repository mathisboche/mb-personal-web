export default function Page() {
  return (
    <main className="garage-sheet">
      <h1 className="garage-headline">Mathis Boche</h1>

      <p className="garage-lead">
        Étudiant en classe préparatoire scientifique à Paris<br />
      </p>

      <section className="mt-8">
        <h2>Activités</h2>
        <ul>
          <li>
            Responsable communication pour ChessMates International — <a className="garage-link" href="https://www.chessmatesinternational.com" target="_blank" rel="noopener noreferrer">chessmatesinternational.com</a>
          </li>
          <li>
            Membre du Comité départemental du jeu d’échecs des Hauts-de-Seine — <a className="garage-link" href="https://www.echecs92.com" target="_blank" rel="noopener noreferrer">echecs92.com</a>
          </li>
          <li>
            Cité des sciences et de l’industrie (Paris) : ateliers d’initiation aux échecs.
          </li>
        </ul>
      </section>

      <hr className="garage-rule" />
      <h2>Contact</h2>

      <ul className="garage-list">
        <li className="garage-row">
          LinkedIn : <a className="garage-link" href="https://linkedin.com/in/mathisboche" target="_blank" rel="noopener noreferrer">linkedin.com/in/mathisboche</a>
        </li>
        <li className="garage-row">
          Email : <a className="garage-link" href="mailto:mathis@mathisboche.com">mathis@mathisboche.com</a>
        </li>
        <li className="garage-row">
          Téléphone : <a className="garage-link" href="tel:+33601868589">+33 6 01 86 85 89</a>
        </li>
      </ul>
    </main>
  );
}
