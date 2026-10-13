import { useState, type FormEvent } from 'react';
import type { NuovaRichiesta, TipoRichiesta } from '../tipi';

interface Props {
  onSalva: (nuova: NuovaRichiesta) => Promise<void>;
}

interface ValoriForm {
  dipendente: string;
  dal: string;
  al: string;
  tipo: TipoRichiesta;
  note: string;
}

const valoriIniziali: ValoriForm = {
  dipendente: '',
  dal: '',
  al: '',
  tipo: 'ferie',
  note: '',
};

export function FormRichiesta({ onSalva }: Props) {
  const [valori, setValori] = useState<ValoriForm>(valoriIniziali);
  const [inInvio, setInInvio] = useState(false);

  function aggiorna<K extends keyof ValoriForm>(campo: K, valore: ValoriForm[K]) {
    setValori((precedenti) => ({ ...precedenti, [campo]: valore }));
  }

  async function invia(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setInInvio(true);
    try {
      await onSalva({
        dipendente: valori.dipendente.trim(),
        dal: valori.dal,
        al: valori.al,
        tipo: valori.tipo,
        note: valori.note.trim() || null,
      });
      setValori(valoriIniziali);
    } finally {
      setInInvio(false);
    }
  }

  return (
    <form onSubmit={invia} aria-label="Nuova richiesta">
      <label>
        Dipendente
        <input
          name="dipendente"
          required
          value={valori.dipendente}
          onChange={(e) => aggiorna('dipendente', e.target.value)}
        />
      </label>
      <label>
        Dal
        <input
          type="date"
          name="dal"
          required
          value={valori.dal}
          onChange={(e) => aggiorna('dal', e.target.value)}
        />
      </label>
      <label>
        Al
        <input
          type="date"
          name="al"
          required
          value={valori.al}
          onChange={(e) => aggiorna('al', e.target.value)}
        />
      </label>
      <label>
        Tipo
        <select
          name="tipo"
          value={valori.tipo}
          onChange={(e) => aggiorna('tipo', e.target.value as TipoRichiesta)}
        >
          <option value="ferie">Ferie</option>
          <option value="permesso">Permesso</option>
        </select>
      </label>
      <label>
        Note
        <textarea name="note" value={valori.note} onChange={(e) => aggiorna('note', e.target.value)} />
      </label>
      <button type="submit" disabled={inInvio}>
        Invia richiesta
      </button>
    </form>
  );
}
