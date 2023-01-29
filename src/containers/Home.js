import React, { useEffect, useState, useDebaunde } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Loading from "../components/Loading";
import AppWrap from "../wrapper/AppWrap";

import { client } from "../client";
import { searchQuery, takeArticles } from "../utlis/data";
import useDebounce from "../utlis/useDebunce";
import { empty } from "../assets/images";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const query = takeArticles;

    client.fetch(query).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearchValue.length !== 1) {
      setLoading(true);
      const query = searchQuery(debouncedSearchValue);
      client.fetch(query).then((data) => {
        setData(data);
        setLoading(false);
      });
    } else {
      const query = takeArticles;

      client.fetch(query).then((data) => {
        if (!data) setData(null);
        else setData(data);
        setLoading(false);
      });
    }
  }, [debouncedSearchValue]);

  return (
    <div className="flex flex-col items-center mb-[100px] max-w-[800px]">
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {loading && (
        <Loading text={"Loading content..."} textSize={"30px"} fontSize={30} />
      )}

      {data.length > 0 && (
        <div className="mt-[50px] flex flex-wrap justify-between">
          {data.map(({ title, mainImage, author, categories, publishedAt }) => (
            <Card
              src={mainImage.asset.url}
              title={title}
              categories={categories}
            />
          ))}
        </div>
      )}

      {data.length === 0 && debouncedSearchValue !== "" && !loading && (
        <div className="p-5 flex flex-col items-center">
          <img width={300} src={empty} alt={empty} />

          <p className="text-1xl opacity-50">
            There is no any article that match your search value
          </p>
        </div>
      )}
    </div>
  );
};

export default AppWrap(Home);
