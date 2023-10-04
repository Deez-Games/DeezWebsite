import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const OurValues = () => {

  function hideSideNav() {
    const sideNav = document.querySelector(".side-nav");
    sideNav.classList.replace('translate-x-0','translate-x-[100vw]');
  }

  return (
    <div className="side-nav fixed flex flex-col text-right text-3xl md:hidden top-0 left-0 translate-x-[100vw] transition w-full h-screen bg-darkBg p-4 z-10">
      <button className="flex justify-end pb-10" onClick={hideSideNav}>
        <AiOutlineClose />
      </button>
      <Link className="link" href="/#AboutUs">
        <span onClick={hideSideNav} className="hover:text-textHover cursor-pointer border-b-[1px] p-2 py-2">
          ABOUT
        </span>
      </Link>
      <Link className="link" href="/#Games">
        <span onClick={hideSideNav} className="hover:text-textHover cursor-pointer border-b-[1px] p-2 py-2">
          GAMES
        </span>
      </Link>
      <Link className="link" href="/#Contact">
        <span onClick={hideSideNav} className="hover:text-textHover cursor-pointer border-b-[1px] p-2 py-2">
          CONTACT
        </span>
      </Link>
    </div>
  );
};

export default OurValues;
