import styled from "styled-components";

export const ContPilares1 = styled.div`
    /* border: 1px solid blue;//..................... */
    padding: 1.8rem;
    background-color: var(--color2);
    @media (max-width:1270px) {
        width: 80%;
        margin: auto;
    }
    @media (max-width:990px) {
        width: 100%;
    }
    @media (max-width:550px) {
        padding: 0;
    }
    .titleP{
        font-size: clamp(25px, 3.3vw, 57px);
        font-weight: 900;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Cards01 = styled.div`
    /* border: 1px solid red;//..................... */
    width: clamp(312px, 25vw, 500px);
    height: auto;
    border-radius: 1.5rem;
    text-align: center;
    padding: 1.3em;
    -webkit-box-shadow: 2px 2px 7px 3px rgba(0,0,0,0.33); 
    box-shadow: 2px 2px 7px 3px rgba(0,0,0,0.33);
    background-color: var(--color5);
    @media (max-width:990px) {
        display: none;
    }
    @media (max-width:1685px) {
        /* width: 95%!important; */
        /* height: 484px; */
        margin: 20px;
    }
    img{
        border-radius: 50%;
        width: clamp(150px, 11vw, 200px);
        height: auto;
        border: 10px solid var(--color1);
    }
    .title_p01{
        font-size: 1.5em;
        font-weight: 900;
        margin: 1rem 0;
    }
    .paragraph_p01{
        /* border: 1px solid red;//.................. */
        font-size: clamp(14px, 1.1vw, 20px);
        text-align: left;
    }
`
export const Contcards1 = styled.div`
    /* border: 1px solid red;//................. */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    background-color: var(--color2);
`
export const ContCards2 = styled.div`
    /* border: 1px solid red;//.................... */
    background-color: var(--color2);
    @media (max-width:740px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2em;
    }
`
export const Cards02 = styled.div`
    /* border: 1px solid blue;//.................... */
    display: flex;
    background-color: var(--color2);
    margin: 3rem 0;
    @media (max-width:740px) {
        margin:0;
        width: 390px;
        height: 482px;
        flex-direction: column;
    }
    @media (max-width:450px) {
        width: 100%;
        margin-bottom: 16px;
    }
    &:nth-child(odd){
        flex-direction: row-reverse;
        @media (max-width:740px) {
        flex-direction: column;
        }
    }
`
export const ConImgP = styled.div`
    /* border: 1px solid blue;//.................... */
    width: 39rem;
    height: 25rem;
    overflow: hidden;
    @media (max-width:740px) {
            width: 100%;
            height: 50%;
        }
    img{
        /* width: 100%; */
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
`
export const ConParagraphP =styled.div`
    width: 37rem;
    height: 25rem;
    text-align: justify;
    padding: 2.7vw;
    @media (max-width:740px) {
            width: 100%;
            height: 50%;
    }
    @media (max-width:450px) {
        padding: 1.5em;
        text-align: center;
        height: auto;
    }
    .title_p02{
        font-size: clamp(30px, 2.5vw, 57px);
        font-weight:900;
    }
    .paragraph_p02{
        font-size: clamp(14px, 2.5vw, 23px);
        text-align: left;

    }
`






