import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import bahlogo from '../../assets/bahlogo.jpg';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavContact } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
        setScrollNav(true);
    } else {
        setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  
  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
    <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          <img src={bahlogo} alt="Byers & Harvey Logo" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>

                    <NavItem>
                      <NavLinks>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks>About</NavLinks>
                    </NavItem>
                </NavMenu>

                    <NavContact>
                      <NavLinks>Contact</NavLinks>
                    </NavContact>

    </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  );
};

Navbar.defaultProps = {
  BurgerColour: "rgb(26, 55, 58)",
};

export default Navbar;
