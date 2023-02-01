import React, { useEffect, useState } from "react";
import { empty } from "../assets/images";
import { client } from "../client";
import { searchQuery } from "../utlis/data";
import useDebounce from "../utlis/useDebunce";
import Card from "./Card";

const Search = ({ searchValue }) => {
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isDefault, setIsDefault] = useState(true);

  useEffect(() => {
    setData([]);
    if (debouncedSearchValue === "") {
      setIsDefault(true);
      setData([]);
      setLoading(false);
    } else {
      if (loading) return;
      setLoading(true);
      const query = searchQuery(debouncedSearchValue);
      client.fetch(query).then((data) => {
        setData(data);
        setIsDefault(false);
        setLoading(false);
      });
    }
  }, [debouncedSearchValue]);

  console.log(data);

  return (
    <div className=" w-full">
      {isDefault && (
        <div className="pt-5">
          <p className="opacity-50 text-xl">You can search the articles by:</p>
          <ul>
            <li className="">Title</li>
            <li className="">Author Name</li>
            <li className="">Categories</li>
          </ul>
        </div>
      )}

      {data.length > 0 && (
        <div className="mt-[50px] flex flex-wrap md:justify-between justify-center">
          {data.map(
            ({ title, mainImage, author, categories, publishedAt }, index) => {
              return (
                <Card
                  src={mainImage?.asset?.url}
                  title={title}
                  categories={categories}
                  author={author}
                  publishedAt={publishedAt}
                />
              );
            }
          )}
        </div>
      )}

      {data.length <= 0 &&
        loading === false &&
        debouncedSearchValue.length > 0 && (
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

export default Search;
