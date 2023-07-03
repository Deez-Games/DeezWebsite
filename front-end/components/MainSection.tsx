import React from "react";
import AboutUs from "./sections/AboutUs";
import GamesTiles from "./sections/GamesTiles";
import Slide from "./Slide";
import JoinUs from "./sections/JoinUs";
import Investors from "./sections/Investors";

const MainSection = () => {
  return (
    <div className="grid">
      <Slide>
        <GamesTiles />
      </Slide>
      <Slide>
        <JoinUs />
      </Slide>
      <Slide>
        <AboutUs />
      </Slide>
      <Slide>
        <Investors />
      </Slide>
    </div>
  );
};

export default MainSection;
