import React from "react";
import AboutUs from "./Main Section/AboutUs";
import { FaBeer } from "react-icons/fa";

const MainSection = () => {

  return (
    <div className="grid gap-5 w-[90%] py-8">
      <h1>
        Hello world! <FaBeer />
      </h1>
      <AboutUs />
      <AboutUs />
      <AboutUs />
      <AboutUs />
    </div>
  );
};

export default MainSection;
