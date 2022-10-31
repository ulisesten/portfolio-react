import React, { Component, useEffect } from 'react';
import { course_syllabus_url } from '../../../data/urls';

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
        const url = course_syllabus_url + this.props.syllabusInfo.id;
        const response = await fetch(url);
        const data = await response.json();
        
        this.setState({ content: data.result, loading: false });
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
                        className="syllabus-header-start"
                        onClick={this.onClickBack}>
                            Cursos
                    </span>
                    <span className='syllabus-header'>
                        {this.props.syllabusInfo.name}
                    </span>
                    <span className='syllabus-header-end'>

                    </span>
                </h4>
                <div className='list-container'>
                    {this.state.content.map( el => (
                            <div key={el.id} id={el.id} className="list-element" onClick={this.onClickTopic}>{el.title}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}