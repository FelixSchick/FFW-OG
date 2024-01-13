import "./Informations.css";

function Informations() {
  return (
    <div className="info-container">
      <div id="infoscroll">
        <h1 className="header">Informationen</h1>
        <div className="burnplants-container">
          <a href="https://www.konz.de/de/buergerservice/leistungen/RLP:entry:239475/verbrennen-pflanzlicher-abfaelle/">
            <div className="burnplants-image">
              <div className="burnplants-text">
                <h2>Verbrennen pflanzlicher Abfälle</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="flood-container">
          <a href="https://www.hochwasser.rlp.de/flussgebiet/mosel/wasserbillig">
            <div className="flood-image">
              <div className="flood-text">
                <h2>Hochwasser</h2>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Informations;
