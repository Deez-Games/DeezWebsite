import React, { useState } from "react";
import NewsLetter from "../components/sections/NewsLetter";
import GamesList from "../components/sections/GamesList";
import GamePanel from "../components/GamePanel";

const Games = () => {
  const onClose = () => {setShowModal(false)}
  const [showModal,setShowModal] = useState (false)
  return (
    <>
      { <GamesList /> }
      <GamePanel isVisible = {showModal} onClose ={onClose} header="" description="" platforms=""/> <button className="bg-green-600 w-64 h-64" onClick={() => {setShowModal(true)}}>przycisk</button>
      {<NewsLetter /> }
    </>
  );
};

export default Games;
