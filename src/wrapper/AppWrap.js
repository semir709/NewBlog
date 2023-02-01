import React from "react";
import Share from "../components/Share";

const AppWrap = (Component) =>
  function HOC() {
    return (
      <div className="w-full min-h-screen flex flex-col items-center">
        <div className="fixed top-[50%] left-[10px] z-50">
          <Share />
        </div>
        <Component />
      </div>
    );
  };

export default AppWrap;
