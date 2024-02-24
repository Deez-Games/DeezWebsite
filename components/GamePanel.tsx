import React from "react";
import { platform } from "os";

export interface Props {
  isVisible: boolean;
  closeModal: () => void;
  header: string;
  description: string;
  platforms: any;
  trailer: string;
}
const GamePanel = ({
  isVisible,
  closeModal,
  header,
  description,
  platforms,
  trailer,
}: Props) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center cursor-pointer"
      id="wrapper"
      onClick={() => closeModal()}
    >
      <div
        className="relative w-[90%] md:w-[80%] max-h-screen md:h-[65%] min-h-[475px] flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-8 font-bold bg-darkBg p-4 sm:p-8 rounded"
        onClick={() => {}}
      >
        <div className="flex flex-col gap-8 text-white">
          <h2 className="text-4xl">{header}</h2>
          <p className="text-xl">{description}</p>
          <div className="flex gap-5 text-4xl">
            {platforms.map(({ platform: { icon, name }, link }) => {
              if (link) {
                return (
                  <a target="_blank" key={name} href={link}>
                    {icon}
                  </a>
                );
              }
            })}
          </div>
        </div>
        <div className="md:w-[60%] h-full">
          <iframe
            className="w-full h-full"
            src={trailer}
            title="BABUSHCATS TRAILER"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <p className="md:absolute md:bottom-2 text-md text-textGrey">
          Click anywhere to close
        </p>
      </div>
    </div>
  );
};

export default GamePanel;
