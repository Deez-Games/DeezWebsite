import React from "react";
import Button from "@/components/items/Button";

const NewsLetter = () => {
  return (
    // <div id="Contact" className="h-[50vh] p-[5%] flex items-center justify-center space-x-6">
    //   <h3 className="text-5xl whitespace-nowrap font-bold flex items-center">
    //     Subscribe to newsletter!
    //   </h3>
    //   <div className="grid grid-cols-3 gap-y-3 gap-x-6">
    //     <input type="text" className="bg-gray-500 py-2 px-4 col-span-2 placeholder:text-white" placeholder="e-mail" />
    //     <button className="bg-violet">
    //       Subscribe
    //     </button>
    //     <div className="flex items-start col-span-2">
    //       <input type="checkbox" />
    //       <label className="text-sm">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
    //         iusto laborum magni. Lorem ipsum dolor sit amet, consectetur
    //         adipisicing elit. Necessitatibus, odit?
    //       </label>
    //     </div>
    //   </div>
    // </div>
    <div id="Contact" className="h-[50vh] p-[5%] flex items-center justify-center space-x-6">
      <div className="flex flex-col bg-gray-900 p-10 rounded-lg shadow-lg space-y-10 w-[900px]">
        <h3 className="text-5xl whitespace-nowrap font-bold flex items-center">
          Subscribe to newsletter!
        </h3>
        <div className="grid grid-cols-3 gap-y-3 gap-x-6">
          <input type="text" className="bg-gray-500 py-2 px-4 col-span-2 placeholder:text-white rounded-lg" placeholder="e-mail" />
          <button className="bg-violet rounded-lg uppercase tracking-wider">
            Subscribe
          </button>
          <div className="flex items-center col-span-2">
            <input type="checkbox" />
            <label className="text-sm px-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
