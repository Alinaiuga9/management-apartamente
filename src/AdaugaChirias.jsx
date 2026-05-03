import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdaugaChirias() {
  const [nume, setNume] = useState('');
  const [ap, setAp] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [eroare, setEroare] = useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!nume || !ap) {
      setEroare('Te rugăm să completezi numele și numărul apartamentului!');
      return;
    }

    try {
      // Am eliminat parantezele de markdown, lăsând doar linkul curat
      const response = await fetch('http://localhost:5001/api/chiriasi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Am asigurat potrivirea datelor cu noua ta bază de date SQLite
        body: JSON.stringify({ 
          nume: nume, 
          email: email, 
          telefon: telefon, 
          apartament_numar: ap 
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Dacă serverul zice "success: true", ne întoarcem la pagina principală
        navigate('/');
      } else {
        setEroare('Eroare la salvare: ' + (result.error || 'Încearcă din nou.'));
      }
    } catch (err) {
      setEroare('Eroare conexiune: Nu se poate contacta serverul.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg border-t-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Adaugă un chiriaș nou</h2>

        {eroare && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {eroare}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Nume complet *</label>
          <input
            value={nume}
            onChange={(e) => setNume(e.target.value)}
            type="text"
            placeholder="ex: Ion Popescu"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Număr apartament *</label>
          <input
            value={ap}
            onChange={(e) => setAp(e.target.value)}
            type="text"
            placeholder="ex: 12"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="ex: ion@email.com"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Telefon</label>
          <input
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            type="tel"
            placeholder="ex: 0722123456"
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