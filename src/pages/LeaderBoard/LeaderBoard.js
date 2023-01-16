import React from 'react'

import { LeaderCard } from '../../components'
import './LeaderBoard.css'

import lines from './../../assets/heading_lines.svg'
import line_rt from './../../assets/heading_lines_rt.svg'

function LeaderBoard() {
  return (
    <div className="leaderBoard">
        <div className='contact_title'>
            <img src={lines} alt=' ' className='contact_lines'/>             
            <h1>Leaderboard</h1>
            <img src={line_rt} alt=' ' className='contact_lines'/>            
        </div>
        <div className='leaderBoard__component'>
            <LeaderCard rank={1} name="Hemanth R" score={100} skeleton={false}/>
            <LeaderCard rank={1} name="Hemanth R" score={100} skeleton={false}/>
            <LeaderCard rank={1} name="Hemanth R" score={100} skeleton={false}/>
            <LeaderCard rank={1} name="Hemanth R" score={100} skeleton={false}/>
            <LeaderCard rank={1} name="Hemanth R" score={100} skeleton={false}/>
        </div>
    </div>
  )
}

export default LeaderBoard