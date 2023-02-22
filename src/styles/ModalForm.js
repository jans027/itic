import { Dialog } from "@mui/material";
import styled from "styled-components"; 


export const ContModal = styled(Dialog)`
    .MuiPaper-root{
        max-width: 1000px !important;
        min-width: 320px;
        .cont_close{
            display: flex;
            justify-content: end;
            background-color: var(--color3);
            
            border-radius: 50%;
            position: absolute;
            right: 10px;
            top: 10px;
            span{
                width: min-content;
                color: var(--color4);
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
                    color: var(--color3);
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
                    color: var(--color4);
                    padding: 0 0 .5em 0;
                    span{
                        color: red;
                        font-size: 20px;
                    }
                }
                .form_input, select{
                    margin-bottom: 1em;
                    height: 2.8em;
                    border-radius: .5em;
                    border: 1px solid var(--color3);
                    padding: 0 0 0 .5em;
                    option:disabled{
                        color: transparent;
                    }
                    &::placeholder{
                        color: var(--color4);
                    }
                    &:focus {
                        border: 2px solid var(--color1);
                        outline: none;
                        &::placeholder{
                            color: var(--color3);
                        }
                    }
                }
                .class_1{
                    margin-bottom: 1em;
                    height: 2.8em;
                    border-radius: .5em;
                    border: 1px solid red;
                    padding: 0 0 0 .5em;
                    &::placeholder{
                        color: rgba(255, 0, 0, 0.623);
                    }
                    &:focus {
                        border: 2px solid var(--color1);
                        outline: none;
                        &::placeholder{
                            color: white;
                        }
                        
                    }
                }
            }
        }
            }
        }
    }
`

export const BtnModal = styled.button`
    
    cursor: pointer;
    width: 8em;
    padding: .4em;
    font-size: 20px;
    font-weight: 600;
    border-radius:.8em;
    background-color: var(--color4);
    border: none;
    color:var(--color5);
    position: absolute;
    right: 10px;
    bottom:20px;

    &:nth-child(2){
        background-color: var(--color1);
        border: none;
        color:var(--color4);
        position: sticky;
        bottom:20px;
        left:150px;
    }

`
















