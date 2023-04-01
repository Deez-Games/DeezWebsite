import React from "react";
import style from "../scss/Header.module.scss";

const Header = () => {
  return (
    <div className={style.container}>
      <a href="#">Main Page</a>
      <a href="#AboutUs">About us</a>
      <a href="#Slideshow_bgcImages">Our games</a>
    </div>
  );
};

export default Header;
