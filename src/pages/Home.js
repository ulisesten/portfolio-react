import React, { useState} from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { Publication } from "../components/Publication/Publication";
import CourseContent from "../components/CourseContent/CourseContent";
import LeftSideBarV2 from "../components/LeftSideBar/LeftSidebarV2";
import { isMobile } from "react-device-detect";

import "../index.css";
import LearnersChat from "../components/LearnersChat/LearnersChat";

let showLeftBar = isMobile ? false : true;

export default function Home() {
  
  const [leftBarVisibility, setLeftBarVisibility] = useState(showLeftBar);
  const [topicState, setTopicState] = useState(null);

  return (
    <React.StrictMode>
      <div className="container">

        <Navigation rootSideBar={leftBarVisibility} setRootSideBar={setLeftBarVisibility} />
        <div className="body-container">

          <LeftSideBarV2 visibility={leftBarVisibility} setRootTopicState={setTopicState}/>
          <Publication/>
          <div className="right-section-container col-6 place-3">
            <CourseContent rootTopicState={topicState} setRootTopicState={setTopicState}/> 
            <LearnersChat />
          </div>
        </div>
        
      </div>
    </React.StrictMode>
  )

}