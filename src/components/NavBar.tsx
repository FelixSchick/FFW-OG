import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="..\src\assets\og-logo.png"
            alt="Logo der Gemeinde Oberbillig"
          />
        </div>
        <div className="name">
          {" "}
          <a>Feuerwehr Oberbillig</a>{" "}
        </div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Activities</a>
          </li>
          <li>
            <a>Information</a>
          </li>
          <li>
            <a>Join Us</a>
          </li>
        </ul>
        <label className="burger">
          <input type="checkbox" id="burger" onClick={() => setOpen(!open)} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </nav>
    </div>
  );
}
export default NavBar;
