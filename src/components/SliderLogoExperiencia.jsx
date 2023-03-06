import React, { Component } from "react";
import Slider from "react-slick";
import { data } from "../data/data";
// import { CardCarouselLogoExp, CardLogoExp } from "../styles/Proyectos";
// import {  ContSlideLogo } from "../styles/SliderLogo";
import { CardCarouselLogoExp, CardLogoExp, ContSlideLogoExp } from "../styles/SliderLogoExperiencia";


// Get Data
const [datos] = data;
const { logos } = datos;
const card = Object.values(logos.cards);
// console.log( card )


export default class SliderLogoExperiencia extends Component {

    
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
            ]
        };
        return (
            <ContSlideLogoExp>
                <Slider {...settings}>
                        {
                            card.map((item) =>
                                <CardLogoExp>
                                    <CardCarouselLogoExp>
                                        <img src={require(`../images/${item.img}`)} alt={item.id} />
                                    </CardCarouselLogoExp>
                                </CardLogoExp>
                            )
                        }
                    </Slider>
            </ContSlideLogoExp>
        );
    }
}