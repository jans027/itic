import styled from "styled-components";

export const ContNavigationPc = styled.div`
    /* border: 1px solid red;//.................. */
    max-width: 300px;
    width: 26%;
    height: fit-content;
    @media (max-width:1270px) {
        display: none;
    }
    a{
        list-style: none;
        text-decoration: none;
        margin: 2em 0;
        vertical-align: middle;
        div{
            color: var(--color4);
            width: 100%;
            height: 67px;
            display: flex;
            align-items: center;
            border-radius: .8em;
            padding: 1em;
            p{
                font-size: 1.1em;
                font-weight: 800;
            }
        }
    }
`
export const ContCardDeta = styled.div`
    /* border: 1px solid red;//..................... */
`
export const CardDetalles = styled.div`
    /* border: 1px solid red;//..................... */
    display: flex;
    flex-direction: column;
    @media (max-width:1270px) {
        margin: auto;
        max-width: 900px;
        width: 80%;
        margin-top: 3.6em;
    }
    @media (max-width:650px) {
        max-width: 485px;
        width: 100%;
        margin: auto;
        margin-top: 1.6em;
        flex-direction: column-reverse;
    }
`
export const ContImgPc = styled.div`
    /* border: 1px solid red;//.................. */
    height: 250px;
    overflow: hidden;
    @media (max-width:450px) {
        display: none;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
`
export const ContImgMobile = styled.div`
    /* border: 1px solid red;//.................. */
    display: none;
    img{
        width: 100%;
    }
    @media (max-width:450px) {
        display: block;
    }
`
export const TitleSection = styled.h1`
    /* border: 1px solid red;//.................. */
    width: 82%;
    margin: auto;
    font-size: clamp(25px,3vw, 57px);
    font-weight: 900;
    padding: 2.2vw 0;
`
export const ParagraphSection = styled.p`
    /* border: 1px solid red;//.................. */
    width: 82%;
    margin: auto;
    font-size: clamp(17px, 1.5vw, 25px);
`
export const ButtonSection = styled.div`
    /* border: 1px solid red;//.................. */
    width: 82%;
    margin: auto;
    padding: 2.8em 0;
    div{
        margin: auto;
        max-width: 490px;
        width: 70%;
        height: max-content;
        padding: .5em;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 1em;
        font-size: clamp(17px, 1.5vw, 30px);
        font-weight: 800;
        background-color: var(--color4);
        color: var(--color5);
        &:hover{
            background-color: var(--color1);
            color: var(--color4);
        }
    }
`














