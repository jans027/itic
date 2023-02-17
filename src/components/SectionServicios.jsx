import React from 'react'
import { data } from '../data/data';

const sectionServicios = () => {

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
    // const empresasSub = Object.values(empresa.dropDownMenu);


    return (
        <div>
            <h1>{serviciosSub.name}</h1>
        </div>
    )
}

export default sectionServicios