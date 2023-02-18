import React, { Component } from "react";
// import Slider from "react-slick";
import banner1 from '../images/banner-ppal.png';
import { ContImgCarousel } from "../styles/SliderBanner";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1300,
            pauseOnHover: true,
            cssEase: "linear",
            appendDots: dots => (
                <div
                    style={{
                        borderRadius: "10px",
                        padding: "0px",
                        top: "10px",
                        height: "40px",
                        // marginTop: "-30px",
                    }}
                >
                    <ul style={{ marginTop: "0px", background:"#ECECEC" }}> {dots} </ul>
                </div>
            ),
        };
        return (
            <div>
                <ContImgCarousel {...settings}>
                    <div>
                        <img src={banner1} alt="" />
                        <span>
                            <h2>INSPECCIÓN</h2>
                            <p>A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero.</p>
                            <br />
                            <br />
                            <p><a href="/">SOLICITAR INFORMACIÓN</a></p>
                        </span>
                    </div>
                    <div>
                        <img src={banner1} alt="" />
                        <span>
                            <h2>INSPECCIÓN</h2>
                            <p>A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero.</p>
                            <br />
                            <br />
                            <p><a href="/">SOLICITAR INFORMACIÓN</a></p>
                        </span>
                    </div>
                    <div>
                        <img src={banner1} alt="" />
                        <span>
                            <h2>INSPECCIÓN</h2>
                            <p>A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero.</p>
                            <br />
                            <br />
                            <p><a href="/">SOLICITAR INFORMACIÓN</a></p>
                        </span>
                    </div>
                </ContImgCarousel>
            </div>
        );
    }
}