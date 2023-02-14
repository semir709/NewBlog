import React, { useState } from "react";
import { urlFor } from "../client";

import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Card = React.forwardRef(
  ({ src, title, categories, author, publishedAt, slug }, ref) => {
    const navigate = useNavigate();
    const [imageLoading, setImageLoading] = useState(false);
    return (
      <div
        className="bg-white group overflow-hidden drop-shadow-md rounded-t-[20px]  md:w-[45%] min-[520px]:w-[60%] w-full h-[250px] flex flex-col items-center cursor-pointer mx-2 my-5 relative"
        ref={ref}
        onClick={() => navigate(`/article/${slug?.current}`)}
      >
        <div className="w-full h-full relative group overflow-hidden ">
          {!imageLoading && <Skeleton className="w-full h-full" />}
          <img
            onLoad={() => setImageLoading(true)}
            className="object-cover rounded-t-lg w-full h-full "
            src={urlFor(src)}
            alt={src}
            style={{ display: imageLoading ? "block" : "none" }}
          />

          <div className="bg-black w-full h-full opacity-20 absolute top-0 left-0"></div>
        </div>
        <div
          className={` w-full absolute bottom-0  bg-white  group-hover:rounded-tl-[20px] translate-y-full transition-all group-hover:translate-y-0`}
        >
          <div className=" w-full p-2 bg-white rounded-tl-[20px]  translate-y-[-100%] group-hover:translate-y-0 transition text-customGray text-[20px] font-normal">
            <div>{title}</div>
          </div>

          <div className="flex items-center px-2 ">
            <div className="w-[35px] h-[35px] relative">
              <img
                className="object-cover w-full h-full rounded-full"
                src={author?.image?.asset?.url}
                alt={author?.image?.asset?.url}
              />

              <div className="bg-black w-full h-full absolute rounded-full top-0 opacity-10"></div>
            </div>

            <div className="ml-4">
              <p className="mx-2 text-secondary font-normal">{author?.name}</p>
              <div className="w-fit mx-2">
                <p className="w-fit text-secondary font-normal text-[15px]">
                  {new Date(publishedAt)?.toLocaleDateString("en-gb", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
