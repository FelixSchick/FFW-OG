import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <p>©{new Date().getFullYear()} Freiwillige Feuerwehr Oberbillig</p>
      <p>
        <a href="https://github.com/FelixSchick">Webdesign von Felix Schick</a>
      </p>
    </div>
  );
}
export default Footer;
