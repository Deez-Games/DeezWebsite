import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function hideSideNav() {
  const sideNav = document.querySelector(".side-nav");
  sideNav.classList.replace("translate-x-0", "translate-x-[100vw]");
}

const OurValues = () => {
  return (
    <div className="side-nav fixed flex flex-col text-right text-3xl md:hidden top-0 left-0 translate-x-[100vw] transition w-full h-screen bg-darkBg p-4 z-10">
      <button className="flex justify-end pb-4" onClick={hideSideNav}>
        <AiOutlineClose />
      </button>
      <HeaderLink text={"HOME"} href={"/"} />
      <HeaderLink text={"GAMES"} href={"/#Games"} />
      <HeaderLink text={"ABOUT"} href={"/#AboutUs"} />
      <HeaderLink text={"CONTACT"} href={"/#Contact"} />
    </div>
  );
};

const HeaderLink = ({ text, href }) => {
  return (
    <Link className="link" href={href} scroll={text === "HOME"}>
      <span
        onClick={hideSideNav}
        className="hover:text-textHover cursor-pointer p-2 py-2"
      >
        {text}
      </span>
    </Link>
  );
};

export default OurValues;
