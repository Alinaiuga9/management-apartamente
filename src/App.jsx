import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { AuthProvider } from './AuthContext';
import Dashboard from './Dashboard';
import AdaugaChirias from './AdaugaChirias';
import AdaugaFactura from './AdaugaFactura';
import GestionareFacturi from './GestionareFacturi';
import GestionareMentenanta from './GestionareMentenanta';
import GestionareDocumente from './GestionareDocumente';
import Contact from './Contact';
import RaporteazaProblema from './RaporteazaProblema';
import Login from './Login';
import ManagerDashboard from './ManagerDashboard';
import ChiriasDashboard from './ChiriasDashboard';

function App() {
  const [mesajServer, setMesajServer] = useState('Se încarcă...');
  const [chiriasi, setChiriasi] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5001/api/test')
      .then(response => response.json())
      .then(data => setMesajServer(data.mesaj))
      .catch(() => setMesajServer("Nu mă pot conecta la server!"));

    
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

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Trimitem lista 'chiriasi' către pagina Dashboard */}
            <Route path="/" element={<Dashboard chiriasi={chiriasi} />} />
            <Route path="/adauga-chirias" element={<AdaugaChirias adaugaChirias={adaugaChirias} />} />
            <Route path="/adauga-factura" element={<AdaugaFactura />} />
            <Route path="/facturi" element={<GestionareFacturi />} />
            <Route path="/mentenanta" element={<GestionareMentenanta />} />
            <Route path="/documente" element={<GestionareDocumente />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/manager" element={<ManagerDashboard />} />
            <Route path="/chirias" element={<ChiriasDashboard />} />
            <Route path="/raporteaza-problema" element={<RaporteazaProblema />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App; 