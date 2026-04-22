import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdaugaFactura({ adaugaFactura }) {
  const [suma, setSuma] = useState('');
  const [tip, setTip] = useState('Întreținere');
  const navigate = useNavigate();

  const handleSave = () => {
    if (!suma || Number(suma) <= 0) {
      alert('Introdu o sumă validă!');
      return;
    }

    adaugaFactura({
      suma: Number(suma),
      tip,
    });

    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg border-t-4 border-green-500">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Emite factură nouă</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Sumă (RON)</label>
          <input
            type="number"
            value={suma}
            onChange={(e) => setSuma(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Tip utilitate</label>
          <select
            value={tip}
            onChange={(e) => setTip(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500"
          >
            <option>Întreținere</option>
            <option>Chirie</option>
            <option>Electricitate</option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-8">
          <Link to="/" className="text-green-600 font-medium">
            &larr; Înapoi
          </Link>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Emite
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdaugaFactura;
