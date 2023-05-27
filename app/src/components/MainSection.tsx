import React from "react";
import AboutUs from "./Main Section/AboutUs";
import Slide from "@/components/Slide";
import JoinUs from "@/components/main section/JoinUs";
import GamesTiles from "@/components/main section/GamesTiles";

const MainSection = () => {
  return (
    <div className="grid gap-5 w-[80%] py-8">
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
        <AboutUs />
      </Slide>
    </div>
  );
};

export default MainSection;
