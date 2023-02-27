import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros } from '../styles/Nosotros'
import { Cards01, Cards02, ConImgP, ConParagraphP, Contcards1, ContCards2, ContPilares1 } from '../styles/Pilares'

const Pilares = () => {

  const [datos] = data;
  const { empresa: { dropDownMenu: { pilares: { title, cards0, cards1 } } } } = datos;
  const card1 = Object.values(cards0);
  const card2 = Object.values(cards1);
  // console.log(card1)





  return (
    <>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />
          <ConNosotros>
            <ContPilares1>

              <div className='titleP'>{title}</div>
              <Contcards1>
                {
                  card1.map((item) =>
                    <Cards01 key={item.id}>
                      <img src={require(`../images/${item.img}`)} alt={item.id} />
                      <p className='title_p01'>{item.title}</p>
                      <p className='paragraph_p01'>{item.text}</p>
                    </Cards01>
                  )
                }
              </Contcards1>
            </ContPilares1>

            <ContCards2>
              {
                card2.map((item) =>
                  <Cards02>
                    <ConImgP>
                      <img src={require(`../images/${item.img}`)} alt={item.id} />
                    </ConImgP>
                    <ConParagraphP>
                      <p
                      className='title_p02'>{item.title}</p>
                      <p
                      className='paragraph_p02'>{item.text}</p>
                    </ConParagraphP>
                  </Cards02>
                )
              }
            </ContCards2>

          </ConNosotros>
        </div>
        <ContacBar />
      </ContPagesEmpresa>
    </>
  )
}

export default Pilares