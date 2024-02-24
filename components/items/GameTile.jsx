import React, { useState } from "react";
import games from "../../data/games";

const GameTile = ({ setShowModal, setModalGame, name, logo }) => {
  return (
    <div
      onClick={() => {
        setShowModal(true);
        setModalGame(games[name]);
      }}
      className={`${name} flex justify-center items-center bg-center bg-cover cursor-pointer w-1/2 hover:w-[120%] duration-500`}
      style={{
        backgroundImage: `url('${games[name].images.backgroundPath}')`,
      }}
    >
      {logo}
    </div>
  );
};

export default GameTile;
