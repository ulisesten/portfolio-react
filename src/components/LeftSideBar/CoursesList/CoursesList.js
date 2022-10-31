import React , {Component} from 'react';
import { courses_list_url } from '../../../data/urls';
import {CLineIcon, CplusplusLineIcon, JavaPlainIcon}  from 'react-devicons';

export default class CoursesList extends Component {
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
        this.setState({ loading: true });

        const url = courses_list_url;
        const response = await fetch(url);
        const data = await response.json();

        this.setState({ languages: data.result, loading: false });
    }

    onClickCourse = (e)=>{
        this.props.setCourseSyllabusInfo({id: e.target.id, name: e.target.innerText});
    }

    getIcon = (lang) => {
        if(lang == 'C')
            return <CLineIcon className="list-element-icon"/>
        else if(lang == 'CPP')
            return <CplusplusLineIcon className="list-element-icon"/>
        else if(lang == 'JAVA')
            return <JavaPlainIcon className="list-element-icon"/>
    }

    render(){

        return (
            <div>
                <h4><span className="list-header">Cursos</span></h4>
                {this.state.loading?<div className='list-container load-6'>
                                        <div className="letter-holder">
                                            <div className="l-1 letter">L</div>
                                            <div className="l-2 letter">o</div>
                                            <div className="l-3 letter">a</div>
                                            <div className="l-4 letter">d</div>
                                            <div className="l-5 letter">i</div>
                                            <div className="l-6 letter">n</div>
                                            <div className="l-7 letter">g</div>
                                            <div className="l-8 letter">.</div>
                                            <div className="l-9 letter">.</div>
                                            <div className="l-10 letter">.</div>
                                        </div>
                                    </div>
                                    : 
                                    <div className='list-container'>
                                        {this.state.languages.map(
                                            (lang) => (
                                                <div key={lang.id}
                                                    id={lang.id}
                                                    onClick={this.onClickCourse}
                                                    className="list-element">
                                                        {this.getIcon(lang.lang)}
                                                        {lang.name}
                                                </div>
                                            )
                                        )}
                                </div>}
            </div>
        )
    }
}