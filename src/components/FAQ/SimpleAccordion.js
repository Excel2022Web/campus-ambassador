import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import lines from './../../assets/heading_lines.svg'
import line_rt from './../../assets/heading_lines_rt.svg'

import './SimpleAccordion.css';

const Faqs = [
  {
     id: 1,
     panel: "label1",
     title: "What is a Campus Ambassador?",
     desc: "Being a Campus Ambassador is becoming the face of the tech fest on your campus. This requires you to network with your peers and share the contents of Excel and encourage them to participate.",
  },
  {
     id: 2,
     panel: "label2",
     title: "Who can apply?",
     desc: "Anyone who is currently in college has great networking skills and communication and can apply.",
  },
  {
     id: 3,
     panel: "label3",
     title: "How to Apply for Campus Ambassador?",
     desc: "Check out the Excel CA web page for more information.",
  },
  {
     id: 4,
     panel: "label4",
     title: "Is there an entry fee to participate?",
     desc: "No, being an Excel Campus Ambassador is free but there would be a certain fee for the events in EXCEL.",
  },
  {
     id: 5,
     panel: "label5",
     title: "Under which circumstance will I be removed from the CAA Program?",
     desc: "A CA would not be removed until any sort of malpractice is detected. But for a CA to enter the leaderboard and avail prizes, they will have to complete certain tasks and bring about a number of registrations set by us.",
  },
  {
     id: 6,
     panel: "label6",
     title: "Can there be more than one CA from a college?",
     desc: "Yes, but the points are given for separate registrations from individuals.",
  },

];

export default function SimpleAccordion() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
     setExpanded(isExpanded ? panel : false);
  };

  const accStyle = {
    background: 'transparent', 
    margin:'0.5rem auto',
    width: '90%',
    cursor: 'pointer',
  }

  return (
    <div className='faq_section' id='faq'>
        <div className='faq_title' data-aos="fade-up">
          <img src={lines} alt=' ' className='head_lines faq_line'/>             
          <h1 className='heading'>FREQUENTLY ASKED <span className='blue'>QUESTIONS</span></h1>
          <img src={line_rt} alt=' ' className='head_lines faq_line'/>            
        </div>
        <div className='faq' data-aos="fade-up">
        {Faqs.map((faq) => (
          <Accordion className='faq_accor' sx={accStyle} expanded={expanded === `${faq.panel}`} onChange={handleChange(`${faq.panel}`)} key={faq.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon className='expand_icon'/>}>
              <h3 className='question'>{faq.title}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p className='answer'>
                  {faq.desc}
                </p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

    </div>
  );
}
