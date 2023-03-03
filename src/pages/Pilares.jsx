import React from 'react'
import { Link } from 'react-router-dom'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros, MenuMobileNos, MobileTitle } from '../styles/Nosotros'
import { Cards01, Cards02, ConImgP, ConParagraphP, Contcards1, ContCards2, ContPilares1 } from '../styles/Pilares'
import CarouselPilares from '../components/CarouselPilares'
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




const Pilares = () => {

  // get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { pilares: { name, title, cards0, cards1 } } } } = datos;
  const card1 = Object.values(cards0);
  const card2 = Object.values(cards1);
  // console.log(card1)

  // extract values of dropDownMenu
  const items = Object.values(datos.empresa.dropDownMenu);

  //.......................................................
  // go through the array and divide it in two
  const indice = items.findIndex((item) => item.name === name)

  const itemsFind0 = items.slice(0, indice)
  const itemsUrlUp = Object.values(itemsFind0)
  // console.log(itemsUrlUp)

  const itemsFind1 = items.slice(indice + 1)
  const itemsUrlDown = Object.values(itemsFind1)
  // console.log(itemsUrl)
  //.......................................................





  return (
    <>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />
          <ConNosotros>

          <MenuMobileNos>
              {
                itemsUrlUp.map((item) =>
                  <Link to={item.url} key={item.name}><div>{item.name}<ArrowDropDownIcon /></div></Link>
                )
              }
            </MenuMobileNos>

            <MobileTitle>
              <p>{name.split('\n').map((line, i) => {
                return (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                )
              })}<ArrowDropDownIcon /></p>
            </MobileTitle>

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

              <CarouselPilares/>

            </ContPilares1>
            <ContCards2>
              {
                card2.map((item) =>
                  <Cards02>
                    <ConParagraphP>
                      <p
                        className='title_p02'>{item.title}</p>
                      <p
                        className='paragraph_p02'>{item.text}</p>
                    </ConParagraphP>
                    <ConImgP>
                      <img src={require(`../images/${item.img}`)} alt={item.id} />
                    </ConImgP>
                  </Cards02>
                )
              }
            </ContCards2>

            <MenuMobileNos>
              {
                itemsUrlDown.map((item) =>
                  <Link to={item.url} key={item.name}><div>
                    <p>{item.name.split('\n').map((line, i) => {
                      return (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      )
                    })}</p>
                    <ArrowDropDownIcon /></div></Link>
                )
              }
            </MenuMobileNos>

          </ConNosotros>
        </div>
        <ContacBar />
      </ContPagesEmpresa>
    </>
  )
}

export default Pilares