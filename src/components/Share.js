import React, { useState } from "react";
import { share } from "../assets/images/index";
import { facebook, instagram, twitter } from "../assets/images/index";

import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

import { SocialIcon } from "react-social-icons";

const Share = () => {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    if (toggle === true) setToggle(false);
    if (toggle === false) setToggle(true);
  };

  const website = "http://localhost:3000/"; //add url of the webiste

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
            <FacebookShareButton url={website} style={{ margin: 5 }}>
              <SocialIcon
                network="facebook"
                round={true}
                fgColor="#00C6BA"
                bgColor="#ffff"
                style={{ height: 35, width: 35 }}
              />
            </FacebookShareButton>
            <TwitterShareButton url={website} style={{ margin: 5 }}>
              <SocialIcon
                network="twitter"
                round={true}
                fgColor="#00C6BA"
                bgColor="#ffff"
                style={{ height: 35, width: 35 }}
              />
            </TwitterShareButton>
            <RedditShareButton url={website} style={{ margin: 5 }}>
              <SocialIcon
                network="reddit"
                round={true}
                fgColor="#00C6BA"
                bgColor="#ffff"
                style={{ height: 35, width: 35 }}
              />
            </RedditShareButton>
            <LinkedinShareButton url={website} style={{ margin: 5 }}>
              <SocialIcon
                network="linkedin"
                round={true}
                fgColor="#00C6BA"
                bgColor="#ffff"
                style={{ height: 35, width: 35 }}
              />
            </LinkedinShareButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
