"use client";
import React, { useState } from "react";
import games from "../../data/games.json";
import GamePanel from "../GamePanel";
import { BsNintendoSwitch, BsSteam } from "react-icons/bs";

const GamesTiles = () => {
  const onClose = () => {
    setShowModal(false);
  };
  const [showModal, setShowModal] = useState(false);

  const steam = { name: "steam", icon: <BsSteam /> };
  const nintendo = { name: "nintendo", icon: <BsNintendoSwitch /> };

  const [modalGame, setModalGame] = useState({
    name: "",
    platforms: [],
    description: "",
  });

  const modalGames = {
    gauntler: {
      name: "Gauntler",
      platforms: [nintendo],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, obcaecati.",
    },

    babushcats: {
      name: "Babushcats",
      platforms: [],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, obcaecati.",
    },
  };
  function changeWidth(e: any) {
    for (const game of games) {
      if (e.target.classList.contains(game.class.substring(1))) {
        e.target.classList.add("md:w-8/12");
        if (
          document
            .querySelector(game.class)
            ?.classList.contains("md:brightness-50")
        ) {
          document
            .querySelector(game.class)
            ?.classList.remove("md:brightness-50");
        }
      } else {
        if (
          document.querySelector(game.class)?.classList.contains("md:w-8/12")
        ) {
          document.querySelector(game.class)?.classList.remove("md:w-8/12");
        }
        if (
          document.querySelector(game.class)?.classList.contains("md:w-1/3")
        ) {
          document.querySelector(game.class)?.classList.remove("md:w-1/3");
        }
        document
          .querySelector(game.class)
          ?.classList.add("md:w-2/12", "md:brightness-50");
      }
    }
  }

  function restoreWidth() {
    for (const game of games) {
      if (document.querySelector(game.class)?.classList.contains("md:w-8/12")) {
        document.querySelector(game.class)?.classList.remove("md:w-8/12");
      }
      if (document.querySelector(game.class)?.classList.contains("md:w-2/12")) {
        document.querySelector(game.class)?.classList.remove("md:w-2/12");
      }
      if (
        document
          .querySelector(game.class)
          ?.classList.contains("md:brightness-50")
      ) {
        document
          .querySelector(game.class)
          ?.classList.remove("md:brightness-50");
      }
      document.querySelector(game.class)?.classList.add("md:w-1/3");
    }
  }

  return (
    <div
      id="Games"
      className="h-screen flex md:flex-row flex-col md:justify-between w-full overflow-hidden px-4 sm:px-12 2xl:px-32 py-8 sm:py-24 shadow-insetBottom"
    >
      <div className="flex items-center justify-center md:justify-normal w-full md:w-1/4 pb-8 md:pb-0">
        <div className="flex flex-col items-center justify-center font-bold cursor-pointer">
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
      <div
        onMouseLeave={restoreWidth}
        className="flex space-x-8 md:space-x-0 justify-between md:justify-normal h-full w-full md:w-3/5 lg:w-2/3 xl:w-3/4 md:bg-black"
      >
        <div
          onClick={() => {
            setShowModal(true);
            setModalGame(modalGames.gauntler);
          }}
          onMouseEnter={changeWidth}
          className="babushcats flex w-1/2 md:w-1/3 bg-[url('https://deez-games.github.io/DeezWebsite/gauntler1.png')] bg-no-repeat bg-center bg-cover duration-500 cursor-pointer"
        ></div>

        <div
          onClick={() => {
            setShowModal(true);
            setModalGame(modalGames.babushcats);
          }}
          onMouseEnter={changeWidth}
          className="gauntler flex w-1/2 md:w-1/3 bg-[url('https://deez-games.github.io/DeezWebsite/gauntler2.png')] bg-no-repeat bg-center bg-cover duration-500 cursor-pointer"
        ></div>

        <div
          onClick={() => {
            setShowModal(true);
            setModalGame(modalGames.gauntler);
          }}
          onMouseEnter={changeWidth}
          className="project-plane hidden md:flex w-1/3 bg-[url('https://deez-games.github.io/DeezWebsite/gauntler3.png')] bg-no-repeat bg-center bg-cover duration-500 cursor-pointer"
        ></div>
      </div>
      <GamePanel
        isVisible={showModal}
        closeModal={onClose}
        header={modalGame.name}
        description={modalGame.description}
        platforms={modalGame.platforms}
      />
    </div>
  );
};

export default GamesTiles;
