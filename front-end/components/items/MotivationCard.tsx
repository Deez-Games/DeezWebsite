import React from "react";

const MotivationCard = ({ icon, title, description }) => {
  return (
    <div>
      <div className="bg-darkBg p-4 flex flex-col items-center justify-center gap-3 gap-3 text-lg max-w-[24rem] min-h-[20rem] xl:max-w-[400px]">
        <span className="bg-violet text-6xl p-3">{icon}</span>
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default MotivationCard;
