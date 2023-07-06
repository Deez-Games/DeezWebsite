import React from "react";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center w-full pt-20 pb-32">
      <div className="bg-brightBg py-20 px-24 text-black text-2xl text-center">
        <div className="text-left">
          Bussiness and general inquiries: <br />{" "}
          <span className="text-violet font-bold">
            contactdeezgames@gmail.com
          </span>
        </div>
        <br />
        <div className="text-left">
          player support, game questions:
          <br />{" "}
          <span className="text-violet font-bold">
            supportdeezgames@gmail.com
          </span>
        </div>
      </div>
      <div className="w-[40%] font-bold flex flex-col gap-4 text-right">
        <h4 className="text-4xl">GOT A QUESTION?</h4>
        <h3 className="text-7xl">CONTACT US!</h3>
        <h4 className="text-4xl">WANT TO PARTNER UP?</h4>
      </div>
    </div>
  );
};

export default ContactUs;
