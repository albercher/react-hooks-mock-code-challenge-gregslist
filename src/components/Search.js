import React, { useState } from "react";

function Search( {search} ) {
  const [searchVal, setSearchValue] = useState("")

  function handleChange(e){
    setSearchValue(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    search(searchVal) 
}

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchVal}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
