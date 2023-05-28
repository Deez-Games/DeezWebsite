import React from "react";
import Button from "@/components/items/Button";

const Investors = () => {
  return (
    <div
      id="Investors"
      className="h-full flex flex-col items-center justify-center"
    >
      <div className="h-[50%] flex flex-col items-center justify-between">
        <h2 className="text-7xl">INTERESTED IN PARTNERSHIP?</h2>
        <div className="flex h-[70%]">
          <div className="flex flex-col justify-between items-center text-center p-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi
            asperiores assumenda consequatur cumque hic incidunt ipsa ipsum
            laudantium nemo, non ratione repudiandae vero voluptates.
            <Button text="I'm an Investor" />
          </div>

          <div className="border-l-2 border-gray-500"></div>

          <div className="flex flex-col justify-between items-center text-center p-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut,
            blanditiis ducimus eaque error eum, excepturi illum in iure minima
            officiis quae quos ullam voluptates.
            <Button text="I'm a Partner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
