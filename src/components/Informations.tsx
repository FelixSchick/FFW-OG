import "./Informations.css";
import burnplantsImg from "../assets/burnplants.jpg";
import floodImg from "../assets/flood.jpg";
import flashFloodImg from "../assets/flash-flood-map.jpg";

const SIMPLE_CARDS = [
  {
    key: "burnplants",
    bg: burnplantsImg,
    title: "Verbrennen pflanzlicher Abfälle",
    href: "https://www.konz.de/de/buergerservice/leistungen/RLP:entry:239475/verbrennen-pflanzlicher-abfaelle/",
  },
  {
    key: "flood",
    bg: floodImg,
    title: "Hochwasser",
    href: "https://www.hochwasser.rlp.de/flussgebiet/mosel/wasserbillig",
  },
];

function Informations() {
  return (
    <div className="info-container">
      <div id="infoscroll">
        <h2 className="section-title">Informationen</h2>
        <div className="section-title-bar" />
        {SIMPLE_CARDS.map((card) => (
          <div key={card.key} className="info-card-container">
            <a href={card.href} target="_blank" rel="noreferrer">
              <div
                className="info-card-image"
                style={{ backgroundImage: `url(${card.bg})` }}
              >
                <div className="info-card-text">
                  <h3>{card.title}</h3>
                </div>
              </div>
            </a>
          </div>
        ))}
        <div className="info-card-container">
          <a
            href="https://gda-wasser.rlp-umwelt.de/GDAWasser/client/gisclient/index.html?applicationId=106722&contextId=112404"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="info-card-image"
              style={{ backgroundImage: `url(${flashFloodImg})` }}
            >
              <div className="info-card-text">
                <h3>Sturzflutkarte</h3>
                <hr className="solid-seperator" />
                <button
                  className="prevent-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      "https://www.konz.de/de/bauen-wohnen/hochwasser-starkregenvorsorge/",
                      "_blank",
                      "noreferrer"
                    );
                  }}
                >
                  Starkregen Vorsorge
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Informations;
