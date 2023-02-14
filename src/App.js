import React, { Component } from 'react';
import { BrowserRouter as Router,  Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";
import Home from './components/Home';
import Contact from './components/Contact';
import Producto from './components/Producto';
import Industrial from './components/Industrial';
import Gestion from './components/Gestion';
import Personas from './components/Personas';
import Documentos from './components/Documentos';
import Nosotros from './components/Nosotros';
import Pilares from './components/Pilares';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Certificaciones from './components/Certificaciones';
import Equipo from './components/Equipo';
import Acreditaciones from './components/Acreditaciones';
import Proyectos from './components/Proyectos';
import Politicas from './components/Politicas';
import './index.css';
import Clientes from './components/Clientes';
import Cotizacion from './components/Cotizacion';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/home">Inicio</Link>
            </li>

            <li>
              <Link to="/about">Servicios</Link>
              <ul>
                <li>
                  <Link to="/servicios/gestion">Sistemas de Gestion</Link>
                </li>
                <li>
                  <Link to="/servicios/producto">Certificacion de Producto</Link>
                </li>
                <li>
                  <Link to="/servicios/industrial">Servicios Industriales</Link>
                </li>
                <li>
                  <Link to="/servicios/personas">Certificacion de Personas</Link>
                </li>
                <li>
                  <Link to="/servicios/documentos">Documentos</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/about">Empresa</Link>
              <ul>
                <li>
                  <Link to="/empresa/nosotros">Acerca de Nosotros</Link>
                </li>
                <li>
                  <Link to="/empresa/pilares">Pilares</Link>
                </li>
                <li>
                  <Link to="/empresa/mision">Mision</Link>
                </li>
                <li>
                  <Link to="/empresa/vision">Vision</Link>
                </li>
                <li>
                  <Link to="/empresa/acreditaciones">Acreditaciones</Link>
                </li>
                <li>
                  <Link to="/empresa/certificaciones">Certificaciones</Link>
                </li>
                <li>
                  <Link to="/empresa/equipo">Nuestro equipo</Link>
                </li>
                <li>
                  <Link to="/empresa/clientes">Confiado en Nosotros</Link>
                </li>
                <li>
                  <Link to="/empresa/proyectos">Proyectos</Link>
                </li>
                <li>
                  <Link to="/empresa/politicas">Politicas, Codigos y reglamentos</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/cotizacion">Cotizacion</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}
        <NavBar/>

        <Routes>
          <Route path="*" element={<Navigate to="/Home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> 

          <Route path="/servicios/gestion" element={<Gestion />} />
          <Route path="/servicios/producto" element={<Producto />} />
          <Route path="/servicios/industrial" element={<Industrial />} />
          <Route path="/servicios/personas" element={<Personas />} />
          <Route path="/servicios/documentos" element={<Documentos />} />

          <Route path="/empresa/nosotros" element={<Nosotros />} />
          <Route path="/empresa/documentos" element={<Documentos />} />
          <Route path="/empresa/pilares" element={<Pilares />} />
          <Route path="/empresa/mision" element={<Mision />} />
          <Route path="/empresa/vision" element={<Vision />} />
          <Route path="/empresa/acreditaciones" element={<Acreditaciones />} />
          <Route path="/empresa/certificaciones" element={<Certificaciones />} />
          <Route path="/empresa/equipo" element={<Equipo />} />
          <Route path="/empresa/clientes" element={<Clientes />} />
          <Route path="/empresa/proyectos" element={<Proyectos />} />
          <Route path="/empresa/politicas" element={<Politicas />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
