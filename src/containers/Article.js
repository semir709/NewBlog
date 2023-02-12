import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";
import { takeArticle } from "../utlis/data";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { CopyBlock, dracula } from "react-code-blocks";
import Loading from "../components/Loading";

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

  const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value.image);
    return (
      <>
        {isInline === false ? (
          <figure className="my-[50px] w-full flex flex-col items-center">
            <img
              className="rounded-md"
              src={urlFor(value.image.asset)
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

            <figcaption className="text-xl mt-3 text-gray">
              {value.caption}
            </figcaption>
          </figure>
        ) : (
          <img
            className="rounded-md"
            src={urlFor(value.image.asset)
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
      codeBlock: (props) => (
        <CopyBlock
          language={props.value.language}
          text={props.value.code}
          theme={dracula}
        />
      ),
    },

    marks: {
      link: ({ children, value }) => {
        const target = "_blank";
        return (
          <a
            className="cursor-pointer text-primary "
            target={target}
            href={value?.href}
          >
            {children}
          </a>
        );
      },
      code: ({ children }) => <code className="bg-gray-300">{children}</code>,
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="list-disc ml-5 text-customGray">{children}</li>
      ),
      number: ({ children }) => (
        <li className="list-decimal ml-5 text-customGray">{children}</li>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="my-3">{children}</ul>,
      number: ({ children }) => <ol className="my-3">{children}</ol>,
    },

    block: {
      h1: ({ children }) => (
        <h1 className="text-6xl my-4 text-customGray">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-5xl my-4 text-customGray">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-4xl my-4 text-customGray">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-3xl my-4 text-customGray">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="text-2xl my-4 text-customGray">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="text-1xl my-4 text-customGray">{children}</h6>
      ),
      blockquote: ({ children }) => (
        <blockquote className="text-lg font-medium text-gray-700 mx-4 my-8 pl-4 border-l-4 border-gray-300">
          {children}
        </blockquote>
      ),
      normal: ({ children }) => (
        <p className="mb-3 text-customGray">{children}</p>
      ),
    },
  };

  console.log(data);

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
