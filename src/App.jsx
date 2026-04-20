import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import Dashboard from './Dashboard';
import AdaugaChirias from './AdaugaChirias';
import AdaugaFactura from './AdaugaFactura';
import RaporteazaProblema from './RaporteazaProblema';

function App() {

  const [mesajServer, setMesajServer] = useState('Se încarcă...');

  useEffect(() => {
    fetch('http://localhost:5001/api/test')
      .then(response => response.json())
      .then(data => {
        setMesajServer(data.mesaj);
      })
      .catch(error => {
        console.error("Eroare la conectare:", error);
        setMesajServer("Nu mă pot conecta la server!");
      });
  }, []);
  
  const [chiriasi, setChiriasi] = useState([
    { id: 1, nume: "Ana Popescu", ap: "12", status: "Activ" }
  ]);

  const adaugaChirias = (nou) => {
    setChiriasi([...chiriasi, { id: Date.now(), ...nou }]);
  };
 

  return (
    <div className="App">
      <div style={{ padding: '10px', backgroundColor: '#e0f7fa', textAlign: 'center', marginBottom: '20px', borderRadius: '8px' }}>
         <strong>Status Server: </strong> <span style={{color: 'blue'}}>{mesajServer}</span>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard chiriasi={chiriasi} />} />
          <Route path="/adauga-chirias" element={<AdaugaChirias adaugaChirias={adaugaChirias} />} />
          <Route path="/adauga-factura" element={<AdaugaFactura />} />
          <Route path="/raporteaza-problema" element={<RaporteazaProblema />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;