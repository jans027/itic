import styled from "styled-components";

export const CardExperi1 = styled.div`
    margin-bottom: 4em;
    width: 25vw!important;
    height: auto;
    border-radius: 30px;
    padding-top: 1.3rem;
    background-color: var(--color5);
    -webkit-box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2); 
    box-shadow: 15px 14px 3px -8px rgba(0,0,0,0.2);
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






















