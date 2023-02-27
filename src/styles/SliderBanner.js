import Slider from "react-slick";
import styled from "styled-components";





export const ContImgCarousel = styled(Slider)`
    /* border: 1px solid red;//................. */
    top: 100px;
    width: 100%;
    height: 38rem;
    margin-bottom: 10rem;
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
        img{
            width: 100%;
            height: max-content;
            object-fit:cover;
            object-position: center center;
            @media(max-width:768px){
            height: 500px;
        }
        }
        span{
            /* border: 1px solid blue;//............ */
            position: fixed;
            width: 34rem;
            height: 26rem;
            top :20%;
            margin-left: .5%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (min-width:1440px) {
                top :15%;
            }
            @media(max-width:650px){
                top :35%;
                    
            }
            h2{
                font-size: 5.1rem;
                font-weight: 900;
                @media(max-width:650px){
                    font-size: 45px;
                }
            }
            .textCarrousel{
                width: 537px;
                /* height: 500px; */
                /* border: 1px solid red;//............ */
                transition: 3s;
                font-size: 1.8rem;
                @media (min-width:1445px) {
                    font-size: 1vw;
                }
                @media(max-width:650px){
                    display: none;
                    
                }
                
            }
            a{
                text-decoration:none;
                div{
                    margin-top: 100px;
                    height: 4.6rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color:var(--color4);
                    border-radius: .7em;
                    color: var(--color5);
                    font-size: 1.9rem;
                    font-weight: 700;
                    border: 1px solid var(--color4);
                    @media(max-width:650px){
                        font-size: 15px;
                        /* padding:  10px 40px; */
                    }
                    &:hover{
                        color: var(--color1);
                    }
                    &:active{
                        background-color: var(--color7);
                    }
                }
            }
        }
    }
`




























