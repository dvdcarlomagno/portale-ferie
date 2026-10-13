import { festivita } from './festivita';

const MILLISECONDI_PER_GIORNO = 24 * 60 * 60 * 1000;

/** Converte AAAA-MM-GG in una data UTC a mezzanotte, per evitare problemi di fuso orario. */
function daStringa(data: string): number {
  const [anno, mese, giorno] = data.split('-').map(Number);
  return Date.UTC(anno, mese - 1, giorno);
}

function aStringa(istante: number): string {
  return new Date(istante).toISOString().slice(0, 10);
}

export function eGiornoLavorativo(istante: number): boolean {
  const giornoSettimana = new Date(istante).getUTCDay();
  if (giornoSettimana === 0 || giornoSettimana === 6) {
    return false;
  }
  return !festivita.has(aStringa(istante));
}

/**
 * Conta i giorni lavorativi tra due date AAAA-MM-GG, inclusive.
 * Esclude sabato, domenica e le festività nazionali. Specchio della regola dell'API.
 */
export function contaGiorniLavorativi(dal: string, al: string): number {
  const fine = daStringa(al);
  let giorni = 0;
  for (let istante = daStringa(dal); istante <= fine; istante += MILLISECONDI_PER_GIORNO) {
    if (eGiornoLavorativo(istante)) {
      giorni++;
    }
  }
  return giorni;
}
