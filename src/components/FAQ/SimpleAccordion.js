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
     title: "Does Chain Wars cost money?",
     desc: "Absolutely not, it is free for everyone. The only thing you are required to have is a mind to have  fun, learn new things, and a passion to create new things!",
  },
  {
     id: 2,
     panel: "label2",
     title: "I’m a newbie, so can I participate?",
     desc: "Our events are beginner friendly and hence are open to both beginners and experts alike. Whether you are someone who is absolutely clueless about the world of DeFi and wants to dive right in or whether you are someone who wants to prove their mettle, we encourage all sorts of entries!",
  },
  {
     id: 3,
     panel: "label3",
     title: "I have no Team, and want to register Solo. Can I register for the Chain Wars?",
     desc: "We don’t accept individual entries, and it is mandatory to have a team with a minimum of 2 and a maximum of 5 members. Learning new things is so much more fun, if you have a group of people to learn it with!",
  },
  {
     id: 4,
     panel: "label4",
     title: "I’m a newbie, so can I participate?",
     desc: "Our events are beginner friendly and hence are open to both beginners and experts alike. Whether you are someone who is absolutely clueless about the world of DeFi and wants to dive right in or whether you are someone who wants to prove their mettle, we encourage all sorts of entries!",
  },
  {
     id: 5,
     panel: "label5",
     title: "I have no Team, and want to register Solo. Can I register for the Chain Wars?",
     desc: "We don’t accept individual entries, and it is mandatory to have a team with a minimum of 2 and a maximum of 5 members. Learning new things is so much more fun, if you have a group of people to learn it with!",
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
        <div className='faq_title'>
          <img src={lines} alt=' ' className='head_lines faq_line'/>             
          <h1 className='heading'>FREQUENTLY ASKED <span class='blue'>QUESTIONS</span></h1>
          <img src={line_rt} alt=' ' className='head_lines faq_line'/>            
        </div>
        <div className='faq'>
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
