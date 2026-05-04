import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import Dashboard from './Dashboard';
import AdaugaChirias from './AdaugaChirias';
import AdaugaFactura from './AdaugaFactura';
import Contact from './Contact';
import RaporteazaProblema from './RaporteazaProblema';

function App() {
  const [mesajServer, setMesajServer] = useState('Se încarcă...');
  const [chiriasi, setChiriasi] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5001/api/test')
      .then(response => response.json())
      .then(data => setMesajServer(data.mesaj))
      .catch(error => setMesajServer("Nu mă pot conecta la server!"));

    
    fetch('http://localhost:5001/api/chiriasi')
      .then(response => response.json())
      .then(data => {
        console.log("Datele primite de la server:", data); // Mesaj de control
        setChiriasi(data);
      })
      .catch(error => {
        console.error("Eroare la aducerea chiriașilor:", error);
      });
  }, []);

  const adaugaChirias = (nou) => {
    setChiriasi([...chiriasi, { id: Date.now(), ...nou }]);
  };

  return (
    <div className="App">
      {/* Bara de status */}
      <div style={{ padding: '10px', backgroundColor: '#e0f7fa', textAlign: 'center', marginBottom: '20px', borderRadius: '8px' }}>
         <strong>Status Server: </strong> <span style={{color: 'blue'}}>{mesajServer}</span>
      </div>

      <BrowserRouter>
        <Routes>
          {/* Trimitem lista 'chiriasi' către pagina Dashboard */}
          <Route path="/" element={<Dashboard chiriasi={chiriasi} />} />
          
          <Route path="/adauga-chirias" element={<AdaugaChirias adaugaChirias={adaugaChirias} />} />
          <Route path="/adauga-factura" element={<AdaugaFactura />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/raporteaza-problema" element={<RaporteazaProblema />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 