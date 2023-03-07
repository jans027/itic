import React from 'react'
import { data } from '../data/data';
import { ContSliderAcr } from '../styles/SecAcreditaciones';
import { CardExperiencia2, ConSliderExp2, ContCardExperiencia2 } from '../styles/SliderExperiencia';


const SliderExperiencias = () => {

    // get data
    const [datos] = data;
    const { empresa: { dropDownMenu: { proyectos: { cards } } } } = datos;
    const card = Object.values(cards);
    // console.log(card)


    // silder......
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        speed: 3500,
        autoplaySpeed: 4500,
        responsive: [
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
            <ContSliderAcr>
                <ConSliderExp2 {...settings}>

                    {
                        card.map((item) =>
                            <div className='sub_cont_card2'>
                                <ContCardExperiencia2 className='global-card-slider' key={item.id}>
                                    <CardExperiencia2 className='cardExperiencia'>
                                        <div>
                                            <img src={require(`../images/${item.img}`)} alt={item.name} />
                                        </div>
                                        <span className='cardTitle'>
                                            <p>{item.title}</p>
                                        </span>
                                        <span className='cardText'>
                                            <p>{item.text}</p>
                                        </span>
                                    </CardExperiencia2>
                                </ContCardExperiencia2>
                            </div>
                        )
                    }

                </ConSliderExp2>
            </ContSliderAcr>
        </>
    )
}

export default SliderExperiencias;