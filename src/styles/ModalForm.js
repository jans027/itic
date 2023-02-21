import { Dialog } from "@mui/material";
import styled from "styled-components"; 


export const ContModal = styled(Dialog)`
    .MuiPaper-root{
        max-width: 1000px !important;
        min-width: 350px;
        .cont_close{
            display: flex;
            justify-content: end;
            span{
                width: min-content;
                color: variables.$terciario;
                cursor: pointer;
                transition: 3ms;
                padding: .8em .8em .3em;
                svg{
                    font-size: 2.4em;
                    font-weight: 900;
                }
                &:hover{
                    transform: scale(1.3);
                }
                &:active{
                    color: variables.$primario20;
                }
            }
        }
        
        .cont_information{
            /* display: flex; */
            @media (max-width: 630px) {
                flex-direction: column;
                img{
                    display: none;
                }
                .cont_form{
                    max-width: 100%!important;
                }
            }
            @media(min-width:631px) and (max-width:850px) {
                flex-direction: column;
                img{
                    display: none;
                }
                .cont_form{
                    max-width: 100%!important;
                }
            }
            .cont_image{
                width: 500px;
                overflow: hidden;
                img{
                    width: 100%;
                    object-position: center center;
                    object-fit: cover;
                }
            }
            .cont_form{
                width: 500px;
                .cont_form_mail{
                form{
                    flex-direction: column;
                    display: flex;
                    padding: 1.5em;
                .form_label{
                    font-size: 1.3em;
                    color: variables.$primario;
                    padding: 0 0 .5em 0;
                }
                .form_input{
                    margin-bottom: 1em;
                    height: 2.8em;
                    border-radius: .5em;
                    border: 1px solid variables.$primario60;
                    padding: 0 0 0 .5em;
                    
                    &::placeholder{
                        color: variables.$primario;
                    }
                    &:focus {
                        border: 2px solid variables.$terciario;
                        outline: none;
                        &::placeholder{
                            color: variables.$primario80;
                        }
                    }
                }
                .form_btn{
                    height: 2.8em;
                    background-color: variables.$terciario;
                    border-radius: .5em;
                    border: 0;
                    cursor: pointer;
                    transition: 3ms;
                    &:active{
                        transform: scale(.97);
                    }
                }
                .class_1{
                    margin-bottom: 1em;
                    height: 2.8em;
                    border-radius: .5em;
                    border: 1px solid red;
                    padding: 0 0 0 .5em;
                    input:invalid{
                        animation: shake;
                    }
                    &::placeholder{
                        color: rgba(255, 0, 0, 0.623);
                    }
                    &:not(:placeholder-shown):valid {
                        border: 1px solid variables.$primario60;
                    }
                    &:focus {
                        border: 2px solid variables.$terciario;
                        outline: none;
                        &::placeholder{
                            color: white;
                        }
                        
                    }
                    @keyframes shake {
                        25%{
                            translate: 6px 0;
                        }
                        50%{
                            translate: -6px 0;
                        }
                        75%{
                            translate: -6px 0;
                        }
                    }
                }
            }
        }
            }
        }
    }
`


















