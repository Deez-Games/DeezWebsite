import React from "react";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="h-full flex items-center justify-between overflow-hidden">
      <div className="w-1/2 p-20">
        <h1 className="text-7xl font-bold uppercase pb-5 tracking-wider [text-shadow:_0px_0px_10px_rgba(255,_255,_255,_1);]">about us</h1>
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
        </p>
      </div>
      <div className="w-1/2">
        <img src="https://images.unsplash.com/photo-1635514569156-ca58f1247e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="About us image" />
      </div>
    </div>
  );
};

export default AboutUs;
