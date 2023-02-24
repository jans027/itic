import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import NavEmpresa from '../components/NavEmpresa'
import { ContPagesEmpresa } from '../styles/NavEmpresa'

const Equipo = () => {
  return (
    <>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />
          Equipo
        </div>
      </ContPagesEmpresa>
    </>
  )
}

export default Equipo