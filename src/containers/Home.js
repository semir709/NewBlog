import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Loading from "../components/Loading";
import AppWrap from "../wrapper/AppWrap";

import { client } from "../client";
import { takeArticles } from "../utlis/data";

const Home = () => {
  const [searching, setSearching] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const query = takeArticles;

    client.fetch(query).then((data) => {
      console.log(data);
      setData(data);
      setSearching(false);
    });
  }, []);

  return (
    <div className="flex flex-col items-center mb-[100px] max-w-[800px]">
      <SearchBar searching={searching} setSearching={setSearching} />

      {searching ? (
        <Loading text={"Loading content..."} textSize={"30px"} fontSize={30} />
      ) : (
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
    </div>
  );
};

export default AppWrap(Home);
