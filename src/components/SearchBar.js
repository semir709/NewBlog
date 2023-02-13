import React, { useRef, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = ({ setSearchValue, searchValue }) => {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const change = (e) => {
    setSearchValue(e.target.value);
    setIsActive(true);
    if (e.target.value.length === 0) {
      setIsActive(false);
    }
  };

  const clearData = (e) => {
    inputRef.current.value = "";
    setSearchValue("");
    setIsActive(false);
    navigate("/");
  };

  return (
    <div
      className={`sm:w-[400px] rounded-md border-[#B6B6B6] border-2 pl-3 flex items-center mx-2  ${
        location.pathname === "/search" ? "border-primary" : ""
      }`}
    >
      <input
        ref={inputRef}
        onChange={change}
        onFocus={() => navigate("/search")}
        className="py-1 w-[90%] font-normal "
        type="text"
        id="search"
        placeholder="Search"
      />

      {location.pathname === "/search" && (
        <AiOutlineCloseCircle
          fontSize={25}
          className="text-[#B6B6B6] cursor-pointer fill-primary"
          onClick={clearData}
        />
      )}
      {location.pathname === "/" && (
        <label htmlFor="search" className="cursor-pointer">
          <AiOutlineSearch fontSize={25} className="text-[#B6B6B6] " />
        </label>
      )}
    </div>
  );
};

export default SearchBar;
