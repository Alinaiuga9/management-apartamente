import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './assets/logo.png';

function Contact() {
  const [meniuDeschis, setMeniuDeschis] = useState(false);
  const [prenume, setPrenume] = useState('');
  const [nume, setNume] = useState('');
  const [email, setEmail] = useState('');
  const [subiect, setSubiect] = useState('');
  const [mesaj, setMesaj] = useState('');

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailEsteValid = email === '' || emailValid.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailValid.test(email)) {
      return;
    }

    alert('Mesaj trimis cu succes!');
    setPrenume('');
    setNume('');
    setEmail('');
    setSubiect('');
    setMesaj('');
  };

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
              <Link to="/" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10 transition">
                Home
              </Link>
              <Link to="/contact" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium">
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-400">
              Contact
            </p>

            <h1 className="text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl">
              Support for tenants and owners
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Complete the form and our team will get back to you regarding apartment management,
              invoices, tenant documents, or maintenance support.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Email</p>
                <p className="mt-2 text-lg text-white">contact@newconceptliving.com</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="mt-2 text-lg text-white">+40 712 345 678</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Program</p>
                <p className="mt-2 text-lg text-white">Mon - Fri / 09:00 - 18:00</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Address</p>
                <p className="mt-2 text-lg text-white">București, România</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#252525] p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold text-white">Send us a message</h2>
            <p className="mt-3 text-gray-400">
              We usually respond within one business day.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-300">First Name</label>
                  <input
                    type="text"
                    value={prenume}
                    onChange={(e) => setPrenume(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                    placeholder="Maria"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">Last Name</label>
                  <input
                    type="text"
                    value={nume}
                    onChange={(e) => setNume(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                    placeholder="Popescu"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 text-white outline-none placeholder:text-gray-500 ${
                    emailEsteValid
                      ? 'border-white/10 bg-white/5 focus:border-blue-500'
                      : 'border-red-500 bg-red-500/10 focus:border-red-500'
                  }`}
                  placeholder="maria.ana@email.com"
                />
                {!emailEsteValid && (
                  <p className="mt-2 text-sm font-medium text-red-400">
                    ☹ Email invalid
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">Subject</label>
                <input
                  type="text"
                  value={subiect}
                  onChange={(e) => setSubiect(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">Message</label>
                <textarea
                  rows="5"
                  value={mesaj}
                  onChange={(e) => setMesaj(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-base font-medium text-white hover:bg-blue-700 transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] text-[#202020]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-light sm:text-5xl lg:text-6xl">
              Rental support, simplified
            </h2>
            <p className="mt-5 text-lg text-gray-600">
              Here are some quick answers to the most common questions.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">How do I upload documents?</h3>
              <p className="mt-3 text-gray-600">
                You can upload lease agreements, IDs, and tenant files directly from your dashboard.
              </p>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">What payment methods can I use?</h3>
              <p className="mt-3 text-gray-600">
                The platform supports standard invoice tracking and digital payment workflows.
              </p>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">How do I report a maintenance issue?</h3>
              <p className="mt-3 text-gray-600">
                Maintenance requests can be submitted through the dedicated section and tracked easily.
              </p>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">Is my tenant information secure?</h3>
              <p className="mt-3 text-gray-600">
                Yes, the platform is designed to keep documents and tenant data organized and protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] text-[#202020] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-md">
              <img
                src="[images.unsplash.com](https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80)"
                alt="Consultant"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Customer support</h3>
                <p className="mt-3 text-gray-600">Friendly assistance for tenants and property managers.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] bg-white shadow-md">
              <img
                src="[images.unsplash.com](https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80)"
                alt="Team"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Professional team</h3>
                <p className="mt-3 text-gray-600">A dedicated team ready to help with your requests.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] bg-white shadow-md">
              <img
                src="[images.unsplash.com](https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80)"
                alt="Workspace"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Fast communication</h3>
                <p className="mt-3 text-gray-600">Simple communication channels for fast and clear updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#1f1f1f]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
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

export default Contact;
