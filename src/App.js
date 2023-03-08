import React, { Component, createContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Producto from "./pages/Producto";
import Industrial from "./pages/Industrial";
import Gestion from "./pages/Gestion";
import Personas from "./pages/Personas";
import Documentos from "./pages/Documentos";
import Nosotros from "./pages/Nosotros";
import Pilares from "./pages/Pilares";
import Certificaciones from "./pages/Certificaciones";
import Equipo from "./pages/Equipo";
import Acreditaciones from "./pages/Acreditaciones";
import Proyectos from "./pages/Proyectos";
import Politicas from "./pages/Politicas";
import "./index.css";
import Clientes from "./pages/Clientes";
import Cotizacion from "./pages/Cotizacion";
import NavBar from "./pages/Navbar";
import Footer from "./components/Footer";
import FloatingBtn from "./components/FloatingBtn";
import ScrollToTop from "./components/ScrollToTop";
import DetallesServicios from "./pages/DetallesServicios";


function App() {


  return (
    <div>
        <GlobalStyles />
        <Router>
          <NavBar />
          <FloatingBtn />

          <ScrollToTop />
          <Routes>
            <Route path="*" element={<Navigate to="/Home" />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cotizacion" element={<Cotizacion />} />
            <Route
              path="https//api.whatsapp.com/send?phone=573186396096"
              element={<FloatingBtn />}
            />

          <Route path="/servicios/gestion" element={<Gestion />} />
            <Route path="/servicios/producto" element={<Producto />} />
            <Route path="/servicios/industrial" element={<Industrial />} />
            <Route path="/servicios/personas" element={<Personas />} />
            <Route path="/servicios/documentos" element={<Documentos />} />

          <Route path="/empresa/nosotros" element={<Nosotros />} />
          <Route path="/empresa/documentos" element={<Documentos />} />
          <Route path="/empresa/pilares" element={<Pilares />} />
          <Route path="/empresa/acreditaciones" element={<Acreditaciones />} />
          <Route path="/empresa/certificaciones" element={<Certificaciones />} />
          <Route path="/empresa/equipo" element={<Equipo />} />
          <Route path="/empresa/Nuestras-Experiencias" element={<Clientes />} />
          <Route path="/empresa/proyectos" element={<Proyectos />} />
          <Route path="/empresa/politicas" element={<Politicas />} />


          <Route path="/servicios/gestion/:id" element={<DetallesServicios />} />
          <Route path="/servicios/producto/:id" element={<DetallesServicios />} />
          <Route path="/servicios/industrial/:id" element={<DetallesServicios />} />
          <Route path="/servicios/personas/:id" element={<DetallesServicios />} />

          </Routes>

          <Footer />
        </Router>
    </div>
  );
}

export default App;
