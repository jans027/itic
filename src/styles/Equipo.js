import styled from "styled-components";

export const ContCardCEO = styled.div`
    border: 1px solid red;//.................
    width: 100%;
    height: 42.9rem;
    background-color:var(--color1);
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    .ContainerCardC{
        border: 1px solid red;//.................
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        align-items: center;
        width: 90%;
        @media (max-width:1610px) {
            justify-content: space-between;
        }
    }
`
export const ContImgCeo = styled.div`
    border: 1px solid red;//.................
    width: clamp(164px, 19vw, 380px);
    height:clamp(198px, 30vw, 590px);
    border-radius: 3rem;
    background-color: white;
    /* margin-right: 1.5rem; */

`
export const ContInfoCeo = styled.div`
    border: 1px solid blue;//.................
    width: clamp(164px, 32vw, 576px);
    height:clamp(198px, 30vw, 590px);
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
        margin: 1.5rem 0;
        font-weight: 500;
        /* line-height: 30px; */
    }
`
export const ContCardEmployes = styled.div`
    /* border: 1px solid red;//....................... */
    .tilte_equipo{
        /* border: 1px solid red;//....................... */
        text-align: center;
        font-size: 3.5rem;
        font-weight: 800;
        padding-top: .4rem;
        background-color: var(--color1);
    }
    .ConCardsEm{
        padding: 1.5rem 0 3.6rem 0;
        /* border: 1px solid red;//....................... */
        display: flex;
        flex-wrap: wrap;
        gap: 40px 20px;
        justify-content: center;
        background: rgb(208,208,208);
        background: linear-gradient(0deg, rgba(208,208,208,1) 87%, rgba(156,255,45,1) 58%);
    }

`
export const CardEmployeeE = styled.div`
    /* border: 1px solid red;//....................... */
    width: 18.7rem;
    height: 30rem;
    background-color: var(--color5);
    border-radius: 2.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2.5rem;
    -webkit-box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6); 
    box-shadow: 5px 10px 20px -1px rgba(0,0,0,0.6);

    .ConImgEmp{
        width: 15.5rem;
        height: 16rem;
        background-color: var(--color3);
    }
    .contInfo_0{
        width: 82%;
        text-align: center;
        /* border: 1px solid blue;//....................... */
        /* height: 7.3rem; */
        margin: 7px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .contInfo_1{
            /* border: 1px solid red;//....................... */
            height: 5rem;
            .name_Empl{
                font-size:1.2rem;
                font-weight: 800;
            }
            .cargo_empl{
                font-size:1rem;
                font-weight: 500;
            }
        }
        .contInfo_2{
            /* border: 1px solid red;//....................... */
            svg{
                font-size: 35px;
                color: var(--color4);
            }
            .mail_empl{
                font-size: 1rem;
                font-weight: 700;
            }
        }
    }
    
`












