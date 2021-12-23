import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
// import {Button} from '../Button'
import styled from 'styled-components'
import logo from '../../image/1.png'
import { Nav, NavbarContainer, NavLogo ,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink, Navh1} from './NavbarElements'
import { useState } from 'react'
import { useEffect } from 'react'
import {animateScroll as scroll} from 'react-scroll'

export const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        
        else{
            setScrollNav(false)           
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []) ;

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav= {scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                    {/* <Img src={logo} alt="logo_ggc"  /> */}
                    <Navh1>Lets Travel</Navh1>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="/" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}

                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/package"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Packages</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/About"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>About Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                    <NavBtnLink to='/contact-us'
                    smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>
                    Contact Us
                    </NavBtnLink>
                       
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar


const Img = styled.img`
  height: 70px;
`