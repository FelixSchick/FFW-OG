import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Snowfall from 'react-snowfall';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    {/*<Snowfall 
     color="#ffffffff" 
     snowflakeCount={400}
     style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 9999 }}
   /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
