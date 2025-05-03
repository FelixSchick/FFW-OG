import "./NavBar.css";
import { useState, useEffect } from "react";
import { scroller } from "react-scroll/modules";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import fwLogoImg from "../assets/fw-og-logo.png";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  let navigate = useNavigate();

  function refreshPage() {
    window.location.reload();
  }

  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <nav className={`navbar ${show ? "navbar--visible" : "navbar--hidden"}`}>
        <div className="logo">
          <RouterLink to="/">
            <img src={fwLogoImg} alt="Logo der Freiwilligen Feuerwehr Oberbillig" />
          </RouterLink>
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
            <a
              onClick={() => {
                setChecked(false);
                setOpen(false);
                goToHomeAndScroll("infoscroll");
              }}
            >
              Informationen
            </a>
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
