import Slider from "react-slick";
import styled from "styled-components";

export const TitleSectionPro = styled.div`
    /* border: 1px solid red;//........................ */
    text-align: center;
    margin: 43px 0 0 0;
    p{
        font-size: 3.5rem;
        font-weight: 900;
    }
`
// stiles slider and arrow
export const ConSliderExp = styled(Slider)`
    /* border: 1px solid blue;//................... */
    width: 100%;
    margin: auto;
    div{
        margin: auto;
    }
`
export const CardsTestimonio = styled.div`
    /* border: 1px solid red;//................... */
    margin-top: 1rem!important;
    margin-bottom: 1rem!important;
    width: 24.2vw;
    height: auto;
    padding: 2vw;
    border-radius: 30px;
    background-color: var(--color5);
    -webkit-box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2); 
    box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2);
    .ContCarExp1{
        /* border: 1px solid blue;//............ */
        display: flex;
        .ConImgCard{
            width: 94px;
            height: 110px;
            border: 1px solid black;
        }
        .cardTitle1{
            width: 70%;
            padding: 3rem 0 0 1rem;
            /* border: 1px solid red;//............... */
            
            p{
                text-align: left;
                line-height: 1.3vw;
                &:nth-child(1){
                    font-size: 20px;
                    font-weight: 600;
                }
            }
        }
    }
    .ContCarExp2{
        /* border: 1px solid black;//............ */
        text-align: left;
        padding-top: 2rem;
        p{
            font-size: 16px;
        }
    }
`
export const  CardProyect = styled.div`
    /* border: 1px solid red;//.................... */
    background-color: var(--color5);
    display: flex;
    justify-content: space-around;
    padding: 40px 20px;
    border-radius: 47px;
    margin-bottom: 30px;
    .ConImgCardP{
        width: 20vw;
        height: 280px;
        border: 1px solid black;
    }
    .ContTextP{
        width: 33.2vw;
        /* border: 1px solid red;//.................... */
        p{
            padding: 1.2rem;
            font-size: 1vw;
            &:nth-child(1){
                font-size: 1.6vw;
                font-weight: 600;
                margin-bottom: 2rem;
            }
        }
        
    }
`
export const ContCardProyect = styled.div`
    /* border: 1px solid red;//.................... */
    width: 88%;
    margin: auto;
`


















