import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const [search, setSearch] = useState("")

  const handleInputChange = (event) => {
    setSearch({...search,[event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault();
      console.log(event)
  }
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(search.name)}>
        <input
          onChange={handleInputChange}
          placeholder="Name"
          value={search.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
