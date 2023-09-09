import React from "react";

const ContactUs = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col sm:flex-row-reverse items-center sm:justify-evenly px-4 sm:px-12 2xl:px-32 py-8 sm:py-16 md:py-20 customGradientVioletLeft gap-6"
    >
      <div className="flex flex-col gap-2 md:gap-0 text-right">
        <h4 className="text-2xl lg:text-4xl">GOT A QUESTION?</h4>
        <h4 className="text-2xl lg:text-4xl">WANT TO PARTNER UP?</h4>
        <h3 className="text-4xl lg:text-7xl font-bold">CONTACT US!</h3>
      </div>
      <div className="bg-brightBg text-black text-lg lg:text-2xl xl:text-3xl text-center p-6 md:p-12 lg:px-20 lg:py-12 flex flex-col items-center max-w-[400px] md:max-w-[500px]">
        <div className="text-left">
          Bussiness and general inquiries: <br />
          <span className="text-violet font-bold">
            contactdeezgames@gmail.com
          </span>
        </div>
        <br />
        <div className="text-left">
          player support, game questions:
          <br />
          <span className="text-violet font-bold">
            supportdeezgames@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
