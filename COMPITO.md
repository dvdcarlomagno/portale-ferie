# Compito del laboratorio 2

La feature "motivazione obbligatoria oltre 5 giorni lavorativi" è implementata in web e in API, ma non ha test.

- Scrivete i test Vitest per il form: con più di 5 giorni lavorativi il campo motivazione è obbligatorio, con 5 o meno no.
- Scrivete i test xUnit per l'API: una richiesta di oltre 5 giorni senza motivazione riceve 400, con motivazione riceve 201.
- Verificate che i test falliscano se rimuovete la regola, poi ripristinatela.

Al termine eseguite `npm test` in `web/` e `dotnet test api.Tests/`, e annotate il risultato.
