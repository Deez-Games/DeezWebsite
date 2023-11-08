import React from "react";
import { BsPeople, BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineAim } from "react-icons/ai";
import MotivationCard from "../items/MotivationCard";

const OurValues = () => {
  return (
    <div className="bg-brightBg flex flex-col items-center px-4 sm:px-12 2xl:px-32 py-8 sm:py-24 gap-6 md:gap-12 shadow-insetBottom">
      <div className="text-black text-5xl sm:text-7xl font-bold text-center">
        <span className="text-violet">DEEZ</span>
        {"\u00A0"}ARE OUR{"\u00A0"}VALUES
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6">
        <MotivationCard
          icon={<BsSuitHeartFill />}
          title="PASSION"
          description="Passion is our main motivation and the most important aspect of purpose in our lives. It brings uniqueness and distinctiveness."
        />
        <MotivationCard
          icon={<AiOutlineAim />}
          title="DETERMINATION"
          description={`Derived from passion, determination is the key to pushing our limits
            and achieving great goals.`}
        />
        <MotivationCard
          icon={<BsPeople />}
          title="FRIENDSHIP"
          description="As friends, we know and respect each other well. We believe that
            is the foundation of good communication and teamwork."
        />
      </div>
    </div>
  );
};

export default OurValues;
