import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ButtonCookie, ContInfo, ContModalCookie, TextInfo } from '../styles/Cookie';


const Cookie = () => {


    const [display, setDisplay] = useState('block');

    function setOneYearCookie(name, value) {
        const date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // establece la fecha de expiración en un año
        const expires = '; expires=' + date.toUTCString();
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    const handleSetCookie = () => {
        setOneYearCookie('itic', 'datos de navegacion');
        setDisplay('none');
    };

    

    return (
        <>
            <ContModalCookie style={{ display }}>
                <span className='SubContCookie'>
                    <ContInfo>
                        <TextInfo>
                            <p className='titleCookie'>ESTE SITIO WEB UTILIZA COOKIES</p>
                            <p className='textCookie'>
                                Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario a través de su navegación. Si continúas navegando aceptas su uso. 
                                <Link to='/Politicas de Navegacion'>Ver Política de Datos de Navegación</Link>
                            </p>
                        </TextInfo>
                        <ButtonCookie onClick={handleSetCookie}>Aceptar</ButtonCookie>
                    </ContInfo>
                </span>
            </ContModalCookie>
        </>
    )
}

export default Cookie