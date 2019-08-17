import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard"


export default function EpisodesList() {
    const [episodes, setEpisodes] = useState([])

   useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episodes/`)
    .then(response => {
      setEpisodes(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
      <section className="episodes-list grid-view">
          {episodes.map(episode => (
            <EpisodeCard
              episodes = {episodes}
                key={episodes.id}
                name={episode.name}
                airDate={episode.air_date}
             />
          ))}

      </section>
  )
}
