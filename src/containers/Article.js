import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";
import { takeArticle } from "../utlis/data";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { CopyBlock, dracula } from "react-code-blocks";
import Loading from "../components/Loading";
import { serializer } from "../utlis/serializer";

const Article = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = takeArticle(slug);
    client.fetch(query).then((data) => {
      setData(data[0]);
      setLoading(false);
    });
  }, [slug]);

  return (
    <>
      {data && (
        <div className="flex flex-col mb-[100px] w-[800px] mx-3">
          {loading && (
            <Loading
              text={"Loading content..."}
              textSize={"30px"}
              fontSize={30}
            />
          )}

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[25px] h-[25px] rounded-full relative">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={data.author.image.asset.url}
                  alt={data.author.image.asset.url}
                />
                <div className="bg-black w-full h-full absolute rounded-full top-0 opacity-10"></div>
              </div>

              <p className="ml-5 text-customGray">Semir Selman</p>
            </div>

            <div className="">
              <p className="w-fit text-customGray">
                {new Date(data.publishedAt)?.toLocaleDateString("en-gb", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <h1 className="text-6xl my-4 text-customGray">{data.title}</h1>

          <div className="w-full h-[350px] mt-5 relative">
            <img
              className="object-cover w-full h-full rounded-md"
              src={data.mainImage.asset.url}
              alt={data.mainImage.asset.url}
            />
            <div className="bg-black w-full h-full opacity-20 absolute top-0 left-0"></div>
          </div>

          {/* <div className="flex mr-2">
            {data.categories?.map(({ title }, index) => (
              <div
                key={index}
                className="bg-secondary px-5 py-1 my-3 rounded-lg text-white text-sm"
              >
                {title}
              </div>
            ))}
          </div> */}

          <div className="mt-[50px]">
            <PortableText value={data.content} components={serializer} />
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
