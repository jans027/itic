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
        flex-direction:row;
        justify-content: space-between;
        align-items: center;
        width: 92%;
        @media (max-width:1610px) {
            justify-content: space-between;
        }
        @media (max-width:1270px) {
            justify-content: space-around;
            width: 85%;
        }
        
        @media (max-width:785px) {
            width: 100%;
            flex-direction:column;
        }

    }
`
export const ContImgCeo = styled.div`
    /* border: 1px solid red;//................. */
    width: clamp(164px, 18vw, 360px);
    height:clamp(198px, 28vw, 570px);
    border-radius: 3rem;
    background-color: white;

`
export const ContInfoCeo = styled.div`
    /* border: 1px solid blue;//................. */
    width: clamp(164px, 32vw, 576px);
    height:clamp(198px, 30vw, 590px);
    @media (max-width:1279px) {
        width:70%;
        padding-left:10px;
    }
    @media (max-width:918px) {
        width:72%;
    }
    @media (max-width:785px) {
        width:89%;
        height:auto;
    }
    .title_ceo{
        font-size: clamp(25px, 3.1vw, 55px);
        font-weight: 700;
    }
    .sub_title_ceo{
        font-size: clamp(20px, 1.1vw, 25px);
        font-weight: 700;
    }
    .paragraph{
        /* border: 1px solid blue;//................. */
        font-size: clamp(13px, 1vw, 22px);
        margin: 1rem 0;
        font-weight: 500;
        @media (max-width:1000px) {
            margin: .8em 0;
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
        width: clamp(141px, 14vw, 250px);
        height: clamp(141px, 14vw, 250px);
    }
    .name_Empl{
        font-size:clamp(8px, 1vw, 20px);
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











