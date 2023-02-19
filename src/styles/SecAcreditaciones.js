import styled from "styled-components";


export const CardAcred = styled.div`
    /* border: 1px solid red;//................ */
    margin: 1em 0;
    width: 20vw!important;
    min-width: 200px;
    height: auto;
    border-radius: 30px;
    padding-top: 1.3rem;
    -webkit-box-shadow: 9px 16px 36px -1px rgba(0,0,0,0.6); 
    box-shadow: 9px 16px 36px -1px rgba(0,0,0,0.6);
    background-color: var(--color5);
    span{
        p{
        font-size: 1.3vw;
        line-height: 1.3em;
        /* border: 1px solid red;//............... */
        @media(max-width:950px){
            font-size: 14px;
            }
        }
    }
    img{
        width: 100%;
    }
    
    a{
        height: 5vw;
        min-height: 40px;
        font-size: 1.5vw;
        font-weight: 700;
        text-decoration:none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color4);
        border-radius: 0 0 30px 30px;
        color: var(--color5);
        transition: 30ms;
        &:hover{
        color: var(--color1);
        }
        &:active{
            background-color: var(--color7);
        }
        @media(max-width:700px){
        font-size: 16px;
        }
    }
    svg{
        font-size: 3vw;
        color: var(--color1);
        margin-left: 1rem;
        @media(max-width:700px){
            font-size: 20px;
        }
    }
`

export const TitleSection = styled.h1`
        font-size: 47px;
        font-weight: 900;
        padding:1rem 0 1rem 0;
        @media(max-width:490px){
            font-size: 9vw;
            width: 90%;
            margin: auto;
        }
` 
export const SubTitleSection = styled.p`
    font-size: 2rem;
    padding: 1rem 0 3rem 0;
    font-weight: 300;
    span{
        font-size: 2.2rem;
    }
    @media(max-width:1130px){
        width: 90%;
        margin: auto;
    }
    @media(max-width:600px){
        font-size: 16px;
        span{
            font-size: 1.5rem;
        }
    }
`

// stiles slider and arrow
export const ContSliderAcr = styled.div`
    /* border: 1px solid red;//................ */
    padding:1rem 0;
    margin-bottom: 25px;
    .slick-slider{
        margin: auto;
    }
    .slick-prev, .slick-next{
        width: 40px!important;
        height: 100%;
        font-size: 10px!important;
    }
    .slick-prev::before, .slick-next::before{
        color: var(--color1)!important;
        font-size: 50px!important;
    }
    .slick-prev{
        left: -1px;
        z-index: 1;
        @media(min-width:830px){
            left: 25px;
        }
    }
    .slick-next{
        right: 10px;
        z-index: 1;
        @media(min-width:830px){
            right: 31px;
        }
    }
`















