namespace FerieApi.Dominio;

/// <summary>Richiesta di ferie o permesso già registrata.</summary>
public sealed record Richiesta(
    string Id,
    string Dipendente,
    DateOnly Dal,
    DateOnly Al,
    string Tipo,
    string? Note,
    string? Motivazione = null);

/// <summary>Dati inviati dal form per creare una nuova richiesta.</summary>
public sealed record NuovaRichiesta(
    string Dipendente,
    DateOnly Dal,
    DateOnly Al,
    string Tipo,
    string? Note,
    string? Motivazione = null);
