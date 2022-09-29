import Language from "@mui/icons-material/Language";
import React, { Component } from "react";
import { languages } from "../../data/lang";

export default class LeftSideBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            languages: [],
            loading: true,
        }

    }

    componentDidMount() {
        this.populateLanguageData();
    }

    async populateLanguageData() {
        const url = "https://the-code-api.herokuapp.com/api/courses";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ languages: data, loading: false });
    }

    onClickLangage = (e) =>{
        let obj = {id: e.target.id, name: e.target.innerText}
        this.props.setRootSyllabusState(obj);  
    }

    render() {
        let langs = this.state.languages;

        let sidebarContent = this.state.loading ? 
        (
            <>Cargando...</>

        ) : (

            <div className="sidebar">
                <h4>Lenguajes</h4>
                {langs.map(
                    (lang) => (
                        <div key={lang.id} id={lang.id} onClick={this.onClickLangage} className="list-element">{lang.name}</div>
                    )
                )}
            </div>

        )
        
        return (
            <div className="sidebar-container place-0 col-2">
                {this.props.visibility? (sidebarContent) : (<></>)}
            </div>
        );
    }

    

}