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

const Home = () => {
  const [searchLoading, setSearchLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const [infinitiveLoading, setInfinitiveLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const query = takeArticles();
    setInfinitiveLoading(true);
    client.fetch(query).then((data) => {
      setData(data);
      setInfinitiveLoading(false);
    });
  }, []);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearchValue.length > 1) {
      if (searchLoading) return;
      setSearchLoading(true);
      const query = searchQuery(debouncedSearchValue);
      client.fetch(query).then((data) => {
        setData(data);
        setSearchLoading(false);
      });
    } else if (debouncedSearchValue.length === 1) {
      const query = takeArticles();
      client.fetch(query).then((data) => {
        setPage(0);
        setData(data);
        setSearchLoading(false);
      });
    }
  }, [debouncedSearchValue]);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (searchLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [searchLoading, hasMore]
  );

  useEffect(() => {
    setInfinitiveLoading(true);
    const query = takeArticles(page);
    client.fetch(query).then((newData) => {
      setData([...data, ...newData]);
      setInfinitiveLoading(false);
      setHasMore(newData.length > 0);
    });
  }, [page]);

  return (
    <div className="flex flex-col items-center mb-[100px] max-w-[800px]">
      <SearchBar
        loading={searchLoading}
        setLoading={searchLoading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {searchLoading && (
        <Loading text={"Loading content..."} textSize={"30px"} fontSize={30} />
      )}

      {data.length === 0 && debouncedSearchValue !== "" && !searchLoading && (
        <div className="p-5 flex flex-col items-center">
          <img width={300} src={empty} alt={empty} />

          <p className="text-1xl opacity-50">
            There is no any article that match your search value
          </p>
        </div>
      )}

      {data.length > 0 && (
        <div className="mt-[50px] flex flex-wrap justify-between">
          {data.map(
            ({ title, mainImage, author, categories, publishedAt }, index) => {
              if (data.length === index + 1) {
                return (
                  <Card
                    ref={lastBookElementRef}
                    src={mainImage?.asset?.url}
                    title={title}
                    categories={categories}
                  />
                );
              } else {
                return (
                  <Card
                    src={mainImage?.asset?.url}
                    title={title}
                    categories={categories}
                  />
                );
              }
            }
          )}
        </div>
      )}

      {infinitiveLoading && (
        <Loading text={"Loading content..."} textSize={"30px"} fontSize={30} />
      )}

      {hasMore === false && data.length > 0 && (
        <div className="w-full flex flex-col items-center m-5">
          <img width={150} src={searchCloud} alt={searchCloud} />
          <p className="mt-5 opacity-50">You reach the end</p>
        </div>
      )}
    </div>
  );
};

export default AppWrap(Home);
