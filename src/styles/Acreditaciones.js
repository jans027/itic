import styled from "styled-components";


export const ConTitleAcred = styled.div`
    /* border: 1px solid red;//....................... */
    text-align: center;
    padding: 2.4rem 3.5rem 0 3.5rem;
`
export const TitleAcred = styled.div`
    font-size: 3.5rem;
    font-weight: 900;
`
export const ContCardsAcred = styled.div`
    /* border: 1px solid red;//....................... */
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    

`
export const CardAcredt = styled.div`
    /* border: 1px solid red;//....................... */
    width: 23.5rem!important;
    margin: 3.2rem;
    min-width: 200px;
    height: 31rem;
    border-radius: 30px;
    padding-top: 1.3rem;
    background-color: var(--color5);
    text-align: center;
    -webkit-box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6); 
    box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6);
    span{
        p{
        font-size: 1.3vw;
        line-height: 1.3em;
        text-align: center;
        /* border: 1px solid red;//............... */
        @media(max-width:950px){
            font-size: 14px;
            }
        }
    }
    img{
        width: 85%;
        /* border: 1px solid red;//............... */
    }
    
    a{
        height: 5vw;
        min-height: 40px;
        font-size: 1.5vw;
        font-weight: 700;
        text-decoration:none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color4);
        border-radius: 0 0 30px 30px;
        color: var(--color5);
        transition: 30ms;
        &:hover{
        color: var(--color1);
        }
        &:active{
            background-color: var(--color7);
        }
        @media(max-width:700px){
        font-size: 16px;
        }
    }
    svg{
        font-size: 3vw;
        color: var(--color1);
        margin-left: 1rem;
        @media(max-width:700px){
            font-size: 20px;
        }
    }
`



















