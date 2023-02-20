import React, { Component } from "react";
import Slider from "react-slick";
import { CardLogo, ContSlideLogo } from "../styles/SliderLogo";

export default class SliderLogo extends Component {
    render() {
        const settings = {
            className: "center",
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            // centerMode: true,
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
            </ContSlideLogo>
        );
    }
}