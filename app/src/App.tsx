import React from 'react';
import './App.css'
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex justify-center">
        <div className="flex flex-col items-center justify-between w-screen min-h-screen bg-[#243a58] text-[#f0f8ff]">
            <Header />
            <MainSection />
            <Footer />
        </div>
    </div>
  );
}

export default App;
