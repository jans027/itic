import { Link } from "react-router-dom";
import styled from "styled-components";




export  const ConCardExperiencia = styled.div`
    /* border: 1px solid red;//.................. */
    border-radius: 30px;
    height: 100%;
    margin-bottom: 1.5rem;
    span{
        img{
            border-radius: 30px;
            margin-top: -1.5rem;
        }
    }
    .cardTitle{
        p{
            font-weight:900;
            padding: 1em 0;
        }
    }
    .cardText{
        padding: 1em;
        p{
            font-weight:10px;
            padding: 0 1em;
            /* border: 1px solid red;//.................. */
        }
    }
`

export const LinkExperiencia = styled.span`
        
        a{
        padding: .5vw 2vw;
        font-size: 20px;
        text-decoration: none;
        font-weight: 600;
        color: var(--color5);
        background-color:var(--color4);
        border: 2px solid var(--color4);
        border-radius: 1rem;
        /* @media(max-width:1200px){
                position: relative;
                top: 0px;
        } */
        &:hover{
            color: var(--color1);
        }
        &:active{
            background-color: var(--color7);
            text-decoration: none;
        }
        }

`




















