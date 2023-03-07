import styled from "styled-components";


export const ContGestionNumber1 = styled.div`
    /* border: 2px solid green;//.................... */
    background-color: var(--color2);
    height: max-content;
    padding: 5em;
    @media (max-width:800px) {
        padding: 1em;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
    div{
    /* border: 2px solid green;//.................... */
    width: clamp(225px, 17vw, 384px);
    height: clamp(225px, 17vw, 384px);
    overflow: hidden;
    margin: 0 1.8em 0 1.4em;
    float: right;
    @media (max-width:800px) {
        float: none;
    }
    img{
        height: 100%;
        object-fit: cover;
        object-position: center center;
        border-radius: 50%;
        
        }

    }
    .title_section{
        font-size: 3.7vw;
        font-weight: 900;
        line-height: 1.1em;
        margin-bottom: .5em;
        @media (max-width:1270px) {
            display: none;
        }
    }
    .paragraph_section{
        width:100%;
        font-size: clamp(14px, 1.3vw, 25px);
        margin-bottom: .8em;
        @media (max-width:800px) {
                margin-top: 16px;
            }
    }
`








