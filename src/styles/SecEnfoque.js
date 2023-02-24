import styled from "styled-components";



export const ContEnfoque = styled.div`
    width: 100%;
    height: 45vw;
    /* min-height: 600px; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* border:2px solid red;//.................. */
    @media (max-width:890px) {
        height: 85vh;
    }
    img{
        /* position: absolute; */
        width: 100%;
        /* height: 100%; */
        object-fit: cover;
        object-position: center center;
        @media (max-width:890px) {
            height: 100%;
            object-position: 0px center;
        }
        /* border:2px solid red;//.................. */
        /* @media (min-width:1700px) {
            width: 100%;
        }
        @media (max-width:960px) {
            object-position: -150px 10%;
            
        } */
    }
    .contEnfoque1{
        position:absolute;
        width: 90%;
        margin:0 auto;
        height: auto;
        display: flex;
        /* border:2px solid red;//.................. */
        @media (max-width:1160px) {
            flex-direction:column;
        }
        .contEnfoque2{
            /* border:2px solid blue;//.................. */
            width: 33%;
            @media (max-width:1160px) {
                /* display: flex; */
                width: 100%;
                text-align: center;
            }
            .title{
                font-size: 4vw;
                font-weight: 900;
            }
            .subTitle{
                font-size:2.7vw;
                font-weight: 900;
                margin: 3rem 0;
            }
        }
        
    }
`
export const BtnEnfoque1 = styled.div`
    padding: 1rem 0;
    @media (max-width:1160px) {
        display: none;
    }
    a{
        text-decoration: none;
        padding: 1rem 6rem;
        background-color: var(--color4);
        font-size: 26px;
        font-weight: 900;
        color:var(--color5);
        border-radius: .7em;
        &:hover{
        color: var(--color1);
        }
        &:active{
        background-color: var(--color7);
        }
    }
`
export const BtnEnfoque2 = styled(BtnEnfoque1)`
    text-align: center;
    display: none;
    @media (max-width:1160px) {
        display: block;
        padding:2em 0;
    }
`
export const ContEnfoque3 = styled.div`
            width: 66%;
            /* border:2px solid green;//.................. */
            @media (max-width:1160px) {
                width: 100%;
            }
            .ContParr{
                font-size: 1.5rem;
                line-height: 1.4em;
                @media (max-width:1160px) {
                    display:none;
                }
            }
            
            .contEnfoque5{
                /* border:2px solid red;//.................. */
                display: flex;  
                justify-content: space-between;
                @media (max-width:890px) {
                    flex-direction: column;
                }
                .cardsEnfoque{
                    /* border:2px solid red;//.................. */
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    align-items:center;
                    height: 16vw;
                    @media (max-width:1160px) {
                        justify-content: flex-start;
                    }
                    span{
                        font-size: 6vw;
                        font-weight: 900;
                    }
                    svg{
                        font-size: 6vw;
                    }
                    .cardText1{
                        font-size: 2em;
                        font-weight: 900;
                    }
                    .cardText2{
                        font-size: 2em;
                        font-weight: 700;
                        padding: .2em .5em;
                        border-radius: 13px;
                        border: 2px solid var(--color4);
                        /* border:2px solid red;//.................. */
                        color: var(--color4);
                        text-decoration: none;
                        &:hover{
                            background-color:var(--color1);
                        }
                    }
                    .cardText3{
                        font-size: 3em;
                        font-weight: 900;
                    }
                }
            }
`










