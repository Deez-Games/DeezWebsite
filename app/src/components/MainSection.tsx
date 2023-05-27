import React from "react";
import AboutUs from "./Main Section/AboutUs";
import Slideshow from "../features/Slideshow";
import "../index.css";
import { FaBeer } from "react-icons/fa";

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
    <div className="grid gap-5 w-[90%] py-8">
      <h1>
        Hello world! <FaBeer />
      </h1>
      <AboutUs />
      <AboutUs />
      <Slideshow images={bgcImages} id={"bgcImages"} />
      <AboutUs />
      <AboutUs />
    </div>
  );
};

export default MainSection;
