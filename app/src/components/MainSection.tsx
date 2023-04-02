import React from "react";
import AboutUs from "./Main Section/AboutUs";
import style from "../scss/MainSection.module.scss";
import Slideshow from "../features/Slideshow";

const MainSection = () => {
  const bgcImages = [
    "desert.png",
    "exit.png",
    "freeze.png",
    "lavaworld.png",
    "magic.png",
    "startowe.png",
    "water_well.png",
  ];

  return (
    <div className={style.container}>
      <AboutUs />
      <AboutUs />
      <Slideshow images={bgcImages} id={"bgcImages"} />
      <AboutUs />
      <AboutUs />
    </div>
  );
};

export default MainSection;
