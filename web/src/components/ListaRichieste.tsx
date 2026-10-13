import type { Richiesta } from '../tipi';

interface Props {
  richieste: Richiesta[];
}

export function ListaRichieste({ richieste }: Props) {
  if (richieste.length === 0) {
    return <p>Nessuna richiesta registrata.</p>;
  }

  return (
    <table>
      <caption>Richieste di ferie e permessi</caption>
      <thead>
        <tr>
          <th scope="col">Dipendente</th>
          <th scope="col">Dal</th>
          <th scope="col">Al</th>
          <th scope="col">Tipo</th>
          <th scope="col">Note</th>
        </tr>
      </thead>
      <tbody>
        {richieste.map((richiesta) => (
          <tr key={richiesta.id}>
            <td>{richiesta.dipendente}</td>
            <td>{richiesta.dal}</td>
            <td>{richiesta.al}</td>
            <td>{richiesta.tipo}</td>
            <td>{richiesta.note ?? ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
