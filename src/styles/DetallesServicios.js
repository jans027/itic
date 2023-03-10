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
                border: 2px solid var(--color1);
            }
            p{
                font-size: 1.5em;
                font-weight: 600;
            }
        }
    }
`

















