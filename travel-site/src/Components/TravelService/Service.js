import React from 'react'
import './Service.css';
import image1 from '../../image/aeroplane.png'
import image2 from '../../image/plan.png'
import image3 from '../../image/s1.png'
export default function Service() {
    return (
       
            <div className='body'>
              <h1 className='head1'>What we Offer?</h1>
              <div className='container'>
                  <div className='row'>
                      <div className='col'>
                      <div className='main'>
                              <div className='service'>
                                  <div className='service-logo'>
                                      <img src={image1}/>
                                  </div>
                                  <h4>Trips</h4>
                                
                                  <p>We Organize trips to your Dream Locations and provide each facility to enhance your experience</p>
                                 

                              </div>
                             
                          </div>
                      </div>
                      <div className='col'>
                      <div className='main'>
                              <div className='service'>
                                  <div className='service-logo'>
                                      <img src={image2}/>
                                  </div>
                                  <h4>Tour Planning</h4>
                                  
                                  <p>We help you to plan your tours and provide you many different packages.</p>
                                 

                              </div>
                              
                          </div>
                      </div>
                      <div className='col'>
                      <div className='main'>
                              <div className='service'>
                                  <div className='service-logo'>
                                      <img src={image3}/>
                                  </div>
                                  <h4>Secure Trips</h4>
                               
                                  <p>We make sure that your security is our priority. We manage your trips in most secure way</p>
                                 

                              </div>
                             
                          </div>
                      </div>
                  </div>
              </div>
            </div>
      
    )
}
