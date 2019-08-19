import React from "react";


export default function EpisodeCard(props) {
  return <span>

<div className="episodeInfo">
      <h2>{props.name}</h2>
      <p><strong>AIR DATE</strong></p>
      <p>{props.airDate}</p>
      <p><strong>EPISODE:</strong></p>
      <p>{props.episode}</p>
    </div>
  </span>;
}
