"use client";
import React, { useState } from "react";
import games from "../../data/games.json";
import GamePanel from "../GamePanel";
import { BsNintendoSwitch, BsSteam, BsTiktok, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const GamesTiles = () => {
  const onClose = () => {
    setShowModal(false);
  };
  const [showModal, setShowModal] = useState(false);

  const steam = { name: "steam", icon: <BsSteam />, link: "" };
  const nintendo = {
    name: "nintendo",
    icon: <BsNintendoSwitch />,
    link: "https://www.nintendo.com/store/products/gauntler-switch/",
  };
  const tiktok = {
    name: "tiktok",
    icon: <BsTiktok />,
    link: "https://www.tiktok.com/@gauntler_game",
  };
  const youtube = { name: "youtube", icon: <BsYoutube />, link: "" };
  const twitter = {
    name: "twitter",
    icon: <FaXTwitter />,
    link: "https://twitter.com/babushcatsgame",
  };

  const [modalGame, setModalGame] = useState({
    name: "",
    platforms: [],
    description: "",
    trailer: "",
  });

  const modalGames = {
    gauntler: {
      name: "Gauntler",
      platforms: [nintendo, steam, tiktok, youtube],
      description:
        "Avoid numerous dangers using the power of Mystical Gauntlets and make your way to the summit, braving increasingly harder challenges.",
      trailer: "https://www.youtube.com/embed/Kt2Dkf8WS_I",
    },

    babushcats: {
      name: "Babushcats",
      platforms: [twitter],
      description:
        "Take on the role of a lovely elderly grandmother. Your main task in this game is to take care of the cute kittens that have arrived at your cosy home.",
      trailer: "https://www.youtube.com/embed/VhNXNGHMxrY",
    },
  };
  function changeWidth(e: any) {
    for (const game of games) {
      if (e.target.classList.contains(game.class.substring(1))) {
        e.target.classList.add("md:w-10/12");

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
          document.querySelector(game.class)?.classList.contains("md:w-10/12")
        ) {
          document.querySelector(game.class)?.classList.remove("md:w-10/12");
        }

        if (
          document.querySelector(game.class)?.classList.contains("md:w-1/2")
        ) {
          document.querySelector(game.class)?.classList.remove("md:w-1/2");
        }

        document
          .querySelector(game.class)
          ?.classList.add("md:w-2/12", "md:brightness-50");
      }
    }
  }

  function restoreWidth() {
    for (const game of games) {
      if (
        document.querySelector(game.class)?.classList.contains("md:w-10/12")
      ) {
        document.querySelector(game.class)?.classList.remove("md:w-10/12");
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

      document.querySelector(game.class)?.classList.add("md:w-1/2");
    }
  }

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
      <div className="flex space-x-8 md:space-x-20 lg:space-x-32 justify-between h-full w-full md:w-3/5 lg:w-2/3 xl:w-3/4">
        <div
          onClick={() => {
            setShowModal(true);
            setModalGame(modalGames.gauntler);
          }}
          onMouseEnter={changeWidth}
          onMouseLeave={restoreWidth}
          className="babushcats flex w-1/2 bg-[url('https://deez-games.github.io/DeezWebsite/gauntler1.png')] bg-no-repeat bg-center bg-cover duration-500 cursor-pointer"
        ></div>

        <div
          onClick={() => {
            setShowModal(true);
            setModalGame(modalGames.babushcats);
          }}
          onMouseEnter={changeWidth}
          onMouseLeave={restoreWidth}
          className="gauntler flex w-1/2 bg-[url('https://deez-games.github.io/DeezWebsite/Banerbbsh3.png')] bg-no-repeat bg-center bg-cover duration-500 cursor-pointer"
        ></div>
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
