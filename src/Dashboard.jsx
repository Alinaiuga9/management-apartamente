import { Link } from 'react-router-dom';

function Dashboard({ chiriasi }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-900 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Management Apartamente</h1>
        <div className="flex space-x-4">
          <button className="hover:text-blue-300">Setări</button>
          <button className="hover:text-blue-300">Profil</button>
        </div>
      </nav>

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-500">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">a. Chiriași - acte</h2>
            {chiriasi.map((c) => (
              <div key={c.id} className="bg-gray-50 p-3 rounded border border-gray-200 mb-2">
                <p className="font-medium text-gray-800">{c.nume} - Ap. {c.ap}</p>
                <p className="text-sm text-gray-500">Status: {c.status}</p>
              </div>
            ))}
            <Link to="/adauga-chirias" className="block text-center w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              + Adaugă Chiriaș
            </Link>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">b. Gestiune Facturi</h2>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 mb-2">
              <p className="font-medium text-gray-800">Factură curentă</p>
              <p className="text-sm text-red-500 font-bold">Total: 0 RON</p>
            </div>
            <Link to="/adauga-factura" className="block text-center w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              + Adaugă Factură
            </Link>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-orange-500">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">c. Mentenanță</h2>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 mb-2">
              <p className="font-medium text-gray-800">Fără probleme raportate</p>
            </div>
            <Link to="/raporteaza-problema" className="block text-center w-full mt-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
              + Raportează Problemă
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;