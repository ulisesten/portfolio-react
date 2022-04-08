import React, { Component } from "react";
import CoursesList from "./CoursesList/CoursesList";
import CourseSyllabus from "./CourseSyllabus/CourseSyllabus";

export default class LeftSideBarV2 extends Component {
    constructor(props){
        super(props)

        this.state = {
            course_info: null,
            showCourses: true,
            showSyllabus: false
        }

    }

    /*componentDidMount() {
        this.populateLanguageData();
    }

    async populateLanguageData() {
        const url = "https://the-code-api.herokuapp.com/api/courses";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ languages: data, loading: false });
    }

    onClickCourse = (e) =>{
        //let obj = {id: e.target.id, name: e.target.innerText}
        //this.props.setRootSyllabusState(obj);  
        this.setState({showSyllabus: true, showCourses: false});
    }*/

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
        
        return (
            <div className="sidebar-container place-0 col-2">
                <div className="sidebar">
                    {contentToShow}
                </div>
            </div>
        );
    }

    

}