'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    window.location.href = 'mailto:mathis@boche.co';
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Ouverture du mail…</h1>
      <p>
        Si rien ne se passe,&nbsp;
        <a href="mailto:mathis@boche.co">clique ici</a>
      </p>
    </div>
  );
}
