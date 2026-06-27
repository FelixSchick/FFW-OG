import "./Footer.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll/modules";
import fwLogoImg from "../assets/fw-og-logo.png";

function Footer() {
  const navigate = useNavigate();

  async function goToHomeAndScroll(element: string) {
    await navigate("/");
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  }

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-logo">
            <RouterLink to="/">
              <img src={fwLogoImg} alt="Freiwillige Feuerwehr Oberbillig" />
            </RouterLink>
          </div>
          <p className="footer-tagline">
            Ihre Feuerwehr vor Ort.
            <br />
            24/7 einsatzbereit.
          </p>
        </div>
        <div className="footer-col">
          <p className="footer-col-label">Navigation</p>
          <ul className="footer-links">
            <li>
              <button onClick={() => goToHomeAndScroll("fbscroll")}>
                Aktivitäten
              </button>
            </li>
            <li>
              <button onClick={() => goToHomeAndScroll("infoscroll")}>
                Informationen
              </button>
            </li>
            <li>
              <button onClick={() => goToHomeAndScroll("supportScroll")}>
                Mitglied werden
              </button>
            </li>
            <li>
              <RouterLink to="/impressum">Impressum</RouterLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-col-label">Kontakt</p>
          <div className="footer-contact">
            <p className="footer-contact-item">
              <a href="tel:+4965018034163">(+49) 65 01 / 80 34 163</a>
            </p>
            <p className="footer-contact-item">
              <a href="mailto:foerderverein@feuerwehr-oberbillig.de">
                foerderverein@feuerwehr-oberbillig.de
              </a>
            </p>
            <p className="footer-contact-item">
              <a
                href="https://www.facebook.com/feuerwehr.oberbillig/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <p>©{new Date().getFullYear()} Freiwillige Feuerwehr Oberbillig</p>
        <a
          href="https://github.com/FelixSchick"
          target="_blank"
          rel="noreferrer"
        >
          Webdesign von Felix Schick
        </a>
      </div>
    </footer>
  );
}
export default Footer;
