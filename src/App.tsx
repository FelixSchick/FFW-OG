import "./App.css";

import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div className="App">
        <NavBar />
        {isHome && <Hero />}
      </div>
      <div className="content" id="contentScroll">‚
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
