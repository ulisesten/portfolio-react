import React, { Component, useEffect } from 'react';
import { course_syllabus } from '../../../data/urls';

export default class CourseSyllabus extends Component {
    constructor(props){
        super(props)

        this.state = {
            content: [],
            loading: true
        }

    }

    componentDidMount(){
        this.populateSyllabusData();
    }

    async populateSyllabusData() {
        const url = course_syllabus + this.props.syllabusInfo.id;
        const response = await fetch(url);
        const data = await response.json();
        
        this.setState({ content: data, loading: false });
    }

    onClickBack = ()=>{
        this.props.setSyllabusVisibility();
    }

    onClickTopic = (e) => {
        this.props.setRootTopicState({id: e.target.id, title: e.target.innerText});
    }

    render(){
        return (
            <div>
                <h4>
                    <span
                        className="list-header"
                        onClick={this.onClickBack}>
                            Cursos
                    </span>
                    <span>
                        / {this.props.syllabusInfo.name}
                    </span>
                </h4>
                {this.state.content.map( el => (
                    <div key={el.id} id={el.id} className="list-element" onClick={this.onClickTopic}>{el.title}</div>
                ))
                }
            </div>
        )
    }
}