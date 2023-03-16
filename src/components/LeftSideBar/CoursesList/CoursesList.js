import React , {Component} from 'react';
import { courses_list_url } from '../../../data/urls';
import {CLineIcon, CplusplusLineIcon, JavaPlainIcon}  from 'react-devicons';
import "./profile-section.css";


const info = {
    name: "Ulises Martínez Elías",
    description: "Mi talento más grande es llevar las cosas más allá",
    image_url: "https://raw.githubusercontent.com/ulisesten/portfolio/main/assets/IMG_20191009_163015%7E2.jpg"
}

export default class CoursesList extends Component {
    constructor(props){
        super(props)

        this.state = {
            info: {},
            loading: true,
        }

    }

    componentDidMount() {
        this.populateLanguageData();
    }

    async populateLanguageData() {
        /*this.setState({ loading: true });

        const url = courses_list_url;
        const response = await fetch(url);
        const data = await response.json();*/

        this.setState({ info: info, loading: false });
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
                                    
                                        <div className='card--container'>
                                            <div className='image--wrapper'>
                                                <div className='profile--image__container'>
                                                    <img className='profile--image' src={this.state.info.image_url}/>
                                                </div>
                                            </div>
                                            <div className='card--wrapper'>
                                                <div className='card--info'>

                                                    <div className='card--info__name'>{this.state.info.name}</div>

                                                    <div className='card--info__description'>{this.state.info.description}</div>

                                                </div>
                                            </div>
                                        </div>
                                }
            </div>
        )
    }
}