import styled from "styled-components";

export const ContPilares1 = styled.div`
    /* border: 1px solid blue;//..................... */
    padding: 1.8rem;
    background-color: var(--color2);
    .titleP{
        font-size: 3.5rem;
        font-weight: 900;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Cards01 = styled.div`
    /* border: 1px solid red;//..................... */
    width: 35rem;
    height: 34rem;
    border-radius: 1.8rem;
    text-align: center;
    padding: 1.8rem 2.5rem 0 2.5rem;
    -webkit-box-shadow: 2px 2px 7px 3px rgba(0,0,0,0.33); 
    box-shadow: 2px 2px 7px 3px rgba(0,0,0,0.33);
    background-color: var(--color5);
    img{
        border-radius: 50%;
        width: 12.5rem;
        height: auto;
        border: 10px solid var(--color1);
    }
    .title_p01{
        font-size: 1.5rem;
        font-weight: 900;
        margin: 1rem 0;
    }
    .paragraph_p01{
        font-size: 1.2rem;
        text-align: left;
    }
`
export const Contcards1 = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    background-color: var(--color2);
`
export const ContCards2 = styled.div`
    /* border: 1px solid red;//.................... */
    background-color: var(--color2);
`
export const Cards02 = styled.div`
    /* border: 1px solid blue;//.................... */
    display: flex;
    background-color: var(--color2);
    margin: 3rem 0;
    &:nth-child(odd){
        flex-direction: row-reverse;
    }
`
export const ConImgP = styled.div`
    /* border: 1px solid blue;//.................... */
    width: 39rem;
    height: 25rem;
    overflow: hidden;
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
    padding: 3.1rem;

    .title_p02{
        font-size: 3.5rem;
        font-weight:900;
    }
    .paragraph_p02{
        font-size: 1.4rem;

    }
`






