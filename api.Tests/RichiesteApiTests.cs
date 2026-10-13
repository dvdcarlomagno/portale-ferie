using System.Net;
using System.Net.Http.Json;
using FerieApi.Dominio;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace FerieApi.Tests;

/// <summary>
/// Test di integrazione: l'API viene avviata in memoria con WebApplicationFactory
/// e interrogata con HTTP reale (nessun mock dell'archivio).
/// </summary>
public sealed class RichiesteApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public RichiesteApiTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task Giorni_lavorativi_di_una_settimana_con_fine_domenica_sono_cinque()
    {
        var risposta = await _client.GetFromJsonAsync<ConteggioDto>(
            "/api/giorni-lavorativi?dal=2026-10-05&al=2026-10-11");

        Assert.Equal(5, risposta!.Giorni);
    }

    [Fact]
    public async Task Giorni_lavorativi_in_un_intervallo_di_solo_fine_settimana_sono_zero()
    {
        var risposta = await _client.GetFromJsonAsync<ConteggioDto>(
            "/api/giorni-lavorativi?dal=2026-10-10&al=2026-10-11");

        Assert.Equal(0, risposta!.Giorni);
    }

    [Fact]
    public async Task Richiesta_creata_compare_nell_elenco()
    {
        var nuova = new NuovaRichiesta("Mario Rossi", new DateOnly(2026, 10, 19), new DateOnly(2026, 10, 20), "ferie", "Ponte");

        var creazione = await _client.PostAsJsonAsync("/api/richieste", nuova);
        var elenco = await _client.GetFromJsonAsync<List<Richiesta>>("/api/richieste");

        Assert.Equal(HttpStatusCode.Created, creazione.StatusCode);
        Assert.Contains(elenco!, r => r.Dipendente == "Mario Rossi" && r.Tipo == "ferie");
    }

    [Fact]
    public async Task Richiesta_con_fine_prima_dell_inizio_viene_rifiutata()
    {
        var sbagliata = new NuovaRichiesta("Giulia Bianchi", new DateOnly(2026, 10, 20), new DateOnly(2026, 10, 19), "permesso", null);

        var risposta = await _client.PostAsJsonAsync("/api/richieste", sbagliata);

        Assert.Equal(HttpStatusCode.BadRequest, risposta.StatusCode);
    }
}

public sealed record ConteggioDto(int Giorni);
