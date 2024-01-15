import "./Hero.css";

import { scroller } from "react-scroll/modules";
import { useNavigate } from "react-router-dom";

function Hero() {
  let navigate = useNavigate();

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
    <div id="heroscroll">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Wir sind da wenn du uns brauchst!</h1>
          <p>24/7 356 Tage im Jahr sind wir für dich einsatzbereit!</p>
          <button
            className="button"
            onClick={() => goToHomeAndScroll("supportScroll")}
          >
            Unterstütze uns!
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
