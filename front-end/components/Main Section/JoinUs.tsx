"use client";
import React from "react";
import Button from "@/components/items/Button";

const JoinUs = () => {
  return (
    <div id="JoinUs" className="relative h-full flex items-center justify-between overflow-hidden">
      <div className="w-3/4">
        <img src="https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Join us image" />
      </div>
      <div className="w-1/2 h-full">
        <h1 className="text-7xl font-bold tracking-widest pt-24 [text-shadow:_0px_0px_10px_rgba(255,_255,_255,_1);]">JOIN US</h1>
      </div>
      <div className="absolute right-24 w-1/2 p-20 bg-black shadow-lg">
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
          Facilis id inventore ipsa ipsum laboriosam laborum libero modi
          necessitatibus nisi optio perferendis possimus praesentium quae quam
          quas saepe sequi sunt suscipit unde, veniam veritatis voluptatem.
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
