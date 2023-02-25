import styled from "styled-components";


export const ConContacBar = styled.div`
    background-color: var(--color1);
    width: 100%;
    height: 6.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .textTitleBar{
        font-size:1.4rem;
        font-weight: 600;
    }
    a{
        text-decoration: none;
        margin-left: 3.3rem;
        div{
            border: 1px solid var(--color4);
            background-color: var(--color4);
            width:33.5rem;
            height:3.1rem;
            border-radius: 1.6rem;
            display: table-cell;
            text-align: center;
            vertical-align: middle;
            &:active{
                    background-color: var(--color7);
            }
            p{
                font-size: 1.8rem;
                font-weight: 600;
                color: var(--color5);
                &:hover{
                    color: var(--color1);
                }
                
            }
        }
    }
`






















