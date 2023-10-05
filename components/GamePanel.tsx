import Link from "next/link";
import React from "react";

export interface Props {
  isVisible: boolean;
  closeModal: () => void;
  header: string;
  description: string;
  platforms: any;
}
const GamePanel = ({
  isVisible,
  closeModal,
  header,
  description,
  platforms,
}: Props) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center cursor-pointer min-h-[440px]"
      id="wrapper"
      onClick={() => closeModal()}
    >
      <div
        className="relative w-[90%] md:w-[80%] h-[65%] flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-8 font-bold bg-darkBg p-4 sm:p-8 rounded"
        onClick={() => {}}
      >
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl">{header}</h2>
          <p className="text-xl">{description}</p>
          <div className="flex gap-5 text-4xl">
            {platforms.map(({ icon, name }) => 
              name === "nintendo" ? <Link key="name" href="https://www.nintendo.com/store/products/gauntler-switch/">{icon}</Link> : icon
          )}
          </div>
        </div>

        <div className="md:max-w-[60%]">
          <img
            className="max-h-[250px] lg:max-h-full"
            src="https://deez-games.github.io/DeezWebsite/gauntlerGameTile.png"
            alt={header}
          />
        </div>

        <p className="absolute bottom-2 text-md text-textGrey">
          Click anywhere to close
        </p>
      </div>
    </div>
  );
};

export default GamePanel;
