import React from "react";

const SocialIcon = ({ link, icon }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="hover:text-textHover font-bold cursor-pointer"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
