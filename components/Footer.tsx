import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsSteam,
  BsTwitter,
  BsYoutube,
  BsTiktok,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full gap-y-8 py-16 text-textLightGrey">
      <h6 className="text-2xl font-bold">Follow Deez Games on:</h6>
      <div className="flex text-3xl sm:text-4xl justify-between gap-6 sm:gap-16 transit transition-all ease-in-out">
        {/* <Link href="https://www.instagram.com/deezgamesofficial/" className="cursor-pointer hover:text-textHover">
          <BsYoutube />
        </Link> */}
        <Link href="https://x.com/deezgames_?s=21">
          <span className="hover:text-textHover font-bold cursor-pointer">
            <BsTwitter />
          </span>
        </Link>
        {/* <Link href="https://www.instagram.com/deezgamesofficial/" className="hover:text-textHover">
          <BsSteam />
        </span> */}
        <Link href="https://www.instagram.com/deezgamesofficial/" className="cursor-pointer hover:text-textHover">
          <span className="hover:text-textHover font-bold cursor-pointer">
            <BsInstagram />
          </span>
        </Link>
        <Link href="https://www.tiktok.com/@deezgames_?is_from_webapp=1&sender_device=pc" className="cursor-pointer hover:text-textHover">
          <span className="hover:text-textHover font-bold cursor-pointer">
            <BsTiktok />
          </span>
        </Link>
        {/* <Link href="https://www.instagram.com/deezgamesofficial/" className="hover:text-textHover">
          <BsFacebook />
        </Link> */}
      </div>
    </div>
  );
};

export default Footer;
