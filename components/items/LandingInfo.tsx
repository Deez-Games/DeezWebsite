import React from "react";
import Link from "next/link";

const LandingInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4 md:items-start md:justify-end md:max-w-[400px] lg:max-w-[480px] xl:max-w-[640px] text-textBright px-2">
      <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-col justify-center">
        <img
          src="https://deez-games.github.io/DeezWebsite/www_bbsh_text.webp"
          className="w-96 lg:w-[30rem] xl:w-[40rem]"
          alt="babushcats"
        />
        <span className="uppercase font-bold tracking-wider">
          DEMO ON STEAM!
        </span>
      </div>
      <label className="flex justify-evenly gap-x-10 text-lg">
        <span className="text-xl underline font-bold tracking-wider">
          <Link href="https://store.steampowered.com/app/2923270/BabushCats/">
            CHECK OUT
          </Link>
        </span>
        <span className="text-xl underline font-bold tracking-wider">
          <Link href="https://x.com/BabushCatsGame">BABUSHCATS TWITTER</Link>
        </span>
      </label>
    </div>
  );
};

export default LandingInfo;
