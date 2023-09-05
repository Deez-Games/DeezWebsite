import React from "react";

const DrivesUs = () => {
  return (
    <div
      id="DrivesUs"
      className="flex items-center justify-center overflow-hidden text-brightBg customGradientVioletRight"
    >
      <div className="w-[40%] py-20 flex justify-start">
        <div className="w-[90%]">
          <h2 className="text-5xl font-bold pb-5 tracking-wider">
            WHAT DRIVES US?
          </h2>
          <br />
          <p className="text-lg w-[70%]">
            Our main goal is to make games that are meaningful both to us and the players. <br/><br/>

            Whatever we do, we strive to break the schemes in every aspect of life. <br/><br/>

            We believe that bonds are to be broken.
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
