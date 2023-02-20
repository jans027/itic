import React from 'react'
import { data } from '../data/data';
import {  ContSliderAcr, SubTitleSection, TitleSection } from '../styles/SecAcreditaciones';
import { ConSectionServicios } from '../styles/SectionServicios';
import Slider from 'react-slick';
import { CardExperi1, ConCardExperiencia } from '../styles/SliderExperiencia';


const SecExperiencias = () => {

    // get data
    const [datos] = data;
    const { empresa: { dropDownMenu: { proyectos: { nameSecction, subTitle, cards } } } } = datos;
    const card = Object.values(cards);
    // console.log(card)


    // silder......
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <ConSectionServicios>
                <TitleSection>{nameSecction}</TitleSection>
                <SubTitleSection>{subTitle}</SubTitleSection>

                <ContSliderAcr>
                    <Slider {...settings}>

                        {
                            card.map((item) =>
                                <CardExperi1 key={item.id}>
                                    <ConCardExperiencia className='cardExperiencia'>
                                        <div>
                                            <img src={require(`../images/${item.img}`)} alt={item.name} />
                                        </div>
                                        <span className='cardTitle'>
                                            <p>{item.title}</p>
                                        </span>
                                        <span className='cardText'>
                                            <p>{item.text}</p>
                                        </span>
                                    </ConCardExperiencia>
                                </CardExperi1>
                            )
                        }

                    </Slider>
                </ContSliderAcr>

            </ConSectionServicios>


        </>
    )
}

export default SecExperiencias;