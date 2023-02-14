import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
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
        </nav>
    )
}

export default NavBar;