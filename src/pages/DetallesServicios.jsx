import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BannerServicios from '../components/BannerServicios';
import ContacBar from '../components/ContacBar';
// import NavServicios from '../components/NavServicios';
import { data } from '../data/data';
import { ButtonSection, CardDetalles, ContCardDeta, ContImgMobile, ContImgPc, ContNavigationPc, ParagraphSection, TitleSection } from '../styles/DetallesServicios';
import { ContPagesEmpresa } from '../styles/NavEmpresa';
import { ConNosotros } from '../styles/Nosotros';



const DetallesServicios = (props) => {

    // force window to load on startup
    function handleClick(e) {
        e.preventDefault();
        window.history.back();
    }
    // import prop from app.js
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

    const [idProp, setIdProp] = useState()
    // console.log(id)


    // decision tree and prevent ifinite loop
    useEffect(() => {
        if (props.gestion) {
            const objetoEncontrado = rute1.find((objeto) => objeto.id === id);
            setNuevoDatos((prevDatos) => [objetoEncontrado]);
            setIdProp(props.gestion);

        } else if (props.producto) {
            const objetoEncontrado = rute2.find((objeto) => objeto.id === id);
            setNuevoDatos((prevDatos) => [objetoEncontrado]);
            setIdProp(props.producto);

        } else if (props.industriales) {
            const objetoEncontrado = rute3.find((objeto) => objeto.id === id);
            setNuevoDatos((prevDatos) => [objetoEncontrado]);
            setIdProp(props.industriales);

        } else if (props.personas) {
            const objetoEncontrado = rute4.find((objeto) => objeto.id === id);
            setNuevoDatos((prevDatos) => [objetoEncontrado]);
            setIdProp(props.personas);

        }
    }, [])

    // we assign path to key active
    const user = rute.find(item => item.id === idProp);




    return (
        <>
            <BannerServicios />
            <ContPagesEmpresa>
                <div className='ContSectionEm'>
                    <ContNavigationPc>
                        {
                            rute.map((item) =>
                                <Link
                                    to={item.url}
                                    key={item.key}
                                    id={item.id}
                                >


                                    <div style={{ backgroundColor: idProp === item.id ? '#9cff2d' : '#ffffff' }}>
                                        <p>
                                            {item.nameNav2.split('\n').map((line, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            })}
                                        </p>
                                    </div>
                                </Link>
                            )
                        }
                    </ContNavigationPc>
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

                        <ContCardDeta>
                            {
                                cardGet.map((item) =>
                                    <CardDetalles key={item.id}  >
                                        <Helmet><title>{`${item.helmet} – ITIC Colombia`}</title></Helmet>
                                        <ContImgPc><img src={require(`../images/${item.imgPc}`)} alt={item.id} /></ContImgPc>
                                        <ContImgMobile><img src={require(`../images/${item.imgMobile}`)} alt={item.id} /></ContImgMobile>
                                        
                                        <div>
                                            <TitleSection>{item.text2}</TitleSection>
                                            <span>
                                                <ParagraphSection>{item.paragraph1.split('\n').map((line, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            {line}
                                                            <br />
                                                        </React.Fragment>
                                                    )
                                                })}</ParagraphSection>
                                            </span>
                                            <ButtonSection ><div onClick={handleClick}>{item.btn1}</div></ButtonSection>
                                        </div>
                                        
                                    </CardDetalles>
                                )
                            }
                        </ContCardDeta>

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