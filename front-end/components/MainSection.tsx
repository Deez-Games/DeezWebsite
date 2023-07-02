import React from "react";
import AboutUs from "./main section/AboutUs";
import GamesTiles from "./main section/GamesTiles";
import Slide from "./Slide";
import JoinUs from "./main section/JoinUs";
import Investors from "./main section/Investors";

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
