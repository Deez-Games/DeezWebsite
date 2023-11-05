import React from "react";
import GamesTiles from "./sections/GamesTiles";
import SideNav from "./sections/SideNav";
import AboutUs from "./sections/AboutUs";
import OurValues from "./sections/OurValues";
import DrivesUs from "./sections/DrivesUs";
import ContactUs from "./sections/ContactUs";

const MainSection = () => {
  return (
    <div className="grid text-white">
      <SideNav />
      <GamesTiles />
      <AboutUs />
      <DrivesUs />
      <OurValues />
      <ContactUs />
    </div>
  );
};

export default MainSection;
