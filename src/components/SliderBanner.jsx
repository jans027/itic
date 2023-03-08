import React, { Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
// import Slider from "react-slick";
import largeImage from '../images/banner-ppal.png';
import smallImage from '../images/banner_ppa_mobile.png'
import { ContCardImg, ContImgCarousel, ContTextBanner } from "../styles/SliderBanner";

// get data
const [datos] = data;
const { inicio: { banners } } = datos;
const card = Object.values(banners)

export default class SimpleSlider extends Component {




    // change image according to screen width
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


    render() {

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
            // appendDots: dots => (
            //     <div
            //         style={{
            //             borderRadius: "10px",
            //             padding: "0px",
            //             top: "10px",
            //             height: "40px",
            //             // marginTop: "-30px",
            //         }}
            //     >
            //         <ul style={{ marginTop: "0px", background: "#ECECEC" }}> {dots} </ul>
            //     </div>
            // ),
        };
        return (
            <>
                <ContImgCarousel {...settings}>
                    {
                        card.map((item) =>
                            <ContCardImg>
                                <div key={item.id}>
                                    <img src={screenWidth < 768 ? smallImage : largeImage} alt="Imagen" />
                                    <ContTextBanner className="ConTexBanner1">
                                        <h2>{item.title}</h2>
                                        <p className="textCarrousel">{item.paragraph}</p>
                                        <Link to="/"><div className="Btn-Banner1">{item.btn}</div></Link>
                                    </ContTextBanner >
                                </div>
                            </ContCardImg>
                        )
                    }
                </ContImgCarousel>
            </>
        );
    }
}