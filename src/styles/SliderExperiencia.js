import styled from "styled-components";







export const CardExperi1 = styled.div`
    margin-bottom: 4em;
    width: 25vw!important;
    height: auto;
    border-radius: 30px;
    padding-top: 1.3rem;
    -webkit-box-shadow: 9px 16px 36px -1px rgba(0,0,0,0.6); 
    box-shadow: 9px 16px 36px -1px rgba(0,0,0,0.6);
    background-color: var(--color5);
    @media (max-width:850px) {
        width: 300px!important;
        
    }
`

export  const ConCardExperiencia = styled.div`


    border-radius: 30px;
    height: 100%;
    div{
        overflow: hidden;
        margin-top: -1.5rem;
        border-radius: 30px;
        img{
            width: 100%;
            object-fit: cover;
            object-position: center center;
        }
        
    }
    .cardTitle{
        p{
            font-weight:900;
            padding: 1em 0 0 0;
            font-size: 1.6vw;
        }
    }
    .cardText{
        padding: 1em;
        p{
            font-weight:10px;
            font-size: 1.5em;
            padding: 0 .6em;
        }
    }
`





















