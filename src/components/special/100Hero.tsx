import "./100Hero.css";

import { Link } from "react-scroll";
import DateRevealFlip from "./DateRevealFlip";

function Hero() {


  return (
    <div id="heroscroll">
      <div className="hero-image">
        <div className="hero-date">
            <DateRevealFlip/>
        </div>
        
        <div className="hero-text">
    
        </div>
        <Link
          to="contentScroll"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <div className="arrow" />
        </Link>
      </div>
    </div>
  );
}
export default Hero;
