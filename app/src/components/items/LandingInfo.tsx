import React from "react";

const LandingInfo = () => {
  return (
    <div className="w-[30%] h-[35%] flex flex-col justify-around absolute bottom-[16%] left-[8%]">
      <h2 className="text-8xl font-bold">
        GAUNTLER
        <br />
        OUT NOW!
      </h2>
      <h3 className="text-3xl font-bold">On Nintendo Switch and Steam!</h3>
      <label className="flex justify-evenly text-2xl font-bold">
        <span href="/" className="underline">
          CHECK OUT
        </span>
        <span href="/" className="underline">
          TRAILER
        </span>
      </label>
    </div>
  );
};

export default LandingInfo;
