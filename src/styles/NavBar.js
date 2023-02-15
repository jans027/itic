import { Button, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: var(--color3);
    .Address{
        background-color: var(--color4);
        color: var(--color5);
        justify-content: right;
        padding-right: 8em;
        height: 3.1em;
        display: flex;
        span{
            align-items: center;
            display: flex;
            margin-right:1em;
            padding: 1em;
            h4{
            margin-left: .3em;
            font-size: 1.2em;
            font-weight: 500;
            }
        }
    }
    .ContMenu{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 6.2em;
        span{
            display: flex;
            justify-content: center;
        }
    }
`;

export const BtnBase = styled(Button)`
        &&{
            color: var(--color4);
            font-weight:600;
            font-size: 18px;
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
    :active{
            transform: scale(.98);
    }
    img{
        height: 50px;
        float: left;
        }
`
