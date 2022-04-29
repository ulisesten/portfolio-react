import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-seaside-dark';
import { course_content } from '../../data/urls';
import "./courseContent.css";

/**themes:
 * atelier-estuary-dark
 * atelier-lakeside-dark
 * atelier-savanna-dark
 * atelier-seaside-dark
 */

export default class CourseContent extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true,
            code: false,
            content: null,
        }
    }

    componentDidMount() {
        this.populateContentData();
    }

    componentDidUpdate () {
        if(this.props.rootTopicState){
            this.populateContentData();
        }
    }

    async populateContentData() {
        const url = course_content + (this.props.rootTopicState? this.props.rootTopicState.id : "c01_topic01");
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ content: data, loading: false, code: true });
        this.props.setRootTopicState(null);
    }


    render(){

        let content = this.state.content? this.state.content : null;

        let handleCode = this.state.code? (
           
            <SyntaxHighlighter style={style} language="c" showLineNumbers={true}>
                { content? `${this.state.content.code.replace(/\\\\\\\\n/g, "${1}")
                                                     .replace(/\\n/g,'\n')
                                                     .replace(/\\\"/g, '\"')
                                                     .replace(/\$\{1\}/g,'\\n')}`: "" }
            </SyntaxHighlighter>
            
        ) : (<>No code example</>);

        let renderContent = content? (this.state.loading? (<div className='course-content col-5 place-7'>Cargando...</div>) : (
            <div className='course-content-container col-6 place-6'>
                <div className='course-content'>
                    <h2>{content.title}</h2>
                    <div>{content.intro}</div>
                        {handleCode}
                    <div>{content.conclusion}</div>
                </div>
            </div>)) : (<></>);
        

        return renderContent;
        
    }
}