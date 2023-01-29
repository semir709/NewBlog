import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Loading from "../components/Loading";
import AppWrap from "../wrapper/AppWrap";

import { client } from "../client";
import { takeArticles } from "../utlis/data";

const data = [
  {
    src: "",
    name: "Some deer",
    tags: ["Nature", "Wild", "Green"],
  },
  {
    src: "",
    name: "Some deer",
    tags: ["Nature", "Wild", "Green"],
  },
];

const Home = () => {
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const query = takeArticles;

    client.fetch(query).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center mb-[100px] max-w-[800px]">
      <SearchBar searching={searching} setSearching={setSearching} />

      {searching ? (
        <Loading
          text={"Loading more content..."}
          textSize={"30px"}
          fontSize={30}
        />
      ) : (
        <div className="mt-[50px] flex flex-wrap justify-between">
          {data.map(({ src, name, tags }) => (
            <Card src={src} name={name} tags={tags} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppWrap(Home);
