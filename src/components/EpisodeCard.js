import React from "react";


export default function EpisodeCard(props) {
  return <span>

<div className="episodeInfo">
      <h3>Episode Name: {props.name}</h3>
      <p>Air Date: {props.airDate}</p>
      <p>Episode: {props.episode}</p>
    </div>
  </span>;
}
