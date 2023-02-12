import { getImageDimensions } from "@sanity/asset-utils";
import { CopyBlock, dracula } from "react-code-blocks";
import { urlFor } from "../client";

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

export const serializer = {
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
