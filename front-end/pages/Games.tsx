import React, {useState} from "react";
import AboutUs from "../components/sections/AboutUs";
import OurValues from "../components/sections/OurValues";
import DrivesUs from "../components/sections/DrivesUs";
import ContactUs from "../components/sections/ContactUs";
import GamesTiles from "../components/sections/GamesTiles";


const Games = () => {
  const onClose = () => {setShowModal(false)}
  const [showModal,setShowModal] = useState (false)
  return (
    <>
      <GamesTiles />
      <AboutUs />
      <DrivesUs />
      <OurValues />
      <ContactUs />
    </>
  );
};

export default Games;
