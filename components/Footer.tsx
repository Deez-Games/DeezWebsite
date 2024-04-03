import React from "react";
import socials from "../data/socials";
import SocialIcon from "./items/SocialIcon";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full gap-y-8 py-16 text-textLightGrey">
      <h6 className="text-2xl font-bold">Follow Deez Games on:</h6>
      <div className="flex text-3xl sm:text-4xl justify-between gap-6 sm:gap-16 transit transition-all ease-in-out">
        {Object.values(socials).map(({ link, icon }) => (
          <SocialIcon key={link} link={link} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
