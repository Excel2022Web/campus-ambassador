import React from "react";
import Skeleton from '@mui/material/Skeleton';

import Avatar from "../../assets/avatar.svg";
import "./LeaderCard.css";

function Leadercard({ rank, avatar, name, score, skeleton }) {
  
  return (
    <li className="leaderboard-card"  data-aos="fade-up">
      <h1>{rank}</h1>
        {skeleton ? (
          <Skeleton animation="wave" variant="circle" width={50} height={50}/>
          ) : (
            <img src={avatar ? avatar : Avatar} alt="Avatar" />
        )}
        {skeleton ? (
          <Skeleton animation="wave" height={65} width="75%" />
        ) : (
        <div className="name-score">
          <h2>{name}</h2>
          <h3>{score}</h3>
        </div>
    )}
    </li>
  );
}

export default Leadercard;
