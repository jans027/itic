import { Button, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    margin: auto;
    flex-direction: column;
    background-color: var(--color3);
    .Address{
        background-color: var(--color4);
        color: var(--color5);
        display: flex;
        height: 2.8em;
        div{
            display: flex;
            justify-content: flex-end;
            width: 90%;
            height: 2.8em;
            margin: auto;
            @media (max-width:600px) {
                width: 85%;
            }
            span{
            align-items: center;
            display: flex;
            margin-right:.5em;
            padding: 1em;
            @media (max-width:456px) {
                display:none;
                }
            h4{
            margin-left: .3em;
            font-size: 1em;
            font-weight: 500;
            
            }
        }
        }
    }
    .ContMenu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        height: 6.2em;
        width: 90%;
        @media (max-width:1101px) {
                justify-content:space-between;
                width: 90%;
            }
        span{
            display: flex;
            justify-content: space-around;
            @media (max-width:1101px) {
                display: none;
            }
        }
        .contMenuHamburguer{
            display: none;
            @media (max-width:1101px) {
                display: block;
            }
        }
        .menuHamburguer{
            font-size:2.8em;
            cursor: pointer;
            transition:10ms;
            padding: 0!important;
            :active{
                transform: scale(.97);
                path{
                color: var(--color3);
                
                }
            }
            path{
                color: var(--color4);
                
            }
        }
    }
`;

export const BtnBase = styled(Button)`
        &&{
            color: var(--color4);
            font-weight:600;
            border-radius: 1.6em;
            img{
                margin: 0 1em 0 0;
            }
            a{
                text-decoration: none;
                color: var(--color4);
                font-weight:600;
                display: flex;
                align-items: center;
                font-size: 1em;
            }
            &:hover{
                background-color: var(--color10);
                border-radius: 1.6em;
            }
            
        }
`

export const MenuDrop = styled(Menu)`
    &&{
        div{
            box-shadow: none;
            ul{
            background-color: var(--color3);
            li{
                &:hover{
                    border-bottom: 1.5px solid var(--color4);
                }
                a{
                    text-decoration: none;
                    color: var(--color4);
                }
            }
        }
        }
    }
`

export const LogoNav = styled(Link)`
        transition:10ms;
        width:clamp(150px, 15%, 215px);
    :active{
            transform: scale(.98);
    }
    img{
        height: 100%;
        }
`
