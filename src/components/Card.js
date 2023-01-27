import React from "react";

import { deer } from "../assets/images/index";

const Card = ({ src, name, tags }) => {
  return (
    <div className="bg-white drop-shadow-md rounded-lg w-[350px] h-[350px] flex flex-col items-center cursor-pointer mx-2 my-5">
      <div className="w-full h-[50%]">
        <img
          className="object-cover rounded-lg w-full h-full"
          src={deer}
          alt={deer}
        />
      </div>
      <p className="text-3xl m-5">{name}</p>

      <div className="flex w-full px-2 mt-5">
        {tags.map((el) => (
          <div className="bg-secondary px-2 rounded-lg ml-2 text-white">
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
