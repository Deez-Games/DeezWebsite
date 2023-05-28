import React from "react";
import Button from "@/components/items/Button";

const NewsLetter = () => {
  return (
    <div id="Contact" className="h-[50vh] flex justify-center items-center">
      <div className="w-[80%] grid gap-x-10">
        <h3 className="text-3xl font-bold flex items-center">
          Subscribe to newsletter!
        </h3>
        <div className="flex">
          <div className="flex flex-col">
            <input type="text" className="mb-4" />
            <div className="flex items-start">
              <input type="checkbox" />
              <label className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                iusto laborum magni. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Necessitatibus, odit?
              </label>
            </div>
          </div>
        </div>
        <Button text="SUBSCRIBE" />
      </div>
    </div>
  );
};

export default NewsLetter;
