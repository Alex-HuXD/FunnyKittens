import React from "react";

function SearchBox({ searchfield, searchChange }) {
  return (
    <div className="searchbox tc pa2">
      <input
        className="pa3 ba b--green bg-white br3"
        type="search"
        placeholder="type in your letters"
        onChange={searchChange}
      ></input>
    </div>
  );
}

export default SearchBox;
