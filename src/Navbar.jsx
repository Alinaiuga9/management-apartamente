import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [meniuDeschis, setMeniuDeschis] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm border-b border-slate-200 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <div>
            <p className="text-sm font-semibold text-slate-900 leading-tight">New Concept</p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Living</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link to="/" className="hover:text-slate-900 transition">Acasă</Link>
          <Link to="/contact" className="hover:text-slate-900 transition">Contact</Link>
          <Link to="/facturi" className="hover:text-slate-900 transition">Gestionare Facturi</Link>
          <Link to="/mentenanta" className="hover:text-slate-900 transition">Cereri Întreținere</Link>
          <Link to="/documente" className="hover:text-slate-900 transition">Documente Chiriaș</Link>
        </div>

        <button
          onClick={() => setMeniuDeschis(!meniuDeschis)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Meniu mobil"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
      </div>

      {meniuDeschis && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 px-6 py-4">
          <Link
            to="/"
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setMeniuDeschis(false)}
          >
            Acasă
          </Link>
          <Link
            to="/contact"
            className="mt-2 block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setMeniuDeschis(false)}
          >
            Contact
          </Link>
          <Link
            to="/facturi"
            className="mt-2 block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setMeniuDeschis(false)}
          >
            Gestionare Facturi
          </Link>
          <Link
            to="/mentenanta"
            className="mt-2 block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setMeniuDeschis(false)}
          >
            Cereri Întreținere
          </Link>
          <Link
            to="/documente"
            className="mt-2 block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setMeniuDeschis(false)}
          >
            Documente Chiriaș
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;