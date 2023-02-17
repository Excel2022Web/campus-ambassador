import React, { useState,useEffect } from 'react'
import { LeaderCard } from '../../components'
import './LeaderBoard.css'
import axios from 'axios'
import { caBaseUrl } from '../../utils/urls'
import lines from './../../assets/heading_lines.svg'
import line_rt from './../../assets/heading_lines_rt.svg'
function LeaderBoard() {
  const[leaders,setLeaders]=useState([])
  useEffect(()=>{
    axios.get(`${caBaseUrl}/ambassadorLeaderboard`).then((response)=>{
      setLeaders(response.data);

  },(error)=>{
      console.log(error)
  })

  },[])
  return (
    <div className="leaderBoard">
        <div className='contact_title'>
            <img src={lines} alt=' ' className='contact_lines'/>             
            <h1>Leaderboard</h1>
            <img src={line_rt} alt=' ' className='contact_lines'/>            
        </div>
        <div className='leaderBoard__component'>
          {leaders?.map((leader,index)=>{
            return(
              <LeaderCard rank={index+1} name={leader.name} score={leader.points} skeleton={false} avatar={leader.image}/>
            )
          })}
        </div>
    </div>
  )
}

export default LeaderBoard