import React, { useState} from "react";
import ReactDom from "react-dom";
import { isMobile } from "react-device-detect";
import { Navigation } from "./components/Navigation/Navigation";
import { Publication } from "./components/Publication/Publication";
import { Footer } from "./components/Footer/Footer";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import CourseContent from "./components/CourseContent/CourseContent";
import "./index.css";

import "./components/Navigation/navigation.css";
import "./components/Publication/publication.css";
import "./components/LeftSideBar/leftSideBar.css";
import "./components/PostCreator/postCreator.css";
import "./components/CourseContent/courseContent.css";

const showLeftBar = isMobile ? false : true;

function Home() {
  

  const [leftBarVisibility, setLeftBarVisibility] = useState(showLeftBar);

  return (
      <div className="container">
        <Navigation rootSideBar={setLeftBarVisibility} />
        <Publication/>
        <LeftSideBar visibility={leftBarVisibility}/>
        <CourseContent/>
        <Footer/>
      </div>
  )
}

ReactDom.render(<Home />, document.getElementById("root"));
