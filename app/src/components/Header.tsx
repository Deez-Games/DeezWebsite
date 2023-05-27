import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center w-full opacity-1 py-5 sticky top-0 ">
      <div className="w-[90%] flex justify-end">
        <div className="flex w-1/3 justify-between">
          <a
            href="#Games"
            className="no-underline text- text-gray-100 hover:text-[#c8cad2]"
          >
            GAMES
          </a>
          <a
            href="#AboutUs"
            className="no-underline text- text-gray-100 hover:text-[#c8cad2]"
          >
            ABOUT
          </a>
          <a
            href="#Slideshow_bgcImages"
            className="no-underline text- text-gray-100 hover:text-[#c8cad2]"
          >
            CONTACT
          </a>
          <a
            href="#Slideshow_bgcImages"
            className="no-underline text- text-gray-100 hover:text-[#c8cad2]"
          >
            INVESTORS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
