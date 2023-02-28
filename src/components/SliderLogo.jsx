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
            infinite: true,
            slidesToShow: 7,
            // slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1379,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        centerMode: false,
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
                <LinkExperiencia>
                    <Link to={url}>CONOCE MÁS</Link>
                </LinkExperiencia>
            </ContSlideLogo>
        );
    }
}