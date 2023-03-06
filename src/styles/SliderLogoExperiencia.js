import Slider from "react-slick";
import styled from "styled-components";


// styles slider and arrow logos
export const ContSlideLogoExp = styled(Slider)`
    /* border: 1px solid red;//.................. */
    width: 90%;
    margin: auto;
    margin-top: 1.2em;
    .slideCont2{
        /* border: 1px solid red;//............... */
        width: 90%;
        height: auto;
        margin: 0 auto;
    }
    .slick-slider{
        margin: auto;
        /* border: 1px solid red;//...............*/
    }
    .slick-prev, .slick-next{
        /* border: 1px solid red;//...............*/
        width: 40px!important;
        height: 100%;
        font-size: 10px!important;
        display: none!important;
    }
    .slick-prev::before, .slick-next::before{
        color: var(--color2)!important;
        font-size: 50px!important;
        opacity: .5;
    }
    .slick-prev{
        left: -20px;
        z-index: 1;
        
    }
    .slick-next{
        right: -20px;
        z-index: 1;
        
    }
`
export const CardLogoExp = styled.div`
    &{
        /* border: 1px solid red;//.................. */
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex!important;
        justify-content: center;
    }
`
export const CardCarouselLogoExp = styled.div`
    /* border: 1px solid red;//..................... */
    width: clamp(66px, 8.3vw, 150px);
    height: clamp(66px, 8.3vw, 150px);
    display: flex!important;
    justify-content: center!important;
    align-items: center!important;
    border-radius:50%;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
`