import React from 'react'
import { VscDebugBreakpointLog } from "react-icons/vsc";
import lines from './../../assets/heading_lines.svg'
import line_rt from './../../assets/heading_lines_rt.svg'

import './Responsibilities.css'

function Responsibilities() {
  return (
    <div className='responsibilities'>
      <div className='contact_title'>
        <img src={lines} alt=' ' className='contact_lines'/>             
        <h1>RESPONSIBILITIES </h1>
        <img src={line_rt} alt=' ' className='contact_lines'/>            
      </div>
      <div className='resp_cont'>
        <h1>Become the face of Excel in your Campus!</h1>
        <div className='benefits_content'>

          <div className='benefits_point'>
                <VscDebugBreakpointLog className='benefits_icon'/><p className='benefits_para'>Connect your classmates and friends with the innovative and lit events that Excel conducts.</p>
            </div>
            <div className='benefits_point'>
                <VscDebugBreakpointLog className='benefits_icon'/><p> Promote the posters and links shared to you in your college and provide sufficient publicity.</p>
            </div>
            <div className='benefits_point'>
                <VscDebugBreakpointLog className='benefits_icon'/><p className='benefits_para'>Encourage students of your college to participate in Excel and join one of the most reputed tech fests around!</p>
            </div>
            </div>
      </div>
    
    </div>
  )
}

export default Responsibilities