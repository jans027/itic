import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data';
// icons
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Footer = () => {

    // get data
    const [datos] = data;
    // destructuring data
    const {
        inicio,
        servicios,
        empresa,
        consulta,
        cotizacion,
        contacto,
        politicas
    } = datos;
    const serviciosSub = Object.values(servicios.dropDownMenu);
    const empresasSub = Object.values(empresa.dropDownMenu);
    // const countriesSub = Object.values(countries);
    // const countriesSub = Object.values(inicio);
    // console.log(countriesSub)




    return (
        <Footer className='footer'>
            <div>
                <h3>{empresa.name}</h3>
                {
                    empresasSub.map((item) =>
                        <ul
                            id="droppin"
                            key={item.id}
                        >
                            <li
                                key={item.nameFooter}
                                // onClick={(e) => handleClick(e)}
                                id={item.nameFooter}
                            >
                                <Link to={item.url}>{item.nameFooter}</Link>
                            </li>
                        </ul>
                    )
                }
            </div>

            <div>
                <h3>{servicios.name}</h3>
                {
                    serviciosSub.map((item) =>
                        <ul
                            id="droppin"
                            key={item.id}
                        >
                            <li
                                key={item.nameFooter}
                                // onClick={(e) => handleClick(e)}
                                id={item.nameFooter}
                            >
                                <Link to={item.url}>{item.nameFooter}</Link>
                            </li>
                        </ul>
                    )
                }
            </div>

            <div>
                <h3>{politicas.name}</h3>
                <ul id="droppin">
                    <li>
                        <a
                            href='/'
                            // target="_blank"
                            rel="noreferrer"
                        >
                            Política de imparcialidad, independencia y confidencialidad
                        </a>
                    </li>
                    <li>
                        <a
                            href='/'
                            // target="_blank"
                            rel="noreferrer"
                        >
                            Política de seguridad proceso de certificación de personas
                        </a>
                    </li>
                    <li>
                        <a
                            href='/'
                            // target="_blank"
                            rel="noreferrer"
                        >
                            Política de suspensión, retiro o reducción del alcance de certificación de personas
                        </a>
                    </li>
                    <li>
                        <a
                            href='/'
                            // target="_blank"
                            rel="noreferrer"
                        >
                            Política de la calidad (servicios industriales)
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <Link to={consulta.url}><h3>{consulta.name}</h3></Link>
                <Link to={cotizacion.url}><h3>{cotizacion.name}</h3></Link>
                <div>
                    <h3>{contacto.name}</h3>
                    <Link to={contacto.url}><h3>{contacto.nameFooter}</h3></Link>
                    <span><PhoneAndroidOutlinedIcon /><h5>{inicio.phone}</h5></span>
                    <span><EmailOutlinedIcon /><h5>{inicio.email}</h5></span>
                    <span><LocationOnOutlinedIcon /><h5>{inicio.address}</h5></span>
                </div>
            </div>
            
            <div id="copyright">Copyright&copy; 2023 ITIC. Todos los derechos reservados.</div>

        </Footer>
    )
}

export default Footer