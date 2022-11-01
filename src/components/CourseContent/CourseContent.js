import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-seaside-dark';
import { course_content_url } from '../../data/urls';
import ContentPresenter from '../../Utils/ContentPresenter';
import "./courseContent.css";

/** Icons */
import Public from '@mui/icons-material/Public';
import Download from '@mui/icons-material/Download'

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
        const url = course_content_url + (this.props.rootTopicState? this.props.rootTopicState.id : "c01_topic01");
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ content: data.result, loading: false, code: true });
        this.props.setRootTopicState(null);
    }


    render(){

        let content = this.state.content? this.state.content : null;

        let renderContent = this.state.content? (this.state.loading? (<div className='course-content col-5 place-7'>Cargando...</div>) : (
            <div className='course-content-container col-6 place-6'>
                <div className='course-content'>
                    <h3>{content.title}</h3>
                    <div className='course-content-child'>
                    {(new ContentPresenter(content.content)).presentContent().map((el, index) => (
                        <div key={index}>{el.type == "text"? (<p>{el.content}</p>) : (<SyntaxHighlighter style={style} language="c" showLineNumbers={true}>{el.content}</SyntaxHighlighter>)}</div>
                    ))}
                    </div>
                    <div className="course-content-toolbar">
                        <Public className="icon" />
                        <Download className="icon" />
                    </div>
                </div>
                
            </div>)) : (
                <div className='course-content-container col-6 place-6'>
                    <div className='course-content'>
                        <h3>¡Bienvenido!</h3>
                        <p>Elije uno de los cursos a tu izquierda y empieza a aprender</p>
                    </div>
                </div>
            );
        

        return renderContent;
        
    }
}