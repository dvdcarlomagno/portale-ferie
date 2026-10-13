# Kit di partenza: feinar-starter

Questo kit raccoglie tre pezzi che il team può riusare: una checklist di fine attività, una regola per scrivere i test prima del codice e una skill che usa la memoria di progetto in `knowledge/`. È scritto come plugin, in due formati: Cursor (`.cursor-plugin/plugin.json`) e Claude Code (`.claude-plugin/plugin.json`).

## Contenuto

```
plugin-kit/
├── .cursor-plugin/plugin.json    manifest per Cursor
├── .claude-plugin/plugin.json    manifest per Claude Code
├── skills/
│   ├── definition-of-done/SKILL.md   checklist di fine attività (da completare in aula)
│   └── company-brain/SKILL.md        legge e aggiorna knowledge/
├── rules/
│   └── test-prima.mdc            scrivere prima il test che fallisce
└── README.md
```

## Come provarlo

- **Cursor:** copiate la cartella come plugin del vostro progetto, oppure installatela dal repository Git secondo la procedura che vi mostra il formatore. L'installazione da un marketplace di team richiede un piano Cursor che lo consente.
- **Claude Code:** dalla radice del repository avviate `claude --plugin-dir ./plugin-kit`. Il comando carica il plugin per una sessione.

## Regole d'uso

- Il manifest richiede solo il campo `name`, in kebab-case. Gli altri campi sono descrittivi.
- Ogni skill vive in una cartella con un `SKILL.md`, e il nome della cartella coincide con il campo `name`.
- Una skill che l'agente può invocare da sola occupa contesto a ogni turno, con nome e descrizione. Scrivete descrizioni brevi e precise.
- Il plugin non contiene segreti. Non aggiungete chiavi o token nei file di configurazione.
