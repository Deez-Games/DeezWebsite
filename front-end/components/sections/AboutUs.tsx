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
            ABOUT <br />
            <span className="text-violet">DEEZ GAMES</span>
          </h2>
          <br />
          <div className="flex justify-end">
            <p className="text-lg w-[70%]">
              We are a group of young people from Gdansk brought together by a passion for creating video games. <br/><br/>

              Some of us met in high school,
              others friendships date back years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
