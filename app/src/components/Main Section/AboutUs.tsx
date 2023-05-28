import React from "react";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="h-full flex items-center justify-between">
      <div className="w-[48%] shadow-[16px_16px_0px_0px] shadow-violet">
        <img src="/business-meeting.jpg" alt="About us image" />
      </div>
      <div className="w-[48%]">
        <h2 className="text-[7vw]">ABOUT US</h2>
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
    </div>
  );
};

export default AboutUs;
