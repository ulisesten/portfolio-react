import React, { useState} from "react";
import ReactDom from "react-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Publication } from "./components/Publication/Publication";
import { Footer } from "./components/Footer/Footer";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import CourseContent from "./components/CourseContent/CourseContent";
import LanguageSyllabus from "./components/LanguageSyllabus/LanguageSyllabus";
import LeftSideBarV2 from "./components/LeftSideBar/LeftSidebarV2";
import { isMobile } from "react-device-detect";

import "./index.css";

let showLeftBar = isMobile ? false : true;

function Home() {
  
  const [leftBarVisibility, setLeftBarVisibility] = useState(showLeftBar);
  const [languageSyllabusState, setLanguageSyllabusState] = useState(null);
  const [topicState, setTopicState] = useState(null);

  return (
    <React.StrictMode>
      <div className="container">
        <Navigation rootSideBar={leftBarVisibility} setRootSideBar={setLeftBarVisibility} />
        <Publication/>
        <LeftSideBarV2 visibility={leftBarVisibility} setRootTopicState={setTopicState}/>
        {
        //<CourseContent rootTopicState={topicState} setRootTopicState={setTopicState}/> 
      }
        <Footer/>
      </div>
      </React.StrictMode>
  )

}

ReactDom.render(<Home />, document.getElementById("root"));
