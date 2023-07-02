import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center w-full opacity-1 py-5 fixed top-0 z-10">
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
