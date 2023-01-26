import React from 'react'
import { MdEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi"

import { contactsData } from '../../data/contactData';

import lines from './../../assets/heading_lines.svg'
import line_rt from './../../assets/heading_lines_rt.svg'
// import map from './../../assets/map.png'

import './Contact.css'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact_title'>
        <img src={lines} alt=' ' className='contact_lines'/>             
        <h1>CONTACT</h1>
        <img src={line_rt} alt=' ' className='contact_lines'/>            
      </div>
      <div className='contact_list'>
        {contactsData.map((contact) => (
          <div className='contact_info' key={contact.id}>
            <h1>{contact.name}</h1>
            <h2>+91 {contact.phone}</h2>
            <div className='contact_soc'>
              <div className='contact_circle'>
                <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">
                  <MdEmail
                    style={{ border: "none" }}
                    className="contact_icon"
                    />
                </a>
              </div>
              <div className='contact_circle'>
                <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">
                  <FiLinkedin
                    style={{ border: "none" }}
                    className="contact_icon"
                    />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='location'>
        <div className='location_lt'>
          <h1>LOCATION</h1>
          <p>MODEL ENGINEERING COLLEGE,<br/> THRIKKAKARA,<br/> ERNAKULAM </p>
        </div>
        <div className='location_map'>
          <a href="https://goo.gl/maps/KPUzErGX34DnKcDL9" target="_blank" rel="noopener noreferrer">
            <img src={map} alt=' ' className='loc_map'/> 
          </a>               
            
        </div>
      </div> */}
    
    </div>
  )
}

export default Contact