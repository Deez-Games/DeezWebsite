import React from "react";

const DrivesUs = () => {
  return (
    <div
      id="DrivesUs"
      className="flex items-center justify-center overflow-hidden text-brightBg"
    >
      <div className="w-[40%] py-20 flex justify-start">
        <div className="w-[90%]">
          <h2 className="text-7xl font-bold pb-5 tracking-wider">
            WHAT DRIVES US?
          </h2>
          <br />
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam
            aliquid aspernatur atque autem beatae consequatur, culpa dolorem
            doloremque dolorum earum eligendi et eveniet excepturi explicabo.
          </p>
        </div>
      </div>
      <div className="w-[40%] py-20">
        <img src="/handshake.jpg" alt="KRYSZTAL" />
      </div>
    </div>
  );
};

export default DrivesUs;
