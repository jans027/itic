import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { data } from "../data/data";
import { CardLogo, ContSlideLogo, LinkExperiencia } from "../styles/SliderLogo";


const [datos] = data;
    const { empresa: { dropDownMenu: { proyectos: {url } } } } = datos;
    // const card = Object.values(cards);
    // console.log(url )


export default class SliderLogo extends Component {

    
    render() {
        const settings = {
            // className: "center",
            // dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
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
                            <h3>LOGO 1</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 2</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 3</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 4</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 5</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 6</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 7</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 8</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 9</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 3</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 4</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 5</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 6</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 7</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 8</h3>
                        </CardLogo>
                        <CardLogo>
                            <h3>LOGO 9</h3>
                        </CardLogo>
                    </Slider>
                </div>
                <LinkExperiencia>
                    <Link to={url}>CONOCE MÁS</Link>
                </LinkExperiencia>
            </ContSlideLogo>
        );
    }
}