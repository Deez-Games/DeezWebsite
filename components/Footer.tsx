import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsSteam,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full gap-y-8 py-16 text-textLightGrey">
      <h6 className="text-2xl font-bold">Follow Deez Games on:</h6>
      <div className="flex text-3xl sm:text-4xl justify-between gap-6 sm:gap-16 transit transition-all ease-in-out">
        <span className="">
          <BsYoutube />
        </span>
        <span className="">
          <BsTwitter />
        </span>
        {/* <span className="">
          <BsSteam />
        </span> */}
        <span className="">
          <BsInstagram />
        </span>
        <span className="">
          <BsFacebook />
        </span>
      </div>
    </div>
  );
};

export default Footer;
