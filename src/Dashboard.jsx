import { Link } from 'react-router-dom';
import { useState } from 'react';

function Dashboard({ chiriasi = [] }) {
  const [meniuDeschis, setMeniuDeschis] = useState(false);

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white font-sans relative">
      
      {/* NAVBAR */}
      <nav className="bg-[#1f242d] p-4 shadow-md flex justify-between items-center border-b border-gray-700 relative z-20">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setMeniuDeschis(!meniuDeschis)}
            className="p-2 border border-gray-500 rounded hover:bg-gray-700 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {meniuDeschis ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="font-bold text-[#1abc9c]">NCL</div>
            <div className="text-sm font-bold">New Concept Living</div>
          </div>
        </div>

        <Link to="/contact">
          <button className="bg-[#1abc9c] hover:bg-[#16a085] text-white px-4 py-2 rounded font-medium transition">
            Contactează-ne
          </button>
        </Link>
      </nav>

      {/* MENIUL LATERAL */}
      {meniuDeschis && (
        <div className="absolute top-[73px] left-0 w-64 bg-[#1f242d] border-r border-b border-gray-700 shadow-2xl z-10 p-4">
          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-[#1abc9c] block">Home</Link></li>
            <li><Link to="/contact" className="hover:text-[#1abc9c] block">Contact</Link></li>
            <li><Link to="/facturi" className="hover:text-[#1abc9c] block">Invoice Management</Link></li>
            <li><Link to="/mentenanta" className="hover:text-[#1abc9c] block">Maintenance Requests</Link></li>
          </ul>
        </div>
      )}

      {/* CONȚINUTUL PAGINII */}
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Sectiunea Chiriași */}
          <div className="bg-[#242424] p-4 rounded-lg border-t-4 border-[#1abc9c]">
            <h2 className="text-lg font-semibold mb-4">Chiriași - acte</h2>
            
            {/* Lista automată cu designul nou */}
            {chiriasi.map((c) => (
              <div key={c.id} className="bg-[#1c1c1c] p-3 rounded border border-gray-700 mb-2">
                <p className="font-bold">{c.nume} - Ap. {c.ap}</p>
                <p className="text-sm">Status: {c.status}</p>
              </div>
            ))}

            <Link to="/adauga-chirias" className="block text-center mt-4 bg-[#1abc9c] hover:bg-[#16a085] py-2 rounded transition">
              + Adaugă Chiriaș
            </Link>
          </div>

          {/* Sectiunea Facturi */}
          <div className="bg-[#242424] p-4 rounded-lg border-t-4 border-[#1abc9c]">
            <h2 className="text-lg font-semibold mb-4">Gestiune Facturi</h2>
            <div className="bg-[#1c1c1c] p-3 rounded border border-gray-700 mb-2">
              <p>Total: 0 RON</p>
            </div>
            <Link to="/adauga-factura" className="block text-center mt-4 bg-[#1abc9c] hover:bg-[#16a085] py-2 rounded transition">
              + Adaugă Factură
            </Link>
          </div>

          {/* Sectiunea Mentenanță */}
          <div className="bg-[#242424] p-4 rounded-lg border-t-4 border-[#1abc9c]">
            <h2 className="text-lg font-semibold mb-4">Mentenanță</h2>
            <div className="bg-[#1c1c1c] p-3 rounded border border-gray-700 mb-2">
              <p>Fără probleme raportate</p>
            </div>
            <Link to="/raporteaza-problema" className="block text-center mt-4 bg-[#1abc9c] hover:bg-[#16a085] py-2 rounded transition">
              + Raportează Problemă
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;