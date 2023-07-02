import React from "react";

const LandingInfo = () => {
  return (
    <div className="flex flex-col justify-around absolute bottom-10 left-10 z-20 gap-y-10">
      <div className="text-8xl flex flex-col justify-center">
        <span className="uppercase font-bold tracking-wider"> new <br /> game <br /> OUT NOW!</span>
      </div>
      <h3 className="text-2xl tracking-wider">Get Gauntler on Nintendo Switch and Steam!</h3>
      <label className="flex justify-evenly gap-x-10 text-center text-lg">
        <span className="rounded-full px-5 py-2 tracking-wide uppercase w-1/2 bg-primary-button">
          check out
        </span>
        <span className="rounded-full px-5 py-2 tracking-wide uppercase w-1/2 bg-secondary-button text-black">
          trailer
        </span>
      </label>
    </div>
  );
};

export default LandingInfo;
