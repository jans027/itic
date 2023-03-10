import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import NavEmpresa from '../components/NavEmpresa'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import ContacBar from '../components/ContacBar'
import { ConNosotros, MenuMobileNos, MobileTitle } from '../styles/Nosotros'
import { data } from '../data/data'
import { CardEmployeeE, ContCardCEO, ContCardEmployes, ContImgCeo, ContInfoCeo, ContInfoEmpl } from '../styles/Equipo'
import { Link } from 'react-router-dom'
// icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Helmet } from 'react-helmet'


const Equipo = () => {

  // get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { equipo: { helmet, name, cards0, cards1 } } } } = datos;
  const cardCEO = Object.values(cards0)
  const cardCol = Object.values(cards1)

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
      <Helmet><title>{helmet} – ITIC Colombia</title></Helmet>
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

            <ContCardCEO>
              {
                cardCEO.map((item) =>
                  <div className='ContainerCardC' key={item.id}>

                    <ContImgCeo><img src="" alt="img_CEO" /></ContImgCeo>
                    <ContInfoCeo>
                      <p className='title_ceo'>{item.title}</p>
                      <p className='sub_title_ceo'>{item.subTitle}</p>
                      <p className='paragraph'>{item.paragraph0}</p>
                      <p className='paragraph'>{item.paragraph1}</p>
                      <p className='paragraph'>{item.paragraph2}</p>
                    </ContInfoCeo>

                  </div>
                )
              }
            </ContCardCEO>

            <ContCardEmployes>
              <p className='tilte_equipo'>{name}</p>
              <div className='ConCardsEm'>
                {
                  cardCol.map((item) =>
                    <CardEmployeeE key={item.id}>

                      <ContInfoEmpl>
                        <img src={require(`../images/${item.img}`)} alt={item.id} />
                        <p className='name_Empl'>{item.name}</p>
                        <p className='cargo_empl'>{item.cargo.split('\n').map((line, i) => {
                          return (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          )
                        })}</p>
                        <Link> <LinkedInIcon /> </Link>
                        <p className='mail_empl'>{item.email}</p>
                      </ContInfoEmpl>

                    </CardEmployeeE>
                  )
                }
              </div>
            </ContCardEmployes>

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

export default Equipo