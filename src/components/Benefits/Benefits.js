import React from 'react'
import { VscDebugBreakpointLog } from "react-icons/vsc";

import lines from './../../assets/heading_lines.svg'
import line_rt from './../../assets/heading_lines_rt.svg'

import './Benefits.css'

function Benefits() {
  return (
    <div className='benefits' id='benefits'>
        <div className='contact_title'>
            <img src={lines} alt=' ' className='contact_lines'/>             
            <h1>BENEFITS</h1>
            <img src={line_rt} alt=' ' className='contact_lines'/>            
        </div>
        <div className='benefits_content'>
            <div className='benefits_point'>
                <VscDebugBreakpointLog className='benefits_icon'/><p className='benefits_para'>Get the chance to avail cash prizes and rewards of upto 12k!</p>
            </div>
            <div className='benefits_point'>
                <VscDebugBreakpointLog className='benefits_icon'/><p className='benefits_para'>Enrich your communication, leadership, marketing and team skills.</p>
            </div>
            <div className='benefits_point'>
                <VscDebugBreakpointLog className='benefits_icon'/><p className='benefits_para'>Earn KTU Activity Points through Issued Certificates.</p>
            </div>
            <div className='benefits_point'>
                <VscDebugBreakpointLog className='benefits_icon'/><p className='benefits_para'>Add Excel Campus Ambassador as a valuable experience to your resume!</p>
            </div>
            <div className='benefits_point'>
                <VscDebugBreakpointLog className='benefits_icon'/><p className='benefits_para'>Discount ticket prices and free entry to selected excel event's.</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits