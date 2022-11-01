import React from 'react'

import lines from './../../assets/heading_lines.svg'
import line_rt from './../../assets/heading_lines_rt.svg'
import './Rewards.css'


function Rewards() {
  return (
    <div className='rewards' id='rewards'>
      <div className='rewards_head'>
        <img src={lines} alt=' 'className='head_lines'/>             
        <h1><span className='blue'>REWARDS</span> AND <span className='blue'>PERKS</span></h1>
        <img src={line_rt} alt=' 'className='head_lines'/>            
      </div>
      <div className='rewards_mid'>
        <div className='reward_info'>
          <div className='reward_circle'>
            <h2>1</h2>
          </div>
          <div className='rewards_cont'>
            <h1> ₹8000</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p> */}
          </div>
        </div>
        <div className='reward_info reward_two'>
          <div className='reward_circle'>
            <h2>2</h2>
          </div>
          <div className='rewards_cont'>
            <h1> ₹5000</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p> */}
          </div>
        </div>
        <div className='reward_info'>
          <div className='reward_circle'>
            <h2>3</h2>
          </div>
          <div className='rewards_cont'>
            <h1> ₹3000</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards