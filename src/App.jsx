import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Usamos HashRouter

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./pages/Home.jsx";
import Marchas from "./pages/Marchas.jsx";
import MarchaDetail from "./pages/MarchaDetail.jsx";
import Presentaciones from "./pages/Presentaciones.jsx";
import Archivos from "./pages/Archivos.jsx";

import "./styles/base.css";
import "./styles/cards/marchaCard.css";
import "./styles/marchas.css";

function App() {
  return (
    <Router> {/* Router ahora envuelve toda la app */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marchas" element={<Marchas />} />
        {/* El parámetro :slug permite cargar detalles como 'penachos-rojos' */}
        <Route path="/marchas/:slug" element={<MarchaDetail />} />
        <Route path="/presentaciones" element={<Presentaciones />} />
        <Route path="/archivos" element={<Archivos />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;