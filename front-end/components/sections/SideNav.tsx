import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const OurValues = () => {
  return (
    <div className="absolute flex flex-col text-right text-3xl md:hidden top-0 left-0 w-screen h-screen bg-darkBg p-4">
      <button className="flex justify-end pb-10">
        <AiOutlineClose />
      </button>
      <Link href="/#AboutUs">
        <span className="hover:text-textHover cursor-pointer border-b-[1px] p-2 py-2">
          ABOUT
        </span>
      </Link>
      <Link href="/#Games">
        <span className="hover:text-textHover cursor-pointer border-b-[1px] p-2 py-2">
          GAMES
        </span>
      </Link>
      <Link href="/#Contact">
        <span className="hover:text-textHover cursor-pointer border-b-[1px] p-2 py-2">
          CONTACT
        </span>
      </Link>
    </div>
  );
};

export default OurValues;
