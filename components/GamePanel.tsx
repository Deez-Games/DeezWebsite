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
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center cursor-pointer"
      id="wrapper"
      onClick={() => closeModal()}
    >
      <div
        className="relative w-[90%] md:w-[80%] h-[65%] min-h-[475px] flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-8 font-bold bg-darkBg p-4 sm:p-8 rounded"
        onClick={() => {}}
      >
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl">{header}</h2>
          <p className="text-xl">{description}</p>
          <div className="flex gap-5 text-4xl">
            {platforms.map(({ icon, name }) =>

              // jak wstawisz linki to usuń ten komentarz i linijkę nizej oraz odkomentuj komentarz pod nią
              name === "nintendo" ? <Link key="name" href="https://www.nintendo.com/store/products/gauntler-switch/">{icon}</Link>

              // name === "nintendo" ? <Link key="name" href="https://www.nintendo.com/store/products/gauntler-switch/">{icon}</Link> : name === "tiktok" ? <Link key="name" href="{tutaj wpisz link do tiktoka gauntlera}">{icon}</Link> : name === "youtube" ? <Link key="name" href="{tutaj wpisz link do youtube gauntlera}">{icon}</Link> : name === "twitter" ? <Link key="name" href="{tutaj wpisz link do twittera babushcats}">{icon}</Link> : icon

          )}
          </div>
        </div>

        <div className="md:max-w-[60%]">
          <video width="1280" height="960" controls>
            <source src="https://deez-games.github.io/DeezWebsite/public.mp4" type="video/mp4" />
          </video>
        </div>

        <p className="absolute bottom-2 text-md text-textGrey">
          Click anywhere to close
        </p>
      </div>
    </div>
  );
};

export default GamePanel;
