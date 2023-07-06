import React from "react";
import Link from "next/link";

const LandingInfo = () => {
  return (
    <div className="flex flex-col justify-around absolute bottom-10 left-10 gap-y-10">
      <div className="text-8xl flex flex-col justify-center">
        <span className="uppercase font-bold tracking-wider">
          GAUNTLER <br /> OUT NOW!
        </span>
      </div>
      <h3 className="text-2xl font-bold">
        Get Gauntler on Nintendo Switch and Steam!
      </h3>
      <label className="flex justify-evenly gap-x-10 text-center text-lg">
        <span className="px-5 py-2 tracking-wide w-1/2 text-xl underline font-bold tracking-wider">
          <Link href="/">CHECK OUT</Link>
        </span>
        <span className="px-5 py-2 tracking-wide w-1/2 text-xl underline font-bold tracking-wider">
          <Link href="/">TRAILER</Link>
        </span>
      </label>
    </div>
  );
};

export default LandingInfo;
