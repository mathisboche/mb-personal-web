export default function Page() {
  return (
    <main className="garage-sheet">
      <h1 className="garage-headline">Mathis Boche</h1>

      <p className="garage-lead">
        Étudiant en prépa scientifique au lycée Chaptal, Paris.
        Parfois je m’occupe de communication pour des associations d’échecs.
      </p>

      <hr className="garage-rule" />

      <ul className="garage-list">
        <li className="garage-row">
          <a className="garage-link" href="https://www.instagram.com/mathis.boche/" target="_blank" rel="noopener noreferrer">
            instagram.com/mathis.boche
          </a>
        </li>
        <li className="garage-row">
          <a className="garage-link" href="https://fr.linkedin.com/in/mathisboche" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/mathisboche
          </a>
        </li>
        <li className="garage-row">
          <a className="garage-link" href="https://github.com/mathisboche" target="_blank" rel="noopener noreferrer">
            github.com/mathisboche
          </a>
        </li>
        <li className="garage-row">
          <a className="garage-link" href="mailto:mathis@mathisboche.com">mathis@mathisboche.com</a>
        </li>
      </ul>
    </main>
  );
}
