import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [scrollOnTop, setScrollOnTop] = useState(true);
  const [showHeaderBgPx, setShowHeaderBgPx] = useState(100);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowHeaderBgPx(window.innerHeight - 10);

      window.addEventListener("scroll", () =>
        setScrollOnTop(window.scrollY <= showHeaderBgPx)
      );
    }
  }, [showHeaderBgPx]);

  function showSideNav() {
    const sideNav = document.querySelector(".side-nav");
    sideNav.classList.replace("translate-x-[100vw]", "translate-x-0");
  }

  return (
    <div
      className={`flex justify-center items-center w-full opacity-1 py-5 fixed top-0 z-10 ${
        scrollOnTop ? "" : "md:bg-darkGrey md:bg-opacity-60"
      }`}
    >
      <div className="w-[95%] flex justify-between">
        <Link href="/">
          <img
            className="cursor-pointer"
            src="/logo.png"
            width={30}
            height={30}
            alt="Deez Games logo"
          />
        </Link>
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
      <span className="hover:text-textHover font-bold cursor-pointer">
        {text}
      </span>
    </Link>
  );
};

export default Header;
