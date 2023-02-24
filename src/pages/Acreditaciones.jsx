import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import NavEmpresa from '../components/NavEmpresa'
import { ContPagesEmpresa } from '../styles/NavEmpresa'

const Contact = () => {
    return (
        <>
            <BannerEmpresa />
            <ContPagesEmpresa>
                <div className='ContSectionEm'>
                    <NavEmpresa />
                    Acreditaciones
                </div>
            </ContPagesEmpresa>
        </>
    )
}

export default Contact