import React, {Component} from "react";
import Settings from "@material-ui/icons/Settings";
import PostCreator from "../PostCreator/PostCreator";
import "./publication.css";

export class Publication extends Component {
    static displayName = Publication.name;

    constructor(props){
        super(props);

    }

    render() {
        return (
            <section className="publications-container">
                <PostCreator />
                <div className="publication col-4 place-2">
                    <div className="publication-header"><h2 className="name">Name</h2><Settings className="settings"/></div>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                       ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                       eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                       deserunt mollit anim id est laborum.</p>
                    <div className="panel">
                       <button className="social-button1">Me gusta</button>
                       <button className="social-button1">Comentar</button>
                       <button className="social-button1">Compartir</button>
                    </div>
                </div>

                <div className="publication col-4 place-2">
                    <div className="publication-header"><h2 className="name">Name</h2><Settings className="settings"/></div>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                       ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                       eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                       deserunt mollit anim id est laborum.</p>
                    <div className="panel">
                       <button className="social-button1">Me gusta</button>
                       <button className="social-button1">Comentar</button>
                       <button className="social-button1">Compartir</button>
                    </div>
                </div>
            </section>
        )
    }
}