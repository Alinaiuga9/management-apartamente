import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white p-8">
      {/* Buton de întoarcere */}
      <Link to="/" className="text-[#1abc9c] hover:underline mb-8 inline-block">
        ← Înapoi la Dashboard
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-[#1abc9c]">Contactează-ne</h1>
      
      <div className="bg-[#242424] p-6 rounded-lg border border-gray-700 max-w-lg">
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Nume Complet</label>
            <input type="text" className="w-full p-2 rounded bg-[#1c1c1c] border border-gray-600 focus:border-[#1abc9c] outline-none" placeholder="Ex: Ion Popescu" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input type="email" className="w-full p-2 rounded bg-[#1c1c1c] border border-gray-600 focus:border-[#1abc9c] outline-none" placeholder="nume@email.com" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Mesaj</label>
            <textarea className="w-full p-2 rounded bg-[#1c1c1c] border border-gray-600 focus:border-[#1abc9c] outline-none h-32" placeholder="Cu ce te putem ajuta?"></textarea>
          </div>
          <button type="button" className="w-full bg-[#1abc9c] py-2 rounded font-bold hover:bg-[#16a085] transition">
            Trimite Mesajul
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;