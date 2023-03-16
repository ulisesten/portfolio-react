import React, {Component} from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./projects_section.css"

const mProjects = [
    {   
        id: 1,
        name: "App de películas",
        description: "Esta app se conecta a la API de TMDB y muestra las últimas películas ordenadas por popularidad.",
        image_url: "https://raw.githubusercontent.com/ulisesten/portfolio/main/assets/movies1.png"
    },
    {   
        id: 2,
        name: "Reconocimiento de señas",
        description: "Esta app usa un modelo de Tensor Flow Lite para reconocer señas hechas con las manos, utilizando la cámara.",
        image_url: "https://raw.githubusercontent.com/ulisesten/portfolio/main/assets/signs_recognition1.png"
    },
    {   
        id: 3,
        name: "Juego para gatos",
        description: "Esta app usa la librería SDL2 y C++ para crear un sencillo juego para gatos.",
        image_url: "https://raw.githubusercontent.com/ulisesten/portfolio/main/assets/mouse1.png"
    }
]

export class ProjectsSection extends Component {
    static displayName = ProjectsSection.name;

    constructor(props){
        super(props);

        this.state = {
            projects: null
        }
    }

    render() {

        return <div className="projects-section-container col-7 place-2">
                <div><h3 className="section-title">Android</h3></div>
                <div className="projects-section">
                    {mProjects.map( (project, i)=>(
                        <ProjectCard project={project}/>
                    )) }
                </div>
        </div>
    }
}