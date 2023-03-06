import styled from "styled-components";

export const ContCardPol = styled.div`
    /* border: 1px solid red;//............... */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.7vw;
    width: 100%;
    margin: auto;
    padding: 2vw;
    @media (max-width:1270px) {
        width: 80%;
    }
    @media (max-width:618px) {
        width: 100%;
        padding: 2em .5em;
    }
`
export const CardPol = styled.div`
    /* border: 1px solid red;//............... */
    width: clamp(152px, 16vw, 285px);
    height: auto;
    padding: 1em;
    border-radius: 30px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: var(--color5);
    -webkit-box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2); 
    box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2);
    .text_img_poli{
        svg{
            /* border: 1px solid red;//............... */
            font-size: clamp(56px, 5.3vw, 76px);
            @media (min-width:1400px) {
                margin-bottom: 1vw;
            }
        }
    }
    .text_card_poli{
        /* border: 1px solid blue;//............... */
        p{
            text-align: center;
            font-size: clamp(13px, 1vw, 16px);
        }
    }

`




















