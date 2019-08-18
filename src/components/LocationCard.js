import React from "react";


export default function LocationCard(props) {
  return <span>

<div className="locationInfo">
      <h3>{props.name}</h3>
      <p>Type: {props.type}</p>
      <p>Dimension: {props.dimension}</p>
    </div>
  </span>;
}
