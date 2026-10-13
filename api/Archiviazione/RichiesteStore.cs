using FerieApi.Dominio;

namespace FerieApi.Archiviazione;

/// <summary>Archivio in memoria delle richieste: si svuota a ogni riavvio dell'API.</summary>
public sealed class RichiesteStore
{
    private readonly List<Richiesta> _richieste = [];
    private readonly object _lock = new();

    public IReadOnlyList<Richiesta> Tutte()
    {
        lock (_lock)
        {
            return _richieste.ToList();
        }
    }

    public Richiesta Aggiungi(NuovaRichiesta nuova)
    {
        var richiesta = new Richiesta(
            Guid.NewGuid().ToString(),
            nuova.Dipendente.Trim(),
            nuova.Dal,
            nuova.Al,
            nuova.Tipo,
            string.IsNullOrWhiteSpace(nuova.Note) ? null : nuova.Note.Trim());

        lock (_lock)
        {
            _richieste.Add(richiesta);
        }

        return richiesta;
    }
}
