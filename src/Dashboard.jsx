import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './assets/logo.png';

function Dashboard() {
  const [meniuDeschis, setMeniuDeschis] = useState(false);

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
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#1f1f1f]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-5 w-5 object-contain"
              />
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

      <section className="bg-[#1f1f1f]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:px-8 lg:grid-cols-2 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-400">
              Smart rental platform
            </p>

            <h1 className="text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Effortless rental management, simplified
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Easily organize tenant documents, automate invoices, and resolve maintenance—all in one
              secure dashboard. Stay on top of every detail with streamlined tools for property managers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-200 sm:text-base">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">✦ Tenant documents</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">↺ Invoice management</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">♡ Maintenance tracking</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-medium text-white shadow-lg hover:bg-blue-700 transition">
                Start now
              </button>
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

      <section className="bg-[#1f1f1f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-8">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Reliability</p>
          <div className="mt-8 text-6xl font-light sm:text-7xl md:text-8xl lg:text-9xl">99.9%</div>
          <p className="mt-6 text-xl text-gray-300 sm:text-2xl">System uptime</p>
        </div>
      </section>

      <section className="bg-[#f7f7f5] text-[#202020]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-gray-500">Plans & Pricing</p>

          <h2 className="mx-auto mt-4 max-w-6xl text-center text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">
            Flexible plans for every business
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-gray-600 sm:text-xl">
            Select a plan that matches your property management needs. All options include tools for
            tenants, invoicing, and maintenance tracking.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex h-full flex-col rounded-[28px] border border-gray-200 bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,0.08)]"
              >
                <p className="text-center text-sm font-semibold tracking-[0.2em] text-gray-500">{plan.nume}</p>

                <h3 className="mt-6 text-center text-5xl font-light">{plan.pret}</h3>

                <div className="mt-8 flex justify-center">
                  <button className="rounded-2xl bg-blue-600 px-8 py-3.5 text-base font-medium text-white hover:bg-blue-700 transition">
                    Try now
                  </button>
                </div>

                <div className="my-8 border-t border-gray-200"></div>

                <div className="space-y-4">
                  {plan.beneficii.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 text-base text-gray-700">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        ✓
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] text-[#202020]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-gray-500">
            Managed apartment portfolio
          </p>

          <h2 className="mt-4 text-center text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">
            Explore our property gallery
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <img
              src="[images.unsplash.com](https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80)"
              alt="Apartament modern"
              className="h-72 w-full rounded-[28px] object-cover shadow-md"
            />
            <img
              src="[images.unsplash.com](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80)"
              alt="Aplicatie mobila"
              className="h-72 w-full rounded-[28px] object-cover shadow-md"
            />
            <img
              src="[images.unsplash.com](https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80)"
              alt="Unelte mentenanta"
              className="h-72 w-full rounded-[28px] object-cover shadow-md"
            />
            <img
              src="[images.unsplash.com](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80)"
              alt="Dashboard laptop"
              className="h-72 w-full rounded-[28px] object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-gray-400">What our clients say</p>

          <h2 className="mt-4 text-center text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">
            Efficiency trusted by professionals
          </h2>

          <p className="mt-6 text-center text-lg text-gray-400 sm:text-xl">
            Discover how teams simplify rental tasks
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimoniale.map((item, index) => (
              <div key={index} className="rounded-[28px] bg-white p-8 text-[#202020] shadow-[0_10px_35px_rgba(0,0,0,0.12)] sm:p-10">
                <p className="text-2xl leading-tight sm:text-3xl">"{item.mesaj}"</p>
                <div className="mt-10">
                  <p className="text-2xl font-semibold">{item.nume}</p>
                  <p className="mt-2 text-lg text-gray-500">{item.rol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#1f1f1f]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="New Concept Living Logo"
                className="h-6 w-6 object-contain"
              />
              <div>
                <p className="text-xl font-semibold">New Concept Living</p>
                <p className="text-sm text-gray-400">Rental management platform</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">Pages</p>
            <div className="space-y-3 text-gray-300">
              <p>Home</p>
              <p>Contact</p>
              <p>Invoice Management</p>
              <p>Maintenance Requests</p>
              <p>Tenant Documents</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">Subscribe</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none"
              />
              <button className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
