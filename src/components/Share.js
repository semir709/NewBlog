import React, { useState } from "react";
import { share } from "../assets/images/index";
import { facebook, instagram, twitter } from "../assets/images/index";

const Share = () => {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    if (toggle === true) setToggle(false);
    if (toggle === false) setToggle(true);
  };

  return (
    <div className="realtive">
      <div
        onClick={onClick}
        className="bg-action w-[45px] h-[45px] rounded-full cursor-pointer text-white flex items-center justify-center"
      >
        <div className="w-full flex justify-center p-2">
          <img className="object-cover" src={share} alt={share.slice(0, 4)} />
        </div>
      </div>

      {toggle && (
        <div className="absolute top-[110%] left-0 rounded bg-action text-white p-3 flex flex-col items-center ">
          <p className="text-[25px] ">Share</p>
          <div className="bg-white h-[2px] w-full mb-3"></div>
          <div className="flex justify-around">
            <div className="w-[30px] flex justify-center mx-2 cursor-pointer">
              <img
                className="object-cover"
                src={facebook}
                alt={facebook.slice(0, 4)}
              />
            </div>
            <div className="w-[30px] flex justify-center mx-2 cursor-pointer">
              <img
                className="object-cover"
                src={twitter}
                alt={twitter.slice(0, 4)}
              />
            </div>
            <div className="w-[30px] flex justify-center mx-2 cursor-pointer">
              <img
                className="object-cover"
                src={instagram}
                alt={instagram.slice(0, 4)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
