import React from "react";
import AboutUs from "./sections/AboutUs";
import OurValues from "./sections/OurValues";
import DrivesUs from "./sections/DrivesUs";
import ContactUs from "./sections/ContactUs";

const MainSection = () => {
  return (
    <div className="grid">
      <AboutUs />
      <DrivesUs />
      <OurValues />
      <ContactUs />
    </div>
  );
};

export default MainSection;
