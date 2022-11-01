import React, { Component } from "react";
import CoursesList from "./CoursesList/CoursesList";
import CourseSyllabus from "./CourseSyllabus/CourseSyllabus";
import "./leftSideBar.css";


export default class LeftSideBarV2 extends Component {
    constructor(props){
        super(props)

        this.state = {
            course_info: null,
            showCourses: true,
            showSyllabus: false
        }

    }

    setCourseInfo = (info) => {
        this.setState({course_info: info, showSyllabus: true});
    }

    setSyllabusVisibility = () => {
        this.setState({showSyllabus: false});
    }

    render() {

        let contentToShow = this.state.showSyllabus? (
                <CourseSyllabus
                    syllabusInfo={this.state.course_info}
                    setSyllabusVisibility={this.setSyllabusVisibility}
                    setRootTopicState={this.props.setRootTopicState}
                    />
            ) : (
                <CoursesList setCourseSyllabusInfo={this.setCourseInfo}/>
            );
        
        return this.props.visibility? (
            <div className="sidebar-container place-0 col-2">
                <div className="sidebar">
                    {contentToShow}
                </div>
            </div>
        ) : (<></>);
    }

    

}