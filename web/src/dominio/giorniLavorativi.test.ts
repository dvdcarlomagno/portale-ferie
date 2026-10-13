import { describe, expect, it } from 'vitest';
import { contaGiorniLavorativi } from './giorniLavorativi';

describe('contaGiorniLavorativi', () => {
  it('conta cinque giorni in una settimana da lunedì a domenica', () => {
    expect(contaGiorniLavorativi('2026-10-05', '2026-10-11')).toBe(5);
  });

  it('vale zero se l\'intervallo cade solo nel fine settimana', () => {
    expect(contaGiorniLavorativi('2026-10-10', '2026-10-11')).toBe(0);
  });
});
