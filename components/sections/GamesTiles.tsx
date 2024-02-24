"use client";
import React, { useState } from "react";
import GamePanel from "../GamePanel";
import GameTile from "../items/GameTile";

const GamesTiles = () => {
  const onClose = () => {
    setShowModal(false);
  };
  const [showModal, setShowModal] = useState(false);

  const [modalGame, setModalGame] = useState({
    name: "",
    platforms: [],
    description: "",
    trailer: "",
  });

  return (
    <div
      id="Games"
      className="h-screen flex md:flex-row flex-col md:justify-between w-full overflow-hidden px-4 sm:px-12 2xl:px-32 py-8 sm:py-24 shadow-insetBottom"
    >
      <div className="flex items-center justify-center md:justify-normal w-full md:w-1/4 pb-8 md:pb-0">
        <div className="flex flex-col items-center justify-center font-bold cursor-pointer text-white">
          <div>
            <label className="flex items-end text-7xl gap-2">
              DEEZ <span className="text-3xl pb-1">are</span>
            </label>
          </div>
          <div className="flex justify-start">
            <label className="flex items-start text-7xl gap-2">
              <span className="text-3xl">our</span> GAMES
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-4 sm:gap-8 lg:gap-12 xl:gap-16 justify-between h-full w-full md:w-3/5 lg:w-2/3 xl:w-3/4">
        <GameTile
          setModalGame={setModalGame}
          setShowModal={setShowModal}
          name="gauntler"
          logo={
            <img
              className="w-11/12 select-none"
              src="https://deez-games.github.io/DeezWebsite/gauntler-logo.png"
              alt="Deez Games logo"
            />
          }
        />
        <GameTile
          setModalGame={setModalGame}
          setShowModal={setShowModal}
          name="babushcats"
          logo={
            <div className="flex flex-col items-center">
              <img
                className="w-full select-none"
                src="https://deez-games.github.io/DeezWebsite/bbsh-text.png"
                alt="Deez Games logo"
              />
              <img
                className="w-1/2 select-none"
                src="https://deez-games.github.io/DeezWebsite/bbsh-logo.png"
                alt="Deez Games logo"
              />
            </div>
          }
        />
      </div>
      <GamePanel
        isVisible={showModal}
        closeModal={onClose}
        header={modalGame.name}
        description={modalGame.description}
        platforms={modalGame.platforms}
        trailer={modalGame.trailer}
      />
    </div>
  );
};

export default GamesTiles;
