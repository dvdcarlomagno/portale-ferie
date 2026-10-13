namespace FerieApi.Dominio;

/// <summary>
/// Conteggio dei giorni lavorativi: esclude sabato, domenica e le festività nazionali
/// (elenco fisso per il 2026). Il conteggio include sia la data di inizio sia quella di fine.
/// </summary>
public static class GiorniLavorativi
{
    public static readonly IReadOnlySet<DateOnly> Festivita = new HashSet<DateOnly>
    {
        new(2026, 1, 1),   // Capodanno
        new(2026, 1, 6),   // Epifania
        new(2026, 4, 5),   // Pasqua
        new(2026, 4, 6),   // Lunedì dell'Angelo
        new(2026, 4, 25),  // Festa della Liberazione
        new(2026, 5, 1),   // Festa del lavoro
        new(2026, 6, 2),   // Festa della Repubblica
        new(2026, 8, 15),  // Ferragosto
        new(2026, 11, 1),  // Ognissanti
        new(2026, 12, 8),  // Immacolata Concezione
        new(2026, 12, 25), // Natale
        new(2026, 12, 26), // Santo Stefano
    };

    public static int Conta(DateOnly dal, DateOnly al)
    {
        var giorni = 0;
        for (var giorno = dal; giorno <= al; giorno = giorno.AddDays(1))
        {
            if (EGiornoLavorativo(giorno))
            {
                giorni++;
            }
        }

        return giorni;
    }

    public static bool EGiornoLavorativo(DateOnly giorno)
    {
        if (giorno.DayOfWeek is DayOfWeek.Saturday or DayOfWeek.Sunday)
        {
            return false;
        }

        return !Festivita.Contains(giorno);
    }
}
