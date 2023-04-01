import React from 'react';
import './App.css'
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <div className="Content">
            <Header />
            <MainSection />
            <Footer />
        </div>
    </div>
  );
}

export default App;
