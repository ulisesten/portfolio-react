import { TrendingUpTwoTone } from "@material-ui/icons";
import React, { Component } from "react";

export default class LanguageSyllabus extends Component {
    constructor(props){
        super(props)

        this.state = {
            content: [],
            loading: true,
            enable: true
        }
    }

    componentDidUpdate () {
        if(this.state.enable)
            this.populateSyllabusData() 
    }

    async populateSyllabusData() {
        const url = "https://the-code-api.herokuapp.com/api/syllabus/" + (this.props.rootSyllabusState? this.props.rootSyllabusState.id : "c");
        const response = await fetch(url);
        const data = await response.json();
        
        this.setState({ content: data, enable: false, loading: false });
    }

    onClickBack = () => {
        this.props.setRootSyllabusState(null);
        this.setState({content: [], loading: true, enable: true});
    }

    onClickTopic = (e) => {
        this.props.setRootTopicState({id: e.target.id, title: e.target.innerText})
    }

    render(){
        
        let name = this.props.rootSyllabusState? this.props.rootSyllabusState.name : "";

        return this.props.rootSyllabusState ? (<div className="syllabus-container place-0 col-2">
            <div className="syllabus">
                <h4>
                    <span className="list-element" onClick={this.onClickBack}>Lenguajes</span>
                    <span> / {name}</span>
                </h4>
                {this.state.content.map( el => (
                        <div key={el.id} id={el.id} className="list-element" onClick={this.onClickTopic}>{el.title}</div>
                    ))
                }
                </div>
            </div>
        ) : (<>Cargando...</>);

    }

}