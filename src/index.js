import React, { useState} from "react";
import ReactDom from "react-dom";
import { isMobile } from "react-device-detect";
import { Navigation } from "./components/Navigation/Navigation";
import { Publication } from "./components/Publication/Publication";
import { Footer } from "./components/Footer/Footer";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import CourseContent from "./components/CourseContent/CourseContent";
import LanguageSyllabus from "./components/LanguageSyllabus/LanguageSyllabus";
import LeftSideBarV2 from "./components/LeftSideBar/LeftSidebarV2";

import "./index.css";
import "./components/Navigation/navigation.css";
import "./components/Publication/publication.css";
import "./components/LeftSideBar/leftSideBar.css";
import "./components/PostCreator/postCreator.css";
import "./components/CourseContent/courseContent.css";
import "./components/LanguageSyllabus/languageSyllabus.css";

let showLeftBar = isMobile ? false : true;

function Home() {
  
  const [leftBarVisibility, setLeftBarVisibility] = useState(showLeftBar);
  const [languageSyllabusState, setLanguageSyllabusState] = useState(null);
  const [topicState, setTopicState] = useState(null);

  return (
      <div className="container">
        <Navigation rootSideBar={setLeftBarVisibility} />
        <Publication/>
        <LeftSideBarV2 setRootTopicState={setTopicState}/>
        <CourseContent rootTopicState={topicState} setRootTopicState={setTopicState}/>
        <Footer/>
      </div>
  )

}

ReactDom.render(<Home />, document.getElementById("root"));
