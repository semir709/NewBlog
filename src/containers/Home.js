import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import AppWrap from "../wrapper/AppWrap";

import { Routes, Route } from "react-router-dom";
import Data from "../components/Data";
import Search from "../components/Search";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-col items-center mb-[100px] max-w-[900px] mx-2">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/search" element={<Search searchValue={searchValue} />} />
      </Routes>
    </div>
  );
};

export default AppWrap(Home);
