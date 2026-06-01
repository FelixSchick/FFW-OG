import "./Impressum.css";
import { Link } from "react-router-dom";

function Impressum() {
  return (
    <div className="impressum-page">
      <div className="impressum-banner">
        <h1>Impressum</h1>
        <div className="impressum-accent-line" />
      </div>

      <div className="impressum-body">
        <section className="impressum-section">
          <h2>Angaben gemäß § 5 TMG</h2>
          <div className="impressum-card">
            <p>Freiwillige Feuerwehr Oberbillig</p>
            <p>Kirchstraße 7</p>
            <p>54331 Oberbillig</p>
          </div>
        </section>

        <section className="impressum-section">
          <h2>Kontakt</h2>
          <div className="impressum-card">
            <p>
              <span className="impressum-label">Telefon</span>
              <a href="tel:+4965018034163">(+49) 65 01 / 80 34 163</a>
            </p>
            <p>
              <span className="impressum-label">E-Mail</span>
              <a href="mailto:homepage@feuerwehr-oberbillig.de">
                homepage@feuerwehr-oberbillig.de
              </a>
            </p>
            <p>
              <span className="impressum-label">Internet</span>
              <a
                href="https://www.feuerwehr-oberbillig.de"
                target="_blank"
                rel="noreferrer"
              >
                www.feuerwehr-oberbillig.de
              </a>
            </p>
          </div>
        </section>

        <section className="impressum-section">
          <h2>Verantwortlich für den Inhalt</h2>
          <div className="impressum-card">
            <p>Roland Schick</p>
            <p className="impressum-note">gemäß §10 Abs. 3 MDStV (Adresse wie oben)</p>
          </div>
        </section>
      </div>

      <div className="impressum-back">
        <Link to="/">← Zurück zur Startseite</Link>
      </div>
    </div>
  );
}

export default Impressum;
