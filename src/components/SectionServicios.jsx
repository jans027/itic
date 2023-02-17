import React from 'react'
import { data } from '../data/data';
import { ConSectionServicios } from '../styles/SectionServicios';

const SectionServicios = () => {

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
    const serviciosSub = Object.values(servicios);
    // const empresasSub = Object.values(empresa.dropDownMenu);
    // console.log(servicios.name)


    return (
        <>
        <ConSectionServicios>
            <h1>{servicios.name}</h1>
            <div>
                
            </div>
        </ConSectionServicios>
            
        </>
    )
}

export default SectionServicios;