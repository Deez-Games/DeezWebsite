import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button
      className="bg-violet py-4 px-10 font-bold text-[2vw]"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
