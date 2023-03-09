import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import BannerServicios from '../components/BannerServicios';
import ContacBar from '../components/ContacBar';
// import NavServicios from '../components/NavServicios';
import { data } from '../data/data';
import { ContPagesEmpresa } from '../styles/NavEmpresa';
import { ConNosotros } from '../styles/Nosotros';



const DetallesServicios = (props) => {

    // force window to load on startup
    function handleClick(e) {
        e.preventDefault();
        window.history.back();
    }

    const { id } = useParams();


    //get data
    const [datos] = data
    const { servicios: { dropDownMenu } } = datos;
    const rute = Object.values(dropDownMenu);
    const rute1 = Object.values(dropDownMenu.gestion.cards);
    const rute2 = Object.values(dropDownMenu.producto.cards);
    const rute3 = Object.values(dropDownMenu.industriales.cards);
    const rute4 = Object.values(dropDownMenu.personas.cards);

    // obtaining and deconstructing dynamic data
    const [nuevoDatos, setNuevoDatos] = useState([]);
    const cardGet = Object.values(nuevoDatos)

    // decision tree and prevent ifinite loop
    useEffect(() => {
        if (props.gestion) {
            const objetoEncontrado = rute1.find((objeto) => objeto.id === id);
            setNuevoDatos((prevDatos) => [objetoEncontrado]);

        } else if (props.producto) {
            const objetoEncontrado = rute2.find((objeto) => objeto.id === id);
            setNuevoDatos((prevDatos) => [objetoEncontrado]);

        } else if (props.industriales) {
            const objetoEncontrado = rute3.find((objeto) => objeto.id === id);
            setNuevoDatos((prevDatos) => [objetoEncontrado]);

        } else if (props.personas) {
            const objetoEncontrado = rute4.find((objeto) => objeto.id === id);
            setNuevoDatos((prevDatos) => [objetoEncontrado]);
        }
    }, [])




    return (
        <>
            <BannerServicios />
            <ContPagesEmpresa>
                <div className='ContSectionEm'>

                    {
                        rute.map((item) =>
                            <Link to={item.url}>{item.nameNav2}</Link>
                        )
                    }
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

                        <div>

                            {
                                cardGet.map((item) =>
                                    <div key={item.id}>
                                        <p>{item.text2}</p>
                                        <span>
                                            <p>{item.paragraph1.split('\n').map((line, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            })}</p>
                                        </span>
                                        <button onClick={handleClick}>{item.btn1}</button>
                                    </div>

                                )
                            }

                        </div>

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