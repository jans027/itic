import React from 'react'
import { data } from '../data/data';
import { ContSliderAcr, SubTitleSection, TitleSection } from '../styles/SecAcreditaciones';
import { ConSectionServicios } from '../styles/SectionServicios';
import Slider from 'react-slick';
import { CardExperi1, ConCardExperiencia } from '../styles/SliderExperiencia';
import { CardsTestimonio, ConSliderExp, SliderTestimonioCards } from '../styles/Proyectos';


const SliderTestimonio1 = () => {

    // get data
    const [datos] = data;
    const { empresa: { dropDownMenu: { proyectos: { testimonios } } } } = datos;
    const card = Object.values(testimonios);
    // console.log(card)


    // silder......
    const settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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

                <ContSliderAcr>
                    <ConSliderExp {...settings}>
                        {
                            card.map((item) =>
                                <div>
                                    <CardsTestimonio>
                                        <div className='ContCarExp1'>
                                            <div className='ConImgCard'>
                                                {/* <img src={require(`../images/${item.img}`)} alt={item.id} /> */}
                                            </div>
                                            <div className='cardTitle1'>
                                                <p>{item.title}</p>
                                                <p>{item.subTitle}</p>
                                            </div>
                                        </div>
                                        <div className='ContCarExp2'>
                                            <p>{item.text}</p>
                                        </div>
                                    </CardsTestimonio>
                                </div>
                            )
                        }
                    </ConSliderExp>
                </ContSliderAcr>

            </ConSectionServicios>


        </>
    )
}

export default SliderTestimonio1;