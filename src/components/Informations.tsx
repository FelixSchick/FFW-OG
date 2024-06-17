import "./Informations.css";

function Informations() {
  return (
    <div className="info-container">
      <div id="infoscroll">
        <h1 className="header">Informationen</h1>
        <div className="burnplants-container">
          <a
            href="https://www.konz.de/de/buergerservice/leistungen/RLP:entry:239475/verbrennen-pflanzlicher-abfaelle/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="burnplants-image">
              <div className="burnplants-text">
                <h2>Verbrennen pflanzlicher Abfälle</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="flood-container">
          <a
            href="https://www.hochwasser.rlp.de/flussgebiet/mosel/wasserbillig"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flood-image">
              <div className="flood-text">
                <h2>Hochwasser</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="flash-flood-map-container">
          <a
            href="https://gda-wasser.rlp-umwelt.de/GDAWasser/client/gisclient/index.html?applicationId=106722&contextId=112404"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flash-flood-map-image">
              <div className="flash-flood-map-text">
                <h2>Sturzflutkarte</h2>
                <hr className="solid-seperator" />
                <a
                  href="https://www.konz.de/de/bauen-wohnen/hochwasser-starkregenvorsorge/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="prevent-btn">Vorsorge</button>
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Informations;
