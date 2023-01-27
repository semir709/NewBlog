import React, { useRef } from "react";
import { search } from "../assets/images/index.js";

const SearchBar = ({ searching, setSearching }) => {
  const change = (e) => {
    if (e.target.value.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
  };
  return (
    <div className="w-[400px] rounded-md border-[#B6B6B6] border pl-3 flex items-center">
      <input
        onChange={change}
        className="py-1 w-[90%]"
        type="text"
        id="search"
        placeholder="Search"
      />
      <label htmlFor="search" className="cursor-pointer">
        <img src={search} alt="" />
      </label>
    </div>
  );
};

export default SearchBar;
