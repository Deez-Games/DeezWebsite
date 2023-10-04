import React from "react";
import { BsNintendoSwitch, BsSteam } from "react-icons/bs";

const GamesList = () => {
  const steam = { name: "Steam", icon: <BsSteam /> };
  const nintendo = { name: "Steam", icon: <BsNintendoSwitch /> };

  const games = [
    {
      name: "Gauntler",
      platforms: [steam, nintendo],
      img: "gauntlerGameTile.png",
      bgClass: "gauntlerTile",
    },
    {
      name: "Babushcats",
      platforms: [steam],
      img: "babushcatsGameTile.png",
      bgClass: "babushcatsTile",
    },
  ];

  return (
    <div className="flex gap-4 justify-center items-center flex-wrap min-h-screen">
      {games.map(({ name, platforms, img, bgClass }) => (
        <div key={name} className="">
          <img src={`/${img}`} alt={name} className="object-cover h-96 w-64" />
          <div className="flex flex-col gap-2 text-2xl">
            <span className="font-bold">{name}</span>
            <div className="flex gap-3">
              {platforms.map(({ icon }, index) => (
                <span key={`${icon}-${index}`}>{icon}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
