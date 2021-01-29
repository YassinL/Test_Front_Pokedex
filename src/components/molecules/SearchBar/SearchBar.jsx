/* eslint-disable react/prop-types */
import React from "react";
import "./SearchBar.scss";
import Search from "../../atoms/SVG/SearchLogo";

const SearchBar = ({ value, onChange }) => {
  return (
    <>
      <form className="search">
        <label htmlFor="searchBar" className="search_label">
          <input
            name="name"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            type="search"
            placeholder="Name"
            className="search_label_input"
          />
          <Search />
        </label>
      </form>
    </>
  );
};

export default SearchBar;
