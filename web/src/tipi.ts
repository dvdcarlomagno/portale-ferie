export type TipoRichiesta = 'ferie' | 'permesso';

export interface Richiesta {
  id: string;
  dipendente: string;
  /** Data di inizio in formato AAAA-MM-GG. */
  dal: string;
  /** Data di fine in formato AAAA-MM-GG, inclusa nel periodo. */
  al: string;
  tipo: TipoRichiesta;
  note: string | null;
}

export type NuovaRichiesta = Omit<Richiesta, 'id'>;
