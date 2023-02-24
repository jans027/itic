import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import NavEmpresa from '../components/NavEmpresa'
import { ContPagesEmpresa } from '../styles/NavEmpresa'

const Certificaciones = () => {
  return (
    <div>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />
          Certificaciones
        </div>
      </ContPagesEmpresa>
    </div>
  )
}

export default Certificaciones