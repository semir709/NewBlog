import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

import { Routes, Route } from "react-router-dom";
import Data from "../components/Data";
import Search from "../components/Search";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-col items-center mb-[100px] max-w-[900px] w-full ">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/search" element={<Search searchValue={searchValue} />} />
      </Routes>
    </div>
  );
};

export default Home;
