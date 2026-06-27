import "./Support.css";

function Support() {
  return (
    <div className="support" id="supportScroll">
      <div className="support-inner">
        <h2 className="section-title">Förderverein</h2>
        <div className="section-title-bar" />
        <div className="support-grid">
          <div className="support-info">
            <h3 className="support-subtitle">
              Unterstützen Sie die Freiwillige Feuerwehr Oberbillig!
            </h3>
            <p>
              Die Freiwillige Feuerwehr Oberbillig engagiert sich aktiv für
              Ihre Sicherheit und den Schutz der Gemeinschaft. Sie setzt
              modernes Equipment, Schulungen und die Ausbildung des Nachwuchses
              ein, um immer einsatzbereit zu sein. Deshalb bitten wir Sie
              herzlich, den im Jahr 2012 gegründeten Förderverein zu
              unterstützen.
            </p>
            <p>
              Für weitere Informationen kontaktieren Sie uns per E-Mail unter{" "}
              <a
                className="email-support"
                href="mailto:foerderverein@feuerwehr-oberbillig.de"
              >
                foerderverein@feuerwehr-oberbillig.de
              </a>
              .
            </p>
          </div>
          <div className="support-action-card">
            <h3 className="support-action-title">Jetzt Mitglied werden</h3>
            <p className="support-action-fee">
              Jahresbeitrag: <strong>12,- €</strong>
            </p>
            <p className="support-action-note">
              Füllen Sie den Mitgliedsantrag aus und senden Sie ihn an den
              Förderverein oder geben Sie ihn persönlich ab. Sonderspenden sind
              möglich.
            </p>
            <a
              href="../assets/Mitgliedsantrag_2020.pdf"
              download
              className="support-download-btn"
            >
              Mitgliedsantrag herunterladen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Support;
