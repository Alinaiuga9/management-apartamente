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
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
        <Link to="/" className="flex items-center">
          <svg width="40" height="40" viewBox="0 0 40 40" rx="10" fill="none" className="flex-shrink-0">
            <rect width="40" height="40" rx="10" fill="#FEF08A"/>
            <path d="M12 22h16M12 22v8h4v-4h8v4h4v-8M20 12l-8 6v4h16v-4l-8-6Z" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </Link>

        <motion.button
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-6 hidden md:inline-flex items-center justify-center bg-transparent border-none"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" rx="10" fill="none" className="flex-shrink-0">
            <rect width="40" height="40" rx="10" fill="#FEF08A"/>
            <path d="M28 20.92v2.4a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 10.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L14.09 11.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 28 20.92z" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(20,22) scale(0.7) translate(-20,-20)"/>
          </svg>
        </motion.button>

        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-700 ml-auto">
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

        <motion.button
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex md:hidden items-center justify-center bg-transparent border-none"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" rx="10" fill="none" className="flex-shrink-0">
            <rect width="40" height="40" rx="10" fill="#FEF08A"/>
            <path d="M28 20.92v2.4a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 10.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L14.09 11.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 28 20.92z" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(20,22) scale(0.7) translate(-20,-20)"/>
          </svg>
        </motion.button>

        <motion.button
          onClick={() => setMeniuDeschis(!meniuDeschis)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-amber-900 shadow-md transition duration-200 hover:bg-yellow-200 md:hidden"
          aria-label="Meniu mobil"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </motion.button>
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