import React, { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom';
import BannerServicios from '../components/BannerServicios';
import ContacBar from '../components/ContacBar';
// import NavServicios from '../components/NavServicios';
import { data } from '../data/data';
import { ContPagesEmpresa } from '../styles/NavEmpresa';
import { ConNosotros } from '../styles/Nosotros';



const DetallesServicios = () => {

    let { id } = useParams();


    //get data
    const [datos] = data
    const { servicios: { dropDownMenu } } = datos;
    const rute = Object.values(dropDownMenu);
    const rute1 = Object.values(dropDownMenu.gestion.cards);
    const rute2 = Object.values(dropDownMenu.producto.cards);
    const rute3 = Object.values(dropDownMenu.industriales.cards);
    const rute4 = Object.values(dropDownMenu.personas.cards);
    // console.log(rute)

    // estate of cards...........
    const [cardDetail, setCardDetail] = useState([])
    const { text2,
        paragraph1,
        paragraph2,
        paragraph3,
        paragraph4,
        paragraph5,
        paragraph6,
        paragraph7,
        paragraph8,
        paragraph9,
        paragraph10,
        paragraph11,
        paragraph12,
        paragraph13,
        paragraph14, 
        paragraph15, 
        paragraph16, 
        paragraph17,
        btn1 } = cardDetail;
    // const text = Object.values(paragraph);

    function handleClick(e) {
        e.preventDefault();
        window.history.back();
    }




    useEffect(() => {
        const url = window.location.pathname;

        if (url.includes("gestion")) {
            const user1 = rute1.find(item => item.id === id);
            setCardDetail(user1)

        } else if (url.includes("producto")) {
            const user2 = rute2.find(item => item.id === id);
            setCardDetail(user2)

        } else if (url.includes("industrial")) {
            const user3 = rute3.find(item => item.id === id);
            setCardDetail(user3)

        } else if (url.includes("personas")) {
            const user4 = rute4.find(item => item.id === id);
            setCardDetail(user4)
        }
    }, []);






    return (
        <>
            <BannerServicios />
            <ContPagesEmpresa>
                <div className='ContSectionEm'>
                    <h1>{id}</h1>
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

                            <p>{text2}</p>
                            <br />
                            <p>{paragraph1}</p>
                            <p>{paragraph2}</p>
                            <p>{paragraph3}</p>
                            <p>{paragraph4}</p>
                            <p>{paragraph5}</p>
                            <p>{paragraph6}</p>
                            <p>{paragraph7}</p>
                            <p>{paragraph8}</p>
                            <p>{paragraph9}</p>
                            <p>{paragraph10}</p>
                            <p>{paragraph11}</p>
                            <p>{paragraph12}</p>
                            <p>{paragraph13}</p>
                            <p>{paragraph14}</p>
                            <p>{paragraph15}</p>
                            <p>{paragraph16}</p>
                            <p>{paragraph17}</p>
                            <button onClick={handleClick}>{btn1}</button>

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