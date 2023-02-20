import styled from "styled-components";


export const ConBtnFloat = styled.div`
    width: 100%;
    position: fixed;
    top: 55vh;
    cursor: pointer;
    transition: 30ms;
    z-index: 1000;
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









