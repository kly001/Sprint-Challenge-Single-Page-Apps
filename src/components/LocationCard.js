import React from "react";


export default function LocationCard(props) {
  return <span>

<div className="locationInfo">
      <h2>{props.name}</h2>
      <p><strong>TYPE:</strong></p>
      <p>{props.type}</p>
      <p><strong>DIMENSION:</strong></p>
      <p>{props.dimension}</p>
    </div>
  </span>;
}
