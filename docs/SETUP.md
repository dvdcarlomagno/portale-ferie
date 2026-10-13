# Preparazione dell'ambiente

Questa guida serve a preparare il computer prima del corso. Eseguite i passaggi nell'ordine indicato e verificate ogni comando con il risultato atteso.

## Prerequisiti

- **Node.js 22 o successivo** (la versione usata per preparare il campione è la 26). Verifica: `node -v`.
- **.NET 10 SDK**. Verifica: `dotnet --version` deve mostrare una versione 10.x.
- **Cursor**, versione recente. Verifica dal menu Cursor > About.

## Clonare il repository

```bash
git clone <URL-del-repository-del-corso> sample-repo
cd sample-repo
```

Il repository non ha remoti configurati nella copia di lavoro del formatore: se lavorate da una copia locale, il comando precedente non serve.

## Front-end: installazione e test

```bash
cd web
npm install
npm test
```

Risultato atteso: l'ultima riga contiene `Tests  5 passed (5)` (sul branch `main`).

## API: test

```bash
cd api.Tests
dotnet test
```

Risultato atteso: l'ultima riga contiene `Passed!` e nessun test fallito.

## Avvio dell'app

In un terminale avviate l'API (ascolta su http://localhost:5080):

```bash
dotnet run --project api
```

In un secondo terminale avviate il front-end:

```bash
cd web
npm run dev
```

Aprite http://localhost:5173 nel browser. Il front-end inoltra le chiamate `/api` verso l'API.

## Se qualcosa non funziona

- `npm test` fallisce subito con "command not found": Node non è nel PATH. Riaprite il terminale dopo l'installazione.
- `dotnet: command not found`: il .NET 10 SDK non è installato o il terminale va riaperto.
- La pagina dice "Impossibile caricare le richieste": l'API non è avviata o non ascolta sulla porta 5080.
