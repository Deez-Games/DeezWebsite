import React from "react";

const DrivesUs = () => {
  return (
    <div
      id="DrivesUs"
      className="flex flex-col bg-center bg-cover bg-fixed md:flex-row text-brightBg px-4 sm:px-12 2xl:px-32 py-8 sm:py-24 gap-6 customGradientVioletRight shadow-insetBottom"
    >
      <div className="flex justify-start items-center">
        <div className="">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-wider">
            WHAT DRIVES{"\u00A0"}US?
          </h2>
          <br />
          <p className="text-lg lg:text-2xl xl:max-w-[60%]">
          The main reason we decided to start our journey is the desire to create unique games that are both exciting for players and enjoyable for us to create.<br /><br />We deeply believe that the sense of creating is to break the schemes and stay unconventional.
          </p>
        </div>
      </div>
      <div className="md:max-w-[50%] flex items-center">
        <img src="retro-gaming.png" alt="passion to games is what drives us" />
      </div>
    </div>
  );
};

export default DrivesUs;
