import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarLink,
        SidebarMenu,
        SideBtnWrap,
        SideBtnLink} from './SideBarElements'
 const  Sidebar = ({isOpen,toggle}) => {
    return (
        
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="/"  onClick={toggle}>
                      Home
                   </SidebarLink>
                   <SidebarLink to="/services" onClick={toggle}>
                      Services
                   </SidebarLink>
                   <SidebarLink to="vision" onClick={toggle}>
                     Packages
                   </SidebarLink>
                   <SidebarLink to="/About" onClick={toggle}>
                     About Us
                   </SidebarLink>
                   
               </SidebarMenu>
               <SideBtnWrap>
                   <SideBtnLink to="/contact-us" onClick={toggle}>Contact Us</SideBtnLink>
               </SideBtnWrap>
           </SidebarWrapper>
        </SidebarContainer>
            
      
    )
}

export default Sidebar