import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data';
import { StiledMenu, StyledNav } from '../styles/NavBar';
import Cotizacion from './Cotizacion';





const NavBar = () => {

    const [datos] = data
    const { inicio, servicios, empresa, consulta, cotizacion, contacto } = datos;
    const serviciosSub = Object.values(servicios.dropDownMenu)
    // const menus2 = Object.values(servicios)
    // const menus3 = Object.values(empresa)
    console.log(serviciosSub)




    return (
        <StyledNav>
            <ul>
                <span>
                    <Link to={inicio.url}>{inicio.name}</Link>
                </span>

                <span>
                    <Link>{servicios.name}</Link>
                    {
                        serviciosSub.map((item) =>
                            <StiledMenu>
                                <li>
                                    <Link to={item.url}>{item.name}</Link>
                                </li>
                            </StiledMenu>
                        )
                    }
                </span>

                <span>
                    <Link>{empresa.name}</Link>

                    <StiledMenu>
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
                    </StiledMenu>
                </span>

                <span>
                    <Link>{consulta.name}</Link>
                </span>

                <span>
                    <Link to={cotizacion.url}>{cotizacion.name}</Link>
                </span>

                <span>
                    <Link to={contacto.url}>{contacto.name}</Link>
                </span>
            </ul>
        </StyledNav>
    )
}

export default NavBar;