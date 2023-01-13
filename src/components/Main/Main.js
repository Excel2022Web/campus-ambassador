import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';
import Lottie from 'react-lottie';

import { useScreenWidth } from '../../hooks/useScreenWidth';
import mascot_data from '../../assets/json/mascot.json'

import './Main.css'

function Main() {

  const [mascotSize, setMascotSize] = useState()

  const size = useScreenWidth()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mascot_data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };


  useEffect(() => {
    if(size > 600) {
      setMascotSize(400)
    } else if(size > 500) {
      setMascotSize(350)
    } else if(size > 400) {
      setMascotSize(300)
    } else {
      setMascotSize(200)
    }
    
  }, [size])
  

  return (
    <div className='home_sec' id='home'>
      <div className='home'>
        <Lottie
          options={defaultOptions}
          height={mascotSize}
          width={mascotSize}
        />
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