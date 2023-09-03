import "./App.css";
import Facebook from "./components/Facebook";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Support from "./components/Support";

function App() {
  return (
    <>
      {" "}
      <NavBar />
      <Hero />
      <Support />
    </>
  );
}

export default App;
