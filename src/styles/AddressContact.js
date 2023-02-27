import styled from "styled-components";


export const ContAddress = styled.address `
    background-color: var(--color1);
    height: 6.3vw;
    display: flex;
    justify-content: center;
    padding: 1.4em;
    div{
        display: flex;
        font-size: 1.8vw;
        font-weight:500;
        height: min-content;
        /* border: 1px solid red;//............. */
        font-style: normal;
        margin-right: 1.5em;
        svg{
            font-size: 1.8vw;
            margin-top: .2em;
        }
        p{
            font-size: 1.8vw;
        }
    }
`
export const ContMap = styled.div `
    /* border: 5px solid red;//................... */
    width: 100%;
    height: 30vw;
    #containerIframe{
        width: 100%;
        height: 30vw;
        border: 5px solid red;//...................
    }
`
