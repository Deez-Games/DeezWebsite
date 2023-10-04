import React from "react";

const DrivesUs = () => {
  return (
    <div
      id="DrivesUs"
      className="flex flex-col md:flex-row text-brightBg px-4 sm:px-12 2xl:px-32 py-8 sm:py-24 gap-6 customGradientVioletRight"
    >
      <div className="flex justify-start items-center">
        <div className="">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-wider">
            WHAT DRIVES{"\u00A0"}US?
          </h2>
          <br />
          <p className="text-lg lg:text-2xl">
            Our main goal is to make games that are meaningful both to us and
            the players. <br />
            <br />
            Whatever we do, we strive to break the schemes in every aspect of
            life. <br />
            <br />
            We believe that bonds are to be broken.
          </p>
        </div>
      </div>
      <div className="md:max-w-[50%] flex items-center">
        <img src="/handshake.jpg" alt="KRYSZTAL" />
      </div>
    </div>
  );
};

export default DrivesUs;
