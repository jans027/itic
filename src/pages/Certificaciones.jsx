import React from 'react'
import { Link } from 'react-router-dom'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import { data } from '../data/data'
import { ContCardsAcred } from '../styles/Acreditaciones'
import { CardCertif, TitleCertf } from '../styles/Certificaciones'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros } from '../styles/Nosotros'

const Certificaciones = () => {

  // get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { certificaciones: { name, cards } } } } = datos;
  const card = Object.values(cards);


  return (
    <div>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />

          <ConNosotros>
            <TitleCertf>
              {name}
            </TitleCertf>

            <ContCardsAcred>
              {
                card.map((item) =>
                  <CardCertif key={item.id}>
                    
                  </CardCertif>
                )
              }
            </ContCardsAcred>
          </ConNosotros>

        </div>

        <ContacBar />
      </ContPagesEmpresa>
    </div>
  )
}

export default Certificaciones