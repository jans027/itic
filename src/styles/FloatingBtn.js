import styled from "styled-components";


export const ConBtnFloat = styled.div`
    /* width: 100%; */
    position:fixed;
    right: 0;
    bottom: 20vw;
    cursor: pointer;
    transition: 30ms;
    z-index: 1000;
    /* @media (max-width:850px) {
        right: 100px;
        bottom: 30vw;
    } */
    a{
        padding: .6em 2.5em .5em .6em;
        border-radius: 5em 0 0 5em;
        background-color: var(--color4);
        float: right;
    }
    img{
        width: 4.5em;
        &:hover{
        transform: scale(1.1);
        
        }
        &:active{
            transform: scale(.99);
        }
    }
    
`









