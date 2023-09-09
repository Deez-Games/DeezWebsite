import React from "react";
import AboutUs from "./sections/AboutUs";
import GamesTiles from "./sections/GamesTiles";
import OurValues from "./sections/OurValues";
import DrivesUs from "./sections/DrivesUs";
import NewsLetter from "./sections/NewsLetter";
import ContactUs from "./sections/ContactUs";

const MainSection = () => {
  return (
    <div className="grid">
      <GamesTiles />
      <AboutUs />
      <DrivesUs />
      <OurValues />
      <ContactUs />
      <NewsLetter />
    </div>
  );
};

export default MainSection;
