# Conoscenza del dominio ferie

Fatti confermati sul Portale Ferie. Ogni voce indica la fonte.

## Richieste

- Una richiesta ha: dipendente, data di inizio (`dal`), data di fine (`al`), tipo (`ferie` o `permesso`) e note facoltative.
- Le date sono in formato AAAA-MM-GG. La data di fine non può precedere quella di inizio (fonte: `api/Program.cs`, POST `/api/richieste`).
- Lo stato delle richieste è in memoria: si perde al riavvio dell'API (fonte: `api/Archiviazione/RichiesteStore.cs`).

## Giorni lavorativi

- Il conteggio è inclusivo: include `dal` e `al` (fonte: `api/Dominio/GiorniLavorativi.cs`).
- Sono esclusi sabato, domenica e le festività nazionali dell'elenco fisso del 2026.
- L'elenco delle festività è duplicato in `api/Dominio/GiorniLavorativi.cs` e in `web/src/dominio/festivita.ts`: se cambia uno, cambiate l'altro.
- Il front-end ha una copia della stessa regola in `web/src/dominio/giorniLavorativi.ts`, per usarla senza chiamare l'API.

## Endpoint

| Metodo | Percorso | Scopo |
|---|---|---|
| GET | `/api/richieste` | Elenco delle richieste |
| POST | `/api/richieste` | Crea una richiesta (201) o rifiuta con 400 |
| GET | `/api/giorni-lavorativi?dal=&al=` | Restituisce `{ "giorni": n }` |
