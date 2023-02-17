import React, { Component } from "react";
// import Slider from "react-slick";
import banner1 from '../images/banner-ppal.png';
import { BannerPrueba, ContImgCarousel } from "../styles/SliderBanner";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            pauseOnHover: true,
            cssEase: "linear",
            // appendDots: dots => (
            //     <div
            //         style={{
            //             backgroundColor: "#1cbb61",
            //             borderRadius: "10px",
            //             padding: "10px",

            //         }}
            //     >
            //         <ul style={{ marginTop: "20px", color:'black' }}> {dots} </ul>
            //     </div>
            // ),
        };
        return (
            <div>
                <ContImgCarousel {...settings}>
                    <div>
                        <img src={banner1} alt="" />
                        <span>
                            <h2>INSPECCION 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime hic architecto accusamus, illum quisquam officiis molestias vel quia praesentium quaerat deserunt, error excepturi aspernatur dolorem tenetur voluptatem numquam dignissimos facilis.</p>
                            <a href="/">prueba</a>
                        </span>
                    </div>
                    <div>
                        <img src={banner1} alt="" />
                        <span>
                            <h2>INSPECCION 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime hic architecto accusamus, illum quisquam officiis molestias vel quia praesentium quaerat deserunt, error excepturi aspernatur dolorem tenetur voluptatem numquam dignissimos facilis.</p>
                            <a href="/">prueba</a>
                        </span>
                    </div>
                    <div>
                        <img src={banner1} alt="" />
                        <span>
                            <h2>INSPECCION 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime hic architecto accusamus, illum quisquam officiis molestias vel quia praesentium quaerat deserunt, error excepturi aspernatur dolorem tenetur voluptatem numquam dignissimos facilis.</p>
                            <a href="/">prueba</a>
                        </span>
                    </div>
                </ContImgCarousel>
            </div>
        );
    }
}