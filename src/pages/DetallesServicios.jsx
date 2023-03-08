import React from 'react'
import { useParams } from 'react-router-dom';
import BannerServicios from '../components/BannerServicios';
import ContacBar from '../components/ContacBar';
import NavServicios from '../components/NavServicios';
import { data } from '../data/data';
import { ContPagesEmpresa } from '../styles/NavEmpresa';
import { ConNosotros } from '../styles/Nosotros';



const DetallesServicios = () => {

    let { id } = useParams();
    // console.log(id)

    //get data
    const [datos] = data
    const { servicios: { dropDownMenu: { gestion: { cards } } } } = datos;
    const card = Object.values(cards);
    // console.log(dropDownMenu)

    // we assign path to key active
    const cardData = card.find(item => item.id === id);
    // console.log(cardData)



    return (
        <>
            <BannerServicios />
            <ContPagesEmpresa>
                <div className='ContSectionEm'>
                    <h1>{ id}</h1>
                    {/* <NavServicios /> */}
                    <ConNosotros>

                        {/* <MenuMobileNos>
                            {
                                itemsUrlUp.map((item) =>
                                    <Link to={item.url} key={item.name}><div>{item.name}<ArrowDropDownIcon /></div></Link>
                                )
                            }
                        </MenuMobileNos> */}

                        {/* <MobileTitle>
                            <p>{name.split('\n').map((line, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                )
                            })}<ArrowDropDownIcon /></p>
                        </MobileTitle> */}

                        {/* <ContCard1>
                            <ContCard2>
                                <ContImg1>
                                    <img src={require(`../images/${cardImg}`)} alt={cardImg} />
                                </ContImg1>
                                <ContText1>
                                    <p className='title_section'>{name}</p>
                                    <p className='paragraph_section'>{subTitle2}</p>
                                </ContText1>
                            </ContCard2>
                        </ContCard1> */}

                        {/* <ContCardServicios>
                            {
                                card.map((item) =>
                                    <CardServicios key={item.id}>

                                        <ContImage>
                                            <img src={require(`../images/${item.img}`)} alt={item.text1} />
                                        </ContImage>

                                        <ContLink to={item.id}>
                                            <div>
                                                <p>
                                                    {item.text1.split('\n').map((line, i) => {
                                                        return (
                                                            <React.Fragment key={i}>
                                                                {line}
                                                                <br />
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </p>
                                                <AddCircleIcon />
                                            </div>
                                        </ContLink>
                                    </CardServicios>
                                )
                            }
                        </ContCardServicios> */}

                        {/* <MenuMobileNos>
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
                        </MenuMobileNos> */}

                    </ConNosotros>
                </div>
                <ContacBar />
            </ContPagesEmpresa>
        </>
    )
}

export default DetallesServicios;