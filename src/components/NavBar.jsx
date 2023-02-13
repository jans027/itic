import React, { useState } from "react";
import { StyledA, StyledLi, StyledNav, StyledSubmenu, StyledSubmenuItem } from "../styles/NavBar";

const NavBar = () => {
    const [showSubmenu, setShowSubmenu] = useState(true);
    // console.log(showSubmenu)

    return (
        <StyledNav>
            <ul>
                <StyledLi>
                    <StyledA href="#">Home</StyledA>
                </StyledLi>
                <StyledLi>
                    <StyledA href="#" showSubmenu={showSubmenu} onClick={() => setShowSubmenu(!showSubmenu)}>
                        Products
                    </StyledA>
                    <ul>
                        <li>
                            <a href="#">Product 1</a>
                        </li>
                        <li>
                            <a href="#">Product 2</a>
                        </li>
                        <li>
                            <a href="#">Product 3</a>
                        </li>
                    </ul>
                </StyledLi>
                <StyledLi>
                    <StyledA href="#">Contact</StyledA>
                </StyledLi>
            </ul>
        </StyledNav>
    );
};

export default NavBar;
