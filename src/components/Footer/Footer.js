import React, {Component} from "react";

export class Footer extends Component {
    static displayName = Footer.name;

    constructor(props){
        super(props)
    }

    render(){
        return (
            <footer>
                <h2>this is the footer</h2>
                <h2>this is the footer</h2>
            </footer>
        )
    }
}