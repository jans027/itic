import styled from "styled-components";


export const ConBtnFloat = styled.div`
    /* width: 100%; */
    position:fixed;
    right: 1px;
    bottom: 20vw;
    cursor: pointer;
    transition: 30ms;
    z-index: 1000;
    /* @media (max-width:850px) {
        right: 100px;
        bottom: 30vw;
    } */
    a{
        padding: .7em 4em .5em .7em;
        border-radius: 5em 0 0 5em;
        background-color: var(--color4);
        float: right;
    }
    img{
        &:hover{
        transform: scale(1.1);
        
        }
        &:active{
            transform: scale(.99);
        }
    }
    
`









