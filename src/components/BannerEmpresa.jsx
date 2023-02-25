import React, { useEffect, useState } from 'react'
import { data } from '../data/data';
import largeImage from '../images/banner-empresa.png';
import smallImage from '../images/banner_ppa_mobile.png'
import { BannerPath } from '../styles/NavEmpresa'

const BannerEmpresa = () => {

    //get data
    const [datos] = data
    const { empresa: { name} } = datos;

    // console.log(dropArray)

    //change image according to screen width
    const [imagen, setImagen] = useState("");

    useEffect(() => {
        function actualizarImagen() {
            if (window.innerWidth <= 800) {
                setImagen(smallImage);
            } else {
                setImagen(largeImage);
            }
        }

        window.addEventListener("resize", actualizarImagen);
        actualizarImagen();

        return () => window.removeEventListener("resize", actualizarImagen);
    }, []);


    return (
        <>
            <BannerPath>
                <img src={imagen} alt="Imagen-Empresa" />
                <h2>{name}</h2>
            </BannerPath>
        </>
    );

}

export default BannerEmpresa