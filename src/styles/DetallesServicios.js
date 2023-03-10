import styled from "styled-components";

export const ContNavigationPc = styled.div`
    /* border: 1px solid red;//.................. */
    width: 29rem;
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
            width: 24.8rem;
            height: 67px;
            display: flex;
            align-items: center;
            border-radius: .8em;
            padding: 1em;
            &:hover{
                /* border: 2px solid var(--color1); */
            }
            p{
                font-size: 1.5em;
                font-weight: 600;
            }
        }
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
    @media (max-width:450px) {
        display: block;
    }
`
export const TitleSection = styled.h1`
    /* border: 1px solid red;//.................. */
    width: 82%;
    margin: auto;
    font-size: 57px;
    font-weight: 900;
    padding: 45px 0;
`
export const ParagraphSection = styled.p`
    /* border: 1px solid red;//.................. */
    width: 82%;
    margin: auto;
    font-size: 23px;
`
export const ButtonSection = styled.div`
    /* border: 1px solid red;//.................. */
    width: 82%;
    margin: auto;
    padding: 45px 0;
    div{
        margin: auto;
        width: 490px;
        height: 74px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 1em;
        font-size: 30px;
        font-weight: 800;
        background-color: var(--color4);
        color: var(--color5);
        &:hover{
            background-color: var(--color1);
            color: var(--color4);
        }
    }
`














