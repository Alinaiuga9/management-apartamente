import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdaugaChirias({ adaugaChirias }) {
  const [nume, setNume] = useState('');
  const [ap, setAp] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    if (!nume || !ap) {
      alert('Te rugăm să completezi toate câmpurile!');
      return;
    }

    adaugaChirias({
      nume,
      ap,
      status: 'Activ',
    });

    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg border-t-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Adaugă un chiriaș nou</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Nume complet</label>
          <input
            value={nume}
            onChange={(e) => setNume(e.target.value)}
            type="text"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Număr apartament</label>
          <input
            value={ap}
            onChange={(e) => setAp(e.target.value)}
            type="text"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between items-center mt-8">
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            &larr; Înapoi
          </Link>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Salvează
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdaugaChirias;
