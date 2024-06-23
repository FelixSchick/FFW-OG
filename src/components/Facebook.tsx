import React, { useState, useEffect } from "react";

import "./Facebook.css";

function Facebook() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <div
            className="fb-page"
            data-href="https://www.facebook.com/feuerwehr.oberbillig/"
            data-tabs="timeline"
            data-width={width - 100}
            data-height="750"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Facebook;
