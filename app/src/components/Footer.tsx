import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsSteam,
  BsTwitter,
  BsYoutube,
} from "react-icons/all";

const Footer = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full h-[50vh] py-5 py-[3em]">
      <div className="flex text-5xl justify-around w-[80%]">
        <BsYoutube />
        <BsTwitter />
        <BsSteam />
        <BsInstagram />
        <BsFacebook />
      </div>

      <hr className="w-[90%] my-20" />

      <div className="flex justify-around w-[70%]">
        <p>Polityka prywatnosci</p>
        <p>Polityka Cookies</p>
        <p>Umowa użytkownika</p>
        <p>Klauzula informacyjna</p>
      </div>
    </div>
  );
};

export default Footer;
