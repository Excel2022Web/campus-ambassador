import React from 'react'
import { VscDebugBreakpointLog } from "react-icons/vsc";

import lines from './../../assets/heading_lines.svg'
import line_rt from './../../assets/heading_lines_rt.svg'
import sqr1 from './../../assets/sqr1.svg'
import sqr2 from './../../assets/sqr2.svg'
import './Rewards.css'


function Rewards() {
  return (
    <div className='rewards' id='rewards'>
      <div className='rewards_head' data-aos="fade-up">
        <img src={lines} alt=' 'className='head_lines'/>             
        <h1><span className='blue'>REWARDS</span> AND <span className='blue'>PERKS</span></h1>
        <img src={line_rt} alt=' 'className='head_lines'/>            
      </div>
      <div className='rewards_mid' >
        <div className='reward_info'>
          <div className='reward_circle'>
            <h2>1</h2>
          </div>
          <div className='rewards_cont'>
            <h1> ₹4000</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p> */}
          </div>
        </div>
        <div className='reward_info reward_two'>
          <div className='reward_circle'>
            <h2>2</h2>
          </div>
          <div className='rewards_cont'>
            <h1> ₹3000</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p> */}
          </div>
        </div>
        <div className='reward_info'>
          <div className='reward_circle'>
            <h2>3</h2>
          </div>
          <div className='rewards_cont'>
            <h1> ₹1500</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p> */}
          </div>
        </div>
      </div>
      <div className="rewards_foot">
          <div className='benefits_point' data-aos="fade-up">
            <VscDebugBreakpointLog className='benefits_icon'/>
            <p className='benefits_para'>Remaining 7 participants in the top 10 of the leaderboard will get Rs 500 each.</p>
          </div>
          <div className='benefits_point' data-aos="fade-up">
            <VscDebugBreakpointLog className='benefits_icon'/>
            <p className='benefits_para'>Get discount ticket prices and free entry to selected Excel events.</p>
          </div>
          <div className='benefits_point' data-aos="fade-up">
            <VscDebugBreakpointLog className='benefits_icon'/>
            <p className='benefits_para'>Certificate and activity points will be awarded on completing minimum criteria.</p>
          </div>
        <p>
        </p>
      </div>
      <img src={sqr1} alt="" className='r_sqr1' />
      <img src={sqr2} alt="" className='r_sqr2' />
    </div>
  )
}

export default Rewards