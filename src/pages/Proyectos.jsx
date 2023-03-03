import React from 'react'
import { Link } from 'react-router-dom'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import SliderLogoExperiencia from '../components/SliderLogoExperiencia'
import SliderTestimonio1 from '../components/SliderTestimonio1'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros, MenuMobileNos, MobileTitle } from '../styles/Nosotros'
import { CardProyect, ContCardProyect, TitleSectionPro } from '../styles/Proyectos'
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Proyectos = () => {

  //get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { proyectos: { name, nameSecction, proyecto } } } } = datos;
  const cardProyecto = Object.values(proyecto);

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
              })}</p><ArrowDropDownIcon />
            </MobileTitle>

            <TitleSectionPro><p>{nameSecction}</p></TitleSectionPro>

            <div><SliderLogoExperiencia /></div>

            <div><SliderTestimonio1 /></div>

            <ContCardProyect>
              {
                cardProyecto.map((item) =>
                  <CardProyect key={item.id}>
                    <div className='ConImgCardP'>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <div className='ContTextP'>
                      <p>{item.title}</p>
                      <p>{item.text}</p>
                    </div>
                  </CardProyect>
                )
              }
            </ContCardProyect>

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

export default Proyectos