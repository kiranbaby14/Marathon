import React from 'react';
import Card from '../Card/Card';
import "./Team.css";


const Team = ({ teamInfo }) => {

  return (
    <div id="team-container">
      <h1>{teamInfo.teamName}</h1>
      <div className='team_card_container'>
        {teamInfo.data.map((data, key) => (
          <Card imgSrc={data.img} name={data.name} description={data.info} key={key}/>
        ))}
      </div>
    </div>
  )
}

export default Team