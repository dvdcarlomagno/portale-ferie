using System.Globalization;
using FerieApi.Archiviazione;
using FerieApi.Dominio;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<RichiesteStore>();

var app = builder.Build();

app.MapGet("/api/richieste", (RichiesteStore store) => Results.Ok(store.Tutte()));

app.MapPost("/api/richieste", (NuovaRichiesta input, RichiesteStore store) =>
{
    if (string.IsNullOrWhiteSpace(input.Dipendente))
        return Results.BadRequest("Il dipendente è obbligatorio.");

    if (input.Al < input.Dal)
        return Results.BadRequest("La data di fine non può precedere quella di inizio.");

    if (input.Tipo is not ("ferie" or "permesso"))
        return Results.BadRequest("Il tipo deve essere 'ferie' o 'permesso'.");

    var creata = store.Aggiungi(input);
    return Results.Created($"/api/richieste/{creata.Id}", creata);
});

app.MapGet("/api/giorni-lavorativi", (string? dal, string? al) =>
{
    const string formato = "yyyy-MM-dd";
    if (!DateOnly.TryParseExact(dal, formato, CultureInfo.InvariantCulture, DateTimeStyles.None, out var inizio)
        || !DateOnly.TryParseExact(al, formato, CultureInfo.InvariantCulture, DateTimeStyles.None, out var fine))
    {
        return Results.BadRequest("I parametri dal e al devono essere date nel formato AAAA-MM-GG.");
    }

    return Results.Ok(new { giorni = GiorniLavorativi.Conta(inizio, fine) });
});

app.Run();

// Esposto per i test di integrazione (WebApplicationFactory<Program>).
public partial class Program { }
