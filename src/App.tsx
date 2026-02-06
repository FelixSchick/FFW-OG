import "./App.css";

import Hero from "./components/Hero";
import OneHundertHero from "./components/special/100Hero";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <OneHundertHero />
      </div>
      <div className="content" id="contentScroll">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
