import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";
import { takeArticle } from "../utlis/data";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";

const Article = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const query = takeArticle(slug);
    client.fetch(query).then((data) => {
      setData(data[0]);
    });
  }, [slug]);

  const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value.image);
    return (
      <>
        {isInline === false ? (
          <figure className="my-[50px] w-full flex flex-col items-center">
            <img
              className="rounded-md"
              src={urlFor(value.image.asset)
                // .image(value.image.asset)
                .width(isInline ? 100 : 800)
                .fit("max")
                .auto("format")
                .url()}
              alt={value.alternative || " "}
              loading="lazy"
              style={{
                // Display alongside text if image appears inside a block text span
                display: isInline ? "inline-block" : "block",

                // Avoid jumping around with aspect-ratio CSS property
                aspectRatio: width / height,
              }}
            />

            <figcaption className="text-xl mt-3">{value.caption}</figcaption>
          </figure>
        ) : (
          <img
            className="rounded-md"
            src={urlFor(value.image.asset)
              // .image(value.image.asset)
              .width(isInline ? 100 : 800)
              .fit("max")
              .auto("format")
              .url()}
            alt={value.alternative || " "}
            loading="lazy"
            style={{
              // Display alongside text if image appears inside a block text span
              display: isInline ? "inline-block" : "block",

              // Avoid jumping around with aspect-ratio CSS property
              aspectRatio: width / height,
            }}
          />
        )}
      </>
    );
  };

  const serializer = {
    types: {
      imageBlock: SampleImageComponent,
    },
    block: {
      h2: ({ children }) => <h2 className="text-[50px]">{children}</h2>,
    },
  };

  // console.log(data);

  return (
    <>
      {data && (
        <div className="flex flex-col mb-[100px] w-[800px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[25px] h-[25px] rounded-full">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={data.author.image.asset.url}
                  alt={data.author.image.asset.url}
                />
              </div>

              <p className="ml-5">Semir Selman</p>
            </div>

            <div className="">
              <p className="w-fit">
                {new Date(data.publishedAt)?.toLocaleDateString("en-gb", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="w-full h-[350px] mt-5">
            <img
              className="object-cover w-full h-full rounded-md"
              src={data.mainImage.asset.url}
              alt={data.mainImage.asset.url}
            />
          </div>

          <div className="flex mr-2 ">
            {data.categories?.map(({ title }, index) => (
              <div
                key={index}
                className="bg-secondary px-5 py-1 my-3 rounded-lg text-white text-sm"
              >
                {title}
              </div>
            ))}
          </div>

          <PortableText value={data.content} components={serializer} />
        </div>
      )}
    </>
  );
};

export default Article;
