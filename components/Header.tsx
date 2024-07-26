import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import socials from "../data/socials";
import SocialIcon from "./items/SocialIcon";
import Image from "next/image";

const Header = () => {
  function showSideNav() {
    const sideNav = document.querySelector(".side-nav");
    sideNav.classList.replace("translate-x-[100vw]", "translate-x-0");
  }

  return (
    <div
      className={`flex justify-center items-center w-full opacity-1 py-2 fixed top-0 z-10 md:bg-darkGrey md:bg-opacity-60`}
    >
      <div className="w-[95%] flex justify-between">
        <div className="flex items-center gap-6 text-2xl">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/logo.png"
              width={50}
              height={50}
              alt="Deez Games logo"
            />
          </Link>

          {Object.values(socials).map(({ link, icon }) => (
            <SocialIcon key={link} link={link} icon={icon} />
          ))}
        </div>
        <div className="hidden md:flex w-1/3 lg:w-1/4 justify-between gap-2">
          <HeaderLink text="HOME" href={"/"} />
          <HeaderLink text="GAMES" href={"/#Games"} />
          <HeaderLink text="ABOUT" href={"/#AboutUs"} />
          <HeaderLink text="CONTACT" href={"/#Contact"} />
        </div>
        <div className="flex md:hidden justify-between text-3xl">
          <button onClick={showSideNav}>
            <RxHamburgerMenu className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const HeaderLink = ({ text, href }) => {
  return (
    <Link href={href} scroll={text === "HOME"}>
      <span className="hover:text-textHover hover:cursor-pointer font-bold cursor-pointe flex items-center">
        {text}
      </span>
    </Link>
  );
};

export default Header;
