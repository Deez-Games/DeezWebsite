import React from "react";
import AboutUs from "./sections/AboutUs";
import GamesTiles from "./sections/GamesTiles";
import Slide from "./Slide";
import OurValues from "./sections/OurValues";
import DrivesUs from "./sections/DrivesUs";
import NewsLetter from "./sections/NewsLetter";
import ContactUs from "./sections/ContactUs";

const MainSection = () => {
  return (
    <div className="grid">
      <Slide>
        <GamesTiles />
      </Slide>
      <AboutUs />
      <DrivesUs />
      <OurValues />
      <ContactUs />
      <NewsLetter />
    </div>
  );
};

export default MainSection;
