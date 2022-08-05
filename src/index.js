import React from "react";
import reactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

reactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);




