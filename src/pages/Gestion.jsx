import React from 'react'
import { Link } from 'react-router-dom'
import ContacBar from '../components/ContacBar'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { Cards, ConCards, ConImg, ConNosotros, ContNumber1, MenuMobileNos, MobileTitle, Paragraph, TitleSection } from '../styles/Nosotros'
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavServicios from '../components/NavServicios'
import BannerServicios from '../components/BannerServicios'
import { ContGestionNumber1 } from '../styles/Gestion'

const Gestion = () => {
  //Get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { nosotros: { name, paragraph1, paragraph2, paragraph3, img, titleSeccion, cards } } } } = datos

  // extract values of cards
  const card = Object.values(cards);

  //.......................................................
  // extract values of dropDownMenu
  const items = Object.values(datos.empresa.dropDownMenu);
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
      <BannerServicios />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavServicios />
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

            <ContGestionNumber1>
              <div>
                <img src={require(`../images/${img}`)} alt={img} />
              </div>
              <p className='title_section'>{name}</p>
              <p className='paragraph_section'>{paragraph1}</p>
              <p className='paragraph_section'>{paragraph2}</p>
              <p className='paragraph_section'>{paragraph3}</p>
            </ContGestionNumber1>


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

export default Gestion