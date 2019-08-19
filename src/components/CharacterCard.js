import React from "react";

export default function CharacterCard(props) {
  return <span>
    <div className ="characterInfo">
      <img className="character-img"
                src={props.image}
                alt={props.name}
            />
      <h2>{props.name}</h2>
      <p><strong>STATUS:</strong> {props.status}</p>
      <p><strong>SPECIES:</strong> {props.species}</p>
      <p><strong>GENDER:</strong>{props.gender}</p>
    </div>
  </span>;
}
