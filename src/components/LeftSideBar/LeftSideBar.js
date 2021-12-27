import { Language } from "@material-ui/icons";
import React, { Component } from "react";
import { languages } from "../../data/lang";

export default class LeftSideBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            languages: [],
        }

    }


    render() {
        let langs = languages()
        
        return (
            <div className="sidebar-container place-0 col-3">
                <div className="sidebar">
                    {langs.map((lang) => (
                        <div key={lang.id} className="list-element">{lang.lang}</div>
                    ))}
                </div>
            </div>
        );
    }

}