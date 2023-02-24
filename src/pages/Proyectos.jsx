import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import NavEmpresa from '../components/NavEmpresa'
import { ContPagesEmpresa } from '../styles/NavEmpresa'

const Proyectos = () => {
  return (
    <div>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />
          Nuestra Experiencia
        </div>
      </ContPagesEmpresa>
    </div>
  )
}

export default Proyectos