import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ListaRichieste } from './ListaRichieste';
import type { Richiesta } from '../tipi';

const richiesta: Richiesta = {
  id: '1',
  dipendente: 'Giulia Bianchi',
  dal: '2026-10-19',
  al: '2026-10-20',
  tipo: 'ferie',
  note: 'Ponte',
};

describe('ListaRichieste', () => {
  it('mostra un messaggio quando non ci sono richieste', () => {
    render(<ListaRichieste richieste={[]} />);

    expect(screen.getByText('Nessuna richiesta registrata.')).toBeInTheDocument();
  });

  it('mostra una riga per ogni richiesta', () => {
    render(<ListaRichieste richieste={[richiesta]} />);

    expect(screen.getByRole('cell', { name: 'Giulia Bianchi' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'ferie' })).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(2);
  });
});
