import React from "react";


export default function LocationCard(props) {
  return <span>

<div className="locationInfo">
      <h3>{props.name}</h3>
      <p>{props.type}</p>
      <p>{props.dimension}</p>
      <p>{props.residents}</p>
    </div>
  </span>;
}
