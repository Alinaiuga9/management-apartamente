import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Contact from './Contact'; // Importăm noua pagină de Contact
import AdaugaChirias from './AdaugaChirias';
import AdaugaFactura from './AdaugaFactura';
import RaporteazaProblema from './RaporteazaProblema';

function App() {
  // Starea pentru lista de chiriași (folosită în Dashboard)
  const [chiriasi, setChiriasi] = useState([
    { id: 1, nume: 'Ana Popescu', ap: 12, status: 'Activ' }
  ]);

  // Funcție pentru adăugarea unui chiriaș nou
  const adaugaChirias = (nou) => {
    setChiriasi([...chiriasi, { ...nou, id: Date.now() }]);
  };

  return (
    <div className="bg-[#1c1c1c] min-h-screen text-white">
      
      {/* Bara de Status Server (vizibilă pe toate paginile) */}
      <div style={{ padding: '10px', backgroundColor: '#2d3748', textAlign: 'center' }}>
        <strong className="text-white">Status Server: </strong>
        <span style={{ color: '#f6ad55' }}>Nu mă pot conecta la server!</span>
      </div>

      <BrowserRouter>
        <Routes>
          {/* Pagina Principală (Dashboard) */}
          <Route path="/" element={<Dashboard chiriasi={chiriasi} />} />
          
          {/* Pagina de Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Alte pagini din proiectul tău */}
          <Route path="/adauga-chirias" element={<AdaugaChirias adaugaChirias={adaugaChirias} />} />
          <Route path="/adauga-factura" element={<AdaugaFactura />} />
          <Route path="/raporteaza-problema" element={<RaporteazaProblema />} />
          
          {/* Placeholder pentru paginile viitoare din planul tău */}
          <Route path="/facturi" element={<div className="p-10">Pagina Gestiune Facturi</div>} />
          <Route path="/mentenanta" element={<div className="p-10">Pagina Mentenanță</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;