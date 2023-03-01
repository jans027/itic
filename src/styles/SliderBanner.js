import Slider from "react-slick";
import styled from "styled-components";





export const ContImgCarousel = styled(Slider)`
    /* border: 2px solid red;//................. */
    top: 100px;
    width: 100%;
    height: 38rem;
    margin-bottom: 8em;
    @media (max-width:1160px) {
        top: 80px;
        margin-bottom: 68px;
    }
    @media (max-width:641px) {
        height: 400px;
    }
    
    .slick-arrow{
        border: 1px solid red;
        display: none!important;
    }
    div{
        width: 100%;
        height:38rem;
        overflow: hidden;
        position: static;
        /* border: 1px solid red;//............... */
        @media(max-width:768px){
            height: 500px;
        }
        @media (max-width:641px) {
        height: 360px;
        }
        img{
            width: 100%;
            height: max-content;
            object-fit:cover;
            object-position: center center;
            @media(max-width:768px){
            height: 500px;
            }
        }
        
    }
`
export const ContTextBanner = styled.span`
    /* border: 1px solid blue;//............ */
    position: fixed;
    /* width: 4.5%; */
    top :20%;
    height: fit-content;
    margin-left: .5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width:1440px) {
        top :15%;
    }
    h2{
        font-size: 4.6vw;
        font-weight: 900;
        @media(max-width:650px){
            font-size: 35px;
        }
    }
    .textCarrousel{
        width: 537px;
        /* border: 1px solid red;//............ */
        font-size: 1.5rem;
        margin: 1rem 0;
        @media(max-width:650px){
            font-size: 13.7px;
            width:250px;
            
        }
        
    }
    a{
        text-decoration:none;
        .Btn-Banner1{
            display: flex;
            width: 80%;
            height: 4.6rem;
            justify-content: center;
            align-items: center;
            /* border: 1px solid blue;//............ */
            background-color:var(--color4); 
            border-radius: .7em;
            color: var(--color5);
            font-size: 1.9rem;
            font-weight: 700;
            border: 1px solid var(--color4);
            @media(max-width:850px){
                font-size: 15px;
                width: 100%;
                height: 1.8rem;
                border-radius: 1em;
            }
            &:hover{
                color: var(--color1);
            }
            &:active{
                background-color: var(--color7);
            }
        }
    }
`



























