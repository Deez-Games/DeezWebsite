import React from "react";

const AboutUs = () => {
  return (
    <div
      id="AboutUs"
      className="flex items-center justify-center overflow-hidden bg-brightBg text-black"
    >
      <div className="w-[40%] py-20">
        <img src="/handshake.jpg" alt="KRYSZTAL" />
      </div>
      <div className="w-[40%] py-20 flex justify-end">
        <div className="w-[90%] text-right">
          <h2 className="text-7xl font-bold uppercase pb-5 tracking-wider">
            WHAT ARE <br />
            <span className="text-violet">DEEZ GAMES?</span>
          </h2>
          <br />
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam
            aliquid aspernatur atque autem beatae consequatur, culpa dolorem
            doloremque dolorum earum eligendi et eveniet excepturi explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
