import React from 'react'
import BannerEmpresa from '../components/BannerEmpresa'
import NavEmpresa from '../components/NavEmpresa'
import { ContPagesEmpresa } from '../styles/NavEmpresa'
import ContacBar from '../components/ContacBar'
import { ConNosotros } from '../styles/Nosotros'
import { data } from '../data/data'
import { CardEmployeeE, ContCardCEO, ContCardEmployes, ContImgCeo, ContInfoCeo } from '../styles/Equipo'
import { Link } from 'react-router-dom'
// icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Equipo = () => {

  // get data
  const [datos] = data;
  const { empresa: { dropDownMenu: { equipo: { name, cards0, cards1 } } } } = datos;
  const cardCEO = Object.values(cards0)
  const cardCol = Object.values(cards1)



  return (
    <>
      <BannerEmpresa />
      <ContPagesEmpresa>
        <div className='ContSectionEm'>
          <NavEmpresa />

          <ConNosotros>

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
                      <div className='ConImgEmp'><img src="" alt="" /></div>
                      <div className='contInfo_0'>
                        <div className='contInfo_1'>
                          <p className='name_Empl'>{item.name}</p>
                          <span>
                            <p className='cargo_empl'>{item.cargo.split('\n').map((line, i) => {
                              return (
                                <React.Fragment key={i}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              )
                            })}</p>
                          </span>
                        </div>
                        <div className='contInfo_2'>
                          <Link> <LinkedInIcon/> </Link>
                          <p className='mail_empl'>{item.email}</p>
                        </div>
                      </div>
                    </CardEmployeeE>
                  )
                }
              </div>
            </ContCardEmployes>

          </ConNosotros>


        </div>
        <ContacBar />
      </ContPagesEmpresa>
    </>
  )
}

export default Equipo