import React, { useRef, useState } from "react";
import { search } from "../assets/images/index.js";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ loading, setLoading, setSearchValue, searchValue }) => {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  // const change = (e) => {
  //   setSearchValue(e.target.value);
  //   setIsActive(true);
  //   if (e.target.value.length === 0) {
  //     setIsActive(false);
  //   }

  //   console.log(searchValue);
  // };

  const clearData = () => {
    inputRef.current.value = "";
    setIsActive(false);
  };
  return (
    <div className="w-[400px] rounded-md border-[#B6B6B6] border pl-3 flex items-center">
      <input
        ref={inputRef}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => navigate("/search")}
        className="py-1 w-[90%]"
        type="text"
        id="search"
        placeholder="Search"
      />

      {/* {isActive && (
        <AiOutlineCloseCircle
          fontSize={25}
          className="text-[#B6B6B6] cursor-pointer"
          onClick={clearData}
        />
      )}
      {isActive === false && (
        <label htmlFor="search" className="cursor-pointer">
          <AiOutlineSearch fontSize={25} className="text-[#B6B6B6] " />
        </label>
      )} */}
    </div>
  );
};

export default SearchBar;
