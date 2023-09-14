"use client";
import React, { useState } from "react";
import games from "../../data/games.json";
import Link from "next/link";
import GamePanel from "../GamePanel";
import { BsNintendoSwitch, BsSteam } from "react-icons/bs";

const GamesTiles = () => {
  const onClose = () => {setShowModal(false)}
  const [showModal,setShowModal] = useState (false)

  const steam = { name: "Steam", icon: <BsSteam /> };
  const nintendo = { name: "Steam", icon: <BsNintendoSwitch /> };

  const [modalGame,setModalGame] = useState({
    name: "",
    platforms: [],
    description: "",
  })

  const modalGames = {
    gauntler: {
      name: "Gauntler",
      platforms: [steam, nintendo],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, obcaecati.",
    },
    
    babushcats: {
      name: "Babushcats",
      platforms: [steam],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, obcaecati.",
    },
  };
  function changeWidth(e: any) {
    for (const game of games) {
      if (e.target.classList.contains(game.class.substring(1))) {
        e.target.classList.add("w-8/12");
        if (
          document
            .querySelector(game.class)
            ?.classList.contains("brightness-50")
        ) {
          document.querySelector(game.class)?.classList.remove("brightness-50");
        }
      } else {
        if (document.querySelector(game.class)?.classList.contains("w-8/12")) {
          document.querySelector(game.class)?.classList.remove("w-8/12");
        }
        if (document.querySelector(game.class)?.classList.contains("w-1/3")) {
          document.querySelector(game.class)?.classList.remove("w-1/3");
        }
        document
          .querySelector(game.class)
          ?.classList.add("w-2/12", "brightness-50");
      }
    }
  }

  function restoreWidth() {
    for (const game of games) {
      if (document.querySelector(game.class)?.classList.contains("w-8/12")) {
        document.querySelector(game.class)?.classList.remove("w-8/12");
      }
      if (document.querySelector(game.class)?.classList.contains("w-2/12")) {
        document.querySelector(game.class)?.classList.remove("w-2/12");
      }
      if (
        document.querySelector(game.class)?.classList.contains("brightness-50")
      ) {
        document.querySelector(game.class)?.classList.remove("brightness-50");
      }
      document.querySelector(game.class)?.classList.add("w-1/3");
    }
  }

  return (
    <div
      id="Games"
      className="h-full flex justify-between w-full overflow-hidden py-20 px-10"
    >
      <div className="flex items-center w-1/4">
        <Link href="/Games">
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
        </Link>
      </div>
      <div onMouseLeave={restoreWidth} className="flex w-3/4 bg-black">
        <div
          onClick={
            () => {
              setShowModal(true);
              setModalGame(modalGames.gauntler);
            } 
          }
          onMouseEnter={changeWidth}
          className="babushcats flex w-1/3 bg-[url('/gauntler1.png')] bg-no-repeat bg-center bg-cover duration-500 cursor-pointer"
        ></div>

        <div 
          onClick={
            () => {
              setShowModal(true);
              setModalGame(modalGames.babushcats);
            } 
          }
          onMouseEnter={changeWidth}
          className="gauntler flex w-1/3 bg-[url('/gauntler2.png')] bg-no-repeat bg-center bg-cover duration-500 cursor-pointer"
        ></div>

        <div 
          onClick={
            () => {
              setShowModal(true);
              setModalGame(modalGames.gauntler);
            } 
          }
          onMouseEnter={changeWidth}
          className="project-plane flex w-1/3 bg-[url('/gauntler3.png')] bg-no-repeat bg-center bg-cover duration-500 cursor-pointer"
        ></div>
      </div>
      <GamePanel isVisible = {showModal} onClose ={onClose} header={modalGame.name} description={modalGame.description} platforms={modalGame.platforms}/>
    </div>
    
  );
};

export default GamesTiles;
