import React, { useEffect, useState } from "react";
import { empty } from "../assets/images";
import { client } from "../client";
import { searchQuery } from "../utlis/data";
import useDebounce from "../utlis/useDebunce";
import Card from "./Card";
import { BiCategory } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineSubtitles } from "react-icons/md";
import { TbMoodEmpty } from "react-icons/tb";

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
    <div className=" w-full">
      {isDefault && (
        <div className="pt-5">
          <p className="text-gray text-xl font-light">
            You can search the articles by:
          </p>
          <ul className="mt-5">
            <li className="text-primary mb-2 flex items-center">
              <MdOutlineSubtitles />
              <span className="ml-3 font-medium">Title</span>
            </li>
            <li className="text-primary mb-2 flex items-center">
              <AiOutlineUser />
              <span className="ml-3 font-medium">Author Name</span>
            </li>
            <li className="text-primary mb-2 flex items-center">
              <BiCategory />
              <span className="ml-3 font-medium">Categories</span>
            </li>
          </ul>
        </div>
      )}

      {data.length > 0 && (
        <div className="mt-[50px] flex flex-wrap md:justify-between justify-center">
          {data.map(
            (
              { title, mainImage, author, categories, publishedAt, slug },
              index
            ) => {
              return (
                <Card
                  slug={slug}
                  key={index}
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
            <TbMoodEmpty size={200} className="stroke-customGray" />

            <p className="text-1xl text-customGray">
              There is no any article that match your search value
            </p>
          </div>
        )}
    </div>
  );
};

export default Search;
