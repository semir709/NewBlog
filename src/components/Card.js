import React from "react";

import { deer } from "../assets/images/index";
import { urlFor } from "../client";

const Card = React.forwardRef(({ src, title, categories }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white drop-shadow-md rounded-lg w-[350px] h-[350px] flex flex-col items-center cursor-pointer mx-2 my-5"
    >
      <div className="w-full h-[50%]">
        <img
          className="object-cover rounded-lg w-full h-full"
          src={urlFor(src)}
          alt={deer}
        />
      </div>
      <p className="text-3xl m-5">{title}</p>

      <div className="flex w-full px-2 mt-5">
        {categories?.map(({ title }) => (
          <div className="bg-secondary px-2 rounded-lg ml-2 text-white">
            {title}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Card;
