import "./App.css";

import Hero from "./components/Hero";
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
        <Hero />
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
