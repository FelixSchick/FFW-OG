import "./Support.css";

function Support() {
  return (
    <div className="support" id="supportScroll">
      <div className="support-text">
        <h1>Förderverein</h1>
        <h2>Unterstützen Sie die Freiwillige Feuerwehr Oberbillig!</h2>
        <p>
          Die Freiwillige Feuerwehr Oberbillig engagiert sich aktiv für Ihre
          Sicherheit und den Schutz der Gemeinschaft. Sie setzt modernes
          Equipment, Schulungen und die Ausbildung des Nachwuchses ein, um immer
          einsatzbereit zu sein. Deshalb bitten wir Sie herzlich, den im Jahr
          2012 gegründeten Förderverein der Freiwilligen Feuerwehr Oberbillig zu
          unterstützen. Füllen Sie die <b>Anmeldung</b> aus, senden Sie sie an
          den Förderverein oder geben Sie sie persönlich ab. Der
          Jahres-Mitgliedsbeitrag beträgt <b>12,- €</b>, und Sie können nach
          eigenem Ermessen eine einmalige Sonderspende hinzufügen. Ihre Spenden
          sind steuerlich abzugsfähig. Für weitere Informationen kontaktieren
          Sie uns per E-Mail unter{" "}
          <b>
            <a
              className="email-support"
              href="mailto: foerderverein@feuerwehr-oberbillig.de"
            >
              foerderverein@feuerwehr-oberbillig.de
            </a>
          </b>
          .
        </p>
      </div>
      <div className="support-become-member">
        <a href="../assets/Mitgliedsantrag_2020.pdf" download>
          <button>MITGLIEDSANTRAG HERUNTERLADEN</button>
        </a>
      </div>
    </div>
  );
}
export default Support;
