import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsSteam,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full gap-y-10 py-20">
      <div className="flex text-5xl justify-between w-[60rem]">
        <span className="">
          <BsYoutube />
        </span>
        <span className="">
          <BsTwitter />
        </span>
        <span className="">
          <BsSteam />
        </span>
        <span className="">
          <BsInstagram />
        </span>
        <span className="">
          <BsFacebook />
        </span>
      </div>
      <span className="bg-white w-[70rem] h-[1px]"></span>
      <div className="flex w-[50rem] text-xs justify-between">
        <p>Polityka prywatnosci</p>
        <p>Polityka Cookies</p>
        <p>Umowa użytkownika</p>
        <p>Klauzula informacyjna</p>
      </div>
      {/* <p>Copyright &copy; 2023 DEEZ GAMES. All rights resrved.</p> */}
    </div>
  );
};

export default Footer;
