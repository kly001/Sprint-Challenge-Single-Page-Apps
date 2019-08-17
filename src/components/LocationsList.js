import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard"


export default function LocationsList() {
    const [locations, setLocations] = useState([])

   useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/`)
    .then(response => {
      setLocations(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
      <section className="location-list grid-view">
          {locations.map(location => (
            <LocationCard
              locations = {locations}
              key={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents = {location.resident}
             />
          ))}

      </section>
  )
}
