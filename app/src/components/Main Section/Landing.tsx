import React from "react";
import LandingInfo from "@/components/items/LandingInfo";

const Landing = () => {
  return (
    <div className="bg-[url('/GauntlerBaner.png')] h-full bg-cover shadow-[inset_0px_-60px_60px_16px] shadow-darkGrey">
      <LandingInfo />
    </div>
  );
};

export default Landing;
