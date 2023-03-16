import React, { useState} from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { Publication } from "../components/Publication/Publication";
import LeftSideBarV2 from "../components/LeftSideBar/LeftSidebarV2";
import { isMobile } from "react-device-detect";

import "../index.css";
//import "../components/ProjectsSection/projects_section.css";
import CourseContentV2 from "../components/CourseContent/CourseContentV2";
//import LearnersChatV2 from "../components/LearnersChat/LearnersChatV2";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ProjectsSection } from "../components/ProjectsSection/ProjectsSection";

let showLeftBar = isMobile ? false : true;

export default function Home({token}) {
  
  const [leftBarVisibility, setLeftBarVisibility] = useState(showLeftBar);
  const [topicState, setTopicState] = useState(null);
  const [courseId, setCourseId] = useState(null);

  /*if(!token) {
    return <Redirect to='/login' />
  }*/

  return (
    <React.StrictMode>
      <div className="container">

        <Navigation rootSideBar={leftBarVisibility} setRootSideBar={setLeftBarVisibility} />
        <div className="body-container">
          <ProjectsSection />
          <LeftSideBarV2 visibility={leftBarVisibility} setRootTopicState={setTopicState}/>
          <div className="right-section-container col-3 place-9"> 
             
          </div>
        </div>
        
      </div>
    </React.StrictMode>
  )

}