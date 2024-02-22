import React from "react";
import LandingInfo from "../items/LandingInfo";

const Landing = () => {
  return (
    <div className="h-screen bg-[url('https://deez-games.github.io/DeezWebsite/GauntlerBaner.webp')] md:p-32 bg-center bg-cover overflow-hidden shadow-insetBottom">
      <LandingInfo />
    </div>
  );
};

export default Landing;
