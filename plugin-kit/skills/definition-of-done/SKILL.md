---
name: definition-of-done
description: Checklist di fine attività per le modifiche al Portale Ferie. Usatela prima di dichiarare chiusa una modifica, o quando qualcuno chiede se il lavoro è pronto.
---

# Definition of Done

Usate questa checklist prima di dichiarare chiusa una modifica. Ogni voce va verificata con evidenza: l'output di un comando, non l'impressione che sia tutto a posto.

## Checklist

- [ ] Il comportamento nuovo ha un test scritto prima del codice, e il test ha visto fallire (vedi la regola `test-prima`).
- [ ] `npm test` in `web/` termina senza test falliti. Riportate l'ultima riga del risultato.
- [ ] `dotnet test api.Tests/` termina senza test falliti. Se non l'avete eseguito, scrivetelo esplicitamente con il motivo.
- [ ] La modifica non cambia la regola dei giorni lavorativi senza aver aggiornato sia l'API sia il front-end.
- [ ] Nessun segreto, dato reale o chiave è finito nel diff.
- [ ] Se la modifica tocca il dominio ferie, `knowledge/` è stato aggiornato o è stato proposto un aggiornamento.

## Da completare in aula

Le voci seguenti le definirà il gruppo durante il laboratorio. Lasciatele vuote fino ad allora.

- [ ] (voce 1 da definire)
- [ ] (voce 2 da definire)
