import React from "react";
import AboutUs from "./Main Section/AboutUs";
import Slide from "@/components/Slide";
import JoinUs from "@/components/Main Section/JoinUs";
import GamesTiles from "@/components/Main Section/GamesTiles";
import Investors from "@/components/Main Section/Investors";

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
