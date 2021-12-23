import React from "react";
import './About.css';
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube} from 'react-icons/fi'
import {ImPinterest2} from 'react-icons/im'
import { FooterMenu, FooterItemSocial } from "../Footer/FooterElements";
export default function About() {
  return (
    <div>
        <div className="body1">
      <div className="about-section">
        <div className="inner-container">
          <h1>About Us</h1>
          <p className="text">
            Travel is the main thing you purchase that makes you more
            extravagant”. We, at ‘Lets Travel’, swear by this and put
            stock in satisfying travel dreams that make you perpetually rich
            constantly. We have been moving excellent encounters for a
            considerable length of time through our cutting-edge planned
            occasion bundles and other fundamental travel administrations. We
            rouse our clients to carry on with a rich life, brimming with
            extraordinary travel encounters.
          </p>
         
        </div>
      </div>
      <FooterMenu>
                           <FooterItemSocial href="https://www.facebook.com/goldengirlcosmeticsofficial/" target="_blank"><FiFacebook/></FooterItemSocial>
                           <FooterItemSocial href="https://www.instagram.com/goldengirlcosmeticsofficials/" target="_blank"><FiInstagram/></FooterItemSocial>
                           <FooterItemSocial href="https://www.linkedin.com/company/golden-girl-cosmetics/?originalSubdomain=pk" target="_blank"><FiLinkedin/></FooterItemSocial>
                           <FooterItemSocial href="https://www.youtube.com/channel/UCzTTCJue4-3r3nAkS_UR6VQ" target="_blank"><FiYoutube/></FooterItemSocial>
                           <FooterItemSocial href="https://www.pinterest.com/goldengirlcosmetic/_created/" target="_blank"><ImPinterest2/></FooterItemSocial>
                           </FooterMenu>
    </div>
    </div>
  );
}
