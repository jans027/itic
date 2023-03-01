import Slider from "react-slick";
import styled from "styled-components";

export const ConSliderExp = styled(Slider)`
    .global-card-slider{
        width: clamp(275px, 25vw, 25vw)!important;
    }
`
export const CardExperi1 = styled.div`
    /* border: 1px solid red;//...................... */
    margin-bottom: 4em;
    height: auto;
    border-radius: 30px;
    padding-top: 1.3rem;
    /* background-color: var(--color5); */
    /* -webkit-box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2); 
    box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2); */
    @media (max-width:850px) {
        width: 300px!important;
        
    }
`
export  const ConCardExperiencia = styled.div`
    border-radius: 30px;
    width: 100%!important;
    height: 100%;
    div{
        /* border: 1px solid red;//...................... */
        overflow: hidden;
        margin-top: -1.5rem;
        border-radius: 30px 30px 0 0;
        img{
            width: 100%;
            object-fit: cover;
            object-position: center center;
        }
        
    }
    .cardTitle{
        p{
            font-weight:900;
            padding: 1em 0 0 0;
            font-size: clamp(16px, 1.6vw, 1.6vw);
        }
    }
    .cardText{
        padding: 1em;
        p{
            font-weight:10px;
            font-size: clamp(14px, 1.6vw, 25px);
            padding: 0 .6em;
        }
    }
`






















