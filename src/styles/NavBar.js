import React from "react";
import styled from 'styled-components';

export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    border: 1px solid red;
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
    }
`;

export const StyledLi = styled.li`
    &:hover {
        background-color: lightgray;
    }
    ul{
        /* display: ${(props => (props.showSubmenu === true ? "block" : "none"))}; */
        position: absolute;
        background-color: lightgray;
        a {
        display: block;
        padding: 10px;
        text-decoration: none;
        color: black;
        &:hover {
            background-color: gray;
            color: white;
            }
        }
    }
`;

export const StyledA = styled.a`
    display: block;
    padding: 10px;
    text-decoration: none;
    color: black;
    &:hover {
        color: white;
    }
`;





























