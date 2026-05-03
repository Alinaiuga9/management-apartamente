import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from './assets/logo.png';

function Dashboard() {
  const [meniuDeschis, setMeniuDeschis] = useState(false);
  const [chiriasi, setChiriasi] = useState([]);
  const [eroare, setEroare] = useState(null);

  // Încarcă chiriașii din server
  useEffect(() => {
    fetch('http://localhost:5001/api/chiriasi')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setChiriasi(data);
        else setEroare('Format date invalid de la server.');
      })
      // Am modificat linia de mai jos ca să ne arate eroarea REALĂ, nu textul ascuns
      .catch((err) => setEroare('Eroare reală: ' + err.message));
  }, []);

  const features = [
    {
      titlu: 'Organized tenant documents',
      text: 'Store and access leases, IDs, and files securely in one place.',
      icon: '📁',
    },
    {
      titlu: 'Streamlined rent invoicing',
      text: 'Automate invoice creation, delivery, and payment tracking.',
      icon: '💳',
    },
    {
      titlu: 'Maintenance made simple',
      text: 'Track repair requests and keep tenants informed from start to finish.',
      icon: '🛠️',
    },
    {
      titlu: 'Clear tenant communication',
      text: 'Manage updates, notices, and conversations in a clean workflow.',
      icon: '💬',
    },
  ];

  const plans = [
    {
      nume: 'STARTER',
      pret: '$19/mo',
      beneficii: ['Tenant document uploads', 'Basic invoice tracking', 'Maintenance tickets'],
    },
    {
      nume: 'GROWTH',
      pret: '$29/mo',
      beneficii: ['Automated rent reminders', 'Recurring invoices', 'Priority support'],
    },
    {
      nume: 'PRO',
      pret: '$49/mo',
      beneficii: ['Custom document templates', 'Bulk invoice generation', 'Advanced reports'],
    },
    {
      nume: 'ENTERPRISE',
      pret: '$79/mo',
      beneficii: ['Custom integrations', 'Dedicated account manager', 'Full support'],
    },
  ];

  const testimoniale = [
    {
      nume: 'Jamie Ellis',
      rol: 'Operations Lead',
      mesaj: 'Lease management is simple and efficient.',
    },
    {
      nume: 'Robin Avery',
      rol: 'Leasing Manager',
      mesaj: 'Tracking invoices is quick and reliable.',
    },
    {
      nume: 'Taylor Reed',
      rol: 'Property Coordinator',
      mesaj: 'Maintenance issues are resolved promptly.',
    },
    {
      nume: 'Casey Jordan',
      rol: 'Portfolio Manager',
      mesaj: 'We save valuable time every week.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#1f1f1f]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
              <img src={logo} alt="Logo" className="h-5 w-5 object-contain" />
            </button>

            <button
              onClick={() => setMeniuDeschis(!meniuDeschis)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="flex flex-col gap-1">
                <span className="block h-[2px] w-4 rounded-full bg-white"></span>
                <span className="block h-[2px] w-4 rounded-full bg-white"></span>
                <span className="block h-[2px] w-4 rounded-full bg-white"></span>
              </div>
            </button>

            <div>
              <p className="text-sm font-semibold leading-4 text-white">New Concept</p>
              <p className="text-xs text-gray-400">Living</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 transition"
          >
            Contactează-ne
          </Link>
        </div>

        {meniuDeschis && (
          <div className="border-t border-white/10 bg-[#232323]">
            <div className="mx-auto grid max-w-7xl gap-3 px-6 py-4 md:grid-cols-5">
              <Link to="/" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium">
                Home
              </Link>
              <Link to="/contact" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10 transition">
                Contact
              </Link>
              <Link to="/facturi" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10 transition">
                Invoice Management
              </Link>
              <Link to="/mentenanta" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10 transition">
                Maintenance Requests
              </Link>
              <Link to="/documente" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10 transition">
                Tenant Documents
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-[#1f1f1f]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:px-8 lg:grid-cols-2 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-400">Smart rental platform</p>
            <h1 className="text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Effortless rental management, simplified
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Organize tenant documents, automate invoices, resolve maintenance—all in one secure dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/adauga-chirias"
                className="rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-medium text-white shadow-lg hover:bg-blue-700 transition"
              >
                Adaugă chiriaș
              </Link>
              <button className="rounded-2xl border border-white/30 px-7 py-3.5 text-base font-medium text-white hover:bg-white hover:text-black transition">
                See features
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="[images.unsplash.com](https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80)"
              alt="Interior apartament"
              className="h-[320px] w-full max-w-xl rounded-[32px] object-cover shadow-2xl sm:h-[420px] lg:h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#f7f7f5] text-[#202020]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">
              Effortless rental management tools
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              All-in-one platform for documents, payments, and maintenance.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,0.08)] sm:p-10"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-6 text-2xl font-semibold">{item.titlu}</h3>
                <p className="mt-4 text-lg leading-8 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⇣ NOUA SECTIUNE DE CHIRIASI ⇣ */}
      <section className="bg-[#f7f7f5] text-[#202020]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-gray-500">
            Current Tenants
          </p>

          <h2 className="mt-4 text-center text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">
            Chiriași înregistrați în sistem
          </h2>

          {eroare && (
            <p className="mt-6 text-center text-red-600 text-lg">{eroare}</p>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {chiriasi.length > 0 ? (
              chiriasi.map((ch) => (
                <div
                  key={ch.id}
                  className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{ch.nume}</h3>
                  <p className="text-gray-600 text-sm">Apartament: {ch.apartament_numar || '–'}</p>
                  <p className="text-gray-600 text-sm">Telefon: {ch.telefon || '—'}</p>
                  <p className="text-gray-600 text-sm">Email: {ch.email || '—'}</p>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-md mt-8">
                Nu există chiriași înregistrați momentan.
              </p>
            )}
          </div>
        </div>
      </section>
      {/* ⇡ SFÂRȘIT SECTIUNE DE CHIRIASI ⇡ */}

      {/* Restul secțiunilor */}
      <section className="bg-[#1f1f1f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-8">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Reliability</p>
          <div className="mt-8 text-6xl font-light sm:text-7xl">99.9%</div>
          <p className="mt-6 text-xl text-gray-300 sm:text-2xl">System uptime</p>
        </div>
      </section>

      {/* Testimoniale, footer etc. */}
      {/* ... păstrează restul codului tău identic ... */}
    </div>
  );
}

export default Dashboard;
