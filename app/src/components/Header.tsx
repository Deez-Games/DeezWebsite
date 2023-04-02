import React from "react";
import style from "../scss/Header.module.scss";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.links}>
          <a href="#" className={style.link}>
            Main Page
          </a>
          <a href="#AboutUs" className={style.link}>
            About us
          </a>
          <a href="#Slideshow_bgcImages" className={style.link}>
            Our games
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
