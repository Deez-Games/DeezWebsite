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
    <div className="flex justify-center flex-col items-center w-full gap-y-10 py-16">
      <h2 className="text-6xl tracking-wider">
        Deez Games <span className="text-xl align-top">&trade;</span>
      </h2>
      <div className="flex w-1/2 justify-around">
        <p>Polityka prywatnosci</p>
        <p>Polityka Cookies</p>
        <p>Umowa użytkownika</p>
        <p>Klauzula informacyjna</p>
      </div>
      <div className="flex text-3xl justify-around w-2/5">
        <span className="rounded-full border border-white p-3">
          <BsYoutube />
        </span>
        <span className="rounded-full border border-white p-3">
          <BsTwitter />
        </span>
        <span className="rounded-full border border-white p-3">
          <BsSteam />
        </span>
        <span className="rounded-full border border-white p-3">
          <BsInstagram />
        </span>
        <span className="rounded-full border border-white p-3">
          <BsFacebook />
        </span>
      </div>
      <div className="grid grid-cols-3 gap-y-3 gap-x-6">
        <input
          type="text"
          className="bg-gray-500 py-2 px-4 col-span-2 placeholder:text-white"
          placeholder="e-mail"
        />
        <button className="bg-primary-button uppercase tracking-wider">
          Subscribe
        </button>
        <div className="flex items-center col-span-2">
          <input type="checkbox" />
          <label className="text-sm px-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </label>
        </div>
      </div>
      <p>Copyright &copy; 2023 DEEZ GAMES. All rights resrved.</p>
    </div>
  );
};

export default Footer;
