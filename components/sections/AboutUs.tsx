import React from "react";

const AboutUs = () => {
  return (
    <div
      id="AboutUs"
      className="flex flex-col-reverse md:justify-between md:flex-row gap-6 overflow-hidden bg-brightBg text-black px-4 sm:px-12 2xl:px-32 py-8 sm:py-24 shadow-insetBottom"
    >
      <div className="lg:max-w-[50%] flex justify-center items-center">
        <img src="deez.jpg" alt="our photo" />
      </div>
      <div className="lg:text-right flex flex-col justify-center items-center">
        <div>
          <h2 className="text-5xl lg:text-6xl font-bold uppercase">
            ABOUT <br />
            <span className="text-violet">DEEZ GAMES</span>
          </h2>
          <br />
          <div className="flex justify-end">
            <p className="text-lg lg:text-2xl xl:max-w-[65%]">
              We are a group of young people from Gdansk brought together by a
              passion for creating video games.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
