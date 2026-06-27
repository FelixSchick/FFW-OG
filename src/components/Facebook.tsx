import React from "react";

import "./Facebook.css";

function Facebook() {
  React.useEffect(() => {
    const loadFacebookSDK = () => {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.FB) {
          window.FB.init({
            appId: "401715865601282",
            xfbml: true,
            version: "v16.0",
          });
          window.FB.XFBML.parse();
        } else {
          console.error("Facebook SDK not loaded");
        }
      };
      document.body.appendChild(script);
    };

    if (!window.FB) {
      loadFacebookSDK();
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <React.Fragment>
      <div className="activities" id="fbscroll">
        <h2 className="section-title">Aktivitäten</h2>
        <div className="section-title-bar" />
        <p className="activities-description">
          Folgen Sie uns auf Facebook, um über aktuelle Einsätze und
          Veranstaltungen informiert zu bleiben.
        </p>
        <div className="fb-root"></div>
        <div className="fb-card">
          <div id="fb-root"></div>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/feuerwehr.oberbillig/"
            data-tabs="timeline"
            data-width="500"
            data-height="750"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Facebook;
