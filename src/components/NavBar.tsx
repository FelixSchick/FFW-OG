import "./NavBar.css";
import { useState } from "react";
import { scroller } from "react-scroll/modules";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  let navigate = useNavigate();

  function refreshPage() {
    window.location.reload();
  }

  async function goToHomeAndScroll(element: string) {
    await navigate("/");
    await scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  }

  return (
    <div>
      <nav>
        <div className="logo">
          <img src="../assets/og-logo.png" alt="Logo der Gemeinde Oberbillig" />
        </div>
        <div className="name">
          {" "}
          <a>Feuerwehr Oberbillig</a>{" "}
        </div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li onClick={refreshPage}>
            <RouterLink
              to="/"
              onClick={() => {
                setChecked(false);
                setOpen(false);
              }}
            >
              <a>Home</a>
            </RouterLink>
          </li>
          <li>
            <a
              onClick={() => {
                setChecked(false);
                setOpen(false);
                goToHomeAndScroll("fbscroll");
              }}
            >
              Aktivitäten
            </a>
          </li>
          <li>
            <RouterLink
              to="/impressum"
              onClick={() => {
                setChecked(false);
                setOpen(false);
              }}
            >
              <a>Impressum</a>
            </RouterLink>
          </li>
        </ul>
        <label className="burger">
          <input
            type="checkbox"
            id="burger"
            onClick={() => setOpen(!open)}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </nav>
    </div>
  );
}
export default NavBar;
