import "./Hero.css";

import { Link } from "react-scroll/modules";

function Hero() {
  return (
    <div id="heroscroll">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Wir sind da wenn du uns brauchst!</h1>
          <p>24/7 356 Tage im Jahr sind wir für dich einsatzbereit!</p>
          <button
            className="button"
            onClick={() => {
              <Link
                activeClass="active"
                to="supportScroll"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              />;
            }}
          >
            Unterstütze uns!
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
