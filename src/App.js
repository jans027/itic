import React, { Component, createContext } from 'react';
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
import { data } from './data/data';


const Context = createContext(data);


function App() {

  const globalData = Context
  // const { home } = globalData
  // console.log(home)


  return (
    <div className="App">
      <Context.Provider value={ globalData }>
      <GlobalStyles/>
      <Router>
        <NavBar/>

        <Routes>
          <Route path="*" element={<Navigate to="/Home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contact />} /> 
          <Route path="/cotizacion" element={<Cotizacion />} />

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
        </Routes>
      </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
