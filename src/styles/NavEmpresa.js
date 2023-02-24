import styled from "styled-components";

export const BannerPath = styled.div`
    /* border: 1px solid red;//......................... */
    height: 340px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        object-fit: cover;
        object-position: center center;
    }
    h2{
        width: 90%;
        font-size: 5rem;
        font-weight: 900;
        margin:0 auto;
        height: auto;
        position:absolute;
        margin-top: 1.7em;
        @media (max-width:500px) {
            font-size: 12vw;
        }
        /* border: 1px solid red;//................... */
    }
`
export const ContNavEmpresa = styled.div`
    /* border: 1px solid red;//......................... */
    width: 400px;
    height: 50vw;
    a{
        list-style: none;
        text-decoration: none;
        margin: 2em 0;
        vertical-align: middle;
        div{
            
            color: var(--color4);
            width: 320px;
            height: 67px;
            display: flex;
            align-items: center;
            border-radius: .8em;
            padding: 1em;
            &:hover{
                border: 2px solid var(--color1);
            }
            p{
                font-size: 1.3em;
                font-weight: 600;
            }
        }
    }
`
export const ContPagesEmpresa = styled.div`
    /* border: 1px solid blue;//......................... */
    margin-top: 4em;
    .ContSectionEm{
        display: flex;
        width: 90%;
        margin: auto;
        border: 1px solid blue;//.........................
    }
`
















