import { Accordion, ListItemIcon, SwipeableDrawer, Typography } from "@mui/material";
import styled from "styled-components";


export const CloseImg = styled(ListItemIcon)`
    /* border: 1px solid red;//............... */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    .closeBtn{
        font-size: 2.4em;
        font-weight: 900;
        transition:10ms;
        width:30px;
        border-radius: 50%;
        background-color: var(--color4);
        color: var(--color5);
        :active{
                transform: scale(.97);
                path{
                color: var(--color1);
                
                }
            }
    }
`
export const ContMenuMobile = styled(SwipeableDrawer)`
    .SlideMenu{
        border: 1px solid red;//...............
        background-color: var(--color3);
        height: 100vmax;
        a{
            /* border: 1px solid red;//............... */
            text-decoration: none;
            color: var(--color4);
            &:active{
                color: var(--color1);
            }
        }
    }
`
export const LinkMenu =styled(Typography)`
    /* border: 1px solid red; */
    width: 100%;
    padding: 16px;
`
export const LinkAccordion = styled(Typography)`
    /* border: 1px solid red; */
    padding: 12px 0;
`

export const Prueba = styled(Accordion)`
        &{
            /* border: 1px solid red;//............... */
            background-color: var(--color3)!important;
        }
`


























