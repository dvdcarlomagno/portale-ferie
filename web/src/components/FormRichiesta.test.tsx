import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { FormRichiesta } from './FormRichiesta';

describe('FormRichiesta', () => {
  it('invia i dati inseriti dall\'utente', async () => {
    const utente = userEvent.setup();
    const onSalva = vi.fn().mockResolvedValue(undefined);
    render(<FormRichiesta onSalva={onSalva} />);

    await utente.type(screen.getByLabelText('Dipendente'), 'Mario Rossi');
    // Per i campi data usiamo fireEvent: in jsdom la digitazione in un input type="date" non è affidabile.
    fireEvent.change(screen.getByLabelText('Dal'), { target: { value: '2026-10-05' } });
    fireEvent.change(screen.getByLabelText('Al'), { target: { value: '2026-10-06' } });
    await utente.selectOptions(screen.getByLabelText('Tipo'), 'permesso');
    await utente.click(screen.getByRole('button', { name: 'Invia richiesta' }));

    expect(onSalva).toHaveBeenCalledWith({
      dipendente: 'Mario Rossi',
      dal: '2026-10-05',
      al: '2026-10-06',
      tipo: 'permesso',
      note: null,
    });
  });
});
