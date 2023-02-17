import Slider from "react-slick";
import styled from "styled-components";





export const ContImgCarousel = styled(Slider)`
    top: 100px;
    width: 100%;
    height: 500px;
    min-height: 150px;
    margin-bottom: 1rem;
    div{
        height: 400px;
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
            height: 200px;
            top :20%;
            margin-left: .5%;
            width: 450px;
            @media (min-width:1440px) {
                top :15%;
                }
            h2{
                font-size: 65px;
            }
            p{
                transition: 3s;
                font-size: 1.5rem;
                @media (min-width:1445px) {
                    font-size: 1vw;
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
    }
`






























