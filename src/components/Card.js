import React from "react";

import { deer } from "../assets/images/index";
import { urlFor } from "../client";

const Card = React.forwardRef(
  ({ src, title, categories, author, publishedAt }, ref) => {
    console.log(publishedAt);
    return (
      <div
        ref={ref}
        className="bg-white drop-shadow-md rounded-lg min-[370px]:w-[350px] w-full min-[370px]:h-[350px] h-fit flex flex-col items-center cursor-pointer mx-2 my-5"
      >
        <div className="w-full h-[50%]">
          <img
            className="object-cover rounded-lg w-full h-full"
            src={urlFor(src)}
            alt={deer}
          />
        </div>
        <p className="text-2xl min-[370px]:mb-5 m-5 mb-[70px]">{title}</p>

        <div className="flex items-center absolute bottom-0 w-full p-3 flex-wrap ">
          <div className="flex mr-2 ">
            {categories?.map(({ title }, index) => (
              <div
                key={index}
                className="bg-secondary px-2 rounded-lg ml-2 text-white text-sm"
              >
                {title}
              </div>
            ))}
          </div>

          <div className="flex min-[300px]:ml-auto min-[300px]:mt-0 mt-2">
            <div className="w-[23px] h-[23px] rounded-full">
              <img
                className="object-cover w-full h-full rounded-full"
                src={author?.image?.asset?.url}
                alt={author?.image?.asset?.url}
              />
            </div>

            <p className="mx-2">{author?.name.split(" ")[0]}</p>

            {/* <div className="w-fit">
              <p className="w-fit">
                {new Date(publishedAt)?.toLocaleDateString("en-gb", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
