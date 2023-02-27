import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import NavEmpresa from '../components/NavEmpresa'
import { data } from '../data/data'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import { ConNosotros } from '../styles/Nosotros'
import { CardPol, ContCardPol } from '../styles/Politicas'
import { TitleSectionPro } from '../styles/Proyectos'
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import ContacBar from '../components/ContacBar'

const Politicas = () => {

  //get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { politicas: { name, cards } } } } = datos;
  const card = Object.values(cards)

  return (
    <>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />

          <ConNosotros>

            <TitleSectionPro><p>{name}</p></TitleSectionPro>

            <ContCardPol>
              {
                card.map((item) =>
                  <CardPol key={item.id}>
                    <div>
                      <FileOpenOutlinedIcon/>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <div>
                      <span>
                        <p>{item.text.split('\n').map((line, i) => {
                          return (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          )
                        })}</p>
                      </span>
                    </div>
                  </CardPol>
                )
              }
            </ContCardPol>


          </ConNosotros>
        </div>
        <ContacBar/>
      </ContPagesEmpresa>
    </>
  )
}

export default Politicas