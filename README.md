# Portale Ferie

Campione didattico per il percorso "Cursor consapevole". Il Portale Ferie è un'app fittizia per registrare le richieste di ferie e permessi: una pagina React con l'elenco delle richieste e un form per crearne una nuova, e un'API .NET 10 con archivio in memoria. Tutti i nomi e i dati sono fittizi.

## Struttura

```
sample-repo/
├── web/            front-end React 19 + Vite + TypeScript, test con Vitest e RTL
├── api/            API .NET 10 (FerieApi), archivio in memoria
├── api.Tests/      test xUnit e WebApplicationFactory per l'API
├── .cursor/        regole e skill del progetto (da riempire in aula)
├── knowledge/      memoria di progetto: INDEX, conoscenza, ipotesi, regole, riunioni
├── plugin-kit/     kit di partenza come plugin Cursor e Claude Code
├── docs/SETUP.md   prerequisiti e comandi
└── AGENTS.md       istruzioni per l'agente
```

## Regola di business

Il conteggio dei giorni lavorativi tra due date è inclusivo: include la data di inizio e quella di fine, ed esclude sabato, domenica e le festività nazionali del 2026 (elenco fisso nell'API e nel front-end).

## Avvio rapido

Seguite [docs/SETUP.md](docs/SETUP.md). In breve: `npm install && npm test` in `web/`, poi `dotnet test api.Tests/` con il .NET 10 SDK installato.

## Branch

| Branch | Contenuto |
|---|---|
| `main` | Applicazione funzionante, test verdi. Punto di partenza. |
| `lab-s1` | Compito del laboratorio 1: aggiungere il conteggio dei giorni lavorativi nel form. Contiene un difetto nascosto nel conteggio. |
| `soluzione-s1` | Soluzione del laboratorio 1: conteggio nel form, difetto corretto, test che lo rilevano. |
| `lab-s2` | Feature "motivazione obbligatoria oltre 5 giorni lavorativi" implementata senza test. |
| `soluzione-s2` | Soluzione del laboratorio 2: test Vitest e xUnit che falliscono se la feature viene rimossa. |
