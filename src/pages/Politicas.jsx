import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import NavEmpresa from '../components/NavEmpresa'
import { ContPagesEmpresa } from '../styles/NavEmpresa'

const Politicas = () => {
  return (
    <div>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />
          Politicas, Codigos y Reglamentos
        </div>
      </ContPagesEmpresa>
    </div>
  )
}

export default Politicas