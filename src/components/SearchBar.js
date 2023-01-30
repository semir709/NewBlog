import React, { useRef, useState } from "react";
import { search } from "../assets/images/index.js";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ loading, setLoading, setSearchValue, searchValue }) => {
  const inputRef = useRef(null);

  let isActive = document.activeElement === inputRef.current;

  const change = (e) => {
    if (e.target.value.length > 0) {
      setSearchValue(e.target.value);
    }
  };
  return (
    <div className="w-[400px] rounded-md border-[#B6B6B6] border pl-3 flex items-center">
      <input
        ref={inputRef}
        onChange={change}
        className="py-1 w-[90%]"
        type="text"
        id="search"
        placeholder="Search"
      />

      {isActive && (
        <AiOutlineCloseCircle
          fontSize={25}
          className="text-[#B6B6B6] cursor-pointer"
          onClick={() => {
            setSearchValue("");
          }}
        />
      )}
      {isActive === false && (
        <label htmlFor="search" className="cursor-pointer">
          <AiOutlineSearch fontSize={25} className="text-[#B6B6B6] " />
        </label>
      )}
    </div>
  );
};

export default SearchBar;
