import React from "react";

const NewsLetter = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col items-center justify-center gap-12 bg-brightBg text-black py-16 shadow-insetBottom"
    >
      <h3 className="text-5xl whitespace-nowrap font-bold flex items-center">
        Subscribe to our newsletter!
      </h3>
      <div className="grid grid-cols-3 gap-y-3 gap-x-6 max-w-[700px]">
        <input
          type="text"
          className="bg-violet py-4 px-4 col-span-2 placeholder:text-white text-textBright font-bold text-xl"
          placeholder="e-mail"
        />
        <button className="bg-violet font-bold text-2xl text-textBright">
          SUBSCRIBE
        </button>
        <div className="flex items-start col-span-2">
          <input type="checkbox" />
          <label className="text-sm px-2">
            I agree to my personal data being stored and used to receive
            information, updates and commercial offers from Deez Games.
          </label>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
