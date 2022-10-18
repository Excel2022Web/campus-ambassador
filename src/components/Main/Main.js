import React from 'react'
// import mascot from '../../assets/mascotArtboard.svg';
import mascot from './../../assets/wave_data.json'
import CountUp from 'react-countup';

import './Main.css'

function Main() {

  return (
    <div className='home_sec' id='home'>
      <div className='home'>
        <img src={mascot} className='mascot' alt=''/>
        <div className='home_title'>
          <div className='intro_text'>
            <h1>EXCEL MEC</h1>
            <h2>CAMPUS AMBASSADOR</h2>
          </div>
          <button className='reg_btn' >REGISTER</button>
        </div>
      </div>
      <div className='features'>
          <div className='home_highlights'>
            <div className='count_circle'>
              <h3><CountUp end={10} duration={2} enableScrollSpy={true} preserveValue={true}/>+</h3>
            </div>
            <div className='features_cont'>
              <h4>WORKSHOPS </h4>
            </div>
          </div>

          <div className='home_highlights'>
            <div className='count_circle'>
              <h3><CountUp end={5} duration={2} enableScrollSpy={true} preserveValue={true}/>+</h3>
            </div>
            <div className='features_cont'>
              <h4>LECTURES </h4>
            </div>

          </div>
          <div className='home_highlights'>
            <div className='count_circle'>
              <h3><CountUp end={20} duration={2} enableScrollSpy={true} preserveValue={true}/>+</h3>
            </div>
            <div className='features_cont'>
              <h4>SPONSORS </h4>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Main