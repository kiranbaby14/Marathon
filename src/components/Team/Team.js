import React from 'react';
import Card from '../Card/Card';
import "./Team.css";
import contestant1 from "../../assets/contestant1.JPG";
import contestant2 from "../../assets/contestant2.JPG"
import contestant3 from "../../assets/contestant3.jpg"
import contestant4 from "../../assets/contestant4.jpg"
import contestant5 from "../../assets/contestant5.jpg"
import coach1 from "../../assets/coach1.jpg"

const Team = ({teamName}) => {

  // const = {[]}

  return (
    <div id="team-container">
      <h1>{teamName}</h1>
      <div className='team_card_container'>
        <Card imgSrc={contestant1} name="Usain Bolt" description="The fastest man alive" />
        <Card imgSrc={contestant2} name="Usain Bolt" description="The fastest man alive" />
        <Card imgSrc={coach1} name="Usain Bolt" description="The fastest man alive" />
      </div>
    </div>
  )
}

export default Team