import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function GestionareMentenanta() {
  const [cereri, setCereri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eroare, setEroare] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/api/mentenanta')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCereri(data);
        } else {
          setEroare('Datele de la server nu sunt în formatul așteptat.');
        }
      })
      .catch(() => setEroare('Nu am putut încărca cererile de întreținere.'))
      .finally(() => setLoading(false));
  }, []);

  const totalDeschise = cereri.filter((item) => item.status === 'Deschis' || item.status === 'Neînceput').length;
  const totalInProgres = cereri.filter((item) => item.status === 'În progres').length;
  const totalFinalizate = cereri.filter((item) => item.status === 'Finalizat' || item.status === 'Închis').length;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Cereri întreținere</p>
                <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Gestionați rapid toate solicitările de întreținere
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  Vizualizați statusul solicitărilor, prioritizați intervențiile și creați rapid cereri noi.
                </p>
              </div>
              <Link
                to="/raporteaza-problema"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-700"
              >
                + Adaugă cerere întreținere
              </Link>
            </div>
          </div>

          {eroare && (
            <div className="mb-6 rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
              {eroare}
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Lista cererilor</h2>
                  <p className="mt-2 text-sm text-slate-500">Urmărește ce trebuie rezolvat și ce este deja finalizat.</p>
                </div>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  {loading ? 'Se încarcă…' : `${cereri.length} cereri`}
                </span>
              </div>

              {loading ? (
                <div className="mt-10 rounded-[28px] border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-slate-500">
                  Se încarcă cererile...
                </div>
              ) : cereri.length === 0 ? (
                <div className="mt-10 rounded-[28px] border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
                  Nu există cereri de întreținere.
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  {cereri.map((cerere) => (
                    <div
                      key={cerere.id}
                      className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">{cerere.prioritate || 'Normal'}</p>
                          <h3 className="mt-2 text-lg font-semibold text-slate-900">{cerere.subiect || 'Solicitare întreținere'}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{cerere.descriere || 'Descrierea problemei nu este disponibilă.'}</p>
                        </div>
                        <div className="space-y-2 text-right text-sm text-slate-600">
                          <p>Status: <span className="font-semibold text-slate-900">{cerere.status || 'Deschis'}</span></p>
                          <p>Data: <span className="font-semibold text-slate-900">{cerere.data || '—'}</span></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-semibold text-slate-900">Rezumat rapid</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl bg-slate-50 p-4 text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Deschise</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">{loading ? '–' : totalDeschise}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4 text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">În progres</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">{loading ? '–' : totalInProgres}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4 text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Finalizate</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">{loading ? '–' : totalFinalizate}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-semibold text-slate-900">Sfat rapid</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Folosește butonul de adăugare pentru a introduce cereri noi imediat ce sunt identificate problemele. Prioritizează intervențiile critice pentru un management eficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionareMentenanta;
