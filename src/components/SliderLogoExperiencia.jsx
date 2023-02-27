import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { data } from "../data/data";
import { CardLogo, ConSlider, ContSlideLogo, LinkExperiencia } from "../styles/SliderLogo";


const [datos] = data;
    const { empresa: { dropDownMenu: { proyectos: {url } } } } = datos;
    // const card = Object.values(cards);
    // console.log(url )


export default class SliderLogoExperiencia extends Component {

    
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            // centerMode: true,
            // cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        // dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
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
            <ContSlideLogo>
                <div className="slideCont2">
                    <Slider {...settings}>
                        <CardLogo>
                            <p>LOGO 1</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 2</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 3</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 4</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 5</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 6</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 7</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 8</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 9</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 3</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 4</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 5</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 6</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 7</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 8</p>
                        </CardLogo>
                        <CardLogo>
                            <p>LOGO 9</p>
                        </CardLogo>
                    </Slider>
                </div>
            </ContSlideLogo>
        );
    }
}