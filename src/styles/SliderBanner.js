import Slider from "react-slick";
import styled from "styled-components";





export const ContImgCarousel = styled(Slider)`
    top: 100px;
    width: 100%;
    height: 500px;
    /* min-height: 150px; */
    margin-bottom: 10rem;
    div{
        width: 100%;
        height: 500px;
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
            position: fixed;
            height: 200px;
            top :20%;
            margin-left: .5%;
            width: 450px;
            @media (min-width:1440px) {
                top :15%;
            }
            @media(max-width:650px){
                top :35%;
                    
            }
            h2{
                font-size: 65px;
                @media(max-width:650px){
                    font-size: 45px;
                }
            }
            .textCarrousel{
                transition: 3s;
                font-size: 1.5rem;
                @media (min-width:1445px) {
                    font-size: 1vw;
                    /* width: 150px; */
                }
                @media(max-width:650px){
                    display: none;
                    
                }
                
            }
            a{
                    margin-top: 100px;
                    padding:  10px 85px;
                    background-color:var(--color4);
                    border-radius: .7em;
                    color: var(--color5);
                    font-size: 20px;
                    font-weight: 700;
                    text-decoration:none;
                    border: 1px solid var(--color4);
                    @media(max-width:650px){
                        font-size: 15px;
                        padding:  10px 40px;
                    }
                    &:hover{
                        color: var(--color1);
                    }
                    &:active{
                        transform:scale(.95);
                        border: none;
                    }
                }
        }
    }
`




























