import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-scroll/modules";

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
            <Link
              activeClass="active"
              to="heroscroll"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <a>Activities</a>
            </Link>
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
