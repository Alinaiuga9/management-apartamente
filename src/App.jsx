import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './Dashboard';
import AdaugaChirias from './AdaugaChirias';
import AdaugaFactura from './AdaugaFactura';
import RaporteazaProblema from './RaporteazaProblema';

function App() {
  const [chiriasi, setChiriasi] = useState([
    { id: 1, nume: "Ana Popescu", ap: "12", status: "Activ" }
  ]);

  const adaugaChirias = (nou) => {
    setChiriasi([...chiriasi, { id: Date.now(), ...nou, status: "Activ" }]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard chiriasi={chiriasi} />} />
        <Route path="/adauga-chirias" element={<AdaugaChirias onAdd={adaugaChirias} />} />
        <Route path="/adauga-factura" element={<AdaugaFactura />} />
        <Route path="/raporteaza-problema" element={<RaporteazaProblema />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;