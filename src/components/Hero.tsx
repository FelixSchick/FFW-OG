import "./Hero.css";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <div className="heroSection">
      <img className="heroBackgroundImg" src={hero} alt="Hero" />
    </div>
  );
}
export default Hero;
