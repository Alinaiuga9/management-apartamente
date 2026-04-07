import { Link } from 'react-router-dom';

function RaporteazaProblema() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg border-t-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Raportează o defecțiune</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Descriere problemă</label>
          <textarea rows="4" className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-500"></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Urgență</label>
          <select className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-500">
            <option>Scăzută</option>
            <option>Medie</option>
            <option>Critică</option>
          </select>
        </div>
        <div className="flex justify-between items-center mt-8">
          <Link to="/" className="text-orange-600 font-medium">&larr; Înapoi</Link>
          <button onClick={() => alert("Sesizare trimisă!")} className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Trimite</button>
        </div>
      </div>
    </div>
  );
}

export default RaporteazaProblema;