import type { NuovaRichiesta, Richiesta } from './tipi';

// In sviluppo Vite inoltra /api verso l'API su http://localhost:5080 (vedi vite.config.ts).
export async function leggiRichieste(): Promise<Richiesta[]> {
  const risposta = await fetch('/api/richieste');
  if (!risposta.ok) {
    throw new Error(`GET /api/richieste ha risposto ${risposta.status}`);
  }
  return risposta.json();
}

export async function creaRichiesta(nuova: NuovaRichiesta): Promise<Richiesta> {
  const risposta = await fetch('/api/richieste', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuova),
  });
  if (!risposta.ok) {
    throw new Error(`POST /api/richieste ha risposto ${risposta.status}`);
  }
  return risposta.json();
}
