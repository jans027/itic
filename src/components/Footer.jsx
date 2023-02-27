import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data';
// icons
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
//styles
import { AddressFooter, BlockNav, BtnFooter, ConEmprFooter, ConServFooter, ConsultasFooter, ContFooter, ContUlPoliticas, Copy, LinkConsulta1, LogoFooter, Redes } from '../styles/Footer';
//Documents
import confidencialidad from '../documents/ITIC-C-NA-DI-003-POLITICA-DE-IMPARCIALIDAD-INDEPENDENCIA-Y-CONFIDENCIALIDAD-V7.doc';
import personas from '../documents/ITIC-C-NA-DI-009-POLITICA-DE-SEGURIDAD-PROCESO-DE-CERTIFICACION-DE-PERSONAS-V2.doc';
import suspension from '../documents/ITIC-C-NA-DI-010-POLITICA-DE-SUSPENSION-RETIRO-O-REDUCCION-DEL-ALCANCE-DE-CERTIFICACION-PERSONAS-V2.doc';
import calidad from '../documents/ITIC-C-NA-PL-001-POLITICA-Y-OBJETIVOS-DE-CALIDAD-002.doc';
// Images
import LogFooter from '../images/Logo-itic-blanco.svg';
import ModalForm from './ModalForm';



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
    // console.log(politicas)




    return (
        <footer className='footer'>

            <ContFooter>

                <LogoFooter>
                    <div>
                        <img src={LogFooter} alt="logoItic" />
                    </div>
                </LogoFooter>

                <BlockNav>

                    <ConEmprFooter>
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
                    </ConEmprFooter>

                    <ConServFooter>
                        <h3>{servicios.name}</h3>
                        {
                            serviciosSub.map((item) =>
                                <ul
                                    id="droppin"
                                    key={item.id}
                                >
                                    <li key={item.nameFooter} id={item.nameFooter}>
                                        <Link to={item.url}>{item.nameFooter}</Link>
                                    </li>
                                </ul>
                            )
                        }
                    </ConServFooter>

                    <ContUlPoliticas>
                        <h3>{politicas.name}</h3>
                        <li>
                            <a href={confidencialidad} rel="noreferrer">
                                Política de imparcialidad, independencia y confidencialidad
                            </a>
                        </li>
                        <li>
                            <a href={personas} rel="noreferrer">
                                Política de seguridad proceso de <br/> certificación de personas
                            </a>
                        </li>
                        <li>
                            <a href={suspension} rel="noreferrer">
                                Política de suspensión, retiro o reducción <br/> del alcance de certificación de personas
                            </a>
                        </li>
                        <li>
                            <a href={calidad} rel="noreferrer">
                                Política de la calidad (servicios industriales)
                            </a>
                        </li>
                        <br />
                        <br />
                        <BtnFooter to={politicas.url}><div>{politicas.btn}</div></BtnFooter>
                    </ContUlPoliticas>

                    <ConsultasFooter>
                        <LinkConsulta1>
                            <Link to={consulta.url}><ModalForm /></Link>
                            <Link to={cotizacion.url}>{cotizacion.name}</Link>
                        </LinkConsulta1>
                        <AddressFooter>
                            <p>{contacto.name}</p>
                            <Link to={contacto.url}><PersonOutlineOutlinedIcon />{contacto.nameFooter}</Link>
                            <span><EmailOutlinedIcon />{inicio.email}</span>
                            <span><PhoneAndroidOutlinedIcon />{inicio.phone}</span>
                            <span className='address'><LocationOnOutlinedIcon />{inicio.address}</span>
                            <span className='building'>{inicio.addressBuilding}</span>
                        </AddressFooter>
                    </ConsultasFooter>
                </BlockNav>

                <Redes>
                    <h3>SÍGUENOS</h3>
                    <Link target="_blank" to={inicio.facebookUrl}><FacebookIcon /></Link>
                    <Link target="_blank" to={inicio.instagramUrl}><InstagramIcon /></Link>
                    <Link target="_blank" to={inicio.twitterUrl}><TwitterIcon /></Link>
                    <Link target="_blank" to={inicio.linkedInUrl}><LinkedInIcon /> </Link>
                </Redes>

                <Copy><p>&copy; 2023 ITIC. Todos los derechos reservados.</p></Copy>

            </ContFooter>

        </footer>
    )
}

export default Footer