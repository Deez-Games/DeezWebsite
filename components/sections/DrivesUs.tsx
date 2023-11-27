import React from "react";

const DrivesUs = () => {
  return (
    <div
      id="DrivesUs"
      className="flex flex-col md:flex-row text-brightBg px-4 sm:px-12 2xl:px-32 py-8 sm:py-24 gap-6 customGradientVioletRight shadow-insetBottom"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-5xl lg:text-6xl text-center font-bold tracking-wider">
          WHAT DRIVES{"\u00A0"}US?
        </h2>
        <br />
        <p className="text-center text-lg md:w-1/2 lg:text-2xl">
        The main reason we decided to start our journey is the desire to create unique games that are both exciting for players and enjoyable for us to create.<br /><br />We deeply believe that the sense of creating is to break the schemes and stay unconventional.
        </p>
      </div>
    </div>
  );
};

export default DrivesUs;
