import React from "react";
import Link from "next/link";
import games from "../../data/games.json";

const GamesTiles = () => {
  return (
    <div id="Games" className="h-full flex items-center justify-between">
      <div className="w-[39%]">
        <div className="text-[6vw] flex flex-col items-center justify-center font-bold">
          <div>
            <label className="flex items-end text-7xl">
              DEEZ <span className="text-4xl">are</span>
            </label>
          </div>
          <div className="flex justify-start">
            <label className="flex items-start text-7xl">
              <span className="text-4xl">our</span> GAMES
            </label>
          </div>
        </div>
        <br />
      </div>
      <div className="w-[59%] flex text-center font-bold h-[70%]">
        {games?.map(({ title, color }) => (
          <Link
            href={`/${title}`}
            className={`bg-[${color}] flex items-center justify-center p-[2%] w-[25%] text-[2vw]`}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesTiles;
