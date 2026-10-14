# Preparazione dell'ambiente

Questa guida serve a preparare il computer prima del corso. Eseguite i passaggi nell'ordine indicato e verificate ogni comando con il risultato atteso.

## Prerequisiti

- **Node.js 22 o successivo** (la versione usata per preparare il campione è la 26). Verifica: `node -v`.
- **.NET 10 SDK**. Verifica: `dotnet --version` deve mostrare una versione 10.x.
- **Cursor**, versione recente. Verifica dal menu Cursor > About.

## Clonare il repository

Riceverete per mail il file `portale-ferie.bundle` (un repository Git completo, con tutti i branch). Salvatelo in una cartella di lavoro e da lì:

```bash
git clone portale-ferie.bundle sample-repo
cd sample-repo
git branch -a
```

Dovete vedere i branch `main`, `lab-s1` e `lab-s2` (come `remotes/origin/...`). Per passare a un branch: `git switch lab-s1`.

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
