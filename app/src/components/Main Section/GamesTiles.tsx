import React from "react";

const GamesTiles = () => {
  return (
    <div id="Games" className="h-full flex items-center justify-between">
      <div className="w-[39%]">
        <h2 className="text-8xl">DEEZ are our GAMES</h2>
        <br />
      </div>
      <div className="w-[59%] flex text-4xl text-center font-bold h-[70%]">
        <div className="bg-[#5B0DDA] flex items-center p-[2%]">GAME TILE</div>
        <div className="bg-[#690DFF] flex items-center p-[2%]">GAME TILE</div>
        <div className="bg-[#7A28FF] flex items-center p-[2%]">GAME TILE</div>
        <div className="bg-[#883FFF] flex items-center p-[2%]">GAME TILE</div>
      </div>
    </div>
  );
};

export default GamesTiles;
