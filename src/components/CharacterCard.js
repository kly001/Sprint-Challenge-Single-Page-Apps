import React from "react";

export default function CharacterCard(props) {
  return <span>
    <div className ="characterInfo">
      {/* <img src={props.image} alt="character pic"/> */}
      <h2>{props.name}</h2>
      <p>{props.status}</p>
      <p>{props.species}</p>
    </div>
  </span>;
}
