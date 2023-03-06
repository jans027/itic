import styled from "styled-components";

export const TitleSectionPro = styled.div`
    /* border: 1px solid red;//........................ */
    text-align: center;
    margin: 43px 0 0 0;
    @media (max-width:1270px) {
        display: none;
    }
    p{
        font-size: 3.1vw;
        font-weight: 900;
    }
`
export const ContCardProyect = styled.div`
    /* border: 1px solid red;//.................... */
    width: 88%;
    margin: auto;
    .Cont_slider_proyects{
        display: none;
        @media (max-width:890px) {
            display: block;
        }
    }
    @media (max-width:1270px) {
        width:75%
    }
    @media (max-width:1060px) {
        width:80%
    }
    @media (max-width:890px) {
        width:100%
    }
`
export const  CardProyect = styled.div`
    /* border: 1px solid red;//.................... */
    background-color: var(--color5);
    display: flex;
    padding: 2em;
    justify-content:center;
    border-radius: 47px;
    margin-bottom: 30px;
    @media (max-width:890px) {
        display: none;
    }
    .Cont_card_Proyecto{
        /* border: 1px solid red;//.................... */
        display: flex;
        width: 100%;
        .ConImgCardP{
        width: 40%;
        height: 280px;
        border: 1px solid black;
    }
    .ContTextP{
        width: 66%;
        /* border: 1px solid red;//.................... */
        .text_card_1{
            padding: 1.2rem;
            font-size: 1.8em;
            font-weight: 600;
        }
        .text_card_2{
            /* border: 1px solid red;//.................... */
            padding-left: 1.2rem;
            font-size: 18px;
        }
        
    }
    }
    
`



















