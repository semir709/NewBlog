import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = ({ fontSize, text, textSize }) => {
  return (
    <div className="m-[30px] flex flex-col items-center">
      <AiOutlineLoading3Quarters className="animate-spin" fontSize={fontSize} />
      <p className={`text-[${text}] mt-5`}>{text}</p>
    </div>
  );
};

export default Loading;
