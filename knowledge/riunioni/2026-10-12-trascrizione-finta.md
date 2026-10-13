# Riunione di refinement: Portale Ferie (trascrizione finta)

**Data:** 12 ottobre 2026, durata circa 10 minuti
**Partecipanti:** PO, Dev 1, Dev 2
**Nota:** trascrizione fittizia, scritta per il corso. Nomi e contenuti sono inventati.

---

**PO:** Ok, partiamo. Ieri abbiamo visto il primo giro di richieste in staging e la cosa che ci ha colpito è che la gente manda periodi lunghi senza spiegare niente. Due settimane di ferie e nessuna nota. Chi approva non sa se è una vacanza o un'emergenza.

**Dev 1:** Quindi vuoi rendere obbligatoria la motivazione?

**PO:** Sì, ma solo sopra una soglia. Le richieste di due o tre giorni non le vogliamo appesantire. La soglia che ho in mente è più di cinque giorni lavorativi. Quindi se una richiesta supera cinque giorni lavorativi, il campo motivazione diventa obbligatorio.

**Dev 2:** Giorni lavorativi nel senso della nostra funzione, quindi senza sabato, domenica e festività?

**PO:** Esatto. Non contiamo i giorni di calendario. Se una persona chiede da lunedì a domenica, sono cinque giorni lavorativi, non sette. Per questo serve il conteggio che abbiamo già nell'API.

**Dev 1:** Ok. E la motivazione è un campo nuovo, o usiamo le note che ci sono già?

**PO:** Un campo nuovo. Le note sono facoltative e le usano per cose diverse. La motivazione la vogliamo separata, così chi approva la legge subito.

**Dev 2:** Il messaggio di errore lo scriviamo noi o arriva dal documento delle regole?

**PO:** Lo scriviamo noi, per ora. Basta che dica chiaramente che la motivazione serve sopra i cinque giorni lavorativi. Non mi serve un testo legale.

**Dev 1:** Una domanda sulla festività di Santo Stefano. Nel nostro elenco c'è il 26 dicembre 2026, che cade di sabato. Il conteggio la esclude comunque, giusto?

**Dev 2:** Sì, la esclude perché è sabato. Se la festività cade in un giorno feriale, la esclude con l'elenco. Però la lista è fissa per il 2026: nel 2027 bisogna aggiornarla. Lo scriviamo nella memoria?

**PO:** Scrivetelo nella memoria, ma non è urgente. Lo facciamo a gennaio.

**Dev 1:** Ok, annoto.

**PO:** Poi c'è una cosa di cui vi parlo per sentire cosa ne pensate, senza impegno. Qualche responsabile mi ha chiesto se i permessi si possano chiedere a mezze giornate. Tipo uscire alle 13. Ci ho pensato, ma non so ancora se il campo serve davvero o se è una complicazione inutile.

**Dev 2:** Dal punto di vista tecnico sarebbe un campo in più e un calcolo diverso. Non sarebbe un giorno intero ma mezzo, e il conteggio dovrebbe gestirlo. Non è difficile, ma va deciso prima.

**Dev 1:** Io non lo farei adesso. Abbiamo una sola richiesta del genere. Prima chiederei alle persone che approvano cosa fanno oggi.

**PO:** D'accordo. Questa la lasciamo come ipotesi. Non la mettiamo nel prossimo sprint. Se qualcuno ne parla, la scrive nella memoria come ipotesi e non come regola.

**Dev 2:** Ok, la segno come idea non confermata.

**PO:** Riassumo. Primo: motivazione obbligatoria sopra cinque giorni lavorativi, campo separato dalle note, messaggio di errore nostro. Secondo: il conteggio è quello dell'API, esclude weekend e festività. Terzo: la lista delle festività va aggiornata per il 2027, a gennaio. Quarto: le mezze giornate restano un'ipotesi, da verificare con chi approva.

**Dev 1:** Mi sembra chiaro. Chi fa la modifica sul form?

**PO:** Dev 2 parte dal form e dall'API. Dev 1 controlla i test. Ci vediamo giovedì per vedere come va.

**Dev 2:** Perfetto.

**PO:** Grazie a tutti, chiudiamo qui.

---

**Decisioni:**
1. Motivazione obbligatoria per richieste oltre 5 giorni lavorativi (campo separato dalle note).
2. Il conteggio dei giorni lavorativi è quello dell'API.
3. Aggiornare le festività per il 2027 a gennaio.

**Ipotesi non confermate:**
- Richieste di permesso a mezze giornate: idea, nessuno ha ancora chiesto le regole a chi decide sui permessi.
