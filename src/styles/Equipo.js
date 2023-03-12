import styled from "styled-components";

export const ContCardCEO = styled.div`
    /* border: 1px solid red;//................. */
    width: 100%;
    height: auto;
    height: auto;
    padding: 2em 0;
    background-color:var(--color1);
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    @media (min-width: 786px) and (max-width: 945px) {
            padding-bottom: 4.4rem;
        }
    
    .ContainerCardC{
        /* border: 1px solid red;//................. */
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 935px;
        width: 92%;
        padding: 1em;
        @media (max-width:1270px) {
            width: 85%;
        }
        @media (max-width:785px) {
            width: 100%;
        }

    }
`
export const ContImgCeo = styled.div`
    float: left;
    padding:  0 1em 1em 0;
    img{
        /* border: 1px solid red;//................. */
        border-radius: 50%;
        width: clamp(198px, 20vw, 370px);
        height:clamp(198px, 20vw, 370px);
    }

`
export const ContInfoCeo = styled.div`
    /* border: 1px solid blue;//................. */
    @media (max-width:515px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .title_ceo{
        font-size: clamp(25px, 2.4vw, 55px);
        font-weight: 700;
    }
    .sub_title_ceo{
        font-size: clamp(20px, 1vw, 25px);
        font-weight: 700;
        padding-bottom:1em;
    }
    .paragraph{
        /* border: 1px solid blue;//................. */
        font-size: 16px;
        font-weight: 500;
        @media (max-width:1000px) {
            font-size:14px;
        }
    }
`
export const ContCardEmployes = styled.div`
    /* border: 1px solid red;//....................... */
    background: rgb(208,208,208);
    background: linear-gradient(0deg, rgba(208,208,208,1) 87%, rgba(156,255,45,1) 58%);
    .tilte_equipo{
        /* border: 1px solid red;//....................... */
        text-align: center;
        font-size: clamp(25px, 3.1vw, 57px);
        font-weight: 800;
        padding-top: .4rem;
        background-color: var(--color1);
    }
    .ConCardsEm{
        /* border: 1px solid red;//....................... */
        padding: 1.5rem 1em 3.6rem 1em;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2.5em 1.2em;
    }

`
export const CardEmployeeE = styled.div`
    /* border: 1px solid red;//....................... */
    width: auto;
    height: auto;
    background-color: var(--color5);
    border-radius: 2.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5em;
    -webkit-box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6); 
    box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6);
    `
export const ContInfoEmpl = styled.div`
    /* border: 1px solid red;//.......................... */
    width: 250px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        /* border: 1px solid blue;//....................... */
        margin: 1em;
        width: clamp(141px, 14vw, 250px);
        height: clamp(141px, 14vw, 250px);
    }
    .name_Empl{
        font-size:clamp(8px, 1.5vw, 20px);
        font-weight: 800;
    }
    .cargo_empl{
        font-size:clamp(8px, 1vw, 18px);
        text-align: center;
        font-weight: 500;
    }
    svg{
        font-size: 2.1em;
        color: var(--color4);
    }
    .mail_empl{
        font-size: clamp(8px, 1vw, 15px);
        font-weight: 700;
    }
`











