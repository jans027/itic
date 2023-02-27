import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import SliderLogo from '../components/SliderLogo'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros } from '../styles/Nosotros'

const Proyectos = () => {

  //get data
  const [ datos ] = data;
  const { empresa:{ dropDownMenu:{ proyectos:{ nameSecction}}}} = datos;


  return (
    <>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />

          <ConNosotros>
            <div>{nameSecction}</div>
            <div><SliderLogo /></div>
            <div></div>
            <div></div>
          </ConNosotros>

        </div>
        <ContacBar />
      </ContPagesEmpresa>
    </>
  )
}

export default Proyectos