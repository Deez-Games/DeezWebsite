import React from "react";
import Link from "next/link";

const LandingInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4 md:items-start md:justify-end md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] text-textBright">
      <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-col justify-center">
        <span className="uppercase font-bold tracking-wider">
          GAUNTLER <br /> OUT NOW!
        </span>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold">
        on Steam and Nintendo Switch!
      </h3>
      <label className="flex justify-evenly gap-x-10 text-lg">
        <span className="text-xl underline font-bold tracking-wider">
          <Link href="https://store.steampowered.com/app/2789380/Gauntler/">
            CHECK OUT
          </Link>
        </span>
        <span className="text-xl underline font-bold tracking-wider">
          <Link href="https://www.nintendo.com/store/products/gauntler-switch/">
            TRAILER
          </Link>
        </span>
      </label>
    </div>
  );
};

export default LandingInfo;
