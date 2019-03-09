import React from 'react';
import './StarWars.css';

const Character = props => {
  return (
    <div>
      <h2>{props.charInfo.name}</h2>
      <ul>
        <li>Birth Year: {props.charInfo.birth_year}</li>
        <li>Gender: {props.charInfo.gender}</li>
        <li>Hair Color: {props.charInfo.hair_color}</li>
      </ul>
    </div>
  )
}

export default Character;