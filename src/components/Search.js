import React, { useEffect, useState } from "react";
import { client } from "../client";
import { searchQuery, takeArticles } from "../utlis/data";
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

  return (
    <div>
      {isDefault && <h2>Is default</h2>}

      {data.length > 0 && (
        <div className="mt-[50px] flex flex-wrap justify-between">
          {data.map(
            ({ title, mainImage, author, categories, publishedAt }, index) => {
              return (
                <Card
                  src={mainImage?.asset?.url}
                  title={title}
                  categories={categories}
                />
              );
            }
          )}
        </div>
      )}

      {data.length <= 0 &&
        loading === false &&
        debouncedSearchValue.length > 0 && <h2>Not match articles</h2>}
    </div>
  );
};

export default Search;
