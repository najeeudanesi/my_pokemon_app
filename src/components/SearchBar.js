import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="searchBar">
      <input
        placeholder="Type the name of a pokemon"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

      <Link to={"/pokemon/" + inputValue.toLowerCase()} className={"link"}>
        <div className="buttonDiv">Search</div>
      </Link>
    </div>
  );
};
export default SearchBar;
