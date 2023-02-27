import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import ContacBar from '../components/ContacBar'
import NavEmpresa from '../components/NavEmpresa'
import SliderLogoExperiencia from '../components/SliderLogoExperiencia'
import SliderTestimonio1 from '../components/SliderTestimonio1'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros } from '../styles/Nosotros'
import { CardProyect, ContCardProyect, TitleSectionPro } from '../styles/Proyectos'

const Proyectos = () => {

  //get data
  const [ datos ] = data;
  const { empresa:{ dropDownMenu:{ proyectos:{ nameSecction, proyecto}}}} = datos;
  const cardProyecto = Object.values(proyecto);


  return (
    <>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />

          <ConNosotros>

            <TitleSectionPro><p>{nameSecction}</p></TitleSectionPro>

            <div><SliderLogoExperiencia /></div>

            <div><SliderTestimonio1/></div>

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

          </ConNosotros>

        </div>
        <ContacBar />
      </ContPagesEmpresa>
    </>
  )
}

export default Proyectos