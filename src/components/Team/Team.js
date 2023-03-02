import React from 'react';
import Card from '../Card/Card';
import "./Team.css";
import zoro from "../../assets/zoro.jpg";

const Team = ({teamName}) => {
  return (
    <div id="team-container">
      <h1>{teamName}</h1>
      <div className='team_card_container'>
        <Card imgSrc={zoro} name="Usain Bolt" description="The fastest man alive" />
        <Card imgSrc={zoro} name="Usain Bolt" description="The fastest man alive" />
        <Card imgSrc={zoro} name="Usain Bolt" description="The fastest man alive" />
        <Card imgSrc={zoro} name="Usain Bolt" description="The fastest man alive" />
      </div>
    </div>
  )
}

export default Team