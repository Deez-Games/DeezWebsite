import React from "react";
import LandingInfo from "@/components/items/LandingInfo";

const Landing = () => {
  return (
    <div className="relative bg-[url('/GauntlerBaner.png')] h-full shadow-[inset_0px_-60px_60px_16px] shadow-black before:z-10 before:w-screen before:h-screen before:top-0 before:left-0 before:absolute before:bg-gradient-to-tr before:from-black before:via-transparent before:to-transparent overflow-hidden">
      <LandingInfo />
    </div>
  );
};

export default Landing;
