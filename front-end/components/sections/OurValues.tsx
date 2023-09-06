import React from "react";
import { BsPeople, BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineAim } from "react-icons/ai";

const OurValues = () => {
  return (
    <div className="bg-brightBg flex flex-col items-center gap-16 pt-20 pb-32">
      <div className="text-black text-[5em] font-bold">
        <span className="text-violet">DEEZ</span> ARE OUR VALUES
      </div>
      <div className="flex justify-around w-full text-xl">
        <div className="bg-darkBg w-96 h-96 p-4 flex flex-col items-center gap-3 gap-3">
          <span className="bg-violet text-6xl p-3">
            <BsSuitHeartFill />
          </span>
          <h3 className="text-3xl font-bold">PASSION</h3>
          <p className="text-center">
            Passion is our biggest motivation and one of the main aspects of
            meaning in our lives. It brings uniqueness and distinctiveness.
          </p>
        </div>
        <div className="bg-darkBg w-96 h-96 p-4 flex flex-col items-center gap-3">
          <span className="bg-violet text-6xl p-3">
            <AiOutlineAim />
          </span>
          <h3 className="text-3xl font-bold">DETERMINATION</h3>
          <p className="text-center">
            Derived from passion, determination is the key to pushing our limits
            and achieving great goals.
          </p>
        </div>
        <div className="bg-darkBg w-96 h-96 p-4 flex flex-col items-center gap-3">
          <span className="bg-violet text-6xl p-3">
            <BsPeople />
          </span>
          <h3 className="text-3xl font-bold">FRIENDSHIP</h3>
          <p className="text-center">
            As friends, we know and respect each other well, and we believe that
            is the foundation of good communication and teamwork.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
