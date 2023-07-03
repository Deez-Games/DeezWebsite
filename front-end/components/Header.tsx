import React, {useEffect, useState} from "react";

const Header = () => {
  const [scrollOnTop, setScrollOnTop] = useState(true);
  const [showHeaderBgPx, setShowHeaderBgPx] = useState(100);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowHeaderBgPx(window.innerHeight - 10)

      window.addEventListener("scroll", () =>
          setScrollOnTop(window.pageYOffset <= showHeaderBgPx)
      );
    }
  }, [])

  return (
    <div className={`flex justify-center w-full opacity-1 py-5 fixed top-0 z-10 ${scrollOnTop ? "" : "bg-darkGrey bg-opacity-25"}`}>
      <div className="w-[90%] flex justify-end">
        <div className="flex w-1/3 justify-between">
          <a
            href="#Games"
            className="no-underline text- text-gray-100 hover:text-[#c8cad2] font-bold"
          >
            GAMES
          </a>
          <a
            href="#AboutUs"
            className="no-underline text- text-gray-100 hover:text-[#c8cad2] font-bold"
          >
            ABOUT
          </a>
          <a
            href="#Contact"
            className="no-underline text- text-gray-100 hover:text-[#c8cad2] font-bold"
          >
            CONTACT
          </a>
          <a
            href="#Investors"
            className="no-underline text- text-gray-100 hover:text-[#c8cad2] font-bold"
          >
            INVESTORS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
