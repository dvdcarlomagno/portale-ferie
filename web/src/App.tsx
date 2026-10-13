import { useEffect, useState } from 'react';
import { creaRichiesta, leggiRichieste } from './api';
import { FormRichiesta } from './components/FormRichiesta';
import { ListaRichieste } from './components/ListaRichieste';
import type { NuovaRichiesta, Richiesta } from './tipi';

export function App() {
  const [richieste, setRichieste] = useState<Richiesta[]>([]);
  const [errore, setErrore] = useState<string | null>(null);

  async function ricarica() {
    try {
      setRichieste(await leggiRichieste());
      setErrore(null);
    } catch {
      setErrore('Impossibile caricare le richieste. Controllate che l\'API sia avviata.');
    }
  }

  useEffect(() => {
    void ricarica();
  }, []);

  async function salva(nuova: NuovaRichiesta) {
    try {
      await creaRichiesta(nuova);
      await ricarica();
    } catch {
      setErrore('Salvataggio non riuscito. Riprovate.');
    }
  }

  return (
    <main>
      <h1>Portale Ferie</h1>
      {errore && <p role="alert">{errore}</p>}
      <FormRichiesta onSalva={salva} />
      <ListaRichieste richieste={richieste} />
    </main>
  );
}
