import React, {
  useEffect,
  useState,
  useDebaunde,
  useRef,
  useCallback,
} from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Loading from "../components/Loading";
import AppWrap from "../wrapper/AppWrap";

import { client } from "../client";
import { searchQuery, takeArticles } from "../utlis/data";
import useDebounce from "../utlis/useDebunce";
import { empty, searchCloud } from "../assets/images";

import { Routes, Route } from "react-router-dom";
import Data from "../components/Data";
import Search from "../components/Search";

const Home = () => {
  const [searchLoading, setSearchLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const [infinitiveLoading, setInfinitiveLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  return (
    <div className="flex flex-col items-center mb-[100px] max-w-[800px]">
      <SearchBar
        loading={searchLoading}
        setLoading={searchLoading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/search" element={<Search searchValue={searchValue} />} />
      </Routes>

      {/* {searchLoading && (
        <Loading text={"Loading content..."} textSize={"30px"} fontSize={30} />
      )}

      {data.length === 0 && !searchLoading && (
        <div className="p-5 flex flex-col items-center">
          <img width={300} src={empty} alt={empty} />

          <p className="text-1xl opacity-50">
            There is no any article that match your search value
          </p>
        </div>
      )}

       */}
    </div>
  );
};

export default AppWrap(Home);
