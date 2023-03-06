import styled from "styled-components";

export const ContCardCEO = styled.div`
    /* border: 1px solid red;//................. */
    width: 100%;
    height: auto;
    padding: 2em 0;
    background-color:var(--color1);
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    
    .ContainerCardC{
        /* border: 1px solid red;//................. */
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        align-items: center;
        width: 90%;
        @media (max-width:1610px) {
            justify-content: space-between;
        }
        @media (max-width:1270px) {
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
    width: clamp(164px, 19vw, 380px);
    height:clamp(198px, 30vw, 590px);
    border-radius: 3rem;
    background-color: white;

`
export const ContInfoCeo = styled.div`
    /* border: 1px solid blue;//................. */
    width: clamp(164px, 32vw, 576px);
    height:clamp(198px, 30vw, 590px);
    @media (max-width:1279px) {
        width:75%;
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
        font-size: clamp(13px, 1.2vw, 23px);
        margin: 1rem 0;
        font-weight: 500;
        @media (max-width:918px) {
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
        padding: 1.5rem 0 3.6rem 0;
        /* border: 1px solid red;//....................... */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2.5em 1.2em;
        @media (max-width:1270px) {
            width:60%;
            margin: auto;
        }
        @media (max-width:950px) {
            width:80%;
        }
        @media (max-width:766px) {
            width:100%;
        }
    }

`
export const CardEmployeeE = styled.div`
    /* border: 1px solid red;//....................... */
    width: clamp(141px, 16vw, 300px);
    height: clamp(256px, 25vw, 458px);
    background-color: var(--color5);
    border-radius: 2.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5em 0 1em 0;
    -webkit-box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6); 
    box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6);

    .ConImgEmp{
        width: 80%;
        height: 85%;
        background-color: var(--color3);
    }
    .contInfo_0{
        /* border: 1px solid blue;//....................... */
        width: 82%;
        height: 30%;
        text-align: center;
        margin: 7px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .contInfo_1{
            /* border: 1px solid red;//....................... */
            height: 5em;
            .name_Empl{
                font-size:clamp(8px, 1vw, 20px);
                font-weight: 800;
            }
            .cargo_empl{
                font-size:clamp(8px, 1vw, 18px);
                font-weight: 500;
            }
        }
        .contInfo_2{
            /* border: 1px solid red;//....................... */
            svg{
                font-size: 2.1em;
                color: var(--color4);
            }
            .mail_empl{
                font-size: clamp(8px, 1vw, 18px);
                font-weight: 700;
            }
        }
    }
    
`












