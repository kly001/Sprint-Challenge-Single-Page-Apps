import React from "react";

export default function CharacterCard(props) {
  return <span>
    <div className ="character-info">
      <img src={props.image} alt="character pic"/>
      <p>{props.name}</p>
      <p>{props.status}</p>
      <p>{props.species}</p>
    </div>
  </span>;
}
