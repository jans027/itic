import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { Cards, ConCards, ConImg, ConNosotros, ContNumber1, Paragraph, TitleSection } from '../styles/Nosotros'

const Nosotros = () => {

  const [datos] = data;
  const { empresa: { dropDownMenu: { nosotros: { name, paragraph1, paragraph2, paragraph3, img, titleSeccion, cards } } } } = datos
  const card = Object.values(cards)
  // console.log(card)

  return (
    <>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />
          <ConNosotros>
            <ContNumber1>
              <div>
                <img src={require(`../images/${img}`)} alt={img} />
              </div>
              <p className='title_section'>{name}</p>
              <p className='paragraph_section'>{paragraph1}</p>
              <p className='paragraph_section'>{paragraph2}</p>
              <p className='paragraph_section'>{paragraph3}</p>
            </ContNumber1>
            <TitleSection><p>{titleSeccion}</p></TitleSection>

            <ConCards>
              {
                card.map((item) =>
                  <Cards key={item.id}>
                    <ConImg>
                      <img src={require(`../images/${item.img}`)} alt={item.id} />
                    </ConImg>
                    <Paragraph>
                      <p className='title_card'>{item.title}</p>
                      <p className='p_card'>{item.paragraph}</p>
                    </Paragraph>
                  </Cards >
                )
              }
            </ConCards>

          </ConNosotros>
        </div>
        <ContacBar/>
      </ContPagesEmpresa>
    </>
  )
}

export default Nosotros