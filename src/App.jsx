import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Contact from './Contact';

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-[#1f1f1f] flex items-center justify-center text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-light">{title}</h1>
        <p className="mt-4 text-gray-400">Pagina este în construcție.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facturi" element={<PlaceholderPage title="Invoice Management" />} />
        <Route path="/mentenanta" element={<PlaceholderPage title="Maintenance Requests" />} />
        <Route path="/documente" element={<PlaceholderPage title="Tenant Documents" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
