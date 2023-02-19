import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data';
import { CardAcred, ContSliderAcr, TitleSection } from '../styles/SecAcreditaciones';
import { ConSectionServicios } from '../styles/SectionServicios';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import Slider from 'react-slick';
import { ConCardExperiencia, LinkExperiencia } from '../styles/SliderExperiencia';


const SecExperiencias = () => {

    // get data
    const [datos] = data;
    const { empresa: { dropDownMenu: { proyectos: {url, nameSecction, cards } } } } = datos;
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
                breakpoint: 480,
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

                <ContSliderAcr>
                    <Slider {...settings}>

                        {
                            card.map((item) =>
                                <CardAcred key={item.id}>
                                    <ConCardExperiencia>
                                        <span>
                                            <img src={require(`../images/${item.img}`)} alt={item.name} />
                                        </span>
                                        <span className='cardTitle'>
                                            <p>{item.title}</p>
                                        </span>
                                        <span className='cardText'>
                                            <p>{item.text}</p>
                                        </span>
                                    </ConCardExperiencia>
                                </CardAcred>
                            )
                        }

                    </Slider>
                </ContSliderAcr>
                <LinkExperiencia>
                    <Link to={url}>CONOCE MÁS</Link>
                </LinkExperiencia>

            </ConSectionServicios>


        </>
    )
}

export default SecExperiencias;