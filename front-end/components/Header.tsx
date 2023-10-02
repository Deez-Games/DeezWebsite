import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrollOnTop, setScrollOnTop] = useState(true);
  const [showHeaderBgPx, setShowHeaderBgPx] = useState(100);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowHeaderBgPx(window.innerHeight - 10);

      window.addEventListener("scroll", () =>
        setScrollOnTop(window.pageYOffset <= showHeaderBgPx)
      );
    }
  }, []);

  return (
    <div
      className={`hidden md:block flex justify-center items-center w-full opacity-1 py-5 fixed top-0 z-10 ${
        scrollOnTop ? "" : "bg-darkGrey bg-opacity-60"
      }`}
    >
      <div className="w-[95%] flex justify-between">
        <div className="pl-10">
          <Image
            src="/logo.png"
            width={30}
            height={30}
            alt="Deez Games logo"
          />
        </div>
        <div className="flex w-1/3 lg:w-1/4 justify-between gap-2">
          <Link href="/">
            <span className="hover:text-textHover font-bold cursor-pointer">
              HOME
            </span>
          </Link>
          <Link href="/#AboutUs" scroll={false}>
            <span className="hover:text-textHover font-bold cursor-pointer">
              ABOUT
            </span>
          </Link>
          <Link href="/#Games" scroll={false}>
            <span className="hover:text-textHover font-bold cursor-pointer">
              GAMES
            </span>
          </Link>
          <Link href="/#Contact" scroll={false}>
            <span className="hover:text-textHover font-bold cursor-pointer">
              CONTACT
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
