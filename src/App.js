import React, { Component, createContext } from 'react';
import { BrowserRouter as Router,  Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Producto from './pages/Producto';
import Industrial from './pages/Industrial';
import Gestion from './pages/Gestion';
import Personas from './pages/Personas';
import Documentos from './pages/Documentos';
import Nosotros from './pages/Nosotros';
import Pilares from './pages/Pilares';
import Mision from './pages/Mision';
import Vision from './pages/Vision';
import Certificaciones from './pages/Certificaciones';
import Equipo from './pages/Equipo';
import Acreditaciones from './pages/Acreditaciones';
import Proyectos from './pages/Proyectos';
import Politicas from './pages/Politicas';
import './index.css';
import Clientes from './pages/Clientes';
import Cotizacion from './pages/Cotizacion';
import NavBar from './pages/Navbar';
import { data } from './data/data';
import Footer from './components/Footer';
import FloatingBtn from './components/FloatingBtn';
// import ScrollToTop from './components/ScrollToTop';


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
        {/* <ScrollToTop /> */}
        <NavBar/>
        <FloatingBtn/>

        <Routes>
          <Route path="*" element={<Navigate to="/Home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contact />} /> 
          <Route path="/cotizacion" element={<Cotizacion />} />
          <Route path="https//api.whatsapp.com/send?phone=573186396096" element={<FloatingBtn />} />

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

        <Footer/>
      </Router>

      </Context.Provider>
    </div>
  );
}

export default App;
