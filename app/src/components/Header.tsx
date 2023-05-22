import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center w-full bg-[#18293a] py-5">
      <div className="w-[90%]">
        <div className="flex w-1/2 justify-between">
          <a href="#" className="no-underline text- text-gray-100 hover:text-[#c8cad2]">
            Main Page
          </a>
          <a href="#AboutUs" className="no-underline text- text-gray-100 hover:text-[#c8cad2]">
            About us
          </a>
          <a href="#Slideshow_bgcImages" className="no-underline text- text-gray-100 hover:text-[#c8cad2]">
            Our games
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
