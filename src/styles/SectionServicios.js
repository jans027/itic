import { Link } from "react-router-dom";
import styled from "styled-components";


export const ConSectionServicios = styled.div` 
    margin-top: 2rem;
    background-color: var(--color2);
    text-align: center;
    margin: 2rem 0;
    height: max-content;
    padding: 2rem 0;
    h1{
        font-size: 47px;
        font-weight: 900;
        padding:1rem 0;
    }
`
export const ContCardsServi = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 30px 0;
`
export const CardServicios = styled.div`
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    transition: 30ms;
    /* border: 1px solid red;//.................. */
    @media(max-width:800px){
        width: 50%;
    }
    div{
        img{
            border-radius:50%;
            border: 9px solid var(--color1);
            width: 17vw;
            min-width:140px;
        }
    }
`
export const EnlaceImg = styled(Link)`
    img{
        transition: 80ms;
        &:hover{
            transform: scale(1.1);
        }
        &:active{
            transform: scale(1);
        }
    }
`
export const ContTextCard =styled.div`
    width: 75%;
    margin: auto; 
    padding-bottom: 2em;
    /* border: 1px solid blue;//............ */
    h4{
        font-size: 1.5em;
    }
    p{
        font-size: 1.2em;
        line-height: 26px;
    }
    @media (max-width:1200px) {
        p{
            display: none;
        }
        h4{
            font-size: 15px;
        }
    }
`

export const EnlaceBtnS = styled(Link)`
            margin: 10px 0;
            padding: .5rem 2rem;
            font-size: 20px;
            top: 50px;
            text-decoration: none;
            font-weight: 600;
            color: var(--color5);
            background-color:var(--color4);
            border: 2px solid var(--color4);
            border-radius: 1rem;
            &:hover{
                color: var(--color1);
            }
            &:active{
                font-size: 19px;
            }
            /* @media(max-width:850px){
                font-size: 14px ;
            } */
`