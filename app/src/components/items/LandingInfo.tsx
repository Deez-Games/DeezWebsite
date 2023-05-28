import React from "react";

const LandingInfo = () => {
  return (
    <div className="w-[30%] h-[35%] flex flex-col justify-around absolute bottom-[16%] left-[8%]">
      <div className="text-[5vw] w-fit font-bold flex flex-col justify-center">
        <span className="h-[30%]"> GAUNTLER</span>
        <span className="h-[30%]">OUT NOW!</span>
      </div>
      <h3 className="text-[2vw] font-bold">On Nintendo Switch and Steam!</h3>
      <label className="flex justify-evenly text-[1.6vw] font-bold">
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
