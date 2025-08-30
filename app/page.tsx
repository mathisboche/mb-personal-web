export default function Page() {
  return (
    <main className="container section">
      <header className="mb-10">
        <h1 className="hero-title display">Mathis Boche</h1>
        <p className="lead mt-4 max-w-2xl italic">
          Étudiant en PCSI (Lycée Chaptal, Paris). Je m’occupe de communication pour des
          événements et associations que je connais.
        </p>
        <p className="mt-4 text-[15px]">
          <strong>Contact</strong> ·
          <a className="underline" href="mailto:mathis@mathisboche.com"> mathis@mathisboche.com</a>
        </p>
      </header>

      <div className="rule" />

      <section className="mt-10">
        <h2 className="display text-2xl sm:text-3xl font-semibold">En ce moment</h2>
        <div className="mt-4 space-y-4 text-[15.5px] leading-7">
          <p>
            <strong>ChessMates International</strong> : com et site (depuis 2024)
            <br />
            Couverture Tallinn 2024 et York 2025 : photos, stories, récap, mises à jour site (Wix Studio).
          </p>
          <p>
            <strong>Cité des sciences et de l’industrie (Paris)</strong> : ateliers échecs
            <br />
            Co‑animation mensuelle depuis janvier 2025 (public débutant, 2h).
            <br />
            Été 2025 : présence quotidienne du 15 juillet au 31 août, dans le cadre du Grand Jeu.
          </p>
        </div>
      </section>

      <div className="my-10 rule" />

      <section>
        <h2 className="display text-2xl sm:text-3xl font-semibold">Certifications</h2>
        <ul className="mt-4 list-disc pl-5 text-[15.5px] leading-7">
          <li>DAFFE 1 (FFE), 2024</li>
          <li>Cambridge English B1, 2022</li>
        </ul>
      </section>

      <div className="my-10 rule" />

      <section>
        <h2 className="display text-2xl sm:text-3xl font-semibold">Repères</h2>
        <p className="mt-4 text-[15.5px] leading-7">
          18 ans, basé à Paris.
          <br />
          Membre du Cercle d’Échecs de Bois‑Colombes.
        </p>
      </section>

      <div className="my-10 rule" />

      <section>
        <h2 className="display text-2xl sm:text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-[15.5px] leading-7">
          <strong>Email</strong> :
          <a className="underline" href="mailto:mathis@mathisboche.com"> mathis@mathisboche.com</a>
          <br />
          <strong>LinkedIn</strong> :
          <a
            className="underline ml-1"
            href="http://linkedin.com/in/mathis-boche"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/mathis-boche
          </a>
          <br />
          <strong>Références visibles</strong> : Instagram
          <a
            className="underline ml-1"
            href="https://www.instagram.com/chessmates_intl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @chessmates_intl
          </a>
        </p>
      </section>
    </main>
  );
}
