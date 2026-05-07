import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from './AuthContext';

function Navbar() {
  const [meniuDeschis, setMeniuDeschis] = useState(false);
  const navigate = useNavigate();
  const { userRole, logout } = useContext(AuthContext);
  const roleLabel = userRole === 'manager' ? 'Manager' : userRole === 'chirias' ? 'Chiriaș' : null;

  const handleLogout = () => {
    logout();
    setMeniuDeschis(false);
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm border-b border-slate-200 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <div>
            <p className="text-sm font-semibold text-slate-900 leading-tight">New Concept</p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Living</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-700">
          <Link to="/" className="hover:text-slate-900 transition">Acasă</Link>
          <Link to="/contact" className="hover:text-slate-900 transition">Contact</Link>
          <Link to="/facturi" className="hover:text-slate-900 transition">Gestionare Facturi</Link>
          <Link to="/mentenanta" className="hover:text-slate-900 transition">Cereri Întreținere</Link>
          <Link to="/documente" className="hover:text-slate-900 transition">Documente Chiriaș</Link>
          {roleLabel && (
            <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-800">
              {roleLabel}
            </span>
          )}
          {userRole ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition duration-200 hover:bg-slate-50"
            >
              Ieși
            </button>
          ) : (
            <motion.button
              type="button"
              onClick={handleLoginClick}
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-black shadow-md transition duration-200 hover:bg-yellow-500"
            >
              Conectează-te
            </motion.button>
          )}
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
          {userRole ? (
            <button
              onClick={handleLogout}
              className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Ieși
            </button>
          ) : (
            <motion.button
              type="button"
              onClick={() => {
                setMeniuDeschis(false);
                handleLoginClick();
              }}
              whileHover={{ scale: 1.02 }}
              className="mt-4 block w-full rounded-lg bg-yellow-400 px-4 py-3 text-center text-sm font-bold text-black transition duration-200 hover:bg-yellow-500"
            >
              Conectează-te
            </motion.button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;