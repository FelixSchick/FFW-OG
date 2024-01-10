import "./App.css";

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Hero />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
