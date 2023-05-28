import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/main section/NewsLetter";
import Slide from "@/components/Slide";
import Landing from "@/components/main section/Landing";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-between w-screen min-h-screen bg-darkGrey text-white">
        <Header />
        <Slide>
          <Landing />
        </Slide>
        <MainSection />
        <Slide>
          <NewsLetter />
          <Footer />
        </Slide>
      </div>
    </div>
  );
}
