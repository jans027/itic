import React, { Component } from "react";
// import Slider from "react-slick";
import largeImage from '../images/banner-ppal.png';
import smallImage from '../images/banner_ppa_mobile.png'
import { ContImgCarousel } from "../styles/SliderBanner";


export default class SimpleSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            screenWidth: window.innerWidth
        };
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.setState({
            screenWidth: window.innerWidth
        });
    };


    render( ) {

        // we get the value from the display and change the state
        const { screenWidth } = this.state;



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
                    <ul style={{ marginTop: "0px", background: "#ECECEC" }}> {dots} </ul>
                </div>
            ),
        };
        return (
            <div>
                <ContImgCarousel {...settings}>
                    <div>
                        <img src={screenWidth < 768 ? smallImage : largeImage} alt="Imagen" />
                        <span>
                            <h2>INSPECCIÓN</h2>
                            <p className="textCarrousel">A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero.</p>
                            <br />
                            <br />
                            <p><a href="/">SOLICITAR INFORMACIÓN</a></p>
                        </span>
                    </div>
                    <div>
                    <img src={screenWidth < 768 ? smallImage : largeImage} alt="Imagen" />
                        <span>
                            <h2>INSPECCIÓN</h2>
                            <p className="textCarrousel">A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero.</p>
                            <br />
                            <br />
                            <p><a href="/">SOLICITAR INFORMACIÓN</a></p>
                        </span>
                    </div>
                    <div>
                    <img src={screenWidth < 768 ? smallImage : largeImage} alt="Imagen" />
                        <span>
                            <h2>INSPECCIÓN</h2>
                            <p className="textCarrousel">A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero.</p>
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