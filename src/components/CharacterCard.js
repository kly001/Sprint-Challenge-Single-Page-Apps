import React from "react";

export default function CharacterCard(props) {
  return <span>
    <div className ="characterInfo">
    <img className="character-img"
                src={"https://rickandmortyapi.com/api/character/"}
                alt={props.name}
            />
      <h3>{props.name}</h3>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
    </div>
  </span>;
}
