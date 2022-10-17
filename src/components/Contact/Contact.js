import React from 'react'
import lines from './../../assets/heading_lines.svg'
import line_rt from './../../assets/heading_lines_rt.svg'
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import map from './../../assets/map.svg'

import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='contact_title'>
        <img src={lines} alt=' ' className='contact_lines'/>             
        <h1>CONTACT</h1>
        <img src={line_rt} alt=' ' className='contact_lines'/>            
      </div>
      <div className='contact_list'>
        <div className='contact_info'>
          <h1>Nazreen K Basheer</h1>
          <h2>+91 9542364875</h2>
          <div className='contact_soc'>
            <div className='contact_circle'>
              <a href="https://www.facebook.com/excelmec" target="_blank" rel="noopener noreferrer">
                <MdEmail
                  style={{ border: "none" }}
                  className="contact_icon"
                  />
              </a>
            </div>
            <div className='contact_circle'>
              <a href="https://www.facebook.com/excelmec" target="_blank" rel="noopener noreferrer">
                <BsLinkedin
                  style={{ border: "none" }}
                  className="contact_icon"
                  />
              </a>
            </div>
          </div>
        </div>
        <div className='contact_info'>
          <h1>Nazreen K Basheer</h1>
          <h2>+91 9542364875</h2>
          <div className='contact_soc'>
            <div className='contact_circle'>
              <a href="https://www.facebook.com/excelmec" target="_blank" rel="noopener noreferrer">
                <MdEmail
                  style={{ border: "none" }}
                  className="contact_icon"
                  />
              </a>
            </div>
            <div className='contact_circle'>
              <a href="https://www.facebook.com/excelmec" target="_blank" rel="noopener noreferrer">
                <BsLinkedin
                  style={{ border: "none" }}
                  className="contact_icon"
                  />
              </a>
            </div>
          </div>
        </div>
        <div className='contact_info'>
          <h1>Nazreen K Basheer</h1>
          <h2>+91 9542364875</h2>
          <div className='contact_soc'>
            <div className='contact_circle'>
              <a href="https://www.facebook.com/excelmec" target="_blank" rel="noopener noreferrer">
                <MdEmail
                  style={{ border: "none" }}
                  className="contact_icon"
                  />
              </a>
            </div>
            <div className='contact_circle'>
              <a href="https://www.facebook.com/excelmec" target="_blank" rel="noopener noreferrer">
                <BsLinkedin
                  style={{ border: "none" }}
                  className="contact_icon"
                  />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='location'>
        <div className='location_lt'>
          <h1>LOCATION</h1>
          <p>MODEL ENGINEERING COLLEGE,<br/> THRIKKAKARA,<br/> ERNAKULAM </p>
        </div>
        <div className='location_map'>
          <img src={map} alt=' ' className='loc_map'/>     
        </div>
      </div>
    
    </div>
  )
}

export default Contact