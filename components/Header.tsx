import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

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
  }, [showHeaderBgPx]);

  function showSideNav() {
    const sideNav = document.querySelector(".side-nav");
    sideNav.classList.replace('translate-x-[100vw]','translate-x-0');
  }

  return (
    <div
      className={`flex justify-center items-center w-full opacity-1 py-5 fixed top-0 z-10 ${
        scrollOnTop ? "" : "bg-darkGrey bg-opacity-60"
      }`}
    >
      <div className="w-[95%] flex justify-between">
        <div className="pl-10">
          <Link href="/">
            <img
              className="cursor-pointer"
              src="logo.png"
              width={30}
              height={30}
              alt="Deez Games logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex w-1/3 lg:w-1/4 justify-between gap-2">
          <Link href="/">
            <span className="hover:text-textHover font-bold cursor-pointer">
              HOME
            </span>
          </Link>
          <Link href="/#Games" scroll={false}>
            <span className="hover:text-textHover font-bold cursor-pointer">
              GAMES
            </span>
          </Link>
          <Link href="/#AboutUs" scroll={false}>
            <span className="hover:text-textHover font-bold cursor-pointer">
              ABOUT
            </span>
          </Link>
          <Link href="/#Contact" scroll={false}>
            <span className="hover:text-textHover font-bold cursor-pointer">
              CONTACT
            </span>
          </Link>
        </div>
        <div className="flex md:hidden justify-between text-3xl">
          <div></div>
          <button onClick={showSideNav}>
            <RxHamburgerMenu className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
