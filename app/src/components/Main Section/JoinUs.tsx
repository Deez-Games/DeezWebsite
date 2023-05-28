"use client";
import React from "react";
import Button from "@/components/items/Button";

const JoinUs = () => {
  return (
    <div id="JoinUs" className="h-full flex items-center justify-between">
      <div className="w-[48%]">
        <h2 className="text-[8vw]">JOIN US</h2>
        <br />
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam
          aliquid aspernatur atque autem beatae consequatur, culpa dolorem
          doloremque dolorum earum eligendi et eveniet excepturi explicabo.
          <br />
          <br />
          Facilis id inventore ipsa ipsum laboriosam laborum libero modi
          necessitatibus nisi optio perferendis possimus praesentium quae quam
          quas saepe sequi sunt suscipit unde, veniam veritatis voluptatem.
          <br />
          <br />
          Accusamus ad adipisci autem consectetur corporis cumque dicta dolorem
          dolorum laboriosam modi mollitia, necessitatibus nemo nostrum odio
          perspiciatis repellendus rerum sit temporibus.
        </p>
      </div>
      <div className="w-[48%] flex flex-col items-center">
        <img
          src="/business-meeting.jpg"
          alt="About us image"
          className="mb-10"
        />
        <Button text="Find Out" />
      </div>
    </div>
  );
};

export default JoinUs;
