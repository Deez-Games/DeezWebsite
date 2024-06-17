import React from "react";
import LandingInfo from "../items/LandingInfo";

const Landing = () => {
  return (
    <div className="h-screen bg-[url('https://deez-games.github.io/DeezWebsite/www_bbsh_mobile.webp')] md:bg-[url('https://deez-games.github.io/DeezWebsite/www_bbsh.webp')] md:p-32 bg-center md:bg-left bg-cover overflow-hidden shadow-insetBottom">
      <LandingInfo />
    </div>
  );
};

export default Landing;
