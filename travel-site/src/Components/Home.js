import React from 'react'
import vid from '../videos/1.mp4'
import './Home.css'
import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll' 
function Home() {
    return (
        <>
        <div className="containerx">
           
            <video className='videoTag' autoPlay loop muted>
               <source src={vid} type='video/mp4' />
           </video>
          
          <div className="homecontent">
              <h1>
                  Travel with Us
              </h1>
              <p>
                  Get Ready to Explore your Dream Destinations with variety of Travel Packages
              </p>
              
          </div>
            
        </div>
        </>
    )
}

export default Home

 const NavBtn = styled.nav`
display: center;
align-items : center;
margin-top : 100px;
margin-left :175px; 
 

@media screen and (max-width :1075px){
    margin-right:  300px;
  }
  @media screen and (max-width :756px){
    margin-right:  600px;
  }
  @media screen and (max-width :591px){
    margin-right:  800px;
  }
  @media screen and (max-width :466px){
    margin-right:  810px;
  }
`

const NavBtnLink = styled(LinkS)`
border-radius : 50px;
background : #01bf71;
whitespace: nowrap;
padding :10px 22px;
color: #010606;
font-size: 17px;
outline : none;
border : none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration : none;
font-family : 'Poppins';
&:hover{
    transition : all 0.2s ease-in-out;
    background :#fff;
    color: #010606;
    transform : translateY(-2px);
}
`