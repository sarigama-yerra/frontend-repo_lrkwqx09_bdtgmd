import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 py-10 text-white/60 text-sm flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} OTIKA — Dominez la jungle du digital !</p>
          <p>Made with passion in the jungle.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
