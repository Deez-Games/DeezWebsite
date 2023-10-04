import React from "react";
import LandingInfo from "../items/LandingInfo";

const Landing = () => {
  return (
    <div className="h-screen md:bg-[url('https://deez-games.github.io/DeezWebsite/GauntlerBaner.png')] md:p-32 md:bg-cover overflow-hidden shadow-insetBottom">
      <LandingInfo />
    </div>
  );
};

export default Landing;
