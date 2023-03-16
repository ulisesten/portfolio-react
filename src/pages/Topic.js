import React, { useState} from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { useParams } from 'react-router-dom';
import CourseContentV2 from "../components/CourseContent/CourseContentV2";
import LeftSideBarV2 from "../components/LeftSideBar/LeftSidebarV2";
import { isMobile } from "react-device-detect";

import "../index.css";

let showLeftBar = isMobile ? false : true;

export default function Topic() {

    const { topic } = useParams();
    const [leftBarVisibility, setLeftBarVisibility] = useState(showLeftBar);
    const [topicState, setTopicState] = useState(topic);
    const [courseId, setCourseId] = useState(null);

    return (
        <React.StrictMode>
            <div className="container">
                
                <Navigation     rootSideBar={leftBarVisibility} setRootSideBar={setLeftBarVisibility} />
                <LeftSideBarV2  visibility={leftBarVisibility}  setRootTopicState={setTopicState}/>
                <CourseContentV2  rootTopicState={topicState}     setRootTopicState={setTopicState} setRootCourseId={setCourseId} context="primary"/> 
                
            </div>
        </React.StrictMode>
    )

}