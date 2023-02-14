import React, { useCallback, useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { laughEmoji, searchCloud } from "../assets/images";
import { client } from "../client";
import { takeArticles } from "../utlis/data";
import Card from "./Card";
import Loading from "./Loading";
import "react-loading-skeleton/dist/skeleton.css";

const Data = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const query = takeArticles();
    client.fetch(query).then((data) => {
      setData(data);
      setLoading(false);
      setLoadingSkeleton(false);
    });
  }, []);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setLoading(true);
    const query = takeArticles(page);
    client.fetch(query).then((newData) => {
      setData([...data, ...newData]);
      setLoading(false);
      setHasMore(newData.length > 0);
    });
  }, [page]);

  return (
    <div className="mx-2 w-full">
      <div className="mt-[50px] flex flex-wrap md:justify-between justify-center ">
        {loadingSkeleton ? (
          <>
            {Array(6)
              .fill()
              .map(() => (
                <div className=" rounded-t-[20px]  md:w-[45%] min-[520px]:w-[60%] w-full h-[250px] mx-2 my-5 ">
                  <Skeleton height={250} />
                </div>
              ))}
          </>
        ) : (
          data.map(
            (
              { title, mainImage, author, categories, publishedAt, slug },
              index
            ) => {
              if (data.length === index + 1) {
                return (
                  <Card
                    slug={slug}
                    key={index}
                    ref={lastBookElementRef}
                    src={mainImage?.asset?.url}
                    title={title}
                    categories={categories}
                    author={author}
                    publishedAt={publishedAt}
                  />
                );
              } else {
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
            }
          )
        )}
      </div>

      {loading && (
        <Loading text={"Loading content..."} textSize={"30px"} fontSize={30} />
      )}

      {hasMore === false && data.length > 0 && (
        <div className="w-full flex flex-col items-center m-5">
          <img width={150} src={laughEmoji} alt={"laughEmoji"} />
          <p className="mt-5 opacity-50">You reach the end</p>
        </div>
      )}
    </div>
  );
};

export default Data;
