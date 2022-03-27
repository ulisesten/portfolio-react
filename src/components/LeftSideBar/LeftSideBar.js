import { Language } from "@material-ui/icons";
import React, { Component } from "react";
import { languages } from "../../data/lang";

export default class LeftSideBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            languages: [],
            loading: true,
        }

        this.props = props;

    }

    componentDidMount() {
        this.populateLanguageData();
    }

    async populateLanguageData() {
        const url = "http://localhost:8081/api/courses";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ languages: data, loading: false });
      }


    render() {
        let langs = this.state.languages;

        let sidebarContent = this.state.loading ? 
        (
            <>Cargando...</>

        ) : (

            <div className="sidebar">{langs.map((lang) => (
                <div key={lang.id} className="list-element">{lang.name}</div>
            ))}</div>

        )
        
        return (
            <div className="sidebar-container place-0 col-3">
                {this.props.visibility? (sidebarContent) : (<></>)}
            </div>
        );
    }

    

}