import React, { useEffect, useState } from "react";
import Link from "next/link";

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
      className={`flex justify-center w-full opacity-1 py-5 fixed top-0 z-10 ${
        scrollOnTop ? "" : "bg-darkGrey bg-opacity-60"
      }`}
    >
      <div className="w-[90%] flex justify-end">
        <div className="flex w-1/3 justify-between">
          <Link href="/">
            <span className="hover:text-textHover font-bold cursor-pointer">
              HOME
            </span>
          </Link>
          <Link href="/Games">
            <span className="hover:text-textHover font-bold cursor-pointer">
              GAMES
            </span>
          </Link>
          <Link href="/#AboutUs">
            <span className="hover:text-textHover font-bold cursor-pointer">
              ABOUT
            </span>
          </Link>
          <Link href="/#Contact">
            <span className="hover:text-textHover font-bold cursor-pointer">
              CONTACT
            </span>
          </Link>
          <Link href="/#Investors">
            <span className="hover:text-textHover font-bold cursor-pointer">
              INVESTORS
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
