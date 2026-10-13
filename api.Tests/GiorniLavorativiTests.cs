using FerieApi.Dominio;
using Xunit;

namespace FerieApi.Tests;

/// <summary>Test unitari della regola dei giorni lavorativi, senza HTTP.</summary>
public sealed class GiorniLavorativiTests
{
    [Fact]
    public void Intervallo_con_fine_prima_dell_inizio_conta_zero()
    {
        var conteggio = GiorniLavorativi.Conta(new DateOnly(2026, 10, 12), new DateOnly(2026, 10, 5));

        Assert.Equal(0, conteggio);
    }

    [Fact]
    public void Il_sabato_non_e_un_giorno_lavorativo()
    {
        Assert.False(GiorniLavorativi.EGiornoLavorativo(new DateOnly(2026, 10, 10)));
    }
}
