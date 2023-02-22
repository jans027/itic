import styled from "styled-components";



export const ContEnfoque = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        position: absolute;
        width: 100%;
        height: 700px;
    }
    .contEnfoque1{
        position:absolute;
        width: 90%;
        margin:0 auto;
        height: auto;
        display: flex;
        .contEnfoque2{
            /* border:2px solid red;//.................. */
            width: 33%;
            .title{
                font-size: 4vw;
                font-weight: 900;
            }
            .subTitle{
                font-size:2.7vw;
                font-weight: 900;
                margin: 3rem 0;
            }
            div{
                padding: 1rem 0;
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
            }
        }
        .contEnfoque3{
            width: 66%;
            /* border:2px solid red;//.................. */
            p{
                font-size: 1.5rem;
                line-height: 1.4em;
            }
            .contEnfoque5{
                /* border:2px solid red;//.................. */
                display: flex;  
                justify-content: space-between;
                .cardsEnfoque{
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    align-items:center;
                    height: 16vw;
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
                    }
                    .cardText3{
                        font-size: 3em;
                        font-weight: 900;
                    }
                }
            }
        }
    }
`












