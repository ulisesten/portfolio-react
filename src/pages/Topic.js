import React, { useState} from "react";
import { Navigation } from "../components/Navigation/Navigation";
import { useParams } from 'react-router-dom';
import CourseContent from "../components/CourseContent/CourseContent";
import LeftSideBarV2 from "../components/LeftSideBar/LeftSidebarV2";
import { isMobile } from "react-device-detect";

import "../index.css";

let showLeftBar = isMobile ? false : true;

export default function Topic() {

    const { topic } = useParams();
    const [leftBarVisibility, setLeftBarVisibility] = useState(showLeftBar);
    const [topicState, setTopicState] = useState(topic);

    return (
        <React.StrictMode>
            <div className="container">
                
                <Navigation     rootSideBar={leftBarVisibility} setRootSideBar={setLeftBarVisibility} />
                <LeftSideBarV2  visibility={leftBarVisibility}  setRootTopicState={setTopicState}/>
                <CourseContent  rootTopicState={topicState}     setRootTopicState={setTopicState}/> 
                
            </div>
        </React.StrictMode>
    )

}