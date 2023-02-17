import * as React from "react";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { StyledNavbar, MenuLinks, NavLink } from "./Navbar.styled";
import { HamburgerButton } from "./Hamburger.styled";


const Navbar = () => {
    const [menu, showMenu] = useState(false);

    return (
        <StyledNavbar>
            <HamburgerButton menu={menu} onClick={() => showMenu(!menu)}>
                <div />
                <div />
                <div />
            </HamburgerButton>
            <Link to="/"><StaticImage style={{ width: "250px", marginLeft: "6vw" }} src="../../images/new-logo.png" alt="logo" /></Link>
            <MenuLinks menu={menu}>
                <li><NavLink to="/">Fizjoterapia</NavLink></li>
                <li><NavLink to="/about">O mnie</NavLink></li>
                <li><NavLink to="/about">Cennik</NavLink></li>
                <li><NavLink to="/contact">Kontakt</NavLink></li>
            </MenuLinks>
        </StyledNavbar>
    );
};

export default Navbar;

