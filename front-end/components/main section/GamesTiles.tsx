"use client"
import React from "react";
import games from "../../data/games.json";

const GamesTiles = () => {

  function changeWidth(e:any) {
    for(const game of games) {
      
      if (e.target.classList.contains(game.class.substring(1))) {
        console.log(game.class.substring(1));
        e.target.classList.add("w-8/12");
        if (document.querySelector(game.class)?.classList.contains("brightness-50")) {
          document.querySelector(game.class)?.classList.remove("brightness-50");
        }
      } else {
        if (document.querySelector(game.class)?.classList.contains("w-8/12")) {
          document.querySelector(game.class)?.classList.remove("w-8/12");
        }
        if (document.querySelector(game.class)?.classList.contains("w-1/3")) {
          document.querySelector(game.class)?.classList.remove("w-1/3");
        }
        document.querySelector(game.class)?.classList.add("w-2/12", "brightness-50");
      }
    }
  }

  function restoreWidth() {
    for(const game of games) {
        if (document.querySelector(game.class)?.classList.contains("w-8/12")) {
          document.querySelector(game.class)?.classList.remove("w-8/12");
        }
        if (document.querySelector(game.class)?.classList.contains("w-2/12")) {
          document.querySelector(game.class)?.classList.remove("w-2/12");
        }
        if (document.querySelector(game.class)?.classList.contains("brightness-50")) {
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
        <div className="flex flex-col items-center justify-center font-bold">
          <div>
            <label className="flex items-end text-7xl">
              <p className="[text-shadow:_0px_0px_10px_rgba(255,_255,_255,_1);]">DEEZ <span className="text-3xl pb-1">are</span></p>
            </label>
          </div>
          <div className="flex justify-start">
            <label className="flex items-start text-7xl">
              <p className="[text-shadow:_0px_0px_10px_rgba(255,_255,_255,_1);]"><span className="text-3xl">our</span> GAMES</p>
            </label>
          </div>
        </div>
      </div>
      <div
      onMouseLeave={restoreWidth}
      className="flex w-3/4 bg-black"
      >

        <div
        onMouseEnter={changeWidth}
        className="babushcats flex w-1/3 bg-[url('/gauntler1.png')] bg-no-repeat bg-center bg-cover duration-500"
        >
        </div>

        <div
        onMouseEnter={changeWidth}
        className="gauntler flex w-1/3 bg-[url('/gauntler2.png')] bg-no-repeat bg-center bg-cover duration-500"
        >
        </div>

        <div
        onMouseEnter={changeWidth}
        className="project-plane flex w-1/3 bg-[url('/gauntler3.png')] bg-no-repeat bg-center bg-cover duration-500"
        >
        </div>
      </div>
    </div>
  );
};

export default GamesTiles;
