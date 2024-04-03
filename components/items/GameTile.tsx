import React from "react";
import games from "../../data/games";

export interface Props {
  setShowModal: (arg0: boolean) => void;
  setModalGame: (arg0: any) => void;
  name: string;
  logo: React.JSX.Element;
}
const GameTile = ({ setShowModal, setModalGame, name, logo }: Props) => {
  return (
    <div
      onClick={() => {
        setShowModal(true);
        setModalGame(games[name]);
      }}
      className={`${name} flex justify-center items-center bg-center bg-cover cursor-pointer w-1/2 hover:w-[120%] duration-500 relative`}
      style={{
        backgroundImage: `url('${games[name].images.backgroundPath}')`,
      }}
    >
      {logo}
    </div>
  );
};

export default GameTile;
