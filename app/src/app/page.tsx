import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";
import Slide from "@/components/Slide";
import Landing from "@/components/Main Section/Landing";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-between w-screen min-h-screen bg-background text-text">
        <Header />
        <Slide>
          <Landing />
        </Slide>
        <MainSection />
        <Footer />
      </div>
    </div>
  );
}
