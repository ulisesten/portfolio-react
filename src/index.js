import React from "react";
import ReactDom from "react-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Publication } from "./components/Publication/Publication";
import { Footer } from "./components/Footer/Footer";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import "./index.css";
import "./components/Navigation/navigation.css";
import "./components/Publication/publication.css";
import "./components/LeftSideBar/leftSideBar.css"
import "./components/PostCreator/postCreator.css"

function Main() {
  return (
      <div className="container">
        <Navigation/>
        <Publication/>
        <LeftSideBar/>
        <Footer/>
      </div>
  )
}

ReactDom.render(<Main />, document.getElementById("root"));
