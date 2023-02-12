import React from "react";

import { deer } from "../assets/images/index";
import { urlFor } from "../client";

import { useNavigate } from "react-router-dom";

const Card = React.forwardRef(
  ({ src, title, categories, author, publishedAt, slug }, ref) => {
    const navigate = useNavigate();
    return (
      <div
        className="bg-white overflow-hidden drop-shadow-md rounded-t-[20px]  md:w-[45%] min-[520px]:w-[60%] w-full h-[250px] flex flex-col items-center cursor-pointer mx-2 my-5 relative"
        ref={ref}
        onClick={() => navigate(`/article/${slug?.current}`)}
      >
        <div className="w-full h-full relative group overflow-hidden ">
          <img
            className="object-cover rounded-t-lg w-full h-full "
            src={urlFor(src)}
            alt={deer}
          />

          <div className="bg-black w-full h-full opacity-20 absolute top-0 left-0"></div>
        </div>
        <div
          className={` w-full absolute bottom-0  bg-white  group transition-all`}
        >
          <div className=" w-full bg-white   ">
            <div>{title}</div>
          </div>

          <div className=" ">Lorem ipsum dolor sit amet.</div>
          {/* <p
            className={`text-secondary font-medium text-[20px] -translate-y-full  bg-white w-full  group-hover:text-primary`}
          >
            {title}
          </p> */}

          {/* <div className="flex items-center bg-white">
            <div className="w-[35px] h-[35px] rounded-full relative">
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
          </div> */}
        </div>
      </div>
    );
  }
);

export default Card;

/*

<div
        onClick={() => navigate(`/article/${slug?.current}`)}
        ref={ref}
        className="bg-white drop-shadow-md rounded-t-lg min-[370px]:w-[350px] w-full min-[370px]:h-[350px] h-fit flex flex-col items-center cursor-pointer mx-2 my-5"
      >
        <div className="w-full h-[50%] relative group overflow-hidden">
          <img
            className="object-cover rounded-t-lg w-full h-full "
            src={urlFor(src)}
            alt={deer}
          />

          <div className="bg-black w-full h-full absolute top-0 left-0 opacity-25 rounded-lg group "></div>
        </div>
        <p className="text-2xl text-secondary min-[370px]:mb-5 m-5 mb-[70px] font-normal text-[25px] hover:text-primary">
          {title}
        </p>

        <div className="flex items-center absolute bottom-0 w-full p-3 flex-wrap ">
          <div className="flex mr-2 ">
            {categories?.map(({ title }, index) => (
              <div
                key={index}
                className="bg-primary px-2 rounded-lg ml-2 text-white text-sm"
              >
                {title}
              </div>
            ))}
          </div>

          <div className="flex min-[300px]:ml-auto min-[300px]:mt-0 mt-2">
            <div className="w-[23px] h-[23px] rounded-full relative">
              <img
                className="object-cover w-full h-full rounded-full"
                src={author?.image?.asset?.url}
                alt={author?.image?.asset?.url}
              />

              <div className="bg-black w-full h-full absolute rounded-full top-0 opacity-10"></div>
            </div>

            <p className="mx-2 text-secondary font-light">
              {author?.name.split(" ")[0]}
            </p>

            <div className="w-fit">
              <p className="w-fit">
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
*/

/*
 <div
          className={`bg-white w-full absolute bottom-0 rounded-tl-[25px]  px-3 py-2 ${
            title.length > 44
              ? "h-[75px]  hover:h-[150px]"
              : "h-[45px]  hover:h-[115px]"
          } group transition-all`}
        >
          <div className="mx-5">
            <p
              className={`text-secondary font-medium text-[20px] ${
                title.length > 22 ? "h-[75px]" : "h-[40px]"
              } group-hover:text-primary`}
            >
              {title}
            </p>

            <div className="flex items-center">
              <div className="w-[35px] h-[35px] rounded-full relative">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={author?.image?.asset?.url}
                  alt={author?.image?.asset?.url}
                />

                <div className="bg-black w-full h-full absolute rounded-full top-0 opacity-10"></div>
              </div>

              <div className="ml-4">
                <p className="mx-2 text-secondary font-normal">
                  {author?.name}
                </p>
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
*/
