import Slider from "react-slick";
import styled from "styled-components";
import banner1 from '../images/banner-ppal.png';





export const ContImgCarousel = styled(Slider)`
    border: 2px solid red;//...............
    top: 100px;
    width: 100%;
    height: 500px;
    min-height: 150px;
    overflow: hidden;
    margin-bottom: 20em;
    
    div{
        overflow: hidden;
        position: static;
        img{
            width: 100%;
            height: max-content;
            object-fit: cover;
            object-position: center right;
        }
        span{
            position: fixed;
            font-size: 150px;
            top :20%;
            width: 200px;
        }
    }
`






























