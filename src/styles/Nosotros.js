import styled from "styled-components";



export const ConNosotros = styled.div`
    /* border: 2px solid green;//.................... */
    width: 72%;
    background-color: var(--color2);
    margin-bottom: 4.1rem;
`
export const ContNumber1 = styled.div`
    /* border: 2px solid green;//.................... */
    background-color: var(--color2);
    height: max-content;
    padding: 5em;
    div{
    width: 21.8rem;
    height: 21.8rem;
    overflow: hidden;
    margin: 0 1.8em 0 1.4em;
    float: right;
    img{
        height: 100%;
        object-fit: cover;
        object-position: center center;
        border-radius: 50%;
        }
    }
    .title_section{
        font-size: 4.1rem;
        font-weight: 900;
        line-height: 1.1em;
        margin-bottom: .5em;
    }
    .paragraph_section{
        font-size: 1.3rem;
        margin-bottom: .8em;
    }
`
export const TitleSection = styled.div`
    /* border: 2px solid green;//.................... */
    text-align:center;
    background-color: var(--color2);
    p{
        font-size: 3.5rem;
        font-weight: 900;
    }
`
export const ConCards = styled.div`
    /* border: 1px solid red;//.................. */
    background-color: var(--color2);
    padding: 1.5em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Cards = styled.div`
    /* border: 1px solid blue;//.................. */
    width: 68rem;
    height: 26rem;
    display: flex;
    background-color: var(--color1);
    margin-bottom: 2rem;
    &:nth-child(odd){
        flex-direction: row-reverse;
        background-color: var(--color3);
    }

`
export const ConImg = styled.div`
    /* border: 1px solid red;//................. */
    width: 33rem;
    overflow: hidden;
    img{
        object-fit: cover;
        object-position:center center;
    }
`
export const Paragraph = styled.div`
    /* border: 1px solid blue;//................. */
    width: 35rem;
    padding: 3.3rem 2.4rem;
    .title_card{
        font-size: 2.8rem;
        font-weight: 900;
    }
    .p_card{
        font-size: 1.5rem;
    }
`








