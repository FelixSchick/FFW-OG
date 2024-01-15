import React from "react";
import MediaQuery from "react-responsive";

import "./Facebook.css";

function Facebook() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=401715865601282&autoLogAppEvents=1";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="activities" id="fbscroll">
        <h1>Aktivitäten</h1>
        <div className="fb-root"></div>
        <div className="fb-container">
          <div id="fb-root"></div>
          <MediaQuery minWidth={800}>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/feuerwehr.oberbillig/"
              data-tabs="timeline"
              data-width="450"
              data-height="750"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            ></div>
          </MediaQuery>
          <MediaQuery maxHeight={799}>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/feuerwehr.oberbillig/"
              data-tabs="timeline"
              data-width="300"
              data-height="750"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            ></div>
          </MediaQuery>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Facebook;
