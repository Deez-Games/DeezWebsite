import React from "react";
import LandingInfo from "../items/LandingInfo";

const Landing = () => {
  return (
    <div className="h-screen md:bg-[url('/GauntlerBaner.png')] md:p-32 md:bg-cover shadow-[inset_0px_-30px_60px_16px] shadow-black overflow-hidden">
      <LandingInfo />
    </div>
  );
};

export default Landing;
