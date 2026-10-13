/**
 * Festività nazionali italiane del 2026 (elenco fisso, come nell'API).
 * Pasqua e Lunedì dell'Angelo sono inserite come date fisse.
 */
export const festivita: ReadonlySet<string> = new Set([
  '2026-01-01', // Capodanno
  '2026-01-06', // Epifania
  '2026-04-05', // Pasqua
  '2026-04-06', // Lunedì dell'Angelo
  '2026-04-25', // Festa della Liberazione
  '2026-05-01', // Festa del lavoro
  '2026-06-02', // Festa della Repubblica
  '2026-08-15', // Ferragosto
  '2026-11-01', // Ognissanti
  '2026-12-08', // Immacolata Concezione
  '2026-12-25', // Natale
  '2026-12-26', // Santo Stefano
]);
