import React from "react";
import ReactDom from "react-dom";
import { Navigation } from "./conponents/Navigation";
import "./index.css";
import "./navigation.css";

function Greeting() {
  return <Navigation />;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
